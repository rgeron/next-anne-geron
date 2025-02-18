import { Footer } from "@/components/my-footer";
import { Header } from "@/components/my-header";
import {
  agrandirBold,
  agrandirGrandHeavy,
  agrandirRegular,
  playfairDisplay,
} from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${agrandirRegular.variable} ${agrandirBold.variable} ${agrandirGrandHeavy.variable} ${playfairDisplay.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
