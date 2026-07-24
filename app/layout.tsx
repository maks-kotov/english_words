import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Rubik_Spray_Paint } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import { auth } from "@/auth/auth";
import BackgroundWrapper from "@/components/shared/backgroundWrapper";
import PageContent from "@/components/shared/pageContent";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["cyrillic", "latin"],
});

const rubik = Rubik_Spray_Paint({
  weight: "400",
  variable: "--font-rubik",
  subsets: ["cyrillic", "latin"],
  // we
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
        "font-sans",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        rubik.variable,
      )}>
      <body className="min-h-screen flex flex-col text-foreground">
        <BackgroundWrapper>
          <PageContent session={session}>{children}</PageContent>
          {/* <Header session={session} /> */}
          {/* <main className="flex-1 mx-4 md:mx-12">{children}</main> */}
          {/* <Footer /> */}
        </BackgroundWrapper>
      </body>
    </html>
  );
}
