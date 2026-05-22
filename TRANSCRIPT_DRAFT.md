# 逐字稿改寫版（口語化）
> 共 248 段，每段目標 ≤ 25 字

---

## Slide 1
**[p01s01u01]** Good morning everyone. It’s a pleasure to be here at the Asia-Pacific Symposium today.

**[p01s01u02]** My name is Yu Chung Wu from Cathay Life Insurance in Taiwan, and I’m joined today by my colleague Li Yu Tsao.

**[p01s01u03]** Today, we would like to share how we are leveraging Agentic AI to improve claims adjudication efficiency and quality. And more importantly, how we transform claims data into explainable, traceable, and actuarial-ready decision intelligence.

**[p01s01u04]** When people think about AI in claims, efficiency is usually the first thing that comes to mind — faster processing, less manual work, and shorter turnaround time.

**[p01s01u05]** But today, we would like to go one step further.

**[p01s01u06]** Can AI become more than just an automation tool, and instead become a strategic source of actuarial insight and risk management?

**[p01s01u07]** Today, we will share how Agentic AI and a multi-agent architecture can transform claims decisions into structured, governed, and actuarial-ready insights.

## Slide 2
**[p01s02u01]** Before we begin, let us briefly introduce ourselves.

**[p01s02u02]** We are from Cathay Life Insurance, one of the leading life insurers in Taiwan, serving more than 8 million customers with over 20 million policies in force.

**[p01s02u03]** The content we share today comes from our practical experience in claims operations and AI applications.

**[p01s02u04]** Both of us currently work as data scientists, focusing on AI applications in claims decision-making and decision intelligence.

**[p01s02u05]** Let us begin by looking at the key challenges facing claims operations today.

## Slide 3
**[p01s03u01]** Claims operations in the life insurance industry are facing significant structural pressure.

**[p01s03u02]** On one hand, the external environment is becoming more complex.

**[p01s03u03]** Aging populations continue to drive claims demand, while fraud and risk patterns are also becoming more sophisticated.

**[p01s03u04]** On the other hand, operational burden is increasing rapidly.

**[p01s03u05]** Cathay Life now handles more than 1.6 million claims cases every year.

**[p01s03u06]** But the bigger challenge is that claims volume is growing much faster than workforce capacity.

**[p01s03u07]** Over the past few years, claims volume has increased by more than 50%, while workforce growth has only been around 20%.

**[p01s03u08]** This makes traditional labor-intensive review models increasingly difficult to sustain.

**[p01s03u09]** Under these pressures, claims operations have continued to evolve over time.

## Slide 4
**[p02s01u01]** Especially with advances in AI and digital technology.

**[p02s01u02]** In the IBM AS400 era, claims processing was mainly transaction-driven and highly dependent on manual and paper-based workflows.

**[p02s01u03]** Later, in the core system era, insurers started digitalizing claims workflows and introducing rule-based engines to improve efficiency.

**[p02s01u04]** In the machine learning era, models started being used for risk scoring, anomaly detection, and claims triage.

**[p02s01u05]** However, most models still stayed at the scoring stage.

**[p02s01u06]** They could identify higher-risk cases, but they could not always explain why.

**[p02s01u07]** Now, we believe claims adjudication is entering the era of Agentic AI.

**[p02s01u08]** AI is no longer only providing scores.

**[p02s01u09]** It is starting to become part of the decision process by providing reasoning, evidence, and decision recommendations.

**[p02s01u10]** In other words, claims operations are evolving from efficiency-driven toward decision-intelligence-driven.

**[p02s01u11]** But to understand why Agentic AI matters, we first need to look at where complexity actually exists in the claims workflow.

## Slide 5
**[p02s02u01]** Before we dive into Agentic AI, let us first look at the traditional claims process.

**[p02s02u02]** From claim submission to manual review and final claim decisions, the process is long and highly dependent on human judgment.

**[p02s02u03]** Throughout the process, reviewers need to handle medical information, policy interpretation, risk assessment, and claim validation.

**[p02s02u04]** In other words, claims adjudication is not just an operational workflow — it is a complex decision process.

**[p02s02u05]** And this is exactly where we believe AI can begin to create value.

**[p02s02u06]** However, building Agentic AI is not just about adding a single model.

**[p02s02u07]** It requires a series of foundational capabilities and infrastructure built along the way.

**[p02s02u08]** So over the next few slides, we will briefly walk through these foundational building blocks before returning to Agentic AI.

## Slide 6
**[p02s03u01]** The first foundational capability is digital claims submission.

**[p02s03u02]** Claims processing used to rely heavily on paper documents and manual intake, but now customers can submit claims and upload documents directly through a mobile application.

**[p02s03u03]** This not only improves customer experience, but also creates the foundation for AI applications.

## Slide 7
**[p03s01u01]** The second foundational capability is structured data extraction.

**[p03s01u02]** In real-world claims scenarios, most medical documents are still unstructured.

**[p03s01u03]** Diagnosis certificates, receipts, and hospitalization records often contain free text, abbreviations, and different hospital formats.

**[p03s01u04]** At this stage, we introduced OCR and large language models to extract key information from medical documents.

**[p03s01u05]** This includes diagnosis information, surgical procedures, hospitalization periods, and other claims-related fields.

**[p03s01u06]** These fields are then parsed into structured data for downstream AI applications.

## Slide 8
**[p03s02u01]** The next foundational capability is claims triage and risk analysis.

**[p03s02u02]** At this stage, we introduced machine learning models to support risk assessment and case routing.

**[p03s02u03]** We trained these models using historical claims data, such as policy information, claims history, and medical features.

**[p03s02u04]** Model outputs are used for claims triage and risk tagging.

**[p03s02u05]** Low-risk cases can follow simplified workflows, while more complex or suspicious cases are routed to experienced reviewers.

**[p03s02u06]** This helps reviewers focus on the cases that require the most attention.

**[p03s02u07]** Over time, we also realized that risk scoring alone is not enough for more complex claims decisions.

## Slide 9
**[p03s03u01]** Another foundational capability is the unified smart claims platform.

**[p03s03u02]** We integrate claims information, risk results, related documents, and decision support into one workbench.

**[p03s03u03]** This allows reviewers to access key information in one place without switching between multiple systems.

**[p03s03u04]** This not only improves efficiency, but also reduces cognitive load.

**[p03s03u05]** Once information is organized more effectively, reviewers can focus more on professional judgment.

## Slide 10
**[p04s01u01]** Within this platform, we further embedded multiple AI-assisted capabilities.

**[p04s01u02]** For example, risk tagging helps highlight key risk indicators that require attention.

**[p04s01u03]** Decision support guides reviewers based on diagnosis ICD codes and review priorities.

**[p04s01u04]** Relationship graph analysis helps reviewers understand connections among insured individuals, medical providers, agents, and historical claims.

**[p04s01u05]** These capabilities are embedded directly into the claims review workflow.

**[p04s01u06]** At this point, AI is no longer just supporting isolated tasks — it is beginning to participate in the workflow itself.

**[p04s01u07]** So the next question becomes: what exactly is Agentic AI?

## Slide 11
**[p04s02u01]** Here we would like to explain Agentic AI in a simple way.

**[p04s02u02]** Traditional AI is mostly reactive: users ask questions, and AI provides answers.

**[p04s02u03]** The next stage is AI Agents.

**[p04s02u04]** AI becomes more proactive and can handle specific tasks, such as searching for information or organizing content.

**[p04s02u05]** The next step is Agentic AI.

**[p04s02u06]** Instead of a single agent, multiple agents work together to complete more complex workflows.

**[p04s02u07]** Some agents focus on medical information extraction, while others focus on policy interpretation, risk analysis, or decision support.

**[p04s02u08]** The key idea is that Agentic AI is no longer just answering questions — it is becoming part of the decision process itself.

## Slide 12
**[p04s03u01]** After introducing Agentic AI, let us return to the claims scenario and see how humans and AI work together in practice.

**[p04s03u02]** Our core design principle is human-in-the-loop.

**[p04s03u03]** Agentic AI provides analysis and recommendations, while final decisions remain with human reviewers.

**[p04s03u04]** AI does not directly approve or deny claims. Instead, it first performs a pre-assessment.

**[p04s03u05]** This includes organizing documents, extracting key facts, identifying relevant policy terms, and preparing supporting evidence.

**[p04s03u06]** AI then generates a decision recommendation.

**[p04s03u07]** Human reviewers then review the results and make the final claims decision.

**[p04s03u08]** When AI provides enough information, reviewers can focus more on the parts that require professional judgment.

**[p04s03u09]** The goal is not to replace professionals, but to help people make faster and more consistent decisions.

**[p04s03u10]** Next, my colleague Li Yu Tsao will continue by introducing the detailed applications of Agentic AI in claims operations.

## Slide 13
**[p05s01u01]** So how does the AI actually reason through a case — and how can a reviewer trust that reasoning?

**[p05s01u02]** If the system simply says, "This claim should be paid" — the reviewer can't rely on that. We need a traceable reasoning pathway.

**[p05s01u03]** For each case, AI should be able to show what information it used, how it interpreted that information, which policy terms were relevant, where it spotted inconsistencies, and why it made the recommendation it did.

**[p05s01u04]** Take the example on this slide: a kidney stone patient receives ESWL treatment and has a five-day hospitalization.

**[p05s01u05]** The AI checks the medical facts against policy terms and medical guidelines.

**[p05s01u06]** It can recognize that ESWL is usually an outpatient procedure, recommend that the surgical benefit is payable, and still flag the hospitalization for manual review, with a 92 percent confidence score shown in the reasoning output.

**[p05s01u07]** For claims reviewers, it supports faster and more consistent decisions. For risk managers, it provides structured indicators for fraud and anomaly detection.

**[p05s01u08]** And for actuaries, it creates more granular data about the cause and characteristics of claims.

**[p05s01u09]** These requirements define what a real claims AI system needs to deliver — and building to those requirements is exactly what we set out to do.

## Slide 14
**[p05s02u01]** To operationalize this reasoning pathway, we built CAELIA — the Cathay AI Engine for Life Insurance Adjudication.

**[p05s02u02]** CAELIA is designed to transform claims adjudication into an explainable, evidence-driven decision process. The name matters because this isn't just a model.

**[p05s02u03]** It's an engine that combines document understanding, knowledge retrieval, policy interpretation, multi-agent reasoning, decision reporting, and human review.

**[p05s02u04]** The objective isn't to make AI look impressive.

**[p05s02u05]** The objective is to make the claims decision process more transparent, more consistent, and more analytically useful.

**[p05s02u06]** In practice, CAELIA reads claim documents, extracts medical and claims information, retrieves relevant policy knowledge, checks benefit conditions, identifies potential inconsistencies, and produces a pre-assessment decision report.

**[p05s02u07]** The reviewer stays in control — but they're starting from a much richer, better-organized evidence package.

**[p05s02u08]** And honestly, the more we worked on this, the clearer it became — one model just can't do all of this well at the same time.

## Slide 15
**[p05s03u01]** Our answer is a multi-agent architecture — where each agent owns a specific part of the reasoning.

**[p05s03u02]** Think of it like a team: one agent extracts key facts from the documents, another interprets the medical context, one checks the policy terms, one flags risk signals, and one pulls it all together into a final report.

**[p05s03u03]** Each agent does one thing — and does it well.

**[p05s03u04]** This makes the system much easier to govern. If something's off, we know exactly which agent to look at — not the entire system.

**[p05s03u05]** It also supports explainability. Each agent's output is traceable, so the reviewer can follow the reasoning step by step — not just see a final number.

**[p05s03u06]** And as medical knowledge, policy terms, or fraud patterns evolve, we can update just the relevant agent — without rebuilding everything from scratch.

**[p05s03u07]** Let me show you what this actually produces.

## Slide 16
**[p06s01u01]** The most visible result of that architecture is the AI pre-assessment decision report.

**[p06s01u02]** This report is designed to take raw claims data and turn it into a traceable decision recommendation.

**[p06s01u03]** A good report should answer several practical questions for the reviewer. What's the claim event? What medical facts were extracted? What policy benefits might apply?

**[p06s01u04]** What evidence supports the recommendation? What's still uncertain? And what should the human reviewer check before making the final call?

**[p06s01u05]** In the example, the report shows confidence scores for different parts of the case, such as 92 percent for surgical benefit, 90 percent for hospitalization, and 85 percent for the overall recommendation.

**[p06s01u06]** This is especially important when AI is used in regulated financial services. We need to be able to show that AI output isn't arbitrary.

**[p06s01u07]** It has to be grounded in evidence, policy knowledge, and human oversight.

**[p06s01u08]** That's the operational and governance case. But once claims records are this structured and traceable, something more fundamental becomes possible for the organization.

## Slide 17
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

## Slide 18
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

## Slide 19
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

## Slide 20
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

## Slide 21
**[p07s02u01]** That is why policy interpretation becomes one of the most critical tests of the system.

**[p07s02u02]** Policies contain definitions, benefit conditions, exclusions, waiting periods, limits, and special rules.

**[p07s02u03]** A claim decision often comes down to the precise interpretation of those terms. CAELIA helps analyze policy terms to determine coverage, exclusions, and decision rationale.

**[p07s02u04]** The agent workflow has four steps: understand the claim, determine policy applicability, identify exclusions, and produce a structured output.

**[p07s02u05]** For example, if a claim involves hospitalization benefits, the system can pull up the relevant policy clauses, compare the required conditions against the extracted medical facts, and highlight anything that's missing or conflicting.

**[p07s02u06]** The reviewer can then focus on judgment. Does the medical evidence really satisfy the policy definition? Is additional documentation needed? Is there an exception?

**[p07s02u07]** Does the case need to be escalated? This approach improves consistency.

**[p07s02u08]** The output should clearly show applicable coverage, coverage determination, exclusion determination, and the decision rationale.

**[p07s02u09]** When we step back from these individual components — document extraction, multi-agent reasoning, and policy interpretation — the organizational value they create together becomes clear.

## Slide 22
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

## Slide 23
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
