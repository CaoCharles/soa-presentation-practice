# /validate — practice-app health check

Run the pre-deploy validation script to verify all data sources are consistent.

```bash
python3 scripts/validate.py
```

## What it checks (8 checks)

| # | Check | Catches |
|---|-------|---------|
| 1 | Segment counts: timestamps.json == mockProject.ts | sync.py wasn't run after transcript changes |
| 2 | No orphaned segments (startTime=0 AND endTime=0) | mockProject.ts built from wrong source |
| 3 | Audio file duration ≈ mockProject.ts duration | wrong audio file deployed |
| 4 | audio_output/final.mp3 == assets/audio/final.mp3 | forgot to copy new audio to assets/ |
| 5 | Slide time boundaries are sequential | corrupted or mis-ordered timestamps |
| 6 | All timestamped IDs exist in new_segments.json | ID mismatch between sources |
| 7 | **TRANSCRIPT_DRAFT.md text == new_segments.json textEn** | ← **root cause of May 27 misalignment**: audio says one thing, display shows another |
| 8 | **progress.json WAV text == current TRANSCRIPT_DRAFT.md** | ← **stale WAV detection**: text re-edited after synthesis without re-running synthesize.py |

## When to run

- Before any `git push`
- After editing TRANSCRIPT_DRAFT.md
- After editing new_segments.json
- After regenerating audio
- Whenever the app looks misaligned

## How to fix failures

| Failure | Fix |
|---------|-----|
| Check 1 or 2 | `python3 scripts/sync.py` |
| Check 3 or 4 | `python3 scripts/sync.py` |
| Check 7 | Update TRANSCRIPT_DRAFT.md to match new_segments.json, then `bash scripts/regen-audio.sh` |
| Check 8 | `bash scripts/regen-audio.sh` (incremental — only re-synthesizes changed segments) |
