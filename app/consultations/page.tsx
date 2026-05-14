import { ConsultationContactForm } from "@/components/consultations/consultation-contact-form";

export function metadata() {
  return {
    title: "Consultations | Anne Géron",
    description:
      "Accompagnement gérontologique, médiation et facilitation de prise de décisions.",
  };
}

export default function ConsultationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10 max-w-3xl">
      {/* En-tête */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Consultation</h1>
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Accompagnement gérontologique, médiation et facilitation de prise de
          décisions
        </p>
      </div>

      {/* Texte introductif */}
      <section className="mb-14 space-y-5 text-gray-700 text-[1.05rem] leading-relaxed">
        <h2 className="text-2xl font-semibold text-gray-900">
          Accompagner le Grand Âge avec Sérénité
        </h2>
        <p>
          Le vieillissement d&apos;un proche est un séisme qui bouscule les
          repères familiaux et soulève bien des questions. Face à l&apos;urgence
          ou à l&apos;incertitude, il est souvent difficile de concilier la
          volonté de l&apos;aîné, les contraintes matérielles et les émotions de
          la famille.
        </p>
        <p>
          Mon rôle est de vous aider à transformer ces doutes en un{" "}
          <strong className="font-semibold text-gray-900">
            projet de vie digne, sécurisé et partagé.
          </strong>
        </p>
      </section>

      {/* Section 1 */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Une approche systémique pour une décision éclairée
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Une consultation est un espace de partage et d&apos;analyse de la
          situation pour bâtir un projet de vie adapté autour de la personne
          âgée.
        </p>
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
          Explorer l&apos;arbre des décisions pour répondre aux enjeux
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-gray-900">
                Le maintien à domicile :
              </strong>{" "}
              Évaluer sa faisabilité, son coût et ses limites techniques.
            </span>
          </li>
          <li className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-gray-900">
                L&apos;entrée en institution :
              </strong>{" "}
              Déterminer le moment opportun pour une entrée acceptée et choisie.
            </span>
          </li>
          <li className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-gray-900">
                Le poids des promesses :
              </strong>{" "}
              Travailler sur la culpabilité, la loyauté et le consentement pour
              passer du &laquo;&nbsp;dire&nbsp;&raquo; au &laquo;&nbsp;faire&nbsp;&raquo; dans l&apos;intérêt de l&apos;aîné.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">
          Faire converger les volontés : La médiation familiale
        </h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          La complexité du grand âge nécessite souvent une décision collégiale.
          J&apos;accompagne chaque partie prenante (conjoint, enfants, proches)
          à exprimer son point de vue.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-gray-900">
                Protéger l&apos;aîné :
              </strong>{" "}
              Garantir que sa volonté reste le curseur principal du projet, tout
              en assurant sa sécurité juridique et physique.
            </span>
          </li>
          <li className="flex gap-3 text-gray-700 leading-relaxed">
            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-gray-900">
                Adhérer au projet :
              </strong>{" "}
              Faire en sorte que la décision finale soit comprise et acceptée par
              tous, pour restaurer l&apos;harmonie familiale.
            </span>
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-14 rounded-2xl bg-[#2c3e2d] px-8 py-8">
        <h2 className="text-xl font-semibold mb-2 text-white">
          Ce que la consultation vous apporte
        </h2>
        <p className="text-[#a8b8a9] text-sm italic mb-6">
          &laquo;&nbsp;Passer de l&apos;urgence subie à la décision choisie.&nbsp;&raquo;
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3 text-[#c9d9ca] leading-relaxed">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-white">
                Une expertise médico-sociale et juridique :
              </strong>{" "}
              Identification des dispositifs d&apos;aide et des cadres légaux de
              protection.
            </span>
          </li>
          <li className="flex gap-3 text-[#c9d9ca] leading-relaxed">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-white">
                Une vision globale :
              </strong>{" "}
              Une analyse qui intègre la santé, le budget, l&apos;habitat et le
              lien social.
            </span>
          </li>
          <li className="flex gap-3 text-[#c9d9ca] leading-relaxed">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#c9b99a] mt-2" />
            <span>
              <strong className="font-semibold text-white">
                Un soutien aux aidants :
              </strong>{" "}
              Des solutions concrètes de répit pour prévenir l&apos;épuisement
              et vous permettre de redevenir simplement un fils, une fille ou un
              conjoint.
            </span>
          </li>
        </ul>
      </section>

      {/* Tarifs */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6 text-gray-900">Tarifs</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {/* Consultation individuelle */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#F5F0E8] px-7 py-6 shadow-sm border border-[#e0d5c5]">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                Séance individuelle
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Consultation
              </h3>
              <p className="text-sm text-gray-600">Durée : 1 heure</p>
            </div>
            <div className="mt-6 pt-5 border-t border-[#e0d5c5] flex items-baseline gap-1">
              <span className="text-4xl font-bold text-gray-900">80</span>
              <span className="text-xl font-medium text-gray-500">€</span>
            </div>
          </div>

          {/* Pack aidant/aidé */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#2c3e2d] px-7 py-6 shadow-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#a8b8a9] mb-1">
                Formule
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">
                Pack aidant / aidé
              </h3>
              <ul className="text-sm text-[#c9d9ca] space-y-1">
                <li>1 consultation aidants familiaux — 45 min</li>
                <li>1 consultation aidés — 45 min</li>
                <li>1 consultation aidants + aidé — 45 min</li>
              </ul>
            </div>
            <div className="mt-6 pt-5 border-t border-[#3d5240] flex items-baseline gap-1">
              <span className="text-4xl font-bold text-white">250</span>
              <span className="text-xl font-medium text-[#a8b8a9]">€</span>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire RDV */}
      <section className="rounded-2xl bg-[#F5F0E8] px-8 py-10 shadow-sm border border-[#e0d5c5]">
        <h2 className="text-xl font-semibold mb-1 text-gray-900">
          Prendre rendez-vous
        </h2>
        <p className="text-gray-500 text-sm mb-7">
          Décrivez brièvement votre situation, je vous recontacte pour convenir
          d&apos;un créneau.
        </p>
        <ConsultationContactForm />
      </section>
    </main>
  );
}
