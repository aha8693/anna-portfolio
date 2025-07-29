import React, { useEffect, useMemo } from "react";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { BreadcrumbProvider } from "@/hooks/useBreadcrumbContext";
import { BreadcrumbStore } from "@/stores/breadcrumbStore";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const breadcrumbStore = useMemo(() => new BreadcrumbStore([]), []);

  return (
    <BreadcrumbProvider data={breadcrumbStore}>
      <SidebarProvider defaultOpen={true}>
        {/* Layout wrapper */}
        <div className="flex h-screen w-screen overflow-hidden">
          {/* Sidebar */}
          <AppSidebar />

          {/* Main content: fills the rest of the screen */}
          <main className="flex-1 relative overflow-hidden">
            <div className="absolute inset-0 overflow-auto p-6">
              <div className="relative z-10 flex items-center gap-4 mb-4 ">
                <SidebarTrigger />
                <AppBreadcrumb />
              </div>
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </BreadcrumbProvider>
  );
};
