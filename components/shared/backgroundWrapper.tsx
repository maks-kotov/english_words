"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

export default function BackgroundWrapper({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  const pathname = usePathname();
  const isGradientPage = pathname === "/learnMode";

  return (
    <div
      className={`min-h-screen flex flex-col ${isGradientPage ? "bg-linear-to-r from-[#3b82f6] to-[#f59e0b]" : "bg-background"}`}>
      {children}
    </div>
  );
}
