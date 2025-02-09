import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Project = {
  title: string | React.ReactNode;
  description: string;
  pdfUrl?: string;
  pdfs?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    title: "LIVRE DE MÉMOIRES",
    description:
      "Un projet conçu pour un family office, permettant aux familles de transmettre et préserver l'histoire de la construction et de la vie de leur entreprise.",
    pdfs: [
      { label: "Livre", url: "/pdfs/livre_memoire.pdf" },
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
        <span className="text-base">À l'usage des gens que j'aime</span>
      </>
    ),
    description: "",
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

export function ProjectsSection() {
  return (
    <section className="container py-24">
      <h2 className="text-3xl font-bold tracking-tighter mb-12">
        Mes Réalisations
      </h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {projects.map((project, index) => (
            <Card key={index} className="w-[350px] flex flex-col">
              <CardHeader>
                <CardTitle className="whitespace-pre-wrap">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                {project.description && (
                  <CardDescription className="mb-4 whitespace-normal flex-1">
                    {project.description}
                  </CardDescription>
                )}
                <div className="flex gap-2 mt-auto">
                  {project.pdfs ? (
                    project.pdfs.map((pdf, pdfIndex) => (
                      <Button key={pdfIndex} asChild>
                        <a
                          href={pdf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pdf.label}
                        </a>
                      </Button>
                    ))
                  ) : (
                    <Button asChild>
                      <a
                        href={project.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir le PDF
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
