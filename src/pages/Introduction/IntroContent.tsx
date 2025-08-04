export interface SlideData {
  key: string;
  title: string;
  boldPart?: string;
  body: string;
  footerHeader: string;
  footerBody: string;
  imageSrc: string;
  imageAlt?: string;
}
const footerHeder = "Anna (Hyean) An ";

const footerBody =
  "Fullstack Developer at Spatial Front \n Johns Hopkins graduate in CS and Neuroscience";

export const introSlidesData: SlideData[] = [
  {
    key: "hello",
    title: 'printf("Hello, World!");',
    boldPart: '"Hello, World!"',
    body:
      "My name is Anna An. I am a highly skilled and motivated Software Engineer " +
      "with expertise in biology, computer science, and design.",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/hello.jpeg",
    imageAlt: "Hello",
  },
  {
    key: "dev",
    title: "Journey as a Developer",
    body:
      "'Why suddenly coding?' is the first question I get... Coding always has " +
      "been a puzzle to me... My learning journey comprises of programs in Java, " +
      "Python, C/C#, and HTML/CSS. You can check it out under the 'Codes' tab.",
    footerHeader: footerHeder,
    footerBody: footerBody,
    imageSrc: "/anna-portfolio/images/developer.jpeg",
    imageAlt: "Developer",
  },
  // Add more slides as needed
];
