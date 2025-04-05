import { Footer } from "@/components/my-footer";
import { Header } from "@/components/my-header";
import { roboto } from "@/lib/fonts";
import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${roboto.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
