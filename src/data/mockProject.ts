import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 1103.688,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0.0,
      "endTime": 5.2,
      "textEn": "Good afternoon, everyone. Thanks so much for being here.",
      "textZh": "大家好，非常感謝各位的參與。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 5.2,
      "endTime": 11.6,
      "textEn": "My name is Li Yu Tsao, and joining me today is my colleague Yu Chung Wu from Cathay Life Insurance in Taiwan.",
      "textZh": "我叫 Li Yu Tsao，今天和我一起分享的是來自台灣國泰人壽的同事 Yu Chung Wu。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 11.6,
      "endTime": 26.513,
      "textEn": "Today we want to share something that sits right at the crossroads of claims operations, actuarial analytics, risk management, and responsible AI.",
      "textZh": "今天我們想分享一個位於理賠營運、精算分析、風險管理與負責任 AI 交會點的主題。",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 26.513,
      "endTime": 36.4,
      "textEn": "Our talk is called \"Beyond Efficiency: Leveraging Agentic AI for Claims Experience Analysis and Risk Resilience in Taiwan's Life Insurance.\"",
      "textZh": "我們的題目是「超越效率：在台灣壽險業運用 Agentic AI 進行理賠經驗分析與風險韌性管理」。",
      "slidePage": 1
    },
    {
      "id": "p01s01u05",
      "startTime": 36.4,
      "endTime": 39.263,
      "textEn": "When most people first hear about AI in claims, they immediately think about efficiency: faster processing, less manual work, and shorter waiting time for customers.",
      "textZh": "當許多人第一次聽到理賠 AI，第一個想到的通常是效率。我們能不能更快處理理賠？能不能減少人工工作？",
      "slidePage": 1
    },
    {
      "id": "p01s01u06",
      "startTime": 39.263,
      "endTime": 47.325,
      "textEn": "Those questions matter. But today we want to go one step further and ask what claims AI can teach the organization.",
      "textZh": "這些問題都很重要。但今天我們想再往前一步，問問理賠 AI 能教給組織什麼。",
      "slidePage": 1
    },
    {
      "id": "p01s01u07",
      "startTime": 47.325,
      "endTime": 56.9,
      "textEn": "We want to talk about how claims AI can be more than just an automation tool.",
      "textZh": "我們想討論理賠 AI 如何不只是自動化工具。它也可以成為結構化的精算洞察來源。",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 56.9,
      "endTime": 60.013,
      "textEn": "Let me briefly introduce the two of us.",
      "textZh": "讓我簡單介紹兩位講者。",
      "slidePage": 2
    },
    {
      "id": "p01s02u02",
      "startTime": 60.013,
      "endTime": 70.288,
      "textEn": "My work focuses on applying AI and machine learning to insurance operations — especially natural language processing and large language models, which we call LLMs, for claims and medical documentation.",
      "textZh": "我的工作聚焦於將 AI 與機器學習應用在保險營運，特別是自然語言處理與大型語言模型在理賠和醫療文件上的應用。",
      "slidePage": 2
    },
    {
      "id": "p01s02u03",
      "startTime": 70.288,
      "endTime": 76.788,
      "textEn": "And I'm Yu Chung Wu. My work focuses on claims operations and AI system architecture.",
      "textZh": "我叫 Yu Chung Wu。我的工作聚焦在理賠營運與 AI 系統架構。",
      "slidePage": 2
    },
    {
      "id": "p01s02u04",
      "startTime": 76.788,
      "endTime": 84.75,
      "textEn": "On this project, we worked closely with claims professionals, data scientists, IT teams, and governance stakeholders to design an AI-assisted claims pre-adjudication framework.",
      "textZh": "在這個專案中，我們與理賠專家、資料科學家、IT 團隊以及治理相關單位密切合作，設計 AI 輔助的理賠預審框架。",
      "slidePage": 2
    },
    {
      "id": "p01s02u05",
      "startTime": 84.75,
      "endTime": 89.613,
      "textEn": "Together, we'll walk you through three questions. First, why is Taiwan's life insurance claims environment getting more complex?",
      "textZh": "今天我們會依序回答三個問題。第一，為什麼台灣壽險理賠環境正變得越來越複雜？",
      "slidePage": 2
    },
    {
      "id": "p01s03u01",
      "startTime": 89.613,
      "endTime": 95.475,
      "textEn": "Let's start with the business context.",
      "textZh": "讓我們先從商業背景開始。",
      "slidePage": 3
    },
    {
      "id": "p01s03u02",
      "startTime": 95.475,
      "endTime": 99.313,
      "textEn": "Claims operations in Taiwan are under structural pressure from three directions: rising external pressure, a growing internal workload, and emerging constraints around talent and organization.",
      "textZh": "台灣的理賠營運正面臨三個方向的結構性壓力：外部壓力上升、內部作業負擔擴大，以及組織與人才限制浮現。",
      "slidePage": 3
    },
    {
      "id": "p01s03u03",
      "startTime": 99.313,
      "endTime": 106.75,
      "textEn": "The first pressure is demographic and medical.",
      "textZh": "第一個壓力來自人口與醫療。",
      "slidePage": 3
    },
    {
      "id": "p01s03u04",
      "startTime": 106.75,
      "endTime": 110.35,
      "textEn": "Taiwan is entering what's called a super-aged society.",
      "textZh": "台灣正進入超高齡社會，壽險公司看到越來越多與慢性病、失智、長期照護、住院與術後恢復相關的理賠。",
      "slidePage": 3
    },
    {
      "id": "p01s03u05",
      "startTime": 110.35,
      "endTime": 115.138,
      "textEn": "Life insurers are seeing more and more claims tied to chronic disease, dementia, long-term care, hospitalization, and post-treatment recovery.",
      "textZh": "壽險業者正面臨越來越多與慢性病、失智症、長期照護、住院及術後恢復相關的理賠案件。",
      "slidePage": 3
    },
    {
      "id": "p01s03u06",
      "startTime": 115.138,
      "endTime": 120.7,
      "textEn": "These cases often involve complex medical records, multiple diagnoses, and long claims histories.",
      "textZh": "這些案件往往涉及複雜的醫療紀錄、多重診斷與較長的理賠歷史。同時，醫療成本壓力也讓更多財務責任轉向商業保險。",
      "slidePage": 3
    },
    {
      "id": "p01s03u07",
      "startTime": 120.7,
      "endTime": 128.162,
      "textEn": "At the same time, rising healthcare costs are shifting more financial responsibility onto private insurance.",
      "textZh": "與此同時，持續攀升的醫療費用正將更多財務責任轉移到私人保險。",
      "slidePage": 3
    },
    {
      "id": "p01s03u08",
      "startTime": 128.162,
      "endTime": 133.688,
      "textEn": "People are increasingly relying on life and health insurance to cover medical and long-term care needs.",
      "textZh": "客戶越來越依賴壽險與健康險商品來支應醫療與長照需求。這表示理賠量增加，理賠複雜度也增加。",
      "slidePage": 3
    },
    {
      "id": "p01s03u09",
      "startTime": 133.688,
      "endTime": 138.4,
      "textEn": "On the slide, you can see the scale of that pressure: claim volume has grown by 56 percent.",
      "textZh": "從這張投影片可以看到這股壓力的規模：理賠量已成長了 56%。",
      "slidePage": 3
    },
    {
      "id": "p02s01u01",
      "startTime": 138.4,
      "endTime": 141.8,
      "textEn": "Claims processing has always evolved alongside the available technology. But each stage solved one problem while leaving another one behind.",
      "textZh": "理賠處理一直隨可用技術一起演進。但每一個階段解決一個問題，也留下另一個問題。",
      "slidePage": 4
    },
    {
      "id": "p02s01u02",
      "startTime": 141.8,
      "endTime": 150.363,
      "textEn": "In the IBM AS/400 era, claims processing was mostly data-entry driven. The main goal was to record claims accurately and get payments out.",
      "textZh": "在 IBM AS400 時代，理賠處理主要由資料輸入驅動。核心目標是準確記錄理賠並完成付款處理。",
      "slidePage": 4
    },
    {
      "id": "p02s01u03",
      "startTime": 150.363,
      "endTime": 158.838,
      "textEn": "In the core systems era, insurers digitized their workflows and introduced rule-based engines, which made standard claims more consistent.",
      "textZh": "在核心系統時代，保險公司將流程數位化並導入規則引擎，使標準案件更一致。",
      "slidePage": 4
    },
    {
      "id": "p02s01u04",
      "startTime": 158.838,
      "endTime": 165.613,
      "textEn": "In the data modeling era, machine learning models supported risk tagging, anomaly detection, and triage. But many of those models were still limited to scoring.",
      "textZh": "在資料模型時代，機器學習模型支援風險標籤、異常偵測與分流。但許多模型仍然只停留在評分。",
      "slidePage": 4
    },
    {
      "id": "p02s01u05",
      "startTime": 165.613,
      "endTime": 169.025,
      "textEn": "They could identify higher-risk cases, but they didn't always explain the evidence in a way that reviewers could immediately act on.",
      "textZh": "它們可以找出較高風險案件，卻不一定能用審查員可以立即使用的方式解釋證據。",
      "slidePage": 4
    },
    {
      "id": "p02s01u06",
      "startTime": 169.025,
      "endTime": 173.838,
      "textEn": "Now we're entering what we call the agentic AI era.",
      "textZh": "現在我們進入所謂 agentic AI 時代。AI 不再只是等待使用者提問的被動工具。",
      "slidePage": 4
    },
    {
      "id": "p02s01u07",
      "startTime": 173.838,
      "endTime": 178.213,
      "textEn": "AI is no longer just a passive tool waiting for someone to ask it a question.",
      "textZh": "AI 不再只是被動等待提問的工具。",
      "slidePage": 4
    },
    {
      "id": "p02s01u08",
      "startTime": 178.213,
      "endTime": 180.55,
      "textEn": "It can actively take part in parts of the adjudication process — reading documents, pulling out evidence, comparing information against policy terms, spotting inconsistencies, and generating recommendations.",
      "textZh": "它可以主動參與部分核定流程：閱讀文件、擷取證據、比對保單條款、辨識不一致並產出建議。",
      "slidePage": 4
    },
    {
      "id": "p02s01u09",
      "startTime": 180.55,
      "endTime": 187.75,
      "textEn": "But this shift also raises an important governance question.",
      "textZh": "但這個轉變也帶來重要的治理問題。如果 AI 變得更主動，我們如何讓它可解釋、可控、可稽核，並且符合專業判斷？",
      "slidePage": 4
    },
    {
      "id": "p02s01u10",
      "startTime": 187.75,
      "endTime": 194.412,
      "textEn": "If AI is becoming more active, how do we keep it explainable, controllable, auditable, and aligned with professional judgment?",
      "textZh": "如果 AI 變得更加主動，我們如何確保它具備可解釋性、可控性、可稽核性，並與專業判斷保持一致？",
      "slidePage": 4
    },
    {
      "id": "p02s01u11",
      "startTime": 194.412,
      "endTime": 201.963,
      "textEn": "Our answer isn't full automation without any oversight.",
      "textZh": "我們的答案不是沒有監督的全自動化。我們的答案是 human-in-the-loop 的 agentic AI：AI 執行結構化分析並準備證據，而人類審查員保留最終決策權。",
      "slidePage": 4
    },
    {
      "id": "p02s02u01",
      "startTime": 201.963,
      "endTime": 207.15,
      "textEn": "Before we explain the new framework, let's look at the traditional claims review process. In a typical flow, a customer submits their claim documents.",
      "textZh": "接著看實際理賠流程。",
      "slidePage": 5
    },
    {
      "id": "p02s02u02",
      "startTime": 207.15,
      "endTime": 215.013,
      "textEn": "The slide breaks this into six steps: intake, registration and case creation, case assignment, review, decision, and finally closure and archiving.",
      "textZh": "這張投影片將流程分成六個步驟：受件、建立案件、分案、審查、決策，以及最後的結案與歸檔。",
      "slidePage": 5
    },
    {
      "id": "p02s02u03",
      "startTime": 215.013,
      "endTime": 223.063,
      "textEn": "That sounds pretty straightforward — but in practice, many steps require a lot of interpretation.",
      "textZh": "這聽起來很直線，但實務上每個步驟都需要大量解讀。",
      "slidePage": 5
    },
    {
      "id": "p02s02u04",
      "startTime": 223.063,
      "endTime": 229.55,
      "textEn": "A medical certificate might have free-text descriptions, abbreviations, different hospital formats, or Traditional Chinese medical terminology.",
      "textZh": "診斷書可能包含自由文字描述、縮寫、不同醫院的格式，或是繁體中文醫學術語。",
      "slidePage": 5
    },
    {
      "id": "p02s02u05",
      "startTime": 229.55,
      "endTime": 233.713,
      "textEn": "A diagnosis might need to be mapped to an internal disease category.",
      "textZh": "診斷結果可能需要對應到內部疾病分類。",
      "slidePage": 5
    },
    {
      "id": "p02s02u06",
      "startTime": 233.713,
      "endTime": 238.0,
      "textEn": "A procedure or hospitalization period might need to be checked against policy definitions, exclusions, deductibles, or benefit limits.",
      "textZh": "某項醫療程序或住院期間，可能需要對照保單定義、除外條款、自付額或給付上限進行核對。",
      "slidePage": 5
    },
    {
      "id": "p02s02u07",
      "startTime": 238.0,
      "endTime": 243.675,
      "textEn": "And here's the key challenge: most of the most valuable information isn't born in a structured format.",
      "textZh": "而這裡有個關鍵挑戰：最有價值的資訊，大多不是以結構化格式生成的。",
      "slidePage": 5
    },
    {
      "id": "p02s02u08",
      "startTime": 243.675,
      "endTime": 251.138,
      "textEn": "If we only capture the final outcome — approved or declined, or the final payment amount — we lose a huge amount of explanatory information along the way.",
      "textZh": "如果我們只記錄最終結果——核准或拒絕、或最終給付金額——就會在過程中失去大量解釋性資訊。",
      "slidePage": 5
    },
    {
      "id": "p02s03u01",
      "startTime": 251.138,
      "endTime": 254.975,
      "textEn": "The first step is digital claims submission.",
      "textZh": "數位申請是第一步。",
      "slidePage": 6
    },
    {
      "id": "p02s03u02",
      "startTime": 254.975,
      "endTime": 265.85,
      "textEn": "As the app screens show, customers can start a claims application, upload documents, check claims results, and review application details directly through the mobile app.",
      "textZh": "如畫面所示，客戶可以直接透過 App 發起理賠申請、上傳文件、查詢理賠結果，並查看申請詳情。",
      "slidePage": 6
    },
    {
      "id": "p02s03u03",
      "startTime": 265.85,
      "endTime": 271.588,
      "textEn": "This is great for customer convenience and it shortens turnaround time. But digital submission alone doesn't solve the whole problem.",
      "textZh": "客戶可透過手機提交理賠，減少紙本並縮短前端流程。",
      "slidePage": 6
    },
    {
      "id": "p03s01u01",
      "startTime": 271.588,
      "endTime": 275.638,
      "textEn": "After submission, the next step is case registration. Traditionally, staff would review documents and manually type key fields into the claims system.",
      "textZh": "提交後的下一步是建立案件。傳統上，人員會審閱文件並手動將關鍵欄位輸入理賠系統。",
      "slidePage": 7
    },
    {
      "id": "p03s01u02",
      "startTime": 275.638,
      "endTime": 280.35,
      "textEn": "AI-driven structured data extraction changes that step. In our framework, OCR first converts document images into machine-readable text.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 7
    },
    {
      "id": "p03s01u03",
      "startTime": 280.35,
      "endTime": 288.538,
      "textEn": "Then LLM-based extraction identifies fields like diagnosis, treatment dates, hospital name, surgery information, claim amount, and other relevant details.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 7
    },
    {
      "id": "p03s01u04",
      "startTime": 288.538,
      "endTime": 295.138,
      "textEn": "But we don't treat extraction as a simple copy-and-paste task.",
      "textZh": "但我們不把擷取視為單純的複製貼上工作。",
      "slidePage": 7
    },
    {
      "id": "p03s01u05",
      "startTime": 295.138,
      "endTime": 302.175,
      "textEn": "The AI needs to distinguish past medical history from the current claim event, a suspected diagnosis from a confirmed one, and one hospital's document style from another.",
      "textZh": "AI 必須區分既往病史與本次理賠事故、疑似診斷與確診，以及不同醫院的文件風格差異。",
      "slidePage": 7
    },
    {
      "id": "p03s01u06",
      "startTime": 302.175,
      "endTime": 307.063,
      "textEn": "For Traditional Chinese medical documentation, this is especially important.",
      "textZh": "對繁體中文的醫療文件來說，這一點尤其重要。",
      "slidePage": 7
    },
    {
      "id": "p03s02u01",
      "startTime": 307.063,
      "endTime": 311.338,
      "textEn": "Once case data is structured, we can move into claims triage. Machine learning models can assess claim risk and help route cases.",
      "textZh": "有了結構化資料後，就能進入理賠分流。",
      "slidePage": 8
    },
    {
      "id": "p03s02u02",
      "startTime": 311.338,
      "endTime": 317.35,
      "textEn": "Low-risk, straightforward cases can go through a more streamlined workflow, while complex or suspicious cases get sent to experienced reviewers for a deeper look.",
      "textZh": "低風險、單純的案件可走較簡化的流程，而複雜或可疑的案件則轉給資深審查員進行深入審核。",
      "slidePage": 8
    },
    {
      "id": "p03s02u03",
      "startTime": 317.35,
      "endTime": 324.713,
      "textEn": "This kind of triage helps operations allocate human expertise more effectively. But there's an important limitation: a risk score by itself isn't enough.",
      "textZh": "這種分流有助於更有效地分配人力專業。但有一個重要限制：風險分數本身是不夠的。",
      "slidePage": 8
    },
    {
      "id": "p03s02u04",
      "startTime": 324.713,
      "endTime": 328.363,
      "textEn": "If a model says a case has a risk score of 82 out of 100, the claims reviewer still needs to know why.",
      "textZh": "如果模型說一個案件的風險分數是 82 分，理賠審查員仍然需要知道原因。",
      "slidePage": 8
    },
    {
      "id": "p03s02u05",
      "startTime": 328.363,
      "endTime": 336.137,
      "textEn": "Is the risk coming from a diagnosis inconsistency? Repeated claims? A provider pattern? Unusual timing? Policy duration? Medical history? Or a document inconsistency?",
      "textZh": "風險來自診斷不一致？重複理賠？醫療院所模式？時間異常？保單期間？病史？還是文件不一致？",
      "slidePage": 8
    },
    {
      "id": "p03s02u06",
      "startTime": 336.137,
      "endTime": 340.637,
      "textEn": "This is where traditional machine learning and agentic AI can work together. Machine learning is great at spotting patterns at scale.",
      "textZh": "這正是傳統機器學習與 agentic AI 可以互補的地方。機器學習擅長大規模發現模式。",
      "slidePage": 8
    },
    {
      "id": "p03s02u07",
      "startTime": 340.637,
      "endTime": 346.912,
      "textEn": "Agentic AI can gather the evidence, organize the reasoning, and lay out the basis for review.",
      "textZh": "Agentic AI 則能收集證據、整理推理過程，並呈現審查所需的依據。",
      "slidePage": 8
    },
    {
      "id": "p03s03u01",
      "startTime": 346.912,
      "endTime": 351.287,
      "textEn": "For cases that need human review, we built a unified smart claims platform.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 9
    },
    {
      "id": "p03s03u02",
      "startTime": 351.287,
      "endTime": 357.55,
      "textEn": "The idea is to bring multi-source data into one review workbench, so reviewers don't have to jump between systems, documents, policy references, customer records, risk tags, and decision notes.",
      "textZh": "核心概念是將多來源資料整合到單一審查工作台，讓審查員不必在系統、文件、保單條款、客戶紀錄、風險標籤與決策備註之間來回切換。",
      "slidePage": 9
    },
    {
      "id": "p03s03u03",
      "startTime": 357.55,
      "endTime": 363.862,
      "textEn": "Everything is in one place: claims information, risk detection results, quick access to related documents, and decision support.",
      "textZh": "所有資訊都在同一處：理賠資訊、風險偵測結果、相關文件快速存取，以及決策支援。",
      "slidePage": 9
    },
    {
      "id": "p03s03u04",
      "startTime": 363.862,
      "endTime": 367.85,
      "textEn": "This matters because operational efficiency isn't only about automating tasks. It's also about reducing cognitive load.",
      "textZh": "這很重要，因為作業效率不只是自動化任務，也關乎降低審查員的認知負擔。",
      "slidePage": 9
    },
    {
      "id": "p03s03u05",
      "startTime": 367.85,
      "endTime": 374.025,
      "textEn": "When information is scattered across systems, reviewers spend a lot of time just searching, comparing, and reconciling.",
      "textZh": "當資訊分散在各系統中，審查員會花大量時間在搜尋、比對與核對上。",
      "slidePage": 9
    },
    {
      "id": "p04s01u01",
      "startTime": 374.025,
      "endTime": 378.787,
      "textEn": "Inside the review workbench, we embed several AI-assisted features. The first is risk tagging.",
      "textZh": "在審查工作台內，我們嵌入了多項 AI 輔助功能。第一是風險標籤。",
      "slidePage": 10
    },
    {
      "id": "p04s01u02",
      "startTime": 378.787,
      "endTime": 384.1,
      "textEn": "AI highlights risk indicators and helps reviewers understand which parts of the case deserve attention. The second is decision support.",
      "textZh": "AI 標示風險指標，幫助審查員了解案件中哪些部分需要特別關注。第二是決策支援。",
      "slidePage": 10
    },
    {
      "id": "p04s01u03",
      "startTime": 384.1,
      "endTime": 389.487,
      "textEn": "AI summarizes the relevant medical facts, policy terms, and claim conditions, then organizes them into a review-ready format. The third is relationship graph analysis.",
      "textZh": "AI 彙整相關醫療事實、保單條款與理賠條件，整理成審查就緒的格式。第三是關係圖分析。",
      "slidePage": 10
    },
    {
      "id": "p04s01u04",
      "startTime": 389.487,
      "endTime": 398.412,
      "textEn": "This helps reviewers see connections among claimants, providers, agents, prior claims, or other related parties — when that kind of analysis is relevant and permitted.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 10
    },
    {
      "id": "p04s01u05",
      "startTime": 398.412,
      "endTime": 403.025,
      "textEn": "These features aren't separate from the claims workflow. They're embedded right where the reviewer is already working.",
      "textZh": "這些功能不是獨立於理賠流程之外，而是嵌入在審查員原本工作的介面中。",
      "slidePage": 10
    },
    {
      "id": "p04s01u06",
      "startTime": 403.025,
      "endTime": 410.325,
      "textEn": "This matters because AI adoption isn't just a modeling problem.",
      "textZh": "這一點很重要，因為 AI 導入不只是一個建模問題。",
      "slidePage": 10
    },
    {
      "id": "p04s01u07",
      "startTime": 410.325,
      "endTime": 413.775,
      "textEn": "It's also a workflow design problem. If AI output appears somewhere outside the normal workflow, people may just ignore it.",
      "textZh": "也是一個工作流程設計問題。如果 AI 輸出出現在正常流程之外，人們可能只是忽略它。",
      "slidePage": 10
    },
    {
      "id": "p04s02u01",
      "startTime": 413.775,
      "endTime": 417.15,
      "textEn": "Now we're at a key turning point in our presentation. How does AI evolve from a tool into a collaborative decision-making system?",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 11
    },
    {
      "id": "p04s02u02",
      "startTime": 417.15,
      "endTime": 422.075,
      "textEn": "In the early stage, AI works like a query tool. A user asks a question, and AI responds.",
      "textZh": "在早期階段，AI 就像一個查詢工具——使用者提問，AI 回應。",
      "slidePage": 11
    },
    {
      "id": "p04s02u03",
      "startTime": 422.075,
      "endTime": 423.775,
      "textEn": "That's useful, but it depends heavily on the user's ability to ask the right question.",
      "textZh": "這很有用，但效果高度取決於使用者是否能提出正確的問題。",
      "slidePage": 11
    },
    {
      "id": "p04s02u04",
      "startTime": 423.775,
      "endTime": 430.85,
      "textEn": "In the next stage, AI becomes more like a digital specialist.",
      "textZh": "在下一個階段，AI 更像是一位數位專科顧問。",
      "slidePage": 11
    },
    {
      "id": "p04s02u05",
      "startTime": 430.85,
      "endTime": 432.55,
      "textEn": "It understands the task, takes initiative, detects missing information, flags inconsistencies, suggests next steps, and prepares analysis before you even ask.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 11
    },
    {
      "id": "p04s02u06",
      "startTime": 432.55,
      "endTime": 438.3,
      "textEn": "And in the most advanced stage, AI becomes more like an intelligent team: one agent extracts medical information, another interprets policy terms, another checks benefit rules or risk indicators, and another prepares the explanation and decision report.",
      "textZh": "在最進階的階段，AI 更像一個智能團隊：一個 agent 擷取醫療資訊，另一個解讀保單條款，另一個核查給付規則或風險指標，還有一個準備說明與決策報告。",
      "slidePage": 11
    },
    {
      "id": "p04s02u07",
      "startTime": 438.3,
      "endTime": 446.575,
      "textEn": "This multi-agent design makes sense because claims adjudication isn't a single task. It's a sequence of specialized reasoning steps.",
      "textZh": "這種多代理設計有其道理，因為理賠核定不是單一任務，而是一系列專業推理步驟。",
      "slidePage": 11
    },
    {
      "id": "p04s02u08",
      "startTime": 446.575,
      "endTime": 454.137,
      "textEn": "But we should be careful with the word \"collaborative.\" We don't mean that AI has the same authority as a human claims professional.",
      "textZh": "但我們要謹慎使用「協作」這個詞——我們並不是說 AI 擁有與人類理賠專員相同的決策權限。",
      "slidePage": 11
    },
    {
      "id": "p04s03u01",
      "startTime": 454.137,
      "endTime": 461.487,
      "textEn": "That accountability requirement is exactly why we designed this workflow as human-in-the-loop pre-adjudication: agentic AI provides the analysis and recommendations, while human reviewers retain the final call.",
      "textZh": "這個問責要求，正是我們將流程設計為 human-in-the-loop 預審的原因：agentic AI 提供分析與建議，而人工審查員保留最終決策權。",
      "slidePage": 12
    },
    {
      "id": "p04s03u02",
      "startTime": 461.487,
      "endTime": 464.337,
      "textEn": "The distinction between pre-adjudication and adjudication is really important here. We're not saying AI independently approves or rejects complex claims.",
      "textZh": "預審與正式核定的區別在這裡非常重要。我們不是說 AI 獨立核准或拒絕複雜理賠。",
      "slidePage": 12
    },
    {
      "id": "p04s03u03",
      "startTime": 464.337,
      "endTime": 470.575,
      "textEn": "Instead, AI prepares a pre-assessment: the reviewed documents, extracted facts, relevant policy terms, supporting evidence, things that need attention, and a suggested recommendation.",
      "textZh": "而是 AI 準備預審：審閱文件、擷取事實、相關保單條款、支持證據、需要關注的事項，以及建議的決策方向。",
      "slidePage": 12
    },
    {
      "id": "p04s03u04",
      "startTime": 470.575,
      "endTime": 475.988,
      "textEn": "The human reviewer then evaluates the evidence and the recommendation. If the output is complete, the reviewer can move faster.",
      "textZh": "人工審查員接著評估證據與建議。若輸出完整，審查員可以更快完成審核。",
      "slidePage": 12
    },
    {
      "id": "p04s03u05",
      "startTime": 475.988,
      "endTime": 483.863,
      "textEn": "If something looks off or inconsistent, the reviewer can challenge it, correct it, or ask for more investigation. This design gives us two real benefits.",
      "textZh": "若有疑問或不一致，審查員可以質疑、修正或要求進一步調查。這個設計帶來兩個實質效益。",
      "slidePage": 12
    },
    {
      "id": "p04s03u06",
      "startTime": 483.863,
      "endTime": 486.637,
      "textEn": "First, it improves efficiency because the routine evidence preparation is accelerated. Second, it improves governance because the AI's reasoning pathway is visible.",
      "textZh": "第一，它提升效率，因為例行的證據準備工作得以加速。第二，它強化治理，因為 AI 的推理路徑是可見的。",
      "slidePage": 12
    },
    {
      "id": "p04s03u07",
      "startTime": 486.637,
      "endTime": 491.35,
      "textEn": "The reviewer can see not just the recommendation, but the basis for that recommendation. In regulated insurance operations, explainability isn't a nice-to-have.",
      "textZh": "審查員不只能看到建議，還能看到建議背後的依據。在受監理的保險營運中，可解釋性不是加分項。",
      "slidePage": 12
    },
    {
      "id": "p04s03u08",
      "startTime": 491.35,
      "endTime": 497.587,
      "textEn": "It's a condition for trust. And that raises a very practical question: what exactly should AI explain? A recommendation alone isn't enough.",
      "textZh": "它是信任的前提條件。而這引出一個非常實際的問題：AI 究竟應該說明什麼？光有建議是不夠的。",
      "slidePage": 12
    },
    {
      "id": "p04s03u09",
      "startTime": 497.587,
      "endTime": 504.037,
      "textEn": "The reviewer needs to see the reasoning pathway behind it.",
      "textZh": "審查員需要看到建議背後的推理路徑。",
      "slidePage": 12
    },
    {
      "id": "p04s03u10",
      "startTime": 504.037,
      "endTime": 511.587,
      "textEn": "You'll notice four actuarial benefits at the bottom of this slide — better risk identification, more precise rate setting, stronger product design, and more controllable loss costs. But every one of those benefits depends on a single condition: the AI's recommendations must be explainable enough to genuinely trust.",
      "textZh": "你們會注意到這張投影片下方列出四個精算效益——更精準的風險識別、更精確的費率釐定、更強健的商品設計，以及更可控的損失成本。但這每一項效益都取決於同一個條件：AI 的建議必須可解釋到真正值得信賴的程度。",
      "slidePage": 12
    },
    {
      "id": "p05s01u01",
      "startTime": 511.587,
      "endTime": 517.487,
      "textEn": "So how does the AI actually reason through a case — and how can a reviewer trust that reasoning?",
      "textZh": "那麼，AI 究竟是如何對一個案件進行推理的——而審查員又如何能信任這個推理？",
      "slidePage": 13
    },
    {
      "id": "p05s01u02",
      "startTime": 517.487,
      "endTime": 525.212,
      "textEn": "If the system simply says, \"This claim should be paid\" — the reviewer can't rely on that. We need a traceable reasoning pathway.",
      "textZh": "如果系統只是說「這件理賠應該給付」，審查員根本無法依賴這樣的答案。我們需要一條可追溯的推理路徑。",
      "slidePage": 13
    },
    {
      "id": "p05s01u03",
      "startTime": 525.212,
      "endTime": 538.438,
      "textEn": "For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.",
      "textZh": "針對每個案件，AI 應能說明它使用了哪些資訊、如何解讀、哪些保單條款相關、在哪裡發現不一致，以及為何做出這樣的建議。",
      "slidePage": 13
    },
    {
      "id": "p05s01u04",
      "startTime": 538.438,
      "endTime": 545.513,
      "textEn": "Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.",
      "textZh": "以這張投影片上的案例為例：一位腎結石患者接受 ESWL 碎石治療，並住院五天。",
      "slidePage": 13
    },
    {
      "id": "p05s01u05",
      "startTime": 545.513,
      "endTime": 550.338,
      "textEn": "The AI checks the medical facts against policy terms and medical guidelines.",
      "textZh": "AI 會將醫療事實與保單條款及醫療準則進行比對核查。",
      "slidePage": 13
    },
    {
      "id": "p05s01u06",
      "startTime": 550.338,
      "endTime": 564.95,
      "textEn": "It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.",
      "textZh": "系統可以辨識 ESWL 通常是門診手術，建議外科給付可以核付，同時仍標記住院部分供人工審查，並顯示 92% 的信心分數。",
      "slidePage": 13
    },
    {
      "id": "p05s01u07",
      "startTime": 564.95,
      "endTime": 574.763,
      "textEn": "For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.",
      "textZh": "對理賠審查員來說，它支援更快、更一致的決策。對風險管理者來說，它提供詐欺與異常偵測的結構化指標。",
      "slidePage": 13
    },
    {
      "id": "p05s01u08",
      "startTime": 574.763,
      "endTime": 580.45,
      "textEn": "And for actuaries, it creates more granular data about the cause and characteristics of claims.",
      "textZh": "對精算師來說，它創造了關於理賠原因與特性更細緻的資料。",
      "slidePage": 13
    },
    {
      "id": "p05s01u09",
      "startTime": 580.45,
      "endTime": 589.312,
      "textEn": "These requirements define what a real claims AI system needs to deliver — and building to those requirements is exactly what we set out to do.",
      "textZh": "這些要求定義了一個真正的理賠 AI 系統必須做到的事——而按這些要求來建構，正是我們的出發點。",
      "slidePage": 13
    },
    {
      "id": "p05s02u01",
      "startTime": 589.312,
      "endTime": 596.35,
      "textEn": "To operationalize this reasoning pathway, we built CAELIA — the Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "為了讓這條推理路徑落地實作，我們建立了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 14
    },
    {
      "id": "p05s02u02",
      "startTime": 596.35,
      "endTime": 606.1,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。這個名稱很重要，因為這不只是一個模型。",
      "slidePage": 14
    },
    {
      "id": "p05s02u03",
      "startTime": 606.1,
      "endTime": 615.738,
      "textEn": "It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.",
      "textZh": "它是一個結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查的引擎。",
      "slidePage": 14
    },
    {
      "id": "p05s02u04",
      "startTime": 615.738,
      "endTime": 618.613,
      "textEn": "The objective isn't to make AI look impressive.",
      "textZh": "目標不是讓 AI 看起來很厲害。",
      "slidePage": 14
    },
    {
      "id": "p05s02u05",
      "startTime": 618.613,
      "endTime": 625.763,
      "textEn": "The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.",
      "textZh": "目標是讓理賠決策流程更透明、更一致、更具分析價值。",
      "slidePage": 14
    },
    {
      "id": "p05s02u06",
      "startTime": 625.763,
      "endTime": 640.163,
      "textEn": "In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.",
      "textZh": "在實務中，CAELIA 讀取理賠文件、擷取醫療與理賠資訊、檢索相關保單知識、核查給付條件、辨識潛在不一致，並產出預審決策報告。",
      "slidePage": 14
    },
    {
      "id": "p05s02u07",
      "startTime": 640.163,
      "endTime": 646.638,
      "textEn": "The reviewer stays in control — but they're starting from a much richer, better-organized evidence package.",
      "textZh": "審查員仍掌控全局——但他們的起點是更豐富、更有條理的證據包。",
      "slidePage": 14
    },
    {
      "id": "p05s02u08",
      "startTime": 646.638,
      "endTime": 654.25,
      "textEn": "And honestly, the more we worked on this, the clearer it became — one model just can't do all of this well at the same time.",
      "textZh": "說實話，越做越清楚一件事——一個模型根本無法同時把這所有事情都做好。",
      "slidePage": 14
    },
    {
      "id": "p05s03u01",
      "startTime": 654.25,
      "endTime": 660.375,
      "textEn": "Our answer is a multi-agent architecture — where each agent owns a specific part of the reasoning.",
      "textZh": "我們的答案是多代理架構——每個 agent 負責推理過程中的特定環節。",
      "slidePage": 15
    },
    {
      "id": "p05s03u02",
      "startTime": 660.375,
      "endTime": 673.763,
      "textEn": "Think of it like a team: one agent extracts key facts from the documents, another interprets the medical context, one checks the policy terms, one flags risk signals, and one pulls it all together into a final report.",
      "textZh": "把它想成一個團隊：一個 agent 從文件中擷取關鍵事實，一個解讀醫療背景，一個核查保單條款，一個標記風險訊號，最後一個把所有資訊整合成報告。",
      "slidePage": 15
    },
    {
      "id": "p05s03u03",
      "startTime": 673.763,
      "endTime": 676.463,
      "textEn": "Each agent does one thing — and does it well.",
      "textZh": "每個 agent 只做一件事——而且做得好。",
      "slidePage": 15
    },
    {
      "id": "p05s03u04",
      "startTime": 676.463,
      "endTime": 684.363,
      "textEn": "This makes the system much easier to govern. If something's off, we know exactly which agent to look at — not the entire system.",
      "textZh": "這讓系統更容易被治理。如果出了問題，我們知道該檢查哪個 agent——而不是整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u05",
      "startTime": 684.363,
      "endTime": 693.638,
      "textEn": "It also supports explainability. Each agent's output is traceable, so the reviewer can follow the reasoning step by step — not just see a final number.",
      "textZh": "它也支援可解釋性。每個 agent 的輸出都可追溯，讓審查員能一步一步跟著推理——而不只是看到一個最終數字。",
      "slidePage": 15
    },
    {
      "id": "p05s03u06",
      "startTime": 693.638,
      "endTime": 702.438,
      "textEn": "And as medical knowledge, policy terms, or fraud patterns evolve, we can update just the relevant agent — without rebuilding everything from scratch.",
      "textZh": "隨著醫療知識、保單條款或詐欺模式的演進，我們可以只更新相關的 agent——而無需從頭重建整個系統。",
      "slidePage": 15
    },
    {
      "id": "p05s03u07",
      "startTime": 702.438,
      "endTime": 704.6,
      "textEn": "Let me show you what this actually produces.",
      "textZh": "讓我來展示這個架構實際上產出了什麼。",
      "slidePage": 15
    },
    {
      "id": "p06s01u01",
      "startTime": 704.6,
      "endTime": 709.888,
      "textEn": "The most visible result of that architecture is the AI pre-assessment decision report.",
      "textZh": "這個架構最直接可見的成果，是 AI 預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p06s01u02",
      "startTime": 709.888,
      "endTime": 715.513,
      "textEn": "This report is designed to take raw claims data and turn it into a traceable decision recommendation.",
      "textZh": "這份報告的設計目的，是將原始的理賠資料轉化為可追溯的決策建議。",
      "slidePage": 16
    },
    {
      "id": "p06s01u03",
      "startTime": 715.513,
      "endTime": 726.062,
      "textEn": "It covers everything the reviewer needs: what happened, what the documents say, which policy terms apply, what the AI recommends, and how confident it is in each judgment.",
      "textZh": "它涵蓋了審查員需要的一切：發生了什麼、文件說了什麼、適用哪些保單條款、AI 的建議是什麼，以及對每項判斷的信心程度。",
      "slidePage": 16
    },
    {
      "id": "p06s01u04",
      "startTime": 726.062,
      "endTime": 736.513,
      "textEn": "For example, it might show 92 percent confidence on the surgical benefit — so the reviewer can quickly tell which parts are solid and which ones need a closer look.",
      "textZh": "舉例來說，報告可能顯示外科給付的信心分數是 92%——讓審查員能快速判斷哪些部分穩固、哪些需要更仔細審視。",
      "slidePage": 16
    },
    {
      "id": "p06s01u05",
      "startTime": 736.513,
      "endTime": 746.45,
      "textEn": "In a regulated environment like insurance, that traceability isn't optional — every recommendation has to be grounded in evidence the reviewer can actually verify.",
      "textZh": "在保險這樣的受監理環境中，這種可追溯性不是選配——每一項建議都必須建立在審查員能夠實際驗證的證據上。",
      "slidePage": 16
    },
    {
      "id": "p06s01u06",
      "startTime": 746.45,
      "endTime": 759.05,
      "textEn": "And here's the part that matters most for actuaries: when claims data is this structured and traceable, it stops being just operational evidence — and starts becoming something you can actually analyze.",
      "textZh": "而對精算師來說，這裡有個最重要的轉變：當理賠資料這樣結構化且可追溯，它就不再只是營運性的證據——而開始成為真正可以分析的素材。",
      "slidePage": 16
    },
    {
      "id": "p06s02u01",
      "startTime": 759.05,
      "endTime": 767.813,
      "textEn": "The structured output that CAELIA produces has three layers: the claim result, the policy and decision basis, and the full medical assessment.",
      "textZh": "CAELIA 產出的結構化輸出有三個層次：理賠結果、保單與決策依據，以及完整的醫療評估。",
      "slidePage": 17
    },
    {
      "id": "p06s02u02",
      "startTime": 767.813,
      "endTime": 776.325,
      "textEn": "Each layer captures something different: not just what was decided, but what evidence led there, and what the medical picture looked like.",
      "textZh": "每個層次各自捕捉不同的資訊：不只是決定了什麼，而是什麼證據導向了這個決定，以及醫療面貌是什麼樣子。",
      "slidePage": 17
    },
    {
      "id": "p06s02u03",
      "startTime": 776.325,
      "endTime": 782.675,
      "textEn": "With proper governance, this data can directly support pricing, reserving, experience studies — and more.",
      "textZh": "在適當的治理下，這些資料可以直接支援定價、準備金、經驗研究——還有更多。",
      "slidePage": 17
    },
    {
      "id": "p06s02u04",
      "startTime": 782.675,
      "endTime": 789.95,
      "textEn": "In other words, AI doesn't just make claims operations faster — it expands the data available for actuarial analysis.",
      "textZh": "換句話說，AI 不只是讓理賠作業更快——它擴展了可供精算分析的資料。",
      "slidePage": 17
    },
    {
      "id": "p06s02u05",
      "startTime": 789.95,
      "endTime": 799.488,
      "textEn": "Under IFRS 17, actuaries can't afford to wait for year-end data runs — they need claims experience to feed back into assumptions in near real time.",
      "textZh": "在 IFRS 17 下，精算師等不起年底才跑資料——他們需要理賠經驗近乎即時地回饋到假設之中。",
      "slidePage": 17
    },
    {
      "id": "p06s02u07",
      "startTime": 799.488,
      "endTime": 808.263,
      "textEn": "And that opens a bigger question: can this richer foundation help us move beyond measuring what happened — to understanding why it happened?",
      "textZh": "而這開啟了一個更大的問題：這個更豐富的基礎，能否幫助我們從衡量「發生了什麼」，進一步去理解「為什麼發生」？",
      "slidePage": 17
    },
    {
      "id": "p06s03u01",
      "startTime": 808.263,
      "endTime": 815.95,
      "textEn": "Traditional experience analysis tells us what happened — how many claims, how much was paid, how that compares to assumptions.",
      "textZh": "傳統的經驗分析告訴我們發生了什麼——有多少件理賠、給付了多少、與假設相比如何。",
      "slidePage": 18
    },
    {
      "id": "p06s03u02",
      "startTime": 815.95,
      "endTime": 820.6,
      "textEn": "But the question actuaries increasingly need to answer is: why did it happen?",
      "textZh": "但精算師越來越需要回答的問題是：為什麼會這樣？",
      "slidePage": 18
    },
    {
      "id": "p06s03u03",
      "startTime": 820.6,
      "endTime": 831.613,
      "textEn": "Was it driven by an aging policyholder base, by changes in medical practice, or by shifts in claimant behavior? And are there early signals that assumptions need to be updated?",
      "textZh": "是高齡化保戶、醫療行為改變，還是理賠人行為的轉變？有沒有早期訊號顯示假設需要更新？",
      "slidePage": 18
    },
    {
      "id": "p06s03u04",
      "startTime": 831.613,
      "endTime": 837.663,
      "textEn": "Take the example on this slide: an 80-year-old male with an accidental death claim after a fall.",
      "textZh": "以這張投影片的案例為例：一位 80 歲男性因跌倒申請意外死亡理賠。",
      "slidePage": 18
    },
    {
      "id": "p06s03u05",
      "startTime": 837.663,
      "endTime": 857.088,
      "textEn": "Traditional analysis counts this as one accidental death. But cause-based analysis asks a sharper question: was there an underlying disease — like Parkinson's, dementia, or heart disease — that actually caused the fall? If so, is this really a pure accidental death, or should part of it be classified differently?",
      "textZh": "傳統分析只把它算作一件意外死亡。但以原因為基礎的分析會問得更精準：是不是有潛在疾病——像是帕金森氏症、失智症或心臟病——才是跌倒真正的原因？如果是的話，這件真的算純意外死亡嗎？還是應該被不同歸類？",
      "slidePage": 18
    },
    {
      "id": "p06s03u06",
      "startTime": 857.088,
      "endTime": 864.7,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean our experience study population is.",
      "textZh": "這個區分改變了我們估計發生率、分群風險，以及讓經驗研究群體更乾淨的方式。",
      "slidePage": 18
    },
    {
      "id": "p06s03u07",
      "startTime": 864.7,
      "endTime": 869.975,
      "textEn": "And when we understand the why, it becomes possible to act on it — not just report it.",
      "textZh": "而當我們理解了「為什麼」，就有機會採取行動——而不只是報告結果。",
      "slidePage": 18
    },
    {
      "id": "p06s04u01",
      "startTime": 869.975,
      "endTime": 881.625,
      "textEn": "Once we understand the why, those insights can inform pricing — because more granular claims data helps teams see exactly how different risk drivers affect claim frequency and severity.",
      "textZh": "一旦我們理解了「為什麼」，這些洞察就能指引定價——因為更細緻的理賠資料能幫助團隊看清不同風險驅動因子如何影響理賠頻率與嚴重度。",
      "slidePage": 19
    },
    {
      "id": "p06s04u02",
      "startTime": 881.625,
      "endTime": 889.513,
      "textEn": "Take lung cancer as an example. Looking at 100 cases together, traditional pricing just tells you costs are going up.",
      "textZh": "以肺癌為例。把 100 件案件放在一起看，傳統定價只告訴你成本在上升。",
      "slidePage": 19
    },
    {
      "id": "p06s04u03",
      "startTime": 889.513,
      "endTime": 901.363,
      "textEn": "But cause analysis breaks that down — 70 standard cases, 20 high-intensity ones, and 10 borderline cases where the treatment pattern or policy coverage needs a closer look.",
      "textZh": "但原因分析能拆開來看——70 件標準治療、20 件高強度、10 件在治療模式或保單適用上需要更仔細檢視的邊界案件。",
      "slidePage": 19
    },
    {
      "id": "p06s04u04",
      "startTime": 901.363,
      "endTime": 908.313,
      "textEn": "The difference matters — because without cause analysis, management can only see the bill, not what's driving it.",
      "textZh": "這個差別很重要——因為沒有原因分析，管理層只能看到帳單，而看不到背後的驅動因素。",
      "slidePage": 19
    },
    {
      "id": "p06s04u05",
      "startTime": 908.313,
      "endTime": 914.888,
      "textEn": "With it, they can actually do something — update assumptions, adjust underwriting, or refine product design.",
      "textZh": "有了它，他們才能真正採取行動——更新假設、調整核保，或精修商品設計。",
      "slidePage": 19
    },
    {
      "id": "p06s04u06",
      "startTime": 914.888,
      "endTime": 924.338,
      "textEn": "That's the whole point: AI turns claims documents into structured evidence, and structured evidence makes every pricing and risk decision more precise.",
      "textZh": "這就是重點所在：AI 把理賠文件轉化為結構化證據，結構化證據讓每個定價與風險決策更加精準。",
      "slidePage": 19
    },
    {
      "id": "p06s04u10",
      "startTime": 924.338,
      "endTime": 932.025,
      "textEn": "But none of these applications hold if the AI underneath is reasoning from an unstable or poorly governed knowledge base.",
      "textZh": "但如果 AI 底層的推理依賴不穩定或治理不善的知識庫，這些應用都將無法成立。",
      "slidePage": 19
    },
    {
      "id": "p06s04u11",
      "startTime": 932.025,
      "endTime": 937.213,
      "textEn": "That brings us to the foundation that sits underneath every decision CAELIA makes.",
      "textZh": "這帶我們來到 CAELIA 每個決策背後的知識基礎。",
      "slidePage": 19
    },
    {
      "id": "p07s01u01",
      "startTime": 937.213,
      "endTime": 942.438,
      "textEn": "All of that only works if the knowledge base underneath is solid and well-governed.",
      "textZh": "這一切只有在底層的知識庫紮實且治理完善的情況下才能成立。",
      "slidePage": 20
    },
    {
      "id": "p07s01u02",
      "startTime": 942.438,
      "endTime": 950.563,
      "textEn": "For CAELIA, that knowledge comes from three sources: claims policies, product terms and benefit rules, and a medical knowledge library.",
      "textZh": "對 CAELIA 而言，這個知識庫來自三個來源：理賠作業準則、商品條款與給付規則，以及醫療知識庫。",
      "slidePage": 20
    },
    {
      "id": "p07s01u03",
      "startTime": 950.563,
      "endTime": 956.525,
      "textEn": "If it's incomplete or out of date, the AI pulls the wrong information — and makes the wrong call.",
      "textZh": "如果知識庫不完整或已過時，AI 就會拿到錯誤的資訊——然後做出錯誤的判斷。",
      "slidePage": 20
    },
    {
      "id": "p07s01u04",
      "startTime": 956.525,
      "endTime": 963.95,
      "textEn": "We also need traceability — when AI uses a policy clause or a medical fact, we need to know exactly where it came from.",
      "textZh": "我們也需要可追溯性——當 AI 引用保單條款或醫療事實時，我們必須知道它從哪裡來。",
      "slidePage": 20
    },
    {
      "id": "p07s01u05",
      "startTime": 963.95,
      "endTime": 968.475,
      "textEn": "Because in a claims decision, \"the model thinks so\" just isn't good enough.",
      "textZh": "因為在理賠決策中，「模型認為如此」根本不夠。",
      "slidePage": 20
    },
    {
      "id": "p07s01u06",
      "startTime": 968.475,
      "endTime": 974.725,
      "textEn": "We need to show: here's the document, here's the fact, here's the policy term, and here's the reasoning.",
      "textZh": "我們需要能說明：這是文件、這是事實、這是保單條款、這是推理過程。",
      "slidePage": 20
    },
    {
      "id": "p07s01u07",
      "startTime": 974.725,
      "endTime": 980.838,
      "textEn": "That's what keeps the system controllable — AI reasons from approved knowledge, not from guesswork.",
      "textZh": "這就是讓系統保持可控的關鍵——AI 依照核准的知識推理，而不是自由發揮。",
      "slidePage": 20
    },
    {
      "id": "p07s01u08",
      "startTime": 980.838,
      "endTime": 990.913,
      "textEn": "That challenge is especially clear in policy interpretation — as medical practices evolve and new procedures emerge, existing benefit terms can't always keep up.",
      "textZh": "這個挑戰在保單解讀中最為明顯——隨著醫療行為演進、新手術不斷出現，現有的給付條款有時候跟不上。",
      "slidePage": 20
    },
    {
      "id": "p07s02u01",
      "startTime": 990.913,
      "endTime": 1002.825,
      "textEn": "That is why policy interpretation is one of the most critical tests of the system — a single claim decision can hinge on how you read a definition, a benefit condition, or an exclusion clause.",
      "textZh": "這正是為什麼保單解讀是整個系統最關鍵的考驗之一——一個理賠決策可能取決於你如何解讀一個定義、一個給付條件，或一個除外條款。",
      "slidePage": 21
    },
    {
      "id": "p07s02u02",
      "startTime": 1002.825,
      "endTime": 1011.413,
      "textEn": "CAELIA handles this through a structured four-step workflow — from understanding the claim all the way to producing a structured output.",
      "textZh": "CAELIA 透過一個結構化的四步驟流程來處理這件事——從理解理賠內容，一路到產出結構化輸出。",
      "slidePage": 21
    },
    {
      "id": "p07s02u03",
      "startTime": 1011.413,
      "endTime": 1022.925,
      "textEn": "Take hospitalization benefits as an example. The system pulls up the relevant policy clauses, compares them against the medical facts, and flags anything that's missing or conflicting.",
      "textZh": "以住院給付為例。系統調出相關保單條款，與醫療事實對比，並標示缺漏或衝突之處。",
      "slidePage": 21
    },
    {
      "id": "p07s02u04",
      "startTime": 1022.925,
      "endTime": 1030.675,
      "textEn": "The reviewer can then focus on judgment — does the evidence really satisfy the policy definition, and is anything still missing?",
      "textZh": "審查員可以專注於判斷——證據是否真的符合保單定義？還有什麼缺漏？",
      "slidePage": 21
    },
    {
      "id": "p07s02u05",
      "startTime": 1030.675,
      "endTime": 1039.688,
      "textEn": "The output clearly shows what's covered, what's excluded, and the full decision rationale — so the reviewer has everything they need in one place.",
      "textZh": "輸出清楚顯示承保了什麼、除外了什麼，以及完整的決策依據——讓審查員一次看到所有需要的資訊。",
      "slidePage": 21
    },
    {
      "id": "p07s02u06",
      "startTime": 1039.688,
      "endTime": 1043.538,
      "textEn": "So what does all of this actually deliver for the organization?",
      "textZh": "那麼，這一切實際上能為組織帶來什麼？",
      "slidePage": 21
    },
    {
      "id": "p07s03u01",
      "startTime": 1043.538,
      "endTime": 1049.038,
      "textEn": "The value shows up in four areas: operations, risk control, governance, and actuarial work.",
      "textZh": "這個價值體現在四個面向：營運、風險控管、治理，以及精算工作。",
      "slidePage": 22
    },
    {
      "id": "p07s03u02",
      "startTime": 1049.038,
      "endTime": 1059.025,
      "textEn": "For operations, CAELIA cuts review time and frees people up to focus on judgment — in our claims team, reviewers save roughly 30 percent of their time per case.",
      "textZh": "在營運方面，CAELIA 縮短審查時間，讓人可以專注在判斷上——在我們的理賠團隊中，審理人員每件案件約可節省 30% 的時間。",
      "slidePage": 22
    },
    {
      "id": "p07s03u03",
      "startTime": 1059.025,
      "endTime": 1063.413,
      "textEn": "For risk control, it catches inconsistencies and fraud signals earlier.",
      "textZh": "在風險控管方面，系統能更早發現不一致與詐欺訊號。",
      "slidePage": 22
    },
    {
      "id": "p07s03u04",
      "startTime": 1063.413,
      "endTime": 1071.75,
      "textEn": "For governance, traceable reasoning and human oversight make AI output explainable and auditable — essential in a regulated industry.",
      "textZh": "在治理方面，可追溯的推理與人工監督讓 AI 輸出可解釋、可稽核——在受監理的產業中不可或缺。",
      "slidePage": 22
    },
    {
      "id": "p07s03u05",
      "startTime": 1071.75,
      "endTime": 1082.9,
      "textEn": "And for actuarial work, claims data goes from unstructured records to something you can actually analyze — supporting experience studies, pricing, reserving, and product monitoring.",
      "textZh": "在精算工作方面，理賠資料從非結構化的記錄，變成真正可以分析的素材——支援經驗研究、定價、準備金與商品監控。",
      "slidePage": 22
    },
    {
      "id": "p07s03u06",
      "startTime": 1082.9,
      "endTime": 1090.075,
      "textEn": "And stepping back, that's the real lesson: AI in insurance creates value that goes far deeper than efficiency alone.",
      "textZh": "退一步來看，這就是真正的啟示：保險業的 AI 能創造的價值，遠比效率本身深遠得多。",
      "slidePage": 22
    },
    {
      "id": "p07s03u07",
      "startTime": 1090.075,
      "endTime": 1100.263,
      "textEn": "CAELIA is proof that claims AI can be more than a processing tool — it can be a foundation for better decisions, stronger governance, and richer actuarial insight.",
      "textZh": "CAELIA 證明了理賠 AI 可以不只是一個處理工具——它可以成為更好決策、更強治理與更豐富精算洞察的基礎。",
      "slidePage": 22
    },
    {
      "id": "p07s03u08",
      "startTime": 1100.263,
      "endTime": 1103.688,
      "textEn": "Thank you so much for your time — we'd love to take your questions.",
      "textZh": "非常感謝各位的時間——我們很樂意接受大家的提問。",
      "slidePage": 22
    }
  ]
};
