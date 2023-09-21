import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({ subsets: ["latin"] });
const unicaOne = Unica_One({ weight: "400", subsets: ["latin"] });

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
      <body
        className={`${montserrat.className} ${clashDisplay.variable} ${unica_one.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
