"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      // If not on home page, navigate home first
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#8B8589] text-white py-4 relative z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="relative" ref={menuRef}>
          <Button
            variant="ghost"
            size="lg"
            className="text-white transition-colors text-lg font-semibold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </Button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#F5F0E8] ring-1 ring-[#8B8589] ring-opacity-20">
              <div className="py-1">
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#E8DCD0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/formations"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#E8DCD0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Formations
                </Link>
                <Link
                  href="/conferences"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#E8DCD0] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Conférences
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-[#E8DCD0] transition-colors"
                  onClick={() => scrollToSection("projects-section")}
                >
                  Mes Travaux
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-[#E8DCD0] transition-colors"
                  onClick={() => scrollToSection("footer")}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
