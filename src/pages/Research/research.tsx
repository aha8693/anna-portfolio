// src/pages/research/research.tsx
import React from "react";
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
      <header className="research-header">
        <h1 className="research-title">Research</h1>
      </header>

      {/* Render research papers */}
      <ResearchContents />
    </div>
  );
};
