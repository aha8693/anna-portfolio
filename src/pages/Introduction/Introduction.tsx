import { observer } from "mobx-react-lite";
import { introStore } from "../../stores/IntroStore";
import { useSetBreadcrumb } from "@/hooks/useSetBreadcrumb";
import { ROUTES } from "@/types/routes";
import { introContent } from "./IntroContent";

export const Introduction = observer(() => {
  useSetBreadcrumb([
    { label: "Home", path: ROUTES.HOME },
    { label: "Introduction", path: ROUTES.INTRODUCTION },
  ]);
  return (
    <>
      {/* Slide Container */}
      <div className="container-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${introStore.currentIndex * 100}%)`,
          }}
        >
          {introContent.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 p-6 text-left space-y-4"
            >
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-base whitespace-pre-wrap">{item.body}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex justify-between max-w-xl mx-auto  z-10">
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
