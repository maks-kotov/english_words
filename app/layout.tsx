import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Footer from "@/components/shared/footer";
import SessionProviderClient from "@/providers/session-provider";
import { auth } from "@/auth/auth";
import { Header } from "@/modules/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "english words",
  description: "for learning foreign words",
  icons: {
    icon: [
      {
        url: "@/public/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        url: "@/public/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.ReactElement> {
  const session = await auth();
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}>
      <body className="min-h-screen flex flex-col">
        <SessionProviderClient session={session}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProviderClient>
      </body>
    </html>
  );
}
