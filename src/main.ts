import './style.css'
import { createHeader } from './components/header'
import { createHero } from './components/hero'
import { createAbout } from './components/about'
import { createExperience } from './components/experience'
import { createSkills } from './components/skills'
import { createProjects } from './components/projects'
import { createResearch } from './components/research'
import { createPublicAppearances } from './components/public-appearances'
import { createContact } from './components/contact'
import { initializeAnimations } from './animations'

// Initialize the application
function initApp() {
  const app = document.querySelector<HTMLDivElement>('#app')
  
  if (!app) {
    console.error('Could not find app element')
    return
  }
  
  console.log('Initializing app...')

  // Apply saved theme before rendering to avoid a flash of the wrong theme
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme === 'dark' || storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', storedTheme)
  }

  // Create the main layout structure
  app.innerHTML = `
    <div class="cv-container">
      ${createHeader()}
      <main class="main-content">
        ${createHero()}
        ${createAbout()}
        ${createExperience()}
        ${createSkills()}
        ${createProjects()}
        ${createResearch()}
        ${createPublicAppearances()}
        ${createContact()}
      </main>
    </div>
  `
  
  console.log('App content created')
  
  // Initialize animations and interactions
  try {
    initializeAnimations()
    console.log('Animations initialized')
  } catch (error) {
    console.error('Error initializing animations:', error)
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e: Event) => {
      e.preventDefault()
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
  const navMenu = document.querySelector('.nav-menu')
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      mobileMenuBtn.classList.toggle('active')
    })
  }

  // Dark-mode toggle (persisted; defaults to OS preference until the user chooses)
  const root = document.documentElement
  const themeToggle = document.querySelector('.theme-toggle')

  const isDarkActive = (): boolean =>
    root.getAttribute('data-theme') === 'dark' ||
    (!root.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)

  themeToggle?.setAttribute('aria-pressed', String(isDarkActive()))

  themeToggle?.addEventListener('click', () => {
    const next = isDarkActive() ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'))
  })

  console.log('App initialization complete')
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp)
} else {
  initApp()
}
