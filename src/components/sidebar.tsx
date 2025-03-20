"use client";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  Home, MessageCircle,  Trophy, User, PanelLeftIcon, 
  ChevronRight, ChevronDown, 
} from "lucide-react";
export function AppSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
 
  const menuItems = [
    { name: "Dashboard", icon: <Home className="mr-2 h-4 w-4" /> },
    { name: "Ask True Mother", icon: <MessageCircle className="mr-2 h-4 w-4" /> },
    {
      name: "Achievements",
      icon: <Trophy className="mr-2 h-4 w-4" />,
      subLinks: ["All Achievements", "Monthly Challenges", "Leaderboard"],
      isOpen: isAchievementsOpen,
      setOpen: setIsAchievementsOpen,
    },
    {
      name: "Profile",
      icon: <User className="mr-2 h-4 w-4" />,
      subLinks: ["Account Setting", "Privacy", "Notifications"],
      isOpen: isProfileOpen,
      setOpen: setIsProfileOpen,
    },
  ];

  return (
    <Sidebar className="h-screen" collapsible="icon">
      <SidebarHeader className="flex items-center justify-between p-4">
        <SidebarContent className="text-lg font-semibold group-data-[collapsible=icon]:hidden">FAMILY FEDERATION</SidebarContent>
        <SidebarTrigger className="md:hidden">
          <PanelLeftIcon className="h-5 w-5" />
        </SidebarTrigger>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
          <SidebarMenu>
            {menuItems.map((item) => (
              <div key={item.name}>
                <SidebarMenuItem>
                <SidebarMenuButton
  className={`flex items-center justify-between p-2 rounded-md w-full text-sm font-medium transition-colors duration-200 ${
    activeItem === item.name ? "bg-[#EAEAEA] text-[#28303F] font-[Readex Pro]" : "text-gray-700"
  }`}
  onClick={() => {
    if (item.subLinks) {
      item.setOpen(!item.isOpen);
    } else {
      setActiveItem(item.name);
    }
  }}
>
  <div className="flex items-center">
    {item.icon}
    <span className="group-data-[collapsible=icon]:hidden">{item.name}</span>
  </div>
  {item.subLinks && (item.isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
</SidebarMenuButton>
                </SidebarMenuItem>

                {item.subLinks && item.isOpen && (
                  <div className="ml-6">
                    {item.subLinks.map((subLink) => (
                      <SidebarMenuItem key={subLink}>
                        <SidebarMenuButton
                          className={`p-2 text-sm rounded-md w-full flex items-center gap-2 transition-colors duration-200 ${
                            activeItem === subLink ? "bg-[#EAEAEA] text-[#28303F] font-[Readex Pro]" : "text-gray-500"
                          }`}
                          onClick={() => setActiveItem(subLink)}
                        >
                          {activeItem === subLink && <ChevronRight className="h-4 w-4 text-[#28303F]" />}
                          {subLink}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 text-sm text-gray-500 group-data-[collapsible=icon]:hidden">
        © 2023 Family Federation
      </SidebarFooter>
    </Sidebar>
  );
}
