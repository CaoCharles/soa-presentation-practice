import { AudioLines, Star } from "lucide-react";
import type { DisplayMode, FavoriteItem, SentenceSegment } from "../types";
import { formatTime } from "../utils/time";

type TranscriptCardProps = {
  segment: SentenceSegment;
  isActive: boolean;
  displayMode: DisplayMode;
  variant?: "full" | "live";
  isFavorited?: boolean;
  onClick: (segment: SentenceSegment) => void;
  onToggleFavorite?: (item: FavoriteItem) => void;
};

export function TranscriptCard({
  segment,
  isActive,
  displayMode,
  variant = "full",
  isFavorited = false,
  onClick,
  onToggleFavorite,
}: TranscriptCardProps) {
  const showEnglish = displayMode === "both" || displayMode === "enOnly";
  const showChinese = displayMode === "both" || displayMode === "zhOnly";
  const isLive = variant === "live";

  function handleStarClick(e: React.MouseEvent) {
    e.stopPropagation();
    onToggleFavorite?.({
      segmentId: segment.id,
      textEn: segment.textEn,
      textZh: segment.textZh,
      slidePage: segment.slidePage,
      startTime: segment.startTime,
      savedAt: Date.now(),
    });
  }

  return (
    <div className="relative">
      <button
        type="button"
        className={[
          "group relative w-full border-b border-white/10 py-3.5 pr-10 text-left transition active:scale-[0.998]",
          isLive && !isActive ? "opacity-40" : "",
          isActive ? "text-white" : "text-white/88",
        ].join(" ")}
        onClick={() => onClick(segment)}
      >
        <div className="flex items-start justify-between gap-4">
          <span className={["block font-medium tabular-nums", isLive ? "text-[13px]" : "text-[14px]", isActive ? "text-white/76" : "text-white/58"].join(" ")}>
            {formatTime(segment.startTime)}
          </span>
          {isActive ? <AudioLines size={20} strokeWidth={1.8} className="mt-0.5 flex-none text-white/88 drop-shadow-[0_0_12px_rgba(255,255,255,0.18)]" /> : null}
        </div>
        {showEnglish ? (
          <p className={[
            "mt-2 pr-1 font-medium leading-snug",
            isLive && isActive ? "text-[19px]" : isLive ? "text-[15px]" : "text-[21px]",
          ].join(" ")}>
            {segment.textEn}
          </p>
        ) : null}
        {showChinese && (!isLive || isActive) ? (
          <p className={["mt-1.5 leading-relaxed text-white/66", isLive && isActive ? "text-[14px]" : "text-[13px]"].join(" ")}>
            {segment.textZh}
          </p>
        ) : null}
      </button>

      {onToggleFavorite ? (
        <button
          type="button"
          aria-label={isFavorited ? "取消收藏" : "加入收藏"}
          className="absolute right-0 top-5 grid h-9 w-9 place-items-center text-white/40 transition active:scale-95 hover:text-white/70"
          onClick={handleStarClick}
        >
          <Star
            size={18}
            strokeWidth={1.8}
            className={isFavorited ? "fill-yellow-400 text-yellow-400" : ""}
          />
        </button>
      ) : null}
    </div>
  );
}
