import { Footer, Header } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { BgCurvyDesktopSVG, BgCurvyMobileSVG } from "@/components/icons";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fylo Dark Theme Landing Page",
  description:
    "Frontend Mentor Fylo Dark Theme Landing Page challenge built with Next.js and TypeScript.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b2330",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${openSans.variable} antialiased`}
    >
      <body className="bg-primary-dark-blue-2 flex min-h-dvh w-full flex-col pt-6 text-white">
        <div className="bg-primary-dark-blue absolute inset-0 -z-1 h-6/12 sm:h-dvh lg:h-[139dvh]">
          <BgCurvyMobileSVG className="absolute bottom-0 left-0 -z-1 sm:hidden" />
          <BgCurvyDesktopSVG className="absolute bottom-0 left-0 -z-1 hidden sm:block" />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
