# /regen-audio — full audio rebuild pipeline

After editing TRANSCRIPT_DRAFT.md, re-synthesize changed segments, merge a new MP3, and sync to the app.

## What it does

1. (Optional) Clears `progress.json` to force full re-synthesis (`--force`)
2. Runs `audio_output/synthesize.py` — calls Azure TTS-HD for any changed/new segments
3. Runs `audio_output/merge.sh` — stitches all WAVs → `audio_output/final.mp3` (CBR 128k for accurate seeking)
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

## Known limitation: text changes on same segment ID are not auto-detected

`synthesize.py` checks only whether the segment ID exists in `progress.json` — it does **not** compare the stored text. If you reuse an existing ID with new text (e.g. when rewriting slides 1–12 but keeping the same ID scheme), the old WAV will be silently reused.

**Symptom:** validate check 8 fails after regen-audio, or the audio says the old words.

**Fix before running regen-audio:**

```python
python3.11 -c "
import json, re

content = open('TRANSCRIPT_DRAFT.md').read()
parts = re.split(r'\*\*\[([^\]]+)\]\*\*', content)
current = {}
for i in range(1, len(parts)-1, 2):
    sid = parts[i].strip()
    text = re.split(r'\n##\s', parts[i+1])[0].strip()
    current[sid] = text

prog = json.load(open('audio_output/progress.json'))
stale = [sid for sid, info in prog.items() if sid in current and info.get('text','') != current[sid]]
for sid in stale:
    del prog[sid]
open('audio_output/progress.json', 'w').write(json.dumps(prog, indent=2, ensure_ascii=False))
print(f'Removed {len(stale)} stale entries — these will be re-synthesized')
"
```

Then run `bash scripts/regen-audio.sh --push` as normal.

## Prerequisites

- Azure TTS credentials in `~/.claude/skills/azure-realtime-tts/.env`
- `ffmpeg` installed (`brew install ffmpeg`)

## Files modified

| File | Action |
|------|--------|
| `audio_output/segments/*.wav` | New/updated WAV files per segment |
| `audio_output/timestamps.json` | Updated with new timing data |
| `audio_output/progress.json` | Updated with synthesis completion status |
| `audio_output/final.mp3` | Merged MP3 — CBR 128k, ~25 MB per 27 min (exact seek accuracy) |
| `assets/audio/final.mp3` | Copied from audio_output/final.mp3 |
| `src/data/mockProject.ts` | Rebuilt from timestamps.json + new_segments.json |
