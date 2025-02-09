export function metadata() {
  return {
    title: "Mandataire Judiciaire | Anne Géron",
    description: "Mandataire Judiciaire à la Protection des Majeurs",
  };
}

export default function MandatairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-8">
          Mandataire Judiciaire à la Protection des Majeurs
        </h1>
        <div className="max-w-3xl">
          <p className="text-lg mb-4">
            Métier méconnu d&apos;utilité publique d&apos;auxiliaire de justice
            au service des vulnérables dans la gestion de leurs affaires
            personnelles, administratives ou patrimoniales.
          </p>
          <p className="text-lg mb-4">
            Diplômée du Certification Nationale de Compétence en qualité de
            Mandataire Judiciaire à la Protection des Majeurs.
          </p>
          <p className="text-lg">
            La vulnérabilité est au cœur de notre humanité. Devenir mandataire
            pour majeurs protégés, c&apos;est soutenir, accompagner ou
            représenter les personnes incapables ou invalides, de manière
            temporaire ou permanente.
          </p>
        </div>
      </div>
    </main>
  );
}
