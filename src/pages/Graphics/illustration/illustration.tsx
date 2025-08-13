import { ZoomInModal } from "../Common/zoomInModal";
import "../Graphics.css";
import "./illustration.css";

interface GraphicItem {
  id: number;
  src: string;
  title: string;
}

const illustrationItems: GraphicItem[] = [
  {
    id: 1,
    src: "/anna-portfolio/images/graphics/illustration/krossLogo.png",
    title: "Kross Logo",
  },
  {
    id: 2,
    src: "/anna-portfolio/images/graphics/illustration/praiseNightPoster.jpg",
    title: "Praise Night Poster",
  },
  {
    id: 3,
    src: "/anna-portfolio/images/graphics/illustration/worshipNightPoster.jpg",
    title: "Praise Night Poster",
  },

  {
    id: 4,
    src: "/anna-portfolio/images/graphics/illustration/prassionPoster.jpg",
    title: "Praise Night Poster",
  },
  {
    id: 5,
    src: "/anna-portfolio/images/graphics/illustration/prayPoster.png",
    title: "Praise Night Poster",
  },

  {
    id: 6,
    src: "/anna-portfolio/images/graphics/illustration/happyNewYear.png",
    title: "Praise Night Poster",
  },

  {
    id: 7,
    src: "/anna-portfolio/images/graphics/illustration/krossIntro.jpg",
    title: "KROSS Orientation Poster",
  },
  {
    id: 8,
    src: "/anna-portfolio/images/graphics/illustration/krossMobile.jpg",
    title: "KROSS Orientation Poster Mobile",
  },
  {
    id: 9,
    src: "/anna-portfolio/images/graphics/illustration/dragonIllustration.jpg",
    title: "Dragon Illustration",
  },
  {
    id: 10,
    src: "/anna-portfolio/images/graphics/illustration/christmas.jpg",
    title: "Christmas Illustration",
  },
  {
    id: 11,
    src: "/anna-portfolio/images/graphics/illustration/drawing.jpg",
    title: "Drawing",
  },
];

export const Illustration = () => {
  return (
    <div className="graphic-section">
      <div className="header">ILLUSTRATION</div>
      <ZoomInModal images={illustrationItems} mode="illustration" />
    </div>
  );
};
