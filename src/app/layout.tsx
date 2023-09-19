import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.ttf",
  display: "swap",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "GetLinked",
  description: "Igniting a revolution in HR inovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${montserrat.className} ${clashDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
