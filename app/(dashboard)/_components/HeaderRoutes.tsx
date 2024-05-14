"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderRoutes = () => {
  const pathname = usePathname();

  const isInstructorPage = pathname?.startsWith("/instructor");
  const isPlayerPage = pathname?.startsWith("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isInstructorPage || isPlayerPage ? (
        <Link href="/search">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/instructor">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Instructor
          </Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};

export default HeaderRoutes;
