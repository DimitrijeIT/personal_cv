export function createAbout(): string {
  return `
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About</h2>
          <p class="section-subtitle">Executive strategy, engineering depth, shipped software</p>
        </div>
        
        <div class="about-content">
          <div class="about-text">
            <div class="about-intro">
              <p>
                I advise engineering organisations on AI transformation and build the systems
                that make it real. <strong>Seven years</strong> in automotive software —
                AUTOSAR, ADAS, functional safety — taught me how engineering-heavy companies
                actually operate. My <strong>PhD research</strong> on trustworthy AI for
                safety-critical systems keeps the advice grounded in evidence rather than hype.
              </p>

              <p>
                That combination lets me work across the whole chain: interview an executive
                board in the morning, map an engineering process in the afternoon, and ship the
                automation that fixes it. I co-founded BikeSeeing, mentor in startup programs,
                and teach at the Faculty of Technical Sciences in Novi Sad.
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
          <h3 class="values-title">How I Work</h3>
          <div class="values-grid">
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h4>See</h4>
              <p>Make operations visible first — where time, money, and knowledge actually flow — before proposing any change</p>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 20V10M12 20V4M20 20v-7"/>
                  <path d="M2 20h20"/>
                </svg>
              </div>
              <h4>Decide</h4>
              <p>Turn visibility into strategy — ranked opportunities, measured ROI, and a roadmap grounded in evidence</p>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 12a9 9 0 1 1-2.64-6.36"/>
                  <path d="M21 3v6h-6"/>
                </svg>
              </div>
              <h4>Adapt</h4>
              <p>Rebuild processes so the organisation absorbs shocks — a departure, a demand spike, a technology shift — without breaking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
