import type { Project } from "../types";

export const mockProject: Project = {
  "id": "soa_beyond_efficiency",
  "title": "Beyond Efficiency",
  "subtitle": "SOA Presentation Practice",
  "audioUrl": "/audio/soa_practice_enhanced_echo_full.mp3",
  "duration": 2035.5,
  "coverImageUrl": "/slides/slide_01.png",
  "transcript": [
    {
      "id": "p01s01u01",
      "startTime": 0,
      "endTime": 3.7,
      "textEn": "Good morning everyone. Thank you for joining our session.",
      "textZh": "大家早安。謝謝各位參加我們的場次。",
      "slidePage": 1
    },
    {
      "id": "p01s01u02",
      "startTime": 3.7,
      "endTime": 13.14,
      "textEn": "My name is Li Yu Tsao, and I am joined today by my colleague Yu Chung Wu from Cathay Life Insurance in Taiwan.",
      "textZh": "我叫 Li Yu Tsao，今天和我一起分享的是來自台灣國泰人壽的同事 Yu Chung Wu。",
      "slidePage": 1
    },
    {
      "id": "p01s01u03",
      "startTime": 13.14,
      "endTime": 23.82,
      "textEn": "Today we would like to share our experience with a topic that sits at the intersection of claims operations, actuarial analytics, risk management, and responsible AI.",
      "textZh": "今天我們想分享一個位於理賠營運、精算分析、風險管理與負責任 AI 交會點的主題。",
      "slidePage": 1
    },
    {
      "id": "p01s01u04",
      "startTime": 23.82,
      "endTime": 32.86,
      "textEn": "The title of our presentation is \"Beyond Efficiency: Leveraging Agentic AI for Claims Experience Analysis and Risk Resilience in Taiwan's Life Insurance.\"",
      "textZh": "我們的題目是「超越效率：在台灣壽險業運用 Agentic AI 進行理賠經驗分析與風險韌性管理」。",
      "slidePage": 1
    },
    {
      "id": "p01s01u05",
      "startTime": 32.86,
      "endTime": 44.36,
      "textEn": "When many people first hear about AI in claims, the first idea that comes to mind is efficiency. Can we process claims faster? Can we reduce manual work?",
      "textZh": "當許多人第一次聽到理賠 AI，第一個想到的通常是效率。我們能不能更快處理理賠？能不能減少人工工作？",
      "slidePage": 1
    },
    {
      "id": "p01s01u06",
      "startTime": 44.36,
      "endTime": 52.99,
      "textEn": "Can we shorten the turnaround time for customers? Those questions are important. But today, we want to go one step further.",
      "textZh": "能不能縮短客戶等待時間？這些問題都很重要。但今天我們想再往前一步。",
      "slidePage": 1
    },
    {
      "id": "p01s01u07",
      "startTime": 52.99,
      "endTime": 62.43,
      "textEn": "We want to discuss how claims AI can become more than an automation tool. It can become a structured source of actuarial insight.",
      "textZh": "我們想討論理賠 AI 如何不只是自動化工具。它也可以成為結構化的精算洞察來源。",
      "slidePage": 1
    },
    {
      "id": "p01s01u08",
      "startTime": 62.43,
      "endTime": 71.06,
      "textEn": "It can help insurers understand emerging morbidity trends, improve experience analysis, strengthen fraud monitoring, and build a more resilient operating model.",
      "textZh": "它可以協助保險公司理解新興疾病經驗、改善經驗分析、強化詐欺監控，並建立更具韌性的營運模式。",
      "slidePage": 1
    },
    {
      "id": "p01s01u09",
      "startTime": 71.06,
      "endTime": 84.61,
      "textEn": "Our central message is simple: if claims data can be transformed from unstructured operational records into explainable, governed, actuarial-ready data, then claims operations can become a strategic asset for the entire insurance company.",
      "textZh": "我們的核心訊息很簡單：如果理賠資料能從非結構化的營運紀錄，轉換為可解釋、受治理、可供精算使用的資料，那麼理賠營運就能成為整家公司的策略性資產。",
      "slidePage": 1
    },
    {
      "id": "p01s01u10",
      "startTime": 84.61,
      "endTime": 99.4,
      "textEn": "As you listen today, I would invite you to keep one question in mind: in your own organization, are claims records mainly treated as evidence for payment, or are they also treated as evidence for learning?",
      "textZh": "今天聆聽時，我也想邀請各位保留一個問題：在你的組織中，理賠紀錄主要只是付款證據，還是也是學習的證據？",
      "slidePage": 1
    },
    {
      "id": "p01s02u01",
      "startTime": 100.2,
      "endTime": 103.33,
      "textEn": "Let me briefly introduce the two speakers.",
      "textZh": "讓我簡單介紹兩位講者。",
      "slidePage": 4
    },
    {
      "id": "p01s02u02",
      "startTime": 103.33,
      "endTime": 114.94,
      "textEn": "My work focuses on applying AI and machine learning to insurance operations, especially natural language processing and large language model applications for claims and medical documentation.",
      "textZh": "我的工作聚焦於將 AI 與機器學習應用在保險營運，特別是自然語言處理與大型語言模型在理賠和醫療文件上的應用。",
      "slidePage": 4
    },
    {
      "id": "p01s02u03",
      "startTime": 114.94,
      "endTime": 122.53,
      "textEn": "And my name is Yu Chung Wu. My work focuses on claims operations and AI system architecture.",
      "textZh": "我叫 Yu Chung Wu。我的工作聚焦在理賠營運與 AI 系統架構。",
      "slidePage": 4
    },
    {
      "id": "p01s02u04",
      "startTime": 122.53,
      "endTime": 132.81,
      "textEn": "In this project, we worked closely with claims professionals, data scientists, IT teams, and governance stakeholders to design an AI-assisted claims pre-adjudication framework.",
      "textZh": "在這個專案中，我們與理賠專家、資料科學家、IT 團隊以及治理相關單位密切合作，設計 AI 輔助的理賠預審框架。",
      "slidePage": 4
    },
    {
      "id": "p01s02u05",
      "startTime": 132.81,
      "endTime": 140.85,
      "textEn": "Together, we will walk through three questions. First, why is Taiwan's life insurance claims environment becoming more complex?",
      "textZh": "今天我們會依序回答三個問題。第一，為什麼台灣壽險理賠環境正變得越來越複雜？",
      "slidePage": 4
    },
    {
      "id": "p01s02u06",
      "startTime": 140.85,
      "endTime": 149.34,
      "textEn": "Second, how did we design CAELIA, the Cathay AI Engine for Life Insurance Adjudication, as an agentic AI framework?",
      "textZh": "第二，我們如何將 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication，設計成一個 agentic AI 框架？",
      "slidePage": 4
    },
    {
      "id": "p01s02u07",
      "startTime": 149.34,
      "endTime": 159.61,
      "textEn": "And third, how can this type of framework create value beyond operational efficiency, especially for experience studies, pricing, reserving, risk monitoring, and governance?",
      "textZh": "第三，這類框架如何創造超越營運效率的價值，特別是在經驗研究、定價、準備金、風險監控與治理方面？",
      "slidePage": 4
    },
    {
      "id": "p01s02u08",
      "startTime": 159.61,
      "endTime": 167.65,
      "textEn": "With that framing, let us begin with the pressure that made this work necessary in the first place.",
      "textZh": "有了這個架構，我們先從讓這項工作變得必要的壓力談起。",
      "slidePage": 4
    },
    {
      "id": "p01s03u01",
      "startTime": 168.45,
      "endTime": 171.63,
      "textEn": "Let us begin with the business context.",
      "textZh": "讓我們先從商業背景開始。",
      "slidePage": 5
    },
    {
      "id": "p01s03u02",
      "startTime": 171.63,
      "endTime": 182.52,
      "textEn": "Claims operations in Taiwan are facing structural pressure from three directions: rising external pressure, expanding internal operational burden, and emerging organizational and talent constraints.",
      "textZh": "台灣的理賠營運正面臨三個方向的結構性壓力：外部壓力上升、內部作業負擔擴大，以及組織與人才限制浮現。",
      "slidePage": 5
    },
    {
      "id": "p01s03u03",
      "startTime": 182.52,
      "endTime": 185.7,
      "textEn": "The first pressure is demographic and medical.",
      "textZh": "第一個壓力來自人口與醫療。",
      "slidePage": 5
    },
    {
      "id": "p01s03u04",
      "startTime": 185.7,
      "endTime": 196.59,
      "textEn": "Taiwan is entering a super-aged society, and life insurers are seeing more claims related to chronic disease, dementia, long-term care, hospitalization, and post-treatment recovery.",
      "textZh": "台灣正進入超高齡社會，壽險公司看到越來越多與慢性病、失智、長期照護、住院與術後恢復相關的理賠。",
      "slidePage": 5
    },
    {
      "id": "p01s03u05",
      "startTime": 196.59,
      "endTime": 209.3,
      "textEn": "These cases often involve complex medical records, multiple diagnoses, and long claim histories. At the same time, healthcare cost pressure is shifting more financial responsibility toward private insurance.",
      "textZh": "這些案件往往涉及複雜的醫療紀錄、多重診斷與較長的理賠歷史。同時，醫療成本壓力也讓更多財務責任轉向商業保險。",
      "slidePage": 5
    },
    {
      "id": "p01s03u06",
      "startTime": 209.3,
      "endTime": 221.1,
      "textEn": "Customers increasingly rely on life and health insurance products to cover medical and long-term care needs. This means claims volume grows, but claim complexity also grows.",
      "textZh": "客戶越來越依賴壽險與健康險商品來支應醫療與長照需求。這表示理賠量增加，理賠複雜度也增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u07",
      "startTime": 221.1,
      "endTime": 225.63,
      "textEn": "The second pressure is operational. High-frequency, low-severity claims are increasing.",
      "textZh": "第二個壓力來自作業面。高頻率、低嚴重度的理賠正在增加。",
      "slidePage": 5
    },
    {
      "id": "p01s03u08",
      "startTime": 225.63,
      "endTime": 236.98,
      "textEn": "Individually they may not be large, but together they create fragmentation, because each case still requires document review, policy interpretation, data entry, and quality control.",
      "textZh": "單件金額可能不高，但合在一起會造成營運模式碎片化，因為每件仍需要文件審查、保單解釋、資料輸入與品質控管。",
      "slidePage": 5
    },
    {
      "id": "p01s03u09",
      "startTime": 236.98,
      "endTime": 246.97,
      "textEn": "The third pressure is talent. Claims adjudication requires experienced judgment across medical terminology, policy terms, fraud patterns, customer circumstances, and regulatory expectations.",
      "textZh": "第三個壓力來自人才。理賠核定需要跨越醫療術語、保單條款、詐欺型態、客戶情境與監理期待的經驗判斷。",
      "slidePage": 5
    },
    {
      "id": "p01s03u10",
      "startTime": 246.97,
      "endTime": 256.95,
      "textEn": "But experienced claims and risk professionals are difficult to scale. So the challenge is not only \"how do we process more claims?\"",
      "textZh": "但資深理賠與風險專業人才很難快速擴張。因此挑戰不只是「我們如何處理更多理賠？",
      "slidePage": 5
    },
    {
      "id": "p01s03u11",
      "startTime": 256.95,
      "endTime": 266.48,
      "textEn": "The deeper challenge is \"how do we preserve decision quality, risk control, and actuarial insight when complexity and volume both increase?\"",
      "textZh": "」更深層的挑戰是：「當複雜度與數量同時增加時，我們如何維持決策品質、風險控管與精算洞察？",
      "slidePage": 5
    },
    {
      "id": "p01s03u12",
      "startTime": 266.48,
      "endTime": 270.57,
      "textEn": "That is the starting point for our AI journey.",
      "textZh": "」這就是我們 AI 旅程的起點。",
      "slidePage": 5
    },
    {
      "id": "p01s03u13",
      "startTime": 270.57,
      "endTime": 286.45,
      "textEn": "So before we introduce the technology, it is useful to step back and ask: how did claims adjudication evolve to this point, and why are the tools that worked in the past no longer enough?",
      "textZh": "所以在介紹技術之前，先退一步問：理賠核定是如何演進到今天的？為什麼過去有效的工具已經不夠？",
      "slidePage": 5
    },
    {
      "id": "p02s01u01",
      "startTime": 287.65,
      "endTime": 296.58,
      "textEn": "Claims processing has always evolved together with the available technology. But each stage solved one problem while leaving another problem behind.",
      "textZh": "理賠處理一直隨可用技術一起演進。但每一個階段解決一個問題，也留下另一個問題。",
      "slidePage": 6
    },
    {
      "id": "p02s01u02",
      "startTime": 296.58,
      "endTime": 306.36,
      "textEn": "In the IBM AS400 era, claims processing was mainly data-entry driven. The key objective was to record claims accurately and complete payment processing.",
      "textZh": "在 IBM AS400 時代，理賠處理主要由資料輸入驅動。核心目標是準確記錄理賠並完成付款處理。",
      "slidePage": 6
    },
    {
      "id": "p02s01u03",
      "startTime": 306.36,
      "endTime": 313.59,
      "textEn": "In the core system era, insurers digitalized workflows and introduced rule-based engines, making standard claims more consistent.",
      "textZh": "在核心系統時代，保險公司將流程數位化並導入規則引擎，使標準案件更一致。",
      "slidePage": 6
    },
    {
      "id": "p02s01u04",
      "startTime": 313.59,
      "endTime": 323.37,
      "textEn": "In the data modeling era, machine learning models supported risk tagging, anomaly detection, and triage. But many models were still limited to scoring.",
      "textZh": "在資料模型時代，機器學習模型支援風險標籤、異常偵測與分流。但許多模型仍然只停留在評分。",
      "slidePage": 6
    },
    {
      "id": "p02s01u05",
      "startTime": 323.37,
      "endTime": 332.3,
      "textEn": "They could identify higher-risk cases, but they did not always explain the evidence in a way that reviewers could immediately use.",
      "textZh": "它們可以找出較高風險案件，卻不一定能用審查員可以立即使用的方式解釋證據。",
      "slidePage": 6
    },
    {
      "id": "p02s01u06",
      "startTime": 332.3,
      "endTime": 344.2,
      "textEn": "Now we are entering what we call the agentic AI era. AI is no longer only a passive tool that waits for a user to ask a question.",
      "textZh": "現在我們進入所謂 agentic AI 時代。AI 不再只是等待使用者提問的被動工具。",
      "slidePage": 6
    },
    {
      "id": "p02s01u07",
      "startTime": 344.2,
      "endTime": 354.41,
      "textEn": "It can actively participate in parts of the adjudication process: reading documents, extracting evidence, comparing information against policy terms, identifying inconsistencies, and generating recommendations.",
      "textZh": "它可以主動參與部分核定流程：閱讀文件、擷取證據、比對保單條款、辨識不一致並產出建議。",
      "slidePage": 6
    },
    {
      "id": "p02s01u08",
      "startTime": 354.41,
      "endTime": 365.89,
      "textEn": "But this shift also raises an important governance question. If AI becomes more active, how do we keep it explainable, controllable, auditable, and aligned with professional judgment?",
      "textZh": "但這個轉變也帶來重要的治理問題。如果 AI 變得更主動，我們如何讓它可解釋、可控、可稽核，並且符合專業判斷？",
      "slidePage": 6
    },
    {
      "id": "p02s01u09",
      "startTime": 365.89,
      "endTime": 377.79,
      "textEn": "Our answer is not full automation without oversight. Our answer is human-in-the-loop agentic AI: AI performs structured analysis and prepares evidence, while human reviewers retain final decision authority.",
      "textZh": "我們的答案不是沒有監督的全自動化。我們的答案是 human-in-the-loop 的 agentic AI：AI 執行結構化分析並準備證據，而人類審查員保留最終決策權。",
      "slidePage": 6
    },
    {
      "id": "p02s01u10",
      "startTime": 377.79,
      "endTime": 389.7,
      "textEn": "To see why that matters, let us now look at the actual claims journey. Where does complexity enter the workflow, and where does valuable information start to disappear?",
      "textZh": "要看出這為何重要，接下來看實際理賠旅程：複雜度在哪裡進入流程？有價值的資訊又從哪裡開始消失？",
      "slidePage": 6
    },
    {
      "id": "p02s02u01",
      "startTime": 390.5,
      "endTime": 401.36,
      "textEn": "Before we explain the new framework, let us first look at the traditional claims review and adjudication process. In a typical process, a customer submits claim documents.",
      "textZh": "接著看實際理賠流程。",
      "slidePage": 7
    },
    {
      "id": "p02s02u02",
      "startTime": 401.36,
      "endTime": 415.04,
      "textEn": "The insurer registers the case, checks basic policy information, reviews medical documents, determines whether the claim event is covered, calculates the benefit amount, performs risk checks, and then makes a payment or decline decision.",
      "textZh": "典型流程包含客戶提交文件、建立案件、確認保單資訊、檢視醫療文件、判斷是否承保、計算給付、做風險檢查，最後核付或拒付。",
      "slidePage": 7
    },
    {
      "id": "p02s02u03",
      "startTime": 415.04,
      "endTime": 426.31,
      "textEn": "This sounds straightforward, but in practice many steps require interpretation. For example, a medical certificate may contain free-text descriptions, abbreviations, different hospital formats, or Traditional Chinese medical terminology.",
      "textZh": "典型流程包含客戶提交文件、建立案件、確認保單資訊、檢視醫療文件、判斷是否承保、計算給付、做風險檢查，最後核付或拒付。",
      "slidePage": 7
    },
    {
      "id": "p02s02u04",
      "startTime": 426.31,
      "endTime": 438.78,
      "textEn": "A diagnosis may need to be mapped to an internal disease category, and a procedure or hospitalization period may need to be checked against policy definitions, exclusions, deductibles, or benefit limits.",
      "textZh": "這聽起來很直線，但實務上需要大量解讀。",
      "slidePage": 7
    },
    {
      "id": "p02s02u05",
      "startTime": 438.78,
      "endTime": 444.41,
      "textEn": "The challenge is that much of the most valuable information is not born structured.",
      "textZh": "這聽起來很直線，但實務上需要大量解讀。",
      "slidePage": 7
    },
    {
      "id": "p02s02u06",
      "startTime": 444.41,
      "endTime": 454.47,
      "textEn": "If we only capture the final outcome, such as approved or declined, or the final payment amount, we lose a large amount of explanatory information.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u07",
      "startTime": 454.47,
      "endTime": 459.7,
      "textEn": "For operations, that means manual effort. For actuaries, it means weaker data granularity.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u08",
      "startTime": 459.7,
      "endTime": 470.56,
      "textEn": "We may know the claim result, but we may not fully know the cause, the medical pathway, the detailed risk factors, or the evidence behind the decision.",
      "textZh": "醫療證明可能有自由文字、縮寫、不同醫院格式或繁體中文醫療用語；診斷要對應內部分類，手術或住院期間也要對照條款、除外、扣除額與限制。",
      "slidePage": 7
    },
    {
      "id": "p02s02u09",
      "startTime": 470.56,
      "endTime": 480.22,
      "textEn": "That is why we believe the claims process should be redesigned not only as a payment workflow, but also as a data transformation workflow.",
      "textZh": "若只留下最後是否核付與給付金額，就會失去很多解釋性資訊。",
      "slidePage": 7
    },
    {
      "id": "p02s02u10",
      "startTime": 480.22,
      "endTime": 493.9,
      "textEn": "If we look at the process through that lens, the first question becomes: how early can we capture useful information, and how much structure can we create before the case reaches a human reviewer?",
      "textZh": "若只留下最後是否核付與給付金額，就會失去很多解釋性資訊。",
      "slidePage": 7
    },
    {
      "id": "p02s03u01",
      "startTime": 494.7,
      "endTime": 503.6,
      "textEn": "The first step is digital claims submission. Customers can submit claims through a mobile application, reducing the need for paper-based submission.",
      "textZh": "數位申請是第一步。",
      "slidePage": 8
    },
    {
      "id": "p02s03u02",
      "startTime": 503.6,
      "endTime": 511.65,
      "textEn": "This improves customer convenience and shortens the front-end process. However, digital submission alone does not solve the full problem.",
      "textZh": "客戶可透過手機提交理賠，減少紙本並縮短前端流程。",
      "slidePage": 8
    },
    {
      "id": "p02s03u03",
      "startTime": 511.65,
      "endTime": 518.01,
      "textEn": "A claim may be submitted digitally, but the supporting medical documents may still be unstructured.",
      "textZh": "但數位化本身不等於資料已經可分析。",
      "slidePage": 8
    },
    {
      "id": "p02s03u04",
      "startTime": 518.01,
      "endTime": 527.76,
      "textEn": "They may be scanned images, PDFs, hospital certificates, receipts, diagnosis documents, or discharge summaries. So digitalization is necessary, but it is not sufficient.",
      "textZh": "文件可能仍是掃描影像、PDF、診斷證明、收據或出院摘要。",
      "slidePage": 8
    },
    {
      "id": "p02s03u05",
      "startTime": 527.76,
      "endTime": 534.12,
      "textEn": "It gives us access to documents faster, but it does not automatically create analytical value.",
      "textZh": "因此我們還需要把文件轉成結構化、可靠、可解釋的資料。",
      "slidePage": 8
    },
    {
      "id": "p02s03u06",
      "startTime": 534.12,
      "endTime": 540.9,
      "textEn": "To create analytical value, we need to convert those documents into structured, reliable, and explainable data.",
      "textZh": "因此我們還需要把文件轉成結構化、可靠、可解釋的資料。",
      "slidePage": 8
    },
    {
      "id": "p02s03u07",
      "startTime": 540.9,
      "endTime": 547.25,
      "textEn": "This is where OCR, large language models, and agentic AI begin to play a role.",
      "textZh": "OCR、大型語言模型與 agentic AI 就是在這裡開始發揮作用。",
      "slidePage": 8
    },
    {
      "id": "p02s03u08",
      "startTime": 547.25,
      "endTime": 557.85,
      "textEn": "But once documents arrive digitally, we still face a second question: can AI understand what is inside those documents well enough to support downstream decisions?",
      "textZh": "OCR、大型語言模型與 agentic AI 就是在這裡開始發揮作用。",
      "slidePage": 8
    },
    {
      "id": "p03s01u01",
      "startTime": 559.05,
      "endTime": 570.19,
      "textEn": "After submission, the next step is registration and case creation. Traditionally, staff would review documents and manually enter key fields into the claims system.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 9
    },
    {
      "id": "p03s01u02",
      "startTime": 570.19,
      "endTime": 578.54,
      "textEn": "AI-driven structured data extraction changes this step. In our framework, OCR first converts document images into machine-readable text.",
      "textZh": "案件建立階段，AI 驅動的結構化擷取可以取代部分人工輸入。",
      "slidePage": 9
    },
    {
      "id": "p03s01u03",
      "startTime": 578.54,
      "endTime": 587.82,
      "textEn": "Then LLM-based extraction identifies fields such as diagnosis, treatment dates, hospital name, surgery information, claim amount, and other relevant details.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u04",
      "startTime": 587.82,
      "endTime": 592.93,
      "textEn": "But we do not treat extraction as a simple copy-and-paste task.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u05",
      "startTime": 592.93,
      "endTime": 604.53,
      "textEn": "The AI needs to distinguish past medical history from the current claim event, suspected diagnosis from confirmed diagnosis, and one hospital's document style from another.",
      "textZh": "OCR 先把影像轉成可讀文字，LLM 再辨識診斷、治療日期、醫院、手術資訊、理賠金額等欄位。",
      "slidePage": 9
    },
    {
      "id": "p03s01u06",
      "startTime": 604.53,
      "endTime": 616.13,
      "textEn": "For Traditional Chinese medical documentation, this is especially important. The language is domain-specific, and the same clinical concept may appear in different wording across hospitals.",
      "textZh": "但擷取不是單純複製貼上，AI 必須理解脈絡，例如區分既往病史與本次事故、疑似診斷與確診，以及不同醫院的文件風格。",
      "slidePage": 9
    },
    {
      "id": "p03s01u07",
      "startTime": 616.13,
      "endTime": 624.95,
      "textEn": "By structuring this information early, we create a better foundation for downstream triage, review, risk analysis, and actuarial use.",
      "textZh": "但擷取不是單純複製貼上，AI 必須理解脈絡，例如區分既往病史與本次事故、疑似診斷與確診，以及不同醫院的文件風格。",
      "slidePage": 9
    },
    {
      "id": "p03s01u08",
      "startTime": 624.95,
      "endTime": 636.55,
      "textEn": "Once this foundation is in place, the workflow can move from simple case creation to something more decision-oriented: which cases require more attention, and why?",
      "textZh": "繁體中文醫療文件尤其需要這種脈絡理解。",
      "slidePage": 9
    },
    {
      "id": "p03s02u01",
      "startTime": 637.35,
      "endTime": 648.35,
      "textEn": "Once the case data is structured, we can move from basic registration to claims triage. Machine learning models can assess claim risk and support case routing.",
      "textZh": "有了結構化資料後，就能進入理賠分流。",
      "slidePage": 10
    },
    {
      "id": "p03s02u02",
      "startTime": 648.35,
      "endTime": 658.92,
      "textEn": "Low-risk, straightforward cases may be processed with a more streamlined workflow, while complex or suspicious cases can be sent to experienced reviewers for deeper investigation.",
      "textZh": "機器學習模型可以評估風險並支援案件路由，低風險案件走簡化流程，複雜或可疑案件交給資深審查員。",
      "slidePage": 10
    },
    {
      "id": "p03s02u03",
      "startTime": 658.92,
      "endTime": 669.5,
      "textEn": "This type of triage helps operations allocate human expertise more effectively. But there is an important limitation: a risk score by itself is not enough.",
      "textZh": "機器學習模型可以評估風險並支援案件路由，低風險案件走簡化流程，複雜或可疑案件交給資深審查員。",
      "slidePage": 10
    },
    {
      "id": "p03s02u04",
      "startTime": 669.5,
      "endTime": 679.23,
      "textEn": "If a model says a case has a risk score of 82 out of 100, the claims reviewer still needs to know why.",
      "textZh": "但風險分數本身不夠。",
      "slidePage": 10
    },
    {
      "id": "p03s02u05",
      "startTime": 679.23,
      "endTime": 687.69,
      "textEn": "Is the risk related to diagnosis inconsistency, repeated claims, provider pattern, unusual timing, policy duration, medical history, or document inconsistency?",
      "textZh": "如果模型說風險分數是 82，審查員仍需要知道原因：是診斷不一致？",
      "slidePage": 10
    },
    {
      "id": "p03s02u06",
      "startTime": 687.69,
      "endTime": 696.15,
      "textEn": "This is where traditional machine learning and agentic AI can complement each other. Machine learning can identify patterns at scale.",
      "textZh": "重複理賠？",
      "slidePage": 10
    },
    {
      "id": "p03s02u07",
      "startTime": 696.15,
      "endTime": 706.72,
      "textEn": "Agentic AI can gather evidence, organize reasoning, and present the basis for review. The goal is not to replace claims professionals with a black-box score.",
      "textZh": "重複理賠？醫療院所模式？保單期間？病史？",
      "slidePage": 10
    },
    {
      "id": "p03s02u08",
      "startTime": 706.72,
      "endTime": 715.6,
      "textEn": "The goal is to help them make faster, better-informed, and more consistent decisions. This leads naturally to the next design question.",
      "textZh": "還是文件不一致？",
      "slidePage": 10
    },
    {
      "id": "p03s02u09",
      "startTime": 715.6,
      "endTime": 726.6,
      "textEn": "If a case is routed to a human reviewer, what should the review environment look like so that human expertise is used where it matters most?",
      "textZh": "這也是傳統機器學習與 agentic AI 可以互補的地方。",
      "slidePage": 10
    },
    {
      "id": "p03s03u01",
      "startTime": 727.4,
      "endTime": 733.04,
      "textEn": "For cases that require human review, we provide a unified smart claims platform.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 11
    },
    {
      "id": "p03s03u02",
      "startTime": 733.04,
      "endTime": 747.37,
      "textEn": "The purpose of the platform is to integrate multi-source data into one review workbench, so reviewers do not need to jump between systems, documents, policy references, customer records, risk tags, and decision notes.",
      "textZh": "對需要人工審查的案件，我們提供整合式智慧理賠平台，把多來源資料放在同一個工作台中。",
      "slidePage": 11
    },
    {
      "id": "p03s03u03",
      "startTime": 747.37,
      "endTime": 756.06,
      "textEn": "The reviewer can see claims information, risk detection results, quick access to related documents, and decision support in one place.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u04",
      "startTime": 756.06,
      "endTime": 763.88,
      "textEn": "This matters because operational efficiency is not only about automating tasks. It is also about reducing cognitive load.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u05",
      "startTime": 763.88,
      "endTime": 775.16,
      "textEn": "When information is scattered, reviewers spend a lot of time searching, comparing, and reconciling. When information is organized, they can spend more time on professional judgment.",
      "textZh": "審查員不用在系統、文件、保單條款、客戶資料、風險標籤和決策註記之間來回切換。",
      "slidePage": 11
    },
    {
      "id": "p03s03u06",
      "startTime": 775.16,
      "endTime": 783.42,
      "textEn": "In other words, the system should not only process data. It should create a better decision environment for experts.",
      "textZh": "這不只是提升效率，也是降低認知負擔。",
      "slidePage": 11
    },
    {
      "id": "p03s03u07",
      "startTime": 783.42,
      "endTime": 794.71,
      "textEn": "Once the reviewer is in that environment, AI support has to appear at the right moment. The question is not simply \"Can AI analyze this case?\"",
      "textZh": "當資訊被整理好，專家就能把更多時間放在真正需要判斷的地方。",
      "slidePage": 11
    },
    {
      "id": "p03s03u08",
      "startTime": 794.71,
      "endTime": 800.35,
      "textEn": "It is \"Can AI help the reviewer think more clearly about this case?\"",
      "textZh": "當資訊被整理好，專家就能把更多時間放在真正需要判斷的地方。",
      "slidePage": 11
    },
    {
      "id": "p04s01u01",
      "startTime": 801.55,
      "endTime": 807.57,
      "textEn": "Inside the review workbench, we embed several AI-assisted features. The first is risk tagging.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u02",
      "startTime": 807.57,
      "endTime": 816.16,
      "textEn": "AI highlights risk indicators and helps reviewers understand which aspects of the case deserve attention. The second is decision support.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u03",
      "startTime": 816.16,
      "endTime": 826.05,
      "textEn": "AI summarizes relevant medical facts, policy terms, and claim conditions, then organizes them into a review-ready format. The third is relationship graph analysis.",
      "textZh": "在工作台內，我們嵌入多種 AI 輔助功能。",
      "slidePage": 12
    },
    {
      "id": "p04s01u04",
      "startTime": 826.05,
      "endTime": 835.51,
      "textEn": "This helps reviewers see connections among claimants, providers, agents, prior claims, or other related entities when such analysis is relevant and permitted.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u05",
      "startTime": 835.51,
      "endTime": 847.54,
      "textEn": "These features are not separate from the claims workflow. They are embedded where the reviewer works. This is important because AI adoption is not only a model problem.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u06",
      "startTime": 847.54,
      "endTime": 855.71,
      "textEn": "It is also a workflow design problem. If AI output appears outside the normal workflow, users may ignore it.",
      "textZh": "風險標籤會指出需要注意的指標；決策支援會整理醫療事實、保單條款與理賠條件；關係圖分析則協助查看被保人、醫療院所、業務員、過往理賠或相關實體之間的關係。",
      "slidePage": 12
    },
    {
      "id": "p04s01u07",
      "startTime": 855.71,
      "endTime": 865.6,
      "textEn": "If it is embedded at the right moment, in the right interface, with the right evidence, it becomes part of the decision process.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s01u08",
      "startTime": 865.6,
      "endTime": 875.05,
      "textEn": "This is the point where AI stops being only a feature inside a system and starts becoming part of the decision architecture.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s01u09",
      "startTime": 875.05,
      "endTime": 879.35,
      "textEn": "That brings us to the bigger question on this slide.",
      "textZh": "AI 必須出現在審查員工作的正確時刻，並提供正確證據，才會真正進入決策流程。",
      "slidePage": 12
    },
    {
      "id": "p04s02u01",
      "startTime": 880.15,
      "endTime": 889.17,
      "textEn": "Now we arrive at the key transition in our presentation. How does AI evolve from a tool to a collaborative decision-making system?",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 13
    },
    {
      "id": "p04s02u02",
      "startTime": 889.17,
      "endTime": 895.74,
      "textEn": "In the early stage, AI is reactive. A user asks a question, and the AI responds.",
      "textZh": "這裡來到簡報的關鍵轉折：AI 如何從工具演進為協作式決策系統？",
      "slidePage": 13
    },
    {
      "id": "p04s02u03",
      "startTime": 895.74,
      "endTime": 905.17,
      "textEn": "This is useful, but it depends heavily on the user's ability to ask the right question. In the next stage, AI becomes proactive.",
      "textZh": "早期 AI 是被動的，使用者問問題，AI 回答。",
      "slidePage": 13
    },
    {
      "id": "p04s02u04",
      "startTime": 905.17,
      "endTime": 915.43,
      "textEn": "It can detect missing information, identify inconsistencies, suggest next steps, and prepare analysis before the user asks. In the most advanced stage, AI becomes multi-agent.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 13
    },
    {
      "id": "p04s02u05",
      "startTime": 915.43,
      "endTime": 926.91,
      "textEn": "One agent may extract medical information, another may interpret policy terms, another may check benefit rules or risk indicators, and another may generate an explanation and decision report.",
      "textZh": "下一階段 AI 變得更主動，可以偵測缺漏、辨識不一致、建議下一步。",
      "slidePage": 13
    },
    {
      "id": "p04s02u06",
      "startTime": 926.91,
      "endTime": 935.94,
      "textEn": "This multi-agent design is helpful because claims adjudication itself is not a single task. It is a sequence of specialized reasoning steps.",
      "textZh": "更進一步則是多代理協作：不同 agent 各自負責醫療擷取、保單解讀、給付規則、風險指標與報告產生。",
      "slidePage": 13
    },
    {
      "id": "p04s02u07",
      "startTime": 935.94,
      "endTime": 945.78,
      "textEn": "However, we should be careful with the word \"collaborative.\" We do not mean that AI has the same authority as a human claims professional.",
      "textZh": "更進一步則是多代理協作：不同 agent 各自負責醫療擷取、保單解讀、給付規則、風險指標與報告產生。",
      "slidePage": 13
    },
    {
      "id": "p04s02u08",
      "startTime": 945.78,
      "endTime": 954.81,
      "textEn": "We mean that AI collaborates by doing evidence preparation, consistency checking, and structured reasoning, while humans provide judgment, accountability, and final approval.",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s02u09",
      "startTime": 954.81,
      "endTime": 962.19,
      "textEn": "This is the foundation of our human-in-the-loop design. And this is also where trust becomes the central issue.",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s02u10",
      "startTime": 962.19,
      "endTime": 974.5,
      "textEn": "If AI is going to participate in a decision, how do we design the workflow so that people can question it, verify it, and remain accountable for the final outcome?",
      "textZh": "所謂協作不是讓 AI 擁有人類權限，而是讓 AI 準備證據與推理，人類負責判斷、責任與最後決策。",
      "slidePage": 13
    },
    {
      "id": "p04s03u01",
      "startTime": 975.3,
      "endTime": 985.16,
      "textEn": "This slide shows the concept of human-in-the-loop claims pre-adjudication. Agentic AI provides analysis and decision recommendations. Human reviewers make final decisions.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u02",
      "startTime": 985.16,
      "endTime": 994.56,
      "textEn": "The distinction between pre-adjudication and adjudication is important. We are not saying that AI independently approves or rejects complex claims.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u03",
      "startTime": 994.56,
      "endTime": 1004.89,
      "textEn": "Instead, AI prepares a pre-assessment: the reviewed documents, extracted facts, relevant policy terms, supporting evidence, issues for attention, and a suggested recommendation.",
      "textZh": "Human-in-the-loop 的理賠預審概念是：agentic AI 提供分析與建議，人類審查員做最後決策。",
      "slidePage": 14
    },
    {
      "id": "p04s03u04",
      "startTime": 1004.89,
      "endTime": 1013.82,
      "textEn": "The human reviewer then evaluates the evidence and recommendation. If the output is complete, the reviewer can proceed faster.",
      "textZh": "這裡的預審不是讓 AI 獨立核准或拒絕複雜理賠，而是整理文件、擷取事實、找出相關條款、列出證據、提示待注意事項並提出建議。",
      "slidePage": 14
    },
    {
      "id": "p04s03u05",
      "startTime": 1013.82,
      "endTime": 1024.62,
      "textEn": "If it is questionable or inconsistent, the reviewer can challenge it, correct it, or request further investigation. This design gives us two benefits.",
      "textZh": "這裡的預審不是讓 AI 獨立核准或拒絕複雜理賠，而是整理文件、擷取事實、找出相關條款、列出證據、提示待注意事項並提出建議。",
      "slidePage": 14
    },
    {
      "id": "p04s03u06",
      "startTime": 1024.62,
      "endTime": 1034.49,
      "textEn": "First, it improves efficiency because routine evidence preparation is accelerated. Second, it improves governance because the AI reasoning pathway is visible.",
      "textZh": "若輸出完整，審查員可更快處理；若有疑問或不一致，審查員可以挑戰、修正或要求補充調查。",
      "slidePage": 14
    },
    {
      "id": "p04s03u07",
      "startTime": 1034.49,
      "endTime": 1046.23,
      "textEn": "The reviewer can see not only the recommendation, but also the basis for that recommendation. In regulated insurance operations, explainability is not a nice-to-have feature.",
      "textZh": "若輸出完整，審查員可更快處理；若有疑問或不一致，審查員可以挑戰、修正或要求補充調查。",
      "slidePage": 14
    },
    {
      "id": "p04s03u08",
      "startTime": 1046.23,
      "endTime": 1057.5,
      "textEn": "It is a condition for trust. That raises a very practical question: what exactly should the AI explain? A recommendation alone is not enough.",
      "textZh": "在受監理的保險業，解釋性不是加分項，而是信任的前提。",
      "slidePage": 14
    },
    {
      "id": "p04s03u09",
      "startTime": 1057.5,
      "endTime": 1062.2,
      "textEn": "The reviewer needs to see the reasoning pathway behind it.",
      "textZh": "在受監理的保險業，解釋性不是加分項，而是信任的前提。",
      "slidePage": 14
    },
    {
      "id": "p05s01u01",
      "startTime": 1063.4,
      "endTime": 1073.14,
      "textEn": "The AI reasoning pathway is designed to support explainable and trustworthy claims decision-making. A simple LLM answer is not enough for claims adjudication.",
      "textZh": "AI 推理路徑的目標是支援可解釋且可信任的理賠決策。",
      "slidePage": 15
    },
    {
      "id": "p05s01u02",
      "startTime": 1073.14,
      "endTime": 1082.45,
      "textEn": "If the system simply says, \"This claim should be paid,\" the reviewer cannot rely on it. We need a traceable reasoning pathway.",
      "textZh": "單純的 LLM 答案不夠，如果系統只說『這件應該給付』，審查員無法依賴它。",
      "slidePage": 15
    },
    {
      "id": "p05s01u03",
      "startTime": 1082.45,
      "endTime": 1096.84,
      "textEn": "For each case, the AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where inconsistencies were detected, and why a recommendation was made.",
      "textZh": "單純的 LLM 答案不夠，如果系統只說『這件應該給付』，審查員無法依賴它。",
      "slidePage": 15
    },
    {
      "id": "p05s01u04",
      "startTime": 1096.84,
      "endTime": 1108.69,
      "textEn": "For example, if an inconsistency is detected, the system should not only flag it. It should explain the inconsistency. Is the diagnosis date inconsistent with the hospitalization date?",
      "textZh": "系統必須說明用了哪些資訊、如何解讀、哪些條款相關、在哪裡偵測到不一致，以及為什麼做出建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u05",
      "startTime": 1108.69,
      "endTime": 1119.69,
      "textEn": "Does the receipt amount differ from the claim amount? Is there missing evidence for a required benefit condition? This reasoning pathway creates value for three audiences.",
      "textZh": "系統必須說明用了哪些資訊、如何解讀、哪些條款相關、在哪裡偵測到不一致，以及為什麼做出建議。",
      "slidePage": 15
    },
    {
      "id": "p05s01u06",
      "startTime": 1119.69,
      "endTime": 1129.01,
      "textEn": "For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s01u07",
      "startTime": 1129.01,
      "endTime": 1134.93,
      "textEn": "For actuaries, it creates more granular data about the cause and characteristics of claims.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s01u08",
      "startTime": 1134.93,
      "endTime": 1142.55,
      "textEn": "With these requirements in mind, we can now introduce the system we built to bring the pieces together.",
      "textZh": "這對理賠員、風險管理者與精算人員都有價值：它支援一致決策、詐欺與異常偵測，也產生更細緻的理賠原因資料。",
      "slidePage": 15
    },
    {
      "id": "p05s02u01",
      "startTime": 1143.35,
      "endTime": 1150.55,
      "textEn": "To bring these ideas together, we developed CAELIA: the Cathay AI Engine for Life Insurance Adjudication.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u02",
      "startTime": 1150.55,
      "endTime": 1161.81,
      "textEn": "CAELIA is designed to transform claims adjudication into an explainable and evidence-driven decision process. The name is important because this is not just a model.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u03",
      "startTime": 1161.81,
      "endTime": 1174.42,
      "textEn": "It is an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review. The objective is not to make AI look impressive.",
      "textZh": "為了把這些要求整合起來，我們發展了 CAELIA，也就是 Cathay AI Engine for Life Insurance Adjudication。",
      "slidePage": 16
    },
    {
      "id": "p05s02u04",
      "startTime": 1174.42,
      "endTime": 1182.08,
      "textEn": "The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.",
      "textZh": "它不只是一個模型，而是一個引擎，結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查。",
      "slidePage": 16
    },
    {
      "id": "p05s02u05",
      "startTime": 1182.08,
      "endTime": 1194.68,
      "textEn": "In practical terms, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.",
      "textZh": "它不只是一個模型，而是一個引擎，結合文件理解、知識檢索、保單解讀、多代理推理、決策報告與人工審查。",
      "slidePage": 16
    },
    {
      "id": "p05s02u06",
      "startTime": 1194.68,
      "endTime": 1204.59,
      "textEn": "The reviewer remains in control, but the reviewer starts from a much richer and better-organized evidence package. The next question is architectural.",
      "textZh": "目標不是讓 AI 看起來很厲害，而是讓理賠決策更透明、更一致、更具分析價值。",
      "slidePage": 16
    },
    {
      "id": "p05s02u07",
      "startTime": 1204.59,
      "endTime": 1217.65,
      "textEn": "If claims adjudication is made of many specialized reasoning tasks, should one model try to do everything, or should different agents take responsibility for different parts of the work?",
      "textZh": "目標不是讓 AI 看起來很厲害，而是讓理賠決策更透明、更一致、更具分析價值。",
      "slidePage": 16
    },
    {
      "id": "p05s03u01",
      "startTime": 1218.45,
      "endTime": 1227.22,
      "textEn": "At a high level, CAELIA uses a multi-agent architecture. Different agents are responsible for different parts of the workflow.",
      "textZh": "CAELIA 採用多代理架構。",
      "slidePage": 17
    },
    {
      "id": "p05s03u02",
      "startTime": 1227.22,
      "endTime": 1238.3,
      "textEn": "A document extraction agent identifies structured fields from medical records and claim forms. A medical understanding agent interprets diagnosis, treatment, hospitalization, and clinical context.",
      "textZh": "CAELIA 採用多代理架構。",
      "slidePage": 17
    },
    {
      "id": "p05s03u03",
      "startTime": 1238.3,
      "endTime": 1249.38,
      "textEn": "A policy interpretation agent retrieves relevant policy terms, benefit definitions, exclusions, and claim conditions. A risk analysis agent reviews risk indicators and possible inconsistencies.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u04",
      "startTime": 1249.38,
      "endTime": 1262.31,
      "textEn": "A reasoning and report agent combines the evidence and produces a structured pre-assessment report. This modular architecture has several advantages. First, it makes the system easier to govern.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u05",
      "startTime": 1262.31,
      "endTime": 1272.01,
      "textEn": "If there is an issue with policy interpretation or medical extraction, we can evaluate that component separately. Second, it supports explainability.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u06",
      "startTime": 1272.01,
      "endTime": 1278.93,
      "textEn": "Each agent contributes a specific part of the reasoning pathway. Third, it supports continuous improvement.",
      "textZh": "文件擷取 agent 從醫療記錄與申請文件中辨識欄位；醫療理解 agent 解讀診斷、治療、住院與臨床脈絡；保單解讀 agent 擷取條款、給付定義、除外與條件；風險分析 agent 檢視風險指標與不一致；推理報告 agent 則整合證據並產出預審報告。",
      "slidePage": 17
    },
    {
      "id": "p05s03u07",
      "startTime": 1278.93,
      "endTime": 1288.17,
      "textEn": "As policy knowledge, medical terminology, or fraud patterns evolve, we can update the relevant components without redesigning the entire system.",
      "textZh": "這讓系統更容易治理、解釋與持續改善。",
      "slidePage": 17
    },
    {
      "id": "p05s03u08",
      "startTime": 1288.17,
      "endTime": 1299.25,
      "textEn": "Architecture, however, only becomes useful when it changes the reviewer's daily work. So let us look at the practical output of this multi-agent process.",
      "textZh": "這讓系統更容易治理、解釋與持續改善。",
      "slidePage": 17
    },
    {
      "id": "p06s01u01",
      "startTime": 1300.45,
      "endTime": 1310.61,
      "textEn": "The output of CAELIA is an AI pre-assessment decision report. This report is designed to move from raw claims data to traceable decision recommendations.",
      "textZh": "CAELIA 的輸出是 AI 預審決策報告。",
      "slidePage": 18
    },
    {
      "id": "p06s01u02",
      "startTime": 1310.61,
      "endTime": 1321.61,
      "textEn": "A good report should answer several practical questions for the reviewer. What is the claim event? What medical facts were extracted? What policy benefits may apply?",
      "textZh": "好的報告要回答審查員的實務問題：理賠事件是什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s01u03",
      "startTime": 1321.61,
      "endTime": 1331.77,
      "textEn": "What evidence supports the recommendation? What remains uncertain? What should the human reviewer check before making the final decision? The report also supports auditability.",
      "textZh": "擷取到哪些醫療事實？可能適用哪些給付？",
      "slidePage": 18
    },
    {
      "id": "p06s01u04",
      "startTime": 1331.77,
      "endTime": 1342.36,
      "textEn": "If a case is reviewed later, the organization can understand what information was available, what reasoning was applied, and how the final decision was made.",
      "textZh": "支持建議的證據是什麼？還有哪些不確定？",
      "slidePage": 18
    },
    {
      "id": "p06s01u05",
      "startTime": 1342.36,
      "endTime": 1352.51,
      "textEn": "This is especially important when AI is used in regulated financial services. We must be able to demonstrate that AI output is not arbitrary.",
      "textZh": "人類審查員在最後決策前應該檢查什麼？",
      "slidePage": 18
    },
    {
      "id": "p06s01u06",
      "startTime": 1352.51,
      "endTime": 1361.83,
      "textEn": "It must be grounded in evidence, policy knowledge, and human oversight. Up to this point, we have mostly discussed operations and governance.",
      "textZh": "報告也支援稽核，讓組織日後能回溯當時可用資訊、推理方式與決策脈絡。",
      "slidePage": 18
    },
    {
      "id": "p06s01u07",
      "startTime": 1361.83,
      "endTime": 1368.6,
      "textEn": "Now I would like to shift the lens and ask: what does this mean for actuaries?",
      "textZh": "報告也支援稽核，讓組織日後能回溯當時可用資訊、推理方式與決策脈絡。",
      "slidePage": 18
    },
    {
      "id": "p06s02u01",
      "startTime": 1369.4,
      "endTime": 1382.05,
      "textEn": "Now let us move beyond operations and discuss actuarial value. Claims records are often treated as operational byproducts. They are created because we need to pay claims.",
      "textZh": "接著從精算角度看。理賠記錄常被視為營運副產品，因為我們需要付款才產生它。",
      "slidePage": 19
    },
    {
      "id": "p06s02u02",
      "startTime": 1382.05,
      "endTime": 1391.9,
      "textEn": "But if we structure them properly, they become actuarial-ready data. This is one of the most important points of our presentation.",
      "textZh": "理賠記錄常被視為營運副產品，因為我們需要付款才產生它。",
      "slidePage": 19
    },
    {
      "id": "p06s02u03",
      "startTime": 1391.9,
      "endTime": 1400.33,
      "textEn": "Traditional claims systems often capture final outcomes: claim type, payment amount, decision status, benefit code, and processing date.",
      "textZh": "但如果能妥善結構化，它就會變成 actuarial-ready data。",
      "slidePage": 19
    },
    {
      "id": "p06s02u04",
      "startTime": 1400.33,
      "endTime": 1406.43,
      "textEn": "These fields are useful, but they may not fully explain why claims occur.",
      "textZh": "但如果能妥善結構化，它就會變成 actuarial-ready data。",
      "slidePage": 19
    },
    {
      "id": "p06s02u05",
      "startTime": 1406.43,
      "endTime": 1419.08,
      "textEn": "Agentic AI can extract richer information from unstructured documents: diagnosis details, disease progression, treatment pattern, hospitalization reason, care needs, severity indicators, and the evidence behind coverage decisions.",
      "textZh": "傳統系統常記錄理賠類型、金額、決策狀態、給付代碼與處理日期，但不一定能解釋為什麼發生理賠。",
      "slidePage": 19
    },
    {
      "id": "p06s02u06",
      "startTime": 1419.08,
      "endTime": 1431.74,
      "textEn": "With proper governance, this information can support pricing, reserving, experience studies, risk segmentation, and product monitoring. In other words, AI does not only make claims operations faster.",
      "textZh": "傳統系統常記錄理賠類型、金額、決策狀態、給付代碼與處理日期，但不一定能解釋為什麼發生理賠。",
      "slidePage": 19
    },
    {
      "id": "p06s02u07",
      "startTime": 1431.74,
      "endTime": 1440.64,
      "textEn": "It expands the data available for actuarial analysis. This is particularly valuable under IFRS 17 and modern risk management.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u08",
      "startTime": 1440.64,
      "endTime": 1450.48,
      "textEn": "Insurers need faster feedback loops between actual claims experience and assumptions. If claims data remains unstructured, that feedback loop is delayed.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u09",
      "startTime": 1450.48,
      "endTime": 1457.05,
      "textEn": "If claims data becomes structured earlier, actuaries can respond more quickly to emerging experience.",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s02u10",
      "startTime": 1457.05,
      "endTime": 1469.7,
      "textEn": "This brings us to a familiar actuarial question, but with a new data foundation: are we only measuring what happened, or are we learning why it happened?",
      "textZh": "Agentic AI 可以從非結構文件中擷取診斷、病程、治療型態、住院原因、照護需求與決策證據，支援定價、準備金、經驗研究、風險分群與商品監控。",
      "slidePage": 19
    },
    {
      "id": "p06s03u01",
      "startTime": 1470.5,
      "endTime": 1482.36,
      "textEn": "Experience analysis is often built around outcomes. How many claims occurred? How much did we pay? What was the incidence rate? What was the severity?",
      "textZh": "經驗分析常從結果開始：發生多少理賠？給付多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u02",
      "startTime": 1482.36,
      "endTime": 1493.74,
      "textEn": "How did actual experience compare with expected experience? These are essential questions. But increasingly, insurers also need to understand causes. Why did incidence change?",
      "textZh": "發生率與嚴重度如何？實際經驗和預期差多少？",
      "slidePage": 20
    },
    {
      "id": "p06s03u03",
      "startTime": 1493.74,
      "endTime": 1506.54,
      "textEn": "Was it driven by aging, product mix, medical practice, customer behavior, provider behavior, fraud patterns, or benefit design? Are there early signs that assumptions should be updated?",
      "textZh": "這些問題很重要，但保險公司也越來越需要知道原因。",
      "slidePage": 20
    },
    {
      "id": "p06s03u04",
      "startTime": 1506.54,
      "endTime": 1515.55,
      "textEn": "By extracting more granular medical and claims information, CAELIA helps transform experience analysis from outcome-based analysis to cause-based analysis.",
      "textZh": "發生率變化是高齡化、商品組合、醫療行為、客戶行為、院所行為、詐欺模式，還是給付設計造成的？",
      "slidePage": 20
    },
    {
      "id": "p06s03u05",
      "startTime": 1515.55,
      "endTime": 1530.25,
      "textEn": "For example, instead of only seeing an increase in hospitalization claims, actuaries may be able to segment the increase by diagnosis group, age band, treatment type, provider category, or policy duration.",
      "textZh": "發生率變化是高齡化、商品組合、醫療行為、客戶行為、院所行為、詐欺模式，還是給付設計造成的？",
      "slidePage": 20
    },
    {
      "id": "p06s03u06",
      "startTime": 1530.25,
      "endTime": 1543.06,
      "textEn": "This supports better incidence estimation and more meaningful assumption review. Better data granularity does not automatically produce better actuarial judgment, but it gives actuaries a stronger foundation.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s03u07",
      "startTime": 1543.06,
      "endTime": 1551.12,
      "textEn": "It helps us ask better questions, detect emerging trends earlier, and communicate findings more clearly to management.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s03u08",
      "startTime": 1551.12,
      "endTime": 1564.4,
      "textEn": "Once we understand causes more clearly, the next natural question is how those insights can inform product and pricing discussions without turning the presentation into a pricing disclosure.",
      "textZh": "CAELIA 透過更細緻的醫療與理賠資訊，把經驗分析從 outcome-based 推向 cause-based。",
      "slidePage": 20
    },
    {
      "id": "p06s04u01",
      "startTime": 1565.2,
      "endTime": 1578.3,
      "textEn": "Once experience analysis becomes more cause-based, it can also support pricing applications. We should be clear: this presentation is not about disclosing pricing strategy or specific product pricing.",
      "textZh": "當我們更清楚理解原因，這些洞察也能支援定價與商品討論。",
      "slidePage": 21
    },
    {
      "id": "p06s04u02",
      "startTime": 1578.3,
      "endTime": 1590.47,
      "textEn": "Instead, we are discussing the analytical capability. When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity.",
      "textZh": "這裡不是揭露具體定價策略，而是討論分析能力。",
      "slidePage": 21
    },
    {
      "id": "p06s04u03",
      "startTime": 1590.47,
      "endTime": 1597.02,
      "textEn": "This may support risk segmentation, product design review, benefit structure evaluation, and assumption setting.",
      "textZh": "這裡不是揭露具體定價策略，而是討論分析能力。",
      "slidePage": 21
    },
    {
      "id": "p06s04u04",
      "startTime": 1597.02,
      "endTime": 1607.32,
      "textEn": "For example, if a product experiences higher-than-expected claims, the traditional analysis may only show that actual loss ratio is higher than expected.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u05",
      "startTime": 1607.32,
      "endTime": 1619.49,
      "textEn": "A more granular analysis may show that the increase is concentrated in certain medical causes, certain age groups, certain claim behaviors, or certain combinations of benefits.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u06",
      "startTime": 1619.49,
      "endTime": 1625.57,
      "textEn": "That difference matters. Without cause analysis, management may only see a financial result.",
      "textZh": "更細緻的理賠資料能幫助定價團隊理解風險因子如何影響頻率與嚴重度，支援風險分群、商品設計檢視、給付結構評估與假設設定。",
      "slidePage": 21
    },
    {
      "id": "p06s04u07",
      "startTime": 1625.57,
      "endTime": 1636.33,
      "textEn": "With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u08",
      "startTime": 1636.33,
      "endTime": 1647.1,
      "textEn": "This is the connection between claims AI and risk-based pricing. AI helps convert claims documents into structured evidence. Structured evidence improves experience analysis.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u09",
      "startTime": 1647.1,
      "endTime": 1659.73,
      "textEn": "Better experience analysis supports more informed pricing and risk management decisions. Of course, none of this works if the AI is reasoning from unstable or unmanaged knowledge.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p06s04u10",
      "startTime": 1659.73,
      "endTime": 1665.35,
      "textEn": "So the next layer is the knowledge foundation that supports every decision.",
      "textZh": "沒有 cause analysis，管理層可能只看到損率升高；有 cause analysis，才有機會評估應該更新假設、調整核保、強化理賠審查或改善商品設計。",
      "slidePage": 21
    },
    {
      "id": "p07s01u01",
      "startTime": 1666.55,
      "endTime": 1677.64,
      "textEn": "To make this work, CAELIA needs a strong knowledge foundation. The knowledge foundation includes policy terms, benefit definitions, exclusions, claims rules, regulatory requirements, operational guidelines, and domain knowledge.",
      "textZh": "要做到這些，CAELIA 需要穩固的知識基礎，包括保單條款、給付定義、除外、理賠規則、監理要求、作業準則與領域知識。",
      "slidePage": 22
    },
    {
      "id": "p07s01u02",
      "startTime": 1677.64,
      "endTime": 1688.33,
      "textEn": "This knowledge must be structured and governed. If the knowledge base is incomplete or outdated, the AI may retrieve the wrong information or apply the wrong rule.",
      "textZh": "要做到這些，CAELIA 需要穩固的知識基礎，包括保單條款、給付定義、除外、理賠規則、監理要求、作業準則與領域知識。",
      "slidePage": 22
    },
    {
      "id": "p07s01u03",
      "startTime": 1688.33,
      "endTime": 1698.23,
      "textEn": "We also need data lineage. When the AI uses a policy clause or a medical fact, the system should be able to trace the source.",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u04",
      "startTime": 1698.23,
      "endTime": 1704.97,
      "textEn": "Reviewers should be able to see where the information came from. This is especially important for explainability.",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u05",
      "startTime": 1704.97,
      "endTime": 1710.51,
      "textEn": "In a claims decision, it is not enough to say \"the model thinks so.\"",
      "textZh": "這些知識必須被結構化並治理，否則 AI 可能取用錯誤資訊或套用錯誤規則。",
      "slidePage": 22
    },
    {
      "id": "p07s01u06",
      "startTime": 1710.51,
      "endTime": 1721.99,
      "textEn": "We need to say: here is the document, here is the extracted fact, here is the relevant policy term, here is the reasoning, and here is the remaining uncertainty.",
      "textZh": "我們也需要資料血緣，讓系統能追溯 AI 使用的條款或醫療事實來源。",
      "slidePage": 22
    },
    {
      "id": "p07s01u07",
      "startTime": 1721.99,
      "endTime": 1732.29,
      "textEn": "The knowledge foundation is what makes the AI system controllable. It anchors AI reasoning in approved business knowledge rather than allowing the model to improvise freely.",
      "textZh": "知識基礎讓 AI 推理受到核准的業務知識約束，而不是自由發揮。",
      "slidePage": 22
    },
    {
      "id": "p07s01u08",
      "startTime": 1732.29,
      "endTime": 1741.4,
      "textEn": "The most important example of this knowledge foundation is policy interpretation, because in claims, a small difference in wording can change the decision.",
      "textZh": "知識基礎讓 AI 推理受到核准的業務知識約束，而不是自由發揮。",
      "slidePage": 22
    },
    {
      "id": "p07s02u01",
      "startTime": 1742.2,
      "endTime": 1755.27,
      "textEn": "Policy interpretation is one of the most important and most difficult parts of claims adjudication. Insurance policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.",
      "textZh": "保單解讀是知識基礎中最重要也最困難的部分之一。",
      "slidePage": 23
    },
    {
      "id": "p07s02u02",
      "startTime": 1755.27,
      "endTime": 1766.48,
      "textEn": "A claim decision often depends on the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.",
      "textZh": "保單包含定義、給付條件、除外、等待期、限額與特殊規則，理賠決策常取決於精確解讀。",
      "slidePage": 23
    },
    {
      "id": "p07s02u03",
      "startTime": 1766.48,
      "endTime": 1777.68,
      "textEn": "But again, the goal is not to remove human judgment. The goal is to make the relevant policy logic visible and easier to review.",
      "textZh": "保單包含定義、給付條件、除外、等待期、限額與特殊規則，理賠決策常取決於精確解讀。",
      "slidePage": 23
    },
    {
      "id": "p07s02u04",
      "startTime": 1777.68,
      "endTime": 1791.22,
      "textEn": "For example, if a claim involves hospitalization benefits, the system can retrieve the relevant policy clauses, compare required conditions with extracted medical facts, and highlight missing or conflicting information.",
      "textZh": "CAELIA 讓相關保單邏輯更可見、更容易審查。",
      "slidePage": 23
    },
    {
      "id": "p07s02u05",
      "startTime": 1791.22,
      "endTime": 1802.42,
      "textEn": "The reviewer can then focus on judgment. Does the medical evidence truly satisfy the policy definition? Is additional documentation required? Is there an exception?",
      "textZh": "CAELIA 讓相關保單邏輯更可見、更容易審查。",
      "slidePage": 23
    },
    {
      "id": "p07s02u06",
      "startTime": 1802.42,
      "endTime": 1806.63,
      "textEn": "Does the case require escalation? This approach improves consistency.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s02u07",
      "startTime": 1806.63,
      "endTime": 1815.96,
      "textEn": "Different reviewers can begin from the same structured evidence and policy references, while still applying professional judgment to complex cases.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s02u08",
      "startTime": 1815.96,
      "endTime": 1823.9,
      "textEn": "If we step back from the individual components, we can now summarize the value across the organization.",
      "textZh": "以住院給付為例，系統可以抓出相關條款，把條件與醫療事實比對，並提示缺漏或衝突資訊，讓審查員專注於專業判斷。",
      "slidePage": 23
    },
    {
      "id": "p07s03u01",
      "startTime": 1824.7,
      "endTime": 1833.27,
      "textEn": "Let us bring the benefits together. We see four major benefit areas: operations, risk control, governance, and actuarial insight.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u02",
      "startTime": 1833.27,
      "endTime": 1843.2,
      "textEn": "For operations, CAELIA reduces manual document review, accelerates evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u03",
      "startTime": 1843.2,
      "endTime": 1849.96,
      "textEn": "For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u04",
      "startTime": 1849.96,
      "endTime": 1857.18,
      "textEn": "It helps move risk review from after-the-fact investigation to more real-time detection during the claims workflow.",
      "textZh": "總結價值，可以分成四個面向：營運、風險控管、治理與精算。",
      "slidePage": 24
    },
    {
      "id": "p07s03u05",
      "startTime": 1857.18,
      "endTime": 1868.91,
      "textEn": "For governance, human-in-the-loop review, traceable reasoning, structured knowledge, and data lineage help make AI output explainable and auditable. This is essential for responsible AI in insurance.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u06",
      "startTime": 1868.91,
      "endTime": 1876.58,
      "textEn": "For actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u07",
      "startTime": 1876.58,
      "endTime": 1886.06,
      "textEn": "Instead of only receiving final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and decision rationale.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u08",
      "startTime": 1886.06,
      "endTime": 1892.37,
      "textEn": "This supports experience studies, incidence rate review, assumption updates, reserve analysis, and product monitoring.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u09",
      "startTime": 1892.37,
      "endTime": 1899.14,
      "textEn": "The broader lesson is that AI value should not be measured only by time saved.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u10",
      "startTime": 1899.14,
      "endTime": 1909.51,
      "textEn": "In insurance, AI value should also be measured by the quality of decisions, the strength of governance, and the improvement in enterprise learning.",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s03u11",
      "startTime": 1909.51,
      "endTime": 1923.5,
      "textEn": "So as we close, I would like to return to the question we raised at the beginning: are claims records simply evidence for payment, or can they become evidence for learning?",
      "textZh": "營運上，CAELIA 減少人工文件審查並加速證據準備；風險控管上，它更早發現不一致、異常與詐欺指標；治理上，human-in-the-loop、可追溯推理、結構化知識與資料血緣讓 AI 可解釋、可稽核；精算上，理賠資料變得更結構化且有意義，支援經驗研究、發生率檢視、假設更新、準備金分析與商品監控。",
      "slidePage": 24
    },
    {
      "id": "p07s04u01",
      "startTime": 1924.3,
      "endTime": 1937.06,
      "textEn": "To conclude, we would like to return to the title of our presentation: beyond efficiency. Efficiency is important. Faster claims processing improves customer experience and reduces operational burden.",
      "textZh": "最後回到標題：beyond efficiency。",
      "slidePage": 25
    },
    {
      "id": "p07s04u02",
      "startTime": 1937.06,
      "endTime": 1943.9,
      "textEn": "But for life insurers, the bigger opportunity is to build a claims ecosystem that learns.",
      "textZh": "效率很重要，但對壽險公司來說，更大的機會是建立會學習的理賠生態系。",
      "slidePage": 25
    },
    {
      "id": "p07s04u03",
      "startTime": 1943.9,
      "endTime": 1955.75,
      "textEn": "Every claim contains information about customer needs, medical trends, product performance, operational risk, and emerging experience. Historically, much of that information was locked inside unstructured documents.",
      "textZh": "效率很重要，但對壽險公司來說，更大的機會是建立會學習的理賠生態系。",
      "slidePage": 25
    },
    {
      "id": "p07s04u04",
      "startTime": 1955.75,
      "endTime": 1967.6,
      "textEn": "Agentic AI gives us a practical way to unlock it, as long as we design the system with governance, explainability, and human oversight from the beginning.",
      "textZh": "每一件理賠都包含客戶需求、醫療趨勢、商品表現、營運風險與新興經驗。",
      "slidePage": 25
    },
    {
      "id": "p07s04u05",
      "startTime": 1967.6,
      "endTime": 1975.34,
      "textEn": "Our experience suggests three takeaways. First, AI in claims should be designed as augmentation, not only automation.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u06",
      "startTime": 1975.34,
      "endTime": 1987.19,
      "textEn": "The goal is to help professionals make better decisions, not simply to remove human involvement. Second, claims data should be treated as a strategic actuarial asset.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u07",
      "startTime": 1987.19,
      "endTime": 1996.31,
      "textEn": "When unstructured records become structured, traceable, and governed, they can strengthen experience studies, pricing assumptions, reserving analysis, and risk monitoring.",
      "textZh": "Agentic AI 可以解鎖這些資訊，但前提是從一開始就把治理、可解釋性與人工監督納入架構。",
      "slidePage": 25
    },
    {
      "id": "p07s04u08",
      "startTime": 1996.31,
      "endTime": 2002.23,
      "textEn": "Third, responsible AI is not a separate compliance layer added at the end.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u09",
      "startTime": 2002.23,
      "endTime": 2009.98,
      "textEn": "It must be built into the architecture: human-in-the-loop review, knowledge governance, data lineage, explainable reasoning, and auditability.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u10",
      "startTime": 2009.98,
      "endTime": 2021.83,
      "textEn": "As Taiwan and many other markets face aging populations, rising medical complexity, and post-IFRS 17 operational demands, we believe actuaries have an important role to play.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u11",
      "startTime": 2021.83,
      "endTime": 2031.85,
      "textEn": "Actuaries can help connect AI capability with business value, risk management, governance, and long-term sustainability. Thank you very much for your time.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    },
    {
      "id": "p07s04u12",
      "startTime": 2031.85,
      "endTime": 2035.5,
      "textEn": "We would be happy to take your questions.",
      "textZh": "三個 takeaway 是：AI 應該被設計為 augmentation；理賠資料應被視為 strategic actuarial asset；負責任 AI 必須內建在架構裡，而不是最後才加上去。",
      "slidePage": 25
    }
  ]
};
