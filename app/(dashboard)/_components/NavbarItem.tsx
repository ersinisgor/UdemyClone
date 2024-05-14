"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  label: string;
  href: string;
}

const NavbarItem = ({ href, label }: NavbarItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith("${href}/");

  return (
    <Link
      href={href}
      className={cn(
        "flex font-semibolt uppercase",
        isActive && "underline underline-offset-8",
        ""
      )}
    >
      {label}
    </Link>
  );
};

export default NavbarItem;
