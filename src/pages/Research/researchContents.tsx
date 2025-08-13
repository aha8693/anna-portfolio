// src/pages/research/researchContents.tsx
import React from "react";

export interface ResearchPaper {
  id: number;
  title: string;
  description: string;
  image: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "Understanding the Role of AI in Biological Research",
    description:
      "An exploration of how AI-driven algorithms enhance biological data analysis and accelerate discovery.",
    image: "/anna-portfolio/images/research1.jpg",
  },
  {
    id: 2,
    title: "Data Visualization Techniques for Genomic Data",
    description:
      "A study on effective visualization methods for large-scale genomic datasets, improving accessibility and insights.",
    image: "/anna-portfolio/images/research2.jpg",
  },
  {
    id: 3,
    title: "Integrating Computer Science with Neuroscience",
    description:
      "Investigating the applications of computational models in understanding brain connectivity and behavior.",
    image: "/anna-portfolio/images/research3.jpg",
  },
];

export const ResearchContents: React.FC = () => {
  return (
    <section className="research-list">
      {researchPapers.map((paper) => (
        <div key={paper.id} className="research-card">
          <img src={paper.image} alt={paper.title} className="research-image" />
          <div className="research-info">
            <h2 className="research-paper-title">{paper.title}</h2>
            <p className="research-description">{paper.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
