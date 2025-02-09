import { Button } from "@/components/ui/button";
import {
  Accessibility,
  Brain,
  DoorOpen,
  Heart,
  Link,
  Scale,
  Shield,
  Smile,
  Stethoscope,
  Users,
} from "lucide-react";

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
    description: "Description for Accepter la mort & le symbolisme des portes",
    icon: <DoorOpen className="h-7 w-7 bg-white" />,
  },
  {
    title: "Bien vieillir toujours heureux",
    description: "Description for Bien vieillir toujours heureux",
    icon: <Smile className="h-7 w-7 bg-white" />,
  },
  {
    title: "Cycle des aidants",
    description: "Description for Cycle des aidants",
    icon: <Users className="h-7 w-7 bg-white" />,
  },
  {
    title: "Je décide et je protège les miens",
    description: "Description for Je décide et je protège les miens",
    icon: <Shield className="h-7 w-7 bg-white" />,
  },
  {
    title: "La perte d&apos;autonomie",
    description: "Description for La perte d&apos;autonomie",
    icon: <Accessibility className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les bienfaits de l&apos;amour",
    description: "Description for Les bienfaits de l&apos;amour",
    icon: <Heart className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les dispositions juridiques de la fin de la vie",
    description:
      "Description for Les dispositions juridiques et réglementaires de la fin de la vie",
    icon: <Scale className="h-7 w-7 bg-white" />,
  },
  {
    title: "Les liens invisibles qui entravent",
    description: "Description for Les liens invisibles qui entravent",
    icon: <Link className="h-7 w-7 bg-white" />,
  },
  {
    title: "Prévenir et soulager les douleurs",
    description: "Description for Prévenir et soulager les douleurs",
    icon: <Stethoscope className="h-7 w-7 bg-white" />,
  },
  {
    title: "Vivre sereinement",
    description: "Description for Vivre sereinement",
    icon: <Brain className="h-7 w-7 bg-white" />,
  },
];

export default function ConferencesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Conférences & Ateliers</h1>
        <p className="text-lg text-center max-w-3xl mb-8">
          Je crée et j&apos;anime des conférences sur mesure, conçues pour
          sensibiliser les participants à des thématiques clés et engager des
          discussions enrichissantes. Ces conférences peuvent s&apos;accompagner
          d&apos;ateliers pratiques.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Demander un devis pour une conférence personnalisée
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </main>
  );
}
