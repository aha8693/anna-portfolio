import React from "react";
import "./videos.css";
import { VideoItems } from "./videoItems";

export const Video: React.FC = () => {
  return (
    <section className="videos-page">
      <div className="videos-header">
        <h1 className="videos-title">Videos</h1>
      </div>

      <VideoItems />
    </section>
  );
};
