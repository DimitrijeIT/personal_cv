export function initializeAnimations(): void {
  // Initialize intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        
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

  // Add scroll-based header styling
  window.addEventListener('scroll', handleScroll)
  
  // Initialize typing animation
  initializeTypingAnimation()
}

function handleScroll(): void {
  const header = document.querySelector('.header') as HTMLElement
  if (!header) return

  if (window.scrollY > 100) {
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
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

function initializeTypingAnimation(): void {
  const typewriterElement = document.querySelector('.role') as HTMLElement
  if (!typewriterElement) return

  const roles = ['AI Researcher', 'PhD Candidate', 'Software Engineer', 'University Teacher', 'Startup Co-Founder']
  let currentRoleIndex = 0
  let currentCharIndex = 0
  let isDeleting = false

  function typeRole() {
    const currentRole = roles[currentRoleIndex]
    
    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, currentCharIndex - 1)
      currentCharIndex--
    } else {
      typewriterElement.textContent = currentRole.substring(0, currentCharIndex + 1)
      currentCharIndex++
    }

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && currentCharIndex === currentRole.length) {
      typeSpeed = 2000 // Pause at end
      isDeleting = true
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false
      currentRoleIndex = (currentRoleIndex + 1) % roles.length
      typeSpeed = 500
    }

    setTimeout(typeRole, typeSpeed)
  }

  // Start the typing animation after a delay
  setTimeout(typeRole, 1000)
}


