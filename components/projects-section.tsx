import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CahierCard } from "./projects/cahier-card";
import { PodcastPlayerCard } from "./projects/podcast-player-card";
import { YTBCard } from "./projects/ytb-card";

const cahiers = [
  {
    title: "LIVRE DE MÉMOIRES",
    description:
      "Un projet conçu pour un family office, permettant aux familles de transmettre et préserver l'histoire de la construction et de la vie de leur entreprise.",
    pdfs: [
      { label: "Livre", url: "/pdfs/livre-memoire.pdf" },
      { label: "Guide", url: "/pdfs/guide.pdf" },
    ],
  },
  {
    title: "Cahier MGEN",
    description:
      "Un cahier pédagogique pour guider les adhérents souscrivant un contrat obsèques à transformer ce dernier projet en une réflexion personnelle et familiale au-delà des aspects financiers.",
    pdfUrl: "/pdfs/cahier-mgen.pdf",
  },
  {
    title: (
      <>
        Cahier Malakoff-Médéric
        <br />
        <span className="text-base">
          À l&apos;usage des gens que j&apos;aime
        </span>
      </>
    ),
    description:
      "Cahier dédié aux retraités pour accompagner des ateliers sur le bien vieillir, déployés dans 28 agences à travers la France.",
    pdfUrl: "/pdfs/cahier-mort-malakoff-mederic.pdf",
  },
  {
    title: (
      <>
        Cahier Malakoff-Médéric
        <br />
        <span className="text-base">Ma retraite, ma nouvelle vie</span>
      </>
    ),
    description:
      "Cahier dédié aux retraités pour accompagner des ateliers sur le bien vieillir, déployés dans 28 agences à travers la France.",
    pdfUrl: "/pdfs/cahier-retraite-malakoff-mederic.pdf",
  },
];

const videos = [
  {
    title: "Quel prix pour une demeure d'éternité",
    videoId: "i2euZkYQ4-I",
    image: "https://i3.ytimg.com/vi/i2euZkYQ4-I/maxresdefault.jpg",
  },
  {
    title: "Les soins palliatifs",
    videoId: "4wABfaLkayU",
    image: "https://i3.ytimg.com/vi/4wABfaLkayU/maxresdefault.jpg",
  },
  {
    title: "Les rituels indispensables pour cheminer dans le deuil",
    videoId: "LmIDsKYlGnw",
    image: "https://i3.ytimg.com/vi/LmIDsKYlGnw/maxresdefault.jpg",
  },

  {
    title: "La crémation",
    videoId: "XOi6841Vbso",
    image: "https://i3.ytimg.com/vi/XOi6841Vbso/maxresdefault.jpg",
  },
];

const podcasts = [
  {
    title: "Empathie, Sympathie, Compassion",
    src: "/podcasts/p1Empathie.mp4",
    startTime: 50,
    endTime: 180, // 3min
  },
  {
    title: "Histoire et réglementation funéraire",
    src: "/podcasts/p2Histoire.mp4",
    startTime: 51,
    endTime: 155, // 2min35s
  },
  {
    title:
      "Les 3 transitions : assurance, épargne, risque projet décès obsèques",
    src: "/podcasts/p3Assurance.mp4",
    startTime: 127, // 2min07s
    endTime: 223, // 3min43s
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects-section"
      className="container mx-auto py-8 md:py-24 space-y-8 md:space-y-16 px-4 md:px-6 bg-[#8B8589] rounded-3xl"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-tighter mb-6 md:mb-12 text-center text-white">
          Mes travaux
        </h2>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {cahiers.map((cahier, index) => (
              <CahierCard key={index} {...cahier} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div>
        <h2 className="text-2xl md:text-4xl font-mono font-bold tracking-tighter mb-6 md:mb-12 text-center text-white">
          Extraits vidéos d&apos;une conférence
        </h2>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {videos.map((video, index) => (
              <div key={index} className="w-[280px] flex-none">
                <YTBCard {...video} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div>
        <h2 className="text-2xl md:text-4xl font-mono font-bold  tracking-tighter mb-6 md:mb-12 text-center text-white">
          Mes Podcasts
        </h2>
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {podcasts.map((podcast, index) => (
              <PodcastPlayerCard key={index} {...podcast} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
