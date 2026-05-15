import { useEffect, useRef } from "react";
import type { DisplayMode, FavoriteItem, SentenceSegment } from "../types";
import { TranscriptCard } from "./TranscriptCard";

type TranscriptListProps = {
  segments: SentenceSegment[];
  currentSegmentId: string | null;
  displayMode: DisplayMode;
  visibleSlidePage: number;
  favoritedIds: Set<string>;
  onSegmentClick: (segment: SentenceSegment) => void;
  onToggleFavorite: (item: FavoriteItem) => void;
};

export function TranscriptList({
  segments,
  currentSegmentId,
  displayMode,
  favoritedIds,
  onSegmentClick,
  onToggleFavorite,
}: TranscriptListProps) {
  const activeRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const userScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect manual scroll — suspend auto-scroll for 4 seconds afterwards
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      userScrollingRef.current = true;
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        userScrollingRef.current = false;
      }, 4000);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll to active segment when it changes (unless user is scrolling)
  useEffect(() => {
    if (userScrollingRef.current) return;
    activeRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentSegmentId]);

  return (
    <section ref={containerRef} className="min-h-0 flex-1 overflow-y-auto px-7 pb-3 pt-0">
      {segments.map((segment) => (
        <div key={segment.id} ref={segment.id === currentSegmentId ? activeRef : undefined}>
          <TranscriptCard
            segment={segment}
            isActive={segment.id === currentSegmentId}
            displayMode={displayMode}
            variant="live"
            isFavorited={favoritedIds.has(segment.id)}
            onClick={onSegmentClick}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </section>
  );
}
