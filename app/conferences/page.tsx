export function metadata() {
  return {
    title: "Conférences & Ateliers | Anne Géron",
    description:
      "Conférences et ateliers sur mesure pour sensibiliser et engager",
  };
}

export default function ConferencesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Conférences & Ateliers</h1>
      <div className="prose prose-lg max-w-none">
        <p>
          Je crée et j'anime des conférences sur mesure, conçues pour
          sensibiliser les participants à des thématiques clés et engager des
          discussions enrichissantes. Ces conférences peuvent s'accompagner
          d'ateliers pratiques.
        </p>
        {/* Add more content specific to conferences */}
      </div>
    </main>
  );
}
