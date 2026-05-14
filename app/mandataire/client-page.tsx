export function ClientMandatairePage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10 max-w-3xl">
      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="text-4xl font-bold mb-3">Mandataire judiciaire</h1>
        <p className="text-sm uppercase tracking-widest text-gray-400">
          À la protection des majeurs
        </p>
      </div>

      <section className="mb-14 space-y-5 text-gray-700 text-[1.05rem] leading-relaxed">
        <div className="rounded-2xl bg-[#F5F0E8] px-7 py-7 shadow-sm border border-[#e0d5c5]">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Métier méconnu d&apos;utilité publique
          </h2>
          <p>
            Auxiliaire de justice au service des vulnérables dans la gestion de
            leurs affaires personnelles, administratives ou patrimoniales.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <div className="rounded-2xl bg-[#F5F0E8] px-7 py-7 shadow-sm border border-[#e0d5c5]">
          <p className="text-gray-700 leading-relaxed">
            Diplômée du{" "}
            <strong className="font-semibold text-gray-900">
              Certification Nationale de Compétence
            </strong>{" "}
            en qualité de mandataire judiciaire à la protection des majeurs.
            Agréée pour exercer en libéral dans l&apos;Essonne.
          </p>
        </div>
      </section>

      <section className="mb-14 rounded-2xl bg-[#2c3e2d] px-8 py-8">
        <h2 className="text-xl font-semibold mb-4 text-white">
          La vulnérabilité est au cœur de notre humanité
        </h2>
        <p className="text-[#c9d9ca] leading-relaxed">
          Devenir mandataire pour majeurs protégés, c&apos;est soutenir,
          accompagner ou représenter les personnes incapables ou invalides, de
          manière temporaire ou permanente.
        </p>
      </section>
    </main>
  );
}
