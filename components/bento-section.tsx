import Link from "next/link";
import { ConferencesCard } from "./bento/conferences-card";
import { FormationsCard } from "./bento/formations-card";

const colors = {
  taupeGray: "bg-[#8B8589]",
  warmBeige: "bg-[#E8DCD0]",
  paleCream: "bg-[#F5F0E8]",
  softPeriwinkle: "bg-[#C5CBE3]",
  icyWhite: "bg-[#F8F9FA]",
} as const;

type ColorVariant =
  | "taupeGray"
  | "warmBeige"
  | "paleCream"
  | "softPeriwinkle"
  | "icyWhite";

function BentoCard(props: {
  title: string;
  href: string;
  variant?: ColorVariant;
  className?: string;
}) {
  const baseStyles =
    "group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl border-2 border-opacity-20";

  const getColorStyles = (variant: ColorVariant = "paleCream") => {
    const colorMap = {
      taupeGray: `${colors.taupeGray} text-white border-gray-700`,
      warmBeige: `${colors.warmBeige} text-gray-800 border-amber-200`,
      paleCream: `${colors.paleCream} text-gray-800 border-gray-200`,
      softPeriwinkle: `${colors.softPeriwinkle} text-gray-800 border-blue-200`,
      icyWhite: `${colors.icyWhite} text-gray-800 border-gray-100`,
    };
    return colorMap[variant];
  };

  return (
    <Link
      href={props.href}
      className={`${baseStyles} ${getColorStyles(props.variant)} ${
        props.className
      }`}
    >
      <div className="flex h-full w-full items-center justify-center text-center text-3xl font-bold">
        {props.title}
      </div>
    </Link>
  );
}

export function BentoSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        {/* Formations - Left side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <FormationsCard />
        </div>

        {/* Conferences - Right side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <ConferencesCard />
        </div>

        {/* MJPM - Top middle */}

        {/* Partners */}
        <div className="md:col-span-6 lg:col-span-4">
          <BentoCard
            title="Mes Partenaires"
            href="/partenaires"
            variant="taupeGray"
          />
        </div>

        <div className="md:col-span-6 lg:col-span-4">
          <BentoCard
            title="Mandataire Judiciaire à la Protection des Majeurs"
            href="/mandataire"
            variant="taupeGray"
          />
        </div>
      </div>
    </section>
  );
}
