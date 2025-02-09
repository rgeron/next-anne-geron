import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";

export const agrandirRegular = localFont({
  src: "../public/fonts/agrandir/Agrandir-Regular.otf",
  variable: "--font-agrandir",
});

export const agrandirBold = localFont({
  src: "../public/fonts/agrandir/Agrandir-TextBold.otf",
  variable: "--font-agrandir-bold",
});

export const agrandirGrandHeavy = localFont({
  src: "../public/fonts/agrandir/Agrandir-GrandHeavy.otf",
  variable: "--font-agrandir-heavy",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
