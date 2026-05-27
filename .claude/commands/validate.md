# /validate — practice-app health check

Run the pre-deploy validation script to verify all data sources are consistent.

## What it checks

1. **Segment counts** — timestamps.json vs new_segments.json vs mockProject.ts
2. **No orphaned segments** — no startTime=0 AND endTime=0 in mockProject.ts
3. **Audio duration** — assets/audio/final.mp3 duration matches mockProject.ts `duration` field
4. **Audio freshness** — assets/audio/final.mp3 matches audio_output/final.mp3
5. **Slide ordering** — all slide time boundaries are sequential
6. **ID coverage** — every ID in timestamps.json exists in new_segments.json

## Usage

```bash
python3 scripts/validate.py
```

Run this:
- Before any `git push`
- After editing TRANSCRIPT_DRAFT.md
- After regenerating audio
- After manually editing mockProject.ts or new_segments.json

If any check fails, run `/sync` to fix it automatically.
