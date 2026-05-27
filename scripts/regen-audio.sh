#!/usr/bin/env bash
# practice-app regen-audio — full audio rebuild pipeline
#
# Run this after editing TRANSCRIPT_DRAFT.md to re-synthesize changed segments,
# re-merge the final MP3, and sync everything to the app.
#
# Usage:
#   bash scripts/regen-audio.sh              # synthesize + merge + sync (no push)
#   bash scripts/regen-audio.sh --push       # synthesize + merge + sync + push
#   bash scripts/regen-audio.sh --force      # clear progress.json first (re-do all)
#   bash scripts/regen-audio.sh --dry        # synthesize --dry (preview only, no TTS calls)
#
# Prerequisites:
#   - Azure TTS credentials in ~/.claude/skills/azure-realtime-tts/.env
#   - ffmpeg installed (brew install ffmpeg)

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AUDIO_OUT="$ROOT/audio_output"
SYNTH="$AUDIO_OUT/synthesize.py"
MERGE="$AUDIO_OUT/merge.sh"
SYNC="$ROOT/scripts/sync.py"
PROGRESS="$AUDIO_OUT/progress.json"

PUSH=""
FORCE=""
DRY=""

for arg in "$@"; do
  case "$arg" in
    --push)  PUSH="--push" ;;
    --force) FORCE="yes" ;;
    --dry)   DRY="--dry" ;;
  esac
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🎙  practice-app regen-audio"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── Step 1: Optionally clear progress cache ───────────────────────────────────
if [[ -n "$FORCE" ]]; then
  echo "→ 1 / 3  Clearing progress.json (--force)"
  rm -f "$PROGRESS"
  echo "  ✅  Cleared — all segments will be re-synthesized"
else
  if [[ -f "$PROGRESS" ]]; then
    done_count=$(python3 -c "import json; d=json.load(open('$PROGRESS')); print(len([v for v in d.values() if v]))" 2>/dev/null || echo "?")
    echo "→ 1 / 3  Incremental synthesis (progress.json: $done_count segments already done)"
    echo "         Use --force to re-synthesize everything from scratch"
  else
    echo "→ 1 / 3  Starting fresh (no progress.json found)"
  fi
fi

# ── Step 2: Synthesize ────────────────────────────────────────────────────────
echo ""
echo "→ 2 / 3  Synthesize segments via Azure TTS-HD"
echo ""
if [[ -n "$DRY" ]]; then
  python3 "$SYNTH" --dry
  echo ""
  echo "  ⚠️   Dry run — no audio generated. Remove --dry to actually synthesize."
  exit 0
else
  python3 "$SYNTH"
fi

# ── Step 3: Merge ─────────────────────────────────────────────────────────────
echo ""
echo "→ 3 / 3  Merge WAV segments → final.mp3"
echo ""
bash "$MERGE"

# ── Step 4: Sync + optional push ─────────────────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Running scripts/sync.py${PUSH:+ $PUSH}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
python3 "$SYNC" ${PUSH}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  ✅  regen-audio complete"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
