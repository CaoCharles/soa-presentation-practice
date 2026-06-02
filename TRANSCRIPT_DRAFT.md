# 逐字稿改寫版（口語化）
> 共 142 段，每段目標 ≤ 25 字

---

## Slide 1
**[p01s01u01]** Good morning everyone. It's a pleasure to be here at the Asia-Pacific Symposium today.

**[p01s01u02]** My name is Yu Chung Wu from Cathay Life Insurance in Taiwan, and I'm joined today by my colleague Li Yu Tsao.

**[p01s01u03]** Today, we would like to share how we are leveraging Agentic AI to improve claims adjudication efficiency and quality.

**[p01s01u04]** And more importantly, how we transform claims data into explainable, traceable, and actuarial-ready decision intelligence.


## Slide 2
**[p01s02u01]** Before we begin, let us briefly introduce ourselves.

**[p01s02u02]** We are from Cathay Life Insurance, one of the leading life insurers in Taiwan.

**[p01s02u03]** We serve more than 8 million customers with over 20 million policies in force.

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
**[p02s01u01]** Back in the 1990s, during the IBM AS400 era, claims processing was mainly transaction-driven and highly dependent on manual and paper-based workflows.

**[p02s01u02]** Later, in the core system era, insurers started digitalizing claims workflows and introducing rule-based engines to improve efficiency.

**[p02s01u03]** In the 2020s, machine learning models started being used for risk scoring, anomaly detection, and claims triage.

**[p02s01u04]** However, most models still stayed at the scoring stage.

**[p02s01u05]** They could identify higher-risk cases, but they could not always explain why.

**[p02s01u06]** Now, we believe claims adjudication is entering the era of Agentic AI.

**[p02s01u07]** AI is no longer only providing scores.

**[p02s01u08]** It is starting to become part of the decision process by providing reasoning, evidence, and decision recommendations.


## Slide 5
**[p02s02u01]** Before we dive into Agentic AI, let us first look at the traditional claims process.

**[p02s02u02]** From claim submission to manual review and final claim decisions, the process is long and highly dependent on human judgment.

**[p02s02u03]** Throughout the process, reviewers need to handle medical information, policy interpretation, risk assessment, and claim validation.

**[p02s02u04]** In other words, claims adjudication is not just an operational workflow — it is a complex decision process.

**[p02s02u05]** And this is exactly where we believe AI can begin to create value.

**[p02s02u06]** However, building Agentic AI requires a series of foundational capabilities and supporting systems.

**[p02s02u07]** So over the next few slides, I will briefly walk through these foundations before returning to the topic of Agentic AI.


## Slide 6
**[p02s03u01]** The first foundational capability is digital claims submission.

**[p02s03u02]** Claims processing used to rely heavily on paper documents and manual intake.

**[p02s03u03]** But now customers can submit claims and upload documents directly through a mobile application.


## Slide 7
**[p03s01u01]** The second foundational capability is structured data extraction.

**[p03s01u02]** In real-world claims scenarios, most medical documents are still unstructured.

**[p03s01u03]** Diagnosis certificates, receipts, and hospitalization records often contain free text, abbreviations, and different hospital formats.

**[p03s01u04]** At this stage, we introduced OCR and large language models to extract key information from medical documents.

**[p03s01u05]** This includes diagnosis information, surgical procedures, hospitalization periods, and other claims-related fields.


## Slide 8
**[p03s02u01]** The next foundational capability is claims triage and risk analysis.

**[p03s02u02]** At this stage, we introduced machine learning models to support risk assessment and case routing.

**[p03s02u03]** We trained these models using historical claims data, such as policy information, claims history, and medical features.

**[p03s02u04]** Model outputs are used for claims triage and risk tagging.

**[p03s02u05]** Low-risk cases can follow simplified workflows, while more complex or suspicious cases are routed to experienced reviewers.


## Slide 9
**[p03s03u01]** Another foundational capability is the unified smart claims platform.

**[p03s03u02]** We integrate claims information, risk results, related documents, and decision support into one workbench.

**[p03s03u03]** This allows reviewers to access key information in one place without switching between multiple systems.


## Slide 10
**[p04s01u01]** Within this platform, we further embedded multiple AI-assisted capabilities such as risk tagging, relative analysis, and decision support.

**[p04s01u02]** Together, these capabilities provide the foundation for building Agentic AI.

**[p04s01u03]** So the next question becomes: what exactly is Agentic AI?


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

**[p04s03u08]** The goal is not to replace professionals, but to help people make faster and more consistent decisions.

**[p04s03u09]** Next, my colleague Li Yu Tsao will continue by introducing the detailed applications of Agentic AI in claims operations.


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

**[p06s01u03]** It covers everything the reviewer needs: what happened, what the documents say, which policy terms apply, what the AI recommends, and how confident it is in each judgment.

**[p06s01u04]** For example, it might show 92 percent confidence on the surgical benefit — so the reviewer can quickly tell which parts are solid and which ones need a closer look.

**[p06s01u05]** In a regulated environment like insurance, that traceability isn't optional — every recommendation has to be grounded in evidence the reviewer can actually verify.

**[p06s01u06]** And here's the part that matters most for actuaries: when claims data is this structured and traceable, it stops being just operational evidence — and starts becoming something you can actually analyze.

## Slide 17
**[p06s02u01]** The structured output that CAELIA produces has three layers: the claim result, the policy and decision basis, and the full medical assessment.

**[p06s02u02]** Each layer captures something different: not just what was decided, but what evidence led there, and what the medical picture looked like.

**[p06s02u03]** With proper governance, this data can directly support pricing, reserving, experience studies — and more.

**[p06s02u04]** In other words, AI doesn't just make claims operations faster — it expands the data available for actuarial analysis.

**[p06s02u05]** Under IFRS 17, actuaries need claims experience to feed back into assumptions much more frequently — not just at year-end.

**[p06s02u07]** And that opens a bigger question: can this richer foundation help us move beyond measuring what happened — to understanding why it happened?

## Slide 18
**[p06s03u01]** Traditional experience analysis tells us what happened — how many claims, how much was paid, how that compares to assumptions.

**[p06s03u02]** But the question actuaries increasingly need to answer is: why did it happen?

**[p06s03u03]** Was it driven by an aging policyholder base, by changes in medical practice, or by shifts in claimant behavior? And are there early signals that assumptions need to be updated?

**[p06s03u04]** Take the example on this slide: an 80-year-old male with an accidental death claim after a fall.

**[p06s03u05]** Traditional analysis counts this as one accidental death. But cause-based analysis asks a sharper question: was there an underlying disease — like Parkinson's, dementia, or heart disease — that actually caused the fall? If so, is this really a pure accidental death, or should part of it be classified differently?

**[p06s03u06]** That distinction changes how we estimate incidence, how we segment risk, and how clean our experience study population is.

**[p06s03u07]** And when we understand the why, it becomes possible to act on it — not just report it.

## Slide 19
**[p06s04u01]** Once we understand the why, those insights can directly inform pricing. More granular claims data lets teams see exactly which risk drivers are pushing up claim frequency and severity.

**[p06s04u02]** Take lung cancer as an example. Looking at 100 cases together, traditional pricing just tells you costs are going up.

**[p06s04u03]** But cause analysis breaks that down — 70 standard cases, 20 high-intensity ones, and 10 borderline cases. Those are the ones where the treatment pattern or coverage question still needs a closer look.

**[p06s04u04]** The difference matters — because without cause analysis, leadership can see the total cost, but not what's actually driving it.

**[p06s04u05]** With it, they can actually do something — update assumptions, adjust underwriting, or refine product design.

**[p06s04u06]** That's the whole point: AI turns claims documents into structured evidence, and structured evidence makes every pricing and risk decision more precise.

**[p06s04u10]** But all of this depends on one thing: the AI has to reason from a solid, well-governed knowledge base.

**[p06s04u11]** That brings us to the foundation that sits underneath every decision CAELIA makes.

## Slide 20
**[p07s01u02]** For CAELIA, that knowledge comes from three sources: claims policies, product terms and benefit rules, and a medical knowledge library.

**[p07s01u03]** If it's incomplete or out of date, the AI pulls the wrong information — and makes the wrong call.

**[p07s01u04]** We also need traceability — when AI uses a policy clause or a medical fact, we need to know exactly where it came from.

**[p07s01u05]** Because in a claims decision, "the model thinks so" just isn't good enough.

**[p07s01u06]** We need to show: here's the document, here's the fact, here's the policy term, and here's the reasoning.

**[p07s01u07]** That's what keeps the system controllable — AI reasons from approved knowledge, not from guesswork.

**[p07s01u08]** This need for traceability is especially clear in policy interpretation — as medical practices evolve and new procedures emerge, existing benefit terms can't always keep up.

## Slide 21
**[p07s02u01]** That is why policy interpretation is one of the most critical tests of the system — a single claim decision can hinge on how you read a definition, a benefit condition, or an exclusion clause.

**[p07s02u02]** CAELIA handles this through a structured four-step workflow — from understanding the claim all the way to producing a structured output.

**[p07s02u03]** Take hospitalization benefits as an example. The system pulls up the relevant policy clauses, compares them against the medical facts, and flags anything that's missing or conflicting.

**[p07s02u04]** The reviewer can then focus on judgment — does the evidence really satisfy the policy definition, and is anything still missing?

**[p07s02u05]** The output clearly shows what's covered, what's excluded, and the full decision rationale — so the reviewer has everything they need in one place.

**[p07s02u06]** So what does all of this actually deliver for the organization?

## Slide 22
**[p07s03u01]** The value shows up in four areas: operations, risk control, governance, and actuarial work.

**[p07s03u02]** For operations, CAELIA cuts review time and frees people up to focus on judgment — in our claims team, reviewers save roughly 30 percent of their time per case.

**[p07s03u03]** For risk control, it catches inconsistencies and fraud signals earlier.

**[p07s03u04]** For governance, traceable reasoning and human oversight make AI output explainable and auditable — essential in a regulated industry.

**[p07s03u05]** And for actuarial work, claims data goes from unstructured records to something you can actually analyze — supporting experience studies, pricing, reserving, and product monitoring.

**[p07s03u06]** And stepping back, that's the real lesson: AI in insurance creates value that goes far deeper than efficiency alone.

**[p07s03u07]** CAELIA is proof that claims AI can be more than a processing tool — it can be a foundation for better decisions, stronger governance, and richer actuarial insight.

**[p07s03u08]** Thank you so much for your time — we'd love to take your questions.
