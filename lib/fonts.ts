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
