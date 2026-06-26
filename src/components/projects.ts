interface Project {
  category: string
  title: string
  description: string
  tech: string[]
  status?: string
  live?: boolean
  link?: { href: string; label: string }
}

interface Theme {
  id: string
  title: string
  subtitle: string
  projects: Project[]
}

const themes: Theme[] = [
  {
    id: 'products',
    title: 'Products & Web Apps',
    subtitle: 'From research prototype to live, deployed, automated products',
    projects: [
      {
        category: 'Live Product · Micro-SaaS',
        title: 'DigiPoz — Digital Wedding Invitations',
        description:
          'A solo-built SaaS for the Serbian market that turns a couple’s intake form into a published, personalized wedding website — instant template previews, RSVP tracking, and an Instagram acquisition engine. 29 themes driven by a custom templating engine and an event-driven Form → Apps Script → GitHub Actions → Pages pipeline.',
        tech: ['Node.js', 'Google Apps Script', 'Gemini 2.5', 'GitHub Actions', 'Playwright', 'FFmpeg'],
        status: 'In production',
        live: true,
        link: { href: 'https://digipoz.rs', label: 'digipoz.rs' },
      },
      {
        category: 'Deployed · Vanilla JS',
        title: 'Collections Hub',
        description:
          'A visual, searchable catalog of a board-game collection and personal library with multi-criteria filtering, grouping, persistent star ratings, and library export — no framework, no build step. Full Serbian localization with correct Cyrillic sorting via the Intl API.',
        tech: ['Vanilla JS (ES6+)', 'Intl API', 'localStorage', 'GitHub Pages'],
        status: 'Deployed & live',
      },
      {
        category: 'SPA · Vue 3',
        title: 'Travel Photo Map',
        description:
          'Upload geotagged travel photos and the app reads GPS EXIF data to plot them as markers on an interactive map, with a photo modal and trip stats. Clean SPA architecture with components, composables, stores, and end-to-end tests.',
        tech: ['Vue 3', 'Vite', 'Pinia', 'Leaflet', 'exifr', 'PrimeVue'],
        status: 'MVP complete',
      },
      {
        category: 'Deployed · Vanilla JS',
        title: 'Wedding Invitation Site',
        description:
          'An elegant single-page invitation with a 3D CSS envelope-opening animation, countdown, and backend-free RSVP via Google Sheets — full Cyrillic support. The personal project that became the DigiPoz product.',
        tech: ['HTML5/CSS3', '3D CSS transforms', 'Google Sheets', 'GitHub Pages'],
        status: 'Deployed & live',
      },
    ],
  },
  {
    id: 'ai-tooling',
    title: 'AI-Native Tooling & Methodology',
    subtitle: 'Multi-agent patterns, MCP servers, and spec-driven workflows',
    projects: [
      {
        category: 'Active · Knowledge System',
        title: 'Knowledge Hub',
        description:
          'A local-first, zero-dependency learning system where each topic is a self-contained HTML page with retrieval-practice quizzes. Backed by a custom Claude Code toolchain — skills plus three sub-agents that do adversarial claim verification and QA before content is published.',
        tech: ['Vanilla JS', 'Claude Code skills', 'Sub-agents', 'Inline SVG'],
        status: 'Active — 16 topics, 35+ sources cited',
      },
      {
        category: 'Spec-Complete · MCP Server',
        title: 'Memory — Unified AI-Memory Layer',
        description:
          'A local-first app and MCP server that aggregates conversation history across Claude Code, ChatGPT, and Obsidian into one searchable memory layer — auto-categorizing threads, detecting research patterns, and feeding context back into AI tools. Hybrid semantic + full-text search.',
        tech: ['FastAPI', 'sqlite-vec', 'FTS5', 'SvelteKit', 'MCP (FastMCP)', 'LiteLLM'],
        status: 'Complete BMAD specification',
      },
      {
        category: 'Prototype · Vanilla JS',
        title: 'Life Dashboard',
        description:
          'An infinite-canvas dashboard that turns an Amplenote export into 13 interconnected “life areas” as draggable cards, with SVG relationship lines and a navigable minimap — a single static file, fully offline. Documented with a clean path to scale into React + D3.',
        tech: ['Vanilla JS', 'SVG', 'Canvas', 'localStorage'],
        status: 'Functional prototype',
      },
    ],
  },
  {
    id: 'education',
    title: 'Educational Projects & Games',
    subtitle: 'Making abstract concepts playable — from chemistry to LLMs',
    projects: [
      {
        category: 'Deployed · WebGL Game',
        title: 'HemiLab — Chemistry Game',
        description:
          'A molecule-building puzzle game teaching the Serbian grade 7–8 chemistry curriculum, fully offline-first and COPPA/GDPR-compliant. All graphics are drawn programmatically (no image assets), keeping the bundle to ~108 KB gzipped, with dual Latin + Cyrillic localization and live transliteration.',
        tech: ['PixiJS 8 (WebGL)', 'Howler.js', 'Vite', 'localStorage'],
        status: 'MVP deployed — 15 molecules',
      },
      {
        category: 'Playable · Card Game',
        title: 'PROMPT CRASH',
        description:
          'A 3–6 player cooperative card game that teaches prompt engineering and LLM concepts. Players craft prompts over 5 sprints while hallucinated AI outputs spread “bugs” through a simulated codebase — a dependency-graph corruption cascade and a “temperature die” map LLM ideas to risk/reward.',
        tech: ['Vanilla JS', 'State machine', '108-card system'],
        status: 'Playable & workshop-ready',
      },
      {
        category: 'WIP · Animation-as-Code',
        title: 'Copilot Video Course',
        description:
          'An animated explainer about GitHub Copilot adoption for team leads, delivered both as a standalone HTML/SVG viewer and as a code-rendered MP4 — keyframe SVG animation and version-controlled, programmatic video rendering.',
        tech: ['React', 'Remotion 4', 'TypeScript', 'Inline SVG'],
        status: 'Prototype / WIP',
      },
      {
        category: 'Live · Conversational AI',
        title: 'Home Inventory Assistant',
        description:
          'A household inventory and shopping system operated by a Telegram bot through natural-language chat, voice messages, and barcode photos — multi-tenant across up to 10 homes, built entirely on free-tier APIs. Delivered with the BMAD spec-driven methodology.',
        tech: ['Google Apps Script', 'Gemini', 'Telegram Bot API', 'Speech-to-Text'],
        status: 'Live — core MVP complete',
      },
    ],
  },
]

function renderTags(tech: string[]): string {
  return tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')
}

function renderCard(project: Project): string {
  const liveBadge = project.live ? `<span class="project-live"><span class="live-dot"></span>Live</span>` : ''
  const linkEl = project.link
    ? `<a href="${project.link.href}" target="_blank" rel="noopener" class="project-link-text">${project.link.label}
         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
       </a>`
    : ''
  const statusEl = project.status ? `<span class="project-status">${project.status}</span>` : ''
  const footer = statusEl || linkEl ? `<div class="project-footer">${statusEl}${linkEl}</div>` : ''

  return `
    <article class="project-card compact">
      <div class="project-content">
        <div class="project-category">${project.category}${liveBadge}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">${renderTags(project.tech)}</div>
        ${footer}
      </div>
    </article>
  `
}

function renderTheme(theme: Theme): string {
  return `
    <div class="projects-theme">
      <div class="theme-header">
        <h3 class="theme-title">${theme.title}</h3>
        <p class="theme-subtitle">${theme.subtitle}</p>
      </div>
      <div class="projects-grid">
        ${theme.projects.map(renderCard).join('')}
      </div>
    </div>
  `
}

function renderFlagship(): string {
  const stats = [
    { num: '96.5%', lbl: 'Factual correctness' },
    { num: '~65%', lbl: 'Less hallucination' },
    { num: '6', lbl: 'ISO-26262 experts' },
    { num: '231', lbl: 'UCAs validated' },
  ]

  return `
    <article class="flagship-card">
      <div class="flagship-glow"></div>
      <div class="flagship-content">
        <div class="project-category">Flagship · AI-Safety Research</div>
        <h3 class="flagship-title">STPAgent — Multi-Agent LLM for Safety Analysis</h3>
        <p class="flagship-description">
          A Writer–Reviewer multi-agent architecture that automates the most labor-intensive step of
          STPA — identifying Unsafe Control Actions in safety-critical systems — wrapped in a
          production-grade full-stack platform deployed on AWS. One agent proposes, a second critiques,
          and they iterate to consensus: a design built to suppress LLM hallucination in a domain where a
          wrong answer is dangerous, validated by ISO-26262-certified functional-safety experts.
        </p>
        <div class="flagship-stats">
          ${stats
            .map(
              (s) => `
            <div class="flagship-stat">
              <span class="num">${s.num}</span>
              <span class="lbl">${s.lbl}</span>
            </div>`
            )
            .join('')}
        </div>
        <div class="project-tech">
          ${renderTags([
            'LangGraph',
            'FastAPI',
            'React 19 + TS',
            'AWS (ECS, CloudFront)',
            'Terraform',
            'OpenAI GPT',
          ])}
        </div>
        <div class="flagship-footer">
          <span class="project-status">
            Paper submitted to the <em>Journal of Systems Architecture</em> (2026) ·
            Open reproducibility package released
          </span>
        </div>
      </div>
    </article>
  `
}

export function createProjects(): string {
  return `
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Projects</h2>
          <p class="section-subtitle">Shipped products, AI-native tooling, and educational work</p>
        </div>

        ${renderFlagship()}

        ${themes.map(renderTheme).join('')}

        <div class="projects-footer">
          <p class="projects-note">
            Want the deep dive on any of these? Connect with me on
            <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="github-link">
              LinkedIn
            </a>
            to talk AI research, automotive software, or product engineering.
          </p>
        </div>
      </div>
    </section>
  `
}
