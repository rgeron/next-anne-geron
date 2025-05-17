import { Footer } from "@/components/my-footer";
import { Header } from "@/components/my-header";
import { roboto } from "@/lib/fonts";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anne Géron",
  description: "Anne Géron, gérontoloque et spécialiste du bien vieillir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${roboto.variable} antialiased flex flex-col min-h-screen`}
      >
        <Script
          src="https://sdk.hellouniweb.com/base/main.js"
          data-account="lZOzpEvf"
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
