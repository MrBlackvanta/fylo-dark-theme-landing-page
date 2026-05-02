import { Footer, Header } from "@/components/layout";
import type { Metadata, Viewport } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";

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
      <body className="bg-primary-dark-blue flex min-h-dvh w-full flex-col items-center justify-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
