import { useCallback, useEffect, useRef, useState } from "react";
import { Square, Star, Trash2, Volume2, X } from "lucide-react";
import type { FavoriteItem, SentenceSegment } from "../types";
import { formatTime } from "../utils/time";

type FavoritesSheetProps = {
  isOpen: boolean;
  favorites: FavoriteItem[];
  onClose: () => void;
  onSegmentClick: (segment: SentenceSegment) => void;
  onRemoveFavorite: (segmentId: string) => void;
};

function toSentenceSegment(item: FavoriteItem): SentenceSegment {
  return {
    id: item.segmentId,
    parentSegmentId: item.segmentId,
    sentenceIndex: 0,
    startTime: item.startTime,
    endTime: item.startTime + 10,
    textEn: item.textEn,
    textZh: item.textZh,
    slidePage: item.slidePage,
  };
}

function getBestEnglishVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  // Prefer male en voices: Aaron (iOS), Daniel (en-GB), Alex/Fred/Tom (macOS)
  const priority = [
    (v: SpeechSynthesisVoice) => /Aaron/i.test(v.name),
    (v: SpeechSynthesisVoice) => /Daniel/i.test(v.name) && v.lang.startsWith("en"),
    (v: SpeechSynthesisVoice) => /Alex/i.test(v.name),
    (v: SpeechSynthesisVoice) => /Fred/i.test(v.name),
    (v: SpeechSynthesisVoice) => /Tom/i.test(v.name) && v.lang.startsWith("en"),
    (v: SpeechSynthesisVoice) => v.lang === "en-US" && v.localService,
    (v: SpeechSynthesisVoice) => v.lang.startsWith("en") && v.localService,
    (v: SpeechSynthesisVoice) => v.lang === "en-US",
  ];
  for (const match of priority) {
    const found = voices.find(match);
    if (found) return found;
  }
  return null;
}

function useSpeech() {
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [voicesReady, setVoicesReady] = useState(false);

  useEffect(() => {
    const load = () => setVoicesReady(true);
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoicesReady(true);
    } else {
      window.speechSynthesis.addEventListener("voiceschanged", load);
      return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
    }
  }, []);

  const speak = useCallback((text: string, id: string) => {
    window.speechSynthesis.cancel();
    if (speakingId === id) { setSpeakingId(null); return; }

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getBestEnglishVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = "en-US";
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  }, [speakingId]);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, []);

  return { speak, stop, speakingId, voicesReady };
}

export function FavoritesSheet({ isOpen, favorites, onClose, onSegmentClick, onRemoveFavorite }: FavoritesSheetProps) {
  const { speak, stop, speakingId } = useSpeech();
  const sorted = [...favorites].sort((a, b) => b.savedAt - a.savedAt);

  function handleClose() {
    stop();
    onClose();
  }

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      ) : null}
      <div
        className={[
          "fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 flex-col rounded-t-[28px] border-t border-white/10 bg-[#0d1620]/96 backdrop-blur-2xl transition-transform duration-300",
          isOpen ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
        style={{ height: "80dvh" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-4 pt-3">
          <div className="flex items-center gap-2.5">
            <Star size={20} strokeWidth={1.8} className="fill-yellow-400 text-yellow-400" />
            <h2 className="text-[18px] font-bold text-white">練習收藏</h2>
            {favorites.length > 0 && (
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[12px] font-semibold text-white/55">
                {favorites.length}
              </span>
            )}
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-white/50 transition hover:text-white/80 active:scale-95"
            onClick={handleClose}
            aria-label="關閉"
          >
            <X size={20} />
          </button>
        </div>

        {/* List */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10">
          {sorted.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Star size={38} strokeWidth={1.3} className="mb-4 text-white/18" />
              <p className="text-[15px] font-medium text-white/36">還沒有收藏的句子</p>
              <p className="mt-2 text-[13px] text-white/24">點擊逐字稿旁的 ☆ 加入收藏</p>
            </div>
          ) : (
            sorted.map((item) => (
              <FavoriteCard
                key={item.segmentId}
                item={item}
                isSpeaking={speakingId === item.segmentId}
                onPlay={() => { stop(); onSegmentClick(toSentenceSegment(item)); }}
                onSpeak={() => speak(item.textEn, item.segmentId)}
                onRemove={() => { if (speakingId === item.segmentId) stop(); onRemoveFavorite(item.segmentId); }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

function FavoriteCard({
  item,
  isSpeaking,
  onPlay,
  onSpeak,
  onRemove,
}: {
  item: FavoriteItem;
  isSpeaking: boolean;
  onPlay: () => void;
  onSpeak: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="border-b border-white/8 py-5">
      {/* Meta row */}
      <div className="mb-3 flex items-center gap-2">
        {item.slidePage != null && (
          <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[11px] font-semibold tracking-wide text-white/50">
            Slide {item.slidePage}
          </span>
        )}
        <span className="text-[11px] font-medium tabular-nums text-white/34">
          {formatTime(item.startTime)}
        </span>
      </div>

      {/* English — tap to seek */}
      <button type="button" className="w-full text-left" onClick={onPlay}>
        <p className="text-[17px] font-semibold leading-snug text-white/92">{item.textEn}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-white/44">{item.textZh}</p>
      </button>

      {/* Action row */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={onSpeak}
          className={[
            "flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition active:scale-95",
            isSpeaking
              ? "bg-yellow-400/15 text-yellow-400 ring-1 ring-yellow-400/40"
              : "bg-white/8 text-white/70 hover:bg-white/14 hover:text-white/90",
          ].join(" ")}
        >
          {isSpeaking
            ? <Square size={13} fill="currentColor" strokeWidth={0} />
            : <Volume2 size={14} strokeWidth={1.8} />}
          {isSpeaking ? "停止" : "發音練習"}
        </button>

        <button
          type="button"
          onClick={onRemove}
          className="grid h-8 w-8 place-items-center rounded-full text-white/24 transition hover:text-red-400/80 active:scale-95"
          aria-label="移除收藏"
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
}
