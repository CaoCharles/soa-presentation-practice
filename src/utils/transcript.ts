import type { SentenceSegment, TranscriptSegment } from "../types";

/**
 * Each TTS segment is synthesized as one audio unit, so its startTime/endTime
 * are exactly measured from the WAV file. Splitting segments into sub-sentences
 * by word-count proportion introduces timing drift. We return each segment as-is
 * to guarantee subtitle ↔ audio alignment.
 */
export function deriveSentenceSegments(segments: TranscriptSegment[]): SentenceSegment[] {
  return segments.map((segment) => ({
    ...segment,
    parentSegmentId: segment.id,
    sentenceIndex: 0,
  }));
}
