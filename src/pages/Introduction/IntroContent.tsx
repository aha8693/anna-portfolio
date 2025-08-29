import { ROUTES } from "@/types/routes";

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES];
export interface SlideData {
  key: string;
  title: string;
  boldPart?: string;
  body: string;
  bodyBold?: string;
  fontsize?: string;
  footerHeader: string;
  footerBody: string;
  sidenote?: string;
  imageSrc: string;
  imageAlt?: string;
  url: RouteValue;
}
const footerHeder = "Anna (Hyean) An ";

const footerBody =
  "Fullstack Developer at Spatial Front \n Johns Hopkins graduate in CS and Neuroscience";

export const introSlidesData: SlideData[] = [
  {
    key: "hello",
    title: 'printf("Hello, World!");',
    boldPart: '"Hello, World!"',
    body: "I am Anna An — a fullstack developer with a foundation in neuroscience and a strong focus on ",
    bodyBold: "data systems, healthcare technology, and creative computation.",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/hello.jpeg",
    imageAlt: "Hello",
    url: ROUTES.HOME,
  },
  {
    key: "dev",
    title: "Journey as a Developer 💻",
    boldPart: "Developer",
    body: "I build full-stack systems across frontend, backend, and data layers using Typescript, React, .NET, Python, and SQL.\n \n  My work focuses on delivering reliable, data-driven solutions and collaborating across teams in government and healthcare sectors.",
    fontsize: "15px",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/developer.jpeg",
    imageAlt: "Developer",
    url: ROUTES.GITHUB,
  },
  {
    key: "research",
    title: "Journey as a Researcher 🧠",
    boldPart: "Researcher",
    body:
      "With a B.S. in Neuroscience and Computer Science from Johns Hopkins, " +
      "I conducted machine learning-based behavioral analyses and worked with multidisciplinary datasets to study cognition and decision-making.",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/researcher.jpeg",
    imageAlt: "Researcher",
    sidenote:
      "This was my first Cognition Box built as a research assistant :)",
    url: ROUTES.RESEARCH,
  },
  {
    key: "design",
    title: "Journey as a Visual Creator 🎨",
    boldPart: "Visual Creator",
    body:
      "I design creative and technical visuals, from scientific schematics to posters, " +
      "illustrations, and video contents, communicating complex information with clarity and expression.",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/design.jpeg",
    imageAlt: "Visual Creator",
    url: ROUTES.GRAPHICS,
  },
];
