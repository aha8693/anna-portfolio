import React, { useEffect, useMemo } from "react";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { BreadcrumbProvider } from "@/hooks/useBreadcrumbContext";
import { BreadcrumbStore } from "@/stores/breadcrumbStore";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const whiteTextRoutes = new Set(["/", "/graphics", "/research"]);
  const scrollable = new Set(["/graphics", "/research", "/videos"]);

  const useWhiteText = whiteTextRoutes.has(location.pathname);
  const textColorClass = useWhiteText ? "text-white" : "text-black";
  const useScroll = scrollable.has(location.pathname);

  const breadcrumbStore = useMemo(() => new BreadcrumbStore([]), []);

  return (
    <BreadcrumbProvider data={breadcrumbStore}>
      <SidebarProvider defaultOpen={true}>
        <div
          className={`flex h-screen w-screen ${useScroll ? "overflow-auto" : "overflow-hidden"}`}
        >
          <AppSidebar />

          <main
            className={`flex-1 relative ${useScroll ? "overflow-visible" : "overflow-hidden"}`}
          >
            <div className="absolute inset-0 p-6">
              <div className="relative z-10 flex items-center gap-4">
                <SidebarTrigger className={textColorClass} />
                <AppBreadcrumb color={textColorClass} />
              </div>
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </BreadcrumbProvider>
  );
};
