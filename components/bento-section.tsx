import { FlipCard } from "./ui/flip-card";

export function BentoSection() {
  return (
    <section className="container mx-auto p-4 my-8">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[200px]">
        {/* Formations - Left side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <FlipCard
            frontTitle="Formations"
            backContent="Je conçois et anime des formations sur mesure adaptées aux enjeux spécifiques de chaque organisation. Intégrant une démarche de responsabilité sociétale (RSE) je favorise une approche éthique, durable, personnelle et collective."
          />
        </div>

        {/* MJPM - Top middle */}
        <div className="md:col-span-6 lg:col-span-4">
          <FlipCard
            frontTitle="Mandataire Judiciaire à la Protection des Majeurs"
            backContent="Content coming soon..."
          />
        </div>

        {/* Conferences - Right side */}
        <div className="md:col-span-3 lg:col-span-4 row-span-2">
          <FlipCard
            frontTitle="Conférences & Ateliers"
            backContent="Je crée et j'anime des conférences sur mesure, conçues pour sensibiliser les participants à des thématiques clés et engager des discussions enrichissantes. Ces conférences peuvent s'accompagner d'ateliers pratiques."
          />
        </div>

        {/* Bottom middle cards */}
        <div className="md:col-span-3 lg:col-span-2">
          <FlipCard
            frontTitle="Sante Partners"
            backContent="Content coming soon..."
          />
        </div>
        <div className="md:col-span-3 lg:col-span-2">
          <FlipCard
            frontTitle="Équipe avec Blaise et Marie"
            backContent="Content coming soon..."
          />
        </div>
      </div>
    </section>
  );
}
