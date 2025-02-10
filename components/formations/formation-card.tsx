"use client";

import { useState } from "react";

import { ReactNode } from "react";

type FormationCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function FormationCard({
  title,
  description,
  icon,
}: FormationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[250px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 p-6 rounded-lg border border-gray-200 [backface-visibility:hidden]">
          <div className="mb-2 p-2 rounded-full w-fit">{icon}</div>
          <h3 className="text-lg font-mono font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-base">{description}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-lg border border-gray-200 bg-white p-6 text-center flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-xl font-medium text-gray-700">
            Contactez moi pour connaître le sommaire et les objectifs
            pédagogiques de la formation
          </p>
        </div>
      </div>
    </div>
  );
}
