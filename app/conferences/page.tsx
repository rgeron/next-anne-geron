import { ConferenceCard } from "@/components/conferences/conference-card";
import { Button } from "@/components/ui/button";
import {
  Accessibility,
  Brain,
  DoorOpen,
  Heart,
  Link as LinkIcon,
  Scale,
  Shield,
  Smile,
  Stethoscope,
  Users,
} from "lucide-react";
import Link from "next/link";

export function metadata() {
  return {
    title: "Conférences & Ateliers | Anne Géron",
    description:
      "Conférences et ateliers sur mesure pour sensibiliser et engager",
  };
}

const conferences = [
  {
    title: "Accepter la mort et le symbolisme des portes",
    description:
      "Exploration des rituels et symboles de la fin de vie à travers différentes approches culturelles.",
    icon: <DoorOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Bien vieillir toujours heureux",
    description:
      "Les clés d'un vieillissement épanoui : activité physique, stimulation cognitive et lien social.",
    icon: <Smile className="h-7 w-7 bg-white" />,
  },
  {
    title: "Cycle des aidants",
    description:
      "Guide pratique pour les aidants : gestion du stress, organisation et ressources disponibles.",
    icon: <Users className="h-7 w-7 bg-white" />,
  },
  {
    title: "Je décide et je protège les miens",
    description:
      "Les dispositifs juridiques pour protéger ses volontés et ses proches.",
    icon: <Shield className="h-7 w-7 bg-white" />,
  },
  {
    title: "La perte d'autonomie",
    description:
      "Solutions pratiques pour maintenir la qualité de vie face à la perte d'autonomie.",
    icon: <Accessibility className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les bienfaits de l'amour",
    description:
      "L'importance des relations affectives et de l'intimité dans le grand âge.",
    icon: <Heart className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les dispositions juridiques de la fin de la vie",
    description:
      "Droits des patients, directives anticipées et rôle de la personne de confiance.",
    icon: <Scale className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les liens invisibles qui entravent",
    description:
      "Comprendre et dépasser les freins psychologiques liés au vieillissement.",
    icon: <LinkIcon className="h-7 w-7 bg-white" />,
  },
  {
    title: "Prévenir et soulager les douleurs",
    description:
      "Méthodes médicales et alternatives pour gérer la douleur chez la personne âgée.",
    icon: <Stethoscope className="h-7 w-7 bg-white" />,
  },
  {
    title: "Vivre sereinement",
    description:
      "Stratégies de résilience pour s'adapter aux changements liés à l'âge.",
    icon: <Brain className="h-7 w-7 bg-white" />,
  },
];

export default function ConferencesPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-bold mb-2 underline">
          Conférences & Ateliers
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {conferences.map((conference, index) => (
          <ConferenceCard
            key={index}
            title={conference.title}
            description={conference.description}
            icon={conference.icon}
          />
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Link href="/conferences/devis">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-base sm:text-lg py-4 px-4 sm:py-6 sm:px-8"
          >
            <span className="block sm:hidden">Formuler une demande</span>
            <span className="hidden sm:block">
              Formuler une demande pour une conférence personnalisée
            </span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
