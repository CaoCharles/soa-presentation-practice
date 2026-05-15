import { useState } from "react";
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
  segments,
  availableSlidePages,
  currentSegmentId,
  onSegmentClick,
}: {
  segments: SentenceSegment[];
  availableSlidePages: number[];
  currentSegmentId: string | null;
  onSegmentClick: (segment: SentenceSegment) => void;
}) {
  return (
    <div className="px-6 py-5">
      {availableSlidePages.map((page) => {
        const pageSegments = segments.filter((s) => s.slidePage === page);
        if (pageSegments.length === 0) return null;

        // Deduplicate by parentSegmentId so we show each paragraph once
        const unique = pageSegments.filter(
          (s, i, arr) => arr.findIndex((x) => x.parentSegmentId === s.parentSegmentId) === i,
        );

        return (
          <div key={page} className="mb-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-white/30">
              Slide {page}
            </p>
            {unique.map((seg) => {
              const isActive = seg.id === currentSegmentId;
              return (
                <button
                  key={seg.id}
                  type="button"
                  className="mb-4 w-full text-left transition active:scale-[0.998]"
                  onClick={() => onSegmentClick(seg)}
                >
                  <p className={["text-[16px] font-medium leading-snug", isActive ? "text-white" : "text-white/80"].join(" ")}>
                    {seg.textEn}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/46">
                    {seg.textZh}
                  </p>
                </button>
              );
            })}
          </div>
        );
      })}
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
