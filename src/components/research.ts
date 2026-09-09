interface Paper {
  title: string;
  year: string;
  venue: string;
  abstract: string;
  ieeeUrl: string;
  scholarUrl: string;
  image: string;
  imageIsRealPage: boolean;
}

const BASE = '/personal_cv';

// Publication list mirrors the Google Scholar profile (user=Bw0wfi8AAAAJ), newest first.
const papers: Paper[] = [
  {
    title: 'Applying Multi-Agent LLMs to Threat Analysis and Risk Assessment in Automotive Security',
    year: '2025',
    venue: 'IEEE TELFOR 2025',
    abstract:
      'Threat Analysis and Risk Assessment (TARA) is essential for identifying threats and managing risks, but is often resource-intensive due to manual steps, expert involvement, and iterative revisions. To address this, we propose an automated TARA framework using LLM agents that generate threat scenarios, derive cybersecurity goals and requirements, and refine them through a writer-reviewer loop. The proof of concept, demonstrated on a keyless entry system, produces structured JSON artifacts, ensuring traceability and supporting compliance-driven cybersecurity engineering in automotive systems.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11314224',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Applying+Multi-Agent+LLMs+to+Threat+Analysis+and+Risk+Assessment+in+Automotive+Security%22',
    image: `${BASE}/papers/tara-multiagent-2025.svg`,
    imageIsRealPage: false,
  },
  {
    title: 'Comparison of AWS Architectures for Scalable and Cost-Efficient Retrieval-Augmented Generation',
    year: '2025',
    venue: 'IEEE ZINC 2025',
    abstract:
      'Large Language Models (LLMs) require up-to-date and domain-specific knowledge to generate accurate responses. As demand for generative Artificial intelligence (AI) applications grows, there is a need for Retrieval-Augmented Generation (RAG) architectures that can dynamically scale and efficiently manage resources. Conventional deployments on Amazon EC2 face challenges in scalability, cost efficiency, and operational complexity, making it difficult to adapt quickly to unpredictable workloads. Another approach is serverless RAG architecture on AWS that leverages Lambda, Amazon S3, DynamoDB, and API Gateway to automate scaling, reduce management overhead, and implement a cost-effective, pay-per-use model. Our evaluation demonstrates that a serverless approach can give savings of up to 87% for loads of 10000 requests per hour compared to EC2 instances while meeting the performance and efficiency requirements of modern AI applications.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11100283',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Comparison+of+AWS+Architectures+for+Scalable+and+Cost-Efficient+Retrieval-Augmented+Generation%22',
    image: `${BASE}/papers/aws-architectures-2025.svg`,
    imageIsRealPage: false,
  },
  {
    title: 'Comparative Analysis of Docker and Python Runtimes for AWS Lambda in RAG-Based AI Solutions',
    year: '2025',
    venue: 'IEEE ZINC 2025',
    abstract:
      'As the use of large language models (LLMs) continues to grow and the rapid growth of artificial intelligence (AI)-based applications accelerates, scalable, cost-effective, low-latency solutions are needed. Serverless computing on AWS Lambda has emerged as a key platform for deploying AI applications, yet selecting the optimal runtime environment remains a significant challenge for Retrieval-Augmented Generation (RAG)-based solutions. We provide a thorough comparison between Docker-based and Python-native runtimes, examining key performance metrics such as cold start latency, warm execution time, and build time. Our empirical findings show that the Python-native runtime achieves substantial improvements resulting in up to an 84% reduction in execution times.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/11103568',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Comparative+Analysis+of+Docker+and+Python+Runtimes+for+AWS+Lambda+in+RAG-Based+AI+Solutions%22',
    image: `${BASE}/papers/lambda-runtimes-2025.jpg`,
    imageIsRealPage: true,
  },
  {
    title: 'Person re-identification with transformers and image stacking',
    year: '2024',
    venue: 'IEEE TELFOR 2024',
    abstract:
      'Person re-identification (ReID) is increasingly important due to the expansion of surveillance cameras. ReID can effectively operate in various conditions, making it suitable for security, retail analytics, and smart city applications. We propose a transformer-based model, DeepChangeVIT-ReID, fine-tuned with triplet loss, using the DeepChange dataset. We address long-term ReID challenges, including pose variations, camera angle differences, and clothing alterations. DeepChangeVIT-ReID achieves state-of-the-art performance, significantly improving Rank-1 accuracy compared to existing methods on the DeepChange dataset.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/10819135',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Person+re-identification+with+transformers+and+image+stacking%22',
    image: `${BASE}/papers/person-reid-2024.jpg`,
    imageIsRealPage: true,
  },
  {
    title: 'Unit Test Generation Multi-Agent AI System for Enhancing Software Documentation and Code Coverage',
    year: '2024',
    venue: 'IEEE TELFOR 2024',
    abstract:
      'Software development necessitates a robust testing plan though test development can be laborious and nonappealing task. We explore the utilization of the application artificial intelligence agents for generating and executing unit tests, enhancing the "Mostly Basic Python Problems" dataset. We employ behavior-driven development within a three-agent system to generate user stories and unit tests. Empirical results indicate improvements in branch coverage, illustrating the effective utilization of large language models in software testing and development processes.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/10819096',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Unit+Test+Generation+Multi-Agent+AI+System+for+Enhancing+Software+Documentation+and+Code+Coverage%22',
    image: `${BASE}/papers/unit-test-agents-2024.jpg`,
    imageIsRealPage: true,
  },
  {
    title: 'Improving Lane Annotation in Autonomous Driving Data Sets with Classical Computer Vision Techniques',
    year: '2023',
    venue: 'IEEE ZINC 2023',
    abstract:
      'Autonomous driving systems rely on accurate and reliable lane detection to safely navigate roads. In this paper, we propose a method for improving lane annotation in autonomous driving data sets using classical computer vision techniques. The proposed method combines the Hough transform and linear curve fitting to detect and smooth the positions of lane markings in a video stream. We evaluate the performance of the proposed method on the Berkeley DeepDrive (BDD) dataset and compare it to the ground truth annotations. Results show that the proposed method achieves a high level of accuracy and robustness in lane detection, and can effectively improve lane annotation in autonomous driving data sets.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/10174073',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Improving+Lane+Annotation+in+Autonomous+Driving+Data+Sets+with+Classical+Computer+Vision+Techniques%22',
    image: `${BASE}/papers/lane-annotation-2023.jpg`,
    imageIsRealPage: true,
  },
  {
    title: 'Source code generators for ADAS feature deployment in context of ROS and adaptive AUTOSAR applications',
    year: '2019',
    venue: 'IEEE TELFOR 2019',
    abstract:
      'Fast development of autonomous vehicles comes with many challenges. One of biggest platform wise challenges is parallel development of Adaptive AUTOSAR platform and applications that run on it. Use of source code generators was chosen to solve this problem. This paper gives one solution using ROS features to allow running adaptive applications on a still-developing platform using source code generators. Use of IDL to describe interfaces and source code generators to generate C++ code allows programmers to focus only on important features, forgetting about implementation details, enabling faster development of more portable software.',
    ieeeUrl: 'https://ieeexplore.ieee.org/document/8971074',
    scholarUrl:
      'https://scholar.google.com/scholar?q=%22Source+code+generators+for+ADAS+feature+deployment+in+context+of+ROS+and+adaptive+AUTOSAR+applications%22',
    image: `${BASE}/papers/adas-autosar-2019.svg`,
    imageIsRealPage: false,
  },
];

function createPaperCard(paper: Paper): string {
  return `
    <article class="paper">
      <a href="${paper.ieeeUrl}" target="_blank" rel="noopener noreferrer" class="paper-page" aria-label="Open paper: ${paper.title}">
        <img
          src="${paper.image}"
          alt="First page of the paper: ${paper.title}"
          loading="lazy"
          width="840"
          height="1087"
        >
      </a>
      <div class="paper-body">
        <h3 class="paper-title">${paper.title}</h3>
        <div class="paper-meta">
          <span class="paper-year">${paper.year}</span>
          <span class="paper-venue">${paper.venue}</span>
        </div>
        <p class="paper-abstract">${paper.abstract}</p>
        <div class="paper-links">
          <a href="${paper.ieeeUrl}" target="_blank" rel="noopener noreferrer" class="paper-link">Read Paper</a>
          <a href="${paper.scholarUrl}" target="_blank" rel="noopener noreferrer" class="paper-link paper-link-secondary">Google Scholar</a>
        </div>
      </div>
    </article>
  `;
}

export function createResearch(): string {
  return `
    <section id="research" class="section research-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Research</h2>
          <p class="section-subtitle">My academic publications and research work</p>
          <p class="research-summary">7 peer-reviewed IEEE publications (2019–2025) spanning computer vision, multi-agent LLM systems, automotive security, and cloud architecture for AI.</p>
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
          ${papers.map(createPaperCard).join('')}
        </div>
      </div>
    </section>
  `;
}
