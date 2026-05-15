# SOA Presentation Practice — 完整開發 Spec

> 最後更新：2026-05-15  
> 對照設計稿：`功能說明介紹.png`（含底部功能說明、整體特色、MVP 功能範圍）

---

## 一、產品定位

一款英文簡報練習的沉浸式學習 App，結合 Podcast 播放體驗、投影片頁面同步、逐字稿顯示與中英切換，幫助使用者有效練習英語口說與理解內容。

**目標使用者：** 準備 SOA 演講、英文簡報、或需要練習英語表達的專業人士  
**核心差異：** 不只是聽，而是「邊看投影片、邊追逐字稿、邊練口說」的三位一體體驗

---

## 二、技術棧

| 類別 | 版本 |
|------|------|
| Framework | React 18.3 |
| Language | TypeScript 5.6 |
| Build Tool | Vite 5.4 |
| Styling | Tailwind CSS 3.4 |
| Icons | lucide-react 0.468 |
| 字型優先順序 | -apple-system → Inter → Noto Sans TC → PingFang TC |

---

## 三、目前檔案結構

```
practice_app/
├── assets/                         # vite publicDir（dev 時靜態資源根目錄）
│   └── soa_presentation.pdf        # 原始 PDF（未在 App 中使用）
├── dist/                           # vite build 輸出
│   ├── slides/slide_01.png ... slide_25.png   # 25 張投影片圖片
│   ├── audio/soa_practice_enhanced_echo_full.mp3
│   └── assets/index-*.css / index-*.js
├── src/
│   ├── App.tsx                     # 主狀態容器（所有 state 集中於此）
│   ├── main.tsx                    # React root
│   ├── index.css                   # 全域樣式 + range-track + glass-panel
│   ├── types.ts                    # 所有型別定義
│   ├── components/
│   │   ├── BottomPlayer.tsx        # 底部播放控制列
│   │   ├── CourseHeader.tsx        # 頂部標題列
│   │   ├── DisplayModeToggle.tsx   # 中/英切換按鈕（⚠️ 目前未被 import）
│   │   ├── SlideCover.tsx          # 投影片顯示區
│   │   ├── SpeedSelector.tsx       # 速度選擇器（⚠️ 目前未被 import）
│   │   ├── TranscriptCard.tsx      # 單一逐字稿卡片
│   │   └── TranscriptList.tsx      # 逐字稿列表容器
│   ├── data/
│   │   └── mockProject.ts          # 210 個段落、25 頁投影片、44:52 音訊
│   └── utils/
│       ├── time.ts                 # formatTime()
│       └── transcript.ts           # deriveSentenceSegments()
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 四、現有功能清單（已完成）

### 4.1 音訊播放核心
- `requestAnimationFrame` 驅動的 currentTime 追蹤（播放中精準同步）
- `onTimeUpdate` fallback（暫停時也能更新時間）
- 播放 / 暫停
- 拖曳進度條 seek（含 `Math.max/min` 邊界保護）
- 速度選擇：0.8x / 0.9x / 1.0x / 1.1x / 1.2x（循環切換）
- 句子單句循環（`isSentenceLoopEnabled` + `currentSegmentRef` 保持 loop 邊界穩定）
- 音訊 `duration` 從 metadata 讀取，fallback 使用 `mockProject.duration`

### 4.2 投影片同步
- `playbackSlidePage`：根據當前音訊時間自動對應的投影片頁碼
- `manualSlidePage`：手動覆蓋，允許使用者自由瀏覽不同投影片
- `isSlideSynced`：當手動頁與播放頁一致時顯示 Sync 指示（`LocateFixed` 按鈕消失）
- 投影片左右按鈕 + touch swipe（delta > 42px 觸發）
- 投影片圖片錯誤 fallback（`onError` → `hasError`）
- 背景模糊暈染（`currentSlideUrl` 作為 fixed background-image，`blur-[44px]`）
- 投影片收合模式（`isSlideExpanded` toggle，收合後顯示 mini slide bar）
- `resolveSlidePage()` 確保頁碼永遠對應到有逐字稿的投影片
- 分頁點指示器（最多 7 個點，`activeDotIndex` 等比縮放）

### 4.3 逐字稿
- `deriveSentenceSegments()`：把每個 TranscriptSegment 按英文句子拆分，依字數比例分配時間
- 210 個 TranscriptSegment → 拆成更多 SentenceSegment
- Live 模式：只顯示當前 + 前後各一句，active 句字體放大，`scrollIntoView` 追蹤
- Full 模式：顯示當前投影片頁面的所有句子（`displaySlideSegments`）
- 點擊任一句子 seek 到該句開頭（維持播放 / 暫停狀態）
- `AudioLines` 圖示標記當前播放句

### 4.4 顯示控制
- `DisplayMode`：`both`（中英）/ `enOnly`（英文）/ `zhOnly`（中文），循環切換
- `TranscriptViewMode`：`live`（即時）/ `full`（全文）

### 4.5 視覺設計
- 深色沉浸式介面（`bg-[#050c12]`）
- 多層漸層 + 模糊覆蓋（`radial-gradient` + `backdrop-blur`）
- 底部 iOS safe area padding（`safe-bottom`）
- 圓角進度條（`range-track` + CSS 變數 `--progress`）
- 字型使用系統繁中字型（PingFang TC、Noto Sans TC）

---

## 五、已知 Bug 與問題

### ~~Bug 1：靜態資源路徑錯誤~~（已確認為誤判，無需修正）
`assets/` 資料夾下已正確包含 `slides/`（25 張 .png）和 `audio/`（.mp3），`vite.config.ts` 設定 `publicDir: "assets"` 是正確的，Dev server 可正常載入。

### Bug 2：`DisplayModeToggle.tsx` 和 `SpeedSelector.tsx` 未被使用
**問題：** 這兩個元件定義了完整的 UI，但 `BottomPlayer.tsx` 沒有 import 它們，而是直接用 inline 按鈕實作了相同功能，造成重複定義。

**修正方案：** 刪除 `DisplayModeToggle.tsx` 和 `SpeedSelector.tsx`，或在 `BottomPlayer.tsx` 中改 import 這兩個元件。

### Bug 3：上一句 / 下一句按鈕跳的是「投影片」不是「句子」
**問題：** `BottomPlayer.tsx` 的 `SkipBack` / `SkipForward` 按鈕呼叫 `onPreviousSlide` / `onNextSlide`（在 `sentenceSegments` 中按 slidePage 跳頁），但設計稿定義這兩個按鈕應跳到「前一個 / 後一個 SentenceSegment」。

---

## 六、設計稿 vs 現況對比（Gap Analysis）

### 6.1 底部控制列配置

| 位置 | 設計稿 | 現況 | 狀態 |
|------|--------|------|------|
| 1 | 中/英（icon + label） | `0.9x` 速度 | ❌ 順序錯誤 |
| 2 | `0.9x` 倍速 | Repeat2 句子循環 | ❌ 順序錯誤 |
| 3 | `|◀` 上一**句** | `SkipBack` 上一**投影片** | ❌ 語意錯誤 |
| 4 | ⏸ 播放/暫停 | ⏸ 播放/暫停 | ✅ 正確 |
| 5 | `▶|` 下一**句** | `SkipForward` 下一**投影片** | ❌ 語意錯誤 |
| 6 | 📄 簡報全文（icon + label） | 純文字 `全文/即時` | ❌ 設計不符 |
| 7 | ☆ 練習收藏（icon + label） | 純文字 `中英/英文/中文` | ❌ 功能缺失 |

設計稿底部列**沒有「句子循環」按鈕**，此功能需移至其他位置（建議：長按上一句、或 Header 右側選單）。

### 6.2 功能缺失對照

| 功能 | 設計稿描述 | 現況 |
|------|-----------|------|
| 練習收藏 | 收藏句子、分類（難句/常用型/填空/術語）、清單管理 | ❌ 完全缺失 |
| 簡報全文 Modal | Sheet 內含英文全文、中文全文、Speaker Notes、Slide 對照 tabs | ❌ 只有 inline 全文切換 |
| 句子循環入口 | 設計稿無明確位置，需要決定 | ❌ 現在放底部列（設計稿沒有） |
| 底部按鈕 icon+label 排版 | 每個按鈕垂直排列 icon 在上、文字在下 | ❌ 純 icon 或純文字 |

---

## 七、資料模型

### 7.1 現有型別

```ts
// types.ts 現況
type DisplayMode = "both" | "enOnly" | "zhOnly"
type TranscriptViewMode = "live" | "full"

type Project = {
  id: string
  title: string
  subtitle: string
  audioUrl: string
  duration: number
  coverImageUrl?: string
  transcript: TranscriptSegment[]
}

type TranscriptSegment = {
  id: string           // e.g. "p01s01u01"
  startTime: number    // 秒
  endTime: number      // 秒
  textEn: string
  textZh: string
  slidePage?: number   // 1–25
}

type SentenceSegment = TranscriptSegment & {
  parentSegmentId: string   // 原始 TranscriptSegment 的 id
  sentenceIndex: number     // 在原始段落中的句子索引
}
```

### 7.2 需要新增的型別（Phase 2）

```ts
// 練習收藏
type FavoriteTag = "hard" | "pattern" | "blank" | "term"
// 對應 UI 標籤：難句 / 常用句型 / 填空白 / 專業術語

type FavoriteItem = {
  segmentId: string      // SentenceSegment.id
  textEn: string
  textZh: string
  slidePage?: number
  startTime: number
  tag: FavoriteTag
  savedAt: number        // Date.now()
}

// 簡報全文 Modal（需要在 mockProject 補欄位）
type Project = {
  // ... 現有欄位
  speakerNotes?: string[]   // 每頁的 Speaker Notes，index = slidePage - 1
}
```

### 7.3 mockProject 資料規模

| 項目 | 數量 |
|------|------|
| TranscriptSegment 段落 | 210 個 |
| 投影片頁數 | 25 頁（slide_01 ~ slide_25） |
| 音訊總長度 | 44:52（2035.5 秒） |
| 資料檔大小 | 1684 行（~29k tokens） |

---

## 八、元件職責說明

### App.tsx（狀態總管）
所有播放狀態集中在此，透過 props 傳遞給子元件。沒有 Context 或全域 store。

**管理的 state：**
- `isPlaying`, `currentTime`, `duration`, `playbackRate`
- `isSentenceLoopEnabled`, `displayMode`, `transcriptViewMode`
- `isSlideExpanded`, `manualSlidePage`

**關鍵 derived state：**
- `sentenceSegments`（memo）：由 `deriveSentenceSegments` 計算
- `currentSegment`（memo）：根據 `currentTime` 找到當前句
- `availableSlidePages`（memo）：所有有逐字稿的 slidePage（去重 + 排序）
- `playbackSlidePage`：根據 `currentSegment.slidePage` 解析出的實際播放頁
- `visibleSlidePage`：`manualSlidePage ?? playbackSlidePage`

### BottomPlayer.tsx
純展示元件，所有 handler 由 App 傳入。

### SlideCover.tsx
管理自己的 `hasError`（圖片載入失敗）和 `touchStartX`（swipe 手勢）。

### TranscriptList.tsx
- `full` 模式：過濾 `visibleSlidePage` 的句子，特殊處理 slide 1 排除 `startTime < 3` 的短句
- `live` 模式：只顯示 `activeIndex - 1` 到 `activeIndex + 1` 共三句，`scrollIntoView` 追蹤

### transcript.ts（deriveSentenceSegments）
把多句的 TranscriptSegment 按英文句號/問號/驚嘆號拆分，依**字數比例**分配時間區間。拆分後每句共享同一個 `textZh`（中文翻譯不拆分）。

---

## 九、開發優先順序 Roadmap

### Phase 1 — 核心修正（影響主要使用流程）

#### P1-1：修正靜態資源路徑
- 建立 `public/slides/` 和 `public/audio/` 資料夾
- 將 25 張 `.png` 和 `.mp3` 移入
- `vite.config.ts` 移除 `publicDir: "assets"`（使用預設 `public`）
- 確認 `npm run dev` 能正常載入圖片與音訊

**影響檔案：** `vite.config.ts`、資料夾結構

#### P1-2：上一句 / 下一句改為跳 SentenceSegment
在 `App.tsx` 新增：
```ts
const handlePreviousSentence = useCallback(() => {
  const audio = audioRef.current
  if (!audio) return
  const idx = sentenceSegments.findIndex(s => s.id === currentSegmentRef.current?.id)
  const target = sentenceSegments[Math.max(0, idx - 1)]
  if (!target) return
  audio.currentTime = target.startTime
  setCurrentTime(target.startTime)
  currentSegmentRef.current = target
}, [sentenceSegments])

const handleNextSentence = useCallback(() => {
  const audio = audioRef.current
  if (!audio) return
  const idx = sentenceSegments.findIndex(s => s.id === currentSegmentRef.current?.id)
  const target = sentenceSegments[Math.min(sentenceSegments.length - 1, idx + 1)]
  if (!target) return
  audio.currentTime = target.startTime
  setCurrentTime(target.startTime)
  currentSegmentRef.current = target
}, [sentenceSegments])
```
將 `BottomPlayer` 的 `onPreviousSlide` / `onNextSlide` prop 改為 `onPreviousSentence` / `onNextSentence`。

**影響檔案：** `App.tsx`、`BottomPlayer.tsx`

#### P1-3：底部列順序與 props 重新命名
設計稿順序：`中/英` → `速度` → `|◀ 上一句` → `⏸` → `▶| 下一句` → `📄 簡報全文` → `☆ 練習收藏`

句子循環（目前第 2 位）移至 Header 右側 `MoreHorizontal` 的選單內，或改為長按「上一句」按鈕觸發。

**影響檔案：** `BottomPlayer.tsx`、`App.tsx`

---

### Phase 2 — 新功能（設計稿有但缺失）

#### P2-1：練習收藏

**資料層：**
- 新增 `FavoriteItem` 和 `FavoriteTag` 型別到 `types.ts`
- 建立 `src/utils/favorites.ts`：
  ```ts
  const STORAGE_KEY = "soa_favorites"
  export function loadFavorites(): FavoriteItem[]
  export function saveFavorite(item: FavoriteItem): void
  export function removeFavorite(segmentId: string): void
  export function isFavorited(segmentId: string): boolean
  ```

**UI 層：**
1. `TranscriptCard.tsx`：
   - 加入收藏按鈕（☆/★）顯示在卡片右側
   - 收藏時顯示 tag 選擇小 popover（難句/常用句型/填空白/專業術語）
   
2. `FavoritesSheet.tsx`（新建）：
   - 從底部滑入的全螢幕 Sheet
   - 顯示所有收藏句子列表，可按 tag 篩選
   - 點擊任一句子可 seek 到該句並關閉 Sheet
   - 空狀態提示

3. `App.tsx`：
   - 新增 `isFavoritesOpen` state
   - 底部 `☆ 練習收藏` 按鈕 → 開啟 Sheet

**持久化：** `localStorage`（無需後端）

#### P2-2：簡報全文 Modal

**UI：**
- `FullTranscriptSheet.tsx`（新建）：全螢幕 Sheet（`fixed inset-0 z-50`）
- 內部有 4 個 tab：
  - **英文全文**：所有段落的 `textEn`，按 slidePage 分組
  - **中文全文**：所有段落的 `textZh`，按 slidePage 分組
  - **Slide 對照**：當前投影片的英中逐句對照（= 現有 full 模式的邏輯）
  - **Speaker Notes**：每頁的 Speaker Notes（需補充資料）

**資料：**
- `mockProject.ts` 需補充 `speakerNotes: string[]`（每個 index 對應一頁投影片）
- `types.ts` Project 型別加入 `speakerNotes?: string[]`

**App.tsx：**
- 移除 `transcriptViewMode` state（inline toggle 取消）
- 改為 `isFullTranscriptOpen: boolean`

---

### Phase 3 — 視覺打磨

#### P3-1：底部按鈕加 icon + label 垂直排列
設計稿每個按鈕：
```
[icon 或文字]
  [label]         ← 12px / white/60
```
改寫 `BottomPlayer.tsx` 的 `IconControl` component，加入可選 `label` prop。

#### P3-2：Live 模式加強視覺層次
- 非 active 句子英文從 `text-[21px]` 降至 `text-[16px]`
- 非 active 句子中文隱藏（`displayMode === "both"` 時非 active 只顯示英文）
- active 句子加強背景光暈（`drop-shadow` 或 `text-shadow`）

#### P3-3：投影片計數顯示
設計稿顯示「Slide 1 / 12」（12 = 有逐字稿的投影片數）。
目前 `SlideCover.tsx` 已有 `slideCount={availableSlidePages.length}`，檢查是否正確傳入。

---

## 十、未來功能（非 MVP，設計稿標注「未來可擴充」）

| 功能 | 描述 | 前置需求 |
|------|------|---------|
| AI 發音評分 | 錄音後 AI 評分並回饋 | 後端 API + Speech-to-text |
| 跟讀錄音 | 跟著音訊錄音練習 | MediaRecorder API + 存儲方案 |
| 單字解析 | 點擊單字查詢字典 / 解析 | 字典 API 或本地詞庫 |
| 練習統計 | 每日練習時數、進度圖表 | localStorage 或後端 |
| 雲端同步 | 多裝置同步收藏、進度 | 後端 API + 使用者帳號 |
| 多套課程 | 不只 SOA，支援多份簡報 | Project 選擇頁面 + 課程管理 |

---

## 十一、各 Phase 影響的檔案總覽

```
Phase 1（核心修正）
├── src/App.tsx                 ← 新增 handlePreviousSentence/handleNextSentence
└── src/components/BottomPlayer.tsx   ← 重排順序、移除 Repeat2、新 props

Phase 2（新功能）
├── src/types.ts                ← 新增 FavoriteItem, FavoriteTag
├── src/utils/favorites.ts      ← 新建：localStorage CRUD
├── src/data/mockProject.ts     ← 補充 speakerNotes 欄位
├── src/components/TranscriptCard.tsx      ← 加收藏按鈕
├── src/components/FavoritesSheet.tsx      ← 新建
├── src/components/FullTranscriptSheet.tsx ← 新建
└── src/App.tsx                 ← 新增 Sheet state、移除 transcriptViewMode

Phase 3（視覺打磨）
├── src/components/BottomPlayer.tsx   ← icon+label 垂直排列
└── src/components/TranscriptCard.tsx ← live 模式非 active 句視覺弱化
```

---

## 十二、不在範圍內（暫不處理）

- 後端 / API / 資料庫
- 使用者帳號系統
- 多語系（App 本身為中文介面，內容為英文）
- PWA / 離線支援
- Android 相容（目前以 iOS Safari 為主要目標）
- 單元測試 / E2E 測試（MVP 階段暫略）
