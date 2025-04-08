"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function PartnersSection() {
  const [partners1, setPartners1] = useState<string[]>([]);
  const [partners2, setPartners2] = useState<string[]>([]);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.5 });

  useEffect(() => {
    // Get all partner logos
    const allPartners = [
      "chaville.png",
      "generali.png",
      "happyend.jpg",
      "harmonie.png",
      "lilly.jpg",
      "maison.png",
      "malakoff.jpeg",
      "mercer.png",
      "mgen.jpg",
      "mma.jpg",
      "mnt.png",
      "ouihelp.png",
      "umr.png",
    ];

    // Split partners into two groups
    const midPoint = Math.ceil(allPartners.length / 2);
    setPartners1(allPartners.slice(0, midPoint));
    setPartners2(allPartners.slice(midPoint));
  }, []);

  return (
    <section className="py-16 overflow-hidden bg-white mt-10 mb-10">
      <div className="container mx-auto px-4 mb-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl text-center mb-6 font-agrandir"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Nous avons eu des projets ensemble
        </motion.h2>
      </div>

      {/* First row of logos */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex items-center space-x-4 py-2">
          {partners1.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm w-[160px] sm:w-[220px] h-[80px] sm:h-[100px]"
            >
              <Image
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                width={160}
                height={70}
                className="max-w-[120px] sm:max-w-[160px] max-h-[50px] sm:max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className="animate-marquee flex items-center space-x-4 py-2"
          aria-hidden="true"
        >
          {partners1.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm w-[160px] sm:w-[220px] h-[80px] sm:h-[100px]"
            >
              <Image
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                width={160}
                height={70}
                className="max-w-[120px] sm:max-w-[160px] max-h-[50px] sm:max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row of logos - moving in opposite direction */}
      <div className="relative flex overflow-x-hidden group mt-8">
        <div className="animate-marquee-reverse flex items-center space-x-4 py-2">
          {partners2.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm w-[160px] sm:w-[220px] h-[80px] sm:h-[100px]"
            >
              <Image
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                width={160}
                height={70}
                className="max-w-[120px] sm:max-w-[160px] max-h-[50px] sm:max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className="animate-marquee-reverse flex items-center space-x-4 py-2"
          aria-hidden="true"
        >
          {partners2.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-sm w-[160px] sm:w-[220px] h-[80px] sm:h-[100px]"
            >
              <Image
                src={`/images/partnerslogo/${logo}`}
                alt={logo.split(".")[0]}
                width={160}
                height={70}
                className="max-w-[120px] sm:max-w-[160px] max-h-[50px] sm:max-h-[70px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
