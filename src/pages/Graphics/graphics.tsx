import { useRef } from "react";
import "./Graphics.css";
import { Illustration } from "./illustration";
import { TeamProject } from "./teamProject";

export const Graphics = () => {
  const illustrationRef = useRef<HTMLDivElement>(null);
  const teamProjectRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="graphics-container">
      <h1 className="graphics-header">Graphic</h1>
      <div className="graphics-subheader">
        <button onClick={() => scrollToSection(illustrationRef)}>
          Illustration
        </button>
        <button onClick={() => scrollToSection(teamProjectRef)}>
          Team Project
        </button>
      </div>

      <div ref={illustrationRef}>
        <Illustration />
      </div>

      <div ref={teamProjectRef}>
        <TeamProject />
      </div>
    </div>
  );
};
