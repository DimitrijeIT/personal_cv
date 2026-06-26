export function createResearch(): string {
  return `
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
  `;
}
