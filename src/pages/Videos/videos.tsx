import "./videos.css";
import { VideoItems } from "./videoItems";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";

export const Video = () => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Videos", path: ROUTES.VIDEOS },
  ]);
  return (
    <section className="videos-page">
      <div className="video-title-container">
        <h1 className="videos-title">Videos</h1>
      </div>

      <VideoItems />
    </section>
  );
};
