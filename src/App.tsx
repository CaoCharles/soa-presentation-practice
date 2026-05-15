import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BottomPlayer } from "./components/BottomPlayer";
import { CourseHeader } from "./components/CourseHeader";
import { FavoritesSheet } from "./components/FavoritesSheet";
import { FullTranscriptSheet } from "./components/FullTranscriptSheet";
import { SlideCover } from "./components/SlideCover";
import { TranscriptList } from "./components/TranscriptList";
import { mockProject } from "./data/mockProject";
import type { DisplayMode, FavoriteItem, SentenceSegment } from "./types";
import { loadFavorites, removeFavorite, saveFavorite } from "./utils/favorites";
import { deriveSentenceSegments } from "./utils/transcript";

const speedOptions = [0.8, 0.9, 1.0, 1.1, 1.2];

function getCurrentSegment(transcript: SentenceSegment[], currentTime: number) {
  const exact = transcript.find((segment) => currentTime >= segment.startTime && currentTime < segment.endTime);
  if (exact) return exact;

  const lastSegment = transcript[transcript.length - 1];
  if (lastSegment && currentTime >= lastSegment.startTime) return lastSegment;

  return transcript[0] ?? null;
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function getSlideUrl(slidePage?: number, fallback?: string) {
  if (!slidePage) return fallback;
  return `${BASE}/slides/slide_${String(slidePage).padStart(2, "0")}.png`;
}

function nextDisplayMode(mode: DisplayMode): DisplayMode {
  if (mode === "both") return "enOnly";
  if (mode === "enOnly") return "zhOnly";
  return "both";
}

function resolveSlidePage(page: number, availableSlidePages: number[]) {
  if (availableSlidePages.length === 0) return page;
  if (availableSlidePages.includes(page)) return page;

  const nextPage = availableSlidePages.find((slidePage) => slidePage > page);
  return nextPage ?? availableSlidePages[availableSlidePages.length - 1];
}

function getAdjacentSlidePage(currentPage: number, direction: -1 | 1, availableSlidePages: number[]) {
  if (availableSlidePages.length === 0) return currentPage;

  const resolvedPage = resolveSlidePage(currentPage, availableSlidePages);
  const currentIndex = availableSlidePages.indexOf(resolvedPage);
  const nextIndex = Math.max(0, Math.min(availableSlidePages.length - 1, currentIndex + direction));
  return availableSlidePages[nextIndex];
}

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const sentenceSegments = useMemo(() => deriveSentenceSegments(mockProject.transcript), []);
  const currentSegmentRef = useRef<SentenceSegment | null>(sentenceSegments[0] ?? null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(mockProject.duration);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isSentenceLoopEnabled, setIsSentenceLoopEnabled] = useState(false);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("both");
  const [isSlideExpanded, setIsSlideExpanded] = useState(true);
  const [manualSlidePage, setManualSlidePage] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => loadFavorites());
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    if (isFavoritesOpen) setFavorites(loadFavorites());
  }, [isFavoritesOpen]);
  const [isFullTranscriptOpen, setIsFullTranscriptOpen] = useState(false);

  const availableSlidePages = useMemo(
    () =>
      Array.from(
        new Set(
          mockProject.transcript
            .map((segment) => segment.slidePage)
            .filter((slidePage): slidePage is number => typeof slidePage === "number"),
        ),
      ).sort((a, b) => a - b),
    [],
  );

  // Preload all slide images on mount so navigation is instant
  useEffect(() => {
    availableSlidePages.forEach((page) => {
      const img = new Image();
      img.src = getSlideUrl(page) ?? "";
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currentSegment = useMemo(
    () => getCurrentSegment(sentenceSegments, currentTime),
    [currentTime, sentenceSegments],
  );

  useEffect(() => {
    currentSegmentRef.current = currentSegment;
  }, [currentSegment]);

  const playbackSlidePage = resolveSlidePage(currentSegment?.slidePage ?? availableSlidePages[0] ?? 1, availableSlidePages);
  const visibleSlidePage = manualSlidePage ?? playbackSlidePage;

  const visibleSlidePageRef = useRef(visibleSlidePage);
  useEffect(() => {
    visibleSlidePageRef.current = visibleSlidePage;
  }, [visibleSlidePage]);
  const visibleSlideIndex = Math.max(1, availableSlidePages.indexOf(visibleSlidePage) + 1);
  const isSlideSynced = visibleSlidePage === playbackSlidePage;
  const currentSlideUrl = useMemo(() => getSlideUrl(visibleSlidePage, mockProject.coverImageUrl), [visibleSlidePage]);

  // Crossfade background: two layers alternate so opacity transition is GPU-composited
  const [bgLayers, setBgLayers] = useState({ a: currentSlideUrl, b: currentSlideUrl, active: "a" as "a" | "b" });
  useEffect(() => {
    setBgLayers((prev) =>
      prev.active === "a"
        ? { a: prev.a, b: currentSlideUrl, active: "b" }
        : { a: currentSlideUrl, b: prev.b, active: "a" },
    );
  }, [currentSlideUrl]);

  const favoritedIds = useMemo(() => new Set(favorites.map((f) => f.segmentId)), [favorites]);

  const syncTime = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const loopSegment = currentSegmentRef.current;
    if (isSentenceLoopEnabled && loopSegment && audio.currentTime >= loopSegment.endTime) {
      audio.currentTime = loopSegment.startTime;
      setCurrentTime(loopSegment.startTime);
      return;
    }

    setCurrentTime(audio.currentTime);
  }, [isSentenceLoopEnabled]);

  useEffect(() => {
    if (!isPlaying) {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      return;
    }

    const tick = () => {
      syncTime();
      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isPlaying, syncTime]);

  const handleLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      setDuration(audio.duration);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
      return;
    }

    audio.pause();
  }, []);

  const handleSeek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio) return;

      const target = Math.max(0, Math.min(time, duration));
      audio.currentTime = target;
      setCurrentTime(target);
    },
    [duration],
  );

  const handlePlaybackRateChange = useCallback((rate: number) => {
    const audio = audioRef.current;
    setPlaybackRate(rate);
    if (audio) audio.playbackRate = rate;
  }, []);

  const handleSegmentClick = useCallback((segment: SentenceSegment) => {
    const audio = audioRef.current;
    if (!audio) return;

    const wasPlaying = !audio.paused;
    audio.currentTime = segment.startTime;
    setCurrentTime(segment.startTime);
    currentSegmentRef.current = segment;

    if (wasPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, []);

  const handlePreviousSlide = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentPage = visibleSlidePageRef.current ?? availableSlidePages[0];
    const targetPage = getAdjacentSlidePage(currentPage, -1, availableSlidePages);
    const target = sentenceSegments.find((s) => s.slidePage === targetPage) ?? sentenceSegments[0];
    if (!target) return;

    audio.currentTime = target.startTime;
    setCurrentTime(target.startTime);
    setManualSlidePage(null);
    currentSegmentRef.current = target;
  }, [availableSlidePages, sentenceSegments]);

  const handleNextSlide = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentPage = visibleSlidePageRef.current ?? availableSlidePages[0];
    const targetPage = getAdjacentSlidePage(currentPage, 1, availableSlidePages);
    const target = sentenceSegments.find((s) => s.slidePage === targetPage) ?? sentenceSegments[0];
    if (!target) return;

    audio.currentTime = target.startTime;
    setCurrentTime(target.startTime);
    setManualSlidePage(null);
    currentSegmentRef.current = target;
  }, [availableSlidePages, sentenceSegments]);

  const handleToggleFavorite = useCallback((item: FavoriteItem) => {
    const exists = loadFavorites().some((f) => f.segmentId === item.segmentId);
    if (exists) {
      removeFavorite(item.segmentId);
    } else {
      saveFavorite(item);
    }
    setFavorites(loadFavorites());
  }, []);

  const jumpToSlide = useCallback(
    (slidePage: number) => {
      const audio = audioRef.current;
      if (!audio) return;

      const targetSlidePage = resolveSlidePage(slidePage, availableSlidePages);
      const targetSegment = sentenceSegments.find((segment) => segment.slidePage === targetSlidePage) ?? sentenceSegments[0];

      if (!targetSegment) return;

      const wasPlaying = !audio.paused;
      audio.currentTime = targetSegment.startTime;
      setCurrentTime(targetSegment.startTime);
      setManualSlidePage(null);
      currentSegmentRef.current = targetSegment;

      if (wasPlaying) {
        audio.play().catch(() => setIsPlaying(false));
      } else {
        audio.pause();
      }
    },
    [availableSlidePages, sentenceSegments],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-[#050c12] text-textMain">
      <div className="pointer-events-none fixed inset-[-40px] scale-110 blur-[44px]">
        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-700" style={{ backgroundImage: `url(${bgLayers.a})`, opacity: bgLayers.active === "a" ? 0.35 : 0 }} />
        <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-700" style={{ backgroundImage: `url(${bgLayers.b})`, opacity: bgLayers.active === "b" ? 0.35 : 0 }} />
      </div>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(18,74,112,0.38),transparent_34%),radial-gradient(circle_at_92%_16%,rgba(255,255,255,0.14),transparent_28%),linear-gradient(180deg,rgba(2,9,14,0.72)_0%,rgba(2,12,20,0.86)_46%,rgba(2,8,13,0.94)_100%)]" />
      <div className="pointer-events-none fixed inset-0 backdrop-blur-[16px]" />
      <div className="relative mx-auto flex h-[100dvh] w-full max-w-[430px] flex-col overflow-hidden">
        <CourseHeader
          title={mockProject.title}
          subtitle={mockProject.subtitle}
          isSlideExpanded={isSlideExpanded}
          isSentenceLoopEnabled={isSentenceLoopEnabled}
          onToggleSlide={() => setIsSlideExpanded((v) => !v)}
          onSentenceLoopToggle={() => setIsSentenceLoopEnabled((v) => !v)}
        />
        <SlideCover
          imageUrl={currentSlideUrl}
          slidePage={visibleSlidePage}
          slideIndex={visibleSlideIndex}
          slideCount={availableSlidePages.length}
          isSynced={isSlideSynced}
          isExpanded={isSlideExpanded}
          onPrevious={() =>
            setManualSlidePage((page) => getAdjacentSlidePage(page ?? visibleSlidePage, -1, availableSlidePages))
          }
          onNext={() =>
            setManualSlidePage((page) => getAdjacentSlidePage(page ?? visibleSlidePage, 1, availableSlidePages))
          }
          onSync={() => setManualSlidePage(null)}
        />
        <TranscriptList
          segments={sentenceSegments}
          currentSegmentId={currentSegment?.id ?? null}
          displayMode={displayMode}
          visibleSlidePage={visibleSlidePage}
          favoritedIds={favoritedIds}
          onSegmentClick={handleSegmentClick}
          onToggleFavorite={handleToggleFavorite}
          onSlidePageChange={(page) => setManualSlidePage(page)}
        />
        <BottomPlayer
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          playbackRate={playbackRate}
          speedOptions={speedOptions}
          displayMode={displayMode}
          onPlayPause={handlePlayPause}
          onSeek={handleSeek}
          onPreviousSlide={handlePreviousSlide}
          onNextSlide={handleNextSlide}
          onPlaybackRateChange={handlePlaybackRateChange}
          onDisplayModeToggle={() => setDisplayMode((v) => nextDisplayMode(v))}
          onOpenFullTranscript={() => setIsFullTranscriptOpen(true)}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
        />
        <audio
          ref={audioRef}
          src={`${BASE}${mockProject.audioUrl}`}
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={() => {
            if (!isPlaying) syncTime();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      <FavoritesSheet
        isOpen={isFavoritesOpen}
        favorites={favorites}
        onClose={() => setIsFavoritesOpen(false)}
        onSegmentClick={(segment) => {
          handleSegmentClick(segment);
          setIsFavoritesOpen(false);
        }}
        onRemoveFavorite={(segmentId) => {
          removeFavorite(segmentId);
          setFavorites(loadFavorites());
        }}
      />

      <FullTranscriptSheet
        isOpen={isFullTranscriptOpen}
        segments={sentenceSegments}
        currentSegmentId={currentSegment?.id ?? null}
        availableSlidePages={availableSlidePages}
        onClose={() => setIsFullTranscriptOpen(false)}
        onSegmentClick={(segment) => {
          handleSegmentClick(segment);
          setIsFullTranscriptOpen(false);
        }}
      />
    </div>
  );
}
