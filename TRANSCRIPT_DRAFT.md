# 逐字稿改寫版（口語化）
> 共 248 段，每段目標 ≤ 25 字

---

## Slide 1
**[p01s01u01]** Good afternoon, everyone. Thanks so much for being here.

**[p01s01u02]** My name is Li Yu Tsao, and joining me today is my colleague Yu Chung Wu from Cathay Life Insurance in Taiwan.

**[p01s01u03]** Today we want to share something that sits right at the crossroads of claims operations, actuarial analytics, risk management, and responsible AI.

**[p01s01u04]** Our talk is called "Beyond Efficiency: Leveraging Agentic AI for Claims Experience Analysis and Risk Resilience in Taiwan's Life Insurance."

**[p01s01u05]** When most people first hear about AI in claims, they immediately think about efficiency: faster processing, less manual work, and shorter waiting time for customers.

**[p01s01u06]** Those questions matter. But today we want to go one step further and ask what claims AI can teach the organization.

**[p01s01u07]** We want to talk about how claims AI can be more than just an automation tool.

**[p01s01u08]** It can actually become a real source of actuarial insight.

**[p01s01u09]** It can help insurers spot emerging health trends, sharpen experience analysis, strengthen fraud monitoring, and build a more resilient operation overall.

**[p01s01u10]** Our core message is pretty simple: if claims data can go from messy, unstructured records to something explainable, governed, and ready for actuarial use, then claims operations can become a true strategic asset for the whole company.

**[p01s01u11]** As you listen today, I'd invite you to keep one question in mind: in your own organization, are claims records mainly treated as evidence for payment — or also as evidence for learning?

## Slide 4
**[p01s02u01]** Let me briefly introduce the two of us.

**[p01s02u02]** My work focuses on applying AI and machine learning to insurance operations — especially natural language processing and large language models, which we call LLMs, for claims and medical documentation.

**[p01s02u03]** And I'm Yu Chung Wu. My work focuses on claims operations and AI system architecture.

**[p01s02u04]** On this project, we worked closely with claims professionals, data scientists, IT teams, and governance stakeholders to design an AI-assisted claims pre-adjudication framework.

**[p01s02u05]** Together, we'll walk you through three questions. First, why is Taiwan's life insurance claims environment getting more complex?

**[p01s02u06]** Second, how did we design CAELIA — the Cathay AI Engine for Life Insurance Adjudication — as an agentic AI framework?

**[p01s02u07]** Agentic AI, by the way, is AI that can take initiative and carry out multi-step tasks on its own.

**[p01s02u08]** And third, how can this kind of framework create value beyond just operational efficiency — especially for experience studies, pricing, reserving, risk monitoring, and governance?

**[p01s02u09]** With that framing in place, let's start with the pressures that made this work necessary in the first place.

## Slide 5
**[p01s03u01]** Let's start with the business context.

**[p01s03u02]** Claims operations in Taiwan are under structural pressure from three directions: rising external pressure, a growing internal workload, and emerging constraints around talent and organization.

**[p01s03u03]** The first pressure is demographic and medical.

**[p01s03u04]** Taiwan is entering what's called a super-aged society.

**[p01s03u05]** Life insurers are seeing more and more claims tied to chronic disease, dementia, long-term care, hospitalization, and post-treatment recovery.

**[p01s03u06]** These cases often involve complex medical records, multiple diagnoses, and long claims histories.

**[p01s03u07]** At the same time, rising healthcare costs are shifting more financial responsibility onto private insurance.

**[p01s03u08]** People are increasingly relying on life and health insurance to cover medical and long-term care needs.

**[p01s03u09]** On the slide, you can see the scale of that pressure: claim volume has grown by 56 percent.

**[p01s03u10]** The second pressure is operational.

**[p01s03u11]** At Cathay Life, we are talking about more than 1.6 million claims a year, with more high-frequency, low-severity claims entering the workflow.

**[p01s03u12]** Individually, they might not be large amounts.

**[p01s03u13]** But together they create real fragmentation, because every single case still needs document review, policy interpretation, data entry, and quality control.

**[p01s03u14]** The third pressure is talent. Claims adjudication requires experienced judgment across medical terminology, policy terms, fraud patterns, customer situations, and regulatory expectations.

**[p01s03u15]** But experienced claims and risk professionals are hard to scale up quickly. So the challenge isn't just "how do we process more claims?"

**[p01s03u16]** The deeper question is: "When both complexity and volume are going up at the same time, how do we keep decision quality, risk control, and actuarial insight strong?"

**[p01s03u17]** That's the starting point for our AI journey.

**[p01s03u18]** Before we get into the technology, it's worth stepping back and asking: how did claims adjudication get to this point, and why aren't the old tools enough anymore?

## Slide 6
**[p02s01u01]** Claims processing has always evolved alongside the available technology. But each stage solved one problem while leaving another one behind.

**[p02s01u02]** In the IBM AS/400 era, claims processing was mostly data-entry driven. The main goal was to record claims accurately and get payments out.

**[p02s01u03]** In the core systems era, insurers digitized their workflows and introduced rule-based engines, which made standard claims more consistent.

**[p02s01u04]** In the data modeling era, machine learning models supported risk tagging, anomaly detection, and triage. But many of those models were still limited to scoring.

**[p02s01u05]** They could identify higher-risk cases, but they didn't always explain the evidence in a way that reviewers could immediately act on.

**[p02s01u06]** Now we're entering what we call the agentic AI era.

**[p02s01u07]** AI is no longer just a passive tool waiting for someone to ask it a question.

**[p02s01u08]** It can actively take part in parts of the adjudication process — reading documents, pulling out evidence, comparing information against policy terms, spotting inconsistencies, and generating recommendations.

**[p02s01u09]** But this shift also raises an important governance question.

**[p02s01u10]** If AI is becoming more active, how do we keep it explainable, controllable, auditable, and aligned with professional judgment?

**[p02s01u11]** Our answer isn't full automation without any oversight.

**[p02s01u12]** It's human-in-the-loop agentic AI: AI does the structured analysis and prepares the evidence, while human reviewers keep the final decision authority.

**[p02s01u13]** To see why that matters, let's look at the actual claims journey.

**[p02s01u14]** Where does complexity enter the workflow, and where does valuable information start to disappear?

## Slide 7
**[p02s02u01]** Before we explain the new framework, let's look at the traditional claims review process. In a typical flow, a customer submits their claim documents.

**[p02s02u02]** The slide breaks this into six steps: intake, registration and case creation, case assignment, review, decision, and finally closure and archiving.

**[p02s02u03]** That sounds pretty straightforward — but in practice, many steps require a lot of interpretation.

**[p02s02u04]** A medical certificate might have free-text descriptions, abbreviations, different hospital formats, or Traditional Chinese medical terminology.

**[p02s02u05]** A diagnosis might need to be mapped to an internal disease category.

**[p02s02u06]** A procedure or hospitalization period might need to be checked against policy definitions, exclusions, deductibles, or benefit limits.

**[p02s02u07]** And here's the key challenge: most of the most valuable information isn't born in a structured format.

**[p02s02u08]** If we only capture the final outcome — approved or declined, or the final payment amount — we lose a huge amount of explanatory information along the way.

**[p02s02u09]** For operations, that means more manual work. For actuaries, it means weaker data granularity.

**[p02s02u10]** We might know the claim result, but we may not fully know the cause, the medical pathway, the detailed risk factors, or what evidence was behind the decision.

**[p02s02u11]** That's why we believe the claims process needs to be redesigned — not just as a payment workflow, but as a data transformation workflow too.

**[p02s02u12]** If we look at it through that lens, the first question becomes: how early can we capture useful information, and how much structure can we create before the case even reaches a human reviewer?

## Slide 8
**[p02s03u01]** The first step is digital claims submission.

**[p02s03u02]** As the app screens show, customers can start a claims application, upload documents, check claims results, and review application details directly through the mobile app.

**[p02s03u03]** This is great for customer convenience and it shortens turnaround time. But digital submission alone doesn't solve the whole problem.

**[p02s03u04]** A claim might arrive digitally, but the supporting medical documents are still unstructured.

**[p02s03u05]** They might be scanned images, PDFs, hospital certificates, receipts, diagnosis documents, or discharge summaries. So digitalization is necessary — but it's not enough on its own.

**[p02s03u06]** It gets us the documents faster, but it doesn't automatically create analytical value.

**[p02s03u07]** To create that analytical value, we need to convert those documents into structured, reliable, and explainable data.

**[p02s03u08]** That's where OCR, large language models, and agentic AI start to play a role.

**[p02s03u09]** OCR converts images to machine-readable text; LLMs understand the meaning of what's in those documents.

**[p02s03u10]** But once documents arrive digitally, we still face a second question: can AI understand what's inside those documents well enough to support the decisions that come next?

## Slide 9
**[p03s01u01]** After submission, the next step is case registration. Traditionally, staff would review documents and manually type key fields into the claims system.

**[p03s01u02]** AI-driven structured data extraction changes that step. In our framework, OCR first converts document images into machine-readable text.

**[p03s01u03]** Then LLM-based extraction identifies fields like diagnosis, treatment dates, hospital name, surgery information, claim amount, and other relevant details.

**[p03s01u04]** But we don't treat extraction as a simple copy-and-paste task.

**[p03s01u05]** The AI needs to distinguish past medical history from the current claim event, a suspected diagnosis from a confirmed one, and one hospital's document style from another.

**[p03s01u06]** For Traditional Chinese medical documentation, this is especially important.

**[p03s01u07]** The language is very domain-specific, and the same clinical concept can show up in completely different wording across different hospitals.

**[p03s01u08]** By structuring this information early, we create a much better foundation for downstream triage, review, risk analysis, and actuarial use.

**[p03s01u09]** Once that foundation is in place, the workflow can move from simple case creation to something more decision-oriented: which cases need more attention, and why?

## Slide 10
**[p03s02u01]** Once case data is structured, we can move into claims triage. Machine learning models can assess claim risk and help route cases.

**[p03s02u02]** Low-risk, straightforward cases can go through a more streamlined workflow, while complex or suspicious cases get sent to experienced reviewers for a deeper look.

**[p03s02u03]** This kind of triage helps operations allocate human expertise more effectively. But there's an important limitation: a risk score by itself isn't enough.

**[p03s02u04]** If a model says a case has a risk score of 82 out of 100, the claims reviewer still needs to know why.

**[p03s02u05]** Is the risk coming from a diagnosis inconsistency? Repeated claims? A provider pattern? Unusual timing? Policy duration? Medical history? Or a document inconsistency?

**[p03s02u06]** This is where traditional machine learning and agentic AI can work together. Machine learning is great at spotting patterns at scale.

**[p03s02u07]** Agentic AI can gather the evidence, organize the reasoning, and lay out the basis for review.

**[p03s02u08]** The goal isn't to hand a reviewer a black-box score and walk away.

**[p03s02u09]** The goal is to help them make faster, better-informed, more consistent decisions. This leads naturally to the next design question.

**[p03s02u10]** If a case is routed to a human reviewer, what should that review environment look like — so that human expertise is used where it actually matters most?

## Slide 11
**[p03s03u01]** For cases that need human review, we built a unified smart claims platform.

**[p03s03u02]** The idea is to bring multi-source data into one review workbench, so reviewers don't have to jump between systems, documents, policy references, customer records, risk tags, and decision notes.

**[p03s03u03]** Everything is in one place: claims information, risk detection results, quick access to related documents, and decision support.

**[p03s03u04]** This matters because operational efficiency isn't only about automating tasks. It's also about reducing cognitive load.

**[p03s03u05]** When information is scattered across systems, reviewers spend a lot of time just searching, comparing, and reconciling.

**[p03s03u06]** When it's organized, they can spend more time on actual professional judgment.

**[p03s03u07]** In other words, the system shouldn't just process data. It should create a better decision environment for experts.

**[p03s03u08]** Once the reviewer is in that environment, AI support has to appear at the right moment. The question isn't just "Can AI analyze this case?"

**[p03s03u09]** It's "Can AI help the reviewer think more clearly about this case?"

## Slide 12
**[p04s01u01]** Inside the review workbench, we embed several AI-assisted features. The first is risk tagging.

**[p04s01u02]** AI highlights risk indicators and helps reviewers understand which parts of the case deserve attention. The second is decision support.

**[p04s01u03]** AI summarizes the relevant medical facts, policy terms, and claim conditions, then organizes them into a review-ready format. The third is relationship graph analysis.

**[p04s01u04]** This helps reviewers see connections among claimants, providers, agents, prior claims, or other related parties — when that kind of analysis is relevant and permitted.

**[p04s01u05]** These features aren't separate from the claims workflow. They're embedded right where the reviewer is already working.

**[p04s01u06]** This matters because AI adoption isn't just a modeling problem.

**[p04s01u07]** It's also a workflow design problem. If AI output appears somewhere outside the normal workflow, people may just ignore it.

**[p04s01u08]** But if it's embedded at the right moment, in the right interface, with the right evidence — it becomes part of the decision process.

**[p04s01u09]** That's the point where AI stops being just a feature inside a system and starts becoming part of the actual decision architecture.

**[p04s01u10]** And that brings us to the bigger question on this slide.

## Slide 13
**[p04s02u01]** Now we're at a key turning point in our presentation. How does AI evolve from a tool into a collaborative decision-making system?

**[p04s02u02]** In the early stage, AI works like a query tool. A user asks a question, and AI responds.

**[p04s02u03]** That's useful, but it depends heavily on the user's ability to ask the right question.

**[p04s02u04]** In the next stage, AI becomes more like a digital specialist.

**[p04s02u05]** It understands the task, takes initiative, detects missing information, flags inconsistencies, suggests next steps, and prepares analysis before you even ask.

**[p04s02u06]** And in the most advanced stage, AI becomes more like an intelligent team: one agent extracts medical information, another interprets policy terms, another checks benefit rules or risk indicators, and another prepares the explanation and decision report.

**[p04s02u07]** This multi-agent design makes sense because claims adjudication isn't a single task. It's a sequence of specialized reasoning steps.

**[p04s02u08]** But we should be careful with the word "collaborative." We don't mean that AI has the same authority as a human claims professional.

**[p04s02u09]** We mean that AI collaborates by doing evidence preparation, consistency checking, and structured reasoning — while humans provide the judgment, the accountability, and the final sign-off.

**[p04s02u10]** This is the foundation of our human-in-the-loop design. And it's also where trust becomes the central issue.

**[p04s02u11]** For that trust to hold, the people using this system must be able to question its output, verify the reasoning behind it, and remain fully accountable for every decision they make.

## Slide 14
**[p04s03u01]** That accountability requirement is exactly why we designed this workflow as human-in-the-loop pre-adjudication: agentic AI provides the analysis and recommendations, while human reviewers retain the final call.

**[p04s03u02]** The distinction between pre-adjudication and adjudication is really important here. We're not saying AI independently approves or rejects complex claims.

**[p04s03u03]** Instead, AI prepares a pre-assessment: the reviewed documents, extracted facts, relevant policy terms, supporting evidence, things that need attention, and a suggested recommendation.

**[p04s03u04]** The human reviewer then evaluates the evidence and the recommendation. If the output is complete, the reviewer can move faster.

**[p04s03u05]** If something looks off or inconsistent, the reviewer can challenge it, correct it, or ask for more investigation. This design gives us two real benefits.

**[p04s03u06]** First, it improves efficiency because the routine evidence preparation is accelerated. Second, it improves governance because the AI's reasoning pathway is visible.

**[p04s03u07]** The reviewer can see not just the recommendation, but the basis for that recommendation. In regulated insurance operations, explainability isn't a nice-to-have.

**[p04s03u08]** It's a condition for trust. And that raises a very practical question: what exactly should AI explain? A recommendation alone isn't enough.

**[p04s03u09]** The reviewer needs to see the reasoning pathway behind it.

**[p04s03u10]** You'll notice four actuarial benefits at the bottom of this slide — better risk identification, more precise rate setting, stronger product design, and more controllable loss costs. But every one of those benefits depends on a single condition: the AI's recommendations must be explainable enough to genuinely trust.

## Slide 15
**[p05s01u01]** So how does the AI actually reason through a case — and how can a reviewer trust that reasoning?

**[p05s01u02]** If the system simply says, "This claim should be paid" — the reviewer can't rely on that. We need a traceable reasoning pathway.

**[p05s01u03]** For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.

**[p05s01u04]** Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.

**[p05s01u05]** The AI checks the medical facts against policy terms and medical guidelines.

**[p05s01u06]** It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.

**[p05s01u07]** For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.

**[p05s01u08]** And for actuaries, it creates more granular data about the cause and characteristics of claims.

**[p05s01u09]** These requirements define what a real claims AI system needs to deliver — and building to those requirements is exactly what we set out to do.

## Slide 16
**[p05s02u01]** To operationalize this reasoning pathway, we built CAELIA — the Cathay AI Engine for Life Insurance Adjudication.

**[p05s02u02]** CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.

**[p05s02u03]** It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.

**[p05s02u04]** The objective isn't to make AI look impressive.

**[p05s02u05]** The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.

**[p05s02u06]** In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.

**[p05s02u07]** The reviewer stays in control — but they're starting from a much richer, better-organized evidence package.

**[p05s02u08]** The design question then becomes: can one model realistically handle every specialized reasoning task that claims adjudication requires?

**[p05s02u09]** Or should different agents each own a different part of the work?

## Slide 17
**[p05s03u01]** Our answer is a multi-agent architecture, where each agent owns a specific part of the reasoning.

**[p05s03u02]** A document extraction agent picks out structured fields from medical records and claim forms.

**[p05s03u03]** A medical understanding agent interprets diagnoses, treatments, hospitalization details, and clinical context.

**[p05s03u04]** A policy interpretation agent retrieves relevant policy terms, benefit definitions, exclusions, and claim conditions. A risk analysis agent reviews risk indicators and flags possible inconsistencies.

**[p05s03u05]** And a reasoning and report agent combines all the evidence and produces a structured pre-assessment report. This modular design has a few key advantages.

**[p05s03u06]** First, it's easier to govern.

**[p05s03u07]** If there's an issue with policy interpretation or medical extraction, we can evaluate that component on its own. Second, it supports explainability.

**[p05s03u08]** Each agent contributes a specific piece of the reasoning pathway. Third, it supports continuous improvement.

**[p05s03u09]** As policy knowledge, medical terminology, or fraud patterns evolve, we can update the relevant components without having to redesign the whole system.

**[p05s03u10]** Architecture only matters when it changes the reviewer's actual experience — so let's look at what this architecture produces in practice.

## Slide 18
**[p06s01u01]** The most visible result of that architecture is the AI pre-assessment decision report.

**[p06s01u02]** This report is designed to take raw claims data and turn it into a traceable decision recommendation.

**[p06s01u03]** A good report should answer several practical questions for the reviewer. What's the claim event? What medical facts were extracted? What policy benefits might apply?

**[p06s01u04]** What evidence supports the recommendation? What's still uncertain? And what should the human reviewer check before making the final call?

**[p06s01u05]** In the example, the report shows confidence scores for different parts of the case, such as 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.

**[p06s01u06]** This is especially important when AI is used in regulated financial services. We need to be able to show that AI output isn't arbitrary.

**[p06s01u07]** It has to be grounded in evidence, policy knowledge, and human oversight.

**[p06s01u08]** That's the operational and governance case. But once claims records are this structured and traceable, something more fundamental becomes possible for the organization.

## Slide 19
**[p06s02u01]** Claims records stop being just operational evidence — records that exist because claims need to be paid. They become analytical evidence, structured and governed well enough to support actuarial work.

**[p06s02u02]** And this is one of the most important points we want to make today.

**[p06s02u03]** The structured output has three layers. The first is the result layer: what was approved, denied, or left pending, and what benefit item was involved.

**[p06s02u04]** The second is the policy and decision layer: which policy terms applied, whether the benefit condition matched, and whether exclusions were triggered.

**[p06s02u05]** The third is the medical assessment layer: diagnosis codes, procedures, treatment information, medical necessity, and clinical justification.

**[p06s02u06]** With proper governance, this information can support pricing, reserving, experience studies, risk segmentation, and product monitoring.

**[p06s02u07]** In other words, AI doesn't just make claims operations faster.

**[p06s02u08]** It expands the data available for actuarial analysis. And this is especially valuable under IFRS 17 and modern risk management frameworks.

**[p06s02u09]** Insurers need faster feedback loops between actual claims experience and their assumptions. If claims data stays unstructured, that feedback loop is slow.

**[p06s02u10]** But if claims data becomes structured earlier in the process, actuaries can respond more quickly to emerging experience.

**[p06s02u11]** The question becomes whether that richer foundation can help us move from measuring outcomes to understanding what actually drives them.

## Slide 20
**[p06s03u01]** Traditional experience analysis tells us what happened. A stronger claims data foundation helps us understand why.

**[p06s03u02]** How did actual experience compare to what we expected? These are essential questions. But more and more, insurers also need to understand the causes.

**[p06s03u03]** Why did incidence change?

**[p06s03u04]** Was it driven by aging? Product mix? Changes in medical practice? Customer behavior? Provider behavior? Fraud patterns? Or benefit design?

**[p06s03u05]** Are there early signals that assumptions need to be updated?

**[p06s03u06]** Take the example on this slide: an 80-year-old male has an accidental death claim after a fall.

**[p06s03u07]** Traditional analysis might count this simply as one accidental death case.

**[p06s03u08]** But cause-based analysis asks a deeper question: was this a pure external accident, or did an underlying medical condition, such as degeneration or poor balance, contribute to the fall?

**[p06s03u09]** That distinction changes how we estimate incidence, how we segment risk, and how clean the experience study population becomes.

**[p06s03u10]** It helps us ask better questions, spot emerging trends earlier, and communicate findings more clearly to management.

**[p06s03u11]** Cause-based analysis is what makes that level of understanding possible — and once we have it, it can begin to inform pricing and product discussions.

## Slide 21
**[p06s04u01]** Once we understand the why behind experience, those insights can begin to inform pricing and product discussions.

**[p06s04u02]** To be clear: we're talking about analytical capability here, not disclosing specific pricing strategy.

**[p06s04u03]** We're talking about the analytical capability. When claims data becomes more granular, pricing teams can better understand how risk drivers affect claim frequency and severity.

**[p06s04u04]** This supports three pricing applications shown on the slide: refined assumptions, segmented pricing, and policy or benefit design.

**[p06s04u05]** Take lung cancer claims as an example. If we look at 100 cases together, traditional pricing may only show that overall claim cost is increasing.

**[p06s04u06]** But cause analysis can separate 70 standard treatment cases from 20 high-intensity treatment cases and 10 borderline cases where the treatment pattern or policy alignment needs closer review.

**[p06s04u07]** That difference really matters. Without cause analysis, management might only see a financial result.

**[p06s04u08]** With cause analysis, management can evaluate possible actions: update assumptions, adjust underwriting guidelines, strengthen claims review, refine product design, or improve customer education.

**[p06s04u09]** This is the connection between claims AI and risk-based pricing.

**[p06s04u10]** AI helps convert claims documents into structured evidence, and structured evidence makes risk segmentation more precise.

**[p06s04u11]** Better experience analysis supports more informed pricing and risk management decisions.

**[p06s04u12]** But none of these applications hold if the AI underneath is reasoning from an unstable or poorly governed knowledge base.

**[p06s04u13]** That brings us to the foundation that sits underneath every decision CAELIA makes.

## Slide 22
**[p07s01u01]** None of the pricing, reserving, or risk segmentation capabilities we just described are reliable without a well-structured, governed knowledge base. For CAELIA, that base comes from three sources: claims operations policies, product terms and benefit rules, and a medical knowledge and disease library.

**[p07s01u02]** This knowledge has to be structured and governed.

**[p07s01u03]** If the knowledge base is incomplete or out of date, the AI might retrieve the wrong information or apply the wrong rule.

**[p07s01u04]** We also need traceability and data privacy controls.

**[p07s01u05]** When AI uses a policy clause or a medical fact, the system should be able to trace where that came from.

**[p07s01u06]** Reviewers should be able to see the source of any piece of information. This is especially important for explainability.

**[p07s01u07]** In a claims decision, it's not enough to say "the model thinks so."

**[p07s01u08]** We need to say: here's the document, here's the extracted fact, here's the relevant policy term, here's the reasoning, and here's what's still uncertain.

**[p07s01u09]** The knowledge foundation is what makes the AI system controllable. It anchors AI reasoning in approved business knowledge, rather than letting the model improvise freely.

**[p07s01u10]** And there is no harder test of that foundation than policy interpretation — where a single word in a contract clause can change the entire outcome of a case.

## Slide 23
**[p07s02u01]** That is why policy interpretation becomes one of the most critical tests of the system.

**[p07s02u02]** Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.

**[p07s02u03]** A claim decision often comes down to the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.

**[p07s02u04]** The agent workflow has four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.

**[p07s02u05]** For example, if a claim involves hospitalization benefits, the system can pull up the relevant policy clauses, compare the required conditions against the extracted medical facts, and highlight anything that's missing or conflicting.

**[p07s02u06]** The reviewer can then focus on judgment. Does the medical evidence really satisfy the policy definition? Is additional documentation needed? Is there an exception?

**[p07s02u07]** Does the case need to be escalated? This approach improves consistency.

**[p07s02u08]** The output should clearly show applicable coverage, coverage determination, exclusion determination, and the decision rationale.

**[p07s02u09]** When we step back from these individual components — document extraction, multi-agent reasoning, and policy interpretation — the organizational value they create together becomes clear.

## Slide 24
**[p07s03u01]** When we bring these components together, the organizational value appears in four areas.

**[p07s03u02]** For operations, CAELIA reduces manual document review, speeds up evidence preparation, and helps reviewers focus on complex judgment rather than repetitive information gathering.

**[p07s03u03]** In practical terms, the impact can extend across a claims organization of around 300 FTEs, with an estimated 30 percent reduction in review time per case.

**[p07s03u04]** For risk control, the system supports earlier identification of inconsistencies, anomaly patterns, and fraud indicators.

**[p07s03u05]** For governance, human-in-the-loop review, traceable reasoning, structured knowledge, and data lineage help make AI output explainable and auditable. That's essential for responsible AI in insurance.

**[p07s03u06]** And for actuarial work, the most strategic benefit is that claims data becomes more structured and more meaningful.

**[p07s03u07]** Instead of only getting final payment results, actuaries can access richer information about diagnoses, treatments, causes, severity drivers, and the rationale behind decisions.

**[p07s03u08]** This supports experience studies, incidence rate reviews, assumption updates, reserve analysis, and product monitoring.

**[p07s03u09]** The broader lesson here is that AI value shouldn't be measured only by time saved.

**[p07s03u10]** In insurance, AI value should also be measured by the quality of decisions, the strength of governance, and the improvement in how the organization learns.

**[p07s03u11]** Actuaries are well positioned to lead that work — translating AI capability into business value, connecting technical performance with risk management and governance, and helping organizations build resilience that lasts.

## Slide 25
**[p07s04u01]** Thank you for staying with us. To close, let's come back to our title: beyond efficiency. Efficiency matters — faster claims processing improves customer experience and reduces operational burden.

**[p07s04u02]** But for life insurers, the bigger opportunity is to build a claims ecosystem that actually learns.

**[p07s04u03]** Every claim contains information about customer needs, medical trends, product performance, operational risk, and emerging experience.

**[p07s04u04]** Historically, most of that information was locked inside unstructured documents.

**[p07s04u05]** Agentic AI gives us a practical way to unlock it — as long as we design the system with governance, explainability, and human oversight built in from the start.

**[p07s04u06]** Our experience points to three takeaways. First, AI in claims should be designed as augmentation, not just automation.

**[p07s04u07]** The goal is to help professionals make better decisions — not simply to remove human involvement.

**[p07s04u08]** Second, claims data should be treated as a strategic actuarial asset.

**[p07s04u09]** When unstructured records become structured, traceable, and governed, they can strengthen experience studies, pricing assumptions, reserving analysis, and risk monitoring.

**[p07s04u10]** Third, responsible AI isn't a separate compliance layer you bolt on at the end.

**[p07s04u11]** It has to be built into the architecture from day one: human-in-the-loop review, knowledge governance, data lineage, explainable reasoning, and auditability.

**[p07s04u12]** As markets face aging populations, rising medical complexity, and post-IFRS 17 operational demands, actuaries have an important role to play.

**[p07s04u13]** Actuaries can help connect AI capability with business value, risk management, governance, and long-term sustainability.

**[p07s04u14]** Thank you so much for your time — we'd love to take your questions.
