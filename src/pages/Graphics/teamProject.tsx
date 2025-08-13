// TeamProject.tsx
import "./Graphics.css";

interface GraphicItem {
  id: number;
  src: string;
  title: string;
}

const teamProjectItems: GraphicItem[] = [
  { id: 1, src: "/assets/graphics/project1.jpg", title: "App UI Concept" },
  { id: 2, src: "/assets/graphics/project2.jpg", title: "Website Redesign" },
  { id: 3, src: "/assets/graphics/project3.jpg", title: "Dashboard Wireframe" },
];

export const TeamProject = () => {
  return (
    <div className="graphic-section">
      <h2>Team Project</h2>
      <div className="graphic-items">
        {teamProjectItems.map((item) => (
          <div key={item.id} className="graphic-item">
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
