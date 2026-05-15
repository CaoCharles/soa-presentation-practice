import type { SentenceSegment, TranscriptSegment } from "../types";

function splitEnglishSentences(text: string) {
  const matches = text.match(/[^.!?]+(?:[.!?]+["')\]]*)?|[^.!?]+$/g);
  return (matches ?? [text]).map((sentence) => sentence.trim()).filter(Boolean);
}

function wordCount(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length || 1;
}

export function deriveSentenceSegments(segments: TranscriptSegment[]): SentenceSegment[] {
  return segments.flatMap((segment) => {
    const sentences = splitEnglishSentences(segment.textEn);
    if (sentences.length <= 1) {
      return [
        {
          ...segment,
          parentSegmentId: segment.id,
          sentenceIndex: 0,
        },
      ];
    }

    const segmentDuration = Math.max(0.1, segment.endTime - segment.startTime);
    const weights = sentences.map(wordCount);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let cursor = segment.startTime;

    return sentences.map((sentence, index) => {
      const isLast = index === sentences.length - 1;
      const duration = isLast ? segment.endTime - cursor : segmentDuration * (weights[index] / totalWeight);
      const startTime = cursor;
      const endTime = isLast ? segment.endTime : Math.min(segment.endTime, startTime + duration);
      cursor = endTime;

      return {
        id: `${segment.id}_sentence_${index + 1}`,
        parentSegmentId: segment.id,
        sentenceIndex: index,
        startTime,
        endTime,
        textEn: sentence,
        textZh: segment.textZh,
        slidePage: segment.slidePage,
      };
    });
  });
}
