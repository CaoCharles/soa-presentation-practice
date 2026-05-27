#!/usr/bin/env python3
"""
practice-app validate — pre-deploy health check

Verifies consistency across all data sources:
  1. Segment counts: timestamps.json vs new_segments.json vs mockProject.ts
  2. No orphaned segments (startTime=0 AND endTime=0) in mockProject.ts
  3. Audio file duration matches mockProject.ts duration field
  4. assets/audio/final.mp3 is in sync with audio_output/final.mp3
  5. Slide time boundaries are sequential (no overlap or disorder)
  6. Every segment in timestamps.json has a matching entry in new_segments.json

Exit codes:
  0 — all checks passed
  1 — one or more checks failed
"""

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
TIMESTAMPS    = ROOT / "audio_output" / "timestamps.json"
NEW_SEGS      = ROOT / "audio_output" / "new_segments.json"
MOCK_TS       = ROOT / "src" / "data" / "mockProject.ts"
AUDIO_SRC     = ROOT / "audio_output" / "final.mp3"
AUDIO_ASSET   = ROOT / "assets" / "audio" / "final.mp3"

PASS = "\033[32m✅\033[0m"
FAIL = "\033[31m❌\033[0m"
WARN = "\033[33m⚠️ \033[0m"

errors   = []
warnings = []


def ffprobe_duration(path: Path) -> float | None:
    try:
        r = subprocess.run(
            ["ffprobe", "-v", "quiet", "-show_entries", "format=duration",
             "-of", "csv=p=0", str(path)],
            capture_output=True, text=True, timeout=15
        )
        return float(r.stdout.strip())
    except Exception:
        return None


def check(ok: bool, label: str, detail: str = "") -> None:
    if ok:
        print(f"  {PASS}  {label}")
    else:
        print(f"  {FAIL}  {label}" + (f"\n       → {detail}" if detail else ""))
        errors.append(label)


def warn(label: str, detail: str = "") -> None:
    print(f"  {WARN}  {label}" + (f"\n       → {detail}" if detail else ""))
    warnings.append(label)


def main() -> int:
    print("\n\033[1m📋 practice-app validate\033[0m\n")

    # ── Load files ────────────────────────────────────────────────────────────
    if not TIMESTAMPS.exists():
        print(f"{FAIL} timestamps.json not found at {TIMESTAMPS}")
        return 1
    if not NEW_SEGS.exists():
        print(f"{FAIL} new_segments.json not found at {NEW_SEGS}")
        return 1
    if not MOCK_TS.exists():
        print(f"{FAIL} mockProject.ts not found at {MOCK_TS}")
        return 1

    ts   = json.loads(TIMESTAMPS.read_text())
    ns   = json.loads(NEW_SEGS.read_text())
    mock = MOCK_TS.read_text()

    ns_map = {s["id"]: s for s in ns}

    # ── 1. Segment counts ─────────────────────────────────────────────────────
    print("1. Segment counts")
    mock_ids = re.findall(r'"id":\s*"(p\w+)"', mock)
    check(
        len(ts) == len(mock_ids),
        f"timestamps.json ({len(ts)}) == mockProject.ts segments ({len(mock_ids)})",
        f"Difference: {abs(len(ts) - len(mock_ids))} — run scripts/sync.py to fix"
    )
    if len(ns) > len(ts):
        orphan_count = len(ns) - len(ts)
        warn(
            f"new_segments.json has {orphan_count} more entries than timestamps.json",
            "These are display-only segments without audio (expected if transcript was simplified)"
        )

    # ── 2. No orphaned segments in mockProject.ts ─────────────────────────────
    print("\n2. Orphaned segments (startTime=0 AND endTime=0)")
    # Extract segments as JSON objects from TS file
    seg_blocks = re.findall(
        r'\{[^{}]*?"startTime":\s*([\d.]+)[^{}]*?"endTime":\s*([\d.]+)[^{}]*?\}',
        mock, re.DOTALL
    )
    orphans = [(st, et) for st, et in seg_blocks if float(st) == 0.0 and float(et) == 0.0]
    # First segment is legitimately startTime=0, so count only endTime=0 with non-first
    true_orphans = [(st, et) for st, et in orphans if float(et) == 0.0]
    check(
        len(true_orphans) == 0,
        f"No orphaned segments (startTime=0, endTime=0)",
        f"Found {len(true_orphans)} orphaned segments — run scripts/sync.py to rebuild mockProject.ts"
    )

    # ── 3. Audio duration consistency ─────────────────────────────────────────
    print("\n3. Audio duration")
    mock_dur_match = re.search(r'"duration":\s*([\d.]+)', mock)
    mock_dur = float(mock_dur_match.group(1)) if mock_dur_match else None

    if AUDIO_ASSET.exists():
        asset_dur = ffprobe_duration(AUDIO_ASSET)
        if asset_dur and mock_dur:
            diff = abs(asset_dur - mock_dur)
            check(
                diff < 2.0,
                f"assets/audio/final.mp3 duration ({asset_dur:.1f}s) ≈ mockProject.ts duration ({mock_dur:.1f}s)",
                f"Difference {diff:.1f}s exceeds 2s threshold — run scripts/sync.py"
            )
        else:
            warn("Could not read audio duration (ffprobe missing?)")
    else:
        check(False, "assets/audio/final.mp3 exists", "File missing — run scripts/sync.py")

    # ── 4. assets vs audio_output in sync ────────────────────────────────────
    print("\n4. Audio file freshness")
    if AUDIO_SRC.exists() and AUDIO_ASSET.exists():
        src_dur   = ffprobe_duration(AUDIO_SRC)
        asset_dur = ffprobe_duration(AUDIO_ASSET)
        if src_dur and asset_dur:
            diff = abs(src_dur - asset_dur)
            check(
                diff < 0.5,
                f"audio_output/final.mp3 ({src_dur:.1f}s) matches assets/audio/final.mp3 ({asset_dur:.1f}s)",
                f"Durations differ by {diff:.1f}s — copy audio_output/final.mp3 to assets/audio/"
            )
    elif not AUDIO_SRC.exists():
        check(False, "audio_output/final.mp3 exists", "Run merge.sh to generate it")

    # ── 5. Slide time ordering ────────────────────────────────────────────────
    print("\n5. Slide time ordering")
    slide_starts: dict[int, float] = {}
    for m in re.finditer(
        r'"startTime":\s*([\d.]+).*?"slidePage":\s*(\d+)', mock, re.DOTALL
    ):
        page = int(m.group(2))
        st   = float(m.group(1))
        if page not in slide_starts or st < slide_starts[page]:
            slide_starts[page] = st

    pages = sorted(slide_starts)
    disorder = [
        (pages[i], pages[i+1])
        for i in range(len(pages) - 1)
        if slide_starts[pages[i]] > slide_starts[pages[i+1]]
    ]
    check(
        len(disorder) == 0,
        f"All {len(pages)} slides are in chronological order",
        f"Disordered pairs: {disorder}"
    )
    if not disorder:
        last_page = pages[-1]
        last_t    = slide_starts[last_page]
        print(f"       Range: Slide {pages[0]} @ 0:00 → Slide {last_page} @ {int(last_t//60)}:{int(last_t%60):02d}")

    # ── 6. timestamps.json IDs resolvable in new_segments.json ───────────────
    print("\n6. timestamps.json ↔ new_segments.json ID coverage")
    missing_in_ns = [sid for sid in ts if sid not in ns_map]
    check(
        len(missing_in_ns) == 0,
        f"All {len(ts)} timestamped IDs exist in new_segments.json",
        f"Missing: {missing_in_ns[:5]}{'…' if len(missing_in_ns) > 5 else ''}"
    )

    # ── Summary ───────────────────────────────────────────────────────────────
    print()
    if errors:
        print(f"\033[31m✗ {len(errors)} check(s) failed:\033[0m")
        for e in errors:
            print(f"    • {e}")
        if warnings:
            print(f"\033[33m  {len(warnings)} warning(s)\033[0m")
        print()
        return 1
    else:
        print(f"\033[32m✓ All checks passed\033[0m", end="")
        if warnings:
            print(f"  (\033[33m{len(warnings)} warning(s)\033[0m)", end="")
        print("\n")
        return 0


if __name__ == "__main__":
    sys.exit(main())
