import { ZoomInModal } from "../Common/zoomInModal";
import "../Graphics.css";
import "./teamProject.css";

interface GraphicItem {
  id: number;
  src: string;
  title: string;
  description?: string;
  url?: string;
}

const teamProjectItems: GraphicItem[] = [
  {
    id: 1,
    src: "/anna-portfolio/images/graphics/teamProject/epidemicProportions.png",
    title: "Epidemic Proportions",
    description:
      "• Ideated theme and color scheme, created article layout prototypes and designed editorial sections pages using InDesign and Photoshop. \n \n" +
      "• Skills: Adobe InDesign · Illustrator · Photoshop",
    url: "https://issuu.com/epidemicproportions/docs/ed19_final4",
  },
  {
    id: 2,
    src: "/anna-portfolio/images/graphics/teamProject/onlineKaraoke.png",
    title: "Designing Online Karaoke",
    description:
      "• Conducted user research and UX analysis with teammates, designed low- and high-fidelity prototypes in Figma, and published a 15-page design report to a website using HTML/CSS.\n \n" +
      "• Skills: Figma · CSS · HTML",
    url: "https://gillksc.github.io/mobile_ux_karaoke/",
  },
  {
    id: 3,
    src: "/anna-portfolio/images/graphics/teamProject/magnifeyed.png",
    title: "Participatory Design for Those with Impaired Vision",
    description:
      "• Applied UI/UX design research and problem definition skills through user interviews and analysis to identify pain points for glasses wearers interacting with digital devices, informing user-centered design solutions.\n \n" +
      "• Skills: Figma",
    url: "https://drive.google.com/file/d/1OoI9MhYJu0sblfEAMCwli9z4L7j4bPhT/view?usp=sharing",
  },

  {
    id: 4,
    src: "/anna-portfolio/images/graphics/teamProject/algorithmicMedicalDiagnosis.png",
    title:
      "Evaluating the Current Uses of Algorithmic Decision Making in Diagnosis",
    description: "• Analyzed AI ethics in healthcare diagnostic decision-making, proposing policy guidelines addressing transparency, privacy, accountability, justice, and safety & security to ensure responsible and unbiased use of AI in patient care. \n \n" + 
    " • Skills: Literature Review · Ethical Frameworks",
    url: "https://drive.google.com/file/d/1lsXrOsjy9pLWsFiwd0GtAvbIQYM746Cr/view?usp=sharing",
  },
];

export const TeamProject = () => {
  return (
    <div className="graphic-section">
      <div className="header-teampj">TEAM PROJECT</div>
      <ZoomInModal images={teamProjectItems} mode="TeamProject" />
    </div>
  );
};
