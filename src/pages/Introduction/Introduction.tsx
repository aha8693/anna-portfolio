import { observer } from "mobx-react-lite";
import { introStore } from "../../stores/IntroStore";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";
import { IntroSlide } from "./IntroSlide";
import { introSlidesData } from "./IntroContent";
import "./IntroSlide.css";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect } from "react";

export const Introduction = observer(() => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Introduction", path: ROUTES.INTRODUCTION },
  ]);
  useEffect(() => {
    introStore.currentIndex = 0;
    introStore.startRotation();

    return () => introStore.stopRotation(); // Cleanup when leaving page
  }, []);

  return (
    <>
      {/* Slide Container */}
      <div className="intro-bg bg-whiteish-gray">
        <div
          className="slide-inner"
          style={{
            transform: `translateX(-${introStore.currentIndex * 100}%)`,
          }}
        >
          {introSlidesData.map((slide) => {
            const { key, ...rest } = slide;
            return (
              <div className="slide">
                <IntroSlide key={key} {...rest} />
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="buttons">
          <Button
            variant="secondary"
            size="icon"
            className="button"
            onClick={() => introStore.prev()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="button"
            onClick={() => introStore.next()}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
});
