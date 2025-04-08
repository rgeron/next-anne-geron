"use client";

import { motion } from "framer-motion";

export default function ClientMandatairePage() {
  const colors = {
    taupeGray: "#8B8589",
    warmBeige: "#E8DCD0",
    paleCream: "#F5F0E8",
    softPeriwinkle: "#C5CBE3",
    icyWhite: "#F8F9FA",
  } as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const highlightText = {
    hidden: {
      opacity: 0,
      width: "0%",
    },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  return (
    <main className="container mx-auto px-4 py-12 mt-10">
      <motion.div
        className="flex flex-col items-center mb-16"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h1
          className="text-5xl font-bold mb-10 text-center relative"
          variants={fadeInUp}
        >
          <span className="relative inline-block">
            <span className="relative z-10">
              Mandataire Judiciaire
            </span>
            <motion.span
              className="absolute bottom-1 left-0 w-full h-3 transform -rotate-1 z-0"
              style={{ backgroundColor: colors.softPeriwinkle }}
              variants={highlightText}
            ></motion.span>
          </span>
          <span
            className="block text-3xl mt-3 font-medium"
            style={{ color: colors.taupeGray }}
          >
            à la Protection des Majeurs
          </span>
        </motion.h1>

        <motion.div
          className="text-start max-w-3xl mx-auto space-y-8"
          variants={staggerChildren}
        >
          <motion.div
            className="p-6 rounded-lg shadow-sm"
            style={{
              background: `linear-gradient(to right, ${colors.paleCream}, ${colors.icyWhite})`,
              borderLeft: `4px solid ${colors.softPeriwinkle}`,
            }}
            variants={fadeInUp}
          >
            <motion.p className="text-xl leading-relaxed">
              <span
                className="font-semibold text-2xl block mb-2"
                style={{ color: colors.taupeGray }}
              >
                Métier méconnu d&apos;utilité publique
              </span>
              <span style={{ color: colors.taupeGray }}>
                d&apos;auxiliaire de justice au service des vulnérables dans la
                gestion de leurs affaires personnelles, administratives ou
                patrimoniales.
              </span>
            </motion.p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg"
            style={{ backgroundColor: colors.warmBeige }}
            variants={fadeInUp}
          >
            <motion.p
              className="text-lg leading-relaxed"
              style={{ color: colors.taupeGray }}
            >
              Diplômée du{" "}
              <span className="italic font-medium">
                Certification Nationale de Compétence
              </span>{" "}
              en qualité de Mandataire Judiciaire à la Protection des Majeurs.
            </motion.p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg shadow-sm"
            style={{
              background: `linear-gradient(to right, ${colors.paleCream}, ${colors.icyWhite})`,
              borderLeft: `4px solid ${colors.warmBeige}`,
            }}
            variants={fadeInUp}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.p className="text-xl leading-relaxed">
              <span
                className="text-2xl font-medium block mb-3"
                style={{ color: colors.taupeGray }}
              >
                La vulnérabilité est au cœur de notre humanité.
              </span>
              <span style={{ color: colors.taupeGray }}>
                Devenir mandataire pour majeurs protégés, c&apos;est soutenir,
                accompagner ou représenter les personnes incapables ou
                invalides, de manière temporaire ou permanente.
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
