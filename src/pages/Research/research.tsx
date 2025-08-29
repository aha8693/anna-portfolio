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
        
      </div>

      <ResearchContents />
    </div>
  );
};
