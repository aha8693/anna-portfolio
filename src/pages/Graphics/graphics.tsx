import { useRef } from "react";
import "./Graphics.css";
import { Illustration } from "./illustration/illustration";
import { TeamProject } from "./teamProject";
import { observer } from "mobx-react-lite";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";

export const Graphics = observer(() => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Graphics", path: ROUTES.GRAPHICS },
  ]);

  const illustrationRef = useRef<HTMLDivElement>(null);
  const teamProjectRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="graphics-container">
      <div className="graphics-title-container">
        <h1 className="graphics-header">Graphics</h1>
        <div className="graphics-subheader">
          <button onClick={() => scrollToSection(illustrationRef)}>
            ILLUSTRATION
          </button>
          <button onClick={() => scrollToSection(teamProjectRef)}>
            TEAM PROJECT
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div ref={illustrationRef}>
        <Illustration />
      </div>
      <div className="divider"></div>
      <div ref={teamProjectRef}>
        <TeamProject />
      </div>
    </div>
  );
});
