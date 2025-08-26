import "./research.css";
import { ResearchContents } from "./researchContents";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";

export const Research = () => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Research", path: ROUTES.RESEARCH },
  ]);
  return (
    <div className="research-page">
      <div className="research-title-container">
        <h1 className="research-header">Research</h1>
        <h2 className="research-subheader"> Technical research in data analysis, machine learning, and neuroscience, presenting detailed studies and experimental reports. </h2>
      </div>

      <ResearchContents />
    </div>
  );
};
