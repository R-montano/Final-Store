import Link from "next/link";
import { Home, Boxes, Rocket } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import ShoppingCart from "../cart/ShoppingCart";
import Logo from "./Logo";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Products",
    url: "/products",
    icon: Boxes,
  },
  {
    title: "Landing",
    url: "/landing",
    icon: Rocket,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-violet-50 text-violet-700 font-semibold flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>
            <Logo/>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 px-2 py-2 rounded hover:bg-teal-100 transition"
                    >
                      <item.icon className="text-teal-600" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <ShoppingCart/>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
