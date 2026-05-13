import { ConsultationContactForm } from "@/components/consultations/consultation-contact-form";

export function metadata() {
  return {
    title: "Consultations | Anne Géron",
    description:
      "Accompagnement géronto-psychologique : consultations individuelles et pack aidant/aidé.",
  };
}

export default function ConsultationsPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10 max-w-3xl">
      {/* En-tête */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Consultations</h1>
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Accompagnement géronto-psychologique
        </p>
      </div>

      {/* Texte introductif */}
      <section className="mb-14 space-y-5 text-gray-700 text-[1.05rem] leading-relaxed">
        <p>
          Les difficultés liées au vieillissement, le maintien à domicile, ou le
          projet de vie en institution bouleversent la vie des personnes
          concernées et de leurs proches. Face à ces décisions, il n&apos;est
          pas toujours facile de connaître tous les paramètres.
        </p>
        <p>
          J&apos;accompagne les personnes âgées et leurs familles dans les
          moments charnières du grand âge : la question du{" "}
          <strong className="font-semibold text-gray-900">
            maintien à domicile
          </strong>
          , les difficultés du quotidien, mais aussi l&apos;
          <strong className="font-semibold text-gray-900">
            orientation vers une vie en institution
          </strong>{" "}
          lorsque le moment est venu.
        </p>
        <p>
          Ces consultations sont un espace d&apos;écoute, d&apos;analyse et de
          conseil, pour aider chacun à comprendre la situation, identifier les
          dispositifs d&apos;aide existants, envisager les options juridiques et
          médico-sociales, et surtout, réduire l&apos;épuisement des aidants et
          découvrir les solutions de répit.
        </p>
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
