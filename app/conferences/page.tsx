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
      "Explorer les rituels et symboles qui nous aident à appréhender la fin de vie, en s'appuyant sur différentes approches culturelles pour mieux comprendre et accepter cette transition naturelle.",
    icon: <DoorOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Bien vieillir toujours heureux",
    description:
      "Découvrir les clés d'un vieillissement épanoui à travers l'activité physique adaptée, la stimulation cognitive et le maintien du lien social, essentiels pour préserver l'autonomie et la joie de vivre.",
    icon: <Smile className="h-7 w-7 bg-white" />,
  },
  {
    title: "Cycle des aidants",
    description:
      "Accompagner les aidants familiaux dans leur rôle crucial, en abordant la gestion du stress, l'organisation quotidienne et les ressources disponibles pour prévenir l'épuisement.",
    icon: <Users className="h-7 w-7 bg-white" />,
  },
  {
    title: "Je décide et je protège les miens",
    description:
      "Comprendre les dispositifs juridiques de protection (mandat de protection future, directives anticipées) pour garantir le respect de ses volontés et protéger ses proches.",
    icon: <Shield className="h-7 w-7 bg-white" />,
  },
  {
    title: "La perte d'autonomie",
    description:
      "Anticiper et s'adapter à la perte d'autonomie en explorant les solutions d'aménagement du domicile, les aides techniques et humaines disponibles pour maintenir la qualité de vie.",
    icon: <Accessibility className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les bienfaits de l'amour",
    description:
      "Explorer l'importance des relations affectives et de l'intimité dans le grand âge, facteurs essentiels de bien-être et de santé mentale souvent négligés en gérontologie.",
    icon: <Heart className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les dispositions juridiques de la fin de la vie",
    description:
      "Présentation claire des droits des patients en fin de vie, des directives anticipées et de la personne de confiance, pour garantir le respect des choix personnels.",
    icon: <Scale className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les liens invisibles qui entravent",
    description:
      "Identifier et comprendre les mécanismes psychologiques qui peuvent freiner l'adaptation au vieillissement, pour mieux les dépasser et vivre pleinement cette étape de vie.",
    icon: <LinkIcon className="h-7 w-7 bg-white" />,
  },
  {
    title: "Prévenir et soulager les douleurs",
    description:
      "Approche globale de la gestion de la douleur chez la personne âgée, combinant méthodes médicales et non-médicamenteuses pour améliorer le confort quotidien.",
    icon: <Stethoscope className="h-7 w-7 bg-white" />,
  },
  {
    title: "Vivre sereinement",
    description:
      "Développer des stratégies de résilience et d'adaptation pour faire face aux changements liés à l'âge, en cultivant l'équilibre émotionnel et le bien-être mental.",
    icon: <Brain className="h-7 w-7 bg-white" />,
  },
];

export default function ConferencesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Conférences & Ateliers</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {conferences.map((conference, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors"
          >
            <div className="mb-4 p-2 rounded-full w-fit">{conference.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
            <p className="text-gray-600">{conference.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Link href="/conferences/devis">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg py-6 px-8"
          >
            Demander un devis pour une conférence personnalisée
          </Button>
        </Link>
      </div>
    </main>
  );
}
