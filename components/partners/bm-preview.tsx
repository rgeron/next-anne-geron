"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PDF_PAGES = ["/images/BM/page1.png", "/images/BM/page2.png"];

export function BMPreview() {
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => {
    setCurrentPage((current) => (current + 1) % PDF_PAGES.length);
  };

  const previous = () => {
    setCurrentPage((current) =>
      current === 0 ? PDF_PAGES.length - 1 : current - 1
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full h-full">
            <Image
              src={PDF_PAGES[currentPage]}
              alt={`Page ${currentPage + 1}`}
              fill
              className="object-contain transition-opacity duration-300"
              priority={currentPage === 0}
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
          {PDF_PAGES.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
      <Link href="/pdfs/blaise-marie.pdf" target="_blank">
        <Button variant="outline" className="w-full">
          <FileText className="mr-2 h-4 w-4" />
          Voir le PDF complet
        </Button>
      </Link>
    </div>
  );
}
