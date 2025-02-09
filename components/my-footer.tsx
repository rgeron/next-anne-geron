"use client";

import Image from "next/image";
import { ContactForm } from "./contact-form";

export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white text-black border-t border-gray-200"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <ContactForm />
          </div>

          <div className="flex items-center justify-center h-full">
            <Image
              src="/images/carousel/cta.png"
              alt="CTA"
              width={800}
              height={450}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
