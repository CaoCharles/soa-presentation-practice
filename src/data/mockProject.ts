import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/final.mp3",
  "duration": 2754.189,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0.0,
      "endTime": 5.0,
      "textEn": "Good morning, everyone. Thanks so much for being here.",
      "textZh": "大家早安，非常感謝各位的參與。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 5.0,
      "endTime": 11.5,
      "textEn": "My name is Li Yu Tsao, and joining me today is my colleague Yu Chung Wu from Cathay Life Insurance in Taiwan.",
      "textZh": "我叫 Li Yu Tsao，今天和我一起分享的是來自台灣國泰人壽的同事 Yu Chung Wu。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 11.5,
      "endTime": 21.669,
      "textEn": "Today we want to share something that sits right at the crossroads of claims operations, actuarial analytics, risk management, and responsible AI.",
      "textZh": "今天我們想分享一個位於理賠營運、精算分析、風險管理與負責任 AI 交會點的主題。",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 21.669,
      "endTime": 31.669,
      "textEn": "Our talk is called \"Beyond Efficiency: Leveraging Agentic AI for Claims Experience Analysis and Risk Resilience in Taiwan's Life Insurance.\"",
      "textZh": "我們的題目是「超越效率：在台灣壽險業運用 Agentic AI 進行理賠經驗分析與風險韌性管理」。",
      "slidePage": 1
    },
    {
      "id": "p01s01u05",
      "startTime": 31.669,
      "endTime": 43.189,
      "textEn": "When most people first hear about AI in claims, they immediately think about efficiency: faster processing, less manual work, and shorter waiting time for customers.",
      "textZh": "當許多人第一次聽到理賠 AI，第一個想到的通常是效率。我們能不能更快處理理賠？能不能減少人工工作？",
      "slidePage": 1
    },
    {
      "id": "p01s01u06",
      "startTime": 43.189,
      "endTime": 56.209,
      "textEn": "Those questions matter. But today we want to go one step further and ask what claims AI can teach the organization.",
      "textZh": "能不能縮短客戶等待時間？這些問題都很重要。但今天我們想再往前一步。",
      "slidePage": 1
    },
    {
      "id": "p01s01u07",
      "startTime": 56.209,
      "endTime": 67.068,
      "textEn": "We want to talk about how claims AI can be more than just an automation tool.",
      "textZh": "我們想討論理賠 AI 如何不只是自動化工具。它也可以成為結構化的精算洞察來源。",
      "slidePage": 1
    },
    {
      "id": "p01s01u08",
      "startTime": 67.068,
      "endTime": 76.37,
      "textEn": "It can actually become a real source of actuarial insight.",
      "textZh": "",
      "slidePage": 1
    },
    {
      "id": "p01s01u09",
      "startTime": 76.37,
      "endTime": 86.119,
      "textEn": "It can help insurers spot emerging health trends, sharpen experience analysis, strengthen fraud monitoring, and build a more resilient operation overall.",
      "textZh": "它可以協助保險公司理解新興疾病經驗、改善經驗分析、強化詐欺監控，並建立更具韌性的營運模式。",
      "slidePage": 1
    },
    {
      "id": "p01s01u10",
      "startTime": 86.119,
      "endTime": 110.069,
      "textEn": "Our core message is pretty simple: if claims data can go from messy, unstructured records to something explainable, governed, and ready for actuarial use, then claims operations can become a true strategic asset for the whole company.",
      "textZh": "我們的核心訊息很簡單：如果理賠資料能從非結構化的營運紀錄，轉換為可解釋、受治理、可供精算使用的資料，那麼理賠營運就能成為整家公司的策略性資產。",
      "slidePage": 1
    },
    {
      "id": "p01s01u11",
      "startTime": 110.069,
      "endTime": 127.469,
      "textEn": "As you listen today, I'd invite you to keep one question in mind: in your own organization, are claims records mainly treated as evidence for payment — or also as evidence for learning?",
      "textZh": "今天聆聽時，我也想邀請各位保留一個問題：在你的組織中，理賠紀錄主要只是付款證據，還是也是學習的證據？",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 127.469,
      "endTime": 132.069,
      "textEn": "Let me briefly introduce the two of us.",
      "textZh": "讓我簡單介紹兩位講者。",
      "slidePage": 4
    },
    {
      "id": "p01s02u02",
      "startTime": 132.069,
      "endTime": 151.519,
      "textEn": "My work focuses on applying AI and machine learning to insurance operations — especially natural language processing and large language models, which we call LLMs, for claims and medical documentation.",
      "textZh": "我的工作聚焦於將 AI 與機器學習應用在保險營運，特別是自然語言處理與大型語言模型在理賠和醫療文件上的應用。",
      "slidePage": 4
    },
    {
      "id": "p01s02u03",
      "startTime": 151.519,
      "endTime": 158.455,
      "textEn": "And I'm Yu Chung Wu. My work focuses on claims operations and AI system architecture.",
      "textZh": "我叫 Yu Chung Wu。我的工作聚焦在理賠營運與 AI 系統架構。",
      "slidePage": 4
    },
    {
      "id": "p01s02u04",
      "startTime": 158.455,
      "endTime": 173.055,
      "textEn": "On this project, we worked closely with claims professionals, data scientists, IT teams, and governance stakeholders to design an AI-assisted claims pre-adjudication framework.",
      "textZh": "在這個專案中，我們與理賠專家、資料科學家、IT 團隊以及治理相關單位密切合作，設計 AI 輔助的理賠預審框架。",
      "slidePage": 4
    },
    {
      "id": "p01s02u05",
      "startTime": 173.055,
      "endTime": 183.573,
      "textEn": "Together, we'll walk you through three questions. First, why is Taiwan's life insurance claims environment getting more complex?",
      "textZh": "今天我們會依序回答三個問題。第一，為什麼台灣壽險理賠環境正變得越來越複雜？",
      "slidePage": 4
    },
    {
      "id": "p01s02u06",
      "startTime": 183.573,
      "endTime": 205.499,
      "textEn": "Second, how did we design CAELIA — the Cathay AI Engine for Life Insurance Adjudication — as an agentic AI framework?",
      "textZh": "第二，我們如何將 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication，設計成一個 agentic AI 框架？",
      "slidePage": 4
    },
    {
      "id": "p01s02u07",
      "startTime": 205.499,
      "endTime": 214.276,
      "textEn": "Agentic AI, by the way, is AI that can take initiative and carry out multi-step tasks on its own.",
      "textZh": "",
      "slidePage": 4
    },
    {
      "id": "p01s02u08",
      "startTime": 214.276,
      "endTime": 232.987,
      "textEn": "And third, how can this kind of framework create value beyond just operational efficiency — especially for experience studies, pricing, reserving, risk monitoring, and governance?",
      "textZh": "第三，這類框架如何創造超越營運效率的價值，特別是在經驗研究、定價、準備金、風險監控與治理方面？",
      "slidePage": 4
    },
    {
      "id": "p01s02u09",
      "startTime": 232.987,
      "endTime": 246.95,
      "textEn": "With that framing in place, let's start with the pressures that made this work necessary in the first place.",
      "textZh": "有了這個架構，我們先從讓這項工作變得必要的壓力談起。",
      "slidePage": 4
    },
    {
      "id": "p01s03u01",
      "startTime": 246.95,
      "endTime": 250.33,
      "textEn": "Let's start with the business context.",
      "textZh": "讓我們先從商業背景開始。",
      "slidePage": 5
    },
    {
      "id": "p01s03u02",
      "startTime": 250.33,
      "endTime": 268.636,
      "textEn": "Claims operations in Taiwan are under structural pressure from three directions: rising external pressure, a growing internal workload, and emerging constraints around talent and organization.",
      "textZh": "台灣的理賠營運正面臨三個方向的結構性壓力：外部壓力上升、內部作業負擔擴大，以及組織與人才限制浮現。",
      "slidePage": 5
    },
    {
      "id": "p01s03u03",
      "startTime": 268.636,
      "endTime": 276.153,
      "textEn": "The first pressure is demographic and medical.",
      "textZh": "第一個壓力來自人口與醫療。",
      "slidePage": 5
    },
    {
      "id": "p01s03u04",
      "startTime": 276.153,
      "endTime": 284.334,
      "textEn": "Taiwan is entering what's called a super-aged society.",
      "textZh": "台灣正進入超高齡社會，壽險公司看到越來越多與慢性病、失智、長期照護、住院與術後恢復相關的理賠。",
      "slidePage": 5
    },
    {
      "id": "p01s03u05",
      "startTime": 284.334,
      "endTime": 296.629,
      "textEn": "Life insurers are seeing more and more claims tied to chronic disease, dementia, long-term care, hospitalization, and post-treatment recovery.",
      "textZh": "",
      "slidePage": 5
    },
    {
      "id": "p01s03u06",
      "startTime": 296.629,
      "endTime": 307.408,
      "textEn": "These cases often involve complex medical records, multiple diagnoses, and long claims histories.",
      "textZh": "這些案件往往涉及複雜的醫療紀錄、多重診斷與較長的理賠歷史。同時，醫療成本壓力也讓更多財務責任轉向商業保險。",
      "slidePage": 5
    },
    {
      "id": "p01s03u07",
      "startTime": 307.408,
      "endTime": 318.054,
      "textEn": "At the same time, rising healthcare costs are shifting more financial responsibility onto private insurance.",
      "textZh": "",
      "slidePage": 5
    },
    {
      "id": "p01s03u08",
      "startTime": 318.054,
      "endTime": 328.154,
      "textEn": "People are increasingly relying on life and health insurance to cover medical and long-term care needs.",
      "textZh": "客戶越來越依賴壽險與健康險商品來支應醫療與長照需求。這表示理賠量增加，理賠複雜度也增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u09",
      "startTime": 328.154,
      "endTime": 339.471,
      "textEn": "On the slide, you can see the scale of that pressure: claim volume has grown by 56 percent.",
      "textZh": "",
      "slidePage": 5
    },
    {
      "id": "p01s03u10",
      "startTime": 339.471,
      "endTime": 344.528,
      "textEn": "The second pressure is operational.",
      "textZh": "第二個壓力來自作業面。高頻率、低嚴重度的理賠正在增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u11",
      "startTime": 344.528,
      "endTime": 355.143,
      "textEn": "At Cathay Life, we are talking about more than 1.6 million claims a year, with more high-frequency, low-severity claims entering the workflow.",
      "textZh": "",
      "slidePage": 5
    },
    {
      "id": "p01s03u12",
      "startTime": 355.143,
      "endTime": 360.966,
      "textEn": "Individually, they might not be large amounts.",
      "textZh": "單件金額可能不高，但合在一起會造成營運模式碎片化，因為每件仍需要文件審查、保單解釋、資料輸入與品質控管。",
      "slidePage": 5
    },
    {
      "id": "p01s03u13",
      "startTime": 360.966,
      "endTime": 370.624,
      "textEn": "But together they create real fragmentation, because every single case still needs document review, policy interpretation, data entry, and quality control.",
      "textZh": "",
      "slidePage": 5
    },
    {
      "id": "p01s03u14",
      "startTime": 370.624,
      "endTime": 381.598,
      "textEn": "The third pressure is talent. Claims adjudication requires experienced judgment across medical terminology, policy terms, fraud patterns, customer situations, and regulatory expectations.",
      "textZh": "第三個壓力來自人才。理賠核定需要跨越醫療術語、保單條款、詐欺型態、客戶情境與監理期待的經驗判斷。",
      "slidePage": 5
    },
    {
      "id": "p01s03u15",
      "startTime": 381.598,
      "endTime": 394.314,
      "textEn": "But experienced claims and risk professionals are hard to scale up quickly. So the challenge isn't just \"how do we process more claims?\"",
      "textZh": "但資深理賠與風險專業人才很難快速擴張。因此挑戰不只是「我們如何處理更多理賠？",
      "slidePage": 5
    },
    {
      "id": "p01s03u16",
      "startTime": 394.314,
      "endTime": 412.039,
      "textEn": "The deeper question is: \"When both complexity and volume are going up at the same time, how do we keep decision quality, risk control, and actuarial insight strong?\"",
      "textZh": "」更深層的挑戰是：「當複雜度與數量同時增加時，我們如何維持決策品質、風險控管與精算洞察？",
      "slidePage": 5
    },
    {
      "id": "p01s03u17",
      "startTime": 412.039,
      "endTime": 420.108,
      "textEn": "That's the starting point for our AI journey.",
      "textZh": "」這就是我們 AI 旅程的起點。",
      "slidePage": 5
    },
    {
      "id": "p01s03u18",
      "startTime": 420.108,
      "endTime": 440.126,
      "textEn": "Before we get into the technology, it's worth stepping back and asking: how did claims adjudication get to this point, and why aren't the old tools enough anymore?",
      "textZh": "所以在介紹技術之前，先退一步問：理賠核定是如何演進到今天的？為什麼過去有效的工具已經不夠？",
      "slidePage": 5
    },
    {
      "id": "p02s01u01",
      "startTime": 440.126,
      "endTime": 451.208,
      "textEn": "Claims processing has always evolved alongside the available technology. But each stage solved one problem while leaving another one behind.",
      "textZh": "理賠處理一直隨可用技術一起演進。但每一個階段解決一個問題，也留下另一個問題。",
      "slidePage": 6
    },
    {
      "id": "p02s01u02",
      "startTime": 451.208,
      "endTime": 462.277,
      "textEn": "In the IBM AS/400 era, claims processing was mostly data-entry driven. The main goal was to record claims accurately and get payments out.",
      "textZh": "在 IBM AS400 時代，理賠處理主要由資料輸入驅動。核心目標是準確記錄理賠並完成付款處理。",
      "slidePage": 6
    },
    {
      "id": "p02s01u03",
      "startTime": 462.277,
      "endTime": 472.371,
      "textEn": "In the core systems era, insurers digitized their workflows and introduced rule-based engines, which made standard claims more consistent.",
      "textZh": "在核心系統時代，保險公司將流程數位化並導入規則引擎，使標準案件更一致。",
      "slidePage": 6
    },
    {
      "id": "p02s01u04",
      "startTime": 472.371,
      "endTime": 485.377,
      "textEn": "In the data modeling era, machine learning models supported risk tagging, anomaly detection, and triage. But many of those models were still limited to scoring.",
      "textZh": "在資料模型時代，機器學習模型支援風險標籤、異常偵測與分流。但許多模型仍然只停留在評分。",
      "slidePage": 6
    },
    {
      "id": "p02s01u05",
      "startTime": 485.377,
      "endTime": 495.069,
      "textEn": "They could identify higher-risk cases, but they didn't always explain the evidence in a way that reviewers could immediately act on.",
      "textZh": "它們可以找出較高風險案件，卻不一定能用審查員可以立即使用的方式解釋證據。",
      "slidePage": 6
    },
    {
      "id": "p02s01u06",
      "startTime": 495.069,
      "endTime": 505.573,
      "textEn": "Now we're entering what we call the agentic AI era.",
      "textZh": "現在我們進入所謂 agentic AI 時代。AI 不再只是等待使用者提問的被動工具。",
      "slidePage": 6
    },
    {
      "id": "p02s01u07",
      "startTime": 505.573,
      "endTime": 512.959,
      "textEn": "AI is no longer just a passive tool waiting for someone to ask it a question.",
      "textZh": "",
      "slidePage": 6
    },
    {
      "id": "p02s01u08",
      "startTime": 512.959,
      "endTime": 529.509,
      "textEn": "It can actively take part in parts of the adjudication process — reading documents, pulling out evidence, comparing information against policy terms, spotting inconsistencies, and generating recommendations.",
      "textZh": "它可以主動參與部分核定流程：閱讀文件、擷取證據、比對保單條款、辨識不一致並產出建議。",
      "slidePage": 6
    },
    {
      "id": "p02s01u09",
      "startTime": 529.509,
      "endTime": 536.188,
      "textEn": "But this shift also raises an important governance question.",
      "textZh": "但這個轉變也帶來重要的治理問題。如果 AI 變得更主動，我們如何讓它可解釋、可控、可稽核，並且符合專業判斷？",
      "slidePage": 6
    },
    {
      "id": "p02s01u10",
      "startTime": 536.188,
      "endTime": 555.358,
      "textEn": "If AI is becoming more active, how do we keep it explainable, controllable, auditable, and aligned with professional judgment?",
      "textZh": "",
      "slidePage": 6
    },
    {
      "id": "p02s01u11",
      "startTime": 555.358,
      "endTime": 563.119,
      "textEn": "Our answer isn't full automation without any oversight.",
      "textZh": "我們的答案不是沒有監督的全自動化。我們的答案是 human-in-the-loop 的 agentic AI：AI 執行結構化分析並準備證據，而人類審查員保留最終決策權。",
      "slidePage": 6
    },
    {
      "id": "p02s01u12",
      "startTime": 563.119,
      "endTime": 572.975,
      "textEn": "It's human-in-the-loop agentic AI: AI does the structured analysis and prepares the evidence, while human reviewers keep the final decision authority.",
      "textZh": "",
      "slidePage": 6
    },
    {
      "id": "p02s01u13",
      "startTime": 572.975,
      "endTime": 589.755,
      "textEn": "To see why that matters, let's look at the actual claims journey.",
      "textZh": "要看出這為何重要，接下來看實際理賠旅程：複雜度在哪裡進入流程？有價值的資訊又從哪裡開始消失？",
      "slidePage": 6
    },
    {
      "id": "p02s01u14",
      "startTime": 589.755,
      "endTime": 604.168,
      "textEn": "Where does complexity enter the workflow, and where does valuable information start to disappear?",
      "textZh": "",
      "slidePage": 6
    },
    {
      "id": "p02s02u01",
      "startTime": 604.168,
      "endTime": 617.29,
      "textEn": "Before we explain the new framework, let's look at the traditional claims review process. In a typical flow, a customer submits their claim documents.",
      "textZh": "接著看實際理賠流程。",
      "slidePage": 7
    },
    {
      "id": "p02s02u02",
      "startTime": 617.29,
      "endTime": 631.54,
      "textEn": "The slide breaks this into six steps: intake, registration and case creation, case assignment, review, decision, and finally closure and archiving.",
      "textZh": "典型流程包含客戶提交文件、建立案件、確認保單資訊、檢視醫療文件、判斷是否承保、計算給付、做風險檢查，最後核付或拒付。",
      "slidePage": 7
    },
    {
      "id": "p02s02u03",
      "startTime": 631.54,
      "endTime": 638.169,
      "textEn": "That sounds pretty straightforward — but in practice, many steps require a lot of interpretation.",
      "textZh": "典型流程包含客戶提交文件、建立案件、確認保單資訊、檢視醫療文件、判斷是否承保、計算給付、做風險檢查，最後核付或拒付。",
      "slidePage": 7
    },
    {
      "id": "p02s02u04",
      "startTime": 638.169,
      "endTime": 650.836,
      "textEn": "A medical certificate might have free-text descriptions, abbreviations, different hospital formats, or Traditional Chinese medical terminology.",
      "textZh": "",
      "slidePage": 7
    },
    {
      "id": "p02s02u05",
      "startTime": 650.836,
      "endTime": 659.665,
      "textEn": "A diagnosis might need to be mapped to an internal disease category.",
      "textZh": "這聽起來很直線，但實務上需要大量解讀。",
      "slidePage": 7
    },
    {
      "id": "p02s02u06",
      "startTime": 659.665,
      "endTime": 668.454,
      "textEn": "A procedure or hospitalization period might need to be checked against policy definitions, exclusions, deductibles, or benefit limits.",
      "textZh": "",
      "slidePage": 7
    },
    {
      "id": "p02s02u07",
      "startTime": 668.454,
      "endTime": 678.036,
      "textEn": "And here's the key challenge: most of the most valuable information isn't born in a structured format.",
      "textZh": "這聽起來很直線，但實務上需要大量解讀。",
      "slidePage": 7
    },
    {
      "id": "p02s02u08",
      "startTime": 678.036,
      "endTime": 690.04,
      "textEn": "If we only capture the final outcome — approved or declined, or the final payment amount — we lose a huge amount of explanatory information along the way.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u09",
      "startTime": 690.04,
      "endTime": 702.293,
      "textEn": "For operations, that means more manual work. For actuaries, it means weaker data granularity.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u10",
      "startTime": 702.293,
      "endTime": 715.209,
      "textEn": "We might know the claim result, but we may not fully know the cause, the medical pathway, the detailed risk factors, or what evidence was behind the decision.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u11",
      "startTime": 715.209,
      "endTime": 726.286,
      "textEn": "That's why we believe the claims process needs to be redesigned — not just as a payment workflow, but as a data transformation workflow too.",
      "textZh": "若只留下最後是否核付與給付金額，就會失去很多解釋性資訊。",
      "slidePage": 7
    },
    {
      "id": "p02s02u12",
      "startTime": 726.286,
      "endTime": 742.007,
      "textEn": "If we look at it through that lens, the first question becomes: how early can we capture useful information, and how much structure can we create before the case even reaches a human reviewer?",
      "textZh": "若只留下最後是否核付與給付金額，就會失去很多解釋性資訊。",
      "slidePage": 7
    },
    {
      "id": "p02s03u01",
      "startTime": 742.007,
      "endTime": 750.829,
      "textEn": "The first step is digital claims submission.",
      "textZh": "數位申請是第一步。",
      "slidePage": 8
    },
    {
      "id": "p02s03u02",
      "startTime": 750.829,
      "endTime": 765.029,
      "textEn": "As the app screens show, customers can start a claims application, upload documents, check claims results, and review application details directly through the mobile app.",
      "textZh": "",
      "slidePage": 8
    },
    {
      "id": "p02s03u03",
      "startTime": 765.029,
      "endTime": 774.726,
      "textEn": "This is great for customer convenience and it shortens turnaround time. But digital submission alone doesn't solve the whole problem.",
      "textZh": "客戶可透過手機提交理賠，減少紙本並縮短前端流程。",
      "slidePage": 8
    },
    {
      "id": "p02s03u04",
      "startTime": 774.726,
      "endTime": 782.395,
      "textEn": "A claim might arrive digitally, but the supporting medical documents are still unstructured.",
      "textZh": "但數位化本身不等於資料已經可分析。",
      "slidePage": 8
    },
    {
      "id": "p02s03u05",
      "startTime": 782.395,
      "endTime": 793.962,
      "textEn": "They might be scanned images, PDFs, hospital certificates, receipts, diagnosis documents, or discharge summaries. So digitalization is necessary — but it's not enough on its own.",
      "textZh": "文件可能仍是掃描影像、PDF、診斷證明、收據或出院摘要。",
      "slidePage": 8
    },
    {
      "id": "p02s03u06",
      "startTime": 793.962,
      "endTime": 799.934,
      "textEn": "It gets us the documents faster, but it doesn't automatically create analytical value.",
      "textZh": "因此我們還需要把文件轉成結構化、可靠、可解釋的資料。",
      "slidePage": 8
    },
    {
      "id": "p02s03u07",
      "startTime": 799.934,
      "endTime": 812.157,
      "textEn": "To create that analytical value, we need to convert those documents into structured, reliable, and explainable data.",
      "textZh": "因此我們還需要把文件轉成結構化、可靠、可解釋的資料。",
      "slidePage": 8
    },
    {
      "id": "p02s03u08",
      "startTime": 812.157,
      "endTime": 822.291,
      "textEn": "That's where OCR, large language models, and agentic AI start to play a role.",
      "textZh": "OCR、大型語言模型與 agentic AI 就是在這裡開始發揮作用。",
      "slidePage": 8
    },
    {
      "id": "p02s03u09",
      "startTime": 822.291,
      "endTime": 831.462,
      "textEn": "OCR converts images to machine-readable text; LLMs understand the meaning of what's in those documents.",
      "textZh": "",
      "slidePage": 8
    },
    {
      "id": "p02s03u10",
      "startTime": 831.462,
      "endTime": 849.991,
      "textEn": "But once documents arrive digitally, we still face a second question: can AI understand what's inside those documents well enough to support the decisions that come next?",
      "textZh": "OCR、大型語言模型與 agentic AI 就是在這裡開始發揮作用。",
      "slidePage": 8
    },
    {
      "id": "p03s01u01",
      "startTime": 849.991,
      "endTime": 861.677,
      "textEn": "After submission, the next step is case registration. Traditionally, staff would review documents and manually type key fields into the claims system.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 9
    },
    {
      "id": "p03s01u02",
      "startTime": 861.677,
      "endTime": 871.124,
      "textEn": "AI-driven structured data extraction changes that step. In our framework, OCR first converts document images into machine-readable text.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 9
    },
    {
      "id": "p03s01u03",
      "startTime": 871.124,
      "endTime": 879.912,
      "textEn": "Then LLM-based extraction identifies fields like diagnosis, treatment dates, hospital name, surgery information, claim amount, and other relevant details.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u04",
      "startTime": 879.912,
      "endTime": 886.383,
      "textEn": "But we don't treat extraction as a simple copy-and-paste task.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u05",
      "startTime": 886.383,
      "endTime": 904.901,
      "textEn": "The AI needs to distinguish past medical history from the current claim event, a suspected diagnosis from a confirmed one, and one hospital's document style from another.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u06",
      "startTime": 904.901,
      "endTime": 912.747,
      "textEn": "For Traditional Chinese medical documentation, this is especially important.",
      "textZh": "但擷取不是單純複製貼上，AI 必須理解脈絡，例如區分既往病史與本次事故、疑似診斷與確診，以及不同醫院的文件風格。",
      "slidePage": 9
    },
    {
      "id": "p03s01u07",
      "startTime": 912.747,
      "endTime": 925.868,
      "textEn": "The language is very domain-specific, and the same clinical concept can show up in completely different wording across different hospitals.",
      "textZh": "",
      "slidePage": 9
    },
    {
      "id": "p03s01u08",
      "startTime": 925.868,
      "endTime": 935.355,
      "textEn": "By structuring this information early, we create a much better foundation for downstream triage, review, risk analysis, and actuarial use.",
      "textZh": "但擷取不是單純複製貼上，AI 必須理解脈絡，例如區分既往病史與本次事故、疑似診斷與確診，以及不同醫院的文件風格。",
      "slidePage": 9
    },
    {
      "id": "p03s01u09",
      "startTime": 935.355,
      "endTime": 946.846,
      "textEn": "Once that foundation is in place, the workflow can move from simple case creation to something more decision-oriented: which cases need more attention, and why?",
      "textZh": "繁體中文醫療文件尤其需要這種脈絡理解。",
      "slidePage": 9
    },
    {
      "id": "p03s02u01",
      "startTime": 946.846,
      "endTime": 958.067,
      "textEn": "Once case data is structured, we can move into claims triage. Machine learning models can assess claim risk and help route cases.",
      "textZh": "有了結構化資料後，就能進入理賠分流。",
      "slidePage": 10
    },
    {
      "id": "p03s02u02",
      "startTime": 958.067,
      "endTime": 969.151,
      "textEn": "Low-risk, straightforward cases can go through a more streamlined workflow, while complex or suspicious cases get sent to experienced reviewers for a deeper look.",
      "textZh": "機器學習模型可以評估風險並支援案件路由，低風險案件走簡化流程，複雜或可疑案件交給資深審查員。",
      "slidePage": 10
    },
    {
      "id": "p03s02u03",
      "startTime": 969.151,
      "endTime": 980.275,
      "textEn": "This kind of triage helps operations allocate human expertise more effectively. But there's an important limitation: a risk score by itself isn't enough.",
      "textZh": "機器學習模型可以評估風險並支援案件路由，低風險案件走簡化流程，複雜或可疑案件交給資深審查員。",
      "slidePage": 10
    },
    {
      "id": "p03s02u04",
      "startTime": 980.275,
      "endTime": 991.512,
      "textEn": "If a model says a case has a risk score of 82 out of 100, the claims reviewer still needs to know why.",
      "textZh": "但風險分數本身不夠。",
      "slidePage": 10
    },
    {
      "id": "p03s02u05",
      "startTime": 991.512,
      "endTime": 1005.592,
      "textEn": "Is the risk coming from a diagnosis inconsistency? Repeated claims? A provider pattern? Unusual timing? Policy duration? Medical history? Or a document inconsistency?",
      "textZh": "如果模型說風險分數是 82，審查員仍需要知道原因：是診斷不一致？",
      "slidePage": 10
    },
    {
      "id": "p03s02u06",
      "startTime": 1005.592,
      "endTime": 1015.277,
      "textEn": "This is where traditional machine learning and agentic AI can work together. Machine learning is great at spotting patterns at scale.",
      "textZh": "重複理賠？",
      "slidePage": 10
    },
    {
      "id": "p03s02u07",
      "startTime": 1015.277,
      "endTime": 1023.606,
      "textEn": "Agentic AI can gather the evidence, organize the reasoning, and lay out the basis for review.",
      "textZh": "重複理賠？醫療院所模式？保單期間？病史？",
      "slidePage": 10
    },
    {
      "id": "p03s02u08",
      "startTime": 1023.606,
      "endTime": 1030.289,
      "textEn": "The goal isn't to hand a reviewer a black-box score and walk away.",
      "textZh": "",
      "slidePage": 10
    },
    {
      "id": "p03s02u09",
      "startTime": 1030.289,
      "endTime": 1040.219,
      "textEn": "The goal is to help them make faster, better-informed, more consistent decisions. This leads naturally to the next design question.",
      "textZh": "還是文件不一致？",
      "slidePage": 10
    },
    {
      "id": "p03s02u10",
      "startTime": 1040.219,
      "endTime": 1055.012,
      "textEn": "If a case is routed to a human reviewer, what should that review environment look like — so that human expertise is used where it actually matters most?",
      "textZh": "這也是傳統機器學習與 agentic AI 可以互補的地方。",
      "slidePage": 10
    },
    {
      "id": "p03s03u01",
      "startTime": 1055.012,
      "endTime": 1062.612,
      "textEn": "For cases that need human review, we built a unified smart claims platform.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 11
    },
    {
      "id": "p03s03u02",
      "startTime": 1062.612,
      "endTime": 1075.999,
      "textEn": "The idea is to bring multi-source data into one review workbench, so reviewers don't have to jump between systems, documents, policy references, customer records, risk tags, and decision notes.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 11
    },
    {
      "id": "p03s03u03",
      "startTime": 1075.999,
      "endTime": 1084.306,
      "textEn": "Everything is in one place: claims information, risk detection results, quick access to related documents, and decision support.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u04",
      "startTime": 1084.306,
      "endTime": 1093.242,
      "textEn": "This matters because operational efficiency isn't only about automating tasks. It's also about reducing cognitive load.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u05",
      "startTime": 1093.242,
      "endTime": 1101.083,
      "textEn": "When information is scattered across systems, reviewers spend a lot of time just searching, comparing, and reconciling.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u06",
      "startTime": 1101.083,
      "endTime": 1106.822,
      "textEn": "When it's organized, they can spend more time on actual professional judgment.",
      "textZh": "",
      "slidePage": 11
    },
    {
      "id": "p03s03u07",
      "startTime": 1106.822,
      "endTime": 1117.157,
      "textEn": "In other words, the system shouldn't just process data. It should create a better decision environment for experts.",
      "textZh": "這不只是提升效率，也是降低認知負擔。",
      "slidePage": 11
    },
    {
      "id": "p03s03u08",
      "startTime": 1117.157,
      "endTime": 1128.677,
      "textEn": "Once the reviewer is in that environment, AI support has to appear at the right moment. The question isn't just \"Can AI analyze this case?\"",
      "textZh": "當資訊被整理好，專家就能把更多時間放在真正需要判斷的地方。",
      "slidePage": 11
    },
    {
      "id": "p03s03u09",
      "startTime": 1128.677,
      "endTime": 1138.31,
      "textEn": "It's \"Can AI help the reviewer think more clearly about this case?\"",
      "textZh": "當資訊被整理好，專家就能把更多時間放在真正需要判斷的地方。",
      "slidePage": 11
    },
    {
      "id": "p04s01u01",
      "startTime": 1138.31,
      "endTime": 1148.692,
      "textEn": "Inside the review workbench, we embed several AI-assisted features. The first is risk tagging.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u02",
      "startTime": 1148.692,
      "endTime": 1161.253,
      "textEn": "AI highlights risk indicators and helps reviewers understand which parts of the case deserve attention. The second is decision support.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u03",
      "startTime": 1161.253,
      "endTime": 1180.402,
      "textEn": "AI summarizes the relevant medical facts, policy terms, and claim conditions, then organizes them into a review-ready format. The third is relationship graph analysis.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u04",
      "startTime": 1180.402,
      "endTime": 1191.478,
      "textEn": "This helps reviewers see connections among claimants, providers, agents, prior claims, or other related parties — when that kind of analysis is relevant and permitted.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u05",
      "startTime": 1191.478,
      "endTime": 1202.695,
      "textEn": "These features aren't separate from the claims workflow. They're embedded right where the reviewer is already working.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u06",
      "startTime": 1202.695,
      "endTime": 1211.72,
      "textEn": "This matters because AI adoption isn't just a modeling problem.",
      "textZh": "",
      "slidePage": 12
    },
    {
      "id": "p04s01u07",
      "startTime": 1211.72,
      "endTime": 1220.961,
      "textEn": "It's also a workflow design problem. If AI output appears somewhere outside the normal workflow, people may just ignore it.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u08",
      "startTime": 1220.961,
      "endTime": 1231.582,
      "textEn": "But if it's embedded at the right moment, in the right interface, with the right evidence — it becomes part of the decision process.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s01u09",
      "startTime": 1231.582,
      "endTime": 1241.702,
      "textEn": "That's the point where AI stops being just a feature inside a system and starts becoming part of the actual decision architecture.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s01u10",
      "startTime": 1241.702,
      "endTime": 1246.78,
      "textEn": "And that brings us to the bigger question on this slide.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s02u01",
      "startTime": 1246.78,
      "endTime": 1263.587,
      "textEn": "Now we're at a key turning point in our presentation. How does AI evolve from a tool into a collaborative decision-making system?",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 13
    },
    {
      "id": "p04s02u02",
      "startTime": 1263.587,
      "endTime": 1274.373,
      "textEn": "In the early stage, AI works like a query tool. A user asks a question, and AI responds.",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 13
    },
    {
      "id": "p04s02u03",
      "startTime": 1274.373,
      "endTime": 1284.549,
      "textEn": "That's useful, but it depends heavily on the user's ability to ask the right question.",
      "textZh": "早期 AI 是被動的，使用者問問題，AI 回答。",
      "slidePage": 13
    },
    {
      "id": "p04s02u04",
      "startTime": 1284.549,
      "endTime": 1294.071,
      "textEn": "In the next stage, AI becomes more like a digital specialist.",
      "textZh": "",
      "slidePage": 13
    },
    {
      "id": "p04s02u05",
      "startTime": 1294.071,
      "endTime": 1303.771,
      "textEn": "It understands the task, takes initiative, detects missing information, flags inconsistencies, suggests next steps, and prepares analysis before you even ask.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 13
    },
    {
      "id": "p04s02u06",
      "startTime": 1303.771,
      "endTime": 1328.021,
      "textEn": "And in the most advanced stage, AI becomes more like an intelligent team: one agent extracts medical information, another interprets policy terms, another checks benefit rules or risk indicators, and another prepares the explanation and decision report.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 13
    },
    {
      "id": "p04s02u07",
      "startTime": 1328.021,
      "endTime": 1338.55,
      "textEn": "This multi-agent design makes sense because claims adjudication isn't a single task. It's a sequence of specialized reasoning steps.",
      "textZh": "更進一步則是多代理協作：不同 agent 各自負責醫療擷取、保單解讀、給付規則、風險指標與報告產生。",
      "slidePage": 13
    },
    {
      "id": "p04s02u08",
      "startTime": 1338.55,
      "endTime": 1349.154,
      "textEn": "But we should be careful with the word \"collaborative.\" We don't mean that AI has the same authority as a human claims professional.",
      "textZh": "更進一步則是多代理協作：不同 agent 各自負責醫療擷取、保單解讀、給付規則、風險指標與報告產生。",
      "slidePage": 13
    },
    {
      "id": "p04s02u09",
      "startTime": 1349.154,
      "endTime": 1360.681,
      "textEn": "We mean that AI collaborates by doing evidence preparation, consistency checking, and structured reasoning — while humans provide the judgment, the accountability, and the final sign-off.",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s02u10",
      "startTime": 1360.681,
      "endTime": 1368.531,
      "textEn": "This is the foundation of our human-in-the-loop design. And it's also where trust becomes the central issue.",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s02u11",
      "startTime": 1368.531,
      "endTime": 1387.886,
      "textEn": "If AI is going to be part of a decision, how do we design the workflow so that people can question it, verify it, and still be accountable for the final outcome?",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s03u01",
      "startTime": 1387.886,
      "endTime": 1398.488,
      "textEn": "This slide shows the concept of human-in-the-loop claims pre-adjudication. Agentic AI provides the analysis and decision recommendations. Human reviewers make the final calls.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u02",
      "startTime": 1398.488,
      "endTime": 1410.439,
      "textEn": "The distinction between pre-adjudication and adjudication is really important here. We're not saying AI independently approves or rejects complex claims.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u03",
      "startTime": 1410.439,
      "endTime": 1421.027,
      "textEn": "Instead, AI prepares a pre-assessment: the reviewed documents, extracted facts, relevant policy terms, supporting evidence, things that need attention, and a suggested recommendation.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u04",
      "startTime": 1421.027,
      "endTime": 1431.099,
      "textEn": "The human reviewer then evaluates the evidence and the recommendation. If the output is complete, the reviewer can move faster.",
      "textZh": "這裡的預審不是讓 AI 獨立核准或拒絕複雜理賠，而是整理文件、擷取事實、找出相關條款、列出證據、提示待注意事項並提出建議。",
      "slidePage": 14
    },
    {
      "id": "p04s03u05",
      "startTime": 1431.099,
      "endTime": 1444.099,
      "textEn": "If something looks off or inconsistent, the reviewer can challenge it, correct it, or ask for more investigation. This design gives us two real benefits.",
      "textZh": "這裡的預審不是讓 AI 獨立核准或拒絕複雜理賠，而是整理文件、擷取事實、找出相關條款、列出證據、提示待注意事項並提出建議。",
      "slidePage": 14
    },
    {
      "id": "p04s03u06",
      "startTime": 1444.099,
      "endTime": 1454.228,
      "textEn": "First, it improves efficiency because the routine evidence preparation is accelerated. Second, it improves governance because the AI's reasoning pathway is visible.",
      "textZh": "若輸出完整，審查員可更快處理；若有疑問或不一致，審查員可以挑戰、修正或要求補充調查。",
      "slidePage": 14
    },
    {
      "id": "p04s03u07",
      "startTime": 1454.228,
      "endTime": 1469.516,
      "textEn": "The reviewer can see not just the recommendation, but the basis for that recommendation. In regulated insurance operations, explainability isn't a nice-to-have.",
      "textZh": "若輸出完整，審查員可更快處理；若有疑問或不一致，審查員可以挑戰、修正或要求補充調查。",
      "slidePage": 14
    },
    {
      "id": "p04s03u08",
      "startTime": 1469.516,
      "endTime": 1485.22,
      "textEn": "It's a condition for trust. And that raises a very practical question: what exactly should AI explain? A recommendation alone isn't enough.",
      "textZh": "在受監理的保險業，解釋性不是加分項，而是信任的前提。",
      "slidePage": 14
    },
    {
      "id": "p04s03u09",
      "startTime": 1485.22,
      "endTime": 1490.179,
      "textEn": "The reviewer needs to see the reasoning pathway behind it.",
      "textZh": "在受監理的保險業，解釋性不是加分項，而是信任的前提。",
      "slidePage": 14
    },
    {
      "id": "p04s03u10",
      "startTime": 1490.179,
      "endTime": 1503.558,
      "textEn": "And the bottom of this slide hints at why this matters for actuaries too: better risk identification, more precise rate setting, stronger product design, and more controllable loss costs.",
      "textZh": "",
      "slidePage": 14
    },
    {
      "id": "p05s01u01",
      "startTime": 1503.558,
      "endTime": 1513.931,
      "textEn": "The AI reasoning pathway is designed to support explainable, trustworthy claims decision-making. A simple LLM answer just isn't enough for claims adjudication.",
      "textZh": "AI 推理路徑的目標是支援可解釋且可信任的理賠決策。",
      "slidePage": 15
    },
    {
      "id": "p05s01u02",
      "startTime": 1513.931,
      "endTime": 1524.944,
      "textEn": "If the system simply says, \"This claim should be paid\" — the reviewer can't rely on that. We need a traceable reasoning pathway.",
      "textZh": "單純的 LLM 答案不夠，如果系統只說『這件應該給付』，審查員無法依賴它。",
      "slidePage": 15
    },
    {
      "id": "p05s01u03",
      "startTime": 1524.944,
      "endTime": 1542.112,
      "textEn": "For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.",
      "textZh": "單純的 LLM 答案不夠，如果系統只說『這件應該給付』，審查員無法依賴它。",
      "slidePage": 15
    },
    {
      "id": "p05s01u04",
      "startTime": 1542.112,
      "endTime": 1552.416,
      "textEn": "Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.",
      "textZh": "系統必須說明用了哪些資訊、如何解讀、哪些條款相關、在哪裡偵測到不一致，以及為什麼做出建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u05",
      "startTime": 1552.416,
      "endTime": 1559.156,
      "textEn": "The AI checks the medical facts against policy terms and medical guidelines.",
      "textZh": "",
      "slidePage": 15
    },
    {
      "id": "p05s01u06",
      "startTime": 1559.156,
      "endTime": 1575.767,
      "textEn": "It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.",
      "textZh": "系統必須說明用了哪些資訊、如何解讀、哪些條款相關、在哪裡偵測到不一致，以及為什麼做出建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u07",
      "startTime": 1575.767,
      "endTime": 1590.667,
      "textEn": "For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s01u08",
      "startTime": 1590.667,
      "endTime": 1599.914,
      "textEn": "And for actuaries, it creates more granular data about the cause and characteristics of claims.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s01u09",
      "startTime": 1599.914,
      "endTime": 1608.231,
      "textEn": "With these requirements clear, we can now introduce the system we built to pull all the pieces together.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s02u01",
      "startTime": 1608.231,
      "endTime": 1615.62,
      "textEn": "To bring these ideas together, we developed CAELIA — the Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u02",
      "startTime": 1615.62,
      "endTime": 1625.792,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u03",
      "startTime": 1625.792,
      "endTime": 1634.083,
      "textEn": "It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u04",
      "startTime": 1634.083,
      "endTime": 1639.904,
      "textEn": "The objective isn't to make AI look impressive.",
      "textZh": "",
      "slidePage": 16
    },
    {
      "id": "p05s02u05",
      "startTime": 1639.904,
      "endTime": 1651.466,
      "textEn": "The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.",
      "textZh": "它不只是一個模型，而是一個引擎，結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查。",
      "slidePage": 16
    },
    {
      "id": "p05s02u06",
      "startTime": 1651.466,
      "endTime": 1664.256,
      "textEn": "In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.",
      "textZh": "它不只是一個模型，而是一個引擎，結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查。",
      "slidePage": 16
    },
    {
      "id": "p05s02u07",
      "startTime": 1664.256,
      "endTime": 1673.959,
      "textEn": "The reviewer stays in control — but they're starting from a much richer, better-organized evidence package. The next question is about architecture.",
      "textZh": "目標不是讓 AI 看起來很厲害，而是讓理賠決策更透明、更一致、更具分析價值。",
      "slidePage": 16
    },
    {
      "id": "p05s02u08",
      "startTime": 1673.959,
      "endTime": 1688.016,
      "textEn": "If claims adjudication is made up of many specialized reasoning tasks, should one model try to do everything?",
      "textZh": "目標不是讓 AI 看起來很厲害，而是讓理賠決策更透明、更一致、更具分析價值。",
      "slidePage": 16
    },
    {
      "id": "p05s02u09",
      "startTime": 1688.016,
      "endTime": 1699.048,
      "textEn": "Or should different agents each take responsibility for different parts of the work?",
      "textZh": "",
      "slidePage": 16
    },
    {
      "id": "p05s03u01",
      "startTime": 1699.048,
      "endTime": 1707.816,
      "textEn": "At a high level, CAELIA uses a multi-agent architecture. Different agents are responsible for different parts of the workflow.",
      "textZh": "CAELIA 採用多代理架構。",
      "slidePage": 17
    },
    {
      "id": "p05s03u02",
      "startTime": 1707.816,
      "endTime": 1716.941,
      "textEn": "A document extraction agent picks out structured fields from medical records and claim forms.",
      "textZh": "CAELIA 採用多代理架構。",
      "slidePage": 17
    },
    {
      "id": "p05s03u03",
      "startTime": 1716.941,
      "endTime": 1727.274,
      "textEn": "A medical understanding agent interprets diagnoses, treatments, hospitalization details, and clinical context.",
      "textZh": "",
      "slidePage": 17
    },
    {
      "id": "p05s03u04",
      "startTime": 1727.274,
      "endTime": 1740.194,
      "textEn": "A policy interpretation agent retrieves relevant policy terms, benefit definitions, exclusions, and claim conditions. A risk analysis agent reviews risk indicators and flags possible inconsistencies.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u05",
      "startTime": 1740.194,
      "endTime": 1751.281,
      "textEn": "And a reasoning and report agent combines all the evidence and produces a structured pre-assessment report. This modular design has a few key advantages.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u06",
      "startTime": 1751.281,
      "endTime": 1755.637,
      "textEn": "First, it's easier to govern.",
      "textZh": "",
      "slidePage": 17
    },
    {
      "id": "p05s03u07",
      "startTime": 1755.637,
      "endTime": 1767.055,
      "textEn": "If there's an issue with policy interpretation or medical extraction, we can evaluate that component on its own. Second, it supports explainability.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u08",
      "startTime": 1767.055,
      "endTime": 1774.539,
      "textEn": "Each agent contributes a specific piece of the reasoning pathway. Third, it supports continuous improvement.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u09",
      "startTime": 1774.539,
      "endTime": 1784.693,
      "textEn": "As policy knowledge, medical terminology, or fraud patterns evolve, we can update the relevant components without having to redesign the whole system.",
      "textZh": "這讓系統更容易治理、解釋與持續改善。",
      "slidePage": 17
    },
    {
      "id": "p05s03u10",
      "startTime": 1784.693,
      "endTime": 1797.046,
      "textEn": "But architecture only becomes useful when it changes the reviewer's day-to-day work. So let's look at the practical output of this multi-agent process.",
      "textZh": "這讓系統更容易治理、解釋與持續改善。",
      "slidePage": 17
    },
    {
      "id": "p06s01u01",
      "startTime": 1797.046,
      "endTime": 1803.863,
      "textEn": "The output of CAELIA is an AI pre-assessment decision report.",
      "textZh": "CAELIA 的輸出是 AI 預審決策報告。",
      "slidePage": 18
    },
    {
      "id": "p06s01u02",
      "startTime": 1803.863,
      "endTime": 1811.711,
      "textEn": "This report is designed to take raw claims data and turn it into a traceable decision recommendation.",
      "textZh": "",
      "slidePage": 18
    },
    {
      "id": "p06s01u03",
      "startTime": 1811.711,
      "endTime": 1825.697,
      "textEn": "A good report should answer several practical questions for the reviewer. What's the claim event? What medical facts were extracted? What policy benefits might apply?",
      "textZh": "好的報告要回答審查員的實務問題：理賠事件是什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s01u04",
      "startTime": 1825.697,
      "endTime": 1842.064,
      "textEn": "What evidence supports the recommendation? What's still uncertain? And what should the human reviewer check before making the final call?",
      "textZh": "擷取到哪些醫療事實？可能適用哪些給付？",
      "slidePage": 18
    },
    {
      "id": "p06s01u05",
      "startTime": 1842.064,
      "endTime": 1856.818,
      "textEn": "In the example, the report shows confidence scores for different parts of the case, such as 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.",
      "textZh": "支持建議的證據是什麼？還有哪些不確定？",
      "slidePage": 18
    },
    {
      "id": "p06s01u06",
      "startTime": 1856.818,
      "endTime": 1869.902,
      "textEn": "This is especially important when AI is used in regulated financial services. We need to be able to show that AI output isn't arbitrary.",
      "textZh": "人類審查員在最後決策前應該檢查什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s01u07",
      "startTime": 1869.902,
      "endTime": 1880.522,
      "textEn": "It has to be grounded in evidence, policy knowledge, and human oversight. Up to this point, we've mostly talked about operations and governance.",
      "textZh": "報告也支援稽核，讓組織日後能回溯當時可用資訊、推理方式與決策脈絡。",
      "slidePage": 18
    },
    {
      "id": "p06s01u08",
      "startTime": 1880.522,
      "endTime": 1893.608,
      "textEn": "Now I'd like to shift the lens and ask: what does all this mean for actuaries?",
      "textZh": "報告也支援稽核，讓組織日後能回溯當時可用資訊、推理方式與決策脈絡。",
      "slidePage": 18
    },
    {
      "id": "p06s02u01",
      "startTime": 1893.608,
      "endTime": 1909.135,
      "textEn": "Let's move beyond operations and talk about actuarial value. Claims records are often treated like operational byproducts. They exist because we need to pay claims.",
      "textZh": "接著從精算角度看。理賠記錄常被視為營運副產品，因為我們需要付款才產生它。",
      "slidePage": 19
    },
    {
      "id": "p06s02u02",
      "startTime": 1909.135,
      "endTime": 1919.753,
      "textEn": "But if we structure them properly, they become actuarial-ready data. This is one of the most important points we want to make today.",
      "textZh": "理賠記錄常被視為營運副產品，因為我們需要付款才產生它。",
      "slidePage": 19
    },
    {
      "id": "p06s02u03",
      "startTime": 1919.753,
      "endTime": 1931.294,
      "textEn": "The structured output has three layers. The first is the result layer: what was approved, denied, or left pending, and what benefit item was involved.",
      "textZh": "但如果能妥善結構化，它就會變成 actuarial-ready data。",
      "slidePage": 19
    },
    {
      "id": "p06s02u04",
      "startTime": 1931.294,
      "endTime": 1944.744,
      "textEn": "The second is the policy and decision layer: which policy terms applied, whether the benefit condition matched, and whether exclusions were triggered.",
      "textZh": "但如果能妥善結構化，它就會變成 actuarial-ready data。",
      "slidePage": 19
    },
    {
      "id": "p06s02u05",
      "startTime": 1944.744,
      "endTime": 1953.862,
      "textEn": "The third is the medical assessment layer: diagnosis codes, procedures, treatment information, medical necessity, and clinical justification.",
      "textZh": "傳統系統常記錄理賠類型、金額、決策狀態、給付代碼與處理日期，但不一定能解釋為什麼發生理賠。",
      "slidePage": 19
    },
    {
      "id": "p06s02u06",
      "startTime": 1953.862,
      "endTime": 1966.192,
      "textEn": "With proper governance, this information can support pricing, reserving, experience studies, risk segmentation, and product monitoring.",
      "textZh": "傳統系統常記錄理賠類型、金額、決策狀態、給付代碼與處理日期，但不一定能解釋為什麼發生理賠。",
      "slidePage": 19
    },
    {
      "id": "p06s02u07",
      "startTime": 1966.192,
      "endTime": 1972.581,
      "textEn": "In other words, AI doesn't just make claims operations faster.",
      "textZh": "",
      "slidePage": 19
    },
    {
      "id": "p06s02u08",
      "startTime": 1972.581,
      "endTime": 1982.266,
      "textEn": "It expands the data available for actuarial analysis. And this is especially valuable under IFRS 17 and modern risk management frameworks.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u09",
      "startTime": 1982.266,
      "endTime": 1993.444,
      "textEn": "Insurers need faster feedback loops between actual claims experience and their assumptions. If claims data stays unstructured, that feedback loop is slow.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u10",
      "startTime": 1993.444,
      "endTime": 2003.275,
      "textEn": "But if claims data becomes structured earlier in the process, actuaries can respond more quickly to emerging experience.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u11",
      "startTime": 2003.275,
      "endTime": 2017.14,
      "textEn": "This brings us to a familiar actuarial question — but now with a much better data foundation: are we only measuring what happened, or are we also learning why it happened?",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s03u01",
      "startTime": 2017.14,
      "endTime": 2028.21,
      "textEn": "Experience analysis usually starts with outcomes. How many claims happened? How much did we pay? What was the incidence rate? What was the severity?",
      "textZh": "經驗分析常從結果開始：發生多少理賠？給付多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u02",
      "startTime": 2028.21,
      "endTime": 2041.558,
      "textEn": "How did actual experience compare to what we expected? These are essential questions. But more and more, insurers also need to understand the causes.",
      "textZh": "發生率與嚴重度如何？實際經驗和預期差多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u03",
      "startTime": 2041.558,
      "endTime": 2045.801,
      "textEn": "Why did incidence change?",
      "textZh": "",
      "slidePage": 20
    },
    {
      "id": "p06s03u04",
      "startTime": 2045.801,
      "endTime": 2055.017,
      "textEn": "Was it driven by aging? Product mix? Changes in medical practice? Customer behavior? Provider behavior? Fraud patterns? Or benefit design?",
      "textZh": "這些問題很重要，但保險公司也越來越需要知道原因。",
      "slidePage": 20
    },
    {
      "id": "p06s03u05",
      "startTime": 2055.017,
      "endTime": 2067.284,
      "textEn": "Are there early signals that assumptions need to be updated?",
      "textZh": "",
      "slidePage": 20
    },
    {
      "id": "p06s03u06",
      "startTime": 2067.284,
      "endTime": 2078.631,
      "textEn": "Take the example on this slide: an 80-year-old male has an accidental death claim after a fall.",
      "textZh": "發生率變化是高齡化、商品組合、醫療行為、客戶行為、院所行為、詐欺模式，還是給付設計造成的？",
      "slidePage": 20
    },
    {
      "id": "p06s03u07",
      "startTime": 2078.631,
      "endTime": 2091.636,
      "textEn": "Traditional analysis might count this simply as one accidental death case.",
      "textZh": "",
      "slidePage": 20
    },
    {
      "id": "p06s03u08",
      "startTime": 2091.636,
      "endTime": 2105.027,
      "textEn": "But cause-based analysis asks a deeper question: was this a pure external accident, or did an underlying medical condition, such as degeneration or poor balance, contribute to the fall?",
      "textZh": "發生率變化是高齡化、商品組合、醫療行為、客戶行為、院所行為、詐欺模式，還是給付設計造成的？",
      "slidePage": 20
    },
    {
      "id": "p06s03u09",
      "startTime": 2105.027,
      "endTime": 2114.539,
      "textEn": "That distinction changes how we estimate incidence, how we segment risk, and how clean the experience study population becomes.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s03u10",
      "startTime": 2114.539,
      "endTime": 2122.389,
      "textEn": "It helps us ask better questions, spot emerging trends earlier, and communicate findings more clearly to management.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s03u11",
      "startTime": 2122.389,
      "endTime": 2138.779,
      "textEn": "Once we understand causes more clearly, the natural next question is how those insights can feed into product and pricing discussions — without turning this talk into a pricing disclosure.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s04u01",
      "startTime": 2138.779,
      "endTime": 2146.252,
      "textEn": "Once experience analysis becomes more cause-based, it can also support pricing applications.",
      "textZh": "當我們更清楚理解原因，這些洞察也能支援定價與商品討論。",
      "slidePage": 21
    },
    {
      "id": "p06s04u02",
      "startTime": 2146.252,
      "endTime": 2152.724,
      "textEn": "To be clear: this talk isn't about disclosing pricing strategy or specific product pricing.",
      "textZh": "",
      "slidePage": 21
    },
    {
      "id": "p06s04u03",
      "startTime": 2152.724,
      "endTime": 2165.813,
      "textEn": "We're talking about the analytical capability. When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity.",
      "textZh": "這裡不是揭露具體定價策略，而是討論分析能力。",
      "slidePage": 21
    },
    {
      "id": "p06s04u04",
      "startTime": 2165.813,
      "endTime": 2174.143,
      "textEn": "This supports three pricing applications shown on the slide: refined assumptions, segmented pricing, and policy or benefit design.",
      "textZh": "這裡不是揭露具體定價策略，而是討論分析能力。",
      "slidePage": 21
    },
    {
      "id": "p06s04u05",
      "startTime": 2174.143,
      "endTime": 2187.827,
      "textEn": "Take lung cancer claims as an example. If we look at 100 cases together, traditional pricing may only show that overall claim cost is increasing.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u06",
      "startTime": 2187.827,
      "endTime": 2200.758,
      "textEn": "But cause analysis can separate 70 standard treatment cases from 20 high-intensity treatment cases and 10 borderline cases where the treatment pattern or policy alignment needs closer review.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u07",
      "startTime": 2200.758,
      "endTime": 2209.55,
      "textEn": "That difference really matters. Without cause analysis, management might only see a financial result.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u08",
      "startTime": 2209.55,
      "endTime": 2220.16,
      "textEn": "With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u09",
      "startTime": 2220.16,
      "endTime": 2232.568,
      "textEn": "This is the connection between claims AI and risk-based pricing.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u10",
      "startTime": 2232.568,
      "endTime": 2242.958,
      "textEn": "AI helps convert claims documents into structured evidence, and structured evidence makes risk segmentation more precise.",
      "textZh": "",
      "slidePage": 21
    },
    {
      "id": "p06s04u11",
      "startTime": 2242.958,
      "endTime": 2251.531,
      "textEn": "Better experience analysis supports more informed pricing and risk management decisions.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u12",
      "startTime": 2251.531,
      "endTime": 2262.581,
      "textEn": "Of course, none of this works if the AI is reasoning from unstable or poorly managed knowledge.",
      "textZh": "",
      "slidePage": 21
    },
    {
      "id": "p06s04u13",
      "startTime": 2262.581,
      "endTime": 2268.65,
      "textEn": "So the next layer is the knowledge foundation that supports every decision.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p07s01u01",
      "startTime": 2268.65,
      "endTime": 2283.15,
      "textEn": "To make all of this work, CAELIA needs a strong knowledge foundation from three sources: claims operations policies, product terms and benefit rules, and a medical knowledge and disease library.",
      "textZh": "要做到這些，CAELIA 需要穩固的知識基礎，包括保單條款、給付定義、除外、理賠規則、監理要求、作業準則與領域知識。",
      "slidePage": 22
    },
    {
      "id": "p07s01u02",
      "startTime": 2283.15,
      "endTime": 2292.329,
      "textEn": "This knowledge has to be structured and governed.",
      "textZh": "要做到這些，CAELIA 需要穩固的知識基礎，包括保單條款、給付定義、除外、理賠規則、監理要求、作業準則與領域知識。",
      "slidePage": 22
    },
    {
      "id": "p07s01u03",
      "startTime": 2292.329,
      "endTime": 2302.456,
      "textEn": "If the knowledge base is incomplete or out of date, the AI might retrieve the wrong information or apply the wrong rule.",
      "textZh": "",
      "slidePage": 22
    },
    {
      "id": "p07s01u04",
      "startTime": 2302.456,
      "endTime": 2314.956,
      "textEn": "We also need traceability and data privacy controls.",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u05",
      "startTime": 2314.956,
      "endTime": 2328.439,
      "textEn": "When AI uses a policy clause or a medical fact, the system should be able to trace where that came from.",
      "textZh": "",
      "slidePage": 22
    },
    {
      "id": "p07s01u06",
      "startTime": 2328.439,
      "endTime": 2338.616,
      "textEn": "Reviewers should be able to see the source of any piece of information. This is especially important for explainability.",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u07",
      "startTime": 2338.616,
      "endTime": 2352.515,
      "textEn": "In a claims decision, it's not enough to say \"the model thinks so.\"",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u08",
      "startTime": 2352.515,
      "endTime": 2365.289,
      "textEn": "We need to say: here's the document, here's the extracted fact, here's the relevant policy term, here's the reasoning, and here's what's still uncertain.",
      "textZh": "我們也需要資料血緣，讓系統能追溯 AI 使用的條款或醫療事實來源。",
      "slidePage": 22
    },
    {
      "id": "p07s01u09",
      "startTime": 2365.289,
      "endTime": 2376.83,
      "textEn": "The knowledge foundation is what makes the AI system controllable. It anchors AI reasoning in approved business knowledge, rather than letting the model improvise freely.",
      "textZh": "知識基礎讓 AI 推理受到核准的業務知識約束，而不是自由發揮。",
      "slidePage": 22
    },
    {
      "id": "p07s01u10",
      "startTime": 2376.83,
      "endTime": 2386.531,
      "textEn": "The clearest example of this is policy interpretation — because in claims, a small difference in wording can completely change the decision.",
      "textZh": "知識基礎讓 AI 推理受到核准的業務知識約束，而不是自由發揮。",
      "slidePage": 22
    },
    {
      "id": "p07s02u01",
      "startTime": 2386.531,
      "endTime": 2396.685,
      "textEn": "Policy interpretation is one of the most important and most challenging parts of claims adjudication.",
      "textZh": "保單解讀是知識基礎中最重要也最困難的部分之一。",
      "slidePage": 23
    },
    {
      "id": "p07s02u02",
      "startTime": 2396.685,
      "endTime": 2402.34,
      "textEn": "Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.",
      "textZh": "",
      "slidePage": 23
    },
    {
      "id": "p07s02u03",
      "startTime": 2402.34,
      "endTime": 2413.867,
      "textEn": "A claim decision often comes down to the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.",
      "textZh": "保單包含定義、給付條件、除外、等待期、限額與特殊規則，理賠決策常取決於精確解讀。",
      "slidePage": 23
    },
    {
      "id": "p07s02u04",
      "startTime": 2413.867,
      "endTime": 2425.367,
      "textEn": "The agent workflow has four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.",
      "textZh": "保單包含定義、給付條件、除外、等待期、限額與特殊規則，理賠決策常取決於精確解讀。",
      "slidePage": 23
    },
    {
      "id": "p07s02u05",
      "startTime": 2425.367,
      "endTime": 2440.597,
      "textEn": "For example, if a claim involves hospitalization benefits, the system can pull up the relevant policy clauses, compare the required conditions against the extracted medical facts, and highlight anything that's missing or conflicting.",
      "textZh": "CAELIA 讓相關保單邏輯更可見、更容易審查。",
      "slidePage": 23
    },
    {
      "id": "p07s02u06",
      "startTime": 2440.597,
      "endTime": 2454.084,
      "textEn": "The reviewer can then focus on judgment. Does the medical evidence really satisfy the policy definition? Is additional documentation needed? Is there an exception?",
      "textZh": "CAELIA 讓相關保單邏輯更可見、更容易審查。",
      "slidePage": 23
    },
    {
      "id": "p07s02u07",
      "startTime": 2454.084,
      "endTime": 2459.161,
      "textEn": "Does the case need to be escalated? This approach improves consistency.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s02u08",
      "startTime": 2459.161,
      "endTime": 2466.113,
      "textEn": "The output should clearly show applicable coverage, coverage determination, exclusion determination, and the decision rationale.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s02u09",
      "startTime": 2466.113,
      "endTime": 2476.289,
      "textEn": "If we step back from the individual components, we can now summarize the value this creates across the organization.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s03u01",
      "startTime": 2476.289,
      "endTime": 2485.759,
      "textEn": "Let's bring the benefits together. We see four major benefit areas: operations, risk control, governance, and actuarial insight.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u02",
      "startTime": 2485.759,
      "endTime": 2496.369,
      "textEn": "For operations, CAELIA reduces manual document review, speeds up evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u03",
      "startTime": 2496.369,
      "endTime": 2508.636,
      "textEn": "In practical terms, the impact can extend across a claims organization of around 300 FTEs, with an estimated 30 percent reduction in review time per case.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u04",
      "startTime": 2508.636,
      "endTime": 2518.661,
      "textEn": "For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u05",
      "startTime": 2518.661,
      "endTime": 2530.186,
      "textEn": "For governance, human-in-the-loop review, traceable reasoning, structured knowledge, and data lineage help make AI output explainable and auditable. That's essential for responsible AI in insurance.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u06",
      "startTime": 2530.186,
      "endTime": 2538.485,
      "textEn": "And for actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u07",
      "startTime": 2538.485,
      "endTime": 2551.129,
      "textEn": "Instead of only getting final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and the rationale behind decisions.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u08",
      "startTime": 2551.129,
      "endTime": 2559.469,
      "textEn": "This supports experience studies, incidence rate reviews, assumption updates, reserve analysis, and product monitoring.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u09",
      "startTime": 2559.469,
      "endTime": 2571.927,
      "textEn": "The broader lesson here is that AI value shouldn't be measured only by time saved.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u10",
      "startTime": 2571.927,
      "endTime": 2583.457,
      "textEn": "In insurance, AI value should also be measured by the quality of decisions, the strength of governance, and the improvement in how the organization learns.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u11",
      "startTime": 2583.457,
      "endTime": 2598.23,
      "textEn": "So as we wrap up, I want to come back to the question we asked at the beginning: are claims records simply evidence for payment — or can they become evidence for learning?",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s04u01",
      "startTime": 2598.23,
      "endTime": 2610.148,
      "textEn": "To close, let's come back to our title: beyond efficiency. Efficiency matters. Faster claims processing improves customer experience and reduces operational burden.",
      "textZh": "最後回到標題：beyond efficiency。",
      "slidePage": 25
    },
    {
      "id": "p07s04u02",
      "startTime": 2610.148,
      "endTime": 2619.486,
      "textEn": "But for life insurers, the bigger opportunity is to build a claims ecosystem that actually learns.",
      "textZh": "效率很重要，但對壽險公司來說，更大的機會是建立會學習的理賠生態系。",
      "slidePage": 25
    },
    {
      "id": "p07s04u03",
      "startTime": 2619.486,
      "endTime": 2632.247,
      "textEn": "Every claim contains information about customer needs, medical trends, product performance, operational risk, and emerging experience.",
      "textZh": "效率很重要，但對壽險公司來說，更大的機會是建立會學習的理賠生態系。",
      "slidePage": 25
    },
    {
      "id": "p07s04u04",
      "startTime": 2632.247,
      "endTime": 2645.212,
      "textEn": "Historically, most of that information was locked inside unstructured documents.",
      "textZh": "",
      "slidePage": 25
    },
    {
      "id": "p07s04u05",
      "startTime": 2645.212,
      "endTime": 2658.118,
      "textEn": "Agentic AI gives us a practical way to unlock it — as long as we design the system with governance, explainability, and human oversight built in from the start.",
      "textZh": "每一件理賠都包含客戶需求、醫療趨勢、商品表現、營運風險與新興經驗。",
      "slidePage": 25
    },
    {
      "id": "p07s04u06",
      "startTime": 2658.118,
      "endTime": 2666.434,
      "textEn": "Our experience points to three takeaways. First, AI in claims should be designed as augmentation, not just automation.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u07",
      "startTime": 2666.434,
      "endTime": 2676.829,
      "textEn": "The goal is to help professionals make better decisions — not simply to remove human involvement.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u08",
      "startTime": 2676.829,
      "endTime": 2689.723,
      "textEn": "Second, claims data should be treated as a strategic actuarial asset.",
      "textZh": "",
      "slidePage": 25
    },
    {
      "id": "p07s04u09",
      "startTime": 2689.723,
      "endTime": 2704.714,
      "textEn": "When unstructured records become structured, traceable, and governed, they can strengthen experience studies, pricing assumptions, reserving analysis, and risk monitoring.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u10",
      "startTime": 2704.714,
      "endTime": 2714.088,
      "textEn": "Third, responsible AI isn't a separate compliance layer you bolt on at the end.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u11",
      "startTime": 2714.088,
      "endTime": 2723.785,
      "textEn": "It has to be built into the architecture from day one: human-in-the-loop review, knowledge governance, data lineage, explainable reasoning, and auditability.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u12",
      "startTime": 2723.785,
      "endTime": 2737.489,
      "textEn": "As markets face aging populations, rising medical complexity, and post-IFRS 17 operational demands, actuaries have an important role to play.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u13",
      "startTime": 2737.489,
      "endTime": 2750.389,
      "textEn": "Actuaries can help connect AI capability with business value, risk management, governance, and long-term sustainability. Thank you so much for your time.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u14",
      "startTime": 2750.389,
      "endTime": 2754.189,
      "textEn": "We'd love to take your questions.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    }
  ]
};
