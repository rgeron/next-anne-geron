"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type YTBCardProps = {
  title: string;
  image?: string;
  videoId: string;
};

export function YTBCard({ title, image, videoId }: YTBCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow border-red-200 hover:border-red-300 group bg-white">
        <CardContent className="p-3">
          {image && (
            <div
              onClick={() => setIsOpen(true)}
              className="aspect-video w-full relative overflow-hidden rounded-md mb-3 group-hover:ring-2 ring-red-400 transition-all cursor-pointer"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 280px) 100vw, 280px"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <Play className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
            </div>
          )}
          <h3 className="text-sm font-roboto text-left line-clamp-2 text-gray-700 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[95vw] max-w-7xl aspect-video"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
