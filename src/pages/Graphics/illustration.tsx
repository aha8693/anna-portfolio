// Illustration.tsx
import "./Graphics.css";

interface GraphicItem {
  id: number;
  src: string;
  title: string;
}

const illustrationItems: GraphicItem[] = [
  { id: 1, src: "/anna-portfolio/images/graphics/graphic1.jpg", title: "Winter Landscape" },
  { id: 2, src: "/assets/graphics/illustration2.jpg", title: "Character Design" },
  { id: 3, src: "/assets/graphics/illustration3.jpg", title: "Botanical Study" },
];

export const Illustration = () => {
  return (
    <div className="graphic-section">
      <h2>Illustration</h2>
      <div className="graphic-items">
        {illustrationItems.map((item) => (
          <div key={item.id} className="graphic-item">
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
