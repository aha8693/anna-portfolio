// src/pages/research/researchContents.tsx
import React from "react";

export interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title:
      "Detecting Abnormal Electrocardiogram (ECG) Signals with Machine Learning",
    description:
      "Developed a machine learning pipeline to analyze ECG data, focusing on PR interval detection and classification of cardiac patterns. " +
      "The project involved preprocessing time-series signals, visualizing physiological features, and constructing supervised models (CNN and SVM) to identify arrhythmias. " +
      "Combined statistical analysis with domain knowledge in biomedical signals to evaluate model accuracy and interpret feature importance for clinical insights.",
    image: "/anna-portfolio/images/research/research1.jpg",
    url: "https://github.com/aha8693/Detecting-Abnormal-ECG-Signals-/blob/main/GDS_Final.ipynb",
  },
  {
    id: 2,
    title: "Classification of Breast Cancer with Machine Learning",
    description:
      "Implemented and compared multiple supervised learning algorithms—including KNN, regression models, decision trees, random forests, SVMs, " +
      "and neural networks—on the Breast Cancer Wisconsin dataset. The project analyzed model performance, feature importance, and trade-offs between linear " +
      "and non-linear approaches, culminating in a PyTorch-based neural network classifier.",
    image: "/anna-portfolio/images/research/research2.jpg",
    url: "https://github.com/aha8693/Classification-Task-Breast-Cancer-Wisconsin-Dataset/blob/main/Investigations%20of%20Supervised%20Machine%20Learning-Cancer.pdf",
  },
  {
    id: 3,
    title:
      "Ethics of AI in Healthcare: Algorithmic Decision-Making in Diagnosis",
    description:
      "Conducted a group research project analyzing the ethical implications of AI-driven diagnostic tools in healthcare. " +
      "Evaluated case studies through five pillars of AI ethics—transparency, privacy, accountability, justice, and safety & " +
      "security—and proposed policy-driven guidelines to ensure responsible use. Developed recommendations emphasizing explainable AI, " +
      "bias mitigation, privacy protection, and stakeholder accountability to align technological advancement with ethical medical practice.",
    image: "/anna-portfolio/images/research/research3.jpg",
    url: "https://drive.google.com/file/d/1lsXrOsjy9pLWsFiwd0GtAvbIQYM746Cr/view",
  },
  {
    id: 4,
    title: "COVID-19 Impact on Air Quality: A Case Study of Seoul",
    description:
      "Reanalyzed IQAir’s COVID-19 Air Quality Report by examining PM2.5 pollution levels in Seoul alongside COVID case data. " +
      "Conducted pre- and post-pandemic comparisons and applied analytical algorithms to validate the reported decrease in PM2.5 concentrations during lockdowns. " +
      "Findings supported the original claim that air quality improved, while emphasizing the need for further studies to strengthen causal conclusions.",
    image: "/anna-portfolio/images/research/research4.jpg",
    url: "https://drive.google.com/drive/u/0/folders/1fk1xhKHJ_JKqXi_Ms4HKTNT9LDIpehki",
  },
  {
    id: 5,
    title:
      "Mental Number Line in Mice: Cognitive Task Box Development and Behavioral Analysis",
    description:
      "Conducted neuroscience research under the supervision of Dr. Hyungbae Kwon, focusing on spatial–numerical associations (SNA) in mice. " +
      "Designed and assembled a cognition task box using laser-cut acrylic, soldered circuitry, and wiring for optogenetic experiments. " +
      "Analyzed seven four-hour behavioral videos to track learning patterns, reward associations, and decision-making strategies, " +
      "forming hypotheses about visual stimuli recognition and reflection-based cues. Planned future work to validate findings with computational " +
      "data analysis, contributing to the understanding of innate number-space cognition at the cellular and behavioral level.",
    image: "/anna-portfolio/images/research/research5.jpg",
    url: "https://drive.google.com/drive/u/0/folders/1fk1xhKHJ_JKqXi_Ms4HKTNT9LDIpehki",
  },
];

export const ResearchContents: React.FC = () => {
  return (
    <section className="research-list">
      {researchPapers.map((paper) => (
        <a
          key={paper.id}
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transform transition-transform duration-300 hover:scale-102 hover:shadow-xl"
        >
          <div className="research-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="research-image"
            />
            <div className="research-info">
              <h2 className="research-paper-title">{paper.title}</h2>
              <p className="research-description">{paper.description}</p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};
