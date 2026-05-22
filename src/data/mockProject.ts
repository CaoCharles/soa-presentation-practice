import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 1925.463,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0.0,
      "endTime": 5.2,
      "textEn": "Good morning everyone. It’s a pleasure to be here at the Asia-Pacific Symposium today.",
      "textZh": "各位好，很高興今天有機會在 Asia-Pacific Symposium 與大家分享。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 5.2,
      "endTime": 11.6,
      "textEn": "My name is Yu Chung Wu from Cathay Life Insurance in Taiwan, and I’m joined today by my colleague Li Yu Tsao.",
      "textZh": "我是來自台灣國泰人壽的 Yu Chung Wu，今天與我一起分享的是我的同事 Li Yu Tsao。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 11.6,
      "endTime": 26.513,
      "textEn": "Today, we would like to share how we are leveraging Agentic AI to improve claims adjudication efficiency and quality. And more importantly, how we transform claims data into explainable, traceable, and actuarial-ready decision intelligence.",
      "textZh": "今天我們想分享的是，如何透過 Agentic AI 協助理賠審理提升效率與品質，並進一步將理賠資料轉化為可解釋、可追溯、且能支援精算分析的 decision intelligence。",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 26.513,
      "endTime": 36.4,
      "textEn": "When people think about AI in claims, efficiency is usually the first thing that comes to mind — faster processing, less manual work, and shorter turnaround time.",
      "textZh": "當大家談到理賠 AI 時，第一個想到的通常是效率，例如更快完成理賠、減少人工處理，或縮短客戶等待時間。",
      "slidePage": 1
    },
    {
      "id": "p01s01u05",
      "startTime": 36.4,
      "endTime": 39.263,
      "textEn": "But today, we would like to go one step further.",
      "textZh": "但今天我們想更進一步討論的是：",
      "slidePage": 1
    },
    {
      "id": "p01s01u06",
      "startTime": 39.263,
      "endTime": 47.325,
      "textEn": "Can AI become more than just an automation tool, and instead become a strategic source of actuarial insight and risk management?",
      "textZh": "AI 是否能不只是自動化工具，而是成為精算洞察與風險管理的重要資料來源。",
      "slidePage": 1
    },
    {
      "id": "p01s01u07",
      "startTime": 47.325,
      "endTime": 56.9,
      "textEn": "Today, we will share how Agentic AI and a multi-agent architecture can transform claims decisions into structured, governed, and actuarial-ready insights.",
      "textZh": "因此今天我們會分享，如何透過 Agentic AI 與 multi-agent architecture，將理賠決策轉化為結構化、可治理、且 actuarial-ready 的資料與 insights。",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 56.9,
      "endTime": 60.013,
      "textEn": "Before we begin, let us briefly introduce ourselves.",
      "textZh": "在開始之前，先簡單介紹一下我們的背景。",
      "slidePage": 2
    },
    {
      "id": "p01s02u02",
      "startTime": 60.013,
      "endTime": 70.288,
      "textEn": "We are from Cathay Life Insurance, one of the leading life insurers in Taiwan, serving more than 8 million customers with over 20 million policies in force.",
      "textZh": "我們來自國泰人壽，國泰人壽是台灣領先的壽險公司，目前服務超過 800 萬客戶，並擁有超過 2,000 萬張有效保單。",
      "slidePage": 2
    },
    {
      "id": "p01s02u03",
      "startTime": 70.288,
      "endTime": 76.788,
      "textEn": "The content we share today comes from our practical experience in claims operations and AI applications.",
      "textZh": "今天分享的內容，主要來自我們在理賠與 AI 應用上的實務經驗。",
      "slidePage": 2
    },
    {
      "id": "p01s02u04",
      "startTime": 76.788,
      "endTime": 84.75,
      "textEn": "Both of us currently work as data scientists, focusing on AI applications in claims decision-making and decision intelligence.",
      "textZh": "我們兩位目前都擔任資料科學家，主要專注於 AI 在理賠決策、風險分析與 decision intelligence 的應用。",
      "slidePage": 2
    },
    {
      "id": "p01s02u05",
      "startTime": 84.75,
      "endTime": 89.613,
      "textEn": "Let us begin by looking at the key challenges facing claims operations today.",
      "textZh": "接下來，我們想先從壽險理賠目前面臨的挑戰開始談起。",
      "slidePage": 2
    },
    {
      "id": "p01s03u01",
      "startTime": 89.613,
      "endTime": 95.475,
      "textEn": "Claims operations in the life insurance industry are facing significant structural pressure.",
      "textZh": "在壽險產業中，理賠其實正面臨很大的結構性壓力。",
      "slidePage": 3
    },
    {
      "id": "p01s03u02",
      "startTime": 95.475,
      "endTime": 99.313,
      "textEn": "On one hand, the external environment is becoming more complex.",
      "textZh": "一方面，外部環境越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u03",
      "startTime": 99.313,
      "endTime": 106.75,
      "textEn": "Aging populations continue to drive claims demand, while fraud and risk patterns are also becoming more sophisticated.",
      "textZh": "高齡化持續推升理賠需求，同時詐欺與風險型態也越來越複雜。",
      "slidePage": 3
    },
    {
      "id": "p01s03u04",
      "startTime": 106.75,
      "endTime": 110.35,
      "textEn": "On the other hand, operational burden is increasing rapidly.",
      "textZh": "另一方面，營運負擔也快速增加。",
      "slidePage": 3
    },
    {
      "id": "p01s03u05",
      "startTime": 110.35,
      "endTime": 115.138,
      "textEn": "Cathay Life now handles more than 1.6 million claims cases every year.",
      "textZh": "國泰人壽目前每年已經處理超過 160 萬件理賠案件。",
      "slidePage": 3
    },
    {
      "id": "p01s03u06",
      "startTime": 115.138,
      "endTime": 120.7,
      "textEn": "But the bigger challenge is that claims volume is growing much faster than workforce capacity.",
      "textZh": "但更大的挑戰是，案件量成長速度遠高於人力成長。",
      "slidePage": 3
    },
    {
      "id": "p01s03u07",
      "startTime": 120.7,
      "endTime": 128.162,
      "textEn": "Over the past few years, claims volume has increased by more than 50%, while workforce growth has only been around 20%.",
      "textZh": "過去幾年，案件量增加超過 50%，但人力只增加大約 20%。",
      "slidePage": 3
    },
    {
      "id": "p01s03u08",
      "startTime": 128.162,
      "endTime": 133.688,
      "textEn": "This makes traditional labor-intensive review models increasingly difficult to sustain.",
      "textZh": "這讓傳統高度依賴人工的審理模式，越來越難支撐。",
      "slidePage": 3
    },
    {
      "id": "p01s03u09",
      "startTime": 133.688,
      "endTime": 138.4,
      "textEn": "Under these pressures, claims operations have continued to evolve over time.",
      "textZh": "而在這樣的壓力之下，理賠流程也開始隨著技術持續演進。",
      "slidePage": 3
    },
    {
      "id": "p02s01u01",
      "startTime": 138.4,
      "endTime": 141.8,
      "textEn": "Especially with advances in AI and digital technology.",
      "textZh": "理賠審理的演進，其實也反映了整個保險產業如何隨著數位化與 AI 一路演進。",
      "slidePage": 4
    },
    {
      "id": "p02s01u02",
      "startTime": 141.8,
      "endTime": 150.363,
      "textEn": "In the IBM AS400 era, claims processing was mainly transaction-driven and highly dependent on manual and paper-based workflows.",
      "textZh": "最早在 IBM AS400 時代，理賠主要還是以交易處理為主，流程高度依賴人工與紙本作業。",
      "slidePage": 4
    },
    {
      "id": "p02s01u03",
      "startTime": 150.363,
      "endTime": 158.838,
      "textEn": "Later, in the core system era, insurers started digitalizing claims workflows and introducing rule-based engines to improve efficiency.",
      "textZh": "後來進入 core system 時代，我們開始將理賠流程數位化，並導入 rule-based engine 來提升作業效率。",
      "slidePage": 4
    },
    {
      "id": "p02s01u04",
      "startTime": 158.838,
      "endTime": 165.613,
      "textEn": "In the machine learning era, models started being used for risk scoring, anomaly detection, and claims triage.",
      "textZh": "接著在 machine learning 階段，開始利用模型進行風險評分、異常偵測與案件分流。",
      "slidePage": 4
    },
    {
      "id": "p02s01u05",
      "startTime": 165.613,
      "endTime": 169.025,
      "textEn": "However, most models still stayed at the scoring stage.",
      "textZh": "但大部分模型其實還是停留在 scoring 的階段。",
      "slidePage": 4
    },
    {
      "id": "p02s01u06",
      "startTime": 169.025,
      "endTime": 173.838,
      "textEn": "They could identify higher-risk cases, but they could not always explain why.",
      "textZh": "它們可以找出高風險案件，但未必能真正解釋原因。",
      "slidePage": 4
    },
    {
      "id": "p02s01u07",
      "startTime": 173.838,
      "endTime": 178.213,
      "textEn": "Now, we believe claims adjudication is entering the era of Agentic AI.",
      "textZh": "而現在，我們認為理賠正在進入 Agentic AI 時代。",
      "slidePage": 4
    },
    {
      "id": "p02s01u08",
      "startTime": 178.213,
      "endTime": 180.55,
      "textEn": "AI is no longer only providing scores.",
      "textZh": "AI 不再只是提供分數。",
      "slidePage": 4
    },
    {
      "id": "p02s01u09",
      "startTime": 180.55,
      "endTime": 187.75,
      "textEn": "It is starting to become part of the decision process by providing reasoning, evidence, and decision recommendations.",
      "textZh": "而是開始參與整個理賠決策流程，能夠提供 reasoning、evidence，以及 decision recommendations。",
      "slidePage": 4
    },
    {
      "id": "p02s01u10",
      "startTime": 187.75,
      "endTime": 194.412,
      "textEn": "In other words, claims operations are evolving from efficiency-driven toward decision-intelligence-driven.",
      "textZh": "也就是從過去的 efficiency-driven，逐漸走向 decision-intelligence-driven。",
      "slidePage": 4
    },
    {
      "id": "p02s01u11",
      "startTime": 194.412,
      "endTime": 201.963,
      "textEn": "But to understand why Agentic AI matters, we first need to look at where complexity actually exists in the claims workflow.",
      "textZh": "不過在正式介紹 Agentic AI 之前， 我們需要先回到理賠流程本身，看看複雜度究竟是從哪裡開始產生的。",
      "slidePage": 4
    },
    {
      "id": "p02s02u01",
      "startTime": 201.963,
      "endTime": 207.15,
      "textEn": "Before we dive into Agentic AI, let us first look at the traditional claims process.",
      "textZh": "在正式介紹 Agentic AI 之前，我們先快速看一下傳統理賠流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u02",
      "startTime": 207.15,
      "endTime": 215.013,
      "textEn": "From claim submission to manual review and final claim decisions, the process is long and highly dependent on human judgment.",
      "textZh": "從客戶申請、人工審理到最終理賠決策，其實是一個非常長、而且高度依賴人工判斷的流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u03",
      "startTime": 215.013,
      "endTime": 223.063,
      "textEn": "Throughout the process, reviewers need to handle medical information, policy interpretation, risk assessment, and claim validation.",
      "textZh": "而且在整個流程中，理賠人員還需要同時處理醫療資訊、條款判讀、風險評估，以及理賠合理性判斷。",
      "slidePage": 5
    },
    {
      "id": "p02s02u04",
      "startTime": 223.063,
      "endTime": 229.55,
      "textEn": "In other words, claims adjudication is not just an operational workflow — it is a complex decision process.",
      "textZh": "換句話說，理賠本質上並不只是流程作業，而是一連串複雜的 decision process。",
      "slidePage": 5
    },
    {
      "id": "p02s02u05",
      "startTime": 229.55,
      "endTime": 233.713,
      "textEn": "And this is exactly where we believe AI can begin to create value.",
      "textZh": "而這也是我們認為 AI 開始能發揮價值的地方。",
      "slidePage": 5
    },
    {
      "id": "p02s02u06",
      "startTime": 233.713,
      "endTime": 238.0,
      "textEn": "However, building Agentic AI is not just about adding a single model.",
      "textZh": "不過，Agentic AI 並不是單純導入一個模型就能完成。",
      "slidePage": 5
    },
    {
      "id": "p02s02u07",
      "startTime": 238.0,
      "endTime": 243.675,
      "textEn": "It requires a series of foundational capabilities and infrastructure built along the way.",
      "textZh": "它其實需要一系列基礎能力與底層工程逐步建立起來。",
      "slidePage": 5
    },
    {
      "id": "p02s02u08",
      "startTime": 243.675,
      "endTime": 251.138,
      "textEn": "So over the next few slides, we will briefly walk through these foundational building blocks before returning to Agentic AI.",
      "textZh": "所以接下來幾頁，我們會先快速介紹這些 foundational building blocks，再回到 Agentic AI 的主題。",
      "slidePage": 5
    },
    {
      "id": "p02s03u01",
      "startTime": 251.138,
      "endTime": 254.975,
      "textEn": "The first foundational capability is digital claims submission.",
      "textZh": "第一個基礎能力，其實是理賠申請流程的數位化。",
      "slidePage": 6
    },
    {
      "id": "p02s03u02",
      "startTime": 254.975,
      "endTime": 265.85,
      "textEn": "Claims processing used to rely heavily on paper documents and manual intake, but now customers can submit claims and upload documents directly through a mobile application.",
      "textZh": "過去理賠高度依賴紙本與人工收件，但現在客戶已經可以直接透過行動 App 線上完成理賠申請與文件上傳。",
      "slidePage": 6
    },
    {
      "id": "p02s03u03",
      "startTime": 265.85,
      "endTime": 271.588,
      "textEn": "This not only improves customer experience, but also creates the foundation for AI applications.",
      "textZh": "這不只是提升客戶體驗，更重要的是，為後續 AI 應用建立基礎。",
      "slidePage": 6
    },
    {
      "id": "p03s01u01",
      "startTime": 271.588,
      "endTime": 275.638,
      "textEn": "The second foundational capability is structured data extraction.",
      "textZh": "第二個基礎能力，就是資料結構化。",
      "slidePage": 7
    },
    {
      "id": "p03s01u02",
      "startTime": 275.638,
      "endTime": 280.35,
      "textEn": "In real-world claims scenarios, most medical documents are still unstructured.",
      "textZh": "在實際理賠場景中，大部分醫療文件其實都不是結構化的。",
      "slidePage": 7
    },
    {
      "id": "p03s01u03",
      "startTime": 280.35,
      "endTime": 288.538,
      "textEn": "Diagnosis certificates, receipts, and hospitalization records often contain free text, abbreviations, and different hospital formats.",
      "textZh": "例如診斷證明、收據或住院文件，往往包含自由文字、縮寫，以及不同醫院格式。",
      "slidePage": 7
    },
    {
      "id": "p03s01u04",
      "startTime": 288.538,
      "endTime": 295.138,
      "textEn": "At this stage, we introduced OCR and large language models to extract key information from medical documents.",
      "textZh": "在這個階段，我們開始導入 OCR 與 Large Language Models，自動擷取醫療文件中的關鍵資訊。",
      "slidePage": 7
    },
    {
      "id": "p03s01u05",
      "startTime": 295.138,
      "endTime": 302.175,
      "textEn": "This includes diagnosis information, surgical procedures, hospitalization periods, and other claims-related fields.",
      "textZh": "例如診斷內容、手術項目、住院期間，以及其他理賠相關欄位。",
      "slidePage": 7
    },
    {
      "id": "p03s01u06",
      "startTime": 302.175,
      "endTime": 307.063,
      "textEn": "These fields are then parsed into structured data for downstream AI applications.",
      "textZh": "這些欄位接著會被解析為結構化資料，以支援後續的 AI 應用。",
      "slidePage": 7
    },
    {
      "id": "p03s02u01",
      "startTime": 307.063,
      "endTime": 311.338,
      "textEn": "The next foundational capability is claims triage and risk analysis.",
      "textZh": "下一個基礎能力，就是理賠分流與風險分析。",
      "slidePage": 8
    },
    {
      "id": "p03s02u02",
      "startTime": 311.338,
      "endTime": 317.35,
      "textEn": "At this stage, we introduced machine learning models to support risk assessment and case routing.",
      "textZh": "在這個階段，我們開始導入 machine learning models，協助進行風險評估與案件分流。",
      "slidePage": 8
    },
    {
      "id": "p03s02u03",
      "startTime": 317.35,
      "endTime": 324.713,
      "textEn": "We trained these models using historical claims data, such as policy information, claims history, and medical features.",
      "textZh": "在模型建置上，我們主要利用過去累積的理賠資料，例如保單資訊、理賠紀錄與醫療特徵。",
      "slidePage": 8
    },
    {
      "id": "p03s02u04",
      "startTime": 324.713,
      "endTime": 328.363,
      "textEn": "Model outputs are used for claims triage and risk tagging.",
      "textZh": "模型結果會進一步應用在案件分流與風險標記。",
      "slidePage": 8
    },
    {
      "id": "p03s02u05",
      "startTime": 328.363,
      "endTime": 336.137,
      "textEn": "Low-risk cases can follow simplified workflows, while more complex or suspicious cases are routed to experienced reviewers.",
      "textZh": "低風險案件可以走較簡化流程，而較複雜或可疑案件，則會交由資深審查員進一步處理。",
      "slidePage": 8
    },
    {
      "id": "p03s02u06",
      "startTime": 336.137,
      "endTime": 340.637,
      "textEn": "This helps reviewers focus on the cases that require the most attention.",
      "textZh": "這樣可以讓審查人員更聚焦在真正需要關注的案件上。",
      "slidePage": 8
    },
    {
      "id": "p03s02u07",
      "startTime": 340.637,
      "endTime": 346.912,
      "textEn": "Over time, we also realized that risk scoring alone is not enough for more complex claims decisions.",
      "textZh": "不過後來我們也逐漸發現，單純的 risk scoring，其實不足以支援更複雜的理賠決策。",
      "slidePage": 8
    },
    {
      "id": "p03s03u01",
      "startTime": 346.912,
      "endTime": 351.287,
      "textEn": "Another foundational capability is the unified smart claims platform.",
      "textZh": "另一個重要的基礎能力，是整合式智慧理賠平台。",
      "slidePage": 9
    },
    {
      "id": "p03s03u02",
      "startTime": 351.287,
      "endTime": 357.55,
      "textEn": "We integrate claims information, risk results, related documents, and decision support into one workbench.",
      "textZh": "我們將理賠資訊、風險結果、相關文件與決策支援整合到同一個工作台中。",
      "slidePage": 9
    },
    {
      "id": "p03s03u03",
      "startTime": 357.55,
      "endTime": 363.862,
      "textEn": "This allows reviewers to access key information in one place without switching between multiple systems.",
      "textZh": "這讓審查員不需要在多個系統之間來回切換，就能查看重要資訊。",
      "slidePage": 9
    },
    {
      "id": "p03s03u04",
      "startTime": 363.862,
      "endTime": 367.85,
      "textEn": "This not only improves efficiency, but also reduces cognitive load.",
      "textZh": "這不只是提升效率，也能降低認知負擔。",
      "slidePage": 9
    },
    {
      "id": "p03s03u05",
      "startTime": 367.85,
      "endTime": 374.025,
      "textEn": "Once information is organized more effectively, reviewers can focus more on professional judgment.",
      "textZh": "當資訊被有效整理後，審查員就能更專注在真正需要專業判斷的地方。",
      "slidePage": 9
    },
    {
      "id": "p04s01u01",
      "startTime": 374.025,
      "endTime": 378.787,
      "textEn": "Within this platform, we further embedded multiple AI-assisted capabilities.",
      "textZh": "在這個工作平台中，我們進一步嵌入多種 AI 輔助功能。",
      "slidePage": 10
    },
    {
      "id": "p04s01u02",
      "startTime": 378.787,
      "endTime": 384.1,
      "textEn": "For example, risk tagging helps highlight key risk indicators that require attention.",
      "textZh": "例如風險標籤，協助標示需要特別注意的風險指標。",
      "slidePage": 10
    },
    {
      "id": "p04s01u03",
      "startTime": 384.1,
      "endTime": 389.487,
      "textEn": "Decision support guides reviewers based on diagnosis ICD codes and review priorities.",
      "textZh": "決策支援則會根據診斷 ICD 引導理賠人員的審核重點。",
      "slidePage": 10
    },
    {
      "id": "p04s01u04",
      "startTime": 389.487,
      "endTime": 398.412,
      "textEn": "Relationship graph analysis helps reviewers understand connections among insured individuals, medical providers, agents, and historical claims.",
      "textZh": "關係圖分析則協助查看被保人、醫療院所、業務員與過往理賠之間的關聯。",
      "slidePage": 10
    },
    {
      "id": "p04s01u05",
      "startTime": 398.412,
      "endTime": 403.025,
      "textEn": "These capabilities are embedded directly into the claims review workflow.",
      "textZh": "這些功能並不是獨立存在，而是直接嵌入在理賠審查流程之中。",
      "slidePage": 10
    },
    {
      "id": "p04s01u06",
      "startTime": 403.025,
      "endTime": 410.325,
      "textEn": "At this point, AI is no longer just supporting isolated tasks — it is beginning to participate in the workflow itself.",
      "textZh": "到了這個階段，AI 已經不只是支援單一功能，而是開始參與整個 workflow。",
      "slidePage": 10
    },
    {
      "id": "p04s01u07",
      "startTime": 410.325,
      "endTime": 413.775,
      "textEn": "So the next question becomes: what exactly is Agentic AI?",
      "textZh": "所以下一個問題就是：到底什麼是 Agentic AI？",
      "slidePage": 10
    },
    {
      "id": "p04s02u01",
      "startTime": 413.775,
      "endTime": 417.15,
      "textEn": "Here we would like to explain Agentic AI in a simple way.",
      "textZh": "這裡我們想用比較簡單的方式，介紹什麼是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u02",
      "startTime": 417.15,
      "endTime": 422.075,
      "textEn": "Traditional AI is mostly reactive: users ask questions, and AI provides answers.",
      "textZh": "傳統 AI 大多是被動式的，使用者提出問題，AI 再提供答案。",
      "slidePage": 11
    },
    {
      "id": "p04s02u03",
      "startTime": 422.075,
      "endTime": 423.775,
      "textEn": "The next stage is AI Agents.",
      "textZh": "接下來是 AI Agent。",
      "slidePage": 11
    },
    {
      "id": "p04s02u04",
      "startTime": 423.775,
      "endTime": 430.85,
      "textEn": "AI becomes more proactive and can handle specific tasks, such as searching for information or organizing content.",
      "textZh": "AI 開始變得更主動，可以處理特定任務，例如搜尋資訊或整理內容。",
      "slidePage": 11
    },
    {
      "id": "p04s02u05",
      "startTime": 430.85,
      "endTime": 432.55,
      "textEn": "The next step is Agentic AI.",
      "textZh": "而更進一步，就是 Agentic AI。",
      "slidePage": 11
    },
    {
      "id": "p04s02u06",
      "startTime": 432.55,
      "endTime": 438.3,
      "textEn": "Instead of a single agent, multiple agents work together to complete more complex workflows.",
      "textZh": "它不只是單一 Agent，而是多個 Agent 一起協作，完成更複雜的 workflow。",
      "slidePage": 11
    },
    {
      "id": "p04s02u07",
      "startTime": 438.3,
      "endTime": 446.575,
      "textEn": "Some agents focus on medical information extraction, while others focus on policy interpretation, risk analysis, or decision support.",
      "textZh": "例如有的 Agent 負責醫療資訊擷取，有的負責條款解析、風險分析或 decision support。",
      "slidePage": 11
    },
    {
      "id": "p04s02u08",
      "startTime": 446.575,
      "endTime": 454.137,
      "textEn": "The key idea is that Agentic AI is no longer just answering questions — it is becoming part of the decision process itself.",
      "textZh": "所以 Agentic AI 的重點，不只是回答問題，而是開始參與整個 decision process。",
      "slidePage": 11
    },
    {
      "id": "p04s03u01",
      "startTime": 454.137,
      "endTime": 461.487,
      "textEn": "After introducing Agentic AI, let us return to the claims scenario and see how humans and AI work together in practice.",
      "textZh": "在介紹完 Agentic AI 之後，接下來回到實際理賠場景，看看人與 AI 是如何協作的。",
      "slidePage": 12
    },
    {
      "id": "p04s03u02",
      "startTime": 461.487,
      "endTime": 464.337,
      "textEn": "Our core design principle is human-in-the-loop.",
      "textZh": "我們的核心設計理念是 human-in-the-loop。",
      "slidePage": 12
    },
    {
      "id": "p04s03u03",
      "startTime": 464.337,
      "endTime": 470.575,
      "textEn": "Agentic AI provides analysis and recommendations, while final decisions remain with human reviewers.",
      "textZh": "也就是由 Agentic AI 提供分析與建議，而最終決策仍然由理賠人員負責。",
      "slidePage": 12
    },
    {
      "id": "p04s03u04",
      "startTime": 470.575,
      "endTime": 475.988,
      "textEn": "AI does not directly approve or deny claims. Instead, it first performs a pre-assessment.",
      "textZh": "在這個流程中，AI 並不是直接做出核賠或拒賠決定，而是先完成 pre-assessment。",
      "slidePage": 12
    },
    {
      "id": "p04s03u05",
      "startTime": 475.988,
      "endTime": 483.863,
      "textEn": "This includes organizing documents, extracting key facts, identifying relevant policy terms, and preparing supporting evidence.",
      "textZh": "例如整理文件、擷取關鍵事實、找出相關條款，以及提供 supporting evidence。",
      "slidePage": 12
    },
    {
      "id": "p04s03u06",
      "startTime": 483.863,
      "endTime": 486.637,
      "textEn": "AI then generates a decision recommendation.",
      "textZh": "並進一步產生一份 decision recommendation。",
      "slidePage": 12
    },
    {
      "id": "p04s03u07",
      "startTime": 486.637,
      "endTime": 491.35,
      "textEn": "Human reviewers then review the results and make the final claims decision.",
      "textZh": "接著再由理賠人員檢視這些分析結果與建議內容，做出最終的賠付決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u08",
      "startTime": 491.35,
      "endTime": 497.587,
      "textEn": "When AI provides enough information, reviewers can focus more on the parts that require professional judgment.",
      "textZh": "當 AI 提供足夠資訊後，理賠人員就能更專注在真正需要專業判斷的部分。",
      "slidePage": 12
    },
    {
      "id": "p04s03u09",
      "startTime": 497.587,
      "endTime": 504.037,
      "textEn": "The goal is not to replace professionals, but to help people make faster and more consistent decisions.",
      "textZh": "我們的目標不是取代專業人員，而是協助人做出更快、更一致的決策。",
      "slidePage": 12
    },
    {
      "id": "p04s03u10",
      "startTime": 504.037,
      "endTime": 511.587,
      "textEn": "Next, my colleague Li Yu Tsao will continue by introducing the detailed applications of Agentic AI in claims operations.",
      "textZh": "接下來，關於 Agentic AI 在理賠場景中的應用與進一步細節，將由我的同事曹立玉繼續為大家說明。",
      "slidePage": 12
    },
    {
      "id": "p05s01u01",
      "startTime": 511.587,
      "endTime": 517.612,
      "textEn": "So how does the AI actually reason through a case — and how can a reviewer trust that reasoning?",
      "textZh": "那麼，AI 究竟是如何對一個案件進行推理的——而審查員又如何能信任這個推理？",
      "slidePage": 13
    },
    {
      "id": "p05s01u02",
      "startTime": 517.612,
      "endTime": 525.237,
      "textEn": "If the system simply says, \"This claim should be paid\" — the reviewer can't rely on that. We need a traceable reasoning pathway.",
      "textZh": "如果系統只是說『這件理賠應該給付』，審查員根本無法依賴這樣的答案。我們需要一條可追溯的推理路徑。",
      "slidePage": 13
    },
    {
      "id": "p05s01u03",
      "startTime": 525.237,
      "endTime": 538.475,
      "textEn": "For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.",
      "textZh": "針對每個案件，AI 應能說明它使用了哪些資訊、如何解讀、哪些保單條款相關、在哪裡發現不一致，以及為何做出這樣的建議。",
      "slidePage": 13
    },
    {
      "id": "p05s01u04",
      "startTime": 538.475,
      "endTime": 545.5,
      "textEn": "Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.",
      "textZh": "以這張投影片上的案例為例：一位腎結石患者接受 ESWL 碎石治療，並住院五天。",
      "slidePage": 13
    },
    {
      "id": "p05s01u05",
      "startTime": 545.5,
      "endTime": 550.312,
      "textEn": "The AI checks the medical facts against policy terms and medical guidelines.",
      "textZh": "AI 會將醫療事實與保單條款及醫療準則進行比對核查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u06",
      "startTime": 550.312,
      "endTime": 565.012,
      "textEn": "It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.",
      "textZh": "系統可以辨識 ESWL 通常是門診手術，建議外科給付可以核付，同時仍標記住院部分供人工審查，並顯示 92% 的信心分數。",
      "slidePage": 13
    },
    {
      "id": "p05s01u07",
      "startTime": 565.012,
      "endTime": 574.775,
      "textEn": "For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.",
      "textZh": "對理賠審查員來說，它支援更快、更一致的決策。對風險管理者來說，它提供詐欺與異常偵測的結構化指標。",
      "slidePage": 13
    },
    {
      "id": "p05s01u08",
      "startTime": 574.775,
      "endTime": 580.688,
      "textEn": "And for actuaries, it creates more granular data about the cause and characteristics of claims.",
      "textZh": "對精算師來說，它創造了關於理賠原因與特性更細緻的資料。",
      "slidePage": 13
    },
    {
      "id": "p05s01u09",
      "startTime": 580.688,
      "endTime": 589.138,
      "textEn": "These requirements define what a real claims AI system needs to deliver — and building to those requirements is exactly what we set out to do.",
      "textZh": "這些要求定義了一個真正的理賠 AI 系統必須做到的事——而按這些要求來建構，正是我們的出發點。",
      "slidePage": 13
    },
    {
      "id": "p05s02u01",
      "startTime": 589.138,
      "endTime": 596.188,
      "textEn": "To operationalize this reasoning pathway, we built CAELIA — the Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "為了讓這條推理路徑落地實作，我們建立了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 14
    },
    {
      "id": "p05s02u02",
      "startTime": 596.188,
      "endTime": 605.962,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。這個名稱很重要，因為這不只是一個模型。",
      "slidePage": 14
    },
    {
      "id": "p05s02u03",
      "startTime": 605.962,
      "endTime": 615.55,
      "textEn": "It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.",
      "textZh": "它是一個結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查的引擎。",
      "slidePage": 14
    },
    {
      "id": "p05s02u04",
      "startTime": 615.55,
      "endTime": 618.5,
      "textEn": "The objective isn't to make AI look impressive.",
      "textZh": "目標不是讓 AI 看起來很厲害。",
      "slidePage": 14
    },
    {
      "id": "p05s02u05",
      "startTime": 618.5,
      "endTime": 625.725,
      "textEn": "The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.",
      "textZh": "目標是讓理賠決策流程更透明、更一致、更具分析價值。",
      "slidePage": 14
    },
    {
      "id": "p05s02u06",
      "startTime": 625.725,
      "endTime": 640.05,
      "textEn": "In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.",
      "textZh": "在實務中，CAELIA 讀取理賠文件、擷取醫療與理賠資訊、檢索相關保單知識、核查給付條件、辨識潛在不一致，並產出預審決策報告。",
      "slidePage": 14
    },
    {
      "id": "p05s02u07",
      "startTime": 640.05,
      "endTime": 646.688,
      "textEn": "The reviewer stays in control — but they're starting from a much richer, better-organized evidence package.",
      "textZh": "審查員仍掌控全局——但他們的起點是更豐富、更有條理的證據包。",
      "slidePage": 14
    },
    {
      "id": "p05s02u08",
      "startTime": 646.688,
      "endTime": 655.15,
      "textEn": "The design question then becomes: can one model realistically handle every specialized reasoning task that claims adjudication requires?",
      "textZh": "設計上的問題隨之浮現：一個模型能否真的勝任理賠核定所需的每一個專業推理任務？",
      "slidePage": 14
    },
    {
      "id": "p05s02u09",
      "startTime": 655.15,
      "endTime": 659.263,
      "textEn": "Or should different agents each own a different part of the work?",
      "textZh": "還是應該讓不同的 agent 各自負責不同部分？",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 659.263,
      "endTime": 665.15,
      "textEn": "Our answer is a multi-agent architecture, where each agent owns a specific part of the reasoning.",
      "textZh": "我們的答案是多代理架構——每個 agent 負責推理過程中的特定環節。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 665.15,
      "endTime": 670.713,
      "textEn": "A document extraction agent picks out structured fields from medical records and claim forms.",
      "textZh": "文件擷取 agent 從醫療記錄與理賠表格中識別結構化欄位。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 670.713,
      "endTime": 677.3,
      "textEn": "A medical understanding agent interprets diagnoses, treatments, hospitalization details, and clinical context.",
      "textZh": "醫療理解 Agent 負責解讀診斷、治療方式、住院細節與臨床背景。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 677.3,
      "endTime": 689.688,
      "textEn": "A policy interpretation agent retrieves relevant policy terms, benefit definitions, exclusions, and claim conditions. A risk analysis agent reviews risk indicators and flags possible inconsistencies.",
      "textZh": "保單解讀 agent 檢索相關保單條款、給付定義、除外條款與理賠條件；風險分析 agent 審查風險指標並標記可能的不一致。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 689.688,
      "endTime": 699.313,
      "textEn": "And a reasoning and report agent combines all the evidence and produces a structured pre-assessment report. This modular design has a few key advantages.",
      "textZh": "推理與報告 agent 整合所有證據，產出結構化的預審報告。這種模組化設計有幾個關鍵優勢。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 699.313,
      "endTime": 701.0,
      "textEn": "First, it's easier to govern.",
      "textZh": "首先，它更容易被監管與治理。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 701.0,
      "endTime": 710.1,
      "textEn": "If there's an issue with policy interpretation or medical extraction, we can evaluate that component on its own. Second, it supports explainability.",
      "textZh": "如果保單解讀或醫療擷取出現問題，我們可以獨立評估該元件。第二，它支援可解釋性。",
      "slidePage": 15
    },
    {
      "id": "p05s03u08",
      "startTime": 710.1,
      "endTime": 716.788,
      "textEn": "Each agent contributes a specific piece of the reasoning pathway. Third, it supports continuous improvement.",
      "textZh": "每個 agent 貢獻推理路徑中的特定一環。第三，它支援持續改善。",
      "slidePage": 15
    },
    {
      "id": "p05s03u09",
      "startTime": 716.788,
      "endTime": 725.8,
      "textEn": "As policy knowledge, medical terminology, or fraud patterns evolve, we can update the relevant components without having to redesign the whole system.",
      "textZh": "隨著保單知識、醫療術語或詐欺模式的演進，我們可以更新相關元件，而無需重新設計整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u10",
      "startTime": 725.8,
      "endTime": 734.475,
      "textEn": "Architecture only matters when it changes the reviewer's actual experience — so let's look at what this architecture produces in practice.",
      "textZh": "架構只有在改變審查員實際體驗時才真正有意義——讓我們看看這個架構實際上產出了什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 734.475,
      "endTime": 739.913,
      "textEn": "The most visible result of that architecture is the AI pre-assessment decision report.",
      "textZh": "這個架構最直接可見的成果，是 AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 739.913,
      "endTime": 746.125,
      "textEn": "This report is designed to take raw claims data and turn it into a traceable decision recommendation.",
      "textZh": "這份報告的設計目的，是將原始的理賠資料轉化為可追溯的決策建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 746.125,
      "endTime": 756.3,
      "textEn": "A good report should answer several practical questions for the reviewer. What's the claim event? What medical facts were extracted? What policy benefits might apply?",
      "textZh": "好的報告應回答審查員幾個實際問題：理賠事件是什麼？擷取到哪些醫療事實？可能適用哪些保單給付？",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 756.3,
      "endTime": 764.8,
      "textEn": "What evidence supports the recommendation? What's still uncertain? And what should the human reviewer check before making the final call?",
      "textZh": "哪些證據支持建議？還有哪些不確定？人工審查員在做最終決定前應檢查什麼？",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 764.8,
      "endTime": 778.538,
      "textEn": "In the example, the report shows confidence scores for different parts of the case, such as 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.",
      "textZh": "在範例中，報告顯示案件不同部分的信心分數：外科給付 92%、住院 90%，以及整體建議 85%。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 778.538,
      "endTime": 787.087,
      "textEn": "This is especially important when AI is used in regulated financial services. We need to be able to show that AI output isn't arbitrary.",
      "textZh": "這在受監理的金融服務中使用 AI 時尤其重要。我們需要能夠證明 AI 輸出不是任意的。",
      "slidePage": 16
    },
    {
      "id": "p06s01u07",
      "startTime": 787.087,
      "endTime": 791.587,
      "textEn": "It has to be grounded in evidence, policy knowledge, and human oversight.",
      "textZh": "它必須以證據、保單知識與人工監督為基礎。",
      "slidePage": 16
    },
    {
      "id": "p06s01u08",
      "startTime": 791.587,
      "endTime": 801.938,
      "textEn": "That's the operational and governance case. But once claims records are this structured and traceable, something more fundamental becomes possible for the organization.",
      "textZh": "這是營運與治理層面的論據。但一旦理賠記錄如此結構化且可追溯，組織層面還有更根本的可能性。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 801.938,
      "endTime": 814.5,
      "textEn": "Claims records stop being just operational evidence — records that exist because claims need to be paid. They become analytical evidence, structured and governed well enough to support actuarial work.",
      "textZh": "理賠記錄不再只是營運性的證據——那些因為需要付款才存在的記錄。它們成為分析性的證據，結構化程度與治理完善度都足以支援精算工作。",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 814.5,
      "endTime": 818.2,
      "textEn": "And this is one of the most important points we want to make today.",
      "textZh": "而這是我們今天最想傳達的重點之一。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 818.2,
      "endTime": 827.35,
      "textEn": "The structured output has three layers. The first is the result layer: what was approved, denied, or left pending, and what benefit item was involved.",
      "textZh": "結構化輸出有三個層次。第一是結果層：核准、拒絕或待決的內容，以及涉及哪個給付項目。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 827.35,
      "endTime": 836.562,
      "textEn": "The second is the policy and decision layer: which policy terms applied, whether the benefit condition matched, and whether exclusions were triggered.",
      "textZh": "第二是保單與決策層：適用哪些保單條款、給付條件是否符合，以及除外條款是否被觸發。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 836.562,
      "endTime": 845.013,
      "textEn": "The third is the medical assessment layer: diagnosis codes, procedures, treatment information, medical necessity, and clinical justification.",
      "textZh": "第三是醫療評估層：診斷代碼、手術、治療資訊、醫療必要性與臨床理由。",
      "slidePage": 17
    },
    {
      "id": "p06s02u06",
      "startTime": 845.013,
      "endTime": 852.963,
      "textEn": "With proper governance, this information can support pricing, reserving, experience studies, risk segmentation, and product monitoring.",
      "textZh": "在適當的治理下，這些資訊可以支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 17
    },
    {
      "id": "p06s02u07",
      "startTime": 852.963,
      "endTime": 856.775,
      "textEn": "In other words, AI doesn't just make claims operations faster.",
      "textZh": "換句話說，AI 不只是讓理賠作業變得更快。",
      "slidePage": 17
    },
    {
      "id": "p06s02u08",
      "startTime": 856.775,
      "endTime": 865.85,
      "textEn": "It expands the data available for actuarial analysis. And this is especially valuable under IFRS 17 and modern risk management frameworks.",
      "textZh": "它擴展了可供精算分析的資料。在 IFRS 17 與現代風險管理框架下，這尤其有價值。",
      "slidePage": 17
    },
    {
      "id": "p06s02u09",
      "startTime": 865.85,
      "endTime": 875.425,
      "textEn": "Insurers need faster feedback loops between actual claims experience and their assumptions. If claims data stays unstructured, that feedback loop is slow.",
      "textZh": "保險公司需要在實際理賠經驗與精算假設之間建立更快的回饋迴路。如果理賠資料保持非結構化，這個迴路就會很慢。",
      "slidePage": 17
    },
    {
      "id": "p06s02u10",
      "startTime": 875.425,
      "endTime": 882.85,
      "textEn": "But if claims data becomes structured earlier in the process, actuaries can respond more quickly to emerging experience.",
      "textZh": "但如果理賠資料在流程中更早結構化，精算師就能更快速地回應新興的經驗趨勢。",
      "slidePage": 17
    },
    {
      "id": "p06s02u11",
      "startTime": 882.85,
      "endTime": 891.35,
      "textEn": "The question becomes whether that richer foundation can help us move from measuring outcomes to understanding what actually drives them.",
      "textZh": "問題在於，這個更豐富的基礎，能否幫助我們從衡量結果，轉向理解真正驅動這些結果的因素。",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 891.35,
      "endTime": 898.3,
      "textEn": "Traditional experience analysis tells us what happened. A stronger claims data foundation helps us understand why.",
      "textZh": "傳統的經驗分析告訴我們發生了什麼。更強大的理賠資料基礎，幫助我們理解為什麼。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 898.3,
      "endTime": 907.55,
      "textEn": "How did actual experience compare to what we expected? These are essential questions. But more and more, insurers also need to understand the causes.",
      "textZh": "實際經驗與我們的預期相差多少？這些都是關鍵問題。但越來越多的保險公司也需要理解其背後的原因。",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 907.55,
      "endTime": 909.113,
      "textEn": "Why did incidence change?",
      "textZh": "為什麼發生率改變了？",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 909.113,
      "endTime": 917.45,
      "textEn": "Was it driven by aging? Product mix? Changes in medical practice? Customer behavior? Provider behavior? Fraud patterns? Or benefit design?",
      "textZh": "是由高齡化、商品組合、醫療行為改變、客戶行為、院所行為、詐欺模式，還是給付設計所驅動？",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 917.45,
      "endTime": 921.225,
      "textEn": "Are there early signals that assumptions need to be updated?",
      "textZh": "是否有早期訊號顯示假設需要更新？",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 921.225,
      "endTime": 927.263,
      "textEn": "Take the example on this slide: an 80-year-old male has an accidental death claim after a fall.",
      "textZh": "以這張投影片上的案例為例：一名 80 歲男性因跌倒申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u07",
      "startTime": 927.263,
      "endTime": 931.95,
      "textEn": "Traditional analysis might count this simply as one accidental death case.",
      "textZh": "傳統分析可能只是將此歸類為一件意外死亡案件。",
      "slidePage": 18
    },
    {
      "id": "p06s03u08",
      "startTime": 931.95,
      "endTime": 943.438,
      "textEn": "But cause-based analysis asks a deeper question: was this a pure external accident, or did an underlying medical condition, such as degeneration or poor balance, contribute to the fall?",
      "textZh": "但以原因為基礎的分析會問更深的問題：這是純粹的外部意外，還是潛在健康狀況——例如退化或平衡不良——也是跌倒的原因？",
      "slidePage": 18
    },
    {
      "id": "p06s03u09",
      "startTime": 943.438,
      "endTime": 951.35,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean the experience study population becomes.",
      "textZh": "這個區分改變了我們估計發生率、分群風險，以及讓經驗研究群體更乾淨的方式。",
      "slidePage": 18
    },
    {
      "id": "p06s03u10",
      "startTime": 951.35,
      "endTime": 958.575,
      "textEn": "It helps us ask better questions, spot emerging trends earlier, and communicate findings more clearly to management.",
      "textZh": "它幫助我們提出更好的問題、更早發現新興趨勢，並更清楚地向管理層溝通研究發現。",
      "slidePage": 18
    },
    {
      "id": "p06s03u11",
      "startTime": 958.575,
      "endTime": 968.0,
      "textEn": "Cause-based analysis is what makes that level of understanding possible — and once we have it, it can begin to inform pricing and product discussions.",
      "textZh": "以原因為基礎的分析，正是讓這種層次的理解成為可能的關鍵——而一旦我們擁有它，它就能開始指引定價與商品討論。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 968.0,
      "endTime": 974.9,
      "textEn": "Once we understand the why behind experience, those insights can begin to inform pricing and product discussions.",
      "textZh": "一旦我們理解經驗背後的「為什麼」，這些洞察便能開始指引定價與商品討論。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 974.9,
      "endTime": 981.175,
      "textEn": "To be clear: we're talking about analytical capability here, not disclosing specific pricing strategy.",
      "textZh": "需要說明的是：我們在這裡討論的是分析能力，而非揭露具體的定價策略。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 981.175,
      "endTime": 992.075,
      "textEn": "We're talking about the analytical capability. When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity.",
      "textZh": "當理賠資料變得更細緻，定價團隊便能更清楚地理解風險驅動因子如何影響理賠頻率與嚴重度。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 992.075,
      "endTime": 1000.025,
      "textEn": "This supports three pricing applications shown on the slide: refined assumptions, segmented pricing, and policy or benefit design.",
      "textZh": "這支援投影片上顯示的三個定價應用：精修假設、分群定價，以及保單或給付設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 1000.025,
      "endTime": 1009.488,
      "textEn": "Take lung cancer claims as an example. If we look at 100 cases together, traditional pricing may only show that overall claim cost is increasing.",
      "textZh": "以肺癌理賠為例：如果我們把 100 件案件放在一起看，傳統定價可能只顯示整體理賠成本在上升。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 1009.488,
      "endTime": 1022.625,
      "textEn": "But cause analysis can separate 70 standard treatment cases from 20 high-intensity treatment cases and 10 borderline cases where the treatment pattern or policy alignment needs closer review.",
      "textZh": "但原因分析可以將 70 件標準治療案件、20 件高強度治療案件，與 10 件治療模式或保單適用性需要更仔細審查的邊界案件區分開來。",
      "slidePage": 19
    },
    {
      "id": "p06s04u07",
      "startTime": 1022.625,
      "endTime": 1028.925,
      "textEn": "That difference really matters. Without cause analysis, management might only see a financial result.",
      "textZh": "這個差異非常重要。沒有原因分析，管理層可能只看到財務結果。",
      "slidePage": 19
    },
    {
      "id": "p06s04u08",
      "startTime": 1028.925,
      "endTime": 1040.913,
      "textEn": "With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u09",
      "startTime": 1040.913,
      "endTime": 1044.775,
      "textEn": "This is the connection between claims AI and risk-based pricing.",
      "textZh": "這就是理賠 AI 與風險定價之間的連結。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 1044.775,
      "endTime": 1052.388,
      "textEn": "AI helps convert claims documents into structured evidence, and structured evidence makes risk segmentation more precise.",
      "textZh": "AI 幫助將理賠文件轉化為結構化證據，而結構化證據則使風險分群更加精準。",
      "slidePage": 19
    },
    {
      "id": "p06s04u11",
      "startTime": 1052.388,
      "endTime": 1057.987,
      "textEn": "Better experience analysis supports more informed pricing and risk management decisions.",
      "textZh": "更好的經驗分析支援更有依據的定價與風險管理決策。",
      "slidePage": 19
    },
    {
      "id": "p06s04u12",
      "startTime": 1057.987,
      "endTime": 1065.625,
      "textEn": "But none of these applications hold if the AI underneath is reasoning from an unstable or poorly governed knowledge base.",
      "textZh": "但如果 AI 底層的推理依賴的是不穩定或治理不善的知識庫，這些應用都將無法成立。",
      "slidePage": 19
    },
    {
      "id": "p06s04u13",
      "startTime": 1065.625,
      "endTime": 1070.75,
      "textEn": "That brings us to the foundation that sits underneath every decision CAELIA makes.",
      "textZh": "這帶我們來到 CAELIA 每個決策背後的知識基礎。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 1070.75,
      "endTime": 1089.487,
      "textEn": "None of the pricing, reserving, or risk segmentation capabilities we just described are reliable without a well-structured, governed knowledge base. For CAELIA, that base comes from three sources: claims operations policies, product terms and benefit rules, and a medical knowledge and disease library.",
      "textZh": "我們剛才描述的定價、準備金與風險分群能力，在沒有結構完善、治理嚴謹的知識庫支撐下，都是不可靠的。對 CAELIA 而言，這個知識庫來自三個來源：理賠作業準則、商品條款與給付規則，以及醫療知識與疾病庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 1089.487,
      "endTime": 1092.587,
      "textEn": "This knowledge has to be structured and governed.",
      "textZh": "這些知識必須被結構化並受到妥善治理。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 1092.587,
      "endTime": 1099.812,
      "textEn": "If the knowledge base is incomplete or out of date, the AI might retrieve the wrong information or apply the wrong rule.",
      "textZh": "如果知識庫不完整或已過時，AI 可能會擷取錯誤的資訊或套用錯誤的規則。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 1099.812,
      "endTime": 1103.1,
      "textEn": "We also need traceability and data privacy controls.",
      "textZh": "我們也需要可追溯性與資料隱私控管。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 1103.1,
      "endTime": 1109.425,
      "textEn": "When AI uses a policy clause or a medical fact, the system should be able to trace where that came from.",
      "textZh": "當 AI 引用保單條款或醫療事實時，系統應能追溯其來源出處。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 1109.425,
      "endTime": 1117.0,
      "textEn": "Reviewers should be able to see the source of any piece of information. This is especially important for explainability.",
      "textZh": "審查員應能看到任何資訊的來源。這對可解釋性尤其重要。",
      "slidePage": 20
    },
    {
      "id": "p07s01u07",
      "startTime": 1117.0,
      "endTime": 1121.15,
      "textEn": "In a claims decision, it's not enough to say \"the model thinks so.\"",
      "textZh": "在理賠決策中，光說「模型認為如此」是不夠的。",
      "slidePage": 20
    },
    {
      "id": "p07s01u08",
      "startTime": 1121.15,
      "endTime": 1130.287,
      "textEn": "We need to say: here's the document, here's the extracted fact, here's the relevant policy term, here's the reasoning, and here's what's still uncertain.",
      "textZh": "我們需要說明：這是文件、這是擷取的事實、這是相關保單條款、這是推理過程，以及這是仍不確定的部分。",
      "slidePage": 20
    },
    {
      "id": "p07s01u09",
      "startTime": 1130.287,
      "endTime": 1140.938,
      "textEn": "The knowledge foundation is what makes the AI system controllable. It anchors AI reasoning in approved business knowledge, rather than letting the model improvise freely.",
      "textZh": "知識基礎是讓 AI 系統可控的關鍵。它將 AI 推理錨定在核准的業務知識中，而不是讓模型自由發揮。",
      "slidePage": 20
    },
    {
      "id": "p07s01u10",
      "startTime": 1140.938,
      "endTime": 1150.85,
      "textEn": "And there is no harder test of that foundation than policy interpretation — where a single word in a contract clause can change the entire outcome of a case.",
      "textZh": "而對這個基礎最嚴格的考驗，莫過於保單解讀——因為合約條款中的一個字，可能完全改變一個案件的結果。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 1150.85,
      "endTime": 1156.337,
      "textEn": "That is why policy interpretation becomes one of the most critical tests of the system.",
      "textZh": "正因如此，保單解讀成為整個系統最關鍵的考驗之一。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 1156.337,
      "endTime": 1162.65,
      "textEn": "Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.",
      "textZh": "保單包含定義、給付條件、除外條款、等待期、給付上限及特殊規定。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 1162.65,
      "endTime": 1173.425,
      "textEn": "A claim decision often comes down to the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.",
      "textZh": "理賠決策往往取決於這些條款的精確解讀。CAELIA 協助分析保單條款，以確定承保範圍、除外事項與決策依據。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 1173.425,
      "endTime": 1181.912,
      "textEn": "The agent workflow has four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.",
      "textZh": "agent 工作流程有四個步驟：理解理賠內容、確定保單適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 1181.912,
      "endTime": 1196.462,
      "textEn": "For example, if a claim involves hospitalization benefits, the system can pull up the relevant policy clauses, compare the required conditions against the extracted medical facts, and highlight anything that's missing or conflicting.",
      "textZh": "例如，若理賠涉及住院給付，系統可以調出相關保單條款，將所需條件與擷取的醫療事實對比，並標示缺漏或衝突之處。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 1196.462,
      "endTime": 1206.65,
      "textEn": "The reviewer can then focus on judgment. Does the medical evidence really satisfy the policy definition? Is additional documentation needed? Is there an exception?",
      "textZh": "審查員可以專注於判斷：醫療證據是否真正符合保單定義？是否需要補充文件？是否有例外情況？",
      "slidePage": 21
    },
    {
      "id": "p07s02u07",
      "startTime": 1206.65,
      "endTime": 1211.0,
      "textEn": "Does the case need to be escalated? This approach improves consistency.",
      "textZh": "案件是否需要升級處理？這種方法改善了決策一致性。",
      "slidePage": 21
    },
    {
      "id": "p07s02u08",
      "startTime": 1211.0,
      "endTime": 1218.387,
      "textEn": "The output should clearly show applicable coverage, coverage determination, exclusion determination, and the decision rationale.",
      "textZh": "輸出應清楚顯示適用的承保範圍、承保確定、除外確定，以及決策依據。",
      "slidePage": 21
    },
    {
      "id": "p07s02u09",
      "startTime": 1218.387,
      "endTime": 1229.887,
      "textEn": "When we step back from these individual components — document extraction, multi-agent reasoning, and policy interpretation — the organizational value they create together becomes clear.",
      "textZh": "當我們退一步，從個別元件——文件擷取、多代理推理與保單解讀——一同審視，它們共同創造的組織價值便清晰呈現。",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 1229.887,
      "endTime": 1235.362,
      "textEn": "When we bring these components together, the organizational value appears in four areas.",
      "textZh": "當我們將這些元件整合在一起，組織價值便在四個面向中展現。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 1235.362,
      "endTime": 1246.487,
      "textEn": "For operations, CAELIA reduces manual document review, speeds up evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.",
      "textZh": "在營運方面，CAELIA 減少人工文件審查、加速證據準備，並幫助審查員專注於複雜判斷，而非重複的資料收集。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 1246.487,
      "endTime": 1257.1,
      "textEn": "In practical terms, the impact can extend across a claims organization of around 300 FTEs, with an estimated 30 percent reduction in review time per case.",
      "textZh": "在實務上，影響可延伸至約 300 名全職人員的理賠組織，估計每件案件的審查時間可縮短約 30%。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 1257.1,
      "endTime": 1264.037,
      "textEn": "For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.",
      "textZh": "在風險控管方面，系統支援更早發現不一致、異常模式與詐欺指標。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 1264.037,
      "endTime": 1276.262,
      "textEn": "For governance, human-in-the-loop review, traceable reasoning, structured knowledge, and data lineage help make AI output explainable and auditable. That's essential for responsible AI in insurance.",
      "textZh": "在治理方面，human-in-the-loop 審查、可追溯推理、結構化知識與資料血緣，有助於使 AI 輸出可解釋且可稽核——這對保險業的負責任 AI 至關重要。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 1276.262,
      "endTime": 1283.175,
      "textEn": "And for actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.",
      "textZh": "在精算工作方面，最具策略價值的效益是理賠資料變得更加結構化且更有意義。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 1283.175,
      "endTime": 1293.987,
      "textEn": "Instead of only getting final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and the rationale behind decisions.",
      "textZh": "精算師不再只能取得最終給付結果，而能存取關於診斷、治療、原因、嚴重度驅動因子與決策依據的更豐富資訊。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 1293.987,
      "endTime": 1301.287,
      "textEn": "This supports experience studies, incidence rate reviews, assumption updates, reserve analysis, and product monitoring.",
      "textZh": "這支援經驗研究、發生率審查、假設更新、準備金分析與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u09",
      "startTime": 1301.287,
      "endTime": 1306.487,
      "textEn": "The broader lesson here is that AI value shouldn't be measured only by time saved.",
      "textZh": "更廣泛的啟示是，AI 價值不應只以節省的時間衡量。",
      "slidePage": 22
    },
    {
      "id": "p07s03u10",
      "startTime": 1306.487,
      "endTime": 1316.062,
      "textEn": "In insurance, AI value should also be measured by the quality of decisions, the strength of governance, and the improvement in how the organization learns.",
      "textZh": "在保險業，AI 價值也應以決策品質、治理強度，以及組織學習方式的改善來衡量。",
      "slidePage": 22
    },
    {
      "id": "p07s03u11",
      "startTime": 1316.062,
      "endTime": 1329.912,
      "textEn": "Actuaries are well positioned to lead that work — translating AI capability into business value, connecting technical performance with risk management and governance, and helping organizations build resilience that lasts.",
      "textZh": "精算師在這項工作中具有獨特的優勢——將 AI 能力轉化為商業價值、連結技術表現與風險管理及治理，並幫助組織建立長久的韌性。",
      "slidePage": 22
    },
    {
      "id": "p07s04u01",
      "startTime": 1329.912,
      "endTime": 1342.062,
      "textEn": "Thank you for staying with us. To close, let's come back to our title: beyond efficiency. Efficiency matters — faster claims processing improves customer experience and reduces operational burden.",
      "textZh": "感謝各位一路陪伴。最後，讓我們回到標題：超越效率。效率確實重要——更快的理賠處理能改善客戶體驗、減少營運負擔。",
      "slidePage": 22
    },
    {
      "id": "p07s04u02",
      "startTime": 1342.062,
      "endTime": 1348.012,
      "textEn": "But for life insurers, the bigger opportunity is to build a claims ecosystem that actually learns.",
      "textZh": "但對壽險公司來說，更大的機會是建立一個真正會學習的理賠生態系。",
      "slidePage": 22
    },
    {
      "id": "p07s04u03",
      "startTime": 1348.012,
      "endTime": 1356.225,
      "textEn": "Every claim contains information about customer needs, medical trends, product performance, operational risk, and emerging experience.",
      "textZh": "每一件理賠都包含關於客戶需求、醫療趨勢、商品表現、營運風險與新興經驗的資訊。",
      "slidePage": 22
    },
    {
      "id": "p07s04u04",
      "startTime": 1356.225,
      "endTime": 1361.262,
      "textEn": "Historically, most of that information was locked inside unstructured documents.",
      "textZh": "過去，這些資訊大多封存於非結構化的文件之中。",
      "slidePage": 22
    },
    {
      "id": "p07s04u05",
      "startTime": 1361.262,
      "endTime": 1371.212,
      "textEn": "Agentic AI gives us a practical way to unlock it — as long as we design the system with governance, explainability, and human oversight built in from the start.",
      "textZh": "Agentic AI 提供了一個實際的方式來解鎖這些資訊——只要我們從一開始就將治理、可解釋性與人工監督內建到系統架構中。",
      "slidePage": 22
    },
    {
      "id": "p07s04u06",
      "startTime": 1371.212,
      "endTime": 1378.212,
      "textEn": "Our experience points to three takeaways. First, AI in claims should be designed as augmentation, not just automation.",
      "textZh": "我們的經驗指向三個重要啟示。第一，理賠中的 AI 應被設計為增強工具，而非只是自動化工具。",
      "slidePage": 22
    },
    {
      "id": "p07s04u07",
      "startTime": 1378.212,
      "endTime": 1384.312,
      "textEn": "The goal is to help professionals make better decisions — not simply to remove human involvement.",
      "textZh": "目標是幫助專業人員做出更好的決策——而不是單純地移除人的參與。",
      "slidePage": 22
    },
    {
      "id": "p07s04u08",
      "startTime": 1384.312,
      "endTime": 1388.6,
      "textEn": "Second, claims data should be treated as a strategic actuarial asset.",
      "textZh": "第二，理賠資料應被視為具有策略價值的精算資產。",
      "slidePage": 22
    },
    {
      "id": "p07s04u09",
      "startTime": 1388.6,
      "endTime": 1398.5,
      "textEn": "When unstructured records become structured, traceable, and governed, they can strengthen experience studies, pricing assumptions, reserving analysis, and risk monitoring.",
      "textZh": "當非結構化紀錄變得結構化、可追溯且受治理，它們可以強化經驗研究、定價假設、準備金分析與風險監控。",
      "slidePage": 22
    },
    {
      "id": "p07s04u10",
      "startTime": 1398.5,
      "endTime": 1403.462,
      "textEn": "Third, responsible AI isn't a separate compliance layer you bolt on at the end.",
      "textZh": "第三，負責任 AI 不是最後才附加上去的合規層次。",
      "slidePage": 22
    },
    {
      "id": "p07s04u11",
      "startTime": 1403.462,
      "endTime": 1413.087,
      "textEn": "It has to be built into the architecture from day one: human-in-the-loop review, knowledge governance, data lineage, explainable reasoning, and auditability.",
      "textZh": "它必須從第一天起就內建在架構中：human-in-the-loop 審查、知識治理、資料血緣、可解釋推理與可稽核性。",
      "slidePage": 22
    },
    {
      "id": "p07s04u12",
      "startTime": 1413.087,
      "endTime": 1422.237,
      "textEn": "As markets face aging populations, rising medical complexity, and post-IFRS 17 operational demands, actuaries have an important role to play.",
      "textZh": "面對高齡化社會、日益複雜的醫療環境與後 IFRS 17 的營運需求，精算師有重要的角色要扮演。",
      "slidePage": 22
    },
    {
      "id": "p07s04u13",
      "startTime": 1422.237,
      "endTime": 1429.625,
      "textEn": "Actuaries can help connect AI capability with business value, risk management, governance, and long-term sustainability.",
      "textZh": "精算師可以幫助連結 AI 能力與商業價值、風險管理、治理與長期永續性。",
      "slidePage": 22
    },
    {
      "id": "p07s04u14",
      "startTime": 1429.625,
      "endTime": 1433.162,
      "textEn": "Thank you so much for your time — we'd love to take your questions.",
      "textZh": "非常感謝各位的時間——我們很樂意接受大家的提問。",
      "slidePage": 23
    }
  ]
};
