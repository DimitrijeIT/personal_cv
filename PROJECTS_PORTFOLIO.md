# Dimitrije Stojanović — Project Portfolio

> Source document for a personal-brand website. Each project lists **what it does**, the **tech stack**, the **technologies & techniques** used, and the **problems solved**. Organized into themes that tell a coherent story: a flagship AI-safety research program, shipped products, AI-native tooling, and educational work.

---

## Who I am, in one paragraph

Software engineer and PhD researcher working at the intersection of **AI/LLM systems** and **safety-critical engineering**. My doctoral work pioneers multi-agent LLM architectures for automotive safety analysis (STPA), validated by ISO-26262-certified experts and submitted to a peer-reviewed journal. Alongside the research I ship real products — a live wedding-invitation SaaS, educational games, interactive web apps — and I build AI-native developer tooling (Claude Code skills, MCP servers, spec-driven BMAD workflows). I work full-stack across React/TypeScript, Python/FastAPI, Node.js, Vue, and Google Apps Script, and I deploy on AWS and GitHub Pages with proper CI/CD.

**Core themes to highlight on the site:**
1. **AI safety research** — turning LLMs into trustworthy assistants for safety-critical work, with statistical rigor and expert validation.
2. **AI-native engineering** — multi-agent patterns, MCP servers, spec-driven development, knowledge systems.
3. **Shipping end-to-end** — from research prototype to live, automated, deployed products.
4. **Domain range** — automotive safety, education, marketing automation, personal productivity.

---

## Tech stack at a glance

| Layer | Technologies I've used across these projects |
|---|---|
| **AI / LLM** | LangChain, LangGraph (multi-agent orchestration), OpenAI GPT, Google Gemini, LiteLLM, MCP (Model Context Protocol), RAG patterns, prompt engineering |
| **Backend** | Python 3.12, FastAPI, Flask, Pydantic, Node.js, Google Apps Script |
| **Frontend** | React 19 + TypeScript, Vue 3, SvelteKit, Vite, Material-UI, PrimeVue, Tailwind CSS, vanilla JS (ES6+) |
| **Data / viz** | SQLite (sqlite-vec + FTS5), Google Sheets as DB, Cytoscape.js, Leaflet, D3-style SVG, PixiJS (WebGL) |
| **Infra / DevOps** | AWS (ECS Fargate, CloudFront, S3, API Gateway), Terraform, GitHub Actions, GitHub Pages, clasp |
| **Research / rigor** | Inter-rater reliability (Fleiss' κ, Gwet's AC1, Cochran's Q), ablation studies, LaTeX, reproducibility packaging |
| **Tooling / methods** | Playwright, Remotion, FFmpeg, BMAD spec-driven development, Claude Code skills & sub-agents |

---

# 1. Flagship research program — AI-Assisted Safety Analysis (STPA + LLMs)

> A single coherent body of work: a novel multi-agent architecture, a full-stack platform, a peer-reviewed paper, an expert-validation study, and a public reproducibility release. This is the centerpiece achievement.

### 1a. STPAgent — Writer-Reviewer Multi-Agent Architecture *(research contribution + paper)*
**Folders:** `DR_SVE/STPAgent_PUBLIC`, `DR_SVE/dr_journal`

**What it does.** STPAgent is an AI assistant for **STPA Step 3** — identifying *Unsafe Control Actions* (UCAs) in safety-critical systems. STPA (System-Theoretic Process Analysis) treats safety as a control problem rather than a chain of component failures; Step 3 is the manual bottleneck, taking experts 15–20 minutes per control action across four categories. STPAgent automates it with a **Writer-Reviewer multi-agent loop**: one agent proposes UCAs, a second critiques them, and they iterate (up to 3 rounds) until consensus — a design specifically aimed at suppressing LLM hallucination in a domain where a wrong answer is dangerous.

**Tech stack.** Python 3, LangGraph `StateGraph` for the agent loop, OpenAI GPT models, JSON/CSV/Excel data formats, LaTeX for the publication, Python (openpyxl + standard library) for all statistics.

**Technologies & techniques.** Writer-Reviewer iterative refinement; chain-of-thought prompting; batch processing under token limits; an **error taxonomy** of LLM failure modes (hallucinated features, incorrect hazard linkages, impossible scenarios, category misclassification); reproducible inline statistics with no heavy dependencies.

**Problems solved.**
- Reduced hallucination by ~65% vs. single-agent generation; achieved **96.5% factual correctness** (95% CI 93.3–99.7%), inter-agent critique cutting errors from ~10% to ~3.5%.
- Cut the most labor-intensive STPA step from hours to minutes.
- Produced an open, fully reproducible artifact: 231 generated UCAs, full prompts, per-evaluator ratings, and self-contained analysis scripts — licensed Apache-2.0 (code) / CC-BY-4.0 (data), with `CITATION.cff`.

**Status.** Paper "STPAgent: A Writer-Reviewer Multi-Agent Architecture for AI-Assisted Unsafe Control Action Identification" (Stojanović, Pavković, Četić) **submitted to the *Journal of Systems Architecture* (2026)**. Public reproducibility package released.

---

### 1b. STPA Platform — full-stack research application
**Folder:** `DR_SVE/STPA_PHD`

**What it does.** A production-grade web platform that runs the **entire STPA workflow** — loss/hazard definition, control-structure modeling, UCA identification, and causal-factor analysis — with AI agents collaborating with the human analyst. The flagship engineering artifact behind the research.

**Tech stack.**
- **Backend:** Python 3.12 (Poetry), LangChain + LangGraph, FastAPI (async) with legacy Flask, Pydantic, async SQLite, OpenAI GPT.
- **Frontend:** React 19 + TypeScript, Vite, Material-UI + Bootstrap, **Cytoscape.js** + draw.io for interactive control-structure graphs, Axios.
- **Infra:** AWS **ECS Fargate, CloudFront, S3, API Gateway**, provisioned with **Terraform**; WeasyPrint for Markdown→PDF, TikToken for token accounting.

**Technologies & techniques.** Multi-agent orchestration via LangGraph; **checkpointed agent state** for fault tolerance; batch UCA analysis (groups of 5) for token limits; interactive graph visualization and tree views for causal factors; error-injection testing; an automated code-review framework spanning Python, LangGraph, React, and Terraform.

**Problems solved.** Operationalized the research into a usable tool; enforced ISO 26262 / IEC 62304 traceability and audit trails; built modular design reusable across automotive, aerospace (DO-178C), medical, and energy domains; deployed a real cloud architecture (IaC, CDN, container orchestration) around an LLM agent system.

**Status.** Production-ready research platform (~190 source files) deployed on AWS, part of PhD work at the **Faculty of Technical Sciences, University of Novi Sad**.

---

### 1c. Expert Validation Study — 6 ISO-26262-certified evaluators
**Folder:** `DR_SVE/3-Tool audit`

**What it does.** The empirical validation layer: **six independent ISO-26262-certified functional-safety engineers** each rated all 231 AI-generated UCAs for correctness, category accuracy, severity, and practical relevance, with written commentary and recorded walkthrough sessions.

**Technologies & techniques.** Structured expert-evaluation protocol; inter-rater agreement quantification (feeding Gwet's AC1, Fleiss' κ, Cochran's Q in the analysis code); usability research via recorded sessions; ground-truth establishment for the correctness claims.

**Problems solved.** Removed single-evaluator bias; supplied the primary data behind the paper's headline statistics; demonstrated the methodological discipline of validating AI output with credentialed domain experts rather than self-assessment.

**Status.** Evaluation completed 2025; primary source data for the publication.

---

### 1d. Research publications & academic record
**Folders:** `DR_SVE/radovi`, `DR_SVE/DR`

**What it is.** A body of peer-reviewed and conference publications (2023–2025) spanning safety engineering and applied AI: STPA methodology (SCI-indexed), LangChain/LLM agents, Transformer architectures, AI agents (Telfor), person re-identification (computer vision), lane annotation for autonomous driving, and AWS deployment — plus the PhD candidacy record at FTN Novi Sad.

**Why it matters for the brand.** Establishes credibility: this isn't a side experiment but a multi-year research trajectory bridging **theory (STPA, systems thinking)** and **applied AI (LLMs, CV, cloud)**. Useful as a "Publications" section.

---

# 2. Products & web apps I've shipped

### 2a. DigiPoz — digital wedding-invitation platform *(live product)*
**Folder:** `digipoz` · **Live:** digipoz.rs

**What it does.** A full product for the Serbian market that turns a couple's intake form into a published, personalized wedding website — with instant template previews, RSVP tracking, guest management, and calendar/maps integration. Combines elegant self-contained templates, AI content generation, and an Instagram marketing engine for customer acquisition.

**Tech stack.** HTML5/CSS3/vanilla JS templates; Node.js (v20) generation scripts; **Google Apps Script** webhooks; Playwright (preview screenshots); FFmpeg (reel video); Gemini 2.5 Flash (love-story generation); Google Places API; hosted on **GitHub Pages + GitHub Actions**, data in Google Sheets.

**Technologies & techniques.** Custom templating engine (`{{PLACEHOLDER}}` + conditionals, HTML-escaping by default for XSS safety) driving **29 themes/layouts**; an event-driven pipeline (Google Form → Apps Script → GitHub Actions `repository_dispatch` → Node → GitHub Pages); per-couple RSVP sheets auto-provisioned; **GEO (Generative Engine Optimization)** + SEO blog with JSON-LD/FAQ schema; Instagram automation (1080×1350 feed + 1080×1920 reels) and ManyChat DM automation.

**Problems solved.** Eliminated manual invitation design; instant previews reduce customer friction; zero-backend RSVP via Sheets; secured endpoints against CORS/XSS; built an in-house, SaaS-free marketing analytics + acquisition funnel.

**Status.** **In production** with live landing/pricing/showcase pages, published client sites, and active CI/CD — a genuine solo-built micro-SaaS.

---

### 2b. Collections Hub — board games & personal library *(deployed)*
**Folder:** `board_games` · GitHub Pages

**What it does.** A visual, searchable catalog of a board-game collection (32 titles) and a personal library (50+ books), with multi-criteria filtering, grouping, persistent star ratings, and library export.

**Tech stack.** 100% vanilla JS (ES6+), HTML5/CSS3, Lucide icons, `Intl` API for Serbian localization, localStorage; deployed via GitHub Actions → GitHub Pages (`.nojekyll`); Playwright test scaffolding.

**Technologies & techniques.** Object-based state with localStorage serialization; `Intl.Collator` for correct Serbian/Cyrillic sorting; multi-source price aggregation; Blob-based `.txt` export; responsive mobile-first CSS — all with no framework and no build step.

**Problems solved.** Searchable personal inventory across multiple retailers; persistent ratings without a backend; full localization (UI, numerals, sorting).

**Status.** Deployed and live, two themed pages, CI/CD in place.

---

### 2c. Travel Photo Map — relive trips on an interactive map
**Folder:** `travel_images/travel-photo-map`

**What it does.** Upload geotagged travel photos; the app reads GPS EXIF data and plots them as heart markers on an interactive map, with a photo modal and stats.

**Tech stack.** Vue 3 (Composition API), Vite 7, Pinia, Leaflet + vue-leaflet, **exifr** (GPS extraction), PrimeVue, vue3-carousel; tested with Vitest + Playwright; ESLint/Prettier.

**Technologies & techniques.** Automatic EXIF georeferencing; marker clustering; reactive Pinia store; free OpenFreeMap tiles (no API key, privacy-first); folder auto-scan of photos.

**Problems solved.** Removes manual coordinate entry; scalable spatial browsing of large photo libraries; clean, professional SPA structure (components/composables/stores, TS, E2E tests).

**Status.** MVP / Phase 1 complete, roadmap for timeline + story mode.

---

### 2d. Wedding Invitation Site — animated envelope *(deployed)*
**Folder:** `wedding_invites` · GitHub Pages (`DimitrijeIT/pozivnica`)

**What it does.** An elegant, single-page wedding invitation with a 3D CSS envelope-opening animation, countdown, RSVP, and calendar/maps links — full Cyrillic support and switchable serif fonts.

**Tech stack.** HTML5/CSS3/vanilla JS; Google Fonts; Google Calendar/Maps/Sheets integrations; GitHub Pages.

**Technologies & techniques.** 3D CSS transforms (perspective/rotateX/Y) for the envelope; interval-based countdown; hash navigation to deep-link past the animation; Sheets-backed RSVP with no server.

**Problems solved.** Memorable first impression vs. static invite; distributed RSVP collection without a backend; easy version-controlled updates. *(Note: the precursor to the DigiPoz product — a nice "from personal project to product" narrative.)*

**Status.** Deployed and live.

---

# 3. AI-native tooling & methodology

### 3a. Knowledge Hub — research-backed personal learning system *(active)*
**Folder:** `Ai Learning/knowledge-hub`

**What it does.** A local-first, zero-dependency knowledge hub where each AI/technical topic is a self-contained HTML page following an evidence-based anatomy (big picture → use cases → deep dive → recall quiz). Built to defeat the "collector's fallacy" with retrieval-practice quizzes and a digital-garden maturity model (seedling → budding → evergreen).

**Tech stack.** Plain HTML5 + vanilla JS (ES5, no modules) + CSS3, inline SVG diagrams; `file://`-compatible (no fetch/CDN/build); localStorage for theme/read-state only.

**Technologies & techniques.** Pedagogy grounded in cited research (advance organizers, retrieval practice, worked examples, dual coding); a manifest-as-executable-JS registry for CORS-free local loading; and a **custom LLM toolchain in `.claude/`** — skills (`ai-knowledge-hub`, `paper-research`) plus three sub-agents (topic-researcher, paper-researcher, hub-reviewer) that do **adversarial claim verification** and QA before content is published.

**Problems solved.** Knowledge decay (mandatory quizzes + tending loop); full portability (zip the folder, host anywhere, runs offline); auditable, source-attributed AI research via multi-agent verification.

**Status.** Active and tended — 16 published topics, design-first (35+ sources cited), automation-ready.

---

### 3b. Memory — unified AI-memory layer via MCP *(spec-complete design)*
**Folder:** `memory_bmad_test`

**What it does.** A local-first app + **MCP server** that aggregates conversation history across Claude Code, ChatGPT, and Obsidian into one searchable memory layer — auto-categorizing conversations, detecting cross-tool research threads, surfacing expertise blindspots, and feeding context back into AI tools so they stop treating power users like beginners.

**Tech stack.** Python 3.12 + FastAPI/uvicorn; SQLite with **sqlite-vec** (vector search) + **FTS5** (full-text); SvelteKit + TypeScript + Tailwind v4 + shadcn-svelte; **LiteLLM** (provider-agnostic); **MCP Python SDK (FastMCP)**; `uv` + `pnpm`.

**Technologies & techniques.** Hybrid semantic + full-text search; cross-tool parsers with incremental sync; an AI intelligence pipeline (categorization, thread clustering, drift detection, conflict detection, preference extraction); git-config-style global/project scope precedence; human-in-the-loop curation; portable "user passport" context bundles.

**Problems solved.** Context fragmentation across AI tools; the "re-explanation tax" for accumulated expertise; opaque black-box memory systems (full transparency + user control).

**Status.** Complete specification via the **BMAD** workflow (44 functional + 20 non-functional requirements, PRD, architecture, UX, epics) — a strong showcase of spec-first AI product design.

### 3c. Life Dashboard — personal knowledge graph from notes
**Folder:** `life_dashboard_from_amlenote_02_2026`

**What it does.** An interactive, infinite-canvas dashboard that turns an Amplenote export into 13 interconnected "life areas" as draggable cards, with status/energy indicators and SVG relationship lines, plus a navigable minimap.

**Tech stack.** Pure vanilla JS/HTML/CSS, SVG (Bezier connection curves), Canvas minimap, localStorage; single static file (~45 KB), zero dependencies.

**Technologies & techniques.** Custom DOM-based pan/zoom canvas; draggable card persistence; hover-driven relationship highlighting; an `ARCHITECTURE.md` documenting a clean path to scale into React/TypeScript + Zustand + D3.

**Problems solved.** Makes the invisible visible — cross-area dependencies, energy/priority trade-offs — entirely offline. A "rapid prototype, then document for scale" counterpoint to the spec-first Memory project.

**Status.** Functional prototype (Feb 2026), migration plan documented.

---

# 4. Educational projects & games

### 4a. HemiLab — interactive chemistry game *(deployed)*
**Folder:** `hemilab-project` · Live: GitHub Pages

**What it does.** A molecule-building puzzle game teaching the Serbian grade 7–8 chemistry curriculum: players assemble molecules from element jars under timed challenges, learning formulas and composition. Fully offline-first and COPPA/GDPR-compliant.

**Tech stack.** **PixiJS 8** (WebGL, all graphics drawn programmatically — no image assets), Howler.js (audio), Vite 6, vanilla JS ES modules (~6,900 LOC), localStorage; GitHub Actions → GitHub Pages.

**Technologies & techniques.** Fully programmatic rendering pipeline (atoms with electron orbits, animated teacher character, glass-jar effects) keeping the bundle to ~108 KB gzipped; scene-based architecture (7 scenes) with EventBus + singleton managers; height-locked responsive viewport handling rotation/fullscreen; **dual Serbian localization (Latin + Cyrillic) with live transliteration**; molecule verifier, scoring, hint system, particle/confetti feedback.

**Problems solved.** Low-bandwidth distribution (no asset pipeline); child-safety compliance (age gates, no PII, offline storage); native-alphabet accessibility; engaging, curriculum-aligned pedagogy. Migrated from an original Construct 3 prototype to a clean modern Vite/PixiJS build.

**Status.** MVP complete and deployed — 15 molecules, 2 chapters, full save/progression.

---

### 4b. PROMPT CRASH — cooperative card game about AI/LLMs
**Folder:** `j_game`

**What it does.** A 3–6 player cooperative card game (15–20 min) that teaches prompt engineering, LLM concepts, and responsible Copilot use. Themed around automotive software engineers: players craft prompts over 5 sprints while hallucinated AI outputs spread "bugs" through a simulated codebase — 3+ corrupted modules and the build crashes.

**Tech stack.** Vanilla JS (ES6+), HTML5/CSS3, no dependencies, no build step (runs on a local HTTP server).

**Technologies & techniques.** Custom state machine with immutable updates; 108-card system with color-coded categories; a dependency-graph corruption cascade; a "temperature die" mapping the LLM temperature concept to risk/reward; data-driven card and role definitions.

**Problems solved.** Makes abstract LLM concepts (temperature, hallucination, zero-shot, RAG) intuitive for engineering teams; gamifies team code-review dynamics. Thorough design docs (GAME_DESIGN, GAMEPLAY_GUIDE). **Ties the AI-safety research theme to teaching** — same concerns (hallucination control) made playable.

**Status.** Deployed and playable; workshop-ready.

---

### 4c. Copilot Video Course — animated explainer
**Folder:** `copilot_video_course`

**What it does.** An animated explainer about GitHub Copilot adoption for team leads — a character navigating common scenarios — delivered both as a standalone HTML/SVG viewer and as a code-rendered MP4.

**Tech stack.** HTML5/CSS3 + inline SVG animations + vanilla JS for the viewer; **React + Remotion 4 + TypeScript** for programmatic video rendering.

**Technologies & techniques.** Keyframe SVG animation (breathe/shake/pop/glow) with emotion-state character interpolation; Remotion's frame-relative `interpolate`/`spring`; timeline-driven narrative with staggered notification cascades; version-controlled, code-based animation.

**Problems solved.** Scalable team onboarding (render once, share widely); updatable animation-as-code vs. frame-by-frame editing.

**Status.** Prototype/WIP — HTML viewer complete, Remotion pipeline rendering output.

---

### 4d. Home Inventory — conversational household assistant
**Folder:** `home_inventory`

**What it does.** A household inventory + shopping system that evolved from a Google Sheets web app into a **Telegram bot** family members operate by natural-language chat, voice messages, and barcode photos — tracking items, expiry dates, and shopping needs across up to 10 homes with shared access.

**Tech stack.** **Google Apps Script** (V8) on **Google Sheets** as the database; Telegram Bot API; **Google Gemini** (intent parsing + barcode vision); Google Speech-to-Text; Open Food Facts API; optional Todoist; deployed via `clasp` from local VS Code.

**Technologies & techniques.** 3-layer Apps Script architecture (sheets → services → ui); multi-intent NL parsing; voice transcription; photo→barcode→product→inventory pipeline; **multi-tenancy** with chat-ID isolation; LockService for concurrent writes; transaction audit log; secrets in PropertiesService. Built entirely on **free-tier APIs (zero operating cost)**.

**Problems solved.** Removes friction from household inventory ("we're out of milk" by voice); expiry visibility; multi-home data isolation; conversational UX over a spreadsheet backend.

**Notable practice.** Developed with the **BMAD spec-driven methodology** — full PRD, architecture, epic/story breakdown, sprint tracking, and retrospectives — demonstrating disciplined AI-assisted delivery.

**Status.** Live on Apps Script; core MVP + AI/voice + multi-tenancy done (epics through home-sharing complete, Apr 2026), price-research in testing.

---

## Cross-cutting strengths (good "About" / skills-section material)

- **Multi-agent LLM systems that are trustworthy** — Writer-Reviewer pattern, adversarial verification, statistical validation by certified experts.
- **Full-stack range** — React 19/TS, Vue 3, SvelteKit, FastAPI, Node, Apps Script; from WebGL games to cloud microservices.
- **Real deployment & DevOps** — AWS + Terraform; GitHub Actions CI/CD across many repos; GitHub Pages; clasp.
- **AI-native developer workflows** — custom Claude Code skills & sub-agents, MCP servers, BMAD spec-driven development.
- **Research rigor** — reproducibility packages, inter-rater reliability statistics, ablation studies, peer-reviewed publication.
- **Product & growth thinking** — a live SaaS with its own SEO/GEO and Instagram acquisition engine.
- **Accessibility & localization** — full Serbian Latin + Cyrillic support with live transliteration; COPPA/GDPR compliance.
- **Pragmatic minimalism** — several polished, zero-dependency, offline-first apps that just work.

---

*Generated 2026-06-21 from a full read of all project folders. Folder paths are included per project so you can pull screenshots, repos, and live links when building the site.*
