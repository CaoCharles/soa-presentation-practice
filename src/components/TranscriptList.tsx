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
  onSlidePageChange?: (slidePage: number) => void;
};

export function TranscriptList({
  segments,
  currentSegmentId,
  displayMode,
  visibleSlidePage,
  favoritedIds,
  onSegmentClick,
  onToggleFavorite,
  onSlidePageChange,
}: TranscriptListProps) {
  const activeRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);
  const segmentRefsMap = useRef<Map<string, HTMLDivElement>>(new Map());
  const userScrollingRef = useRef(false);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevSlidePageRef = useRef(visibleSlidePage);

  // Detect manual scroll → update slide page to match visible content
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      userScrollingRef.current = true;
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        userScrollingRef.current = false;
      }, 4000);

      // Find which slide page is most visible in the centre of the container
      const centerY = el.getBoundingClientRect().top + el.clientHeight / 2;
      let closest: SentenceSegment | null = null;
      let minDist = Infinity;
      segmentRefsMap.current.forEach((div, id) => {
        const rect = div.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - centerY);
        if (dist < minDist) {
          minDist = dist;
          closest = segments.find((s) => s.id === id) ?? null;
        }
      });
      if (closest && (closest as SentenceSegment).slidePage != null) {
        const page = (closest as SentenceSegment).slidePage!;
        if (page !== prevSlidePageRef.current) {
          prevSlidePageRef.current = page;
          onSlidePageChange?.(page);
        }
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [segments, onSlidePageChange]);

  // When visibleSlidePage changes via slide buttons/swipe, scroll transcript to that page
  useEffect(() => {
    const currentSegment = segments.find((s) => s.id === currentSegmentId);
    // If the current audio segment is already on this page, let the currentSegmentId effect handle it
    if (currentSegment?.slidePage === visibleSlidePage) return;

    const firstSegment = segments.find((s) => s.slidePage === visibleSlidePage);
    if (!firstSegment) return;

    // Override user scroll lock so slide navigation always wins
    userScrollingRef.current = false;
    prevSlidePageRef.current = visibleSlidePage;

    const div = segmentRefsMap.current.get(firstSegment.id);
    div?.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [visibleSlidePage]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll to active segment during audio playback
  useEffect(() => {
    if (userScrollingRef.current) return;
    activeRef.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [currentSegmentId]);

  return (
    <section ref={containerRef} className="min-h-0 flex-1 overflow-y-auto px-7 pb-3 pt-0">
      {segments.map((segment) => (
        <div
          key={segment.id}
          ref={(el) => {
            if (el) segmentRefsMap.current.set(segment.id, el);
            else segmentRefsMap.current.delete(segment.id);
            if (segment.id === currentSegmentId) activeRef.current = el;
          }}
        >
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
