// Import refactored skill components
import {
  createSkillsCategories,
  createSkillsSummary,
  createEducationSection,
  createCertificationsSection,
  createTeachingSection
} from './skills/index';

export function createSkills(): string {
  return `
    <div class="skills-wrapper">
      <!-- Technical Skills Section -->
      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Skills & Technologies</h2>
            <p class="section-subtitle">Depth across AI systems, automotive software, and engineering leadership</p>
          </div>
          
          <div class="skills-content">
            ${createSkillsCategories()}
            ${createSkillsSummary()}
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
            ${createEducationSection()}
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
            ${createCertificationsSection()}
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
            ${createTeachingSection()}
          </div>
        </div>
      </section>
    </div>
  `;
}