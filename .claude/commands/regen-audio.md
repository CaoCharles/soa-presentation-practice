# /regen-audio — full audio rebuild pipeline

After editing TRANSCRIPT_DRAFT.md, re-synthesize changed segments, merge a new MP3, and sync to the app.

## What it does

1. (Optional) Clears `progress.json` to force full re-synthesis (`--force`)
2. Runs `audio_output/synthesize.py` — calls Azure TTS-HD for any changed/new segments
3. Runs `audio_output/merge.sh` — stitches all WAVs → `audio_output/final.mp3`
4. Runs `scripts/sync.py` — copies audio + rebuilds mockProject.ts + validates
5. (With `--push`) Commits and pushes to GitHub → triggers Netlify redeploy

## Usage

```bash
# Incremental: only synthesize segments not in progress.json
bash scripts/regen-audio.sh

# + auto-push to GitHub after completion
bash scripts/regen-audio.sh --push

# Force full re-synthesis (clears progress cache)
bash scripts/regen-audio.sh --force

# Dry run: preview what would be synthesized, no API calls
bash scripts/regen-audio.sh --dry
```

## When to use

- After editing TRANSCRIPT_DRAFT.md (adding, removing, or changing sentences)
- After adding new slides or changing slide page assignments
- When you want to completely re-record specific segments (delete their .wav from `audio_output/segments/` first, or use `--force`)

## Prerequisites

- Azure TTS credentials in `~/.claude/skills/azure-realtime-tts/.env`
- `ffmpeg` installed (`brew install ffmpeg`)

## Files modified

| File | Action |
|------|--------|
| `audio_output/segments/*.wav` | New/updated WAV files per segment |
| `audio_output/timestamps.json` | Updated with new timing data |
| `audio_output/progress.json` | Updated with synthesis completion status |
| `audio_output/final.mp3` | Merged MP3 (new complete audio) |
| `assets/audio/final.mp3` | Copied from audio_output/final.mp3 |
| `src/data/mockProject.ts` | Rebuilt from timestamps.json + new_segments.json |
