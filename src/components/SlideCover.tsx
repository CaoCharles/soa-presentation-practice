import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, LocateFixed } from "lucide-react";

type SlideCoverProps = {
  imageUrl?: string;
  slidePage?: number;
  slideIndex: number;
  slideCount: number;
  isSynced: boolean;
  isExpanded: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSync: () => void;
};

export function SlideCover({
  imageUrl,
  slidePage,
  slideIndex,
  slideCount,
  isSynced,
  isExpanded,
  onPrevious,
  onNext,
  onSync,
}: SlideCoverProps) {
  const [hasError, setHasError] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const shouldShowImage = imageUrl && !hasError;
  const dotCount = Math.min(Math.max(slideCount, 1), 7);
  const activeDotIndex =
    slideCount <= dotCount ? Math.max(0, slideIndex - 1) : Math.round(((slideIndex - 1) / Math.max(1, slideCount - 1)) * (dotCount - 1));

  useEffect(() => {
    setHasError(false);
  }, [imageUrl]);

  const handleTouchEnd = (clientX: number) => {
    if (touchStartX === null) return;
    const delta = clientX - touchStartX;
    setTouchStartX(null);
    if (Math.abs(delta) < 42) return;
    if (delta > 0) onPrevious();
    else onNext();
  };

  return (
    <section className="relative px-6 pb-4">
      <div className={["transition-all", isExpanded ? "" : "rounded-[22px] border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-2xl"].join(" ")}>
        {!isSynced ? (
          <button
            type="button"
            className="absolute right-8 top-[118px] z-20 inline-grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] backdrop-blur-xl active:scale-95"
            aria-label="Sync slide to playback"
            title="Sync slide to playback"
            onClick={onSync}
          >
            <LocateFixed size={15} />
          </button>
        ) : null}
        {!isExpanded ? (
          <div className="flex h-12 items-center gap-2 text-sm font-semibold text-white/90">
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full text-white/76"
              aria-label="Previous slide"
              title="Previous slide"
              onClick={onPrevious}
            >
              <ChevronLeft size={17} />
            </button>
            <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
              <ImageIcon size={16} className="text-white/66" />
              <span className="truncate tabular-nums">Slide {slideIndex || "--"} / {slideCount || "--"}</span>
            </div>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full text-white/76"
              aria-label="Next slide"
              title="Next slide"
              onClick={onNext}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        ) : null}
        {isExpanded ? (
          <div>
            <div
              className="relative aspect-video overflow-hidden rounded-[24px] shadow-[0_22px_60px_rgba(0,0,0,0.34)]"
              onTouchStart={(event) => setTouchStartX(event.changedTouches[0].clientX)}
              onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0].clientX)}
            >
            <button
              type="button"
              className="absolute left-0 top-0 z-10 grid h-full w-16 place-items-center text-white/90 opacity-0 transition hover:opacity-75 focus-visible:opacity-90 active:scale-[0.99]"
              aria-label="Previous slide"
              title="Previous slide"
              onClick={onPrevious}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-black/24 backdrop-blur-md">
                <ChevronLeft size={22} />
              </span>
            </button>
            <button
              type="button"
              className="absolute right-0 top-0 z-10 grid h-full w-16 place-items-center text-white/90 opacity-0 transition hover:opacity-75 focus-visible:opacity-90 active:scale-[0.99]"
              aria-label="Next slide"
              title="Next slide"
              onClick={onNext}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-black/24 backdrop-blur-md">
                <ChevronRight size={22} />
              </span>
            </button>
        {shouldShowImage ? (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={slidePage ? `SOA presentation slide ${slidePage}` : "SOA presentation cover"}
            className="h-full w-full bg-black/16 object-contain"
            onError={() => setHasError(true)}
            onLoad={() => setHasError(false)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white/10 px-6 text-center">
            <p className="text-sm font-semibold text-white/76">Slide preview unavailable</p>
          </div>
        )}
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 text-[15px] font-medium text-white/92">
              <div className="flex items-center gap-2" aria-hidden="true">
                {Array.from({ length: dotCount }).map((_, index) => (
                  <span
                    key={index}
                    className={["h-2 w-2 rounded-full", index === activeDotIndex ? "bg-white" : "bg-white/35"].join(" ")}
                  />
                ))}
              </div>
              <span className="tabular-nums">Slide {slideIndex || "--"} / {slideCount || "--"}</span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
