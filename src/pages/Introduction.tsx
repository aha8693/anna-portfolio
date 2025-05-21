import { observer } from "mobx-react-lite";
import { introStore } from "../stores/IntroStore";
import { useBreadcrumbContext } from "@/hooks/useBreadcrumbContext";
import { useEffect } from "react";

const content = [
  `printf("Hello, World!");\nMy name is Anna An.\nI am a highly skilled and motivated Software Engineer with expertise in biology, computer science, and design.`,
  `Journey as a [Developer]\n'Why suddenly coding?' is the first question I get...\nCoding always has been a puzzle to me...\nMy learning journey comprises of programs in Java, Python, C/C#, and HTML/CSS. You can check it out under the 'Codes' tap.`,
  `Journey as a [Designer]\nI love creating art works...\nI've worked as a layout designer in my school's magazine team...\nYou can check out my creations at the 'Films' and the 'Works' taps.`,
  `Journey as a [Researcher]\nResearch has always been my way of uncovering the unknown...\nMy journey includes projects in biology, Neuroscience, and data analysis...\nYou can discover more about my findings and insights under the 'Research' tab.`,
];

export const Introduction = observer(() => {
  const breadcrumbStore = useBreadcrumbContext();

  useEffect(() => {
    breadcrumbStore.trail = [
      { label: "Home", path: "/" },
      { label: "Introduction" },
    ];
  }, []);
  return (
    <div className="flex items-center justify-center h-screen p-6 bg-white text-black">
      <div className="text-lg whitespace-pre-wrap max-w-xl border-2 border-black p-6 rounded-xl shadow-md transition-all duration-500">
        {content[introStore.currentIndex]}
      </div>
    </div>
  );
});
