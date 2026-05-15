import type { FavoriteItem } from "../types";

const STORAGE_KEY = "soa_favorites";

export function loadFavorites(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as FavoriteItem[];
  } catch {
    return [];
  }
}

function persist(items: FavoriteItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function saveFavorite(item: FavoriteItem): void {
  const existing = loadFavorites();
  const filtered = existing.filter((f) => f.segmentId !== item.segmentId);
  persist([...filtered, item]);
}

export function removeFavorite(segmentId: string): void {
  const existing = loadFavorites();
  persist(existing.filter((f) => f.segmentId !== segmentId));
}

export function isFavorited(segmentId: string): boolean {
  return loadFavorites().some((f) => f.segmentId === segmentId);
}
