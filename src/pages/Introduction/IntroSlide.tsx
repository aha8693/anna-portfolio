import React from "react";
import { SlideData } from "./IntroContent";
import "./IntroSlide.css";


export const IntroSlide: React.FC<SlideData> = ({
  title,
  body,
  imageSrc,
  imageAlt = "Slide image",
}) => {
  return (
    <div className="w-full flex-shrink-0 p-6 text-left space-y-4 slide">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-base whitespace-pre-wrap">{body}</p>
      <div className="white-box">
        <img src={imageSrc} alt={imageAlt} className="slide-image" />
      </div>
    </div>
  );
};
