import { Button } from "@/components/ui/button";
import { BookOpen, ScrollText } from "lucide-react";

export function metadata() {
  return {
    title: "Formations | Anne Géron",
    description:
      "Formations sur mesure adaptées aux enjeux spécifiques de chaque organisation",
  };
}

const themes = [
  {
    title: "Le funéraire",
    description:
      "Une exploration approfondie des pratiques funéraires contemporaines, leur évolution et leur importance dans notre société. Cette formation aborde les aspects pratiques, émotionnels et culturels des rituels funéraires.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Ritualisation, inhumation et crémation",
    description:
      "Découvrez les différentes pratiques de ritualisation, les spécificités de l'inhumation et de la crémation, ainsi que leur signification culturelle et spirituelle dans notre société moderne.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Qu'est-ce que la mort?",
    description:
      "Une exploration philosophique et pratique de la mort, son impact sur notre société et comment mieux l'appréhender.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Grand âge et dépendance",
    description:
      "Comprendre les enjeux du vieillissement et de la dépendance, et comment accompagner au mieux les personnes âgées.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Traverser le deuil",
    description:
      "Un accompagnement pour comprendre et traverser les différentes étapes du deuil, avec des outils pratiques et du soutien émotionnel.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "Comprendre les contrats obsèques",
    description:
      "Une formation détaillée sur les aspects juridiques et pratiques des contrats obsèques, pour mieux conseiller et accompagner.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Transmettre ses expériences de vie",
    description:
      "Apprendre à valoriser et partager son vécu, ses connaissances et sa sagesse avec les générations futures.",
    icon: <ScrollText className="h-7 w-7 bg-white" />,
  },
  {
    title: "La retraite 3ème temps de la vie",
    description:
      "Une approche positive et pratique pour préparer et vivre pleinement sa retraite comme une nouvelle étape enrichissante.",
    icon: <BookOpen className="h-7 w-7 bg-white" />,
  },
];

export default function FormationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Formations</h1>
        <p className="text-lg text-center max-w-3xl mb-8">
          Je conçois et anime des formations sur mesure adaptées aux enjeux
          spécifiques de chaque organisation. Intégrant une démarche de
          responsabilité sociétale (RSE) je favorise une approche éthique,
          durable, personnelle et collective.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Demander un devis pour une formation personnalisée
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {themes.map((theme, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors"
          >
            <div className="mb-4 p-2 rounded-full w-fit">{theme.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
            <p className="text-gray-600">{theme.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
