export interface SlideData {
  key: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
}

export const introSlidesData: SlideData[] = [
  {
    key: "hello",
    title: "Hello, World!",
    body:
      "My name is Anna An. I am a highly skilled and motivated Software Engineer " +
      "with expertise in biology, computer science, and design.",
    imageSrc: "src/assets/hello.jpeg",
    imageAlt: "Hello",
  },
  {
    key: "dev",
    title: "Journey as a Developer",
    body:
      "'Why suddenly coding?' is the first question I get... Coding always has " +
      "been a puzzle to me... My learning journey comprises of programs in Java, " +
      "Python, C/C#, and HTML/CSS. You can check it out under the 'Codes' tab.",
    imageSrc: "/images/developer.png",
    imageAlt: "Developer",
  },
  // Add more slides as needed
];
