#!/usr/bin/env python3
"""
practice-app sync — one-command data sync + optional deploy

After editing TRANSCRIPT_DRAFT.md or regenerating audio, run this to:
  1. Copy audio_output/final.mp3  →  assets/audio/final.mp3
  2. Rebuild src/data/mockProject.ts from timestamps.json
       • Only includes segments with real timestamps (no t=0,0 orphans)
       • Sorted by startTime to match audio order
  3. Run validate.py to confirm everything is consistent
  4. (Optional) git add + commit + push

Usage:
  python3 scripts/sync.py                # sync only, no git push
  python3 scripts/sync.py --push         # sync + commit + push
  python3 scripts/sync.py --dry-run      # preview what would change, no writes
"""

import argparse
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT          = Path(__file__).parent.parent
TIMESTAMPS    = ROOT / "audio_output" / "timestamps.json"
NEW_SEGS      = ROOT / "audio_output" / "new_segments.json"
MOCK_TS       = ROOT / "src" / "data" / "mockProject.ts"
AUDIO_SRC     = ROOT / "audio_output" / "final.mp3"
AUDIO_ASSET   = ROOT / "assets" / "audio" / "final.mp3"
VALIDATE_PY   = ROOT / "scripts" / "validate.py"


def step(msg: str) -> None:
    print(f"\n\033[1m→ {msg}\033[0m")


def ok(msg: str) -> None:
    print(f"  \033[32m✅\033[0m  {msg}")


def fail(msg: str) -> None:
    print(f"  \033[31m❌\033[0m  {msg}")
    sys.exit(1)


def build_mockproject(ts: dict, ns_map: dict, dry_run: bool) -> int:
    """Rebuild mockProject.ts. Returns number of segments written."""

    # Sort by startTime for correct playback order
    ts_sorted = sorted(ts.items(), key=lambda x: x[1]["startTime"])

    missing = [sid for sid, _ in ts_sorted if sid not in ns_map]
    if missing:
        fail(f"{len(missing)} IDs in timestamps.json missing from new_segments.json: {missing[:5]}")

    segments = []
    for sid, timing in ts_sorted:
        ns = ns_map[sid]
        segments.append({
            "id": sid,
            "startTime": round(timing["startTime"], 3),
            "endTime":   round(timing["endTime"],   3),
            "textEn":    ns["textEn"],
            "textZh":    ns["textZh"],
            "slidePage": ns["slidePage"],
        })

    total_duration = max(s["endTime"] for s in segments)

    def fmt_seg(s: dict) -> str:
        te = s["textEn"].replace("\\", "\\\\").replace('"', '\\"')
        tz = s["textZh"].replace("\\", "\\\\").replace('"', '\\"')
        return (
            f'    {{\n'
            f'      "id": "{s["id"]}",\n'
            f'      "startTime": {s["startTime"]},\n'
            f'      "endTime": {s["endTime"]},\n'
            f'      "textEn": "{te}",\n'
            f'      "textZh": "{tz}",\n'
            f'      "slidePage": {s["slidePage"]}\n'
            f'    }}'
        )

    segs_str = ",\n".join(fmt_seg(s) for s in segments)
    content = (
        'import type { Project } from "../types";\n\n'
        'export const mockProject: Project = {\n'
        '  "id": "soa_beyond_efficiency",\n'
        '  "title": "Beyond Efficiency",\n'
        '  "subtitle": "SOA Presentation Practice",\n'
        '  "audioUrl": "/audio/final.mp3",\n'
        f'  "duration": {total_duration},\n'
        '  "coverImageUrl": "/slides/slide_01.png",\n'
        '  "transcript": [\n'
        f'{segs_str}\n'
        '  ]\n'
        '};\n'
    )

    if not dry_run:
        MOCK_TS.write_text(content, encoding="utf-8")

    return len(segments), total_duration


def main() -> int:
    parser = argparse.ArgumentParser(description="Sync practice-app data and optionally push to GitHub")
    parser.add_argument("--push",    action="store_true", help="git add + commit + push after sync")
    parser.add_argument("--dry-run", action="store_true", help="Preview changes without writing files")
    args = parser.parse_args()

    dry = args.dry_run
    if dry:
        print("\n\033[33m[DRY RUN — no files will be written]\033[0m")

    print("\n\033[1m🔄 practice-app sync\033[0m")

    # ── Validate inputs ───────────────────────────────────────────────────────
    for path, label in [
        (TIMESTAMPS,  "audio_output/timestamps.json"),
        (NEW_SEGS,    "audio_output/new_segments.json"),
        (AUDIO_SRC,   "audio_output/final.mp3"),
    ]:
        if not path.exists():
            fail(f"Required file missing: {label}")

    ts   = json.loads(TIMESTAMPS.read_text())
    ns   = json.loads(NEW_SEGS.read_text())
    ns_map = {s["id"]: s for s in ns}

    print(f"\n  timestamps.json:   {len(ts)} segments")
    print(f"  new_segments.json: {len(ns)} segments ({len(ns) - len(ts)} display-only, will be skipped)")

    # ── Step 1: Copy audio ────────────────────────────────────────────────────
    step("1 / 3  Copy audio_output/final.mp3 → assets/audio/final.mp3")

    src_size  = AUDIO_SRC.stat().st_size
    if AUDIO_ASSET.exists():
        dst_size = AUDIO_ASSET.stat().st_size
        if src_size == dst_size:
            ok(f"Already up to date ({src_size / 1024 / 1024:.1f} MB)")
        else:
            if not dry:
                shutil.copy2(AUDIO_SRC, AUDIO_ASSET)
            ok(f"Copied  {src_size / 1024 / 1024:.1f} MB  (was {dst_size / 1024 / 1024:.1f} MB)")
    else:
        if not dry:
            AUDIO_ASSET.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(AUDIO_SRC, AUDIO_ASSET)
        ok(f"Copied  {src_size / 1024 / 1024:.1f} MB  (new file)")

    # ── Step 2: Rebuild mockProject.ts ───────────────────────────────────────
    step("2 / 3  Rebuild src/data/mockProject.ts")

    count, duration = build_mockproject(ts, ns_map, dry)
    dur_min = int(duration // 60)
    dur_sec = int(duration  % 60)
    ok(f"{'Would write' if dry else 'Wrote'} {count} segments  ·  duration {dur_min}:{dur_sec:02d}  ({duration:.3f}s)")

    # ── Step 3: Validate ──────────────────────────────────────────────────────
    step("3 / 3  Validate")

    if dry:
        print("  (skipped in dry-run mode)")
    else:
        result = subprocess.run([sys.executable, str(VALIDATE_PY)], capture_output=False)
        if result.returncode != 0:
            fail("Validation failed — fix issues above before pushing")

    # ── Optional: Push ────────────────────────────────────────────────────────
    if args.push and not dry:
        step("Pushing to GitHub")

        subprocess.run(
            ["git", "add",
             str(AUDIO_ASSET.relative_to(ROOT)),
             str(MOCK_TS.relative_to(ROOT))],
            cwd=ROOT, check=True
        )

        diff = subprocess.run(
            ["git", "diff", "--cached", "--stat"],
            cwd=ROOT, capture_output=True, text=True
        ).stdout.strip()

        if not diff:
            ok("Nothing new to commit (already up to date)")
        else:
            print(f"\n{diff}\n")
            msg = (
                f"sync: rebuild mockProject.ts ({count} segs, {dur_min}:{dur_sec:02d}), "
                f"update audio ({src_size // 1024} KB)\n\n"
                "Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
            )
            subprocess.run(["git", "commit", "-m", msg], cwd=ROOT, check=True)
            subprocess.run(["git", "push", "origin", "main"], cwd=ROOT, check=True)
            ok("Pushed to GitHub — Netlify deploy triggered")

    print(f"\n\033[32m✓ Sync complete\033[0m\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
