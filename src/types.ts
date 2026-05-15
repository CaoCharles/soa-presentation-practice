export type DisplayMode = "both" | "enOnly" | "zhOnly";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  audioUrl: string;
  duration: number;
  coverImageUrl?: string;
  transcript: TranscriptSegment[];
  speakerNotes?: string[];
};

export type TranscriptSegment = {
  id: string;
  startTime: number;
  endTime: number;
  textEn: string;
  textZh: string;
  slidePage?: number;
};

export type SentenceSegment = TranscriptSegment & {
  parentSegmentId: string;
  sentenceIndex: number;
};

export type FavoriteItem = {
  segmentId: string;
  textEn: string;
  textZh: string;
  slidePage?: number;
  startTime: number;
  savedAt: number;
};
