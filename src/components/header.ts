export function createHeader(): string {
  return `
    <header class="header">
      <div class="scroll-progress"><span class="scroll-progress-bar"></span></div>
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a href="#hero" class="logo-text">Dimitrije Stojanović</a>
          </div>

          <div class="header-actions">
            <button class="theme-toggle" type="button" aria-label="Toggle dark mode" aria-pressed="false">
              <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            </button>

            <nav class="nav">
              <ul class="nav-menu">
                <li><a href="#hero" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#education" class="nav-link">Education</a></li>
                <li><a href="#certifications" class="nav-link">Certifications</a></li>
                <li><a href="#teaching" class="nav-link">Teaching</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="#research" class="nav-link">Research</a></li>
                <li><a href="#public-appearances" class="nav-link">Appearances</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
              </ul>

              <button class="mobile-menu-btn" aria-label="Toggle mobile menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  `
}
