import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { ROUTES } from "@/types/routes";

// Menu items.
const items = [
  { title: "Home", url: ROUTES.HOME, icon: Home },
  { title: "Introduction", url: ROUTES.INTRODUCTION, icon: Inbox },
  { title: "Calendar", url: ROUTES.FILM, icon: Calendar },
  { title: "Search", url: ROUTES.SEARCH, icon: Search },
  { title: "Settings", url: ROUTES.SETTINGS, icon: Settings },
];

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-20 text-lg">
            Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      onClick={() => {
                        if (isMobile) setOpenMobile(false);
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
