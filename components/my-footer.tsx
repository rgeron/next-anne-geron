"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ContactForm } from "./contact-form";

export function Footer() {
  const carouselImages = [
    { src: "/images/carousel/cta.png", alt: "CTA" },
    { src: "/images/carousel/methode.png", alt: "Méthode" },
    { src: "/images/carousel/themes.png", alt: "Thèmes" },
    { src: "/images/carousel/approche.png", alt: "Approche" },
  ];

  return (
    <footer
      id="footer"
      className="bg-white text-black border-t border-gray-200"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="mt-8">
              <Carousel className="w-full max-w-lg mx-auto">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={450}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
