import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 915.475,
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
      "endTime": 397.137,
      "textEn": "Hi everyone, I'm Li Yu — let me walk you through the next few slides.",
      "textZh": "大家好，我是 Li Yu——讓我帶你們看接下來幾頁。",
      "slidePage": 13
    },
    {
      "id": "p05s01u02",
      "startTime": 397.137,
      "endTime": 403.937,
      "textEn": "Yu Chung just showed us how Agentic AI works in our system — so now let's look at what it actually produces.",
      "textZh": "諭忠剛剛介紹了 Agentic AI 在我們系統中的運作方式——那我們來看看它實際上產出了什麼。",
      "slidePage": 13
    },
    {
      "id": "p05s01u03",
      "startTime": 403.937,
      "endTime": 411.937,
      "textEn": "On this slide, I'll walk you through the AI reasoning output — from the raw claims input all the way to the final recommendation.",
      "textZh": "在這頁，我會帶你們看 AI 推理輸出的過程——從原始理賠輸入到最終建議。",
      "slidePage": 13
    },
    {
      "id": "p05s01u04",
      "startTime": 411.937,
      "endTime": 421.075,
      "textEn": "The AI takes unstructured data — medical documents, policy terms, historical cases — and starts reasoning step by step using our multi-agent system.",
      "textZh": "AI 接收非結構化的資料——醫療文件、保單條款、歷史案件——然後透過我們的多代理系統一步一步進行推理。",
      "slidePage": 13
    },
    {
      "id": "p05s01u05",
      "startTime": 421.075,
      "endTime": 426.637,
      "textEn": "In this case, a kidney stone patient receives ESWL treatment with a three-day hospitalization.",
      "textZh": "在這個案例中，一位腎結石患者接受了 ESWL 治療，並住院三天。",
      "slidePage": 13
    },
    {
      "id": "p05s01u06",
      "startTime": 426.637,
      "endTime": 435.625,
      "textEn": "The agents check the policy terms and medical guidelines — and find a conflict. ESWL is typically outpatient care, so three days is questionable.",
      "textZh": "各個 Agent 核查保單條款和醫療準則——發現了衝突。ESWL 通常是門診手術，所以三天的住院值得懷疑。",
      "slidePage": 13
    },
    {
      "id": "p05s01u07",
      "startTime": 435.625,
      "endTime": 441.512,
      "textEn": "It recommends the surgical benefit is payable, but flags the hospitalization for manual review.",
      "textZh": "AI 建議外科給付可以核付，但將住院部分標記需要人工審查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u08",
      "startTime": 441.512,
      "endTime": 448.625,
      "textEn": "The 92 percent confidence score is based on our policy terms, medical guidelines, and historical claims data.",
      "textZh": "92% 的信心分數是基於我們的保單條款、醫療準則和歷史理賠資料。",
      "slidePage": 13
    },
    {
      "id": "p05s01u09",
      "startTime": 448.625,
      "endTime": 455.05,
      "textEn": "So this is the real AI reasoning output — it helps reviewers make faster and more consistent decisions.",
      "textZh": "這就是真實的 AI 推理輸出——幫助審查員做出更快、更一致的決策。",
      "slidePage": 13
    },
    {
      "id": "p05s01u10",
      "startTime": 455.05,
      "endTime": 457.825,
      "textEn": "Next, I'll show you how we actually built this.",
      "textZh": "接下來，我會介紹我們是如何建立這個系統的。",
      "slidePage": 13
    },
    {
      "id": "p05s02u01",
      "startTime": 457.825,
      "endTime": 461.825,
      "textEn": "So this is CAELIA — Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "這就是 CAELIA——Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 14
    },
    {
      "id": "p05s02u02",
      "startTime": 461.825,
      "endTime": 468.5,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。",
      "slidePage": 14
    },
    {
      "id": "p05s02u03",
      "startTime": 468.5,
      "endTime": 473.725,
      "textEn": "On this slide, I'd like to share our multi-agent design — and the thinking behind it.",
      "textZh": "在這頁，我想介紹我們的多代理設計——以及背後的思考邏輯。",
      "slidePage": 14
    },
    {
      "id": "p05s02u04",
      "startTime": 473.725,
      "endTime": 481.487,
      "textEn": "Think of it like a claims team — one agent reads the documents, one checks the medical facts, one interprets the policy terms.",
      "textZh": "把它想像成一個理賠團隊——一個 Agent 讀文件，一個查核醫療事實，一個解讀保單條款。",
      "slidePage": 14
    },
    {
      "id": "p05s02u05",
      "startTime": 481.487,
      "endTime": 485.912,
      "textEn": "Each one focuses on a specific part of the job — so nothing gets missed.",
      "textZh": "每個 Agent 專注在特定的工作上——確保沒有任何事情被遺漏。",
      "slidePage": 14
    },
    {
      "id": "p05s02u06",
      "startTime": 485.912,
      "endTime": 492.45,
      "textEn": "At the center, CAELIA’s Lead Agent coordinates all of them and pulls everything into one final recommendation.",
      "textZh": "在中心，CAELIA 的 Lead Agent 負責協調所有 Agent，並整合成一份最終建議。",
      "slidePage": 14
    },
    {
      "id": "p05s02u07",
      "startTime": 492.45,
      "endTime": 497.312,
      "textEn": "Now let me show you the full architecture of how all of this actually comes together.",
      "textZh": "現在讓我展示這一切是如何組合在一起的完整架構。",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 497.312,
      "endTime": 501.738,
      "textEn": "So we just introduced CAELIA — now let's look at what's actually inside.",
      "textZh": "我們剛介紹了 CAELIA——現在來看看裡面實際上有什麼。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 501.738,
      "endTime": 508.338,
      "textEn": "This is the Multi-Agent Architecture Overview — you can see the full flow from input all the way to output.",
      "textZh": "這是多代理架構總覽——可以看到從輸入到輸出的完整流程。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 508.338,
      "endTime": 514.438,
      "textEn": "At the core is the Lead Agent — the Orchestrator — with four supporting agents working underneath it.",
      "textZh": "核心是主導 Agent——Orchestrator——底下有四個支援 Agent 協同運作。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 514.438,
      "endTime": 520.737,
      "textEn": "There's a Document agent, a Policy agent, a Medical Reasoning agent, and a Benefit Determination agent.",
      "textZh": "有 Document Agent、Policy Agent、Medical Reasoning Agent 和 Benefit Determination Agent。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 520.737,
      "endTime": 522.987,
      "textEn": "Each does one thing, and does it well.",
      "textZh": "每個 Agent 只做一件事，而且做得好。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 522.987,
      "endTime": 527.025,
      "textEn": "That focus is what keeps the system flexible and easy to govern.",
      "textZh": "這種專注正是讓系統保持靈活且易於治理的關鍵。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 527.025,
      "endTime": 535.525,
      "textEn": "And as medical practices, policy terms, or fraud patterns evolve — we can just update the relevant agent, without rebuilding the whole system.",
      "textZh": "隨著醫療行為、保單條款或詐欺模式的演進，我們只需更新相關 Agent，不用重建整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u08",
      "startTime": 535.525,
      "endTime": 538.237,
      "textEn": "Let me show you what this actually produces.",
      "textZh": "讓我展示這個架構實際上產出了什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 538.237,
      "endTime": 543.3,
      "textEn": "So this is what CAELIA actually produces — the AI Pre-Assessment Decision Report.",
      "textZh": "這就是 CAELIA 實際產出的東西——AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 543.3,
      "endTime": 551.3,
      "textEn": "It covers everything the reviewer needs — what happened, what the documents say, which policy terms apply, and what the AI recommends.",
      "textZh": "它涵蓋了審查員所需要的一切——發生了什麼、文件怎麼說、適用哪些保單條款，以及 AI 的建議是什麼。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 551.3,
      "endTime": 558.125,
      "textEn": "On this slide, the full dashboard shows the flow — from raw claims data to traceable decision recommendations.",
      "textZh": "在這頁，完整的儀表板展示了整個流程——從原始理賠資料到可追溯的決策建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 558.125,
      "endTime": 562.763,
      "textEn": "On the left is the claim application and all the supporting medical documents.",
      "textZh": "左側是理賠申請和所有支持性醫療文件。",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 562.763,
      "endTime": 569.038,
      "textEn": "In the middle is the full case flow — from when the claim came in, all the way to the final recommendation.",
      "textZh": "中間是完整的案件流程——從理賠提交到最終建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 569.038,
      "endTime": 576.913,
      "textEn": "Below that, the AI Pre-Assessment Summary breaks down each benefit item — surgical is payable, hospitalization is questionable.",
      "textZh": "下面的 AI 預審摘要列出了每個給付項目的結果——外科給付核付，住院存疑。",
      "slidePage": 16
    },
    {
      "id": "p06s01u07",
      "startTime": 576.913,
      "endTime": 586.025,
      "textEn": "On the right, the AI Decision Recommendation shows: Surgical Benefit — Payable, Hospitalization — Questionable, and the final decision — Manual Review.",
      "textZh": "右側，AI 決策建議顯示：外科給付——核付，住院——存疑，最終決定——人工審查。",
      "slidePage": 16
    },
    {
      "id": "p06s01u08",
      "startTime": 586.025,
      "endTime": 594.1,
      "textEn": "It shows a 92 percent confidence score — so the reviewer can quickly tell which parts are solid and which ones need a closer look.",
      "textZh": "信心分數顯示 92%——讓審查員可以快速判斷哪些部分穩固、哪些需要更仔細審視。",
      "slidePage": 16
    },
    {
      "id": "p06s01u09",
      "startTime": 594.1,
      "endTime": 598.55,
      "textEn": "That's the pre-assessment report. Next, I'll show you the value it creates.",
      "textZh": "這就是預審報告。接下來，我會展示它創造的價值。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 598.55,
      "endTime": 604.963,
      "textEn": "So we just saw the AI pre-assessment report. Now, what does CAELIA actually mean for actuarial analysis?",
      "textZh": "我們剛看完 AI 預審報告。那 CAELIA 對精算分析的意義是什麼？",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 604.963,
      "endTime": 613.338,
      "textEn": "Before CAELIA, claims data was unstructured — medical records, forms, images — and the results were hard to reuse for actuarial analysis.",
      "textZh": "在 CAELIA 之前，理賠資料是非結構化的——醫療紀錄、表格、圖片——難以重用，也難以支援精算分析。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 613.338,
      "endTime": 617.313,
      "textEn": "Now, CAELIA transforms that into structured, actuarial-ready data.",
      "textZh": "現在，CAELIA 將這些資料轉化為結構化的、可供精算使用的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 617.313,
      "endTime": 625.763,
      "textEn": "The structured output that CAELIA produces has three layers: the claim result, the policy and decision basis, and the full medical assessment.",
      "textZh": "CAELIA 產出的結構化輸出有三個層次：理賠結果、保單與決策依據，以及完整的醫療評估。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 625.763,
      "endTime": 634.063,
      "textEn": "And with these three layers, actuaries can now bring claims experience back into assumptions much more frequently — not just at year-end.",
      "textZh": "有了這三個層次，精算師現在可以更頻繁地將理賠經驗帶回假設中更新——而不只是在年底。",
      "slidePage": 17
    },
    {
      "id": "p06s02u06",
      "startTime": 634.063,
      "endTime": 644.05,
      "textEn": "In short, CAELIA turns claims records into actuarial-ready data — and in the next two slides, I'll show you what that means for Experience Analysis and Pricing.",
      "textZh": "簡言之，CAELIA 將理賠紀錄轉化為可供精算使用的資料——接下來兩頁，我會展示這對經驗分析和定價的意義。",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 644.05,
      "endTime": 649.763,
      "textEn": "So let's start with Experience Analysis — and I'll use a real example to show you the difference.",
      "textZh": "那我們從經驗分析開始——我用一個實際案例來展示差別。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 649.763,
      "endTime": 654.838,
      "textEn": "For example, an 80-year-old male with an accidental death claim after a fall.",
      "textZh": "例如，一位 80 歲男性在跌倒後申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 654.838,
      "endTime": 668.3,
      "textEn": "Traditional analysis just pools all accidental death cases together — it doesn't ask whether the cause was external, or something like degeneration or disease. That makes the risk pool messy, and pricing ends up off.",
      "textZh": "傳統分析把所有意外死亡案件全部加在一起——不問成因是外部的，還是像退化或疾病這樣的內部因素。這讓風險池變得不乾淨，定價也會偏差。",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 668.3,
      "endTime": 683.438,
      "textEn": "But Cause-Based Analysis goes deeper — was there an underlying disease, like Parkinson's or dementia, that actually caused the fall? It separates those cases out, flags the ones that need further review, and builds a cleaner analysis population.",
      "textZh": "但以原因為基礎的分析更深入——這次跌倒背後有沒有潛在疾病，像是帕金森氏症或失智症，才是真正的原因？它把這些案件分開，標記需要進一步審查的，並建立更乾淨的分析母體。",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 683.438,
      "endTime": 690.975,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean our experience study population is.",
      "textZh": "這個區別改變了我們估計發生率、進行風險分群，以及確保經驗研究母體乾淨的方式。",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 690.975,
      "endTime": 693.725,
      "textEn": "Next, let me show you how this applies to pricing.",
      "textZh": "接下來，讓我展示這如何應用到定價上。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 693.725,
      "endTime": 695.5,
      "textEn": "Now let's talk about pricing.",
      "textZh": "現在談定價。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 695.5,
      "endTime": 703.338,
      "textEn": "Traditional pricing is outcome-based — it observes an increase in lung cancer claim costs, and aggregates all cases together.",
      "textZh": "傳統定價以結果為基礎——它觀察到肺癌理賠費用增加，然後把所有案件加在一起。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 703.338,
      "endTime": 710.013,
      "textEn": "AI-Driven Pricing is cause-based — it understands the drivers and applies differentiated pricing strategies.",
      "textZh": "AI 驅動的定價以原因為基礎——它理解驅動因素並應用差異化的定價策略。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 710.013,
      "endTime": 716.875,
      "textEn": "The difference is: traditional pricing sees the total cost, but AI pricing tells you what's actually driving it.",
      "textZh": "差別在於：傳統定價看到的是總費用，但 AI 定價告訴你是什麼在驅動它。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 716.875,
      "endTime": 721.375,
      "textEn": "Take lung cancer as an example — looking at 100 cases together.",
      "textZh": "以肺癌為例——看 100 件案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 721.375,
      "endTime": 733.75,
      "textEn": "Traditional pricing just tells you costs are going up. But cause analysis breaks that down — 70 standard cases, 20 high-intensity ones, and 10 borderline cases with policy disputes.",
      "textZh": "傳統定價只告訴你費用在上升。但原因分析把它拆開來——70 件標準案件、20 件高強度案件，以及 10 件有保單爭議的邊界案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u07",
      "startTime": 733.75,
      "endTime": 741.138,
      "textEn": "Now you can refine your assumptions, apply segmented pricing, and redesign benefits to limit unnecessary medical costs.",
      "textZh": "現在你可以精修假設、應用分群定價，以及重新設計給付來限制不必要的醫療費用。",
      "slidePage": 19
    },
    {
      "id": "p06s04u08",
      "startTime": 741.138,
      "endTime": 747.963,
      "textEn": "With that, pricing becomes more accurate, risk becomes more controllable, and products become more competitive.",
      "textZh": "如此一來，定價更準確、風險更可控、商品更具競爭力。",
      "slidePage": 19
    },
    {
      "id": "p06s04u09",
      "startTime": 747.963,
      "endTime": 752.313,
      "textEn": "So we've seen how CAELIA extends into experience analysis and pricing.",
      "textZh": "我們已經看過 CAELIA 如何延伸到經驗分析和定價。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 752.313,
      "endTime": 761.113,
      "textEn": "And to make all of this work, CAELIA needs a solid knowledge foundation — so let me introduce how we build it and how the agents actually use it.",
      "textZh": "要讓這一切運作，CAELIA 需要一個紮實的知識基底——讓我介紹我們如何建立它以及各 Agent 如何使用它。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 761.113,
      "endTime": 763.75,
      "textEn": "So this is the Knowledge Foundation behind CAELIA.",
      "textZh": "這就是 CAELIA 背後的知識基底。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 763.75,
      "endTime": 773.225,
      "textEn": "For CAELIA, that knowledge comes from three sources — Claims Operations Policies, Product Terms and Rules, and the Medical Knowledge and Disease Library.",
      "textZh": "對 CAELIA 來說，這個知識來自三個來源——理賠作業準則、商品條款與規則，以及醫療知識與疾病資料庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 773.225,
      "endTime": 779.963,
      "textEn": "Each agent has its own knowledge base — so when it reasons through a case, it pulls directly from these sources.",
      "textZh": "每個 Agent 都有自己的知識庫——當它對案件進行推理時，直接從這些來源取用。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 779.963,
      "endTime": 785.888,
      "textEn": "When the AI uses a policy clause or a medical fact, we need to know exactly where it came from.",
      "textZh": "當 AI 引用保單條款或醫療事實時，我們需要確切知道它從哪裡來。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 785.888,
      "endTime": 793.588,
      "textEn": "That's what keeps the system controllable — the AI reasons from approved knowledge, not guesswork, which reduces hallucination.",
      "textZh": "這就是讓系統保持可控的關鍵——AI 從核准的知識推理，而不是猜測，這也減少了幻覺的發生。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 793.588,
      "endTime": 801.8,
      "textEn": "So CAELIA has this knowledge foundation — and we use it to build our agents. Let me show you how we build the Policy Interpretation Agent.",
      "textZh": "所以 CAELIA 有這個知識基底——我們用它來建立各個 Agent。讓我展示我們如何建立保單解讀 Agent。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 801.8,
      "endTime": 807.263,
      "textEn": "So this is the Policy Interpretation Agent — one of the most critical agents in CAELIA.",
      "textZh": "這就是保單解讀 Agent——CAELIA 中最關鍵的 Agent 之一。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 807.263,
      "endTime": 813.125,
      "textEn": "On this slide, you can see the full workflow — from input data all the way to structured output.",
      "textZh": "在這頁，你可以看到完整的工作流程——從輸入資料到結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 813.125,
      "endTime": 819.3,
      "textEn": "The agent takes in the claims information, the medical documents, and the applicant's policy details.",
      "textZh": "這個 Agent 接收理賠資訊、醫療文件和申請人的保單詳情。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 819.3,
      "endTime": 827.6,
      "textEn": "It then works through four steps — understand the claim, determine applicability, identify exclusions, and generate a structured output.",
      "textZh": "然後它執行四個步驟——理解理賠內容、確定適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 827.6,
      "endTime": 835.7,
      "textEn": "The output covers everything: applicable coverage, coverage determination, exclusion determination, and the full decision rationale.",
      "textZh": "輸出涵蓋一切：適用承保範圍、承保認定、除外條款認定，以及完整的決策依據。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 835.7,
      "endTime": 845.162,
      "textEn": "CAELIA's output clearly shows what's covered, what's excluded, and the full decision explanation — so the reviewer has everything they need in one place.",
      "textZh": "CAELIA 的輸出清楚顯示什麼被承保、什麼被除外，以及完整的決策說明——讓審查員在一個地方看到所有需要的資訊。",
      "slidePage": 21
    },
    {
      "id": "p07s02u07",
      "startTime": 845.162,
      "endTime": 855.325,
      "textEn": "So we've walked through CAELIA's architecture and how it feeds into actuarial analysis. To bring it all together — here's what CAELIA delivers for the organization.",
      "textZh": "我們已經介紹了 CAELIA 的架構以及它如何回饋到精算實務分析。綜合來說——這就是 CAELIA 為組織帶來的價值。",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 855.325,
      "endTime": 860.825,
      "textEn": "The value shows up in four areas: operations, risk control, governance, and actuarial work.",
      "textZh": "這個價值體現在四個面向：營運、風險控管、治理，以及精算工作。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 860.825,
      "endTime": 870.812,
      "textEn": "For operations, CAELIA cuts review time and frees people up to focus on judgment — in our claims team, reviewers save roughly 30 percent of their time per case.",
      "textZh": "在營運方面，CAELIA 縮短審查時間，讓人可以專注在判斷上——在我們的理賠團隊中，審理人員每件案件約可節省 30% 的時間。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 870.812,
      "endTime": 875.2,
      "textEn": "For risk control, it catches inconsistencies and fraud signals earlier.",
      "textZh": "在風險控管方面，系統能更早發現不一致與詐欺訊號。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 875.2,
      "endTime": 883.537,
      "textEn": "For governance, traceable reasoning and human oversight make AI output explainable and auditable — essential in a regulated industry.",
      "textZh": "在治理方面，可追溯的推理與人工監督讓 AI 輸出可解釋、可稽核——在受監理的產業中不可或缺。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 883.537,
      "endTime": 894.687,
      "textEn": "And for actuarial work, claims data goes from unstructured records to something you can actually analyze — supporting experience studies, pricing, reserving, and product monitoring.",
      "textZh": "在精算工作方面，理賠資料從非結構化的記錄，變成真正可以分析的素材——支援經驗研究、定價、準備金與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 894.687,
      "endTime": 901.862,
      "textEn": "And stepping back, that's the real lesson: AI in insurance creates value that goes far deeper than efficiency alone.",
      "textZh": "退一步來看，這就是真正的啟示：保險業的 AI 能創造的價值，遠比效率本身深遠得多。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 901.862,
      "endTime": 912.05,
      "textEn": "CAELIA is proof that claims AI can be more than a processing tool — it can be a foundation for better decisions, stronger governance, and richer actuarial insight.",
      "textZh": "CAELIA 證明了理賠 AI 可以不只是一個處理工具——它可以成為更好決策、更強治理與更豐富精算洞察的基礎。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 912.05,
      "endTime": 915.475,
      "textEn": "Thank you so much for your time — we'd love to take your questions.",
      "textZh": "非常感謝各位的時間——我們很樂意接受大家的提問。",
      "slidePage": 22
    }
  ]
};
