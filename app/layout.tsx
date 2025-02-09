import { Footer } from "@/components/my-footer";
import { Header } from "@/components/my-header";
import { agrandirBold, agrandirGrandHeavy, agrandirRegular } from "@/lib/fonts";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anne Geron",
  description: "Portfolio d'Anne Geron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${agrandirRegular.variable} ${agrandirBold.variable} ${agrandirGrandHeavy.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
