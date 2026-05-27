# /sync — sync data and optionally push to GitHub

Rebuilds mockProject.ts and copies the correct audio file, then validates everything.

## What it does

1. Copies `audio_output/final.mp3` → `assets/audio/final.mp3`
2. Rebuilds `src/data/mockProject.ts` from `timestamps.json` (only includes segments with real timestamps — no orphaned t=0 entries)
3. Runs `/validate` to confirm everything is consistent
4. (With `--push`) `git add` + `git commit` + `git push` → triggers Netlify redeploy

## Usage

```bash
# Sync only (no push)
python3 scripts/sync.py

# Sync + push to GitHub
python3 scripts/sync.py --push

# Preview what would change (no file writes)
python3 scripts/sync.py --dry-run
```

## When to use

- After **any** regeneration of audio (merge.sh produced a new final.mp3)
- After editing the transcript and wanting to redeploy
- Whenever `/validate` reports audio or mockProject.ts is out of sync

## Files modified

| File | Action |
|------|--------|
| `assets/audio/final.mp3` | Overwritten with `audio_output/final.mp3` |
| `src/data/mockProject.ts` | Rebuilt from timestamps.json + new_segments.json |
