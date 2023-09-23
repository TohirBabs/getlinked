"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";
import Bgblob from "@/components/Bgblob";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const unica_one = Unica_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-unica-one",
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
  display: "swap",
  variable: "--font-clash-display",
});

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${montserrat.className} ${clashDisplay.variable} ${unica_one.variable}`}
      >
        <main className="bg-primary-purple lg:pt-24 pt-16 flex flex-col font-body  min-h-screen w-screen text-white relative overflow-hidden">
          <Bgblob />
          <AnimatedCursor
            innerSize={30}
            outerSize={20}
            color=" 255,255,255"
            innerStyle={{ border: "2px rgb(212, 52, 254) solid" }}
          />
          <Navbar />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
