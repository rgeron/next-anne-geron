import Link from "next/link";
import { ConferencesCard } from "./bento/conferences-card";
import { ConsultationsCard } from "./bento/consultations-card";
import { FormationsCard } from "./bento/formations-card";

function BentoCard(props: {
  title: string;
  preTitle?: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={props.href}
      className={`group block h-full w-full rounded-xl p-8 shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl ${props.className}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        {props.preTitle && (
          <div className="text-xl font-medium opacity-80 mb-1">
            {props.preTitle}
          </div>
        )}
        <div className="text-2xl font-bold">{props.title}</div>
      </div>
    </Link>
  );
}

export function BentoSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        {/* Formations */}
        <div className="md:col-span-2 lg:col-span-4 row-span-2">
          <FormationsCard />
        </div>

        {/* Conférences & Ateliers */}
        <div className="md:col-span-2 lg:col-span-4 row-span-2">
          <ConferencesCard />
        </div>

        {/* Consultations */}
        <div className="md:col-span-2 lg:col-span-4 row-span-2">
          <ConsultationsCard />
        </div>

        {/* Mes Partenaires */}
        <div className="md:col-span-3 lg:col-span-6">
          <BentoCard
            title="Mes Partenaires"
            href="/partenaires"
            className="bg-[#8B8589] text-white border-2 border-gray-700 border-opacity-20"
          />
        </div>

        {/* Mandataire */}
        <div className="md:col-span-3 lg:col-span-6">
          <BentoCard
            preTitle="je suis"
            title="Mandataire Judiciaire à la Protection des Majeurs"
            href="/mandataire"
            className="bg-[#8B8589] text-white border-2 border-gray-700 border-opacity-20"
          />
        </div>
      </div>
    </section>
  );
}
