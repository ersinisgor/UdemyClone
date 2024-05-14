"use client";

import { usePathname } from "next/navigation";
import React from "react";
import NavbarItem from "./NavbarItem";

const guestRoutes = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Browse",
    href: "/search",
  },
];

const instructorRoutes = [
  {
    label: "Courses",
    href: "/instructor/courses",
  },
  {
    label: "Analytics",
    href: "/instructor/analytics",
  },
];

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isInstructorPage = pathname?.includes("/instructor");

  const routes = isInstructorPage ? instructorRoutes : guestRoutes;
  return (
    <div className="flex items-center space-x-8 z-50">
      {routes.map(route => (
        <NavbarItem key={route.href} href={route.href} label={route.label} />
      ))}
    </div>
  );
};

export default NavbarRoutes;
