import React from "react";
import "../IntroSlide.css";

interface HighlightSubstringProps {
  text: string;
  highlight: string;
  highlightClassName?: string;
}

export const HighlightSubstring: React.FC<HighlightSubstringProps> = ({
  text,
  highlight,
}) => {
  if (!highlight) return <>{text}</>;

  // Escape RegExp special chars in highlight string to avoid issues
  const escapedHighlight = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(`(${escapedHighlight})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="font-bold slide-title-highlight">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
};
