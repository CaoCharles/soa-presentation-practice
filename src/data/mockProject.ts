import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 1150.083,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0.0,
      "endTime": 5.319,
      "textEn": "Good morning everyone. It's a pleasure to be here at the Asia-Pacific Symposium today.",
      "textZh": "各位好，很高興今天有機會在 Asia-Pacific Symposium 與大家分享。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 5.319,
      "endTime": 12.944,
      "textEn": "My name is Yu Chung Wu from Cathay Life Insurance in Taiwan, and I'm joined today by my colleague Li Yu Tsao.",
      "textZh": "我是來自台灣國泰人壽的 Yu Chung Wu，今天與我一起分享的是我的同事 Li Yu Tsao。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 12.944,
      "endTime": 20.153,
      "textEn": "Today, we would like to share how we are leveraging Agentic AI to improve claims adjudication efficiency and quality.",
      "textZh": "今天我們想分享的是，如何透過 Agentic AI 協助理賠審理提升效率與品質，",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 20.153,
      "endTime": 28.528,
      "textEn": "And more importantly, how we transform claims data into explainable, traceable, and actuarial-ready decision intelligence.",
      "textZh": "並進一步將理賠資料轉化為可解釋、可追溯、且能支援精算分析的 decision intelligence。",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 28.528,
      "endTime": 32.042,
      "textEn": "Before we begin, let us briefly introduce ourselves.",
      "textZh": "在開始之前，先簡單介紹一下我們的背景。",
      "slidePage": 2
    },
    {
      "id": "p01s02u02",
      "startTime": 32.042,
      "endTime": 37.431,
      "textEn": "We are from Cathay Life Insurance, one of the leading life insurers in Taiwan.",
      "textZh": "我們來自國泰人壽，國泰人壽是台灣領先的壽險公司。",
      "slidePage": 2
    },
    {
      "id": "p01s02u03",
      "startTime": 37.431,
      "endTime": 43.5,
      "textEn": "We serve more than 8 million customers with over 20 million policies in force.",
      "textZh": "目前服務超過 800 萬客戶，並擁有超過 2,000 萬張有效保單。",
      "slidePage": 2
    },
    {
      "id": "p01s02u04",
      "startTime": 43.5,
      "endTime": 52.278,
      "textEn": "Both of us currently work as data scientists, focusing on AI applications in claims decision-making and decision intelligence.",
      "textZh": "我們兩位目前都擔任資料科學家，主要專注於 AI 在理賠決策、風險分析與 decision intelligence 的應用。",
      "slidePage": 2
    },
    {
      "id": "p01s02u05",
      "startTime": 52.278,
      "endTime": 57.5,
      "textEn": "Let us begin by looking at the key challenges facing claims operations today.",
      "textZh": "接下來，我們想先從壽險理賠目前面臨的挑戰開始談起。",
      "slidePage": 2
    },
    {
      "id": "p01s03u01",
      "startTime": 57.5,
      "endTime": 63.708,
      "textEn": "Claims operations in the life insurance industry are facing significant structural pressure.",
      "textZh": "在壽險產業中，理賠其實正面臨很大的結構性壓力。",
      "slidePage": 3
    },
    {
      "id": "p01s03u02",
      "startTime": 63.708,
      "endTime": 67.722,
      "textEn": "On one hand, the external environment is becoming more complex.",
      "textZh": "一方面，外部環境越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u03",
      "startTime": 67.722,
      "endTime": 75.972,
      "textEn": "Aging populations continue to drive claims demand, while fraud and risk patterns are also becoming more sophisticated.",
      "textZh": "高齡化持續推升理賠需求，同時詐欺與風險型態也越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u04",
      "startTime": 75.972,
      "endTime": 80.111,
      "textEn": "On the other hand, operational burden is increasing rapidly.",
      "textZh": "另一方面，營運負擔也快速增加。",
      "slidePage": 3
    },
    {
      "id": "p01s03u05",
      "startTime": 80.111,
      "endTime": 85.333,
      "textEn": "Cathay Life now handles more than 1.6 million claims cases every year.",
      "textZh": "國泰人壽目前每年已經處理超過 160 萬件理賠案件。",
      "slidePage": 3
    },
    {
      "id": "p01s03u06",
      "startTime": 85.333,
      "endTime": 91.625,
      "textEn": "But the bigger challenge is that claims volume is growing much faster than workforce capacity.",
      "textZh": "但更大的挑戰是，案件量成長速度遠高於人力成長。",
      "slidePage": 3
    },
    {
      "id": "p01s03u07",
      "startTime": 91.625,
      "endTime": 100.667,
      "textEn": "Over the past few years, claims volume has increased by more than 50%, while workforce growth has only been around 20%.",
      "textZh": "過去幾年，案件量增加超過 50%，但人力只增加大約 20%。",
      "slidePage": 3
    },
    {
      "id": "p01s03u08",
      "startTime": 100.667,
      "endTime": 106.833,
      "textEn": "This makes traditional labor-intensive review models increasingly difficult to sustain.",
      "textZh": "這讓傳統高度依賴人工的審理模式，越來越難支撐。",
      "slidePage": 3
    },
    {
      "id": "p01s03u09",
      "startTime": 106.833,
      "endTime": 112.125,
      "textEn": "Under these pressures, claims operations have continued to evolve over time.",
      "textZh": "而在這樣的壓力之下，理賠流程也開始隨著技術持續演進。",
      "slidePage": 3
    },
    {
      "id": "p02s01u01",
      "startTime": 112.125,
      "endTime": 123.958,
      "textEn": "Back in the 1990s, during the IBM AS400 era, claims processing was mainly transaction-driven and highly dependent on manual and paper-based workflows.",
      "textZh": "最早在 IBM AS400 時代，理賠主要還是以交易處理為主，流程高度依賴人工與紙本作業。",
      "slidePage": 4
    },
    {
      "id": "p02s01u02",
      "startTime": 123.958,
      "endTime": 133.361,
      "textEn": "Later, in the core system era, insurers started digitalizing claims workflows and introducing rule-based engines to improve efficiency.",
      "textZh": "後來進入 core system 時代，我們開始將理賠流程數位化，並導入 rule-based engine 來提升作業效率。",
      "slidePage": 4
    },
    {
      "id": "p02s01u03",
      "startTime": 133.361,
      "endTime": 141.681,
      "textEn": "In the 2020s, machine learning models started being used for risk scoring, anomaly detection, and claims triage.",
      "textZh": "接著在 machine learning 階段，開始利用模型進行風險評分、異常偵測與案件分流。",
      "slidePage": 4
    },
    {
      "id": "p02s01u04",
      "startTime": 141.681,
      "endTime": 145.403,
      "textEn": "However, most models still stayed at the scoring stage.",
      "textZh": "但大部分模型其實還是停留在 scoring 的階段。",
      "slidePage": 4
    },
    {
      "id": "p02s01u05",
      "startTime": 145.403,
      "endTime": 150.708,
      "textEn": "They could identify higher-risk cases, but they could not always explain why.",
      "textZh": "它們可以找出高風險案件，但未必能真正解釋原因。",
      "slidePage": 4
    },
    {
      "id": "p02s01u06",
      "startTime": 150.708,
      "endTime": 155.514,
      "textEn": "Now, we believe claims adjudication is entering the era of Agentic AI.",
      "textZh": "而現在，我們認為理賠正在進入 Agentic AI 時代。",
      "slidePage": 4
    },
    {
      "id": "p02s01u07",
      "startTime": 155.514,
      "endTime": 158.167,
      "textEn": "AI is no longer only providing scores.",
      "textZh": "AI 不再只是提供分數。",
      "slidePage": 4
    },
    {
      "id": "p02s01u08",
      "startTime": 158.167,
      "endTime": 165.819,
      "textEn": "It is starting to become part of the decision process by providing reasoning, evidence, and decision recommendations.",
      "textZh": "而是開始參與整個理賠決策流程，能夠提供 reasoning、evidence，以及 decision recommendations。",
      "slidePage": 4
    },
    {
      "id": "p02s02u01",
      "startTime": 165.819,
      "endTime": 171.667,
      "textEn": "Before we dive into Agentic AI, let us first look at the traditional claims process.",
      "textZh": "在正式介紹 Agentic AI 之前，我們先快速看一下傳統理賠流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u02",
      "startTime": 171.667,
      "endTime": 180.458,
      "textEn": "From claim submission to manual review and final claim decisions, the process is long and highly dependent on human judgment.",
      "textZh": "從客戶申請、人工審理到最終理賠決策，其實是一個非常長、而且高度依賴人工判斷的流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u03",
      "startTime": 180.458,
      "endTime": 188.694,
      "textEn": "Throughout the process, reviewers need to handle medical information, policy interpretation, risk assessment, and claim validation.",
      "textZh": "而且在整個流程中，理賠人員還需要同時處理醫療資訊、條款判讀、風險評估，以及理賠合理性判斷。",
      "slidePage": 5
    },
    {
      "id": "p02s02u04",
      "startTime": 188.694,
      "endTime": 195.972,
      "textEn": "In other words, claims adjudication is not just an operational workflow — it is a complex decision process.",
      "textZh": "換句話說，理賠本質上並不只是流程作業，而是一連串複雜的 decision process。",
      "slidePage": 5
    },
    {
      "id": "p02s02u05",
      "startTime": 195.972,
      "endTime": 200.583,
      "textEn": "And this is exactly where we believe AI can begin to create value.",
      "textZh": "而這也是我們認為 AI 開始能發揮價值的地方。",
      "slidePage": 5
    },
    {
      "id": "p02s02u06",
      "startTime": 200.583,
      "endTime": 207.514,
      "textEn": "However, building Agentic AI requires a series of foundational capabilities and supporting systems.",
      "textZh": "不過為了發展 Agentic AI，其實需要建立一系列基礎能力與支援系統。",
      "slidePage": 5
    },
    {
      "id": "p02s02u07",
      "startTime": 207.514,
      "endTime": 215.569,
      "textEn": "So over the next few slides, I will briefly walk through these foundations before returning to the topic of Agentic AI.",
      "textZh": "所以接下來幾頁，我會先快速介紹這些我們建立的基礎，再回到 Agentic AI 的主題。",
      "slidePage": 5
    },
    {
      "id": "p02s03u01",
      "startTime": 215.569,
      "endTime": 219.986,
      "textEn": "The first foundational capability is digital claims submission.",
      "textZh": "第一個基礎能力，其實是理賠申請流程的數位化。",
      "slidePage": 6
    },
    {
      "id": "p02s03u02",
      "startTime": 219.986,
      "endTime": 225.347,
      "textEn": "Claims processing used to rely heavily on paper documents and manual intake.",
      "textZh": "過去理賠高度依賴紙本與人工收件，",
      "slidePage": 6
    },
    {
      "id": "p02s03u03",
      "startTime": 225.347,
      "endTime": 231.931,
      "textEn": "But now customers can submit claims and upload documents directly through a mobile application.",
      "textZh": "但現在客戶已經可以直接透過行動 App 線上完成理賠申請與文件上傳。",
      "slidePage": 6
    },
    {
      "id": "p03s01u01",
      "startTime": 231.931,
      "endTime": 236.472,
      "textEn": "The second foundational capability is structured data extraction.",
      "textZh": "第二個基礎能力，就是資料結構化。",
      "slidePage": 7
    },
    {
      "id": "p03s01u02",
      "startTime": 236.472,
      "endTime": 241.903,
      "textEn": "In real-world claims scenarios, most medical documents are still unstructured.",
      "textZh": "在實際理賠場景中，大部分醫療文件其實都不是結構化的。",
      "slidePage": 7
    },
    {
      "id": "p03s01u03",
      "startTime": 241.903,
      "endTime": 250.986,
      "textEn": "Diagnosis certificates, receipts, and hospitalization records often contain free text, abbreviations, and different hospital formats.",
      "textZh": "例如診斷證明、收據或住院文件，往往包含自由文字、縮寫，以及不同醫院格式。",
      "slidePage": 7
    },
    {
      "id": "p03s01u04",
      "startTime": 250.986,
      "endTime": 258.514,
      "textEn": "At this stage, we introduced OCR and large language models to extract key information from medical documents.",
      "textZh": "在這個階段，我們開始導入 OCR 與 Large Language Models，自動擷取醫療文件中的關鍵資訊。",
      "slidePage": 7
    },
    {
      "id": "p03s01u05",
      "startTime": 258.514,
      "endTime": 266.389,
      "textEn": "This includes diagnosis information, surgical procedures, hospitalization periods, and other claims-related fields.",
      "textZh": "例如診斷內容、手術項目、住院期間，以及其他理賠相關欄位。",
      "slidePage": 7
    },
    {
      "id": "p03s02u01",
      "startTime": 266.389,
      "endTime": 271.153,
      "textEn": "The next foundational capability is claims triage and risk analysis.",
      "textZh": "下一個基礎能力，就是理賠分流與風險分析。",
      "slidePage": 8
    },
    {
      "id": "p03s02u02",
      "startTime": 271.153,
      "endTime": 277.958,
      "textEn": "At this stage, we introduced machine learning models to support risk assessment and case routing.",
      "textZh": "在這個階段，我們開始導入 machine learning models，協助進行風險評估與案件分流。",
      "slidePage": 8
    },
    {
      "id": "p03s02u03",
      "startTime": 277.958,
      "endTime": 286.097,
      "textEn": "We trained these models using historical claims data, such as policy information, claims history, and medical features.",
      "textZh": "在模型建置上，我們主要利用過去累積的理賠資料，例如保單資訊、理賠紀錄與醫療特徵。",
      "slidePage": 8
    },
    {
      "id": "p03s02u04",
      "startTime": 286.097,
      "endTime": 290.208,
      "textEn": "Model outputs are used for claims triage and risk tagging.",
      "textZh": "模型結果會進一步應用在案件分流與風險標記。",
      "slidePage": 8
    },
    {
      "id": "p03s02u05",
      "startTime": 290.208,
      "endTime": 298.806,
      "textEn": "Low-risk cases can follow simplified workflows, while more complex or suspicious cases are routed to experienced reviewers.",
      "textZh": "低風險案件可以走較簡化流程，而較複雜或可疑案件，則會交由資深審查員進一步處理。",
      "slidePage": 8
    },
    {
      "id": "p03s03u01",
      "startTime": 298.806,
      "endTime": 303.597,
      "textEn": "Another foundational capability is the unified smart claims platform.",
      "textZh": "另一個重要的基礎能力，是整合式智慧理賠平台。",
      "slidePage": 9
    },
    {
      "id": "p03s03u02",
      "startTime": 303.597,
      "endTime": 310.792,
      "textEn": "We integrate claims information, risk results, related documents, and decision support into one workbench.",
      "textZh": "我們將理賠資訊、風險結果、相關文件與決策支援整合到同一個工作台中。",
      "slidePage": 9
    },
    {
      "id": "p03s03u03",
      "startTime": 310.792,
      "endTime": 318.014,
      "textEn": "This allows reviewers to access key information in one place without switching between multiple systems.",
      "textZh": "這讓審查員不需要在多個系統之間來回切換，就能查看重要資訊。",
      "slidePage": 9
    },
    {
      "id": "p04s01u01",
      "startTime": 318.014,
      "endTime": 327.528,
      "textEn": "Within this platform, we further embedded multiple AI-assisted capabilities such as risk tagging, relative analysis, and decision support.",
      "textZh": "在這個工作平台中，我們進一步嵌入多種 AI 輔助功能。",
      "slidePage": 10
    },
    {
      "id": "p04s01u02",
      "startTime": 327.528,
      "endTime": 332.75,
      "textEn": "Together, these capabilities provide the foundation for building Agentic AI.",
      "textZh": "而以上這些能力，也提供了建構 Agentic AI 所需的基礎。",
      "slidePage": 10
    },
    {
      "id": "p04s01u03",
      "startTime": 332.75,
      "endTime": 336.639,
      "textEn": "So the next question becomes: what exactly is Agentic AI?",
      "textZh": "所以下一個問題就是：到底什麼是 Agentic AI？",
      "slidePage": 10
    },
    {
      "id": "p04s02u01",
      "startTime": 336.639,
      "endTime": 340.389,
      "textEn": "Here we would like to explain Agentic AI in a simple way.",
      "textZh": "這裡我們想用比較簡單的方式，介紹什麼是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u02",
      "startTime": 340.389,
      "endTime": 345.903,
      "textEn": "Traditional AI is mostly reactive: users ask questions, and AI provides answers.",
      "textZh": "傳統 AI 大多是被動式的，使用者提出問題，AI 再提供答案。",
      "slidePage": 11
    },
    {
      "id": "p04s02u03",
      "startTime": 345.903,
      "endTime": 347.833,
      "textEn": "The next stage is AI Agents.",
      "textZh": "接下來是 AI Agent。",
      "slidePage": 11
    },
    {
      "id": "p04s02u04",
      "startTime": 347.833,
      "endTime": 355.653,
      "textEn": "AI becomes more proactive and can handle specific tasks, such as searching for information or organizing content.",
      "textZh": "AI 開始變得更主動，可以處理特定任務，例如搜尋資訊或整理內容。",
      "slidePage": 11
    },
    {
      "id": "p04s02u05",
      "startTime": 355.653,
      "endTime": 357.597,
      "textEn": "The next step is Agentic AI.",
      "textZh": "而更進一步，就是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u06",
      "startTime": 357.597,
      "endTime": 363.986,
      "textEn": "Instead of a single agent, multiple agents work together to complete more complex workflows.",
      "textZh": "它不只是單一 Agent，而是多個 Agent 一起協作，完成更複雜的 workflow。",
      "slidePage": 11
    },
    {
      "id": "p04s02u07",
      "startTime": 363.986,
      "endTime": 373.194,
      "textEn": "Some agents focus on medical information extraction, while others focus on policy interpretation, risk analysis, or decision support.",
      "textZh": "例如有的 Agent 負責醫療資訊擷取，有的負責條款解析、風險分析或 decision support。",
      "slidePage": 11
    },
    {
      "id": "p04s02u08",
      "startTime": 373.194,
      "endTime": 381.75,
      "textEn": "The key idea is that Agentic AI is no longer just answering questions — it is becoming part of the decision process itself.",
      "textZh": "所以 Agentic AI 的重點，不只是回答問題，而是開始參與整個 decision process。",
      "slidePage": 11
    },
    {
      "id": "p04s03u01",
      "startTime": 381.75,
      "endTime": 389.583,
      "textEn": "After introducing Agentic AI, let us return to the claims scenario and see how humans and AI work together in practice.",
      "textZh": "在介紹完 Agentic AI 之後，接下來回到實際理賠場景，看看人與 AI 是如何協作的。",
      "slidePage": 12
    },
    {
      "id": "p04s03u02",
      "startTime": 389.583,
      "endTime": 392.694,
      "textEn": "Our core design principle is human-in-the-loop.",
      "textZh": "我們的核心設計理念是 human-in-the-loop。",
      "slidePage": 12
    },
    {
      "id": "p04s03u03",
      "startTime": 392.694,
      "endTime": 399.639,
      "textEn": "Agentic AI provides analysis and recommendations, while final decisions remain with human reviewers.",
      "textZh": "也就是由 Agentic AI 提供分析與建議，而最終決策仍然由理賠人員負責。",
      "slidePage": 12
    },
    {
      "id": "p04s03u04",
      "startTime": 399.639,
      "endTime": 405.736,
      "textEn": "AI does not directly approve or deny claims. Instead, it first performs a pre-assessment.",
      "textZh": "在這個流程中，AI 並不是直接做出核賠或拒賠決定，而是先完成 pre-assessment。",
      "slidePage": 12
    },
    {
      "id": "p04s03u05",
      "startTime": 405.736,
      "endTime": 414.43,
      "textEn": "This includes organizing documents, extracting key facts, identifying relevant policy terms, and preparing supporting evidence.",
      "textZh": "例如整理文件、擷取關鍵事實、找出相關條款，以及提供 supporting evidence。",
      "slidePage": 12
    },
    {
      "id": "p04s03u06",
      "startTime": 414.43,
      "endTime": 417.472,
      "textEn": "AI then generates a decision recommendation.",
      "textZh": "並進一步產生一份 decision recommendation。",
      "slidePage": 12
    },
    {
      "id": "p04s03u07",
      "startTime": 417.472,
      "endTime": 422.264,
      "textEn": "Human reviewers then review the results and make the final claims decision.",
      "textZh": "接著再由理賠人員檢視這些分析結果與建議內容，做出最終的賠付決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u08",
      "startTime": 422.264,
      "endTime": 429.347,
      "textEn": "The goal is not to replace professionals, but to help people make faster and more consistent decisions.",
      "textZh": "我們的目標不是取代專業人員，而是協助人做出更快、更一致的決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u09",
      "startTime": 429.347,
      "endTime": 437.736,
      "textEn": "Next, my colleague Li Yu Tsao will continue by introducing the detailed applications of Agentic AI in claims operations.",
      "textZh": "接下來，關於 Agentic AI 在理賠場景中的應用與進一步細節，將由我的同事曹立玉繼續為大家說明。",
      "slidePage": 12
    },
    {
      "id": "p05s01u01",
      "startTime": 437.736,
      "endTime": 444.264,
      "textEn": "Good afternoon, everyone. I'm Li Yu, and I'll take you through the next part of our presentation.",
      "textZh": "各位午安，我是 Li Yu，接下來由我帶大家進入簡報的下一個部分。",
      "slidePage": 13
    },
    {
      "id": "p05s01u02",
      "startTime": 444.264,
      "endTime": 451.444,
      "textEn": "Yu Chung just showed us how Agentic AI works in our system. Now, let's look at what it actually produces.",
      "textZh": "Yu Chung 剛剛介紹了 Agentic AI 在我們系統中的運作方式。現在，讓我們看看它實際上產出了什麼。",
      "slidePage": 13
    },
    {
      "id": "p05s01u03",
      "startTime": 451.444,
      "endTime": 459.958,
      "textEn": "On this slide, I'll walk you through the AI reasoning output, from the raw claims input all the way to the final recommendation.",
      "textZh": "在這一頁，我會帶大家看 AI 推理輸出，從原始理賠輸入一路到最後的建議。",
      "slidePage": 13
    },
    {
      "id": "p05s01u04",
      "startTime": 459.958,
      "endTime": 467.764,
      "textEn": "In this example, the patient has kidney stones, receives ESWL treatment, and stays in the hospital for three days.",
      "textZh": "在這個例子中，患者有腎結石，接受 ESWL 治療，並住院三天。",
      "slidePage": 13
    },
    {
      "id": "p05s01u05",
      "startTime": 467.764,
      "endTime": 477.514,
      "textEn": "Based on the medical documents, policy terms, and historical cases, the AI reasons through the claim step by step using our multi-agent system.",
      "textZh": "根據醫療文件、保單條款和歷史案例，AI 透過我們的多代理系統一步一步推理這個理賠案件。",
      "slidePage": 13
    },
    {
      "id": "p05s01u06",
      "startTime": 477.514,
      "endTime": 484.014,
      "textEn": "The agents check the policy terms and medical guidelines, and then identify a potential conflict.",
      "textZh": "各個 Agent 會核查保單條款和醫療準則，然後辨識出一個潛在衝突。",
      "slidePage": 13
    },
    {
      "id": "p05s01u07",
      "startTime": 484.014,
      "endTime": 490.68,
      "textEn": "ESWL is usually an outpatient treatment, so a three-day hospitalization may need further review.",
      "textZh": "ESWL 通常是門診治療，因此三天住院可能需要進一步審查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u08",
      "startTime": 490.68,
      "endTime": 499.417,
      "textEn": "So in this case, the system recommends that the surgical benefit is payable, but the hospitalization part needs manual review.",
      "textZh": "所以在這個案例中，系統建議手術給付可以核付，但住院部分需要人工審查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u09",
      "startTime": 499.417,
      "endTime": 504.319,
      "textEn": "Beyond the claim decision, the system also gives us actuarial insights.",
      "textZh": "除了理賠決策之外，系統也提供精算洞察。",
      "slidePage": 13
    },
    {
      "id": "p05s01u10",
      "startTime": 504.319,
      "endTime": 508.819,
      "textEn": "It shows not just whether the claim should be paid, but also why.",
      "textZh": "它呈現的不只是這件理賠是否應該核付，也說明背後原因。",
      "slidePage": 13
    },
    {
      "id": "p05s01u11",
      "startTime": 508.819,
      "endTime": 513.972,
      "textEn": "That makes the information useful later for experience analysis and pricing.",
      "textZh": "這讓這些資訊後續可以用於經驗分析與定價。",
      "slidePage": 13
    },
    {
      "id": "p05s01u12",
      "startTime": 513.972,
      "endTime": 519.861,
      "textEn": "And finally, on the right side of the slide, you can see a 92 percent confidence score.",
      "textZh": "最後，在投影片右側，大家可以看到 92% 的信心分數。",
      "slidePage": 13
    },
    {
      "id": "p05s01u13",
      "startTime": 519.861,
      "endTime": 524.889,
      "textEn": "It's based on policy terms, medical guidelines, and historical claims data.",
      "textZh": "它是基於保單條款、醫療準則和歷史理賠資料。",
      "slidePage": 13
    },
    {
      "id": "p05s01u14",
      "startTime": 524.889,
      "endTime": 531.986,
      "textEn": "So this is the real AI reasoning output. It helps reviewers make faster and more consistent decisions.",
      "textZh": "這就是真實的 AI 推理輸出。它能幫助審查員做出更快、更一致的決策。",
      "slidePage": 13
    },
    {
      "id": "p05s01u15",
      "startTime": 531.986,
      "endTime": 535.375,
      "textEn": "Next, I'll show you how we actually built this system.",
      "textZh": "接下來，我會介紹我們是如何建立這個系統的。",
      "slidePage": 13
    },
    {
      "id": "p05s02u01",
      "startTime": 535.375,
      "endTime": 542.611,
      "textEn": "So, to produce this AI reasoning output, we developed CAELIA — Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "所以，為了產出這樣的 AI 推理結果，我們開發了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 14
    },
    {
      "id": "p05s02u02",
      "startTime": 542.611,
      "endTime": 549.639,
      "textEn": "CAELIA is designed to turn claims adjudication into an explainable, evidence-driven decision process.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。",
      "slidePage": 14
    },
    {
      "id": "p05s02u03",
      "startTime": 549.639,
      "endTime": 554.083,
      "textEn": "On this slide, I'd like to share the multi-agent design behind CAELIA.",
      "textZh": "在這一頁，我想介紹 CAELIA 背後的多代理設計。",
      "slidePage": 14
    },
    {
      "id": "p05s02u04",
      "startTime": 554.083,
      "endTime": 561.778,
      "textEn": "As you can see on the slide, CAELIA is made up of six agents in total: one Lead Agent and five specialized agents.",
      "textZh": "如同大家在投影片上看到的，CAELIA 總共有六個 Agent：一個 Lead Agent 和五個專業 Agent。",
      "slidePage": 14
    },
    {
      "id": "p05s02u05",
      "startTime": 561.778,
      "endTime": 571.667,
      "textEn": "At the center is the Lead Agent, or Orchestrator. It coordinates the other agents and brings everything together into one final recommendation.",
      "textZh": "中間是 Lead Agent，也就是 Orchestrator。它負責協調其他 Agent，並整合成一份最終建議。",
      "slidePage": 14
    },
    {
      "id": "p05s02u06",
      "startTime": 571.667,
      "endTime": 582.597,
      "textEn": "Around it, we have the Document Extraction Agent, Policy Validation Agent, Policy Interpretation Agent, Benefit Determination Agent, and Medical Reasoning Agent.",
      "textZh": "周圍則有 Document Extraction Agent、Policy Validation Agent、Policy Interpretation Agent、Benefit Determination Agent，以及 Medical Reasoning Agent。",
      "slidePage": 14
    },
    {
      "id": "p05s02u07",
      "startTime": 582.597,
      "endTime": 592.125,
      "textEn": "Each agent focuses on one specific part of the claims review process, so the system can review the case more carefully and consistently.",
      "textZh": "每個 Agent 專注在理賠審查流程中的特定部分，讓系統能更仔細且一致地審查案件。",
      "slidePage": 14
    },
    {
      "id": "p05s02u08",
      "startTime": 592.125,
      "endTime": 598.069,
      "textEn": "Next, let me show you the full architecture and how all of these agents work together.",
      "textZh": "接下來，讓我帶大家看完整架構，以及這些 Agent 是如何一起運作的。",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 598.069,
      "endTime": 604.403,
      "textEn": "Now that we've introduced CAELIA's multi-agent design, let's look at the full architecture.",
      "textZh": "我們剛介紹了 CAELIA 的多代理設計，現在來看完整架構。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 604.403,
      "endTime": 612.069,
      "textEn": "This slide shows the end-to-end flow, from claims input and document processing, all the way to the final output.",
      "textZh": "這張投影片展示端到端流程，從理賠輸入和文件處理，一直到最終輸出。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 612.069,
      "endTime": 620.042,
      "textEn": "At the center is the Lead Agent, or Orchestrator, which coordinates the reasoning process across the different agents.",
      "textZh": "中間是 Lead Agent，也就是 Orchestrator，負責協調不同 Agent 之間的推理流程。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 620.042,
      "endTime": 632.055,
      "textEn": "The specialized agents handle different parts of the work, such as document extraction, policy validation, medical reasoning, policy interpretation, and benefit determination.",
      "textZh": "各個專業 Agent 負責不同工作，例如文件擷取、保單驗證、醫療推理、保單解讀和給付判定。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 632.055,
      "endTime": 638.167,
      "textEn": "Each agent focuses on a specific task, and the Lead Agent brings their outputs together.",
      "textZh": "每個 Agent 專注在特定任務上，而 Lead Agent 會整合它們的輸出。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 638.167,
      "endTime": 643.153,
      "textEn": "This modular design makes the system easier to update, monitor, and govern.",
      "textZh": "這種模組化設計讓系統更容易更新、監控和治理。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 643.153,
      "endTime": 652.417,
      "textEn": "So when medical practices, policy terms, or fraud patterns change, we can update the relevant agent without rebuilding the whole system.",
      "textZh": "因此，當醫療實務、保單條款或詐欺模式改變時，我們可以更新相關 Agent，而不用重建整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u08",
      "startTime": 652.417,
      "endTime": 658.236,
      "textEn": "Next, I'll show you what this architecture actually produces for the claims reviewer.",
      "textZh": "接下來，我會展示這個架構實際上為理賠審查員產出了什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 658.236,
      "endTime": 663.833,
      "textEn": "So this is what the architecture produces: the AI Pre-Assessment Decision Report.",
      "textZh": "所以，這就是這個架構產出的內容：AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 663.833,
      "endTime": 669.778,
      "textEn": "It's a dashboard that helps claims reviewers see all the key information in one place.",
      "textZh": "它是一個幫助理賠審查員在同一個地方看到所有關鍵資訊的儀表板。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 669.778,
      "endTime": 677.681,
      "textEn": "The report shows what happened in the claim, what the documents say, which policy terms apply, and what the AI recommends.",
      "textZh": "這份報告呈現這件理賠發生了什麼、文件內容說了什麼、適用哪些保單條款，以及 AI 建議是什麼。",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 677.681,
      "endTime": 683.486,
      "textEn": "On the left, you can see the claim application and the supporting medical documents.",
      "textZh": "在左側，大家可以看到理賠申請和相關醫療文件。",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 683.486,
      "endTime": 689.431,
      "textEn": "In the middle, the dashboard shows the case flow, from claim submission to the final recommendation.",
      "textZh": "中間，儀表板呈現案件流程，從理賠提交到最終建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 689.431,
      "endTime": 698.167,
      "textEn": "Below that, the AI Pre-Assessment Summary breaks down the benefit items, such as surgical benefit and hospitalization benefit.",
      "textZh": "下方的 AI 預審摘要會拆解各項給付，例如手術給付和住院給付。",
      "slidePage": 16
    },
    {
      "id": "p06s01u07",
      "startTime": 698.167,
      "endTime": 709.431,
      "textEn": "On the right, the AI Decision Recommendation summarizes the decision: surgical benefit is payable, hospitalization needs review, and the overall decision is manual review.",
      "textZh": "右側的 AI 決策建議總結判斷：手術給付可以核付，住院需要審查，整體決定是人工審查。",
      "slidePage": 16
    },
    {
      "id": "p06s01u08",
      "startTime": 709.431,
      "endTime": 717.097,
      "textEn": "The reviewer can also see the confidence score, so they know which parts are clear and which parts need a closer look.",
      "textZh": "審查員也可以看到信心分數，因此能知道哪些部分比較明確、哪些部分需要更仔細查看。",
      "slidePage": 16
    },
    {
      "id": "p06s01u09",
      "startTime": 717.097,
      "endTime": 723.486,
      "textEn": "In short, this report turns complex claim information into a clear, traceable recommendation.",
      "textZh": "簡單來說，這份報告把複雜的理賠資訊轉化成清楚且可追溯的建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u10",
      "startTime": 723.486,
      "endTime": 731.847,
      "textEn": "So far, we've seen how CAELIA can be applied in the claims review process, from AI reasoning to pre-assessment decision support.",
      "textZh": "到目前為止，我們已經看到 CAELIA 如何應用在理賠審查流程中，從 AI 推理到預審決策支援。",
      "slidePage": 16
    },
    {
      "id": "p06s01u11",
      "startTime": 731.847,
      "endTime": 738.139,
      "textEn": "Next, I'll explain how this can go beyond claims review and create value for actuarial work.",
      "textZh": "接下來，我會說明它如何延伸到理賠審查之外，並為精算工作創造價值。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 738.139,
      "endTime": 745.083,
      "textEn": "So we've seen how CAELIA supports claims review. Now, let's look at what this means for actuarial work.",
      "textZh": "我們已經看到 CAELIA 如何支援理賠審查。現在，讓我們看看這對精算工作代表什麼。",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 745.083,
      "endTime": 751.972,
      "textEn": "Before CAELIA, claims data was often unstructured, such as medical records, forms, and medical images.",
      "textZh": "在 CAELIA 之前，理賠資料通常是非結構化的，例如醫療紀錄、表格和醫療影像。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 751.972,
      "endTime": 757.069,
      "textEn": "As a result, it was hard to reuse that information for actuarial analysis.",
      "textZh": "因此，這些資訊很難被重複用於精算分析。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 757.069,
      "endTime": 763.25,
      "textEn": "With CAELIA, those claim records can be transformed into structured, actuarial-ready data.",
      "textZh": "有了 CAELIA，這些理賠紀錄可以被轉化成結構化、可供精算使用的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 763.25,
      "endTime": 770.25,
      "textEn": "The output has three layers: the claim result, the policy and decision basis, and the medical assessment.",
      "textZh": "這個輸出有三個層次：理賠結果、保單與決策依據，以及醫療評估。",
      "slidePage": 17
    },
    {
      "id": "p06s02u06",
      "startTime": 770.25,
      "endTime": 778.472,
      "textEn": "For example, we can capture details like ICD information, treatment codes, operation codes, and other medical indicators.",
      "textZh": "例如，我們可以擷取 ICD 資訊、治療代碼、手術代碼，以及其他醫療指標。",
      "slidePage": 17
    },
    {
      "id": "p06s02u07",
      "startTime": 778.472,
      "endTime": 786.958,
      "textEn": "With these three layers, actuaries can bring claims experience back into assumptions more frequently, not just at year-end.",
      "textZh": "有了這三個層次，精算師可以更頻繁地將理賠經驗回饋到假設中，而不只是年底。",
      "slidePage": 17
    },
    {
      "id": "p06s02u08",
      "startTime": 786.958,
      "endTime": 791.347,
      "textEn": "In short, CAELIA turns claims records into actuarial-ready data.",
      "textZh": "簡單來說，CAELIA 將理賠紀錄轉化為可供精算使用的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u09",
      "startTime": 791.347,
      "endTime": 797.319,
      "textEn": "In the next two slides, I'll show you how this supports experience analysis and pricing.",
      "textZh": "接下來兩頁，我會說明這如何支援經驗分析與定價。",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 797.319,
      "endTime": 806.708,
      "textEn": "Let's start with experience analysis, and I'll use this example to show the difference between outcome-based analysis and cause-based analysis.",
      "textZh": "我們先從經驗分析開始，我會用這個例子說明結果導向分析和原因導向分析的差異。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 806.708,
      "endTime": 812.889,
      "textEn": "In this example, we have an 80-year-old male with an accidental death claim after a fall.",
      "textZh": "在這個例子中，有一位 80 歲男性在跌倒後申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 812.889,
      "endTime": 822.194,
      "textEn": "Before CAELIA, traditional experience analysis is outcome-based. It groups all accidental death cases together to calculate incidence.",
      "textZh": "在 CAELIA 之前，傳統經驗分析是以結果為基礎。它會把所有意外死亡案件放在一起計算發生率。",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 822.194,
      "endTime": 833.68,
      "textEn": "The limitation is that it does not distinguish between external causes, like a pure accident, and internal causes, like Parkinson's disease, dementia, or heart disease.",
      "textZh": "它的限制在於，無法區分外部原因，例如純粹意外，和內部原因，例如帕金森氏症、失智症或心臟疾病。",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 833.68,
      "endTime": 837.208,
      "textEn": "So the question is: was this really a pure accident?",
      "textZh": "所以問題是：這真的是純粹意外嗎？",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 837.208,
      "endTime": 841.889,
      "textEn": "With CAELIA, we can go deeper and look at the cause behind the claim.",
      "textZh": "有了 CAELIA，我們可以更深入地看理賠背後的原因。",
      "slidePage": 18
    },
    {
      "id": "p06s03u07",
      "startTime": 841.889,
      "endTime": 850.403,
      "textEn": "It helps classify the case into three categories: an external cause, an internal cause, or a disputed case that needs further review.",
      "textZh": "它協助將案件分類為三類：外部原因、內部原因，或需要進一步審查的爭議案件。",
      "slidePage": 18
    },
    {
      "id": "p06s03u08",
      "startTime": 850.403,
      "endTime": 856.861,
      "textEn": "This helps us exclude or downweight disputed cases and build a cleaner experience study population.",
      "textZh": "這能幫助我們排除或降低爭議案件的權重，並建立更乾淨的經驗分析母體。",
      "slidePage": 18
    },
    {
      "id": "p06s03u09",
      "startTime": 856.861,
      "endTime": 864.875,
      "textEn": "In short, cleaner data leads to better incidence estimation, better risk segmentation, and more reliable assumptions.",
      "textZh": "簡單來說，更乾淨的資料會帶來更好的發生率估計、更好的風險分群，以及更可靠的假設。",
      "slidePage": 18
    },
    {
      "id": "p06s03u10",
      "startTime": 864.875,
      "endTime": 869.597,
      "textEn": "Next, I'll show you how the same cause-based idea applies to pricing.",
      "textZh": "接下來，我會說明同樣的原因導向概念如何應用到定價。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 869.597,
      "endTime": 876.944,
      "textEn": "Now let's look at pricing. Here, we'll first compare the two approaches, and then walk through the lung cancer example.",
      "textZh": "現在我們來看定價。這裡我們會先比較兩種方法，然後再看肺癌案例。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 876.944,
      "endTime": 880.305,
      "textEn": "On the left, traditional pricing is outcome-based.",
      "textZh": "左邊，傳統定價是以結果為基礎。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 880.305,
      "endTime": 887.722,
      "textEn": "It observes that lung cancer claim costs are increasing, and then aggregates all lung cancer cases together.",
      "textZh": "它觀察到肺癌理賠成本上升，然後把所有肺癌案件放在一起。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 887.722,
      "endTime": 894.222,
      "textEn": "The problem is that it cannot clearly distinguish disease severity or utilization differences.",
      "textZh": "問題是，它無法清楚區分疾病嚴重程度或醫療使用差異。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 894.222,
      "endTime": 899.375,
      "textEn": "So the result may be a higher average cost and a potential premium increase.",
      "textZh": "所以結果可能是平均成本上升，進而可能造成保費調升。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 899.375,
      "endTime": 902.5,
      "textEn": "With CAELIA, AI-driven pricing is cause-based.",
      "textZh": "有了 CAELIA，AI 驅動定價是以原因為基礎。",
      "slidePage": 19
    },
    {
      "id": "p06s04u07",
      "startTime": 902.5,
      "endTime": 910.625,
      "textEn": "It looks at the drivers behind the cost and separates cases by disease-driven risk and utilization-driven behavior.",
      "textZh": "它會看成本背後的驅動因素，並依照疾病驅動風險和醫療使用行為來區分案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u08",
      "startTime": 910.625,
      "endTime": 916.93,
      "textEn": "This allows us to apply differentiated pricing strategies based on the real risk drivers.",
      "textZh": "這讓我們可以根據真正的風險驅動因素，應用差異化的定價策略。",
      "slidePage": 19
    },
    {
      "id": "p06s04u09",
      "startTime": 916.93,
      "endTime": 922.542,
      "textEn": "Now let's take lung cancer cases as an example and look at these 100 cases.",
      "textZh": "現在我們以肺癌案件為例，來看這 100 件案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 922.542,
      "endTime": 930.319,
      "textEn": "CAELIA separates them into 70 standard cases, 20 high-intensity cases, and 10 borderline cases.",
      "textZh": "CAELIA 將它們區分為 70 件標準案件、20 件高強度案件，以及 10 件邊界案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u11",
      "startTime": 930.319,
      "endTime": 938.861,
      "textEn": "With this breakdown, actuaries can refine assumptions, apply segmented pricing, and support better policy and benefit design.",
      "textZh": "有了這樣的拆解，精算師可以精修假設、應用分群定價，並支援更好的保單與給付設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u12",
      "startTime": 938.861,
      "endTime": 946.486,
      "textEn": "With that, pricing becomes more accurate, risk becomes more controllable, and products become more competitive.",
      "textZh": "如此一來，定價更準確、風險更可控，商品也更具競爭力。",
      "slidePage": 19
    },
    {
      "id": "p06s04u13",
      "startTime": 946.486,
      "endTime": 956.055,
      "textEn": "So far, we've seen what CAELIA produces and how it can feed insights back into actuarial work, especially experience analysis and pricing.",
      "textZh": "到目前為止，我們已經看到 CAELIA 產出了什麼，以及它如何將洞察回饋到精算工作，特別是經驗分析與定價。",
      "slidePage": 19
    },
    {
      "id": "p06s04u14",
      "startTime": 956.055,
      "endTime": 963.361,
      "textEn": "Next, I'll walk you through what sits behind CAELIA: the knowledge foundation that supports the AI agents.",
      "textZh": "接下來，我會帶大家看 CAELIA 背後的基礎：支援 AI Agent 的知識基底。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 963.361,
      "endTime": 969.514,
      "textEn": "So this is what sits behind CAELIA: the knowledge foundation that supports the AI agents.",
      "textZh": "這就是 CAELIA 背後的基礎：支援 AI Agent 的知識基底。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 969.514,
      "endTime": 978.805,
      "textEn": "The knowledge comes from three sources: Claims Operations Policies, Product Terms and Rules, and the Medical Knowledge and Disease Library.",
      "textZh": "知識來自三個來源：理賠作業準則、商品條款與規則，以及醫療知識與疾病資料庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 978.805,
      "endTime": 987.805,
      "textEn": "Each agent then uses the knowledge it needs for its own task, such as medical reasoning, policy analysis, or benefit determination.",
      "textZh": "接著，每個 Agent 會依照自己的任務使用所需的知識，例如醫療推理、保單分析或給付判定。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 987.805,
      "endTime": 995.611,
      "textEn": "This gives us traceability, because we can see where each conclusion comes from and help make the output explainable.",
      "textZh": "這讓我們具備可追溯性，因為我們可以看到每個結論的來源，並讓輸出更具可解釋性。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 995.611,
      "endTime": 999.194,
      "textEn": "This design makes the system much easier to govern.",
      "textZh": "這樣的設計讓系統更容易治理。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 999.194,
      "endTime": 1009.514,
      "textEn": "As medical knowledge, policy terms, or fraud patterns evolve, we can update the relevant knowledge source or agent without rebuilding the whole system.",
      "textZh": "隨著醫療知識、保單條款或詐欺模式演進，我們可以更新相關知識來源或 Agent，而不需要重建整個系統。",
      "slidePage": 20
    },
    {
      "id": "p07s01u07",
      "startTime": 1009.514,
      "endTime": 1016.528,
      "textEn": "In short, structured and governed knowledge enables consistent, trustworthy, and explainable decisions.",
      "textZh": "簡單來說，結構化且受治理的知識能支持一致、可信且可解釋的決策。",
      "slidePage": 20
    },
    {
      "id": "p07s01u08",
      "startTime": 1016.528,
      "endTime": 1022.722,
      "textEn": "Next, I'll show you how this foundation is used to build the Policy Interpretation Agent.",
      "textZh": "接下來，我會說明這個基底如何用來建立保單解讀 Agent。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 1022.722,
      "endTime": 1029.069,
      "textEn": "Now let's look at one of the most critical agents in CAELIA: the Policy Interpretation Agent.",
      "textZh": "現在我們來看 CAELIA 中最關鍵的 Agent 之一：保單解讀 Agent。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 1029.069,
      "endTime": 1035.083,
      "textEn": "As you can see on the slide, this is the full workflow, from input data to structured output.",
      "textZh": "如同大家在投影片上看到的，這是完整流程，從輸入資料到結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 1035.083,
      "endTime": 1043.208,
      "textEn": "The agent starts with three types of input: policy documents, applicant and coverage data, and the claim case summary.",
      "textZh": "這個 Agent 會從三類輸入開始：保單文件、申請人與保障資料，以及理賠案件摘要。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 1043.208,
      "endTime": 1052.375,
      "textEn": "Then it works through four steps: understand the claim, determine applicability, identify exclusions, and produce a structured output.",
      "textZh": "接著，它會經過四個步驟：理解理賠內容、判斷適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 1052.375,
      "endTime": 1062.555,
      "textEn": "The output covers everything the reviewer needs: applicable coverage, coverage determination, exclusion determination, and the final decision rationale.",
      "textZh": "輸出涵蓋審查員需要的一切：適用承保範圍、承保認定、除外條款認定，以及最終決策依據。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 1062.555,
      "endTime": 1069.819,
      "textEn": "In short, the reviewer can clearly see what is covered, what is excluded, and why the recommendation was made.",
      "textZh": "簡單來說，審查員可以清楚看到什麼被承保、什麼被除外，以及為什麼做出這個建議。",
      "slidePage": 21
    },
    {
      "id": "p07s02u07",
      "startTime": 1069.819,
      "endTime": 1075.639,
      "textEn": "So far, we've talked about what CAELIA can do across claims review and actuarial work.",
      "textZh": "到目前為止，我們已經介紹了 CAELIA 在理賠審查和精算工作中可以做到什麼。",
      "slidePage": 21
    },
    {
      "id": "p07s02u08",
      "startTime": 1075.639,
      "endTime": 1082.528,
      "textEn": "Now, let's bring everything together and look at what CAELIA actually delivers for the organization.",
      "textZh": "現在，讓我們把前面的內容整合起來，看看 CAELIA 實際上為組織帶來什麼價值。",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 1082.528,
      "endTime": 1090.791,
      "textEn": "To bring everything together, CAELIA creates value in four areas: operations, risk control, governance, and actuarial work.",
      "textZh": "綜合來看，CAELIA 在四個面向創造價值：營運、風險控管、治理，以及精算工作。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 1090.791,
      "endTime": 1102.5,
      "textEn": "For operations, it cuts review time and frees reviewers up to focus more on judgment. In our claims team, reviewers save roughly 30 percent of their time per case.",
      "textZh": "在營運方面，它縮短審查時間，讓審查員能更專注在判斷上。在我們的理賠團隊中，審查員每件案件約可節省 30% 的時間。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 1102.5,
      "endTime": 1107.93,
      "textEn": "For risk control, CAELIA helps catch inconsistencies and fraud signals earlier.",
      "textZh": "在風險控管方面，CAELIA 能協助更早發現不一致與詐欺訊號。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 1107.93,
      "endTime": 1117.736,
      "textEn": "For governance, traceable reasoning and human oversight make AI output explainable and auditable, which is essential in a regulated industry.",
      "textZh": "在治理方面，可追溯的推理與人工監督讓 AI 輸出可解釋、可稽核，這在受監理的產業中不可或缺。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 1117.736,
      "endTime": 1126.333,
      "textEn": "And for actuarial work, it turns claims records into useful data for experience studies, pricing, reserving, and product monitoring.",
      "textZh": "在精算工作方面，它將理賠紀錄轉化為可用資料，支援經驗研究、定價、準備金與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 1126.333,
      "endTime": 1133.916,
      "textEn": "So stepping back, our perspective is this: AI in insurance creates value that goes far beyond efficiency alone.",
      "textZh": "退一步來看，我們的觀點是：保險業的 AI 創造的價值遠不只效率本身。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 1133.916,
      "endTime": 1145.305,
      "textEn": "CAELIA shows that claims AI can be more than a processing tool. It can become a foundation for better decisions, stronger governance, and richer actuarial insights.",
      "textZh": "CAELIA 顯示理賠 AI 可以不只是處理工具。它可以成為更好決策、更強治理與更豐富精算洞察的基礎。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 1145.305,
      "endTime": 1150.083,
      "textEn": "Thank you so much for your time. We'd be happy to take your questions.",
      "textZh": "非常感謝各位的時間。我們很樂意接受大家的提問。",
      "slidePage": 22
    }
  ]
};
