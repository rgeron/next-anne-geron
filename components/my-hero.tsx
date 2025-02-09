"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const defaultQuotes = [
  {
    text: "Ma raison d'être est d'éduquer au bien-vieillir et d'inspirer la confiance dans le dernier tiers temps de la vie.",
  },
  {
    text: "Parce qu'il faut vivre, vieillir est une chance et mourir une nécessité",
  },
  {
    text: "Vieillir c'est chiant et on n'a rien trouvé de mieux pour vivre",
  },
  {
    text: "Nos parents et l'école nous apprennent à grandir puis nous sommes livrés à nous même pour vieillir",
  },
  {
    text: "Vieillir et mourir c'est effrayant car c'est se diriger sans freins vers des territoires inconnus sans aide des aînés",
  },
  {
    text: "La beauté et la performance sont l'adage du jeunisme. La connaissance et l'expérience sont l'adage de la maturité.",
  },
  {
    text: "La jeunesse apprend, la vieillesse transmet",
  },
  {
    text: "La connaissance est la lampe qui éclaire le chemin",
  },
  {
    text: "La performance commerciale en prévoyance nécessite l'apport de connaissances culturelles et psychosociales aux équipes.",
  },
];

export function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % defaultQuotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative w-full bg-white overflow-hidden rounded-lg border-2 border-black">
            <motion.img
              src="/images/photo1.jpg"
              alt="Anne Géron"
              className="w-full h-full object-cover"
              animate={{
                filter: showBio ? "brightness(0.1)" : "brightness(1)",
              }}
              transition={{ duration: 0.4 }}
            />

            <Button
              variant="secondary"
              className="absolute bottom-4 left-4 z-10"
              onClick={() => setShowBio(!showBio)}
            >
              {showBio ? <X /> : "Qui suis-je ?"}
            </Button>

            <motion.div
              className="absolute inset-0 flex items-start justify-center overflow-y-auto bg-white"
              initial={{ opacity: 0 }}
              animate={{
                opacity: showBio ? 1 : 0,
                pointerEvents: showBio ? "auto" : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-prose bg-white text-black p-4 lg:p-6 mb-6">
                <p className="text-sm sm:text-base lg:text-lg font-medium mb-4 lg:mb-6">
                  Gérontologue et thérapeute spécialisée dans le vieillissement,
                  avec une expertise de plus de 20 ans dans
                  l&apos;accompagnement des seniors et des familles. J&apos;ai
                  introduit le métier de funeral planner en France,
                  sensibilisant à l&apos;importance de préparer ses funérailles
                  avec ou sans contrat financier.
                </p>

                <p className="text-sm sm:text-base lg:text-lg font-medium mb-4 lg:mb-6">
                  Formatrice et conférencière, j&apos;œuvre pour démystifier les
                  enjeux du bien-vieillir et de la fin de vie, en proposant des
                  outils pédagogiques et la création de supports pratiques.
                </p>

                <p className="text-sm sm:text-base lg:text-lg font-medium mb-4 lg:mb-6">
                  Je suis engagée dans la prévention de la santé et la
                  prévoyance, je collabore avec des mutuelles, des caisses de
                  retraite, et des acteurs sociaux. Récemment certifiée
                  Mandataire Judiciaire à la Protection des Majeurs (MJPM),
                  j&apos;élargis mon champ d&apos;action pour accompagner les
                  personnes vulnérables dans la gestion de leurs droits et de
                  leur autonomie avec empathie et éthique.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col items-center">
          <img src="/images/logo.jpg" alt="Logo" className="w-48 mb-8" />
          <div className="relative h-[200px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuoteIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <p className="text-2xl lg:text-3xl font-serif italic text-gray-800">
                  {defaultQuotes[currentQuoteIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
