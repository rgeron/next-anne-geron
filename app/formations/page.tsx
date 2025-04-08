import { FormationCard } from "@/components/formations/formation-card";
import { Button } from "@/components/ui/button";
import { BookOpen, ScrollText } from "lucide-react";
import Link from "next/link";

export function metadata() {
  return {
    title: "Formations | Anne Géron",
    description:
      "Formations sur mesure adaptées aux enjeux spécifiques de chaque organisation",
  };
}

const themes = [
  {
    title: "Grand âge et dépendance",
    description:
      "Les enjeux du vieillissement et accompagnement des personnes âgées en perte d'autonomie.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "La retraite 3ème temps de la vie",
    description:
      "Préparation et approche positive pour vivre cette nouvelle étape dans la joie et les autres.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Comprendre les contrats obsèques",
    description:
      "Démystifier le produit financier et a accompagner le récit d'une vie réussie pour envisager des funérailles apaisees et préparées.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Transmettre ses expériences de vie",
    description:
      "Méthodes pour partager son vécu et sa sagesse avec les générations futures.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Traverser le deuil",
    description:
      "De faire son deuil à vivre le deuil, découvrir les essentiels du deuil et les transformations positives provoqués par cette expérience.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Qu'est-ce que la mort?",
    description:
      "Approche philosophique et pratique de la mort et son impact sociétal.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Ritualisation, inhumation et crémation",
    description:
      "Les différentes pratiques de ritualisation avec leur signification culturelle et leurs impacts sur la civilisation.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Le funéraire",
    description:
      "Exploration des pratiques funéraires contemporaines et leur évolution dans notre société, couvrant les aspects pratiques et culturels.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
];

export default function FormationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-2 underline">Formations</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {themes.map((theme, index) => (
          <FormationCard
            key={index}
            title={theme.title}
            description={theme.description}
            icon={theme.icon}
          />
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Link href="/formations/devis">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-base sm:text-lg py-4 px-4 sm:py-6 sm:px-8"
          >
            <span className="block sm:hidden">Formuler une demande</span>
            <span className="hidden sm:block">
              Formuler une demande pour une formation personnalisée
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
