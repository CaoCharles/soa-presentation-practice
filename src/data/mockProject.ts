import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 1005.95,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0.0,
      "endTime": 5.112,
      "textEn": "Good morning everyone. It's a pleasure to be here at the Asia-Pacific Symposium today.",
      "textZh": "各位好，很高興今天有機會在 Asia-Pacific Symposium 與大家分享。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 5.112,
      "endTime": 11.962,
      "textEn": "My name is Yu Chung Wu from Cathay Life Insurance in Taiwan, and I'm joined today by my colleague Li Yu Tsao.",
      "textZh": "我是來自台灣國泰人壽的 Yu Chung Wu，今天與我一起分享的是我的同事 Li Yu Tsao。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 11.962,
      "endTime": 19.325,
      "textEn": "Today, we would like to share how we are leveraging Agentic AI to improve claims adjudication efficiency and quality.",
      "textZh": "今天我們想分享的是，如何透過 Agentic AI 協助理賠審理提升效率與品質，",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 19.325,
      "endTime": 26.812,
      "textEn": "And more importantly, how we transform claims data into explainable, traceable, and actuarial-ready decision intelligence.",
      "textZh": "並進一步將理賠資料轉化為可解釋、可追溯、且能支援精算分析的 decision intelligence。",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 26.812,
      "endTime": 30.025,
      "textEn": "Before we begin, let us briefly introduce ourselves.",
      "textZh": "在開始之前，先簡單介紹一下我們的背景。",
      "slidePage": 2
    },
    {
      "id": "p01s02u02",
      "startTime": 30.025,
      "endTime": 34.8,
      "textEn": "We are from Cathay Life Insurance, one of the leading life insurers in Taiwan.",
      "textZh": "我們來自國泰人壽，國泰人壽是台灣領先的壽險公司。",
      "slidePage": 2
    },
    {
      "id": "p01s02u03",
      "startTime": 34.8,
      "endTime": 40.112,
      "textEn": "We serve more than 8 million customers with over 20 million policies in force.",
      "textZh": "目前服務超過 800 萬客戶，並擁有超過 2,000 萬張有效保單。",
      "slidePage": 2
    },
    {
      "id": "p01s02u04",
      "startTime": 40.112,
      "endTime": 47.925,
      "textEn": "Both of us currently work as data scientists, focusing on AI applications in claims decision-making and decision intelligence.",
      "textZh": "我們兩位目前都擔任資料科學家，主要專注於 AI 在理賠決策、風險分析與 decision intelligence 的應用。",
      "slidePage": 2
    },
    {
      "id": "p01s02u05",
      "startTime": 47.925,
      "endTime": 52.6,
      "textEn": "Let us begin by looking at the key challenges facing claims operations today.",
      "textZh": "接下來，我們想先從壽險理賠目前面臨的挑戰開始談起。",
      "slidePage": 2
    },
    {
      "id": "p01s03u01",
      "startTime": 52.6,
      "endTime": 58.287,
      "textEn": "Claims operations in the life insurance industry are facing significant structural pressure.",
      "textZh": "在壽險產業中，理賠其實正面臨很大的結構性壓力。",
      "slidePage": 3
    },
    {
      "id": "p01s03u02",
      "startTime": 58.287,
      "endTime": 62.087,
      "textEn": "On one hand, the external environment is becoming more complex.",
      "textZh": "一方面，外部環境越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u03",
      "startTime": 62.087,
      "endTime": 69.5,
      "textEn": "Aging populations continue to drive claims demand, while fraud and risk patterns are also becoming more sophisticated.",
      "textZh": "高齡化持續推升理賠需求，同時詐欺與風險型態也越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u04",
      "startTime": 69.5,
      "endTime": 72.825,
      "textEn": "On the other hand, operational burden is increasing rapidly.",
      "textZh": "另一方面，營運負擔也快速增加。",
      "slidePage": 3
    },
    {
      "id": "p01s03u05",
      "startTime": 72.825,
      "endTime": 77.637,
      "textEn": "Cathay Life now handles more than 1.6 million claims cases every year.",
      "textZh": "國泰人壽目前每年已經處理超過 160 萬件理賠案件。",
      "slidePage": 3
    },
    {
      "id": "p01s03u06",
      "startTime": 77.637,
      "endTime": 83.55,
      "textEn": "But the bigger challenge is that claims volume is growing much faster than workforce capacity.",
      "textZh": "但更大的挑戰是，案件量成長速度遠高於人力成長。",
      "slidePage": 3
    },
    {
      "id": "p01s03u07",
      "startTime": 83.55,
      "endTime": 91.662,
      "textEn": "Over the past few years, claims volume has increased by more than 50%, while workforce growth has only been around 20%.",
      "textZh": "過去幾年，案件量增加超過 50%，但人力只增加大約 20%。",
      "slidePage": 3
    },
    {
      "id": "p01s03u08",
      "startTime": 91.662,
      "endTime": 97.187,
      "textEn": "This makes traditional labor-intensive review models increasingly difficult to sustain.",
      "textZh": "這讓傳統高度依賴人工的審理模式，越來越難支撐。",
      "slidePage": 3
    },
    {
      "id": "p01s03u09",
      "startTime": 97.187,
      "endTime": 101.875,
      "textEn": "Under these pressures, claims operations have continued to evolve over time.",
      "textZh": "而在這樣的壓力之下，理賠流程也開始隨著技術持續演進。",
      "slidePage": 3
    },
    {
      "id": "p02s01u01",
      "startTime": 101.875,
      "endTime": 111.825,
      "textEn": "Back in the 1990s, during the IBM AS400 era, claims processing was mainly transaction-driven and highly dependent on manual and paper-based workflows.",
      "textZh": "最早在 IBM AS400 時代，理賠主要還是以交易處理為主，流程高度依賴人工與紙本作業。",
      "slidePage": 4
    },
    {
      "id": "p02s01u02",
      "startTime": 111.825,
      "endTime": 120.225,
      "textEn": "Later, in the core system era, insurers started digitalizing claims workflows and introducing rule-based engines to improve efficiency.",
      "textZh": "後來進入 core system 時代，我們開始將理賠流程數位化，並導入 rule-based engine 來提升作業效率。",
      "slidePage": 4
    },
    {
      "id": "p02s01u03",
      "startTime": 120.225,
      "endTime": 127.337,
      "textEn": "In the 2020s, machine learning models started being used for risk scoring, anomaly detection, and claims triage.",
      "textZh": "接著在 machine learning 階段，開始利用模型進行風險評分、異常偵測與案件分流。",
      "slidePage": 4
    },
    {
      "id": "p02s01u04",
      "startTime": 127.337,
      "endTime": 130.737,
      "textEn": "However, most models still stayed at the scoring stage.",
      "textZh": "但大部分模型其實還是停留在 scoring 的階段。",
      "slidePage": 4
    },
    {
      "id": "p02s01u05",
      "startTime": 130.737,
      "endTime": 135.487,
      "textEn": "They could identify higher-risk cases, but they could not always explain why.",
      "textZh": "它們可以找出高風險案件，但未必能真正解釋原因。",
      "slidePage": 4
    },
    {
      "id": "p02s01u06",
      "startTime": 135.487,
      "endTime": 139.512,
      "textEn": "Now, we believe claims adjudication is entering the era of Agentic AI.",
      "textZh": "而現在，我們認為理賠正在進入 Agentic AI 時代。",
      "slidePage": 4
    },
    {
      "id": "p02s01u07",
      "startTime": 139.512,
      "endTime": 141.862,
      "textEn": "AI is no longer only providing scores.",
      "textZh": "AI 不再只是提供分數。",
      "slidePage": 4
    },
    {
      "id": "p02s01u08",
      "startTime": 141.862,
      "endTime": 148.562,
      "textEn": "It is starting to become part of the decision process by providing reasoning, evidence, and decision recommendations.",
      "textZh": "而是開始參與整個理賠決策流程，能夠提供 reasoning、evidence，以及 decision recommendations。",
      "slidePage": 4
    },
    {
      "id": "p02s02u01",
      "startTime": 148.562,
      "endTime": 153.837,
      "textEn": "Before we dive into Agentic AI, let us first look at the traditional claims process.",
      "textZh": "在正式介紹 Agentic AI 之前，我們先快速看一下傳統理賠流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u02",
      "startTime": 153.837,
      "endTime": 161.7,
      "textEn": "From claim submission to manual review and final claim decisions, the process is long and highly dependent on human judgment.",
      "textZh": "從客戶申請、人工審理到最終理賠決策，其實是一個非常長、而且高度依賴人工判斷的流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u03",
      "startTime": 161.7,
      "endTime": 169.225,
      "textEn": "Throughout the process, reviewers need to handle medical information, policy interpretation, risk assessment, and claim validation.",
      "textZh": "而且在整個流程中，理賠人員還需要同時處理醫療資訊、條款判讀、風險評估，以及理賠合理性判斷。",
      "slidePage": 5
    },
    {
      "id": "p02s02u04",
      "startTime": 169.225,
      "endTime": 175.775,
      "textEn": "In other words, claims adjudication is not just an operational workflow — it is a complex decision process.",
      "textZh": "換句話說，理賠本質上並不只是流程作業，而是一連串複雜的 decision process。",
      "slidePage": 5
    },
    {
      "id": "p02s02u05",
      "startTime": 175.775,
      "endTime": 179.688,
      "textEn": "And this is exactly where we believe AI can begin to create value.",
      "textZh": "而這也是我們認為 AI 開始能發揮價值的地方。",
      "slidePage": 5
    },
    {
      "id": "p02s02u06",
      "startTime": 179.688,
      "endTime": 185.887,
      "textEn": "However, building Agentic AI requires a series of foundational capabilities and supporting systems.",
      "textZh": "不過為了發展 Agentic AI，其實需要建立一系列基礎能力與支援系統。",
      "slidePage": 5
    },
    {
      "id": "p02s02u07",
      "startTime": 185.887,
      "endTime": 193.35,
      "textEn": "So over the next few slides, I will briefly walk through these foundations before returning to the topic of Agentic AI.",
      "textZh": "所以接下來幾頁，我會先快速介紹這些我們建立的基礎，再回到 Agentic AI 的主題。",
      "slidePage": 5
    },
    {
      "id": "p02s03u01",
      "startTime": 193.35,
      "endTime": 197.062,
      "textEn": "The first foundational capability is digital claims submission.",
      "textZh": "第一個基礎能力，其實是理賠申請流程的數位化。",
      "slidePage": 6
    },
    {
      "id": "p02s03u02",
      "startTime": 197.062,
      "endTime": 201.912,
      "textEn": "Claims processing used to rely heavily on paper documents and manual intake.",
      "textZh": "過去理賠高度依賴紙本與人工收件，",
      "slidePage": 6
    },
    {
      "id": "p02s03u03",
      "startTime": 201.912,
      "endTime": 207.487,
      "textEn": "But now customers can submit claims and upload documents directly through a mobile application.",
      "textZh": "但現在客戶已經可以直接透過行動 App 線上完成理賠申請與文件上傳。",
      "slidePage": 6
    },
    {
      "id": "p03s01u01",
      "startTime": 207.487,
      "endTime": 211.625,
      "textEn": "The second foundational capability is structured data extraction.",
      "textZh": "第二個基礎能力，就是資料結構化。",
      "slidePage": 7
    },
    {
      "id": "p03s01u02",
      "startTime": 211.625,
      "endTime": 216.525,
      "textEn": "In real-world claims scenarios, most medical documents are still unstructured.",
      "textZh": "在實際理賠場景中，大部分醫療文件其實都不是結構化的。",
      "slidePage": 7
    },
    {
      "id": "p03s01u03",
      "startTime": 216.525,
      "endTime": 224.687,
      "textEn": "Diagnosis certificates, receipts, and hospitalization records often contain free text, abbreviations, and different hospital formats.",
      "textZh": "例如診斷證明、收據或住院文件，往往包含自由文字、縮寫，以及不同醫院格式。",
      "slidePage": 7
    },
    {
      "id": "p03s01u04",
      "startTime": 224.687,
      "endTime": 231.537,
      "textEn": "At this stage, we introduced OCR and large language models to extract key information from medical documents.",
      "textZh": "在這個階段，我們開始導入 OCR 與 Large Language Models，自動擷取醫療文件中的關鍵資訊。",
      "slidePage": 7
    },
    {
      "id": "p03s01u05",
      "startTime": 231.537,
      "endTime": 238.475,
      "textEn": "This includes diagnosis information, surgical procedures, hospitalization periods, and other claims-related fields.",
      "textZh": "例如診斷內容、手術項目、住院期間，以及其他理賠相關欄位。",
      "slidePage": 7
    },
    {
      "id": "p03s02u01",
      "startTime": 238.475,
      "endTime": 242.712,
      "textEn": "The next foundational capability is claims triage and risk analysis.",
      "textZh": "下一個基礎能力，就是理賠分流與風險分析。",
      "slidePage": 8
    },
    {
      "id": "p03s02u02",
      "startTime": 242.712,
      "endTime": 248.8,
      "textEn": "At this stage, we introduced machine learning models to support risk assessment and case routing.",
      "textZh": "在這個階段，我們開始導入 machine learning models，協助進行風險評估與案件分流。",
      "slidePage": 8
    },
    {
      "id": "p03s02u03",
      "startTime": 248.8,
      "endTime": 256.05,
      "textEn": "We trained these models using historical claims data, such as policy information, claims history, and medical features.",
      "textZh": "在模型建置上，我們主要利用過去累積的理賠資料，例如保單資訊、理賠紀錄與醫療特徵。",
      "slidePage": 8
    },
    {
      "id": "p03s02u04",
      "startTime": 256.05,
      "endTime": 259.65,
      "textEn": "Model outputs are used for claims triage and risk tagging.",
      "textZh": "模型結果會進一步應用在案件分流與風險標記。",
      "slidePage": 8
    },
    {
      "id": "p03s02u05",
      "startTime": 259.65,
      "endTime": 267.412,
      "textEn": "Low-risk cases can follow simplified workflows, while more complex or suspicious cases are routed to experienced reviewers.",
      "textZh": "低風險案件可以走較簡化流程，而較複雜或可疑案件，則會交由資深審查員進一步處理。",
      "slidePage": 8
    },
    {
      "id": "p03s03u01",
      "startTime": 267.412,
      "endTime": 271.8,
      "textEn": "Another foundational capability is the unified smart claims platform.",
      "textZh": "另一個重要的基礎能力，是整合式智慧理賠平台。",
      "slidePage": 9
    },
    {
      "id": "p03s03u02",
      "startTime": 271.8,
      "endTime": 278.35,
      "textEn": "We integrate claims information, risk results, related documents, and decision support into one workbench.",
      "textZh": "我們將理賠資訊、風險結果、相關文件與決策支援整合到同一個工作台中。",
      "slidePage": 9
    },
    {
      "id": "p03s03u03",
      "startTime": 278.35,
      "endTime": 284.8,
      "textEn": "This allows reviewers to access key information in one place without switching between multiple systems.",
      "textZh": "這讓審查員不需要在多個系統之間來回切換，就能查看重要資訊。",
      "slidePage": 9
    },
    {
      "id": "p04s01u01",
      "startTime": 284.8,
      "endTime": 293.312,
      "textEn": "Within this platform, we further embedded multiple AI-assisted capabilities such as risk tagging, relative analysis, and decision support.",
      "textZh": "在這個工作平台中，我們進一步嵌入多種 AI 輔助功能。",
      "slidePage": 10
    },
    {
      "id": "p04s01u02",
      "startTime": 293.312,
      "endTime": 298.037,
      "textEn": "Together, these capabilities provide the foundation for building Agentic AI.",
      "textZh": "而以上這些能力，也提供了建構 Agentic AI 所需的基礎。",
      "slidePage": 10
    },
    {
      "id": "p04s01u03",
      "startTime": 298.037,
      "endTime": 301.562,
      "textEn": "So the next question becomes: what exactly is Agentic AI?",
      "textZh": "所以下一個問題就是：到底什麼是 Agentic AI？",
      "slidePage": 10
    },
    {
      "id": "p04s02u01",
      "startTime": 301.562,
      "endTime": 305.125,
      "textEn": "Here we would like to explain Agentic AI in a simple way.",
      "textZh": "這裡我們想用比較簡單的方式，介紹什麼是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u02",
      "startTime": 305.125,
      "endTime": 310.075,
      "textEn": "Traditional AI is mostly reactive: users ask questions, and AI provides answers.",
      "textZh": "傳統 AI 大多是被動式的，使用者提出問題，AI 再提供答案。",
      "slidePage": 11
    },
    {
      "id": "p04s02u03",
      "startTime": 310.075,
      "endTime": 311.8,
      "textEn": "The next stage is AI Agents.",
      "textZh": "接下來是 AI Agent。",
      "slidePage": 11
    },
    {
      "id": "p04s02u04",
      "startTime": 311.8,
      "endTime": 318.862,
      "textEn": "AI becomes more proactive and can handle specific tasks, such as searching for information or organizing content.",
      "textZh": "AI 開始變得更主動，可以處理特定任務，例如搜尋資訊或整理內容。",
      "slidePage": 11
    },
    {
      "id": "p04s02u05",
      "startTime": 318.862,
      "endTime": 320.537,
      "textEn": "The next step is Agentic AI.",
      "textZh": "而更進一步，就是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u06",
      "startTime": 320.537,
      "endTime": 326.25,
      "textEn": "Instead of a single agent, multiple agents work together to complete more complex workflows.",
      "textZh": "它不只是單一 Agent，而是多個 Agent 一起協作，完成更複雜的 workflow。",
      "slidePage": 11
    },
    {
      "id": "p04s02u07",
      "startTime": 326.25,
      "endTime": 334.437,
      "textEn": "Some agents focus on medical information extraction, while others focus on policy interpretation, risk analysis, or decision support.",
      "textZh": "例如有的 Agent 負責醫療資訊擷取，有的負責條款解析、風險分析或 decision support。",
      "slidePage": 11
    },
    {
      "id": "p04s02u08",
      "startTime": 334.437,
      "endTime": 341.975,
      "textEn": "The key idea is that Agentic AI is no longer just answering questions — it is becoming part of the decision process itself.",
      "textZh": "所以 Agentic AI 的重點，不只是回答問題，而是開始參與整個 decision process。",
      "slidePage": 11
    },
    {
      "id": "p04s03u01",
      "startTime": 341.975,
      "endTime": 349.5,
      "textEn": "After introducing Agentic AI, let us return to the claims scenario and see how humans and AI work together in practice.",
      "textZh": "在介紹完 Agentic AI 之後，接下來回到實際理賠場景，看看人與 AI 是如何協作的。",
      "slidePage": 12
    },
    {
      "id": "p04s03u02",
      "startTime": 349.5,
      "endTime": 352.312,
      "textEn": "Our core design principle is human-in-the-loop.",
      "textZh": "我們的核心設計理念是 human-in-the-loop。",
      "slidePage": 12
    },
    {
      "id": "p04s03u03",
      "startTime": 352.312,
      "endTime": 358.6,
      "textEn": "Agentic AI provides analysis and recommendations, while final decisions remain with human reviewers.",
      "textZh": "也就是由 Agentic AI 提供分析與建議，而最終決策仍然由理賠人員負責。",
      "slidePage": 12
    },
    {
      "id": "p04s03u04",
      "startTime": 358.6,
      "endTime": 363.987,
      "textEn": "AI does not directly approve or deny claims. Instead, it first performs a pre-assessment.",
      "textZh": "在這個流程中，AI 並不是直接做出核賠或拒賠決定，而是先完成 pre-assessment。",
      "slidePage": 12
    },
    {
      "id": "p04s03u05",
      "startTime": 363.987,
      "endTime": 371.875,
      "textEn": "This includes organizing documents, extracting key facts, identifying relevant policy terms, and preparing supporting evidence.",
      "textZh": "例如整理文件、擷取關鍵事實、找出相關條款，以及提供 supporting evidence。",
      "slidePage": 12
    },
    {
      "id": "p04s03u06",
      "startTime": 371.875,
      "endTime": 374.637,
      "textEn": "AI then generates a decision recommendation.",
      "textZh": "並進一步產生一份 decision recommendation。",
      "slidePage": 12
    },
    {
      "id": "p04s03u07",
      "startTime": 374.637,
      "endTime": 379.162,
      "textEn": "Human reviewers then review the results and make the final claims decision.",
      "textZh": "接著再由理賠人員檢視這些分析結果與建議內容，做出最終的賠付決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u08",
      "startTime": 379.162,
      "endTime": 385.45,
      "textEn": "The goal is not to replace professionals, but to help people make faster and more consistent decisions.",
      "textZh": "我們的目標不是取代專業人員，而是協助人做出更快、更一致的決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u09",
      "startTime": 385.45,
      "endTime": 393.012,
      "textEn": "Next, my colleague Li Yu Tsao will continue by introducing the detailed applications of Agentic AI in claims operations.",
      "textZh": "接下來，關於 Agentic AI 在理賠場景中的應用與進一步細節，將由我的同事曹立玉繼續為大家說明。",
      "slidePage": 12
    },
    {
      "id": "p05s01u01",
      "startTime": 393.012,
      "endTime": 398.837,
      "textEn": "Good afternoon, everyone. I'm Li Yu, and I'll take you through the next part of our presentation.",
      "textZh": "各位午安，我是 Li Yu，接下來由我帶大家進入簡報的下一個部分。",
      "slidePage": 13
    },
    {
      "id": "p05s01u02",
      "startTime": 398.837,
      "endTime": 405.35,
      "textEn": "Yu Chung just showed us how Agentic AI works in our system. Now, let's look at what it actually produces.",
      "textZh": "Yu Chung 剛剛介紹了 Agentic AI 在我們系統中的運作方式。現在，讓我們看看它實際上產出了什麼。",
      "slidePage": 13
    },
    {
      "id": "p05s01u03",
      "startTime": 405.35,
      "endTime": 411.587,
      "textEn": "I'll walk you through the AI reasoning output — from the raw claims input all the way to the final recommendation.",
      "textZh": "我會帶大家看 AI 推理輸出——從原始理賠輸入一路到最後的建議。",
      "slidePage": 13
    },
    {
      "id": "p05s01u04",
      "startTime": 411.587,
      "endTime": 418.612,
      "textEn": "In this example, the patient has kidney stones, receives ESWL treatment, and stays in the hospital for three days.",
      "textZh": "在這個例子中，患者有腎結石，接受 ESWL 治療，並住院三天。",
      "slidePage": 13
    },
    {
      "id": "p05s01u05",
      "startTime": 418.612,
      "endTime": 424.75,
      "textEn": "The AI reasons through the claim step by step, using medical documents, policy terms, and historical cases.",
      "textZh": "AI 透過醫療文件、保單條款和歷史案例，一步一步推理這個理賠案件。",
      "slidePage": 13
    },
    {
      "id": "p05s01u06",
      "startTime": 424.75,
      "endTime": 430.837,
      "textEn": "The agents check the policy terms and medical guidelines, and then identify a potential conflict.",
      "textZh": "各個 Agent 會核查保單條款和醫療準則，然後辨識出一個潛在衝突。",
      "slidePage": 13
    },
    {
      "id": "p05s01u07",
      "startTime": 430.837,
      "endTime": 436.612,
      "textEn": "ESWL is usually an outpatient treatment, so a three-day hospitalization may need further review.",
      "textZh": "ESWL 通常是門診治療，因此三天住院可能需要進一步審查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u08",
      "startTime": 436.612,
      "endTime": 444.475,
      "textEn": "So in this case, the system recommends that the surgical benefit is payable, but the hospitalization part needs manual review.",
      "textZh": "所以在這個案例中，系統建議手術給付可以核付，但住院部分需要人工審查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u09",
      "startTime": 444.475,
      "endTime": 448.912,
      "textEn": "Beyond the claim decision, the system also gives us actuarial insights.",
      "textZh": "除了理賠決策之外，系統也提供精算洞察。",
      "slidePage": 13
    },
    {
      "id": "p05s01u10",
      "startTime": 448.912,
      "endTime": 452.962,
      "textEn": "It shows not just whether the claim should be paid, but also why.",
      "textZh": "它呈現的不只是這件理賠是否應該核付，也說明背後原因。",
      "slidePage": 13
    },
    {
      "id": "p05s01u11",
      "startTime": 452.962,
      "endTime": 457.75,
      "textEn": "That makes the information useful later for experience analysis and pricing.",
      "textZh": "這讓這些資訊後續可以用於經驗分析與定價。",
      "slidePage": 13
    },
    {
      "id": "p05s01u12",
      "startTime": 457.75,
      "endTime": 463.5,
      "textEn": "And finally, on the right side of the slide, you can see a 92 percent confidence score.",
      "textZh": "最後，在投影片右側，大家可以看到 92% 的信心分數。",
      "slidePage": 13
    },
    {
      "id": "p05s01u13",
      "startTime": 463.5,
      "endTime": 467.637,
      "textEn": "It's based on policy terms, medical guidelines, and historical claims data.",
      "textZh": "它是基於保單條款、醫療準則和歷史理賠資料。",
      "slidePage": 13
    },
    {
      "id": "p05s01u14",
      "startTime": 467.637,
      "endTime": 474.012,
      "textEn": "So this is the real AI reasoning output. It helps reviewers make faster and more consistent decisions.",
      "textZh": "這就是真實的 AI 推理輸出。它能幫助審查員做出更快、更一致的決策。",
      "slidePage": 13
    },
    {
      "id": "p05s01u15",
      "startTime": 474.012,
      "endTime": 477.212,
      "textEn": "Next, I'll show you how we actually built this system.",
      "textZh": "接下來，我會介紹我們是如何建立這個系統的。",
      "slidePage": 13
    },
    {
      "id": "p05s02u01",
      "startTime": 477.212,
      "endTime": 484.062,
      "textEn": "So, to produce this AI reasoning output, we developed CAELIA — Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "所以，為了產出這樣的 AI 推理結果，我們開發了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 14
    },
    {
      "id": "p05s02u02",
      "startTime": 484.062,
      "endTime": 490.362,
      "textEn": "CAELIA is designed to turn claims adjudication into an explainable, evidence-driven decision process.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。",
      "slidePage": 14
    },
    {
      "id": "p05s02u03",
      "startTime": 490.362,
      "endTime": 494.712,
      "textEn": "On this slide, I'd like to share the multi-agent design behind CAELIA.",
      "textZh": "在這一頁，我想介紹 CAELIA 背後的多代理設計。",
      "slidePage": 14
    },
    {
      "id": "p05s02u04",
      "startTime": 494.712,
      "endTime": 500.112,
      "textEn": "CAELIA is made up of six agents in total — one Lead Agent and five specialized agents.",
      "textZh": "CAELIA 總共由六個 Agent 組成——一個 Lead Agent 和五個專業 Agent。",
      "slidePage": 14
    },
    {
      "id": "p05s02u05",
      "startTime": 500.112,
      "endTime": 507.537,
      "textEn": "At the center is the Lead Agent, the Orchestrator — it coordinates the other agents and produces one final recommendation.",
      "textZh": "中間是 Lead Agent，也就是 Orchestrator——負責協調其他 Agent，整合成一份最終建議。",
      "slidePage": 14
    },
    {
      "id": "p05s02u06",
      "startTime": 507.537,
      "endTime": 517.4,
      "textEn": "Around it, we have the Document Extraction Agent, Policy Validation Agent, Policy Interpretation Agent, Benefit Determination Agent, and Medical Reasoning Agent.",
      "textZh": "周圍則有 Document Extraction Agent、Policy Validation Agent、Policy Interpretation Agent、Benefit Determination Agent，以及 Medical Reasoning Agent。",
      "slidePage": 14
    },
    {
      "id": "p05s02u07",
      "startTime": 517.4,
      "endTime": 523.887,
      "textEn": "Each agent focuses on one specific part of the review — making the process more careful and consistent.",
      "textZh": "每個 Agent 專注在審查流程的特定部分——讓整個過程更仔細且一致。",
      "slidePage": 14
    },
    {
      "id": "p05s02u08",
      "startTime": 523.887,
      "endTime": 529.25,
      "textEn": "Next, let me show you the full architecture and how all of these agents work together.",
      "textZh": "接下來，讓我帶大家看完整架構，以及這些 Agent 是如何一起運作的。",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 529.25,
      "endTime": 534.387,
      "textEn": "Now that we've introduced CAELIA's multi-agent design, let's look at the full architecture.",
      "textZh": "我們剛介紹了 CAELIA 的多代理設計，現在來看完整架構。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 534.387,
      "endTime": 541.125,
      "textEn": "This slide shows the end-to-end flow, from claims input and document processing, all the way to the final output.",
      "textZh": "這張投影片展示端到端流程，從理賠輸入和文件處理，一直到最終輸出。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 541.125,
      "endTime": 547.887,
      "textEn": "At the center is the Lead Agent, or Orchestrator, which coordinates the reasoning process across the different agents.",
      "textZh": "中間是 Lead Agent，也就是 Orchestrator，負責協調不同 Agent 之間的推理流程。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 547.887,
      "endTime": 557.787,
      "textEn": "The specialized agents each handle a different part — document extraction, policy validation, medical reasoning, policy interpretation, and benefit determination.",
      "textZh": "各個專業 Agent 各司其職——文件擷取、保單驗證、醫療推理、保單解讀和給付判定。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 557.787,
      "endTime": 563.05,
      "textEn": "Each agent focuses on a specific task, and the Lead Agent brings their outputs together.",
      "textZh": "每個 Agent 專注在特定任務上，而 Lead Agent 會整合它們的輸出。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 563.05,
      "endTime": 567.275,
      "textEn": "This modular design makes the system easier to update, monitor, and govern.",
      "textZh": "這種模組化設計讓系統更容易更新、監控和治理。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 567.275,
      "endTime": 575.712,
      "textEn": "So when medical practices, policy terms, or fraud patterns change, we can update the relevant agent without rebuilding the whole system.",
      "textZh": "因此，當醫療實務、保單條款或詐欺模式改變時，我們可以更新相關 Agent，而不用重建整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u08",
      "startTime": 575.712,
      "endTime": 580.275,
      "textEn": "Next, I'll show you what this architecture actually produces for the claims reviewer.",
      "textZh": "接下來，我會展示這個架構實際上為理賠審查員產出了什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 580.275,
      "endTime": 585.3,
      "textEn": "So this is what the architecture produces: the AI Pre-Assessment Decision Report.",
      "textZh": "所以，這就是這個架構產出的內容：AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 585.3,
      "endTime": 590.675,
      "textEn": "It's a dashboard that helps claims reviewers see all the key information in one place.",
      "textZh": "它是一個幫助理賠審查員在同一個地方看到所有關鍵資訊的儀表板。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 590.675,
      "endTime": 598.05,
      "textEn": "The report shows what happened in the claim, what the documents say, which policy terms apply, and what the AI recommends.",
      "textZh": "這份報告呈現這件理賠發生了什麼、文件內容說了什麼、適用哪些保單條款，以及 AI 建議是什麼。",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 598.05,
      "endTime": 603.237,
      "textEn": "On the left, you can see the claim application and the supporting medical documents.",
      "textZh": "在左側，大家可以看到理賠申請和相關醫療文件。",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 603.237,
      "endTime": 608.562,
      "textEn": "In the middle, the dashboard shows the case flow, from claim submission to the final recommendation.",
      "textZh": "中間，儀表板呈現案件流程，從理賠提交到最終建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 608.562,
      "endTime": 616.45,
      "textEn": "Below that, the AI Pre-Assessment Summary breaks down the benefit items, such as surgical benefit and hospitalization benefit.",
      "textZh": "下方的 AI 預審摘要會拆解各項給付，例如手術給付和住院給付。",
      "slidePage": 16
    },
    {
      "id": "p06s01u07",
      "startTime": 616.45,
      "endTime": 624.987,
      "textEn": "On the right, the AI Decision Recommendation shows: surgical benefit payable, hospitalization under review, and final decision — manual review.",
      "textZh": "右側，AI 決策建議顯示：手術給付核付、住院存疑，整體決定——人工審查。",
      "slidePage": 16
    },
    {
      "id": "p06s01u08",
      "startTime": 624.987,
      "endTime": 631.662,
      "textEn": "The reviewer can also see the confidence score — to know which parts are solid and which need a closer look.",
      "textZh": "審查員也可以看到信心分數——了解哪些部分明確，哪些需要更仔細查看。",
      "slidePage": 16
    },
    {
      "id": "p06s01u09",
      "startTime": 631.662,
      "endTime": 637.112,
      "textEn": "In short, this report turns complex claim information into a clear, traceable recommendation.",
      "textZh": "簡單來說，這份報告把複雜的理賠資訊轉化成清楚且可追溯的建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u10",
      "startTime": 637.112,
      "endTime": 643.65,
      "textEn": "So far, we've seen CAELIA applied in claims review — from AI reasoning to pre-assessment decision support.",
      "textZh": "到目前為止，我們已看到 CAELIA 如何應用在理賠審查中——從 AI 推理到預審決策支援。",
      "slidePage": 16
    },
    {
      "id": "p06s01u11",
      "startTime": 643.65,
      "endTime": 649.337,
      "textEn": "Next, I'll explain how this can go beyond claims review and create value for actuarial work.",
      "textZh": "接下來，我會說明它如何延伸到理賠審查之外，並為精算工作創造價值。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 649.337,
      "endTime": 655.45,
      "textEn": "So we've seen how CAELIA supports claims review. Now, let's look at what this means for actuarial work.",
      "textZh": "我們已經看到 CAELIA 如何支援理賠審查。現在，讓我們看看這對精算工作代表什麼。",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 655.45,
      "endTime": 661.65,
      "textEn": "Before CAELIA, claims data was often unstructured, such as medical records, forms, and medical images.",
      "textZh": "在 CAELIA 之前，理賠資料通常是非結構化的，例如醫療紀錄、表格和醫療影像。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 661.65,
      "endTime": 666.15,
      "textEn": "As a result, it was hard to reuse that information for actuarial analysis.",
      "textZh": "因此，這些資訊很難被重複用於精算分析。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 666.15,
      "endTime": 671.712,
      "textEn": "With CAELIA, those claim records can be transformed into structured, actuarial-ready data.",
      "textZh": "有了 CAELIA，這些理賠紀錄可以被轉化成結構化、可供精算使用的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 671.712,
      "endTime": 678.038,
      "textEn": "The output has three layers: the claim result, the policy and decision basis, and the medical assessment.",
      "textZh": "這個輸出有三個層次：理賠結果、保單與決策依據，以及醫療評估。",
      "slidePage": 17
    },
    {
      "id": "p06s02u06",
      "startTime": 678.038,
      "endTime": 685.413,
      "textEn": "For example, we can capture details like ICD information, treatment codes, operation codes, and other medical indicators.",
      "textZh": "例如，我們可以擷取 ICD 資訊、治療代碼、手術代碼，以及其他醫療指標。",
      "slidePage": 17
    },
    {
      "id": "p06s02u07",
      "startTime": 685.413,
      "endTime": 692.725,
      "textEn": "With these three layers, actuaries can bring claims experience back into assumptions more frequently, not just at year-end.",
      "textZh": "有了這三個層次，精算師可以更頻繁地將理賠經驗回饋到假設中，而不只是年底。",
      "slidePage": 17
    },
    {
      "id": "p06s02u08",
      "startTime": 692.725,
      "endTime": 696.625,
      "textEn": "In short, CAELIA turns claims records into actuarial-ready data.",
      "textZh": "簡單來說，CAELIA 將理賠紀錄轉化為可供精算使用的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u09",
      "startTime": 696.625,
      "endTime": 701.938,
      "textEn": "In the next two slides, I'll show you how this supports experience analysis and pricing.",
      "textZh": "接下來兩頁，我會說明這如何支援經驗分析與定價。",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 701.938,
      "endTime": 710.663,
      "textEn": "Let's start with experience analysis, and I'll use this example to show the difference between outcome-based analysis and cause-based analysis.",
      "textZh": "我們先從經驗分析開始，我會用這個例子說明結果導向分析和原因導向分析的差異。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 710.663,
      "endTime": 716.538,
      "textEn": "In this example, we have an 80-year-old male with an accidental death claim after a fall.",
      "textZh": "在這個例子中，有一位 80 歲男性在跌倒後申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 716.538,
      "endTime": 724.488,
      "textEn": "Before CAELIA, traditional experience analysis is outcome-based. It groups all accidental death cases together to calculate incidence.",
      "textZh": "在 CAELIA 之前，傳統經驗分析是以結果為基礎。它會把所有意外死亡案件放在一起計算發生率。",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 724.488,
      "endTime": 732.475,
      "textEn": "The limitation is it cannot distinguish external causes — like a pure accident — from internal ones, like Parkinson's or dementia.",
      "textZh": "它的限制在於，無法區分外部原因——如純粹意外——和內部原因——如帕金森氏症或失智症。",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 732.475,
      "endTime": 735.613,
      "textEn": "So the question is: was this really a pure accident?",
      "textZh": "所以問題是：這真的是純粹意外嗎？",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 735.613,
      "endTime": 739.875,
      "textEn": "With CAELIA, we can go deeper and look at the cause behind the claim.",
      "textZh": "有了 CAELIA，我們可以更深入地看理賠背後的原因。",
      "slidePage": 18
    },
    {
      "id": "p06s03u07",
      "startTime": 739.875,
      "endTime": 746.975,
      "textEn": "It classifies each case into three categories: external cause, internal cause, or disputed — needing further review.",
      "textZh": "它將案件分為三類：外部原因、內部原因，或需進一步審查的爭議案件。",
      "slidePage": 18
    },
    {
      "id": "p06s03u08",
      "startTime": 746.975,
      "endTime": 752.863,
      "textEn": "This helps us exclude or downweight disputed cases and build a cleaner experience study population.",
      "textZh": "這能幫助我們排除或降低爭議案件的權重，並建立更乾淨的經驗分析母體。",
      "slidePage": 18
    },
    {
      "id": "p06s03u09",
      "startTime": 752.863,
      "endTime": 759.575,
      "textEn": "In short, cleaner data means better incidence estimates, better risk segmentation, and more reliable assumptions.",
      "textZh": "簡單來說，更乾淨的資料帶來更好的發生率估計、風險分群，以及更可靠的假設。",
      "slidePage": 18
    },
    {
      "id": "p06s03u10",
      "startTime": 759.575,
      "endTime": 763.775,
      "textEn": "Next, I'll show you how the same cause-based idea applies to pricing.",
      "textZh": "接下來，我會說明同樣的原因導向概念如何應用到定價。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 763.775,
      "endTime": 770.888,
      "textEn": "Now let's look at pricing. Here, we'll first compare the two approaches, and then walk through the lung cancer example.",
      "textZh": "現在我們來看定價。這裡我們會先比較兩種方法，然後再看肺癌案例。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 770.888,
      "endTime": 773.963,
      "textEn": "On the left, traditional pricing is outcome-based.",
      "textZh": "左邊，傳統定價是以結果為基礎。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 773.963,
      "endTime": 780.2,
      "textEn": "It observes that lung cancer claim costs are increasing, and then aggregates all lung cancer cases together.",
      "textZh": "它觀察到肺癌理賠成本上升，然後把所有肺癌案件放在一起。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 780.2,
      "endTime": 786.088,
      "textEn": "The problem is that it cannot clearly distinguish disease severity or utilization differences.",
      "textZh": "問題是，它無法清楚區分疾病嚴重程度或醫療使用差異。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 786.088,
      "endTime": 790.838,
      "textEn": "So the result may be a higher average cost and a potential premium increase.",
      "textZh": "所以結果可能是平均成本上升，進而可能造成保費調升。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 790.838,
      "endTime": 793.675,
      "textEn": "With CAELIA, AI-driven pricing is cause-based.",
      "textZh": "有了 CAELIA，AI 驅動定價是以原因為基礎。",
      "slidePage": 19
    },
    {
      "id": "p06s04u07",
      "startTime": 793.675,
      "endTime": 800.963,
      "textEn": "It looks at the drivers behind the cost and separates cases by disease-driven risk and utilization-driven behavior.",
      "textZh": "它會看成本背後的驅動因素，並依照疾病驅動風險和醫療使用行為來區分案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u08",
      "startTime": 800.963,
      "endTime": 806.575,
      "textEn": "This allows us to apply differentiated pricing strategies based on the real risk drivers.",
      "textZh": "這讓我們可以根據真正的風險驅動因素，應用差異化的定價策略。",
      "slidePage": 19
    },
    {
      "id": "p06s04u09",
      "startTime": 806.575,
      "endTime": 811.513,
      "textEn": "Now let's take lung cancer cases as an example and look at these 100 cases.",
      "textZh": "現在我們以肺癌案件為例，來看這 100 件案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 811.513,
      "endTime": 818.463,
      "textEn": "CAELIA separates them into 70 standard cases, 20 high-intensity cases, and 10 borderline cases.",
      "textZh": "CAELIA 將它們區分為 70 件標準案件、20 件高強度案件，以及 10 件邊界案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u11",
      "startTime": 818.463,
      "endTime": 826.15,
      "textEn": "With this breakdown, actuaries can refine assumptions, apply segmented pricing, and support better policy and benefit design.",
      "textZh": "有了這樣的拆解，精算師可以精修假設、應用分群定價，並支援更好的保單與給付設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u12",
      "startTime": 826.15,
      "endTime": 833.0,
      "textEn": "With that, pricing becomes more accurate, risk becomes more controllable, and products become more competitive.",
      "textZh": "如此一來，定價更準確、風險更可控，商品也更具競爭力。",
      "slidePage": 19
    },
    {
      "id": "p06s04u13",
      "startTime": 833.0,
      "endTime": 840.8,
      "textEn": "So far, we've seen what CAELIA produces and how it feeds insights back into actuarial work — experience analysis and pricing.",
      "textZh": "到目前為止，我們已看到 CAELIA 的產出，以及它如何將洞察回饋到精算工作——經驗分析與定價。",
      "slidePage": 19
    },
    {
      "id": "p06s04u14",
      "startTime": 840.8,
      "endTime": 846.688,
      "textEn": "Next, I'll walk you through what sits behind CAELIA: the knowledge foundation that supports the AI agents.",
      "textZh": "接下來，我會帶大家看 CAELIA 背後的基礎：支援 AI Agent 的知識基底。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 846.688,
      "endTime": 852.0,
      "textEn": "So this is what sits behind CAELIA: the knowledge foundation that supports the AI agents.",
      "textZh": "這就是 CAELIA 背後的基礎：支援 AI Agent 的知識基底。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 852.0,
      "endTime": 860.475,
      "textEn": "The knowledge comes from three sources: Claims Operations Policies, Product Terms and Rules, and the Medical Knowledge and Disease Library.",
      "textZh": "知識來自三個來源：理賠作業準則、商品條款與規則，以及醫療知識與疾病資料庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 860.475,
      "endTime": 868.575,
      "textEn": "Each agent then uses the knowledge it needs for its own task, such as medical reasoning, policy analysis, or benefit determination.",
      "textZh": "接著，每個 Agent 會依照自己的任務使用所需的知識，例如醫療推理、保單分析或給付判定。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 868.575,
      "endTime": 875.663,
      "textEn": "This gives us traceability, because we can see where each conclusion comes from and help make the output explainable.",
      "textZh": "這讓我們具備可追溯性，因為我們可以看到每個結論的來源，並讓輸出更具可解釋性。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 875.663,
      "endTime": 878.75,
      "textEn": "This design makes the system much easier to govern.",
      "textZh": "這樣的設計讓系統更容易治理。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 878.75,
      "endTime": 885.475,
      "textEn": "As knowledge and policy terms evolve, we can update the relevant agent without rebuilding the whole system.",
      "textZh": "隨著知識與保單條款演進，我們可以更新相關 Agent，而不需要重建整個系統。",
      "slidePage": 20
    },
    {
      "id": "p07s01u07",
      "startTime": 885.475,
      "endTime": 891.788,
      "textEn": "In short, structured and governed knowledge enables consistent, trustworthy, and explainable decisions.",
      "textZh": "簡單來說，結構化且受治理的知識能支持一致、可信且可解釋的決策。",
      "slidePage": 20
    },
    {
      "id": "p07s01u08",
      "startTime": 891.788,
      "endTime": 897.325,
      "textEn": "Next, I'll show you how this foundation is used to build the Policy Interpretation Agent.",
      "textZh": "接下來，我會說明這個基底如何用來建立保單解讀 Agent。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 897.325,
      "endTime": 903.088,
      "textEn": "Now let's look at one of the most critical agents in CAELIA: the Policy Interpretation Agent.",
      "textZh": "現在我們來看 CAELIA 中最關鍵的 Agent 之一：保單解讀 Agent。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 903.088,
      "endTime": 908.113,
      "textEn": "As you can see on the slide, this is the full workflow, from input data to structured output.",
      "textZh": "如同大家在投影片上看到的，這是完整流程，從輸入資料到結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 908.113,
      "endTime": 914.9,
      "textEn": "The agent starts with three types of input: policy documents, applicant and coverage data, and the claim case summary.",
      "textZh": "這個 Agent 會從三類輸入開始：保單文件、申請人與保障資料，以及理賠案件摘要。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 914.9,
      "endTime": 922.913,
      "textEn": "Then it works through four steps: understand the claim, determine applicability, identify exclusions, and produce a structured output.",
      "textZh": "接著，它會經過四個步驟：理解理賠內容、判斷適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 922.913,
      "endTime": 932.225,
      "textEn": "The output covers everything the reviewer needs: applicable coverage, coverage determination, exclusion determination, and the final decision rationale.",
      "textZh": "輸出涵蓋審查員需要的一切：適用承保範圍、承保認定、除外條款認定，以及最終決策依據。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 932.225,
      "endTime": 939.013,
      "textEn": "In short, the reviewer can clearly see what is covered, what is excluded, and why the recommendation was made.",
      "textZh": "簡單來說，審查員可以清楚看到什麼被承保、什麼被除外，以及為什麼做出這個建議。",
      "slidePage": 21
    },
    {
      "id": "p07s02u07",
      "startTime": 939.013,
      "endTime": 944.025,
      "textEn": "So far, we've covered what CAELIA can do across claims review and actuarial work.",
      "textZh": "到目前為止，我們已介紹 CAELIA 在理賠審查和精算工作中能做到什麼。",
      "slidePage": 21
    },
    {
      "id": "p07s02u08",
      "startTime": 944.025,
      "endTime": 950.313,
      "textEn": "Now, let's bring everything together and look at what CAELIA actually delivers for the organization.",
      "textZh": "現在，讓我們把前面的內容整合起來，看看 CAELIA 實際上為組織帶來什麼價值。",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 950.313,
      "endTime": 957.675,
      "textEn": "To bring everything together, CAELIA creates value in four areas: operations, risk control, governance, and actuarial work.",
      "textZh": "綜合來看，CAELIA 在四個面向創造價值：營運、風險控管、治理，以及精算工作。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 957.675,
      "endTime": 965.225,
      "textEn": "For operations, it reduces review time and frees reviewers to focus on judgment — saving about 30 percent per case.",
      "textZh": "在營運方面，它縮短審查時間，讓審查員專注在判斷上——每件案件約節省 30%。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 965.225,
      "endTime": 970.125,
      "textEn": "For risk control, CAELIA helps catch inconsistencies and fraud signals earlier.",
      "textZh": "在風險控管方面，CAELIA 能協助更早發現不一致與詐欺訊號。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 970.125,
      "endTime": 978.975,
      "textEn": "For governance, traceable reasoning and human oversight make AI output explainable and auditable, which is essential in a regulated industry.",
      "textZh": "在治理方面，可追溯的推理與人工監督讓 AI 輸出可解釋、可稽核，這在受監理的產業中不可或缺。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 978.975,
      "endTime": 987.05,
      "textEn": "And for actuarial work, it turns claims records into useful data for experience studies, pricing, reserving, and product monitoring.",
      "textZh": "在精算工作方面，它將理賠紀錄轉化為可用資料，支援經驗研究、定價、準備金與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 987.05,
      "endTime": 993.95,
      "textEn": "So stepping back, our perspective is this: AI in insurance creates value that goes far beyond efficiency alone.",
      "textZh": "退一步來看，我們的觀點是：保險業的 AI 創造的價值遠不只效率本身。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 993.95,
      "endTime": 1002.013,
      "textEn": "CAELIA can be more than a processing tool — a foundation for better decisions, stronger governance, and richer actuarial insights.",
      "textZh": "CAELIA 可以不只是處理工具——更是更好決策、更強治理與更豐富精算洞察的基礎。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 1002.013,
      "endTime": 1005.95,
      "textEn": "Thank you so much for your time. We'd be happy to take your questions.",
      "textZh": "非常感謝各位的時間。我們很樂意接受大家的提問。",
      "slidePage": 22
    }
  ]
};
