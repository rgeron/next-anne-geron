"use client";

import { sendConsultationEmail } from "@/app/actions/send-consultation-email.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { toast } from "sonner";

export function ConsultationContactForm() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await sendConsultationEmail(formData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Demande envoyée ! Je vous recontacte rapidement.");
      (
        document.getElementById("consultation-form") as HTMLFormElement
      ).reset();
    });
  }

  return (
    <form id="consultation-form" action={onSubmit} className="space-y-5">
      <Input
        name="name"
        placeholder="Votre nom"
        required
        className="bg-white"
      />
      <Input
        name="email"
        type="email"
        placeholder="Votre email"
        required
        className="bg-white"
      />
      <Input
        name="phone"
        placeholder="Votre numéro de téléphone"
        required
        className="bg-white"
      />
      <Input
        name="problematique"
        placeholder="Votre problématique (ex : épuisement aidant, entrée en institution…)"
        required
        className="bg-white"
      />
      <Textarea
        name="message"
        placeholder="Message complémentaire (optionnel)"
        className="min-h-[100px] bg-white"
      />
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Envoi en cours..." : "Prendre rendez-vous"}
      </Button>
    </form>
  );
}
