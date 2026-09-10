export function createPublicAppearances(): string {
  return `
    <section id="public-appearances" class="public-appearances">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Public Appearances</h2>
          <p class="section-subtitle">Conference talks, podcasts, and lectures</p>
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
  `;
}
