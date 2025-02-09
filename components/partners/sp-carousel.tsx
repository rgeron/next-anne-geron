"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SP_IMAGES = [
  "/images/SP/SP1.png",
  "/images/SP/SP2.png",
  "/images/SP/SP3.png",
  "/images/SP/SP4.png",
  "/images/SP/SP5.png",
  "/images/SP/SP6.png",
];

export function SPCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % SP_IMAGES.length);
  };

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? SP_IMAGES.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-lg">
      <div className="absolute inset-0 flex items-center">
        <div className="relative w-full h-full">
          <Image
            src={SP_IMAGES[currentIndex]}
            alt={`Santé Partners ${currentIndex + 1}`}
            fill
            className="object-contain p-2 transition-opacity duration-300"
            priority
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background/90"
          onClick={previous}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 hover:bg-background/90"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {SP_IMAGES.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-primary/20"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
