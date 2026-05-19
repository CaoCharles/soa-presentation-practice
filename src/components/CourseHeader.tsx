import { useState } from "react";
import { ChevronDown, Repeat2, X } from "lucide-react";

type CourseHeaderProps = {
  title: string;
  subtitle: string;
  isSlideExpanded: boolean;
  isSentenceLoopEnabled: boolean;
  onToggleSlide: () => void;
  onSentenceLoopToggle: () => void;
};

export function CourseHeader({
  title,
  subtitle,
  isSlideExpanded,
  isSentenceLoopEnabled,
  onToggleSlide,
  onSentenceLoopToggle,
}: CourseHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative grid grid-cols-[44px_1fr_44px] items-center px-6 pb-3 pt-4">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-full text-white/90 transition active:scale-95"
        aria-label={isSlideExpanded ? "隱藏投影片" : "顯示投影片"}
        onClick={onToggleSlide}
      >
        <ChevronDown
          size={30}
          strokeWidth={2.25}
          className={["transition-transform", isSlideExpanded ? "" : "rotate-180"].join(" ")}
        />
      </button>

      <div className="min-w-0 text-center">
        <h1 className="truncate text-[18px] font-bold leading-tight tracking-wide text-white/95">{subtitle}</h1>
      </div>

      <div className="relative">
        <button
          type="button"
          className={[
            "grid h-11 w-11 place-items-center rounded-full transition active:scale-95",
            isSentenceLoopEnabled ? "text-white" : "text-white/70",
          ].join(" ")}
          aria-label="更多選項"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <Repeat2
            size={22}
            strokeWidth={1.9}
            className={isSentenceLoopEnabled ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : ""}
          />
        </button>

        {isMenuOpen ? (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute right-0 top-12 z-20 w-52 overflow-hidden rounded-2xl border border-white/12 bg-[#1a2230]/96 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <button
                type="button"
                className={[
                  "flex w-full items-center gap-3 px-4 py-3.5 text-left text-[14px] font-semibold transition hover:bg-white/8 active:bg-white/12",
                  isSentenceLoopEnabled ? "text-white" : "text-white/80",
                ].join(" ")}
                onClick={() => {
                  onSentenceLoopToggle();
                  setIsMenuOpen(false);
                }}
              >
                <Repeat2 size={18} strokeWidth={1.9} />
                句子循環
                {isSentenceLoopEnabled ? (
                  <span className="ml-auto rounded-full bg-white/20 px-2 py-0.5 text-[11px]">開啟</span>
                ) : null}
              </button>
              <div className="border-t border-white/8" />
              <button
                type="button"
                className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-[14px] font-semibold text-white/60 transition hover:bg-white/8 active:bg-white/12"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={18} strokeWidth={1.9} />
                關閉
              </button>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
