import { Button } from "@/components/ui/button";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import Link from "next/link";

export function TextScrollSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center flex flex-col gap-12">
      <TextGradientScroll
        text="Investir dans le lien gérontologue – mandataire judiciaire"
        className="text-2xl font-semibold tracking-tight md:text-4xl"
      />

      <TextGradientScroll
        text={`Vieillir n’est pas un accident. C’est le seul moyen de vivre longtemps.
Vieillir sans repères, c’est avancer de nuit sans carte. La gérontologie éclaire le chemin et la carte.
Elle permet de comprendre que la santé, le logement, les aidants, la sécurité, la prévention et les ressources financières forment un tout.
Chaque élément influence l’équilibre de l’ensemble.`}
        className="text-lg md:text-xl leading-relaxed"
      />

      <TextGradientScroll
        text="Lorsque cette lecture globale est donnée, les citoyens anticipent. Les aidants comprennent. Les tensions diminuent. Les dispositifs de protection adaptés et proportionnés sont mieux acceptés."
        className="text-lg md:text-xl leading-relaxed"
      />

      <TextGradientScroll
        text="Le Mandataire Judiciaire à la Protection des Majeurs (Curateur et Tuteur) n’intervient pas en rupture. Il intervient en continuité. Il apporte une réponse concrète, sécurisée et protectrice lorsque les fragilités dépassent les capacités d’autonomie."
        className="text-lg md:text-xl leading-relaxed"
      />

      <TextGradientScroll
        text={`Associer gérontologie et mandataire, c’est éviter les crises plutôt que les subir.
C’est rendre lisible l’action publique.
C’est protéger sans déposséder.
C’est accompagner sans infantiliser.
C'est maintenir et promouvoir l'autonomie.`}
        className="text-lg md:text-xl leading-relaxed"
      />

      <TextGradientScroll
        text={`Pour un territoire, ce choix est stratégique.
Il renforce la confiance des citoyens, soutient les aidants et construit une politique du grand âge à la fois efficace et profondément humaine.`}
        className="text-lg md:text-xl leading-relaxed"
      />
      <div className="flex flex-col items-start gap-6">
        <Link href="#footer">
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-[#8B8589] hover:bg-[#7A7579]"
          >
            Rencontrons-nous
          </Button>
        </Link>
      </div>
    </section>
  );
}
