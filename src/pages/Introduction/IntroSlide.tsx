import React from "react";
import { SlideData } from "./IntroContent";
import "./IntroSlide.css";
import { HighlightSubstring } from "./Common/HighlightSubstring";

export const IntroSlide: React.FC<SlideData> = ({
  title,
  boldPart,
  body,
  footerHeader,
  footerBody,
  imageSrc,
  imageAlt = "Slide image",
}) => {
  return (
    <div className="w-full flex-shrink-0 p-6 text-left space-y-4 slide">
      <div className="footer">
        <p className="font-bold">{footerHeader}</p>
        <p className="text-gray-600">{footerBody}</p>
      </div>

      <h2 className="slide-title">
        {boldPart ? (
          <HighlightSubstring text={title} highlight={boldPart} />
        ) : (
          title
        )}
      </h2>
      <div className="white-box">
        <p className="slide-body">{body}</p>
        <img src={imageSrc} alt={imageAlt} className="slide-image" />
      </div>
    </div>
  );
};
