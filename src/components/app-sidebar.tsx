import {
  Home,
  Sticker,
  Brain,
  Github,
  Image,
  Video,
  CircleUser,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { ROUTES } from "@/types/routes";

// Menu items.
const items = [
  { title: "Home", url: ROUTES.HOME, icon: Home },
  { title: "Introduction", url: ROUTES.INTRODUCTION, icon: Sticker },
  { title: "Github", url: "http://github.com/aha8693/", icon: Github },
  { title: "Research", url: ROUTES.RESEARCH, icon: Brain },
  { title: "Graphics", url: ROUTES.GRAPHICS, icon: Image },
  { title: "Videos", url: ROUTES.FILM, icon: Video },
  { title: "Contact", url: ROUTES.FILM, icon: CircleUser },
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
              {items.map((item) => {
                const isExternal = item.url.startsWith("http");
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      {isExternal ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      ) : (
                        <Link
                          to={item.url}
                          onClick={() => {
                            if (isMobile) setOpenMobile(false);
                          }}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
