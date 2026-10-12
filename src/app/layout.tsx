import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Orient Blue FZ-L.L.C.",
  description:
    "Orient Blue FZ-L.L.C. — premium technical products, solutions and industrial expertise.",
  keywords: [
    "Orient Blue",
    "Orient Blue FZ-L.L.C.",
    "technical products",
    "industrial solutions",
    "UAE",
    "Saudi Arabia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll />

        <Navbar />

        <PageTransition>{children}</PageTransition>
            <Footer />
    </body>
    </html>
  );
}
