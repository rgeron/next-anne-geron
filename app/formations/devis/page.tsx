export function metadata() {
  return {
    title: "Demande de devis formation | Anne Géron",
    description: "Demandez un devis personnalisé pour vos besoins en formation",
  };
}

export default function DevisPage() {
  return (
    <main className="container mx-auto px-4 py-8 mt-10">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-8">Demande de devis formation</h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl">
          Formulaire à venir. Pour toute demande de devis, veuillez me contacter
          directement.
        </p>
      </div>
    </main>
  );
}
