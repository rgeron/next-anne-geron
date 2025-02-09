"use client";

import Image from "next/image";
import { ContactForm } from "./contact-form";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#F5F0E8] mt-10">
      <div className="w-full h-2 bg-[#8B8589]" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <div className="text-2xl mb-8">
              <ContactForm />
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src="/images/logotype.png"
              alt="Anne Geron Logo"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
