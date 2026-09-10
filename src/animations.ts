export function initializeAnimations(): void {
  // Initialize intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  // Mark cards as stagger items so they reveal with a cascade when their section scrolls into view
  const staggerSelector = '.timeline-item, .skill-category, .education-item, .course-card, .project-card, .research-paper, .value-item, .appearance-card'
  document.querySelectorAll<HTMLElement>(staggerSelector).forEach(el => el.classList.add('stagger-item'))

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')

        // Reveal child cards with a cascading delay
        const items = entry.target.querySelectorAll<HTMLElement>('.stagger-item')
        items.forEach((item, index) => {
          item.style.transitionDelay = `${Math.min(index * 80, 480)}ms`
          item.classList.add('is-visible')
        })

        // Animate skill bars
        if (entry.target.classList.contains('skills')) {
          animateSkillBars()
        }

        // Animate stats counters
        if (entry.target.classList.contains('about-stats')) {
          animateCounters()
        }
      }
    })
  }, observerOptions)

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })

  // Highlight the nav link for the section currently in view
  initializeScrollSpy()

  // Add scroll-based header styling + progress bar
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

}

function initializeScrollSpy(): void {
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-link'))
  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  if (!navLinks.length || !sections.length) return

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
        })
      }
    })
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 })

  sections.forEach(section => spy.observe(section))
}

function handleScroll(): void {
  const header = document.querySelector('.header') as HTMLElement
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  }

  // Update the scroll progress bar
  const bar = document.querySelector('.scroll-progress-bar') as HTMLElement | null
  if (bar) {
    const doc = document.documentElement
    const max = doc.scrollHeight - doc.clientHeight
    const progress = max > 0 ? (window.scrollY / max) * 100 : 0
    bar.style.width = `${progress}%`
  }
}

function animateSkillBars(): void {
  const skillBars = document.querySelectorAll('.skill-progress')

  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = (bar as HTMLElement).style.width
      ;(bar as HTMLElement).style.width = '0%'

      setTimeout(() => {
        ;(bar as HTMLElement).style.width = width
      }, 100)
    }, index * 100)
  })
}

function animateCounters(): void {
  const counters = document.querySelectorAll('.stat-number')

  counters.forEach(counter => {
    const target = counter.textContent || '0'
    const numericTarget = parseInt(target.replace(/[^0-9]/g, '')) || 0
    const suffix = target.replace(/[0-9]/g, '')

    let current = 0
    const increment = Math.ceil(numericTarget / 50)

    const timer = setInterval(() => {
      current += increment
      if (current >= numericTarget) {
        current = numericTarget
        clearInterval(timer)
      }
      counter.textContent = current + suffix
    }, 50)
  })
}

