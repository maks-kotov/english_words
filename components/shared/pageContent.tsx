"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Session } from "next-auth";
import React from "react";

export default function PageContent({
  session,
  children,
}: {
  children: React.ReactNode;
  session: Session | null;
}): React.ReactElement {
  const pathname = usePathname();
  const isGradientPage = pathname === "/learnMode";

  return (
    <>
      {!isGradientPage && <Header session={session} />}
      <main className={`flex-1 mx-4 md:mx-12 ${isGradientPage ? "mt-0" : ""}`}>
        {children}
      </main>
      {!isGradientPage && <Footer />}
    </>
  );
}
