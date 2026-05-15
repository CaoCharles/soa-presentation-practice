import { FileText, Languages, Pause, Play, SkipBack, SkipForward, Star } from "lucide-react";
import type { DisplayMode } from "../types";
import { formatTime } from "../utils/time";

type BottomPlayerProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  speedOptions: number[];
  displayMode: DisplayMode;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onPreviousSlide: () => void;
  onNextSlide: () => void;
  onPlaybackRateChange: (rate: number) => void;
  onDisplayModeToggle: () => void;
  onOpenFullTranscript: () => void;
  onOpenFavorites: () => void;
};

const displayLabels: Record<DisplayMode, string> = {
  both: "中/英",
  enOnly: "英文",
  zhOnly: "中文",
};

function ControlButton({
  icon,
  label,
  onClick,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className="grid h-10 w-10 place-items-center transition active:scale-95"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
    >
      <span className={active ? "text-white" : "text-white/70"}>{icon}</span>
    </button>
  );
}

export function BottomPlayer({
  isPlaying,
  currentTime,
  duration,
  playbackRate,
  speedOptions,
  displayMode,
  onPlayPause,
  onSeek,
  onPreviousSlide,
  onNextSlide,
  onPlaybackRateChange,
  onDisplayModeToggle,
  onOpenFullTranscript,
  onOpenFavorites,
}: BottomPlayerProps) {
  const progress = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;
  const playbackRateIndex = Math.max(0, speedOptions.findIndex((speed) => speed === playbackRate));
  const nextPlaybackRate = speedOptions[(playbackRateIndex + 1) % speedOptions.length];

  return (
    <footer className="z-30 flex-none px-5 pb-3 pt-2 safe-bottom">
      <div className="flex items-center gap-4 text-[14px] font-medium tabular-nums text-white/86">
        <span className="w-[46px] text-left">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={Math.max(1, duration)}
          step={0.1}
          value={Math.min(currentTime, Math.max(1, duration))}
          aria-label="Audio progress"
          className="range-track h-1.5 min-w-0 flex-1 cursor-pointer rounded-full"
          style={{ "--progress": `${progress}%` } as React.CSSProperties}
          onChange={(event) => onSeek(Number(event.target.value))}
        />
        <span className="w-[46px] text-right">{formatTime(duration)}</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        {/* 中/英 */}
        <ControlButton
          icon={<Languages size={20} strokeWidth={1.8} />}
          label={displayLabels[displayMode]}
          onClick={onDisplayModeToggle}
        />

        {/* 倍速 */}
        <button
          type="button"
          className="flex flex-col items-center gap-[3px] transition active:scale-95"
          aria-label={`Speed ${playbackRate.toFixed(1)}x`}
          onClick={() => onPlaybackRateChange(nextPlaybackRate)}
        >
          <span className="text-[17px] font-semibold leading-none tabular-nums text-white/80">
            {Number.isInteger(playbackRate) ? `${playbackRate}x` : `${playbackRate.toFixed(1)}x`}
          </span>
        </button>

        {/* 上一頁 */}
        <ControlButton
          icon={<SkipBack size={25} strokeWidth={1.75} />}
          label="上一頁"
          onClick={onPreviousSlide}
        />

        {/* 播放 / 暫停 */}
        <button
          type="button"
          className="grid h-[54px] w-[54px] flex-none place-items-center rounded-full border border-white/92 bg-white text-[#071019] shadow-[0_14px_40px_rgba(255,255,255,0.18)] transition active:scale-95"
          aria-label={isPlaying ? "暫停" : "播放"}
          onClick={onPlayPause}
        >
          {isPlaying ? (
            <Pause size={26} fill="#071019" stroke="#071019" strokeWidth={2.2} />
          ) : (
            <Play size={26} fill="#071019" stroke="#071019" strokeWidth={2.2} className="ml-0.5" />
          )}
        </button>

        {/* 下一頁 */}
        <ControlButton
          icon={<SkipForward size={25} strokeWidth={1.75} />}
          label="下一頁"
          onClick={onNextSlide}
        />

        {/* 簡報全文 */}
        <ControlButton
          icon={<FileText size={20} strokeWidth={1.8} />}
          label="簡報全文"
          onClick={onOpenFullTranscript}
        />

        {/* 練習收藏 */}
        <ControlButton
          icon={<Star size={20} strokeWidth={1.8} />}
          label="練習收藏"
          onClick={onOpenFavorites}
        />
      </div>
    </footer>
  );
}
