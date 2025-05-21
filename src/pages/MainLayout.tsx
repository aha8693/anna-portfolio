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
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4 mb-4">
            <SidebarTrigger />
            <AppBreadcrumb />
          </div>
          {children}
        </main>
      </SidebarProvider>
    </BreadcrumbProvider>
  );
};
