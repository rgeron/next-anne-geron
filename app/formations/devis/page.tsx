import { sendDevisRequest } from "@/app/actions/send-devis-request.action";
import { DevisForm } from "@/components/devis-form";

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
        <h1 className="text-4xl font-bold mb-8">
          Formuler une demande pour une formation personnalisée
        </h1>
        <p className="text-lg text-center max-w-3xl mb-8">
          Complétez le formulaire ci-dessous.
        </p>
        <DevisForm type="formation" onSubmit={sendDevisRequest} />
      </div>
    </main>
  );
}
