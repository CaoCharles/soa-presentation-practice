import { useEffect, useMemo, useRef, useState } from "react";
import { FileText, X } from "lucide-react";
import type { SentenceSegment } from "../types";

type Tab = "slide" | "en" | "zh";

type FullTranscriptSheetProps = {
  isOpen: boolean;
  segments: SentenceSegment[];
  currentSegmentId: string | null;
  availableSlidePages: number[];
  onClose: () => void;
  onSegmentClick: (segment: SentenceSegment) => void;
};

const TAB_LABELS: Record<Tab, string> = {
  slide: "Slide 對照",
  en: "英文全文",
  zh: "中文全文",
};

export function FullTranscriptSheet({
  isOpen,
  segments,
  currentSegmentId,
  availableSlidePages,
  onClose,
  onSegmentClick,
}: FullTranscriptSheetProps) {
  const [activeTab, setActiveTab] = useState<Tab>("slide");

  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      ) : null}
      <div
        className={[
          "fixed bottom-0 left-1/2 z-50 flex w-full max-w-[430px] -translate-x-1/2 flex-col rounded-t-[28px] border-t border-white/10 bg-[#0d1620]/96 backdrop-blur-2xl transition-transform duration-300",
          isOpen ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
        style={{ height: "88dvh" }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-3 pt-3">
          <div className="flex items-center gap-2">
            <FileText size={20} strokeWidth={1.8} className="text-white/70" />
            <h2 className="text-[18px] font-bold text-white">簡報全文</h2>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-white/60 transition hover:text-white/90 active:scale-95"
            onClick={onClose}
            aria-label="關閉"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-white/10 px-5">
          {(["slide", "en", "zh"] as Tab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              className={[
                "relative px-4 pb-3 pt-1 text-[14px] font-semibold transition",
                activeTab === tab ? "text-white" : "text-white/46 hover:text-white/70",
              ].join(" ")}
              onClick={() => setActiveTab(tab)}
            >
              {TAB_LABELS[tab]}
              {activeTab === tab ? (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-white" />
              ) : null}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {activeTab === "slide" && (
            <SlideView
              isOpen={isOpen}
              segments={segments}
              availableSlidePages={availableSlidePages}
              currentSegmentId={currentSegmentId}
              onSegmentClick={onSegmentClick}
            />
          )}
          {activeTab === "en" && (
            <FullTextView segments={segments} lang="en" onSegmentClick={onSegmentClick} />
          )}
          {activeTab === "zh" && (
            <FullTextView segments={segments} lang="zh" onSegmentClick={onSegmentClick} />
          )}
        </div>
      </div>
    </>
  );
}

function SlideView({
  isOpen,
  segments,
  availableSlidePages,
  currentSegmentId,
  onSegmentClick,
}: {
  isOpen: boolean;
  segments: SentenceSegment[];
  availableSlidePages: number[];
  currentSegmentId: string | null;
  onSegmentClick: (segment: SentenceSegment) => void;
}) {
  // Which slide page is currently playing
  const currentSlidePage = useMemo(() => {
    if (!currentSegmentId) return availableSlidePages[0] ?? null;
    const seg = segments.find((s) => s.id === currentSegmentId);
    return seg?.slidePage ?? availableSlidePages[0] ?? null;
  }, [currentSegmentId, segments, availableSlidePages]);

  // Refs for pill strip scroll + each slide section
  const pillStripRef = useRef<HTMLDivElement>(null);
  const activePillRef = useRef<HTMLButtonElement | null>(null);
  const sectionRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // When sheet opens: instantly jump content + pill strip to current slide
  useEffect(() => {
    if (!isOpen) return;
    // Wait for slide-up animation (300ms) before jumping
    const timer = setTimeout(() => {
      if (currentSlidePage == null) return;
      sectionRefs.current.get(currentSlidePage)?.scrollIntoView({ behavior: "instant", block: "start" });
      const pill = activePillRef.current;
      const strip = pillStripRef.current;
      if (pill && strip) {
        strip.scrollTo({ left: Math.max(0, pill.offsetLeft - strip.clientWidth / 2 + pill.offsetWidth / 2), behavior: "instant" });
      }
    }, 320);
    return () => clearTimeout(timer);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // While sheet is open: keep pill strip centered on active pill as slide changes
  useEffect(() => {
    if (!isOpen || currentSlidePage == null) return;
    const pill = activePillRef.current;
    const strip = pillStripRef.current;
    if (!pill || !strip) return;
    strip.scrollTo({
      left: Math.max(0, pill.offsetLeft - strip.clientWidth / 2 + pill.offsetWidth / 2),
      behavior: "smooth",
    });
  }, [currentSlidePage, isOpen]);

  const scrollToSection = (page: number) => {
    sectionRefs.current.get(page)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Sticky pill navigation strip — no border, solid bg */}
      <div className="sticky top-0 z-10 bg-[#0d1620]/98 px-4 py-2.5 backdrop-blur-xl">
        <div
          ref={pillStripRef}
          className="flex gap-1.5 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {availableSlidePages.map((page) => {
            const isActive = page === currentSlidePage;
            return (
              <button
                key={page}
                type="button"
                ref={isActive ? activePillRef : undefined}
                onClick={() => scrollToSection(page)}
                className={[
                  "flex-none rounded-full px-3 py-1 text-[12px] font-bold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/8 text-white/46 hover:bg-white/15 hover:text-white/75",
                ].join(" ")}
              >
                S{page}
              </button>
            );
          })}
        </div>
      </div>

      {/* Slide sections */}
      <div className="px-5 pb-10 pt-4">
        {availableSlidePages.map((page) => {
          const pageSegments = segments.filter((s) => s.slidePage === page);
          if (pageSegments.length === 0) return null;

          // Deduplicate by parentSegmentId so we show each original segment once
          const unique = pageSegments.filter(
            (s, i, arr) => arr.findIndex((x) => x.parentSegmentId === s.parentSegmentId) === i,
          );
          const isCurrentSlide = page === currentSlidePage;

          return (
            <div
              key={page}
              ref={(el) => {
                if (el) sectionRefs.current.set(page, el);
                else sectionRefs.current.delete(page);
              }}
              // scroll-mt accounts for the sticky pill strip (~44px)
              className="mb-10 scroll-mt-[44px]"
            >
              {/* Slide label */}
              <div className="mb-3 flex items-center gap-2">
                <span
                  className={[
                    "rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-widest uppercase transition-colors",
                    isCurrentSlide ? "bg-white/15 text-white" : "bg-white/6 text-white/30",
                  ].join(" ")}
                >
                  Slide {page}
                </span>
                {isCurrentSlide && (
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                )}
              </div>

              {/* Transcript segments */}
              <div className="space-y-3">
                {unique.map((seg) => {
                  const isActive = seg.id === currentSegmentId;
                  return (
                    <button
                      key={seg.id}
                      type="button"
                      className={[
                        "w-full rounded-xl px-4 py-3 text-left transition-all duration-150 active:scale-[0.998]",
                        isActive ? "bg-white/10" : "hover:bg-white/5",
                      ].join(" ")}
                      onClick={() => onSegmentClick(seg)}
                    >
                      <p
                        className={[
                          "text-[15px] font-medium leading-snug",
                          isActive ? "text-white" : "text-white/78",
                        ].join(" ")}
                      >
                        {seg.textEn}
                      </p>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-white/40">
                        {seg.textZh}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FullTextView({
  segments,
  lang,
  onSegmentClick,
}: {
  segments: SentenceSegment[];
  lang: "en" | "zh";
  onSegmentClick: (segment: SentenceSegment) => void;
}) {
  const unique = segments.filter(
    (s, i, arr) => arr.findIndex((x) => x.parentSegmentId === s.parentSegmentId) === i,
  );

  return (
    <div className="px-6 py-5">
      {unique.map((seg) => (
        <button
          key={seg.id}
          type="button"
          className="mb-4 w-full text-left text-[16px] font-medium leading-relaxed text-white/78 transition active:scale-[0.998] hover:text-white/90"
          onClick={() => onSegmentClick(seg)}
        >
          {lang === "en" ? seg.textEn : seg.textZh}
        </button>
      ))}
    </div>
  );
}
