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
      "endTime": 3.388,
      "textEn": "Good afternoon, everyone. Thanks so much for being here.",
      "textZh": "大家早安，非常感謝各位的參與。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 3.388,
      "endTime": 10.188,
      "textEn": "My name is Li Yu Tsao, and joining me today is my colleague Yu Chung Wu from Cathay Life Insurance in Taiwan.",
      "textZh": "我叫 Li Yu Tsao，今天和我一起分享的是來自台灣國泰人壽的同事 Yu Chung Wu。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 10.188,
      "endTime": 18.962,
      "textEn": "Today we want to share something that sits right at the crossroads of claims operations, actuarial analytics, risk management, and responsible AI.",
      "textZh": "今天我們想分享一個位於理賠營運、精算分析、風險管理與負責任 AI 交會點的主題。",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 18.962,
      "endTime": 27.725,
      "textEn": "Our talk is called \"Beyond Efficiency: Leveraging Agentic AI for Claims Experience Analysis and Risk Resilience in Taiwan's Life Insurance.\"",
      "textZh": "我們的題目是「超越效率：在台灣壽險業運用 Agentic AI 進行理賠經驗分析與風險韌性管理」。",
      "slidePage": 1
    },
    {
      "id": "p01s01u05",
      "startTime": 27.725,
      "endTime": 37.85,
      "textEn": "When most people first hear about AI in claims, they immediately think about efficiency: faster processing, less manual work, and shorter waiting time for customers.",
      "textZh": "當許多人第一次聽到理賠 AI，第一個想到的通常是效率。我們能不能更快處理理賠？能不能減少人工工作？",
      "slidePage": 1
    },
    {
      "id": "p01s01u06",
      "startTime": 37.85,
      "endTime": 45.075,
      "textEn": "Those questions matter. But today we want to go one step further and ask what claims AI can teach the organization.",
      "textZh": "能不能縮短客戶等待時間？這些問題都很重要。但今天我們想再往前一步。",
      "slidePage": 1
    },
    {
      "id": "p01s01u07",
      "startTime": 45.075,
      "endTime": 49.762,
      "textEn": "We want to talk about how claims AI can be more than just an automation tool.",
      "textZh": "我們想討論理賠 AI 如何不只是自動化工具。它也可以成為結構化的精算洞察來源。",
      "slidePage": 1
    },
    {
      "id": "p01s01u08",
      "startTime": 49.762,
      "endTime": 53.262,
      "textEn": "It can actually become a real source of actuarial insight.",
      "textZh": "它實際上可以成為精算洞察的重要來源。",
      "slidePage": 1
    },
    {
      "id": "p01s01u09",
      "startTime": 53.262,
      "endTime": 62.65,
      "textEn": "It can help insurers spot emerging health trends, sharpen experience analysis, strengthen fraud monitoring, and build a more resilient operation overall.",
      "textZh": "它可以協助保險公司理解新興疾病經驗、改善經驗分析、強化詐欺監控，並建立更具韌性的營運模式。",
      "slidePage": 1
    },
    {
      "id": "p01s01u10",
      "startTime": 62.65,
      "endTime": 76.687,
      "textEn": "Our core message is pretty simple: if claims data can go from messy, unstructured records to something explainable, governed, and ready for actuarial use, then claims operations can become a true strategic asset for the whole company.",
      "textZh": "我們的核心訊息很簡單：如果理賠資料能從非結構化的營運紀錄，轉換為可解釋、受治理、可供精算使用的資料，那麼理賠營運就能成為整家公司的策略性資產。",
      "slidePage": 1
    },
    {
      "id": "p01s01u11",
      "startTime": 76.687,
      "endTime": 87.9,
      "textEn": "As you listen today, I'd invite you to keep one question in mind: in your own organization, are claims records mainly treated as evidence for payment — or also as evidence for learning?",
      "textZh": "今天聆聽時，我也想邀請各位保留一個問題：在你的組織中，理賠紀錄主要只是付款證據，還是也是學習的證據？",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 87.9,
      "endTime": 90.075,
      "textEn": "Let me briefly introduce the two of us.",
      "textZh": "讓我簡單介紹兩位講者。",
      "slidePage": 4
    },
    {
      "id": "p01s02u02",
      "startTime": 90.075,
      "endTime": 102.65,
      "textEn": "My work focuses on applying AI and machine learning to insurance operations — especially natural language processing and large language models, which we call LLMs, for claims and medical documentation.",
      "textZh": "我的工作聚焦於將 AI 與機器學習應用在保險營運，特別是自然語言處理與大型語言模型在理賠和醫療文件上的應用。",
      "slidePage": 4
    },
    {
      "id": "p01s02u03",
      "startTime": 102.65,
      "endTime": 107.912,
      "textEn": "And I'm Yu Chung Wu. My work focuses on claims operations and AI system architecture.",
      "textZh": "我叫 Yu Chung Wu。我的工作聚焦在理賠營運與 AI 系統架構。",
      "slidePage": 4
    },
    {
      "id": "p01s02u04",
      "startTime": 107.912,
      "endTime": 118.8,
      "textEn": "On this project, we worked closely with claims professionals, data scientists, IT teams, and governance stakeholders to design an AI-assisted claims pre-adjudication framework.",
      "textZh": "在這個專案中，我們與理賠專家、資料科學家、IT 團隊以及治理相關單位密切合作，設計 AI 輔助的理賠預審框架。",
      "slidePage": 4
    },
    {
      "id": "p01s02u05",
      "startTime": 118.8,
      "endTime": 126.7,
      "textEn": "Together, we'll walk you through three questions. First, why is Taiwan's life insurance claims environment getting more complex?",
      "textZh": "今天我們會依序回答三個問題。第一，為什麼台灣壽險理賠環境正變得越來越複雜？",
      "slidePage": 4
    },
    {
      "id": "p01s02u06",
      "startTime": 126.7,
      "endTime": 133.938,
      "textEn": "Second, how did we design CAELIA — the Cathay AI Engine for Life Insurance Adjudication — as an agentic AI framework?",
      "textZh": "第二，我們如何將 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication，設計成一個 agentic AI 框架？",
      "slidePage": 4
    },
    {
      "id": "p01s02u07",
      "startTime": 133.938,
      "endTime": 139.963,
      "textEn": "Agentic AI, by the way, is AI that can take initiative and carry out multi-step tasks on its own.",
      "textZh": "順帶一提，Agentic AI 是指能夠主動採取行動、自主執行多步驟任務的 AI。",
      "slidePage": 4
    },
    {
      "id": "p01s02u08",
      "startTime": 139.963,
      "endTime": 150.963,
      "textEn": "And third, how can this kind of framework create value beyond just operational efficiency — especially for experience studies, pricing, reserving, risk monitoring, and governance?",
      "textZh": "第三，這類框架如何創造超越營運效率的價值，特別是在經驗研究、定價、準備金、風險監控與治理方面？",
      "slidePage": 4
    },
    {
      "id": "p01s02u09",
      "startTime": 150.963,
      "endTime": 157.425,
      "textEn": "With that framing in place, let's start with the pressures that made this work necessary in the first place.",
      "textZh": "有了這個架構，我們先從讓這項工作變得必要的壓力談起。",
      "slidePage": 4
    },
    {
      "id": "p01s03u01",
      "startTime": 157.425,
      "endTime": 159.75,
      "textEn": "Let's start with the business context.",
      "textZh": "讓我們先從商業背景開始。",
      "slidePage": 5
    },
    {
      "id": "p01s03u02",
      "startTime": 159.75,
      "endTime": 171.775,
      "textEn": "Claims operations in Taiwan are under structural pressure from three directions: rising external pressure, a growing internal workload, and emerging constraints around talent and organization.",
      "textZh": "台灣的理賠營運正面臨三個方向的結構性壓力：外部壓力上升、內部作業負擔擴大，以及組織與人才限制浮現。",
      "slidePage": 5
    },
    {
      "id": "p01s03u03",
      "startTime": 171.775,
      "endTime": 174.662,
      "textEn": "The first pressure is demographic and medical.",
      "textZh": "第一個壓力來自人口與醫療。",
      "slidePage": 5
    },
    {
      "id": "p01s03u04",
      "startTime": 174.662,
      "endTime": 178.062,
      "textEn": "Taiwan is entering what's called a super-aged society.",
      "textZh": "台灣正進入超高齡社會，壽險公司看到越來越多與慢性病、失智、長期照護、住院與術後恢復相關的理賠。",
      "slidePage": 5
    },
    {
      "id": "p01s03u05",
      "startTime": 178.062,
      "endTime": 186.812,
      "textEn": "Life insurers are seeing more and more claims tied to chronic disease, dementia, long-term care, hospitalization, and post-treatment recovery.",
      "textZh": "壽險業者正面臨越來越多與慢性病、失智症、長期照護、住院及術後恢復相關的理賠案件。",
      "slidePage": 5
    },
    {
      "id": "p01s03u06",
      "startTime": 186.812,
      "endTime": 192.825,
      "textEn": "These cases often involve complex medical records, multiple diagnoses, and long claims histories.",
      "textZh": "這些案件往往涉及複雜的醫療紀錄、多重診斷與較長的理賠歷史。同時，醫療成本壓力也讓更多財務責任轉向商業保險。",
      "slidePage": 5
    },
    {
      "id": "p01s03u07",
      "startTime": 192.825,
      "endTime": 199.362,
      "textEn": "At the same time, rising healthcare costs are shifting more financial responsibility onto private insurance.",
      "textZh": "與此同時，持續攀升的醫療費用正將更多財務責任轉移到私人保險。",
      "slidePage": 5
    },
    {
      "id": "p01s03u08",
      "startTime": 199.362,
      "endTime": 205.75,
      "textEn": "People are increasingly relying on life and health insurance to cover medical and long-term care needs.",
      "textZh": "客戶越來越依賴壽險與健康險商品來支應醫療與長照需求。這表示理賠量增加，理賠複雜度也增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u09",
      "startTime": 205.75,
      "endTime": 211.762,
      "textEn": "On the slide, you can see the scale of that pressure: claim volume has grown by 56 percent.",
      "textZh": "從這張投影片可以看到這股壓力的規模：理賠量已成長了 56%。",
      "slidePage": 5
    },
    {
      "id": "p01s03u10",
      "startTime": 211.762,
      "endTime": 213.962,
      "textEn": "The second pressure is operational.",
      "textZh": "第二個壓力來自作業面。高頻率、低嚴重度的理賠正在增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u11",
      "startTime": 213.962,
      "endTime": 222.762,
      "textEn": "At Cathay Life, we are talking about more than 1.6 million claims a year, with more high-frequency, low-severity claims entering the workflow.",
      "textZh": "以國泰人壽來說，每年的理賠案件超過 160 萬件，其中高頻次、低嚴重性的案件比例也持續增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u12",
      "startTime": 222.762,
      "endTime": 225.512,
      "textEn": "Individually, they might not be large amounts.",
      "textZh": "單件金額可能不高，但合在一起會造成營運模式碎片化，因為每件仍需要文件審查、保單解釋、資料輸入與品質控管。",
      "slidePage": 5
    },
    {
      "id": "p01s03u13",
      "startTime": 225.512,
      "endTime": 235.1,
      "textEn": "But together they create real fragmentation, because every single case still needs document review, policy interpretation, data entry, and quality control.",
      "textZh": "但這些問題合在一起卻造成嚴重的流程碎片化，因為每一件理賠仍需要文件審核、保單解讀、資料輸入與品質控管。",
      "slidePage": 5
    },
    {
      "id": "p01s03u14",
      "startTime": 235.1,
      "endTime": 246.675,
      "textEn": "The third pressure is talent. Claims adjudication requires experienced judgment across medical terminology, policy terms, fraud patterns, customer situations, and regulatory expectations.",
      "textZh": "第三個壓力來自人才。理賠核定需要跨越醫療術語、保單條款、詐欺型態、客戶情境與監理期待的經驗判斷。",
      "slidePage": 5
    },
    {
      "id": "p01s03u15",
      "startTime": 246.675,
      "endTime": 255.187,
      "textEn": "But experienced claims and risk professionals are hard to scale up quickly. So the challenge isn't just \"how do we process more claims?\"",
      "textZh": "但資深理賠與風險專業人才很難快速擴張。因此挑戰不只是「我們如何處理更多理賠？",
      "slidePage": 5
    },
    {
      "id": "p01s03u16",
      "startTime": 255.187,
      "endTime": 265.287,
      "textEn": "The deeper question is: \"When both complexity and volume are going up at the same time, how do we keep decision quality, risk control, and actuarial insight strong?\"",
      "textZh": "」更深層的挑戰是：「當複雜度與數量同時增加時，我們如何維持決策品質、風險控管與精算洞察？",
      "slidePage": 5
    },
    {
      "id": "p01s03u17",
      "startTime": 265.287,
      "endTime": 268.062,
      "textEn": "That's the starting point for our AI journey.",
      "textZh": "」這就是我們 AI 旅程的起點。",
      "slidePage": 5
    },
    {
      "id": "p01s03u18",
      "startTime": 268.062,
      "endTime": 277.762,
      "textEn": "Before we get into the technology, it's worth stepping back and asking: how did claims adjudication get to this point, and why aren't the old tools enough anymore?",
      "textZh": "所以在介紹技術之前，先退一步問：理賠核定是如何演進到今天的？為什麼過去有效的工具已經不夠？",
      "slidePage": 5
    },
    {
      "id": "p02s01u01",
      "startTime": 277.762,
      "endTime": 286.612,
      "textEn": "Claims processing has always evolved alongside the available technology. But each stage solved one problem while leaving another one behind.",
      "textZh": "理賠處理一直隨可用技術一起演進。但每一個階段解決一個問題，也留下另一個問題。",
      "slidePage": 6
    },
    {
      "id": "p02s01u02",
      "startTime": 286.612,
      "endTime": 295.712,
      "textEn": "In the IBM AS/400 era, claims processing was mostly data-entry driven. The main goal was to record claims accurately and get payments out.",
      "textZh": "在 IBM AS400 時代，理賠處理主要由資料輸入驅動。核心目標是準確記錄理賠並完成付款處理。",
      "slidePage": 6
    },
    {
      "id": "p02s01u03",
      "startTime": 295.712,
      "endTime": 304.237,
      "textEn": "In the core systems era, insurers digitized their workflows and introduced rule-based engines, which made standard claims more consistent.",
      "textZh": "在核心系統時代，保險公司將流程數位化並導入規則引擎，使標準案件更一致。",
      "slidePage": 6
    },
    {
      "id": "p02s01u04",
      "startTime": 304.237,
      "endTime": 314.1,
      "textEn": "In the data modeling era, machine learning models supported risk tagging, anomaly detection, and triage. But many of those models were still limited to scoring.",
      "textZh": "在資料模型時代，機器學習模型支援風險標籤、異常偵測與分流。但許多模型仍然只停留在評分。",
      "slidePage": 6
    },
    {
      "id": "p02s01u05",
      "startTime": 314.1,
      "endTime": 321.875,
      "textEn": "They could identify higher-risk cases, but they didn't always explain the evidence in a way that reviewers could immediately act on.",
      "textZh": "它們可以找出較高風險案件，卻不一定能用審查員可以立即使用的方式解釋證據。",
      "slidePage": 6
    },
    {
      "id": "p02s01u06",
      "startTime": 321.875,
      "endTime": 325.087,
      "textEn": "Now we're entering what we call the agentic AI era.",
      "textZh": "現在我們進入所謂 agentic AI 時代。AI 不再只是等待使用者提問的被動工具。",
      "slidePage": 6
    },
    {
      "id": "p02s01u07",
      "startTime": 325.087,
      "endTime": 329.887,
      "textEn": "AI is no longer just a passive tool waiting for someone to ask it a question.",
      "textZh": "AI 不再只是被動等待提問的工具。",
      "slidePage": 6
    },
    {
      "id": "p02s01u08",
      "startTime": 329.887,
      "endTime": 342.625,
      "textEn": "It can actively take part in parts of the adjudication process — reading documents, pulling out evidence, comparing information against policy terms, spotting inconsistencies, and generating recommendations.",
      "textZh": "它可以主動參與部分核定流程：閱讀文件、擷取證據、比對保單條款、辨識不一致並產出建議。",
      "slidePage": 6
    },
    {
      "id": "p02s01u09",
      "startTime": 342.625,
      "endTime": 346.1,
      "textEn": "But this shift also raises an important governance question.",
      "textZh": "但這個轉變也帶來重要的治理問題。如果 AI 變得更主動，我們如何讓它可解釋、可控、可稽核，並且符合專業判斷？",
      "slidePage": 6
    },
    {
      "id": "p02s01u10",
      "startTime": 346.1,
      "endTime": 353.837,
      "textEn": "If AI is becoming more active, how do we keep it explainable, controllable, auditable, and aligned with professional judgment?",
      "textZh": "如果 AI 變得更加主動，我們如何確保它具備可解釋性、可控性、可稽核性，並與專業判斷保持一致？",
      "slidePage": 6
    },
    {
      "id": "p02s01u11",
      "startTime": 353.837,
      "endTime": 357.162,
      "textEn": "Our answer isn't full automation without any oversight.",
      "textZh": "我們的答案不是沒有監督的全自動化。我們的答案是 human-in-the-loop 的 agentic AI：AI 執行結構化分析並準備證據，而人類審查員保留最終決策權。",
      "slidePage": 6
    },
    {
      "id": "p02s01u12",
      "startTime": 357.162,
      "endTime": 366.15,
      "textEn": "It's human-in-the-loop agentic AI: AI does the structured analysis and prepares the evidence, while human reviewers keep the final decision authority.",
      "textZh": "這就是「人在迴圈中」的 Agentic AI：AI 負責結構化分析並整理證據，而最終決策權仍保留在人類審核員手中。",
      "slidePage": 6
    },
    {
      "id": "p02s01u13",
      "startTime": 366.15,
      "endTime": 370.012,
      "textEn": "To see why that matters, let's look at the actual claims journey.",
      "textZh": "要看出這為何重要，接下來看實際理賠旅程：複雜度在哪裡進入流程？有價值的資訊又從哪裡開始消失？",
      "slidePage": 6
    },
    {
      "id": "p02s01u14",
      "startTime": 370.012,
      "endTime": 376.113,
      "textEn": "Where does complexity enter the workflow, and where does valuable information start to disappear?",
      "textZh": "流程中哪個環節最容易出現複雜情況？哪個環節的有價值資訊開始流失？",
      "slidePage": 6
    },
    {
      "id": "p02s02u01",
      "startTime": 376.113,
      "endTime": 385.175,
      "textEn": "Before we explain the new framework, let's look at the traditional claims review process. In a typical flow, a customer submits their claim documents.",
      "textZh": "接著看實際理賠流程。",
      "slidePage": 7
    },
    {
      "id": "p02s02u02",
      "startTime": 385.175,
      "endTime": 394.075,
      "textEn": "The slide breaks this into six steps: intake, registration and case creation, case assignment, review, decision, and finally closure and archiving.",
      "textZh": "這張投影片將流程分成六個步驟：受件、建立案件、分案、審查、決策，以及最後的結案與歸檔。",
      "slidePage": 7
    },
    {
      "id": "p02s02u03",
      "startTime": 394.075,
      "endTime": 400.087,
      "textEn": "That sounds pretty straightforward — but in practice, many steps require a lot of interpretation.",
      "textZh": "這聽起來很直線，但實務上每個步驟都需要大量解讀。",
      "slidePage": 7
    },
    {
      "id": "p02s02u04",
      "startTime": 400.087,
      "endTime": 408.9,
      "textEn": "A medical certificate might have free-text descriptions, abbreviations, different hospital formats, or Traditional Chinese medical terminology.",
      "textZh": "診斷書可能包含自由文字描述、縮寫、不同醫院的格式，或是繁體中文醫學術語。",
      "slidePage": 7
    },
    {
      "id": "p02s02u05",
      "startTime": 408.9,
      "endTime": 413.2,
      "textEn": "A diagnosis might need to be mapped to an internal disease category.",
      "textZh": "診斷結果可能需要對應到內部疾病分類。",
      "slidePage": 7
    },
    {
      "id": "p02s02u06",
      "startTime": 413.2,
      "endTime": 421.25,
      "textEn": "A procedure or hospitalization period might need to be checked against policy definitions, exclusions, deductibles, or benefit limits.",
      "textZh": "某項醫療程序或住院期間，可能需要對照保單定義、除外條款、自付額或給付上限進行核對。",
      "slidePage": 7
    },
    {
      "id": "p02s02u07",
      "startTime": 421.25,
      "endTime": 427.312,
      "textEn": "And here's the key challenge: most of the most valuable information isn't born in a structured format.",
      "textZh": "而這裡有個關鍵挑戰：最有價值的資訊，大多不是以結構化格式生成的。",
      "slidePage": 7
    },
    {
      "id": "p02s02u08",
      "startTime": 427.312,
      "endTime": 436.75,
      "textEn": "If we only capture the final outcome — approved or declined, or the final payment amount — we lose a huge amount of explanatory information along the way.",
      "textZh": "如果我們只記錄最終結果——核准或拒絕、或最終給付金額——就會在過程中失去大量解釋性資訊。",
      "slidePage": 7
    },
    {
      "id": "p02s02u09",
      "startTime": 436.75,
      "endTime": 442.363,
      "textEn": "For operations, that means more manual work. For actuaries, it means weaker data granularity.",
      "textZh": "對作業面來說，這意味著更多人工；對精算師來說，這意味著資料粒度較差。",
      "slidePage": 7
    },
    {
      "id": "p02s02u10",
      "startTime": 442.363,
      "endTime": 451.875,
      "textEn": "We might know the claim result, but we may not fully know the cause, the medical pathway, the detailed risk factors, or what evidence was behind the decision.",
      "textZh": "我們可能知道理賠結果，卻未必完全了解原因、醫療路徑、詳細風險因子，或決策背後的依據。",
      "slidePage": 7
    },
    {
      "id": "p02s02u11",
      "startTime": 451.875,
      "endTime": 460.2,
      "textEn": "That's why we believe the claims process needs to be redesigned — not just as a payment workflow, but as a data transformation workflow too.",
      "textZh": "這就是為什麼我們認為理賠流程需要重新設計——不只是付款流程，也是資料轉換流程。",
      "slidePage": 7
    },
    {
      "id": "p02s02u12",
      "startTime": 460.2,
      "endTime": 471.775,
      "textEn": "If we look at it through that lens, the first question becomes: how early can we capture useful information, and how much structure can we create before the case even reaches a human reviewer?",
      "textZh": "從這個角度來看，第一個問題是：我們能多早擷取有用的資訊？在案件到達人工審查員之前，能建立多少結構？",
      "slidePage": 7
    },
    {
      "id": "p02s03u01",
      "startTime": 471.775,
      "endTime": 474.262,
      "textEn": "The first step is digital claims submission.",
      "textZh": "數位申請是第一步。",
      "slidePage": 8
    },
    {
      "id": "p02s03u02",
      "startTime": 474.262,
      "endTime": 484.45,
      "textEn": "As the app screens show, customers can start a claims application, upload documents, check claims results, and review application details directly through the mobile app.",
      "textZh": "如畫面所示，客戶可以直接透過 App 發起理賠申請、上傳文件、查詢理賠結果，並查看申請詳情。",
      "slidePage": 8
    },
    {
      "id": "p02s03u03",
      "startTime": 484.45,
      "endTime": 492.325,
      "textEn": "This is great for customer convenience and it shortens turnaround time. But digital submission alone doesn't solve the whole problem.",
      "textZh": "客戶可透過手機提交理賠，減少紙本並縮短前端流程。",
      "slidePage": 8
    },
    {
      "id": "p02s03u04",
      "startTime": 492.325,
      "endTime": 497.925,
      "textEn": "A claim might arrive digitally, but the supporting medical documents are still unstructured.",
      "textZh": "但數位化本身不等於資料已經可分析。",
      "slidePage": 8
    },
    {
      "id": "p02s03u05",
      "startTime": 497.925,
      "endTime": 508.762,
      "textEn": "They might be scanned images, PDFs, hospital certificates, receipts, diagnosis documents, or discharge summaries. So digitalization is necessary — but it's not enough on its own.",
      "textZh": "文件可能仍是掃描影像、PDF、診斷證明、收據或出院摘要。",
      "slidePage": 8
    },
    {
      "id": "p02s03u06",
      "startTime": 508.762,
      "endTime": 513.938,
      "textEn": "It gets us the documents faster, but it doesn't automatically create analytical value.",
      "textZh": "它讓我們更快拿到文件，但不會自動產生分析價值。",
      "slidePage": 8
    },
    {
      "id": "p02s03u07",
      "startTime": 513.938,
      "endTime": 521.0,
      "textEn": "To create that analytical value, we need to convert those documents into structured, reliable, and explainable data.",
      "textZh": "因此我們還需要把文件轉成結構化、可靠、可解釋的資料。",
      "slidePage": 8
    },
    {
      "id": "p02s03u08",
      "startTime": 521.0,
      "endTime": 525.7,
      "textEn": "That's where OCR, large language models, and agentic AI start to play a role.",
      "textZh": "OCR、大型語言模型與 agentic AI 就是在這裡開始發揮作用。",
      "slidePage": 8
    },
    {
      "id": "p02s03u09",
      "startTime": 525.7,
      "endTime": 532.15,
      "textEn": "OCR converts images to machine-readable text; LLMs understand the meaning of what's in those documents.",
      "textZh": "OCR 將影像轉換為機器可讀的文字；LLM 則理解這些文件內容的意涵。",
      "slidePage": 8
    },
    {
      "id": "p02s03u10",
      "startTime": 532.15,
      "endTime": 542.413,
      "textEn": "But once documents arrive digitally, we still face a second question: can AI understand what's inside those documents well enough to support the decisions that come next?",
      "textZh": "但當文件以數位方式送達後，我們仍面臨第二個問題：AI 能否充分理解文件內容，以支援後續的決策？",
      "slidePage": 8
    },
    {
      "id": "p03s01u01",
      "startTime": 542.413,
      "endTime": 551.375,
      "textEn": "After submission, the next step is case registration. Traditionally, staff would review documents and manually type key fields into the claims system.",
      "textZh": "提交後的下一步是建立案件。傳統上，人員會審閱文件並手動將關鍵欄位輸入理賠系統。",
      "slidePage": 9
    },
    {
      "id": "p03s01u02",
      "startTime": 551.375,
      "endTime": 559.863,
      "textEn": "AI-driven structured data extraction changes that step. In our framework, OCR first converts document images into machine-readable text.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 9
    },
    {
      "id": "p03s01u03",
      "startTime": 559.863,
      "endTime": 569.313,
      "textEn": "Then LLM-based extraction identifies fields like diagnosis, treatment dates, hospital name, surgery information, claim amount, and other relevant details.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u04",
      "startTime": 569.313,
      "endTime": 573.15,
      "textEn": "But we don't treat extraction as a simple copy-and-paste task.",
      "textZh": "但我們不把擷取視為單純的複製貼上工作。",
      "slidePage": 9
    },
    {
      "id": "p03s01u05",
      "startTime": 573.15,
      "endTime": 583.8,
      "textEn": "The AI needs to distinguish past medical history from the current claim event, a suspected diagnosis from a confirmed one, and one hospital's document style from another.",
      "textZh": "AI 必須區分既往病史與本次理賠事故、疑似診斷與確診，以及不同醫院的文件風格差異。",
      "slidePage": 9
    },
    {
      "id": "p03s01u06",
      "startTime": 583.8,
      "endTime": 588.513,
      "textEn": "For Traditional Chinese medical documentation, this is especially important.",
      "textZh": "但擷取不是單純複製貼上，AI 必須理解脈絡，例如區分既往病史與本次事故、疑似診斷與確診，以及不同醫院的文件風格。",
      "slidePage": 9
    },
    {
      "id": "p03s01u07",
      "startTime": 588.513,
      "endTime": 596.475,
      "textEn": "The language is very domain-specific, and the same clinical concept can show up in completely different wording across different hospitals.",
      "textZh": "這些語言高度專業，同一個臨床概念在不同醫院可能以完全不同的措辭呈現。",
      "slidePage": 9
    },
    {
      "id": "p03s01u08",
      "startTime": 596.475,
      "endTime": 604.975,
      "textEn": "By structuring this information early, we create a much better foundation for downstream triage, review, risk analysis, and actuarial use.",
      "textZh": "透過早期結構化資訊，我們為後續的分流、審查、風險分析與精算使用奠定更好的基礎。",
      "slidePage": 9
    },
    {
      "id": "p03s01u09",
      "startTime": 604.975,
      "endTime": 614.85,
      "textEn": "Once that foundation is in place, the workflow can move from simple case creation to something more decision-oriented: which cases need more attention, and why?",
      "textZh": "有了這個基礎，流程就能從單純的建立案件，轉向更以決策為導向的模式：哪些案件需要更多關注，以及為什麼？",
      "slidePage": 9
    },
    {
      "id": "p03s02u01",
      "startTime": 614.85,
      "endTime": 622.875,
      "textEn": "Once case data is structured, we can move into claims triage. Machine learning models can assess claim risk and help route cases.",
      "textZh": "有了結構化資料後，就能進入理賠分流。",
      "slidePage": 10
    },
    {
      "id": "p03s02u02",
      "startTime": 622.875,
      "endTime": 632.95,
      "textEn": "Low-risk, straightforward cases can go through a more streamlined workflow, while complex or suspicious cases get sent to experienced reviewers for a deeper look.",
      "textZh": "低風險、單純的案件可走較簡化的流程，而複雜或可疑的案件則轉給資深審查員進行深入審核。",
      "slidePage": 10
    },
    {
      "id": "p03s02u03",
      "startTime": 632.95,
      "endTime": 642.488,
      "textEn": "This kind of triage helps operations allocate human expertise more effectively. But there's an important limitation: a risk score by itself isn't enough.",
      "textZh": "這種分流有助於更有效地分配人力專業。但有一個重要限制：風險分數本身是不夠的。",
      "slidePage": 10
    },
    {
      "id": "p03s02u04",
      "startTime": 642.488,
      "endTime": 649.513,
      "textEn": "If a model says a case has a risk score of 82 out of 100, the claims reviewer still needs to know why.",
      "textZh": "但風險分數本身不夠。",
      "slidePage": 10
    },
    {
      "id": "p03s02u05",
      "startTime": 649.513,
      "endTime": 659.663,
      "textEn": "Is the risk coming from a diagnosis inconsistency? Repeated claims? A provider pattern? Unusual timing? Policy duration? Medical history? Or a document inconsistency?",
      "textZh": "風險來自診斷不一致？重複理賠？醫療院所模式？時間異常？保單期間？病史？還是文件不一致？",
      "slidePage": 10
    },
    {
      "id": "p03s02u06",
      "startTime": 659.663,
      "endTime": 668.0,
      "textEn": "This is where traditional machine learning and agentic AI can work together. Machine learning is great at spotting patterns at scale.",
      "textZh": "這正是傳統機器學習與 agentic AI 可以互補的地方。機器學習擅長大規模發現模式。",
      "slidePage": 10
    },
    {
      "id": "p03s02u07",
      "startTime": 668.0,
      "endTime": 673.538,
      "textEn": "Agentic AI can gather the evidence, organize the reasoning, and lay out the basis for review.",
      "textZh": "重複理賠？醫療院所模式？保單期間？病史？",
      "slidePage": 10
    },
    {
      "id": "p03s02u08",
      "startTime": 673.538,
      "endTime": 677.7,
      "textEn": "The goal isn't to hand a reviewer a black-box score and walk away.",
      "textZh": "我們的目標不是給審核員一個黑箱分數就了事。",
      "slidePage": 10
    },
    {
      "id": "p03s02u09",
      "startTime": 677.7,
      "endTime": 685.825,
      "textEn": "The goal is to help them make faster, better-informed, more consistent decisions. This leads naturally to the next design question.",
      "textZh": "目標是幫助他們做出更快、更有依據、更一致的決策。這自然帶出了下一個設計問題。",
      "slidePage": 10
    },
    {
      "id": "p03s02u10",
      "startTime": 685.825,
      "endTime": 695.013,
      "textEn": "If a case is routed to a human reviewer, what should that review environment look like — so that human expertise is used where it actually matters most?",
      "textZh": "如果案件被路由到人工審查員，審查環境應該如何設計——才能讓人類專業在最需要的地方發揮作用？",
      "slidePage": 10
    },
    {
      "id": "p03s03u01",
      "startTime": 695.013,
      "endTime": 699.675,
      "textEn": "For cases that need human review, we built a unified smart claims platform.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 11
    },
    {
      "id": "p03s03u02",
      "startTime": 699.675,
      "endTime": 711.325,
      "textEn": "The idea is to bring multi-source data into one review workbench, so reviewers don't have to jump between systems, documents, policy references, customer records, risk tags, and decision notes.",
      "textZh": "核心概念是將多來源資料整合到單一審查工作台，讓審查員不必在系統、文件、保單條款、客戶紀錄、風險標籤與決策備註之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u03",
      "startTime": 711.325,
      "endTime": 719.013,
      "textEn": "Everything is in one place: claims information, risk detection results, quick access to related documents, and decision support.",
      "textZh": "所有資訊都在同一處：理賠資訊、風險偵測結果、相關文件快速存取，以及決策支援。",
      "slidePage": 11
    },
    {
      "id": "p03s03u04",
      "startTime": 719.013,
      "endTime": 726.438,
      "textEn": "This matters because operational efficiency isn't only about automating tasks. It's also about reducing cognitive load.",
      "textZh": "這很重要，因為作業效率不只是自動化任務，也關乎降低審查員的認知負擔。",
      "slidePage": 11
    },
    {
      "id": "p03s03u05",
      "startTime": 726.438,
      "endTime": 733.737,
      "textEn": "When information is scattered across systems, reviewers spend a lot of time just searching, comparing, and reconciling.",
      "textZh": "當資訊分散在各系統中，審查員會花大量時間在搜尋、比對與核對上。",
      "slidePage": 11
    },
    {
      "id": "p03s03u06",
      "startTime": 733.737,
      "endTime": 738.575,
      "textEn": "When it's organized, they can spend more time on actual professional judgment.",
      "textZh": "當資訊被整理好之後，他們就能把更多時間放在真正的專業判斷上。",
      "slidePage": 11
    },
    {
      "id": "p03s03u07",
      "startTime": 738.575,
      "endTime": 745.587,
      "textEn": "In other words, the system shouldn't just process data. It should create a better decision environment for experts.",
      "textZh": "換句話說，系統不只是處理資料，它應該為專家創造更好的決策環境。",
      "slidePage": 11
    },
    {
      "id": "p03s03u08",
      "startTime": 745.587,
      "endTime": 754.275,
      "textEn": "Once the reviewer is in that environment, AI support has to appear at the right moment. The question isn't just \"Can AI analyze this case?\"",
      "textZh": "一旦審查員進入這個環境，AI 支援必須在對的時機出現。問題不只是 AI 能自動化多少——",
      "slidePage": 11
    },
    {
      "id": "p03s03u09",
      "startTime": 754.275,
      "endTime": 758.45,
      "textEn": "It's \"Can AI help the reviewer think more clearly about this case?\"",
      "textZh": "而是什麼樣的 AI 協助能真正提升專業判斷的品質？",
      "slidePage": 11
    },
    {
      "id": "p04s01u01",
      "startTime": 758.45,
      "endTime": 764.262,
      "textEn": "Inside the review workbench, we embed several AI-assisted features. The first is risk tagging.",
      "textZh": "在審查工作台內，我們嵌入了多項 AI 輔助功能。第一是風險標籤。",
      "slidePage": 12
    },
    {
      "id": "p04s01u02",
      "startTime": 764.262,
      "endTime": 772.637,
      "textEn": "AI highlights risk indicators and helps reviewers understand which parts of the case deserve attention. The second is decision support.",
      "textZh": "AI 標示風險指標，幫助審查員了解案件中哪些部分需要特別關注。第二是決策支援。",
      "slidePage": 12
    },
    {
      "id": "p04s01u03",
      "startTime": 772.637,
      "endTime": 782.962,
      "textEn": "AI summarizes the relevant medical facts, policy terms, and claim conditions, then organizes them into a review-ready format. The third is relationship graph analysis.",
      "textZh": "AI 彙整相關醫療事實、保單條款與理賠條件，整理成審查就緒的格式。第三是關係圖分析。",
      "slidePage": 12
    },
    {
      "id": "p04s01u04",
      "startTime": 782.962,
      "endTime": 793.125,
      "textEn": "This helps reviewers see connections among claimants, providers, agents, prior claims, or other related parties — when that kind of analysis is relevant and permitted.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u05",
      "startTime": 793.125,
      "endTime": 800.15,
      "textEn": "These features aren't separate from the claims workflow. They're embedded right where the reviewer is already working.",
      "textZh": "這些功能不是獨立於理賠流程之外，而是嵌入在審查員原本工作的介面中。",
      "slidePage": 12
    },
    {
      "id": "p04s01u06",
      "startTime": 800.15,
      "endTime": 803.975,
      "textEn": "This matters because AI adoption isn't just a modeling problem.",
      "textZh": "這一點很重要，因為 AI 導入不只是一個建模問題。",
      "slidePage": 12
    },
    {
      "id": "p04s01u07",
      "startTime": 803.975,
      "endTime": 811.625,
      "textEn": "It's also a workflow design problem. If AI output appears somewhere outside the normal workflow, people may just ignore it.",
      "textZh": "也是一個工作流程設計問題。如果 AI 輸出出現在正常流程之外，人們可能只是忽略它。",
      "slidePage": 12
    },
    {
      "id": "p04s01u08",
      "startTime": 811.625,
      "endTime": 819.725,
      "textEn": "But if it's embedded at the right moment, in the right interface, with the right evidence — it becomes part of the decision process.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s01u09",
      "startTime": 819.725,
      "endTime": 827.4,
      "textEn": "That's the point where AI stops being just a feature inside a system and starts becoming part of the actual decision architecture.",
      "textZh": "這就是 AI 不再只是系統功能，而是真正成為決策架構一部分的轉折點。",
      "slidePage": 12
    },
    {
      "id": "p04s01u10",
      "startTime": 827.4,
      "endTime": 830.875,
      "textEn": "And that brings us to the bigger question on this slide.",
      "textZh": "而這也引出了這張投影片上更大的問題。",
      "slidePage": 12
    },
    {
      "id": "p04s02u01",
      "startTime": 830.875,
      "endTime": 838.95,
      "textEn": "Now we're at a key turning point in our presentation. How does AI evolve from a tool into a collaborative decision-making system?",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 13
    },
    {
      "id": "p04s02u02",
      "startTime": 838.95,
      "endTime": 844.3,
      "textEn": "In the early stage, AI works like a query tool. A user asks a question, and AI responds.",
      "textZh": "在早期階段，AI 就像一個查詢工具——使用者提問，AI 回應。",
      "slidePage": 13
    },
    {
      "id": "p04s02u03",
      "startTime": 844.3,
      "endTime": 849.663,
      "textEn": "That's useful, but it depends heavily on the user's ability to ask the right question.",
      "textZh": "早期 AI 是被動的，使用者問問題，AI 回答。",
      "slidePage": 13
    },
    {
      "id": "p04s02u04",
      "startTime": 849.663,
      "endTime": 853.413,
      "textEn": "In the next stage, AI becomes more like a digital specialist.",
      "textZh": "在下一個階段，AI 更像是一位數位專科顧問。",
      "slidePage": 13
    },
    {
      "id": "p04s02u05",
      "startTime": 853.413,
      "endTime": 862.913,
      "textEn": "It understands the task, takes initiative, detects missing information, flags inconsistencies, suggests next steps, and prepares analysis before you even ask.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 13
    },
    {
      "id": "p04s02u06",
      "startTime": 862.913,
      "endTime": 878.525,
      "textEn": "And in the most advanced stage, AI becomes more like an intelligent team: one agent extracts medical information, another interprets policy terms, another checks benefit rules or risk indicators, and another prepares the explanation and decision report.",
      "textZh": "在最進階的階段，AI 更像一個智能團隊：一個 agent 擷取醫療資訊，另一個解讀保單條款，另一個核查給付規則或風險指標，還有一個準備說明與決策報告。",
      "slidePage": 13
    },
    {
      "id": "p04s02u07",
      "startTime": 878.525,
      "endTime": 886.812,
      "textEn": "This multi-agent design makes sense because claims adjudication isn't a single task. It's a sequence of specialized reasoning steps.",
      "textZh": "這種多代理設計有其道理，因為理賠核定不是單一任務，而是一系列專業推理步驟。",
      "slidePage": 13
    },
    {
      "id": "p04s02u08",
      "startTime": 886.812,
      "endTime": 894.212,
      "textEn": "But we should be careful with the word \"collaborative.\" We don't mean that AI has the same authority as a human claims professional.",
      "textZh": "但我們要謹慎使用「協作」這個詞。",
      "slidePage": 13
    },
    {
      "id": "p04s02u09",
      "startTime": 894.212,
      "endTime": 905.688,
      "textEn": "We mean that AI collaborates by doing evidence preparation, consistency checking, and structured reasoning — while humans provide the judgment, the accountability, and the final sign-off.",
      "textZh": "我們所說的協作，是 AI 負責準備證據、核查一致性與結構化推理——而人類提供判斷、承擔責任並做最終決策。",
      "slidePage": 13
    },
    {
      "id": "p04s02u10",
      "startTime": 905.688,
      "endTime": 911.8,
      "textEn": "This is the foundation of our human-in-the-loop design. And it's also where trust becomes the central issue.",
      "textZh": "這是我們 human-in-the-loop 設計的基礎，也是信任成為核心議題的地方。",
      "slidePage": 13
    },
    {
      "id": "p04s02u11",
      "startTime": 911.8,
      "endTime": 921.562,
      "textEn": "If AI is going to be part of a decision, how do we design the workflow so that people can question it, verify it, and still be accountable for the final outcome?",
      "textZh": "如果 AI 將成為決策的一部分，我們如何設計流程，讓人們能質疑它、驗證它，並仍對最終結果負責？",
      "slidePage": 13
    },
    {
      "id": "p04s03u01",
      "startTime": 921.562,
      "endTime": 932.513,
      "textEn": "This slide shows the concept of human-in-the-loop claims pre-adjudication. Agentic AI provides the analysis and decision recommendations. Human reviewers make the final calls.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u02",
      "startTime": 932.513,
      "endTime": 942.125,
      "textEn": "The distinction between pre-adjudication and adjudication is really important here. We're not saying AI independently approves or rejects complex claims.",
      "textZh": "預審與正式核定的區別在這裡非常重要。我們不是說 AI 獨立核准或拒絕複雜理賠。",
      "slidePage": 14
    },
    {
      "id": "p04s03u03",
      "startTime": 942.125,
      "endTime": 953.087,
      "textEn": "Instead, AI prepares a pre-assessment: the reviewed documents, extracted facts, relevant policy terms, supporting evidence, things that need attention, and a suggested recommendation.",
      "textZh": "而是 AI 準備預審：審閱文件、擷取事實、相關保單條款、支持證據、需要關注的事項，以及建議的決策方向。",
      "slidePage": 14
    },
    {
      "id": "p04s03u04",
      "startTime": 953.087,
      "endTime": 961.025,
      "textEn": "The human reviewer then evaluates the evidence and the recommendation. If the output is complete, the reviewer can move faster.",
      "textZh": "人工審查員接著評估證據與建議。若輸出完整，審查員可以更快完成審核。",
      "slidePage": 14
    },
    {
      "id": "p04s03u05",
      "startTime": 961.025,
      "endTime": 970.462,
      "textEn": "If something looks off or inconsistent, the reviewer can challenge it, correct it, or ask for more investigation. This design gives us two real benefits.",
      "textZh": "若有疑問或不一致，審查員可以質疑、修正或要求進一步調查。這個設計帶來兩個實質效益。",
      "slidePage": 14
    },
    {
      "id": "p04s03u06",
      "startTime": 970.462,
      "endTime": 980.675,
      "textEn": "First, it improves efficiency because the routine evidence preparation is accelerated. Second, it improves governance because the AI's reasoning pathway is visible.",
      "textZh": "若輸出完整，審查員可更快處理；若有疑問或不一致，審查員可以挑戰、修正或要求補充調查。",
      "slidePage": 14
    },
    {
      "id": "p04s03u07",
      "startTime": 980.675,
      "endTime": 990.55,
      "textEn": "The reviewer can see not just the recommendation, but the basis for that recommendation. In regulated insurance operations, explainability isn't a nice-to-have.",
      "textZh": "審查員不只能看到建議，還能看到建議背後的依據。在受監理的保險營運中，可解釋性不是加分項。",
      "slidePage": 14
    },
    {
      "id": "p04s03u08",
      "startTime": 990.55,
      "endTime": 998.962,
      "textEn": "It's a condition for trust. And that raises a very practical question: what exactly should AI explain? A recommendation alone isn't enough.",
      "textZh": "在受監理的保險業，解釋性不是加分項，而是信任的前提。",
      "slidePage": 14
    },
    {
      "id": "p04s03u09",
      "startTime": 998.962,
      "endTime": 1002.575,
      "textEn": "The reviewer needs to see the reasoning pathway behind it.",
      "textZh": "審查員需要看到建議背後的推理路徑。",
      "slidePage": 14
    },
    {
      "id": "p04s03u10",
      "startTime": 1002.575,
      "endTime": 1014.212,
      "textEn": "And the bottom of this slide hints at why this matters for actuaries too: better risk identification, more precise rate setting, stronger product design, and more controllable loss costs.",
      "textZh": "這張投影片下方也暗示了這對精算師的意義：更精準的風險識別、更精確的費率釐定、更強健的商品設計，以及更可控的損失成本。",
      "slidePage": 14
    },
    {
      "id": "p05s01u01",
      "startTime": 1014.212,
      "endTime": 1023.85,
      "textEn": "The AI reasoning pathway is designed to support explainable, trustworthy claims decision-making. A simple LLM answer just isn't enough for claims adjudication.",
      "textZh": "AI 推理路徑的目標是支援可解釋且可信任的理賠決策。",
      "slidePage": 15
    },
    {
      "id": "p05s01u02",
      "startTime": 1023.85,
      "endTime": 1031.475,
      "textEn": "If the system simply says, \"This claim should be paid\" — the reviewer can't rely on that. We need a traceable reasoning pathway.",
      "textZh": "單純的 LLM 答案不夠，如果系統只說『這件應該給付』，審查員無法依賴它。",
      "slidePage": 15
    },
    {
      "id": "p05s01u03",
      "startTime": 1031.475,
      "endTime": 1044.712,
      "textEn": "For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.",
      "textZh": "針對每個案件，AI 應能說明它使用了哪些資訊、如何解讀、哪些保單條款相關、在哪裡發現不一致，以及為何做出這樣的建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u04",
      "startTime": 1044.712,
      "endTime": 1051.737,
      "textEn": "Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.",
      "textZh": "系統必須說明用了哪些資訊、如何解讀、哪些條款相關、在哪裡偵測到不一致，以及為什麼做出建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u05",
      "startTime": 1051.737,
      "endTime": 1056.55,
      "textEn": "The AI checks the medical facts against policy terms and medical guidelines.",
      "textZh": "AI 會將醫療事實與保單條款及醫療準則進行比對核查。",
      "slidePage": 15
    },
    {
      "id": "p05s01u06",
      "startTime": 1056.55,
      "endTime": 1071.25,
      "textEn": "It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.",
      "textZh": "系統可以辨識 ESWL 通常是門診手術，建議外科給付可以核付，同時仍標記住院部分供人工審查，並顯示 92% 的信心分數。",
      "slidePage": 15
    },
    {
      "id": "p05s01u07",
      "startTime": 1071.25,
      "endTime": 1081.013,
      "textEn": "For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.",
      "textZh": "對理賠審查員來說，它支援更快、更一致的決策。對風險管理者來說，它提供詐欺與異常偵測的結構化指標。",
      "slidePage": 15
    },
    {
      "id": "p05s01u08",
      "startTime": 1081.013,
      "endTime": 1086.925,
      "textEn": "And for actuaries, it creates more granular data about the cause and characteristics of claims.",
      "textZh": "對精算師來說，它創造了關於理賠原因與特性更細緻的資料。",
      "slidePage": 15
    },
    {
      "id": "p05s01u09",
      "startTime": 1086.925,
      "endTime": 1093.362,
      "textEn": "With these requirements clear, we can now introduce the system we built to pull all the pieces together.",
      "textZh": "釐清這些需求後，我們可以介紹我們建立的系統——將所有部分整合在一起。",
      "slidePage": 15
    },
    {
      "id": "p05s02u01",
      "startTime": 1093.362,
      "endTime": 1099.6,
      "textEn": "To bring these ideas together, we developed CAELIA — the Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u02",
      "startTime": 1099.6,
      "endTime": 1109.375,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.",
      "textZh": "CAELIA 的設計目的是將理賠核定轉化為可解釋、以證據為驅動的決策流程。這個名稱很重要，因為這不只是一個模型。",
      "slidePage": 16
    },
    {
      "id": "p05s02u03",
      "startTime": 1109.375,
      "endTime": 1118.963,
      "textEn": "It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.",
      "textZh": "它是一個結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查的引擎。",
      "slidePage": 16
    },
    {
      "id": "p05s02u04",
      "startTime": 1118.963,
      "endTime": 1121.913,
      "textEn": "The objective isn't to make AI look impressive.",
      "textZh": "目標不是讓 AI 看起來很厲害。",
      "slidePage": 16
    },
    {
      "id": "p05s02u05",
      "startTime": 1121.913,
      "endTime": 1129.138,
      "textEn": "The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.",
      "textZh": "目標是讓理賠決策流程更透明、更一致、更具分析價值。",
      "slidePage": 16
    },
    {
      "id": "p05s02u06",
      "startTime": 1129.138,
      "endTime": 1143.463,
      "textEn": "In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.",
      "textZh": "在實務中，CAELIA 讀取理賠文件、擷取醫療與理賠資訊、檢索相關保單知識、核查給付條件、辨識潛在不一致，並產出預審決策報告。",
      "slidePage": 16
    },
    {
      "id": "p05s02u07",
      "startTime": 1143.463,
      "endTime": 1152.65,
      "textEn": "The reviewer stays in control — but they're starting from a much richer, better-organized evidence package. The next question is about architecture.",
      "textZh": "審查員仍掌控全局——但他們的起點是更豐富、更有條理的證據包。下一個問題關乎架構。",
      "slidePage": 16
    },
    {
      "id": "p05s02u08",
      "startTime": 1152.65,
      "endTime": 1159.463,
      "textEn": "If claims adjudication is made up of many specialized reasoning tasks, should one model try to do everything?",
      "textZh": "如果理賠核定由許多專業推理任務組成，應該由單一模型嘗試做所有事情嗎？",
      "slidePage": 16
    },
    {
      "id": "p05s02u09",
      "startTime": 1159.463,
      "endTime": 1164.713,
      "textEn": "Or should different agents each take responsibility for different parts of the work?",
      "textZh": "還是應該讓不同的 Agent 各自負責不同部分的工作？",
      "slidePage": 16
    },
    {
      "id": "p05s03u01",
      "startTime": 1164.713,
      "endTime": 1172.575,
      "textEn": "At a high level, CAELIA uses a multi-agent architecture. Different agents are responsible for different parts of the workflow.",
      "textZh": "CAELIA 採用多代理架構。",
      "slidePage": 17
    },
    {
      "id": "p05s03u02",
      "startTime": 1172.575,
      "endTime": 1178.138,
      "textEn": "A document extraction agent picks out structured fields from medical records and claim forms.",
      "textZh": "文件擷取 agent 從醫療記錄與理賠表格中識別結構化欄位。",
      "slidePage": 17
    },
    {
      "id": "p05s03u03",
      "startTime": 1178.138,
      "endTime": 1184.725,
      "textEn": "A medical understanding agent interprets diagnoses, treatments, hospitalization details, and clinical context.",
      "textZh": "醫療理解 Agent 負責解讀診斷、治療方式、住院細節與臨床背景。",
      "slidePage": 17
    },
    {
      "id": "p05s03u04",
      "startTime": 1184.725,
      "endTime": 1197.113,
      "textEn": "A policy interpretation agent retrieves relevant policy terms, benefit definitions, exclusions, and claim conditions. A risk analysis agent reviews risk indicators and flags possible inconsistencies.",
      "textZh": "保單解讀 agent 檢索相關保單條款、給付定義、除外條款與理賠條件；風險分析 agent 審查風險指標並標記可能的不一致。",
      "slidePage": 17
    },
    {
      "id": "p05s03u05",
      "startTime": 1197.113,
      "endTime": 1206.738,
      "textEn": "And a reasoning and report agent combines all the evidence and produces a structured pre-assessment report. This modular design has a few key advantages.",
      "textZh": "推理與報告 agent 整合所有證據，產出結構化的預審報告。這種模組化設計有幾個關鍵優勢。",
      "slidePage": 17
    },
    {
      "id": "p05s03u06",
      "startTime": 1206.738,
      "endTime": 1208.425,
      "textEn": "First, it's easier to govern.",
      "textZh": "首先，它更容易被監管與治理。",
      "slidePage": 17
    },
    {
      "id": "p05s03u07",
      "startTime": 1208.425,
      "endTime": 1217.525,
      "textEn": "If there's an issue with policy interpretation or medical extraction, we can evaluate that component on its own. Second, it supports explainability.",
      "textZh": "如果保單解讀或醫療擷取出現問題，我們可以獨立評估該元件。第二，它支援可解釋性。",
      "slidePage": 17
    },
    {
      "id": "p05s03u08",
      "startTime": 1217.525,
      "endTime": 1224.213,
      "textEn": "Each agent contributes a specific piece of the reasoning pathway. Third, it supports continuous improvement.",
      "textZh": "每個 agent 貢獻推理路徑中的特定一環。第三，它支援持續改善。",
      "slidePage": 17
    },
    {
      "id": "p05s03u09",
      "startTime": 1224.213,
      "endTime": 1233.225,
      "textEn": "As policy knowledge, medical terminology, or fraud patterns evolve, we can update the relevant components without having to redesign the whole system.",
      "textZh": "隨著保單知識、醫療術語或詐欺模式的演進，我們可以更新相關元件，而無需重新設計整個系統。",
      "slidePage": 17
    },
    {
      "id": "p05s03u10",
      "startTime": 1233.225,
      "endTime": 1242.725,
      "textEn": "But architecture only becomes useful when it changes the reviewer's day-to-day work. So let's look at the practical output of this multi-agent process.",
      "textZh": "但架構只有在改變審查員的日常工作時才真正有用。讓我們看看這個多代理流程的實際輸出。",
      "slidePage": 17
    },
    {
      "id": "p06s01u01",
      "startTime": 1242.725,
      "endTime": 1246.55,
      "textEn": "The output of CAELIA is an AI pre-assessment decision report.",
      "textZh": "CAELIA 的輸出是 AI 預審決策報告。",
      "slidePage": 18
    },
    {
      "id": "p06s01u02",
      "startTime": 1246.55,
      "endTime": 1252.763,
      "textEn": "This report is designed to take raw claims data and turn it into a traceable decision recommendation.",
      "textZh": "這份報告的設計目的，是將原始的理賠資料轉化為可追溯的決策建議。",
      "slidePage": 18
    },
    {
      "id": "p06s01u03",
      "startTime": 1252.763,
      "endTime": 1262.938,
      "textEn": "A good report should answer several practical questions for the reviewer. What's the claim event? What medical facts were extracted? What policy benefits might apply?",
      "textZh": "好的報告應回答審查員幾個實際問題：理賠事件是什麼？擷取到哪些醫療事實？可能適用哪些保單給付？",
      "slidePage": 18
    },
    {
      "id": "p06s01u04",
      "startTime": 1262.938,
      "endTime": 1271.438,
      "textEn": "What evidence supports the recommendation? What's still uncertain? And what should the human reviewer check before making the final call?",
      "textZh": "哪些證據支持建議？還有哪些不確定？人工審查員在做最終決定前應檢查什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s01u05",
      "startTime": 1271.438,
      "endTime": 1285.175,
      "textEn": "In the example, the report shows confidence scores for different parts of the case, such as 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.",
      "textZh": "在範例中，報告顯示案件不同部分的信心分數：外科給付 92%、住院 90%，以及整體建議 85%。",
      "slidePage": 18
    },
    {
      "id": "p06s01u06",
      "startTime": 1285.175,
      "endTime": 1293.725,
      "textEn": "This is especially important when AI is used in regulated financial services. We need to be able to show that AI output isn't arbitrary.",
      "textZh": "這在受監理的金融服務中使用 AI 時尤其重要。我們需要能夠證明 AI 輸出不是任意的。",
      "slidePage": 18
    },
    {
      "id": "p06s01u07",
      "startTime": 1293.725,
      "endTime": 1302.538,
      "textEn": "It has to be grounded in evidence, policy knowledge, and human oversight. Up to this point, we've mostly talked about operations and governance.",
      "textZh": "它必須以證據、保單知識與人工監督為基礎。到目前為止，我們主要談的是營運與治理。",
      "slidePage": 18
    },
    {
      "id": "p06s01u08",
      "startTime": 1302.538,
      "endTime": 1307.013,
      "textEn": "Now I'd like to shift the lens and ask: what does all this mean for actuaries?",
      "textZh": "現在我想換個角度問：這一切對精算師來說意味著什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s02u01",
      "startTime": 1307.013,
      "endTime": 1317.25,
      "textEn": "Let's move beyond operations and talk about actuarial value. Claims records are often treated like operational byproducts. They exist because we need to pay claims.",
      "textZh": "接著從精算角度看。理賠記錄常被視為營運副產品，因為我們需要付款才產生它。",
      "slidePage": 19
    },
    {
      "id": "p06s02u02",
      "startTime": 1317.25,
      "endTime": 1325.475,
      "textEn": "But if we structure them properly, they become actuarial-ready data. This is one of the most important points we want to make today.",
      "textZh": "但如果我們妥善結構化，它們就會變成精算就緒的資料。這是我們今天想表達的最重要觀點之一。",
      "slidePage": 19
    },
    {
      "id": "p06s02u03",
      "startTime": 1325.475,
      "endTime": 1334.625,
      "textEn": "The structured output has three layers. The first is the result layer: what was approved, denied, or left pending, and what benefit item was involved.",
      "textZh": "結構化輸出有三個層次。第一是結果層：核准、拒絕或待決的內容，以及涉及哪個給付項目。",
      "slidePage": 19
    },
    {
      "id": "p06s02u04",
      "startTime": 1334.625,
      "endTime": 1343.838,
      "textEn": "The second is the policy and decision layer: which policy terms applied, whether the benefit condition matched, and whether exclusions were triggered.",
      "textZh": "第二是保單與決策層：適用哪些保單條款、給付條件是否符合，以及除外條款是否被觸發。",
      "slidePage": 19
    },
    {
      "id": "p06s02u05",
      "startTime": 1343.838,
      "endTime": 1352.288,
      "textEn": "The third is the medical assessment layer: diagnosis codes, procedures, treatment information, medical necessity, and clinical justification.",
      "textZh": "第三是醫療評估層：診斷代碼、手術、治療資訊、醫療必要性與臨床理由。",
      "slidePage": 19
    },
    {
      "id": "p06s02u06",
      "startTime": 1352.288,
      "endTime": 1360.238,
      "textEn": "With proper governance, this information can support pricing, reserving, experience studies, risk segmentation, and product monitoring.",
      "textZh": "在適當的治理下，這些資訊可以支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u07",
      "startTime": 1360.238,
      "endTime": 1364.05,
      "textEn": "In other words, AI doesn't just make claims operations faster.",
      "textZh": "換句話說，AI 不只是讓理賠作業變得更快。",
      "slidePage": 19
    },
    {
      "id": "p06s02u08",
      "startTime": 1364.05,
      "endTime": 1373.125,
      "textEn": "It expands the data available for actuarial analysis. And this is especially valuable under IFRS 17 and modern risk management frameworks.",
      "textZh": "它擴展了可供精算分析的資料。在 IFRS 17 與現代風險管理框架下，這尤其有價值。",
      "slidePage": 19
    },
    {
      "id": "p06s02u09",
      "startTime": 1373.125,
      "endTime": 1382.7,
      "textEn": "Insurers need faster feedback loops between actual claims experience and their assumptions. If claims data stays unstructured, that feedback loop is slow.",
      "textZh": "保險公司需要在實際理賠經驗與精算假設之間建立更快的回饋迴路。如果理賠資料保持非結構化，這個迴路就會很慢。",
      "slidePage": 19
    },
    {
      "id": "p06s02u10",
      "startTime": 1382.7,
      "endTime": 1390.125,
      "textEn": "But if claims data becomes structured earlier in the process, actuaries can respond more quickly to emerging experience.",
      "textZh": "但如果理賠資料在流程中更早結構化，精算師就能更快速地回應新興的經驗趨勢。",
      "slidePage": 19
    },
    {
      "id": "p06s02u11",
      "startTime": 1390.125,
      "endTime": 1400.75,
      "textEn": "This brings us to a familiar actuarial question — but now with a much better data foundation: are we only measuring what happened, or are we also learning why it happened?",
      "textZh": "這帶我們回到一個精算師熟悉的問題——但現在有了更好的資料基礎：我們只是在衡量發生了什麼，還是也在學習為什麼發生？",
      "slidePage": 19
    },
    {
      "id": "p06s03u01",
      "startTime": 1400.75,
      "endTime": 1409.788,
      "textEn": "Experience analysis usually starts with outcomes. How many claims happened? How much did we pay? What was the incidence rate? What was the severity?",
      "textZh": "經驗分析常從結果開始：發生多少理賠？給付多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u02",
      "startTime": 1409.788,
      "endTime": 1419.038,
      "textEn": "How did actual experience compare to what we expected? These are essential questions. But more and more, insurers also need to understand the causes.",
      "textZh": "發生率與嚴重度如何？實際經驗和預期差多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u03",
      "startTime": 1419.038,
      "endTime": 1420.6,
      "textEn": "Why did incidence change?",
      "textZh": "為什麼發生率改變了？",
      "slidePage": 20
    },
    {
      "id": "p06s03u04",
      "startTime": 1420.6,
      "endTime": 1428.938,
      "textEn": "Was it driven by aging? Product mix? Changes in medical practice? Customer behavior? Provider behavior? Fraud patterns? Or benefit design?",
      "textZh": "是由高齡化、商品組合、醫療行為改變、客戶行為、院所行為、詐欺模式，還是給付設計所驅動？",
      "slidePage": 20
    },
    {
      "id": "p06s03u05",
      "startTime": 1428.938,
      "endTime": 1432.713,
      "textEn": "Are there early signals that assumptions need to be updated?",
      "textZh": "是否有早期訊號顯示假設需要更新？",
      "slidePage": 20
    },
    {
      "id": "p06s03u06",
      "startTime": 1432.713,
      "endTime": 1438.75,
      "textEn": "Take the example on this slide: an 80-year-old male has an accidental death claim after a fall.",
      "textZh": "發生率變化是高齡化、商品組合、醫療行為、客戶行為、院所行為、詐欺模式，還是給付設計造成的？",
      "slidePage": 20
    },
    {
      "id": "p06s03u07",
      "startTime": 1438.75,
      "endTime": 1443.438,
      "textEn": "Traditional analysis might count this simply as one accidental death case.",
      "textZh": "傳統分析可能只是將此歸類為一件意外死亡案件。",
      "slidePage": 20
    },
    {
      "id": "p06s03u08",
      "startTime": 1443.438,
      "endTime": 1454.925,
      "textEn": "But cause-based analysis asks a deeper question: was this a pure external accident, or did an underlying medical condition, such as degeneration or poor balance, contribute to the fall?",
      "textZh": "但以原因為基礎的分析會問更深的問題：這是純粹的外部意外，還是潛在健康狀況——例如退化或平衡不良——也是跌倒的原因？",
      "slidePage": 20
    },
    {
      "id": "p06s03u09",
      "startTime": 1454.925,
      "endTime": 1462.838,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean the experience study population becomes.",
      "textZh": "這個區分改變了我們估計發生率、分群風險，以及讓經驗研究群體更乾淨的方式。",
      "slidePage": 20
    },
    {
      "id": "p06s03u10",
      "startTime": 1462.838,
      "endTime": 1470.062,
      "textEn": "It helps us ask better questions, spot emerging trends earlier, and communicate findings more clearly to management.",
      "textZh": "它幫助我們提出更好的問題、更早發現新興趨勢，並更清楚地向管理層溝通研究發現。",
      "slidePage": 20
    },
    {
      "id": "p06s03u11",
      "startTime": 1470.062,
      "endTime": 1481.3,
      "textEn": "Once we understand causes more clearly, the natural next question is how those insights can feed into product and pricing discussions — without turning this talk into a pricing disclosure.",
      "textZh": "一旦我們更清楚地理解原因，下一個自然的問題是：這些洞察如何能進入商品與定價討論——同時又不讓這場演講變成定價揭露。",
      "slidePage": 20
    },
    {
      "id": "p06s04u01",
      "startTime": 1481.3,
      "endTime": 1487.013,
      "textEn": "Once experience analysis becomes more cause-based, it can also support pricing applications.",
      "textZh": "當我們更清楚理解原因，這些洞察也能支援定價與商品討論。",
      "slidePage": 21
    },
    {
      "id": "p06s04u02",
      "startTime": 1487.013,
      "endTime": 1492.663,
      "textEn": "To be clear: this talk isn't about disclosing pricing strategy or specific product pricing.",
      "textZh": "需要澄清的是：本次分享並非關於揭露定價策略或具體商品費率。",
      "slidePage": 21
    },
    {
      "id": "p06s04u03",
      "startTime": 1492.663,
      "endTime": 1503.563,
      "textEn": "We're talking about the analytical capability. When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity.",
      "textZh": "這裡不是揭露具體定價策略，而是討論分析能力。",
      "slidePage": 21
    },
    {
      "id": "p06s04u04",
      "startTime": 1503.563,
      "endTime": 1511.513,
      "textEn": "This supports three pricing applications shown on the slide: refined assumptions, segmented pricing, and policy or benefit design.",
      "textZh": "這支援投影片上顯示的三個定價應用：精修假設、分群定價，以及保單或給付設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u05",
      "startTime": 1511.513,
      "endTime": 1520.975,
      "textEn": "Take lung cancer claims as an example. If we look at 100 cases together, traditional pricing may only show that overall claim cost is increasing.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u06",
      "startTime": 1520.975,
      "endTime": 1534.113,
      "textEn": "But cause analysis can separate 70 standard treatment cases from 20 high-intensity treatment cases and 10 borderline cases where the treatment pattern or policy alignment needs closer review.",
      "textZh": "但原因分析可以將 70 件標準治療案件、20 件高強度治療案件，與 10 件治療模式或保單適用性需要更仔細審查的邊界案件區分開來。",
      "slidePage": 21
    },
    {
      "id": "p06s04u07",
      "startTime": 1534.113,
      "endTime": 1540.413,
      "textEn": "That difference really matters. Without cause analysis, management might only see a financial result.",
      "textZh": "這個差異非常重要。沒有原因分析，管理層可能只看到財務結果。",
      "slidePage": 21
    },
    {
      "id": "p06s04u08",
      "startTime": 1540.413,
      "endTime": 1552.4,
      "textEn": "With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u09",
      "startTime": 1552.4,
      "endTime": 1556.263,
      "textEn": "This is the connection between claims AI and risk-based pricing.",
      "textZh": "這就是理賠 AI 與風險定價之間的連結。",
      "slidePage": 21
    },
    {
      "id": "p06s04u10",
      "startTime": 1556.263,
      "endTime": 1563.875,
      "textEn": "AI helps convert claims documents into structured evidence, and structured evidence makes risk segmentation more precise.",
      "textZh": "AI 幫助將理賠文件轉化為結構化證據，而結構化證據則使風險分群更加精準。",
      "slidePage": 21
    },
    {
      "id": "p06s04u11",
      "startTime": 1563.875,
      "endTime": 1569.475,
      "textEn": "Better experience analysis supports more informed pricing and risk management decisions.",
      "textZh": "更好的經驗分析支援更有依據的定價與風險管理決策。",
      "slidePage": 21
    },
    {
      "id": "p06s04u12",
      "startTime": 1569.475,
      "endTime": 1575.338,
      "textEn": "Of course, none of this works if the AI is reasoning from unstable or poorly managed knowledge.",
      "textZh": "當然，如果 AI 的推理依賴不穩定或管理不善的知識庫，這一切都將失效。",
      "slidePage": 21
    },
    {
      "id": "p06s04u13",
      "startTime": 1575.338,
      "endTime": 1580.05,
      "textEn": "So the next layer is the knowledge foundation that supports every decision.",
      "textZh": "因此，下一層是支撐每個決策的知識基礎。",
      "slidePage": 21
    },
    {
      "id": "p07s01u01",
      "startTime": 1580.05,
      "endTime": 1591.775,
      "textEn": "To make all of this work, CAELIA needs a strong knowledge foundation from three sources: claims operations policies, product terms and benefit rules, and a medical knowledge and disease library.",
      "textZh": "要讓這一切運作，CAELIA 需要來自三個來源的穩固知識基礎：理賠作業準則、商品條款與給付規則，以及醫療知識與疾病庫。",
      "slidePage": 22
    },
    {
      "id": "p07s01u02",
      "startTime": 1591.775,
      "endTime": 1594.875,
      "textEn": "This knowledge has to be structured and governed.",
      "textZh": "這些知識必須被結構化並受到妥善治理。",
      "slidePage": 22
    },
    {
      "id": "p07s01u03",
      "startTime": 1594.875,
      "endTime": 1602.1,
      "textEn": "If the knowledge base is incomplete or out of date, the AI might retrieve the wrong information or apply the wrong rule.",
      "textZh": "如果知識庫不完整或已過時，AI 可能會擷取錯誤的資訊或套用錯誤的規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u04",
      "startTime": 1602.1,
      "endTime": 1605.387,
      "textEn": "We also need traceability and data privacy controls.",
      "textZh": "我們也需要可追溯性與資料隱私控管。",
      "slidePage": 22
    },
    {
      "id": "p07s01u05",
      "startTime": 1605.387,
      "endTime": 1611.712,
      "textEn": "When AI uses a policy clause or a medical fact, the system should be able to trace where that came from.",
      "textZh": "當 AI 引用保單條款或醫療事實時，系統應能追溯其來源出處。",
      "slidePage": 22
    },
    {
      "id": "p07s01u06",
      "startTime": 1611.712,
      "endTime": 1619.287,
      "textEn": "Reviewers should be able to see the source of any piece of information. This is especially important for explainability.",
      "textZh": "審查員應能看到任何資訊的來源。這對可解釋性尤其重要。",
      "slidePage": 22
    },
    {
      "id": "p07s01u07",
      "startTime": 1619.287,
      "endTime": 1623.438,
      "textEn": "In a claims decision, it's not enough to say \"the model thinks so.\"",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u08",
      "startTime": 1623.438,
      "endTime": 1632.575,
      "textEn": "We need to say: here's the document, here's the extracted fact, here's the relevant policy term, here's the reasoning, and here's what's still uncertain.",
      "textZh": "我們需要說明：這是文件、這是擷取的事實、這是相關保單條款、這是推理過程，以及這是仍不確定的部分。",
      "slidePage": 22
    },
    {
      "id": "p07s01u09",
      "startTime": 1632.575,
      "endTime": 1643.225,
      "textEn": "The knowledge foundation is what makes the AI system controllable. It anchors AI reasoning in approved business knowledge, rather than letting the model improvise freely.",
      "textZh": "知識基礎是讓 AI 系統可控的關鍵。它將 AI 推理錨定在核准的業務知識中，而不是讓模型自由發揮。",
      "slidePage": 22
    },
    {
      "id": "p07s01u10",
      "startTime": 1643.225,
      "endTime": 1651.838,
      "textEn": "The clearest example of this is policy interpretation — because in claims, a small difference in wording can completely change the decision.",
      "textZh": "最清楚的例子是保單解讀——因為在理賠中，措辭上的細微差異可能完全改變決策結果。",
      "slidePage": 22
    },
    {
      "id": "p07s02u01",
      "startTime": 1651.838,
      "endTime": 1658.288,
      "textEn": "Policy interpretation is one of the most important and most challenging parts of claims adjudication.",
      "textZh": "保單解讀是知識基礎中最重要也最困難的部分之一。",
      "slidePage": 23
    },
    {
      "id": "p07s02u02",
      "startTime": 1658.288,
      "endTime": 1664.6,
      "textEn": "Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.",
      "textZh": "保單包含定義、給付條件、除外條款、等待期、給付上限及特殊規定。",
      "slidePage": 23
    },
    {
      "id": "p07s02u03",
      "startTime": 1664.6,
      "endTime": 1675.375,
      "textEn": "A claim decision often comes down to the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.",
      "textZh": "保單包含定義、給付條件、除外、等待期、限額與特殊規則，理賠決策常取決於精確解讀。",
      "slidePage": 23
    },
    {
      "id": "p07s02u04",
      "startTime": 1675.375,
      "endTime": 1683.863,
      "textEn": "The agent workflow has four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.",
      "textZh": "agent 工作流程有四個步驟：理解理賠內容、確定保單適用性、辨識除外條款，以及產出結構化輸出。",
      "slidePage": 23
    },
    {
      "id": "p07s02u05",
      "startTime": 1683.863,
      "endTime": 1698.413,
      "textEn": "For example, if a claim involves hospitalization benefits, the system can pull up the relevant policy clauses, compare the required conditions against the extracted medical facts, and highlight anything that's missing or conflicting.",
      "textZh": "例如，若理賠涉及住院給付，系統可以調出相關保單條款，將所需條件與擷取的醫療事實對比，並標示缺漏或衝突之處。",
      "slidePage": 23
    },
    {
      "id": "p07s02u06",
      "startTime": 1698.413,
      "endTime": 1708.6,
      "textEn": "The reviewer can then focus on judgment. Does the medical evidence really satisfy the policy definition? Is additional documentation needed? Is there an exception?",
      "textZh": "審查員可以專注於判斷：醫療證據是否真正符合保單定義？是否需要補充文件？是否有例外情況？",
      "slidePage": 23
    },
    {
      "id": "p07s02u07",
      "startTime": 1708.6,
      "endTime": 1712.95,
      "textEn": "Does the case need to be escalated? This approach improves consistency.",
      "textZh": "案件是否需要升級處理？這種方法改善了決策一致性。",
      "slidePage": 23
    },
    {
      "id": "p07s02u08",
      "startTime": 1712.95,
      "endTime": 1720.338,
      "textEn": "The output should clearly show applicable coverage, coverage determination, exclusion determination, and the decision rationale.",
      "textZh": "輸出應清楚顯示適用的承保範圍、承保確定、除外確定，以及決策依據。",
      "slidePage": 23
    },
    {
      "id": "p07s02u09",
      "startTime": 1720.338,
      "endTime": 1727.113,
      "textEn": "If we step back from the individual components, we can now summarize the value this creates across the organization.",
      "textZh": "如果退一步從整體看，我們現在可以總結這在整個組織中創造的價值。",
      "slidePage": 23
    },
    {
      "id": "p07s03u01",
      "startTime": 1727.113,
      "endTime": 1734.875,
      "textEn": "Let's bring the benefits together. We see four major benefit areas: operations, risk control, governance, and actuarial insight.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u02",
      "startTime": 1734.875,
      "endTime": 1746.0,
      "textEn": "For operations, CAELIA reduces manual document review, speeds up evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.",
      "textZh": "在營運方面，CAELIA 減少人工文件審查、加速證據準備，並幫助審查員專注於複雜判斷，而非重複的資料收集。",
      "slidePage": 24
    },
    {
      "id": "p07s03u03",
      "startTime": 1746.0,
      "endTime": 1756.613,
      "textEn": "In practical terms, the impact can extend across a claims organization of around 300 FTEs, with an estimated 30 percent reduction in review time per case.",
      "textZh": "在實務上，影響可延伸至約 300 名全職人員的理賠組織，估計每件案件的審查時間可縮短約 30%。",
      "slidePage": 24
    },
    {
      "id": "p07s03u04",
      "startTime": 1756.613,
      "endTime": 1763.55,
      "textEn": "For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.",
      "textZh": "在風險控管方面，系統支援更早發現不一致、異常模式與詐欺指標。",
      "slidePage": 24
    },
    {
      "id": "p07s03u05",
      "startTime": 1763.55,
      "endTime": 1775.775,
      "textEn": "For governance, human-in-the-loop review, traceable reasoning, structured knowledge, and data lineage help make AI output explainable and auditable. That's essential for responsible AI in insurance.",
      "textZh": "在治理方面，human-in-the-loop 審查、可追溯推理、結構化知識與資料血緣，有助於使 AI 輸出可解釋且可稽核——這對保險業的負責任 AI 至關重要。",
      "slidePage": 24
    },
    {
      "id": "p07s03u06",
      "startTime": 1775.775,
      "endTime": 1782.688,
      "textEn": "And for actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.",
      "textZh": "在精算工作方面，最具策略價值的效益是理賠資料變得更加結構化且更有意義。",
      "slidePage": 24
    },
    {
      "id": "p07s03u07",
      "startTime": 1782.688,
      "endTime": 1793.5,
      "textEn": "Instead of only getting final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and the rationale behind decisions.",
      "textZh": "精算師不再只能取得最終給付結果，而能存取關於診斷、治療、原因、嚴重度驅動因子與決策依據的更豐富資訊。",
      "slidePage": 24
    },
    {
      "id": "p07s03u08",
      "startTime": 1793.5,
      "endTime": 1800.8,
      "textEn": "This supports experience studies, incidence rate reviews, assumption updates, reserve analysis, and product monitoring.",
      "textZh": "這支援經驗研究、發生率審查、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u09",
      "startTime": 1800.8,
      "endTime": 1806.0,
      "textEn": "The broader lesson here is that AI value shouldn't be measured only by time saved.",
      "textZh": "更廣泛的啟示是，AI 價值不應只以節省的時間衡量。",
      "slidePage": 24
    },
    {
      "id": "p07s03u10",
      "startTime": 1806.0,
      "endTime": 1815.575,
      "textEn": "In insurance, AI value should also be measured by the quality of decisions, the strength of governance, and the improvement in how the organization learns.",
      "textZh": "在保險業，AI 價值也應以決策品質、治理強度，以及組織學習方式的改善來衡量。",
      "slidePage": 24
    },
    {
      "id": "p07s03u11",
      "startTime": 1815.575,
      "endTime": 1826.213,
      "textEn": "So as we wrap up, I want to come back to the question we asked at the beginning: are claims records simply evidence for payment — or can they become evidence for learning?",
      "textZh": "在結束之前，我想回到我們一開始提出的問題：理賠紀錄只是付款證據，還是也能成為學習的證據？",
      "slidePage": 24
    },
    {
      "id": "p07s04u01",
      "startTime": 1826.213,
      "endTime": 1836.288,
      "textEn": "To close, let's come back to our title: beyond efficiency. Efficiency matters. Faster claims processing improves customer experience and reduces operational burden.",
      "textZh": "最後回到標題：beyond efficiency。",
      "slidePage": 24
    },
    {
      "id": "p07s04u02",
      "startTime": 1836.288,
      "endTime": 1842.238,
      "textEn": "But for life insurers, the bigger opportunity is to build a claims ecosystem that actually learns.",
      "textZh": "效率很重要，但對壽險公司來說，更大的機會是建立會學習的理賠生態系。",
      "slidePage": 24
    },
    {
      "id": "p07s04u03",
      "startTime": 1842.238,
      "endTime": 1850.45,
      "textEn": "Every claim contains information about customer needs, medical trends, product performance, operational risk, and emerging experience.",
      "textZh": "每一件理賠都包含關於客戶需求、醫療趨勢、商品表現、營運風險與新興經驗的資訊。",
      "slidePage": 24
    },
    {
      "id": "p07s04u04",
      "startTime": 1850.45,
      "endTime": 1855.488,
      "textEn": "Historically, most of that information was locked inside unstructured documents.",
      "textZh": "過去，這些資訊大多封存於非結構化的文件之中。",
      "slidePage": 24
    },
    {
      "id": "p07s04u05",
      "startTime": 1855.488,
      "endTime": 1865.438,
      "textEn": "Agentic AI gives us a practical way to unlock it — as long as we design the system with governance, explainability, and human oversight built in from the start.",
      "textZh": "Agentic AI 提供了一個實際的方式來解鎖這些資訊——只要我們從一開始就將治理、可解釋性與人工監督內建到系統架構中。",
      "slidePage": 24
    },
    {
      "id": "p07s04u06",
      "startTime": 1865.438,
      "endTime": 1872.438,
      "textEn": "Our experience points to three takeaways. First, AI in claims should be designed as augmentation, not just automation.",
      "textZh": "我們的經驗指向三個重要啟示。第一，理賠中的 AI 應被設計為增強工具，而非只是自動化工具。",
      "slidePage": 24
    },
    {
      "id": "p07s04u07",
      "startTime": 1872.438,
      "endTime": 1878.538,
      "textEn": "The goal is to help professionals make better decisions — not simply to remove human involvement.",
      "textZh": "目標是幫助專業人員做出更好的決策——而不是單純地移除人的參與。",
      "slidePage": 24
    },
    {
      "id": "p07s04u08",
      "startTime": 1878.538,
      "endTime": 1882.825,
      "textEn": "Second, claims data should be treated as a strategic actuarial asset.",
      "textZh": "第二，理賠資料應被視為具有策略價值的精算資產。",
      "slidePage": 24
    },
    {
      "id": "p07s04u09",
      "startTime": 1882.825,
      "endTime": 1892.725,
      "textEn": "When unstructured records become structured, traceable, and governed, they can strengthen experience studies, pricing assumptions, reserving analysis, and risk monitoring.",
      "textZh": "當非結構化紀錄變得結構化、可追溯且受治理，它們可以強化經驗研究、定價假設、準備金分析與風險監控。",
      "slidePage": 24
    },
    {
      "id": "p07s04u10",
      "startTime": 1892.725,
      "endTime": 1897.688,
      "textEn": "Third, responsible AI isn't a separate compliance layer you bolt on at the end.",
      "textZh": "第三，負責任 AI 不是最後才附加上去的合規層次。",
      "slidePage": 24
    },
    {
      "id": "p07s04u11",
      "startTime": 1897.688,
      "endTime": 1907.313,
      "textEn": "It has to be built into the architecture from day one: human-in-the-loop review, knowledge governance, data lineage, explainable reasoning, and auditability.",
      "textZh": "它必須從第一天起就內建在架構中：human-in-the-loop 審查、知識治理、資料血緣、可解釋推理與可稽核性。",
      "slidePage": 24
    },
    {
      "id": "p07s04u12",
      "startTime": 1907.313,
      "endTime": 1916.463,
      "textEn": "As markets face aging populations, rising medical complexity, and post-IFRS 17 operational demands, actuaries have an important role to play.",
      "textZh": "面對高齡化社會、日益複雜的醫療環境與後 IFRS 17 的營運需求，精算師有重要的角色要扮演。",
      "slidePage": 24
    },
    {
      "id": "p07s04u13",
      "startTime": 1916.463,
      "endTime": 1923.85,
      "textEn": "Actuaries can help connect AI capability with business value, risk management, governance, and long-term sustainability.",
      "textZh": "精算師可以幫助連結 AI 能力與商業價值、風險管理、治理與長期永續性。",
      "slidePage": 24
    },
    {
      "id": "p07s04u14",
      "startTime": 1923.85,
      "endTime": 1925.463,
      "textEn": "Thank you so much for your time.",
      "textZh": "非常感謝各位的時間。",
      "slidePage": 25
    }
  ]
};
