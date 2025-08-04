// introduction.tsx
import { observer } from "mobx-react-lite";
import { introStore } from "../../stores/IntroStore";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";
import { IntroSlide } from "./IntroSlide";
import { introSlidesData } from "./IntroContent";

export const Introduction = observer(() => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Introduction", path: ROUTES.INTRODUCTION },
  ]);

  return (
    <>
      {/* Slide Container */}
      <div className="intro-bg bg-whiteish-gray ">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={
            {
              //transform: `translateX(-${introStore.currentIndex * 100}%)`,
            }
          }
        >
          {introSlidesData.map((slide) => {
            const { key, ...rest } = slide;
            return <IntroSlide key={key} {...rest} />;
          })}
        </div>

        {/* Buttons */}
        <div className="flex justify-between max-w-xl mx-auto z-10 mt-6">
          <button
            onClick={() => introStore.prev()}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Previous
          </button>
          <button
            onClick={() => introStore.next()}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
});
