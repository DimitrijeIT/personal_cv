export function createAbout(): string {
  return `
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
  `
}
