import React from "react";
import { SlideData } from "./IntroContent";
import "./IntroSlide.css";
import { HighlightSubstring } from "./Common/HighlightSubstring";
import { introStore } from "@/stores/IntroStore";
import { Link } from "react-router-dom";

export const IntroSlide: React.FC<SlideData> = ({
  title,
  boldPart,
  body,
  bodyBold,
  fontsize,
  footerHeader,
  footerBody,
  imageSrc,
  imageAlt = "Slide image",
  sidenote,
  url,
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
      <Link to={url}>
        <div
          className="white-box"
          onMouseEnter={() => introStore.stopRotation()}
          onMouseLeave={() => introStore.startRotation()}
        >
          <p
            className="slide-body"
            style={{ "--font-size": fontsize } as React.CSSProperties}
          >
            <strong>{bodyBold}</strong> <span>{body.trim()}</span>
          </p>
          <img src={imageSrc} alt={imageAlt} className="slide-image" />
          <span className="slide-sidenote">{sidenote}</span>
        </div>{" "}
      </Link>
    </div>
  );
};
