import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 1222.4,
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
      "endTime": 654.275,
      "textEn": "And honestly, the more we worked on this, the clearer it became — one model just can't do all of this well at the same time.",
      "textZh": "坦白說，我們做得越深就越清楚——一個模型根本無法同時把所有這些事情都做好。",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 654.275,
      "endTime": 660.4,
      "textEn": "Our answer is a multi-agent architecture — where each agent owns a specific part of the reasoning.",
      "textZh": "我們的答案是 multi-agent architecture——每個 agent 各自負責推理過程中的一個特定環節。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 660.4,
      "endTime": 673.863,
      "textEn": "Think of it like a team: one agent extracts key facts from the documents, another interprets the medical context, one checks the policy terms, one flags risk signals, and one pulls it all together into a final report.",
      "textZh": "把它想像成一個團隊：一個 agent 擷取文件中的關鍵事實，另一個解讀醫療情境，一個核查條款，一個標記風險訊號，最後一個將所有資訊整合成最終報告。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 673.863,
      "endTime": 676.638,
      "textEn": "Each agent does one thing — and does it well.",
      "textZh": "每個 agent 只做一件事——而且做得很好。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 676.638,
      "endTime": 684.525,
      "textEn": "This makes the system much easier to govern. If something's off, we know exactly which agent to look at — not the entire system.",
      "textZh": "這讓整個系統更容易治理。如果哪裡出問題，我們能精確知道該看哪個 agent——而不必翻查整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 684.525,
      "endTime": 693.863,
      "textEn": "It also supports explainability. Each agent's output is traceable, so the reviewer can follow the reasoning step by step — not just see a final number.",
      "textZh": "它也支持可解釋性。每個 agent 的輸出都可追溯，讓審查員能逐步跟進推理過程——而不只是看到一個最終數字。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 693.863,
      "endTime": 702.738,
      "textEn": "And as medical knowledge, policy terms, or fraud patterns evolve, we can update just the relevant agent — without rebuilding everything from scratch.",
      "textZh": "而隨著醫療知識、條款內容或詐欺型態的演進，我們只需更新相關的 agent——不必從頭重建整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 702.738,
      "endTime": 704.6,
      "textEn": "Let me show you what this actually produces.",
      "textZh": "接下來讓我展示這一切實際產出的是什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 704.6,
      "endTime": 710.038,
      "textEn": "The most visible result of that architecture is the AI pre-assessment decision report.",
      "textZh": "這個架構最直接可見的成果，是 AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 710.038,
      "endTime": 716.25,
      "textEn": "This report is designed to take raw claims data and turn it into a traceable decision recommendation.",
      "textZh": "這份報告的設計目的，是將原始的理賠資料轉化為可追溯的決策建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 716.25,
      "endTime": 726.612,
      "textEn": "It covers everything the reviewer needs: what happened, what the documents say, which policy terms apply, what the AI recommends, and how confident it is in each judgment.",
      "textZh": "它涵蓋了審查員需要的所有資訊：發生了什麼、文件說了什麼、哪些條款適用、AI 的建議是什麼，以及每項判斷的信心程度。",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 726.612,
      "endTime": 739.8,
      "textEn": "In the example, the report shows confidence scores for different parts of the case — 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.",
      "textZh": "以範例來說，報告針對案件的不同部分給出信心分數——手術給付 92%、住院給付 90%，整體建議 85%。",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 739.8,
      "endTime": 749.85,
      "textEn": "In a regulated environment like insurance, that traceability isn't optional — every recommendation has to be grounded in evidence the reviewer can actually verify.",
      "textZh": "在保險這樣的高度監管環境中，可追溯性不是選項——每一項建議都必須有審查員可以實際驗證的證據作為依據。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 749.85,
      "endTime": 762.462,
      "textEn": "And here's the part that matters most for actuaries: when claims data is this structured and traceable, it stops being just operational evidence — and starts becoming something you can actually analyze.",
      "textZh": "而這對精算師來說最重要的是：當理賠資料結構化到這個程度、且具備可追溯性，它就不再只是營運紀錄——而是真正可以被分析的資料。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 762.462,
      "endTime": 771.3,
      "textEn": "The structured output that CAELIA produces has three layers: the claim result, the policy and decision basis, and the full medical assessment.",
      "textZh": "CAELIA 產出的結構化資料分為三個層次：理賠結果、條款與決策依據，以及完整的醫療評估。",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 771.3,
      "endTime": 779.837,
      "textEn": "Each layer captures something different: not just what was decided, but what evidence led there, and what the medical picture looked like.",
      "textZh": "每個層次記錄的內容都不同：不只是決策結果，還包括支撐決策的證據，以及醫療狀況的全貌。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 779.837,
      "endTime": 787.937,
      "textEn": "With proper governance, this data can directly support pricing, reserving, experience studies, risk segmentation, and product monitoring.",
      "textZh": "在適當的治理機制下，這些資料可以直接支援定價、準備金提列、經驗研究、風險分群與產品監控。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 787.937,
      "endTime": 795.1,
      "textEn": "In other words, AI doesn't just make claims operations faster — it expands the data available for actuarial analysis.",
      "textZh": "換句話說，AI 不只是讓理賠作業更快——它擴展了可供精算分析使用的資料範疇。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 795.1,
      "endTime": 803.812,
      "textEn": "This matters especially under IFRS 17 — where actuaries need claims data to feed back into their assumptions much faster than before.",
      "textZh": "這在 IFRS 17 的框架下尤其重要——精算師需要理賠資料更快速地回饋到假設更新的流程中。",
      "slidePage": 17
    },
    {
      "id": "p06s02u06",
      "startTime": 803.812,
      "endTime": 813.712,
      "textEn": "When claims data becomes structured earlier in the process, actuaries can respond more quickly to emerging trends — instead of waiting for year-end data runs.",
      "textZh": "當理賠資料在流程早期就完成結構化，精算師就能更快速地回應新興趨勢——而不必等到年底才跑資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u07",
      "startTime": 813.712,
      "endTime": 822.05,
      "textEn": "And that opens a bigger question: can this richer foundation help us move beyond measuring what happened — to understanding why it happened?",
      "textZh": "這也帶出了一個更大的問題：這個更豐富的資料基礎，是否能幫助我們從「衡量結果」，進一步走向「理解成因」？",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 822.05,
      "endTime": 829.825,
      "textEn": "Traditional experience analysis tells us what happened — how many claims, how much was paid, how that compares to assumptions.",
      "textZh": "傳統的經驗分析告訴我們發生了什麼——有多少件理賠、賠付了多少、與假設相比如何。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 829.825,
      "endTime": 834.637,
      "textEn": "But the question actuaries increasingly need to answer is: why did it happen?",
      "textZh": "但精算師越來越需要回答的問題是：為什麼會這樣？",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 834.637,
      "endTime": 845.487,
      "textEn": "Was it driven by an aging policyholder base, by changes in medical practice, or by shifts in claimant behavior? And are there early signals that assumptions need to be updated?",
      "textZh": "是因為保戶年齡結構老化、醫療行為改變，還是理賠行為的轉變？是否已有早期訊號顯示假設需要更新？",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 845.487,
      "endTime": 851.887,
      "textEn": "Take the example on this slide: an 80-year-old male with an accidental death claim after a fall.",
      "textZh": "以這頁簡報的例子來說：一位 80 歲男性因跌倒申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 851.887,
      "endTime": 864.2,
      "textEn": "Traditional analysis counts this as one accidental death. But cause-based analysis asks whether an underlying condition — like balance deterioration or cognitive decline — contributed to the fall.",
      "textZh": "傳統分析只把這件視為一個意外死亡案件。但基於成因的分析會進一步追問：是否有潛在病況——例如平衡感退化或認知功能下降——導致了這次跌倒？",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 864.2,
      "endTime": 871.65,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean our experience study population is.",
      "textZh": "這個區別會影響我們如何估計發生率、如何進行風險分群，以及經驗研究的樣本品質。",
      "slidePage": 18
    },
    {
      "id": "p06s03u07",
      "startTime": 871.65,
      "endTime": 876.912,
      "textEn": "And when we understand the why, it becomes possible to act on it — not just report it.",
      "textZh": "而當我們真正理解成因，就能採取行動——而不只是記錄結果。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 876.912,
      "endTime": 883.787,
      "textEn": "Once we understand the why behind experience, those insights can begin to inform pricing and product discussions.",
      "textZh": "一旦我們理解經驗背後的「為什麼」，這些洞察便能開始指引定價與商品討論。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 883.787,
      "endTime": 896.537,
      "textEn": "When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity — to be clear, this is about analytical capability, not specific pricing strategy.",
      "textZh": "當理賠資料變得更細緻，定價團隊便能更清楚地理解風險驅動因子如何影響理賠頻率與嚴重度——需要說明的是，這純粹是分析能力的討論，而非揭露具體的定價策略。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 896.537,
      "endTime": 904.537,
      "textEn": "This supports three pricing applications shown on the slide: refined assumptions, segmented pricing, and policy or benefit design.",
      "textZh": "這支援投影片上顯示的三個定價應用：精修假設、分群定價，以及保單或給付設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 904.537,
      "endTime": 914.212,
      "textEn": "Take lung cancer claims as an example. If we look at 100 cases together, traditional pricing may only show that overall claim cost is increasing.",
      "textZh": "以肺癌理賠為例：如果我們把 100 件案件放在一起看，傳統定價可能只顯示整體理賠成本在上升。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 914.212,
      "endTime": 927.475,
      "textEn": "But cause analysis can separate 70 standard treatment cases from 20 high-intensity treatment cases and 10 borderline cases where the treatment pattern or policy alignment needs closer review.",
      "textZh": "但原因分析可以將 70 件標準治療案件、20 件高強度治療案件，與 10 件治療模式或保單適用性需要更仔細審查的邊界案件區分開來。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 927.475,
      "endTime": 933.675,
      "textEn": "That difference really matters. Without cause analysis, management might only see a financial result.",
      "textZh": "這個差異非常重要。沒有原因分析，管理層可能只看到財務結果。",
      "slidePage": 19
    },
    {
      "id": "p06s04u07",
      "startTime": 933.675,
      "endTime": 945.525,
      "textEn": "With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.",
      "textZh": "有了原因分析，管理層才有機會評估應該更新假設、調整核保、強化理賠審查、改善商品設計，或加強客戶教育。",
      "slidePage": 19
    },
    {
      "id": "p06s04u08",
      "startTime": 945.525,
      "endTime": 956.575,
      "textEn": "This is the connection between claims AI and risk-based pricing — AI converts claims documents into structured evidence, and structured evidence makes risk segmentation more precise.",
      "textZh": "這就是理賠 AI 與風險定價之間的連結——AI 將理賠文件轉化為結構化證據，而結構化證據讓風險分群更加精準。",
      "slidePage": 19
    },
    {
      "id": "p06s04u09",
      "startTime": 956.575,
      "endTime": 962.15,
      "textEn": "Better experience analysis supports more informed pricing and risk management decisions.",
      "textZh": "更好的經驗分析，支援更有依據的定價與風險管理決策。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 962.15,
      "endTime": 969.837,
      "textEn": "But none of these applications hold if the AI underneath is reasoning from an unstable or poorly governed knowledge base.",
      "textZh": "但如果 AI 底層的推理依賴的是不穩定或治理不善的知識庫，這些應用都將無法成立。",
      "slidePage": 19
    },
    {
      "id": "p06s04u11",
      "startTime": 969.837,
      "endTime": 974.95,
      "textEn": "That brings us to the foundation that sits underneath every decision CAELIA makes.",
      "textZh": "這帶我們來到 CAELIA 每個決策背後的知識基礎。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 974.95,
      "endTime": 983.462,
      "textEn": "None of the pricing, reserving, or risk segmentation capabilities we just described are reliable without a well-governed knowledge base.",
      "textZh": "我們剛才描述的定價、準備金與風險分群能力，在沒有治理完善的知識庫支撐下，都是不可靠的。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 983.462,
      "endTime": 993.2,
      "textEn": "For CAELIA, that knowledge comes from three sources: claims operations policies, product terms and benefit rules, and a medical knowledge and disease library.",
      "textZh": "對 CAELIA 而言，這個知識庫來自三個來源：理賠作業準則、商品條款與給付規則，以及醫療知識與疾病庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 993.2,
      "endTime": 1000.475,
      "textEn": "If the knowledge base is incomplete or out of date, the AI might retrieve the wrong information or apply the wrong rule.",
      "textZh": "如果知識庫不完整或已過時，AI 可能會擷取錯誤的資訊或套用錯誤的規則。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 1000.475,
      "endTime": 1009.4,
      "textEn": "We also need traceability — when AI uses a policy clause or a medical fact, the system needs to trace exactly where that information came from.",
      "textZh": "我們也需要可追溯性——當 AI 引用保單條款或醫療事實時，系統需要能夠精確追溯那項資訊的來源。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 1009.4,
      "endTime": 1016.937,
      "textEn": "Reviewers should be able to see the source of any piece of information. This is especially important for explainability.",
      "textZh": "審查員應能看到任何資訊的來源——這對可解釋性尤其重要。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 1016.937,
      "endTime": 1021.05,
      "textEn": "In a claims decision, it's not enough to say \"the model thinks so.\"",
      "textZh": "在理賠決策中，光說「模型認為如此」是不夠的。",
      "slidePage": 20
    },
    {
      "id": "p07s01u07",
      "startTime": 1021.05,
      "endTime": 1030.025,
      "textEn": "We need to say: here's the document, here's the extracted fact, here's the relevant policy term, here's the reasoning, and here's what's still uncertain.",
      "textZh": "我們需要說明：這是文件、這是擷取的事實、這是相關保單條款、這是推理過程，以及這是仍不確定的部分。",
      "slidePage": 20
    },
    {
      "id": "p07s01u08",
      "startTime": 1030.025,
      "endTime": 1040.362,
      "textEn": "The knowledge foundation is what makes the AI system controllable — it anchors AI reasoning in approved business knowledge, rather than letting the model improvise freely.",
      "textZh": "知識基礎是讓 AI 系統可控的關鍵——它將 AI 推理錨定在核准的業務知識中，而不是讓模型自由發揮。",
      "slidePage": 20
    },
    {
      "id": "p07s01u09",
      "startTime": 1040.362,
      "endTime": 1050.25,
      "textEn": "And there is no harder test of that foundation than policy interpretation — where a single word in a contract clause can change the entire outcome of a case.",
      "textZh": "而對這個基礎最嚴格的考驗，莫過於保單解讀——因為合約條款中的一個字，可能完全改變一個案件的結果。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 1050.25,
      "endTime": 1055.763,
      "textEn": "That is why policy interpretation becomes one of the most critical tests of the system.",
      "textZh": "正因如此，保單解讀成為整個系統最關鍵的考驗之一。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 1055.763,
      "endTime": 1062.1,
      "textEn": "Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.",
      "textZh": "保單包含定義、給付條件、除外條款、等待期、給付上限及特殊規定。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 1062.1,
      "endTime": 1067.075,
      "textEn": "A claim decision often comes down to the precise interpretation of those terms.",
      "textZh": "理賠決策往往取決於這些條款的精確解讀。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 1067.075,
      "endTime": 1076.325,
      "textEn": "CAELIA's workflow runs through four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.",
      "textZh": "CAELIA 的工作流程包含四個步驟：理解理賠內容、確定保單適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 1076.325,
      "endTime": 1087.475,
      "textEn": "Take hospitalization benefits as an example. The system pulls up the relevant policy clauses, compares them against the medical facts, and flags anything that's missing or conflicting.",
      "textZh": "以住院給付為例，系統會調出相關保單條款，將其與擷取的醫療事實對比，並標示任何缺漏或衝突之處。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 1087.475,
      "endTime": 1097.988,
      "textEn": "The reviewer can then focus on judgment — does the medical evidence satisfy the policy definition? Is additional documentation needed? Does the case need to be escalated?",
      "textZh": "審查員便可專注於判斷——醫療證據是否真正符合保單定義？是否需要補充文件？案件是否需要升級處理？",
      "slidePage": 21
    },
    {
      "id": "p07s02u07",
      "startTime": 1097.988,
      "endTime": 1107.013,
      "textEn": "The output clearly shows what's covered, what's excluded, and the full decision rationale — so the reviewer has everything they need in one place.",
      "textZh": "輸出結果清楚顯示承保範圍、除外事項與完整的決策依據——讓審查員一目了然地掌握所需資訊。",
      "slidePage": 21
    },
    {
      "id": "p07s02u08",
      "startTime": 1107.013,
      "endTime": 1118.45,
      "textEn": "When we step back from these individual components — document extraction, multi-agent reasoning, and policy interpretation — the organizational value they create together becomes clear.",
      "textZh": "當我們退一步，從個別元件——文件擷取、多代理推理與保單解讀——一同審視，它們共同創造的組織價值便清晰呈現。",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 1118.45,
      "endTime": 1123.8,
      "textEn": "When we bring these components together, the organizational value appears in four areas.",
      "textZh": "當我們將這些元件整合在一起，組織價值便在四個面向中展現。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 1123.8,
      "endTime": 1134.938,
      "textEn": "For operations, CAELIA reduces manual document review, speeds up evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.",
      "textZh": "在營運方面，CAELIA 減少人工文件審查、加速證據準備，並幫助審查員專注於複雜判斷，而非重複的資料收集。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 1134.938,
      "endTime": 1145.5,
      "textEn": "In practical terms, the impact can extend across a claims organization of around 300 FTEs, with an estimated 30 percent reduction in review time per case.",
      "textZh": "在實務上，影響可延伸至約 300 名全職人員的理賠組織，估計每件案件的審查時間可縮短約 30%。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 1145.5,
      "endTime": 1152.913,
      "textEn": "For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.",
      "textZh": "在風險控管方面，系統支援更早發現不一致、異常模式與詐欺指標。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 1152.913,
      "endTime": 1166.338,
      "textEn": "For governance, human-in-the-loop review, traceable reasoning, and structured knowledge help make AI output explainable and auditable — and that's essential for responsible AI in a regulated industry like insurance.",
      "textZh": "在治理方面，human-in-the-loop 審查、可追溯推理與結構化知識，有助於使 AI 輸出可解釋且可稽核——這對保險這樣的高度監管行業而言至關重要。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 1166.338,
      "endTime": 1173.538,
      "textEn": "And for actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.",
      "textZh": "在精算工作方面，最具策略價值的效益是理賠資料變得更加結構化且更有意義。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 1173.538,
      "endTime": 1184.425,
      "textEn": "Instead of only getting final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and the rationale behind decisions.",
      "textZh": "精算師不再只能取得最終給付結果，而能存取關於診斷、治療、原因、嚴重度驅動因子與決策依據的更豐富資訊。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 1184.425,
      "endTime": 1191.713,
      "textEn": "This supports experience studies, incidence rate reviews, assumption updates, reserve analysis, and product monitoring.",
      "textZh": "這支援經驗研究、發生率審查、假設更新、準備金分析與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u09",
      "startTime": 1191.713,
      "endTime": 1204.9,
      "textEn": "The broader lesson is this: in insurance, AI value shouldn't be measured only by time saved — it should also be measured by the quality of decisions, the strength of governance, and how well the organization learns.",
      "textZh": "更廣泛的啟示是：在保險業，AI 價值不應只以節省的時間衡量——也應以決策品質、治理強度，以及組織學習能力的提升來衡量。",
      "slidePage": 22
    },
    {
      "id": "p07s03u10",
      "startTime": 1204.9,
      "endTime": 1218.8,
      "textEn": "Actuaries are well positioned to lead that work — translating AI capability into business value, connecting technical performance with risk management and governance, and helping organizations build resilience that lasts.",
      "textZh": "精算師在這項工作中具有獨特的優勢——將 AI 能力轉化為商業價值、連結技術表現與風險管理及治理，並幫助組織建立長久的韌性。",
      "slidePage": 22
    },
    {
      "id": "p07s04u05",
      "startTime": 1218.8,
      "endTime": 1222.4,
      "textEn": "Thank you so much for your time — we'd love to take your questions.",
      "textZh": "非常感謝各位的時間——我們很樂意接受大家的提問。",
      "slidePage": 23
    }
  ]
};
