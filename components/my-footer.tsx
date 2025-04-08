"use client";

import { Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#F5F0E8] mt-10">
      <div className="w-full h-2" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="max-w-xl">
            <div className="text-2xl mb-8">
              <h2 className="text-4xl mb-10 font-semibold">Contactez-moi !</h2>
              <div className="flex flex-col gap-4 mb-8 text-base">
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:ab@annegeron.fr"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Mail size={20} />
                    ab@annegeron.fr
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+33617665132"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Phone size={20} />
                    06 17 66 51 32
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href="https://www.linkedin.com/in/annegeron/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <Linkedin size={20} />
                    voir mon linkedin
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ou envoyez-moi un message directement depuis le site :
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="flex justify-center">
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
