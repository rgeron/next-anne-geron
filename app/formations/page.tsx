export function metadata() {
  return {
    title: "Formations | Anne Géron",
    description:
      "Formations sur mesure adaptées aux enjeux spécifiques de chaque organisation",
  };
}

export default function FormationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Formations</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Je conçois et anime des formations sur mesure adaptées aux enjeux
          spécifiques de chaque organisation. Intégrant une démarche de
          responsabilité sociétale (RSE) je favorise une approche éthique,
          durable, personnelle et collective.
        </p>
        {/* Add more content specific to formations */}
      </div>
    </main>
  );
}
