"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold hover:text-gray-300">
          Anne Geron
        </Link>
        <nav>
          <Button
            variant="ghost"
            asChild
            className="text-white hover:text-gray-300"
          >
            <Link href="/">Menu</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
