(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function g(){return`
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
  `}function h(){return`
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="greeting">Hello, I'm</span>
              <span class="name">Dimitrije Stojanović</span>
              <span class="role">AI Researcher & Software Engineer</span>
            </h1>

            <p class="hero-description">
              I build multi-agent LLM systems for safety-critical software — and ship them.
              PhD candidate researching trustworthy AI for automotive safety, with seven years
              as an automotive software engineer turning research into production.
            </p>

            <div class="hero-actions">
              <a href="#contact" class="btn btn-primary">Get In Touch</a>
              <a href="#projects" class="btn btn-secondary">View My Work</a>
              <!-- Download CV: drop a PDF at public/cv.pdf, then uncomment this button.
              <a href="/personal_cv/cv.pdf" class="btn btn-tertiary" download>Download CV</a>
              -->
            </div>

            <div class="hero-social">
              <a href="https://github.com/DimitrijeIT" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:dimitrije.stojanovic.95@gmail.com" class="social-link" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="hero-image">
              <div class="hero-avatar">
                <!-- Swap this monogram for a photo: replace the inner div with <img src="/personal_cv/headshot.jpg" alt="Dimitrije Stojanović"> -->
                <div class="avatar-monogram" aria-hidden="true"><span>DS</span></div>
              </div>
              <div class="hero-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function u(){return`
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know more about my background and passion</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <div class="about-intro">
              <p>
                I'm an AI researcher currently pursuing a <strong>PhD</strong> with a focus on Transformer models, 
                generative AI, and computer vision. My academic pursuits are enriched by <strong>Seven years</strong> 
                of experience in the automotive industry as a software engineer and domain expert, 
                blending theoretical knowledge with practical application.
              </p>
              
              <p>
                This unique combination of skills and experiences positions me at the forefront of AI research 
                and its real-world implications. Beyond my professional and academic endeavors, I am actively 
                involved in the startup ecosystem, having co-founded BikeSeeing and participated in mentorship programs. 
                My commitment extends to academia, where I teach at the Faculty of Technical Sciences.
              </p>
            </div>
            
            <div class="about-details">
              <div class="detail-item">
                <span class="detail-label">Location</span>
                <span class="detail-value">Novi Sad, Serbia</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Experience</span>
                <span class="detail-value">7 Years</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Focus</span>
                <span class="detail-value">AI Research & Automotive Software</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Education</span>
                <span class="detail-value">PhD Candidate</span>
              </div>
            </div>
          </div>
          
          <div class="about-stats">
            <div class="stat-item">
              <span class="stat-number">7</span>
              <span class="stat-label">Years Industry Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Teaching</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">1</span>
              <span class="stat-label">Startup Co-Founded</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">PhD</span>
              <span class="stat-label">In Progress</span>
            </div>
          </div>
        </div>
        
        <div class="about-values">
          <h3 class="values-title">What Drives Me</h3>
          <div class="values-grid">
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4>Excellence</h4>
              <p>Committed to delivering high-quality solutions that exceed expectations</p>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Always exploring new technologies and creative approaches to problem-solving</p>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.49 3.32-2.04-2.04A2.5 2.5 0 0 0 7.64 10H4c-1.1 0-2 .9-2 2v10h2v-3h2.64L8 21h8v-1h4z"/>
                </svg>
              </div>
              <h4>Collaboration</h4>
              <p>Building strong relationships and working effectively with diverse teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section id="experience" class="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Experience</h2>
          <p class="section-subtitle">My professional journey and achievements</p>
        </div>
        
        <div class="experience-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="company-logo">
                  <img src="/personal_cv/logos/nortal.png" alt="Nortal" class="logo" onerror="this.onerror=null;this.replaceWith(Object.assign(document.createElement('span'),{className:'logo-fallback',textContent:'N'}))">
                </div>
                <div class="job-info">
                  <h3 class="job-title">Senior Software Engineer</h3>
                  <span class="company">Nortal</span>
                  <span class="period">2025 - Present</span>
                </div>
              </div>
              <div class="job-description">
                <p>
                  Building AI-powered image search algorithms and scalable AWS cloud solutions for
                  large organizations and government clients.
                </p>
                <ul class="achievements">
                  <li>Develop image search and retrieval algorithms powered by AI and computer vision</li>
                  <li>Design and deploy scalable cloud solutions on AWS for enterprise and public-sector systems</li>
                  <li>Apply machine learning to large-scale, real-world organizational data</li>
                  <li>Deliver software for government and large-organization environments</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">AI / ML</span>
                  <span class="tech-tag">Computer Vision</span>
                  <span class="tech-tag">Image Search</span>
                  <span class="tech-tag">AWS</span>
                  <span class="tech-tag">Cloud Architecture</span>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="company-logo">
                  <img src="/personal_cv/logos/tttech_auto.png" alt="TTTech Auto" class="logo">
                </div>
                <div class="job-info">
                  <h3 class="job-title">Senior Software Engineer</h3>
                  <span class="company">TTTech Auto</span>
                  <span class="period">2018 - 2025</span>
                </div>
              </div>
              <div class="job-description">
                <p>
                  Senior C++ software engineer working directly with customers on the latest automotive projects. 
                  Specialized in software update technologies and ASPICE processes in the automotive domain.
                </p>
                <ul class="achievements">
                  <li>Led software update solutions for major automotive OEMs</li>
                  <li>Implemented TDD and agile methodologies in automotive software development</li>
                  <li>Worked with modern software engineering principles and ASPICE processes</li>
                  <li>Collaborated with international teams on safety-critical automotive systems</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">C++</span>
                  <span class="tech-tag">AUTOSAR</span>
                  <span class="tech-tag">TDD</span>
                  <span class="tech-tag">ASPICE</span>
                  <span class="tech-tag">Agile</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="company-logo">
                  <img src="/personal_cv/logos/ftn.png" alt="Faculty of Technical Sciences" class="logo">
                </div>
                <div class="job-info">
                  <h3 class="job-title">Teaching Assistant</h3>
                  <span class="company">Faculty of Technical Sciences, University of Novi Sad</span>
                  <span class="period">2021 - Present</span>
                </div>
              </div>
              <div class="job-description">
                <p>
                  Teaching Computer Vision and AUTOSAR Classic to the new generation of engineers, 
                  bridging the gap between theory and practice in automotive software development.
                </p>
                <ul class="achievements">
                  <li>Taught comprehensive Computer Vision curriculum and materials</li>
                  <li>Taught AUTOSAR Classic principles and implementation</li>
                  <li>Mentored students in practical automotive software projects</li>
                  <li>Integrated industry best practices into academic curriculum</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">Computer Vision</span>
                  <span class="tech-tag">AUTOSAR Classic</span>
                  <span class="tech-tag">Teaching</span>
                  <span class="tech-tag">Mentoring</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="company-logo">
                  <img src="/personal_cv/logos/nit_academy.png" alt="NIT Academy" class="logo">
                </div>
                <div class="job-info">
                  <h3 class="job-title">Teaching Assistant</h3>
                  <span class="company">NIT Academy</span>
                  <span class="period">2023 - Present</span>
                </div>
              </div>
              <div class="job-description">
                <p>
                  Teaching advanced software technologies including Adaptive AUTOSAR, 
                  Test-Driven Development, and Rust programming language.
                </p>
                <ul class="achievements">
                  <li>Designed and taught Adaptive AUTOSAR training programs</li>
                  <li>Designed and taught TDD methodologies for automotive software development</li>
                  <li>Designed and taught Rust programming language</li>
                  <li>Developed practical exercises and real-world case studies</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">Adaptive AUTOSAR</span>
                  <span class="tech-tag">TDD</span>
                  <span class="tech-tag">Rust</span>
                  <span class="tech-tag">Training</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="company-logo">
                  <img src="/personal_cv/logos/bikeseeing.png" alt="BikeSeeing" class="logo">
                </div>
                <div class="job-info">
                  <h3 class="job-title">Co-Founder</h3>
                  <span class="company">BikeSeeing Startup</span>
                  <span class="period">2018</span>
                </div>
              </div>
              <div class="job-description">
                <p>
                  Co-founded BikeSeeing, a two-sided marketplace connecting tourists with local guides on bikes, 
                  connecting tourists with hidden places and special views.
                </p>
                <ul class="achievements">
                  <li>Developed business model for tourism marketplace platform</li>
                  <li>Led product development and user experience design</li>
                  <li>Pitched to investors and participated in startup accelerator programs</li>
                  <li>Gained valuable entrepreneurship and business development experience</li>
                </ul>
                <div class="tech-stack">
                  <span class="tech-tag">Entrepreneurship</span>
                  <span class="tech-tag">Business Development</span>
                  <span class="tech-tag">Product Management</span>
                  <span class="tech-tag">Marketplace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function f(){return`
    <div class="skills-categories">
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon ai-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4"/>
              <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/>
              <path d="M18.364 18.364c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-.024-.39-1.414 0-.39 1.024 0 1.414z"/>
              <path d="M4.222 4.222c.39.39 1.024.39 1.414 0s.39-1.024 0-1.414-1.024-.39-1.414 0-.39 1.024 0 1.414z"/>
              <path d="M18.364 5.636c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z"/>
              <path d="M4.222 19.778c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0-.39 1.024 0 1.414 1.024.39 1.414 0z"/>
            </svg>
          </div>
          <h3 class="category-title">AI & Machine Learning</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Computer Vision</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Transformers</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Large Language Models</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">HuggingFace</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Python AI/ML</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon automotive-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 17h14v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2z"/>
              <path d="M7 14h10l1.8-6H5.2L7 14z"/>
              <path d="M5 8h14"/>
              <circle cx="7" cy="17" r="2"/>
              <circle cx="17" cy="17" r="2"/>
            </svg>
          </div>
          <h3 class="category-title">Automotive Software</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">C++</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">AUTOSAR Classic</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Adaptive AUTOSAR</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">ASPICE</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Rust</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon engineering-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h3 class="category-title">Software Engineering</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Test-Driven Development</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Agile Methodologies</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Software Architecture</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Version Control (Git)</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Code Review</span>
          </div>
        </div>
      </div>
      
      <div class="skill-category">
        <div class="category-header">
          <div class="category-icon leadership-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <h3 class="category-title">Teaching & Leadership</h3>
        </div>
        <div class="skills-grid">
          <div class="skill-item">
            <span class="skill-name">Academic Teaching</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Mentoring</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Research & Development</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Public Speaking</span>
          </div>
          
          <div class="skill-item">
            <span class="skill-name">Entrepreneurship</span>
          </div>
        </div>
      </div>
    </div>
  `}function y(){return`
    <div class="skills-summary">
      <h3 class="summary-title">Research & Technical Expertise</h3>
      <div class="expertise-tags">
        <span class="expertise-tag primary">AI Research</span>
        <span class="expertise-tag">Computer Vision</span>
        <span class="expertise-tag">Transformer Models</span>
        <span class="expertise-tag">Automotive Software</span>
        <span class="expertise-tag">AUTOSAR</span>
        <span class="expertise-tag">C++ Development</span>
        <span class="expertise-tag">Test-Driven Development</span>
        <span class="expertise-tag">Academic Teaching</span>
        <span class="expertise-tag">PhD Research</span>
        <span class="expertise-tag">Startup Experience</span>
      </div>
    </div>
  `}function b(){return`
    <div class="education-content">
      <div class="education-grid">
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/ftn.png" alt="University of Novi Sad" class="logo">
          </div>
          <div class="education-info">
            <h4>PhD in Computer Science</h4>
            <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
            <p class="period">2021 - Present</p>
            <p class="description">Focus on AI Research, Transformer models, and Computer Vision</p>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/ftn.png" alt="University of Novi Sad" class="logo">
          </div>
          <div class="education-info">
            <h4>Master of Science in Electrical Engineering</h4>
            <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
            <p class="period">2019 - 2021</p>
            <p class="description">Specialized in Computer Vision and Machine Learning</p>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/etf.png" alt="University of Belgrade" class="logo">
          </div>
          <div class="education-info">
            <h4>Bachelor's degree, Computer Engineering and Informatics</h4>
            <p class="institution">University of Belgrade, School of Electrical Engineering</p>
            <p class="period">2014 - 2018</p>
            <p class="description">Foundation in Computer Engineering and Informatics</p>
          </div>
        </div>
      </div>
    </div>
  `}function w(){return`
    <div class="certifications-content">
      <div class="education-grid">
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udacity.png" alt="Udacity" class="logo">
          </div>
          <div class="education-info">
            <h4>AI Programming with Python Nanodegree</h4>
            <p class="institution">Udacity</p>
            <p class="period">2020</p>
            <p class="description">Advanced Python programming for AI applications</p>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Python AI/ML</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>AI Agentic Design Patterns with AutoGen</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Multi-agent conversation patterns and agentic AI design with Microsoft AutoGen</p>
            <a href="https://learn.deeplearning.ai/accomplishments/f657a881-60aa-42d8-88c0-24e2a3fd747e?usp=sharing" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>ChatGPT Prompt Engineering for Developers</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Advanced prompt engineering techniques for ChatGPT and LLM applications</p>
            <a href="https://learn.deeplearning.ai/accomplishments/bb4d050c-53ec-4019-b626-74e927c6e7d1" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>Open Source Models with Hugging Face</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Working with open source models, NLP, computer vision, and multimodal applications</p>
            <a href="https://learn.deeplearning.ai/accomplishments/57ddf23a-9f1f-4d9b-a799-d406287e1d41" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">HuggingFace</span>
              <span class="cert-tag ai-ml">Computer Vision</span>
              <span class="cert-tag ai-ml">Transformers</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>LangChain for LLM Application Development</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Building LLM applications with LangChain framework, memory, and chains</p>
            <a href="https://learn.deeplearning.ai/accomplishments/e00cbf27-d31d-4905-93d7-87e7e52da273" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>Building Generative AI Applications with Gradio</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Creating interactive AI applications with Gradio for NLP and computer vision tasks</p>
            <a href="https://learn.deeplearning.ai/accomplishments/0ab350ce-fc59-4d72-a267-df3308761e1a" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Computer Vision</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>Knowledge Graphs for RAG</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Building knowledge graphs for Retrieval-Augmented Generation applications</p>
            <a href="https://learn.deeplearning.ai/accomplishments/e2adb4f6-65e2-4458-b238-cc907c02cda0" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/deeplearning_ai.jpg" alt="DeepLearning.AI" class="logo">
          </div>
          <div class="education-info">
            <h4>AI Agents in LangGraph</h4>
            <p class="institution">DeepLearning.AI</p>
            <p class="period">2024</p>
            <p class="description">Advanced AI agent development using LangGraph framework with persistence and streaming</p>
            <a href="https://learn.deeplearning.ai/accomplishments/5cbfee27-52aa-42d5-8753-aa28b507af08" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
              <span class="cert-tag engineering">Software Architecture</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>LangChain- Develop AI Agents with LangChain & LangGraph</h4>
            <p class="institution">Udemy</p>
            <p class="period">September 2024</p>
            <p class="description">Advanced AI Agents development using LangChain and LangGraph frameworks</p>
            <a href="https://www.udemy.com/certificate/UC-e9a9f28e-a3c0-4b0d-b93d-d6cbf2f89589/" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
              <span class="cert-tag engineering">Software Engineering</span>
              <span class="cert-tag engineering">Software Architecture</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>AWS Certified Machine Learning Specialty 2025 - Hands On!</h4>
            <p class="institution">Udemy</p>
            <p class="period">July 2024</p>
            <p class="description">Comprehensive AWS ML services training and certification preparation</p>
            <a href="https://www.udemy.com/certificate/UC-578bef9f-6e6d-4bd0-b8b3-f00f169eea59/" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag engineering">Software Engineering</span>
              <span class="cert-tag engineering">Software Architecture</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>Machine Learning A-Z: AI, Python & R + ChatGPT Prize</h4>
            <p class="institution">Udemy</p>
            <p class="period">2024</p>
            <p class="description">Comprehensive Machine Learning course covering Python, R, and AI technologies</p>
            <a href="https://www.udemy.com/certificate/UC-b6648857-7af2-43d2-b4a9-a285b402fc5d/" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">AI & Machine Learning</span>
              <span class="cert-tag ai-ml">Python AI/ML</span>
              <span class="cert-tag ai-ml">Large Language Models</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>Become a Product Manager | Learn the Skills & Get the Job</h4>
            <p class="institution">Udemy</p>
            <p class="period">2024</p>
            <p class="description">Product management fundamentals, strategy, and career development</p>
            <a href="https://www.udemy.com/certificate/UC-fcad8f44-e30b-45c9-a7e6-8faf951c2296/" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag leadership">Teaching & Leadership</span>
              <span class="cert-tag leadership">Entrepreneurship</span>
              <span class="cert-tag engineering">Agile Methodologies</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>The Complete Guide to Becoming a Software Architect</h4>
            <p class="institution">Udemy</p>
            <p class="period">2020</p>
            <p class="description">Software architecture principles, design patterns, and system design</p>
            <a href="https://www.udemy.com/certificate/UC-ff11f74b-3d00-43dc-a77c-6cad85a23d25/" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag engineering">Software Engineering</span>
              <span class="cert-tag engineering">Software Architecture</span>
              <span class="cert-tag engineering">Test-Driven Development</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/udemy.png" alt="Udemy" class="logo">
          </div>
          <div class="education-info">
            <h4>Complete Python Bootcamp From Zero to Hero in Python</h4>
            <p class="institution">Udemy</p>
            <p class="period">2019</p>
            <p class="description">Comprehensive Python programming fundamentals and advanced concepts</p>
            <a href="http://www.udemy.com/certificate/UC-LQQX7LIE" target="_blank" class="certificate-link">View Certificate</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">Python AI/ML</span>
              <span class="cert-tag engineering">Software Engineering</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/startup_centar.png" alt="Startup Center" class="logo">
          </div>
          <div class="education-info">
            <h4>Startup Accelerator Program</h4>
            <p class="institution">Startup Center Novi Sad</p>
            <p class="period">2018</p>
            <p class="description">Entrepreneurship, Business Development, and Innovation</p>
            <div class="certificate-tags">
              <span class="cert-tag leadership">Teaching & Leadership</span>
              <span class="cert-tag leadership">Entrepreneurship</span>
              <span class="cert-tag leadership">Research & Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function A(){return`
    <div class="teaching-content">
      <div class="education-grid">
        <div class="course-card">
          <div class="course-image">
            <img src="/personal_cv/course-images/tdd-bdd-course.jpg" alt="Software Development with TDD and BDD">
          </div>
          <div class="course-content">
            <h4>Software Development with TDD and BDD</h4>
            <p class="institution">NIT Academy</p>
            <p class="period">Current - Advanced Level</p>
            <p class="description">Master the art of software craftsmanship and technical excellence with Test-Driven Development (TDD) and Behavior-Driven Development (BDD). This comprehensive course covers patterns in TDD, refactoring legacy code, and BDD methodology with practical applications.</p>
            <a href="https://academy.nit-institute.com/course/software-development-with-tdd-and-bdd/" target="_blank" class="certificate-link">View Course</a>
            <div class="certificate-tags">
              <span class="cert-tag teaching">Software Engineering</span>
              <span class="cert-tag engineering">TDD/BDD</span>
              <span class="cert-tag engineering">C++</span>
            </div>
          </div>
        </div>
        
        <div class="course-card">
          <div class="course-image">
            <img src="/personal_cv/course-images/adaptive-autosar-course.jpg" alt="Automotive Software with Adaptive AUTOSAR">
          </div>
          <div class="course-content">
            <h4>Automotive Software with Adaptive AUTOSAR</h4>
            <p class="institution">NIT Academy</p>
            <p class="period">Current - Advanced Level</p>
            <p class="description">Learn and master Adaptive AUTOSAR architecture, methodology and workflow. This training covers service-oriented architecture, communication management, functional clusters, and modern vehicle ECU development using industry-proven platforms.</p>
            <a href="https://academy.nit-institute.com/course/automotive-software-with-adaptive-autosar/" target="_blank" class="certificate-link">View Course</a>
            <div class="certificate-tags">
              <span class="cert-tag automotive">Automotive Software</span>
              <span class="cert-tag automotive">AUTOSAR</span>
              <span class="cert-tag engineering">C++</span>
            </div>
          </div>
        </div>
        
        <div class="course-card">
          <div class="course-image">
            <img src="/personal_cv/course-images/rust-programming-course.png" alt="Programming with Rust">
          </div>
          <div class="course-content">
            <h4>Programming with Rust</h4>
            <p class="institution">NIT Academy</p>
            <p class="period">Current - Advanced Level</p>
            <p class="description">Introduction to Rust programming language fundamentals including ownership concepts, concurrency, smart pointers, data types, and package management. Designed for safe and efficient system-level and microservices development.</p>
            <a href="https://academy.nit-institute.com/course/rust/" target="_blank" class="certificate-link">View Course</a>
            <div class="certificate-tags">
              <span class="cert-tag engineering">Rust</span>
              <span class="cert-tag engineering">Systems Programming</span>
              <span class="cert-tag teaching">Programming Languages</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/ftn.png" alt="Faculty of Technical Sciences" class="logo">
          </div>
          <div class="education-info">
            <h4>Computer Vision</h4>
            <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
            <p class="period">Current - University Course</p>
            <p class="description">Advanced computer vision course covering modern techniques, algorithms, and applications in image processing, pattern recognition, and machine learning for visual data analysis.</p>
            <a href="https://ftn.uns.ac.rs/2686/dimitrije-stojanovic" target="_blank" class="certificate-link">Faculty Profile</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">Computer Vision</span>
              <span class="cert-tag ai-ml">Machine Learning</span>
              <span class="cert-tag teaching">Academic Teaching</span>
            </div>
          </div>
        </div>
        
        <div class="education-item">
          <div class="education-logo">
            <img src="/personal_cv/logos/ftn.png" alt="Faculty of Technical Sciences" class="logo">
          </div>
          <div class="education-info">
            <h4>Classic Computer Vision</h4>
            <p class="institution">Faculty of Technical Sciences, University of Novi Sad</p>
            <p class="period">Current - University Course</p>
            <p class="description">Foundational computer vision course focusing on classical image processing techniques, feature detection, geometric transformations, and traditional approaches to visual perception and analysis.</p>
            <a href="https://ftn.uns.ac.rs/2686/dimitrije-stojanovic" target="_blank" class="certificate-link">Faculty Profile</a>
            <div class="certificate-tags">
              <span class="cert-tag ai-ml">Computer Vision</span>
              <span class="cert-tag engineering">Image Processing</span>
              <span class="cert-tag teaching">Academic Teaching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function k(){return`
    <div class="skills-wrapper">
      <!-- Technical Skills Section -->
      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Skills & Technologies</h2>
            <p class="section-subtitle">Expertise areas and Technologies I work with</p>
          </div>
          
          <div class="skills-content">
            ${f()}
            ${y()}
          </div>
        </div>
      </section>
      
      <!-- Education Section -->
      <section id="education" class="education skills-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Education</h2>
            <p class="section-subtitle">Academic Background</p>
          </div>
          
          <div class="skills-content">
            ${b()}
          </div>
        </div>
      </section>
      
      <!-- Certifications Section -->
      <section id="certifications" class="certifications skills-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Certifications</h2>
            <p class="section-subtitle">Professional Development</p>
          </div>
          
          <div class="skills-content">
            ${w()}
          </div>
        </div>
      </section>
      
      <!-- Teaching Section -->
      <section id="teaching" class="teaching skills-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Teaching Experience</h2>
            <p class="section-subtitle">Educational Contributions</p>
          </div>
          
          <div class="skills-content">
            ${A()}
          </div>
        </div>
      </section>
    </div>
  `}const S=[{id:"products",title:"Products & Web Apps",subtitle:"From research prototype to live, deployed, automated products",projects:[{category:"Live Product · Micro-SaaS",title:"DigiPoz — Digital Wedding Invitations",description:"A solo-built SaaS for the Serbian market that turns a couple’s intake form into a published, personalized wedding website — instant template previews, RSVP tracking, and an Instagram acquisition engine. 29 themes driven by a custom templating engine and an event-driven Form → Apps Script → GitHub Actions → Pages pipeline.",tech:["Node.js","Google Apps Script","Gemini 2.5","GitHub Actions","Playwright","FFmpeg"],status:"In production",live:!0,link:{href:"https://digipoz.rs",label:"digipoz.rs"}},{category:"Deployed · Vanilla JS",title:"Collections Hub",description:"A visual, searchable catalog of a board-game collection and personal library with multi-criteria filtering, grouping, persistent star ratings, and library export — no framework, no build step. Full Serbian localization with correct Cyrillic sorting via the Intl API.",tech:["Vanilla JS (ES6+)","Intl API","localStorage","GitHub Pages"],status:"Deployed & live"},{category:"SPA · Vue 3",title:"Travel Photo Map",description:"Upload geotagged travel photos and the app reads GPS EXIF data to plot them as markers on an interactive map, with a photo modal and trip stats. Clean SPA architecture with components, composables, stores, and end-to-end tests.",tech:["Vue 3","Vite","Pinia","Leaflet","exifr","PrimeVue"],status:"MVP complete"},{category:"Deployed · Vanilla JS",title:"Wedding Invitation Site",description:"An elegant single-page invitation with a 3D CSS envelope-opening animation, countdown, and backend-free RSVP via Google Sheets — full Cyrillic support. The personal project that became the DigiPoz product.",tech:["HTML5/CSS3","3D CSS transforms","Google Sheets","GitHub Pages"],status:"Deployed & live"}]},{id:"ai-tooling",title:"AI-Native Tooling & Methodology",subtitle:"Multi-agent patterns, MCP servers, and spec-driven workflows",projects:[{category:"Active · Knowledge System",title:"Knowledge Hub",description:"A local-first, zero-dependency learning system where each topic is a self-contained HTML page with retrieval-practice quizzes. Backed by a custom Claude Code toolchain — skills plus three sub-agents that do adversarial claim verification and QA before content is published.",tech:["Vanilla JS","Claude Code skills","Sub-agents","Inline SVG"],status:"Active — 16 topics, 35+ sources cited"},{category:"Spec-Complete · MCP Server",title:"Memory — Unified AI-Memory Layer",description:"A local-first app and MCP server that aggregates conversation history across Claude Code, ChatGPT, and Obsidian into one searchable memory layer — auto-categorizing threads, detecting research patterns, and feeding context back into AI tools. Hybrid semantic + full-text search.",tech:["FastAPI","sqlite-vec","FTS5","SvelteKit","MCP (FastMCP)","LiteLLM"],status:"Complete BMAD specification"},{category:"Prototype · Vanilla JS",title:"Life Dashboard",description:"An infinite-canvas dashboard that turns an Amplenote export into 13 interconnected “life areas” as draggable cards, with SVG relationship lines and a navigable minimap — a single static file, fully offline. Documented with a clean path to scale into React + D3.",tech:["Vanilla JS","SVG","Canvas","localStorage"],status:"Functional prototype"}]},{id:"education",title:"Educational Projects & Games",subtitle:"Making abstract concepts playable — from chemistry to LLMs",projects:[{category:"Deployed · WebGL Game",title:"HemiLab — Chemistry Game",description:"A molecule-building puzzle game teaching the Serbian grade 7–8 chemistry curriculum, fully offline-first and COPPA/GDPR-compliant. All graphics are drawn programmatically (no image assets), keeping the bundle to ~108 KB gzipped, with dual Latin + Cyrillic localization and live transliteration.",tech:["PixiJS 8 (WebGL)","Howler.js","Vite","localStorage"],status:"MVP deployed — 15 molecules"},{category:"Playable · Card Game",title:"PROMPT CRASH",description:"A 3–6 player cooperative card game that teaches prompt engineering and LLM concepts. Players craft prompts over 5 sprints while hallucinated AI outputs spread “bugs” through a simulated codebase — a dependency-graph corruption cascade and a “temperature die” map LLM ideas to risk/reward.",tech:["Vanilla JS","State machine","108-card system"],status:"Playable & workshop-ready"},{category:"WIP · Animation-as-Code",title:"Copilot Video Course",description:"An animated explainer about GitHub Copilot adoption for team leads, delivered both as a standalone HTML/SVG viewer and as a code-rendered MP4 — keyframe SVG animation and version-controlled, programmatic video rendering.",tech:["React","Remotion 4","TypeScript","Inline SVG"],status:"Prototype / WIP"},{category:"Live · Conversational AI",title:"Home Inventory Assistant",description:"A household inventory and shopping system operated by a Telegram bot through natural-language chat, voice messages, and barcode photos — multi-tenant across up to 10 homes, built entirely on free-tier APIs. Delivered with the BMAD spec-driven methodology.",tech:["Google Apps Script","Gemini","Telegram Bot API","Speech-to-Text"],status:"Live — core MVP complete"}]}];function p(a){return a.map(s=>`<span class="tech-tag">${s}</span>`).join("")}function C(a){const s=a.live?'<span class="project-live"><span class="live-dot"></span>Live</span>':"",n=a.link?`<a href="${a.link.href}" target="_blank" rel="noopener" class="project-link-text">${a.link.label}
         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
       </a>`:"",i=a.status?`<span class="project-status">${a.status}</span>`:"",e=i||n?`<div class="project-footer">${i}${n}</div>`:"";return`
    <article class="project-card compact">
      <div class="project-content">
        <div class="project-category">${a.category}${s}</div>
        <h3 class="project-title">${a.title}</h3>
        <p class="project-description">${a.description}</p>
        <div class="project-tech">${p(a.tech)}</div>
        ${e}
      </div>
    </article>
  `}function L(a){return`
    <div class="projects-theme">
      <div class="theme-header">
        <h3 class="theme-title">${a.title}</h3>
        <p class="theme-subtitle">${a.subtitle}</p>
      </div>
      <div class="projects-grid">
        ${a.projects.map(C).join("")}
      </div>
    </div>
  `}function I(){return`
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
          ${[{num:"96.5%",lbl:"Factual correctness"},{num:"~65%",lbl:"Less hallucination"},{num:"6",lbl:"ISO-26262 experts"},{num:"231",lbl:"UCAs validated"}].map(s=>`
            <div class="flagship-stat">
              <span class="num">${s.num}</span>
              <span class="lbl">${s.lbl}</span>
            </div>`).join("")}
        </div>
        <div class="project-tech">
          ${p(["LangGraph","FastAPI","React 19 + TS","AWS (ECS, CloudFront)","Terraform","OpenAI GPT"])}
        </div>
        <div class="flagship-footer">
          <span class="project-status">
            Paper submitted to the <em>Journal of Systems Architecture</em> (2026) ·
            Open reproducibility package released
          </span>
        </div>
      </div>
    </article>
  `}function M(){return`
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Projects</h2>
          <p class="section-subtitle">Shipped products, AI-native tooling, and educational work</p>
        </div>

        ${I()}

        ${S.map(L).join("")}

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
  `}function D(){return`
    <section id="research" class="section research-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Research</h2>
          <p class="section-subtitle">My academic publications and research work</p>
          <p class="research-summary">6 publications (2019–2025) — 4 peer-reviewed in IEEE proceedings — spanning computer vision, multi-agent LLM systems, and cloud architecture for AI.</p>
        </div>

        <div class="google-scholar">
          <a href="https://scholar.google.com/citations?user=Bw0wfi8AAAAJ" target="_blank" rel="noopener noreferrer" class="google-scholar-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="google-scholar-icon">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
            View Google Scholar Profile
          </a>
        </div>

        <div class="research-papers">
          <div class="paper">
            <h3 class="paper-title">Person re-identification with transformers and image stacking</h3>
            <div class="paper-meta">
              <span class="paper-year">2024</span>
            </div>
            <p class="paper-abstract">Person re-identification (ReID) is increasingly important due to the expansion of surveillance cameras. ReID can effectively operate in various conditions, making it suitable for security, retail analytics, and smart city applications. We propose a transformer-based model, DeepChangeVIT-ReID, fine-tuned with triplet loss, using the DeepChange dataset. We address long-term ReID challenges, including pose variations, camera angle differences, and clothing alterations. DeepChangeVIT-ReID achieves state-of-the-art performance, significantly improving Rank-1 accuracy compared to existing methods on the DeepChange dataset.</p>
            <a href="https://ieeexplore.ieee.org/abstract/document/10819135/" target="_blank" rel="noopener noreferrer" class="paper-link">Read Paper</a>
          </div>

          <div class="paper">
            <h3 class="paper-title">Unit Test Generation Multi-Agent AI System for Enhancing Software Documentation and Code Coverage</h3>
            <div class="paper-meta">
              <span class="paper-year">2024</span>
            </div>
            <p class="paper-abstract">Software development necessitates a robust testing plan though test development can be laborious and nonappealing task. We explore the utilization of the application artificial intelligence agents for generating and executing unit tests, enhancing the "Mostly Basic Python Problems" dataset. We employ behavior-driven development within a three-agent system to generate user stories and unit tests. Empirical results indicate improvements in branch coverage, illustrating the effective utilization of large language models in software testing and development processes.</p>
            <a href="https://ieeexplore.ieee.org/abstract/document/10819096/" target="_blank" rel="noopener noreferrer" class="paper-link">Read Paper</a>
          </div>

          <div class="paper">
            <h3 class="paper-title">Comparison of AWS Architectures for Scalable and Cost-Efficient Retrieval-Augmented Generation</h3>
            <div class="paper-meta">
              <span class="paper-year">2025</span>
            </div>
            <p class="paper-abstract">Large Language Models (LLMs) require up-to-date and domain-specific knowledge to generate accurate responses. As demand for generative Artificial intelligence (AI) applications grows, there is a need for Retrieval-Augmented Generation (RAG) architectures that can dynamically scale and efficiently manage resources. Conventional deployments on Amazon EC2 face challenges in scalability, cost efficiency, and operational complexity, making it difficult to adapt quickly to unpredictable workloads. Another approach is serverless RAG architecture on AWS that leverages Lambda, Amazon S3, DynamoDB, and API Gateway to automate scaling, reduce management overhead, and implement a cost-effective, pay-per-use model. Our evaluation demonstrates that a serverless approach can give savings of up to 87% for loads of 10000 requests per hour compared to EC2 instances while meeting the performance and efficiency requirements of modern AI applications. Serverless architecture establishes a pathway for developing more resilient and scalable cloud-based generative AI systems.</p>
            <p class="paper-status">Publication Pending</p>
          </div>

          <div class="paper">
            <h3 class="paper-title">Comparative Analysis of Docker and Python Runtimes for AWS Lambda in RAG-Based AI Solutions</h3>
            <div class="paper-meta">
              <span class="paper-year">2025</span>
            </div>
            <p class="paper-abstract">Large Language Models (LLMs) require up-to-date and domain-specific knowledge to generate accurate responses. As demand for generative Artificial intelligence (AI) applications grows, there is a need for Retrieval-Augmented Generation (RAG) architectures that can dynamically scale and efficiently manage resources. Conventional deployments on Amazon EC2 face challenges in scalability, cost efficiency, and operational complexity, making it difficult to adapt quickly to unpredictable workloads. Another approach is serverless RAG architecture on AWS that leverages Lambda, Amazon S3, DynamoDB, and API Gateway to automate scaling, reduce management overhead, and implement a cost-effective, pay-per-use model. Our evaluation demonstrates that a serverless approach can give savings of up to 87% for loads of 10000 requests per hour compared to EC2 instances while meeting the performance and efficiency requirements of modern AI applications. Serverless architecture establishes a pathway for developing more resilient and scalable cloud-based generative AI systems.</p>
            <p class="paper-status">Publication Pending</p>
          </div>

          <div class="paper">
            <h3 class="paper-title">Improving Lane Annotation in Autonomous Driving Data Sets with Classical Computer Vision Techniques</h3>
            <div class="paper-meta">
              <span class="paper-year">2023</span>
            </div>
            <p class="paper-abstract">Autonomous driving systems rely on accurate and reliable lane detection to safely navigate roads. In this paper, we propose a method for improving lane annotation in autonomous driving data sets using classical computer vision techniques. The proposed method combines the Hough transform and linear curve fitting to detect and smooth the positions of lane markings in a video stream. We evaluate the performance of the proposed method on the Berkeley DeepDrive (BDD) dataset and compare it to the ground truth annotations. Results show that the proposed method achieves a high level of accuracy and robustness in lane detection, and can effectively improve lane annotation in autonomous driving data sets. Our method provides a valuable tool for training and evaluating autonomous driving systems, and can also be applied to improve annotation in different datasets.</p>
            <a href="https://ieeexplore.ieee.org/abstract/document/10174073" target="_blank" rel="noopener noreferrer" class="paper-link">Read Paper</a>
          </div>

          <div class="paper">
            <h3 class="paper-title">Source code generators for ADAS feature deployment in context of ROS and adaptive AUTOSAR applications</h3>
            <div class="paper-meta">
              <span class="paper-year">2019</span>
            </div>
            <p class="paper-abstract">Fast development of autonomous vehicles comes with many challenges. One of biggest platform wise challenges is parallel development of Adaptive AUSOSAT platform and application that run on it. Use of source code generators was chosen to solve this problem. This paper will give one solution of using ROS features to allow running adaptive application on still developing platform using source code generators. To understating why specific ROS concepts are used, overview of ROS concepts and Adaptive AUTOSAR platform is given in this paper. Use of IDL to describe interfaces and source code generators to generate C++ code allows programmers to focus only on important features, forgetting about implementation details and faster development of more portable software.</p>
            <a href="https://ieeexplore.ieee.org/abstract/document/8971074" target="_blank" rel="noopener noreferrer" class="paper-link">Read Paper</a>
          </div>
        </div>
      </div>
    </section>
  `}function P(){return`
    <section id="public-appearances" class="public-appearances">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Public Appearances</h2>
          <p class="section-subtitle">Conference talks, podcasts, and online presentations</p>
        </div>
        
        <div class="appearances-grid">
          <!-- LinkedIn Presentations -->
          <div class="appearance-card">
            <div class="appearance-type">LinkedIn Post</div>
            <div class="appearance-content">
              <h3 class="appearance-title">Public Presentation about Large Multimodal Models</h3>
              <p class="appearance-description">
                A comprehensive presentation on the capabilities and applications of Large Multimodal Models,
                focusing on their impact on AI advancement and practical implementations.
              </p>
              <div class="appearance-tech">
                <span class="tech-tag">AI</span>
                <span class="tech-tag">ChatGPT</span>
                <span class="tech-tag">LMM</span>
                <span class="tech-tag">Education</span>
              </div>
              <div class="linkedin-post">
                <a href="https://www.linkedin.com/posts/dimitrije-stojanovic_ai-chatgpt-edukacija-activity-7347920233535275010-Ke2T?utm_source=share&utm_medium=member_desktop" 
                   target="_blank" rel="noopener" aria-label="View LinkedIn Post about Large Multimodal Models">
                  <div class="post-thumbnail">
                    <img src="/personal_cv/thumbnails/linkedin-post.jpg" alt="LinkedIn Post on Large Multimodal Models" loading="lazy" />
                    <div class="post-overlay">
                      <div class="linkedin-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="post-title">View LinkedIn Post about Large Multimodal Models</div>
                </a>
              </div>
            </div>
          </div>

          <!-- Podcasts -->
          <div class="appearance-card">
            <div class="appearance-type">Podcast</div>
            <div class="appearance-content">
              <h3 class="appearance-title">Guest Appearance on Industry Podcast</h3>
              <p class="appearance-description">
                Discussion about emerging trends in technology, AI research, and the future of automotive software development.
              </p>
              <div class="appearance-tech">
                <span class="tech-tag">Podcast</span>
                <span class="tech-tag">Technology</span>
                <span class="tech-tag">Automotive</span>
              </div>
              <div class="video-link">
                <a href="https://www.youtube.com/watch?v=e9w0zU3VxB4" 
                   target="_blank" rel="noopener" aria-label="Watch Industry Podcast">
                  <div class="video-thumbnail">
                    <img src="/personal_cv/thumbnails/podcast.jpg" alt="Industry Podcast" loading="lazy" />
                    <div class="video-play-button">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="video-title">Industry Podcast - Technology & Automotive Future</div>
                </a>
              </div>
            </div>
          </div>

          <!-- Bikeseeing Videos -->
          <div class="appearance-card featured">
            <div class="appearance-type">Bikeseeing Series</div>
            <div class="appearance-content">
              <h3 class="appearance-title">Bikeseeing Video Series</h3>
              <p class="appearance-description">
                A series of video presentations combining biking with insights about technology, engineering,
                and innovation across various landscapes.
              </p>
              <div class="appearance-tech">
                <span class="tech-tag">Biking</span>
                <span class="tech-tag">Technology</span>
                <span class="tech-tag">Educational</span>
              </div>
              <div class="appearance-videos">
                <div class="video-link">
                  <a href="https://www.youtube.com/watch?v=Hc5IIJOe6-4" 
                     target="_blank" rel="noopener" aria-label="Watch Bikeseeing Episode 1">
                    <div class="video-thumbnail">
                      <img src="/personal_cv/thumbnails/bikeseeing-1.jpg" alt="Bikeseeing Episode 1" loading="lazy" />
                      <div class="video-play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="video-title">Bikeseeing Episode 1</div>
                  </a>
                </div>
                <div class="video-link">
                  <a href="https://www.youtube.com/watch?v=VuFy6gkDUIA" 
                     target="_blank" rel="noopener" aria-label="Watch Bikeseeing Episode 2">
                    <div class="video-thumbnail">
                      <img src="/personal_cv/thumbnails/bikeseeing-2.jpg" alt="Bikeseeing Episode 2" loading="lazy" />
                      <div class="video-play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="video-title">Bikeseeing Episode 2</div>
                  </a>
                </div>
                <div class="video-link">
                  <a href="https://www.youtube.com/watch?v=36XRCUWezBQ" 
                     target="_blank" rel="noopener" aria-label="Watch Bikeseeing Episode 3">
                    <div class="video-thumbnail">
                      <img src="/personal_cv/thumbnails/bikeseeing-3.jpg" alt="Bikeseeing Episode 3" loading="lazy" />
                      <div class="video-play-button">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="video-title">Bikeseeing Episode 3</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function T(){return`
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Ready to work together? Let's discuss your next project</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-text">
              <h3>Let's Build Something Amazing</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>Email</h4>
                  <a href="mailto:dimitrije.stojanovic.95@gmail.com">dimitrije.stojanovic.95@gmail.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener">Connect with me</a>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>GitHub</h4>
                  <a href="https://github.com/DimitrijeIT" target="_blank" rel="noopener">github.com/DimitrijeIT</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="method-content">
                  <h4>Location</h4>
                  <span>Novi Sad, Serbia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-footer">
          <div class="footer-content">
            <p>&copy; 2025 Dimitrije Stojanović. All rights reserved.</p>
            <div class="footer-links">
              <a href="#hero">Back to Top</a>
              <span class="separator">•</span>
              <a href="mailto:dimitrije.stojanovic.95@gmail.com">Email</a>
              <span class="separator">•</span>
              <a href="https://www.linkedin.com/in/dimitrije-stojanovic/" target="_blank" rel="noopener">LinkedIn</a>
              <span class="separator">•</span>
              <a href="https://github.com/DimitrijeIT" target="_blank" rel="noopener">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function x(){const a={threshold:.1,rootMargin:"0px 0px -50px 0px"};document.querySelectorAll(".timeline-item, .skill-category, .education-item, .course-card, .project-card, .research-paper, .value-item, .appearance-card").forEach(i=>i.classList.add("stagger-item"));const n=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animate-in"),e.target.querySelectorAll(".stagger-item").forEach((c,o)=>{c.style.transitionDelay=`${Math.min(o*80,480)}ms`,c.classList.add("is-visible")}),e.target.classList.contains("skills")&&E(),e.target.classList.contains("about-stats")&&V())})},a);document.querySelectorAll("section").forEach(i=>{n.observe(i)}),j(),window.addEventListener("scroll",r,{passive:!0}),r(),_()}function j(){const a=Array.from(document.querySelectorAll(".nav-link")),s=document.querySelectorAll("section[id]");if(!a.length||!s.length)return;const n=new IntersectionObserver(i=>{i.forEach(e=>{if(e.isIntersecting){const t=e.target.id;a.forEach(c=>{c.classList.toggle("active",c.getAttribute("href")===`#${t}`)})}})},{rootMargin:"-45% 0px -50% 0px",threshold:0});s.forEach(i=>n.observe(i))}function r(){const a=document.querySelector(".header");a&&(window.scrollY>100?a.classList.add("scrolled"):a.classList.remove("scrolled"));const s=document.querySelector(".scroll-progress-bar");if(s){const n=document.documentElement,i=n.scrollHeight-n.clientHeight,e=i>0?window.scrollY/i*100:0;s.style.width=`${e}%`}}function E(){document.querySelectorAll(".skill-progress").forEach((s,n)=>{setTimeout(()=>{const i=s.style.width;s.style.width="0%",setTimeout(()=>{s.style.width=i},100)},n*100)})}function V(){document.querySelectorAll(".stat-number").forEach(s=>{const n=s.textContent||"0",i=parseInt(n.replace(/[^0-9]/g,""))||0,e=n.replace(/[0-9]/g,"");let t=0;const c=Math.ceil(i/50),o=setInterval(()=>{t+=c,t>=i&&(t=i,clearInterval(o)),s.textContent=t+e},50)})}function _(){const a=document.querySelector(".role");if(!a)return;const s=["AI Researcher","PhD Candidate","Software Engineer","University Teacher","Startup Co-Founder"];if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){a.textContent=s[0];return}let n=0,i=0,e=!1;function t(){const c=s[n];e?(a.textContent=c.substring(0,i-1),i--):(a.textContent=c.substring(0,i+1),i++);let o=e?50:100;!e&&i===c.length?(o=2e3,e=!0):e&&i===0&&(e=!1,n=(n+1)%s.length,o=500),setTimeout(t,o)}setTimeout(t,1e3)}function d(){const a=document.querySelector("#app");if(!a){console.error("Could not find app element");return}console.log("Initializing app...");const s=localStorage.getItem("theme");(s==="dark"||s==="light")&&document.documentElement.setAttribute("data-theme",s),a.innerHTML=`
    <div class="cv-container">
      ${g()}
      <main class="main-content">
        ${h()}
        ${u()}
        ${m()}
        ${k()}
        ${M()}
        ${D()}
        ${P()}
        ${T()}
      </main>
    </div>
  `,console.log("App content created");try{x(),console.log("Animations initialized")}catch(o){console.error("Error initializing animations:",o)}document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",v=>{v.preventDefault();const l=document.querySelector(o.getAttribute("href"));l&&l.scrollIntoView({behavior:"smooth",block:"start"})})});const n=document.querySelector(".mobile-menu-btn"),i=document.querySelector(".nav-menu");n&&i&&n.addEventListener("click",()=>{i.classList.toggle("active"),n.classList.toggle("active")});const e=document.documentElement,t=document.querySelector(".theme-toggle"),c=()=>e.getAttribute("data-theme")==="dark"||!e.hasAttribute("data-theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches;t==null||t.setAttribute("aria-pressed",String(c())),t==null||t.addEventListener("click",()=>{const o=c()?"light":"dark";e.setAttribute("data-theme",o),localStorage.setItem("theme",o),t.setAttribute("aria-pressed",String(o==="dark"))}),console.log("App initialization complete")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",d):d();
