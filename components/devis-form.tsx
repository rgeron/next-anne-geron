"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { toast } from "sonner";

type DevisFormProps = {
  type: "formation" | "conference";
  onSubmit: (
    formData: FormData
  ) => Promise<{ error?: string; success?: boolean }>;
};

export function DevisForm({ type, onSubmit }: DevisFormProps) {
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await onSubmit(formData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Demande envoyée avec succès !");
      (document.getElementById("devis-form") as HTMLFormElement).reset();
    });
  }

  return (
    <form
      id="devis-form"
      action={handleSubmit}
      className="space-y-8 w-full max-w-3xl"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nom complet
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Votre nom"
              required
              className="h-10 text-sm bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="organization" className="text-sm font-medium">
              Organisation
            </label>
            <Input
              id="organization"
              name="organization"
              placeholder="Nom de votre organisation"
              required
              className="h-10 text-sm bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Votre email professionnel"
              required
              className="h-10 text-sm bg-white"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Téléphone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="Votre numéro de téléphone"
              required
              className="h-10 text-sm bg-white"
            />
          </div>
        </div>

        {type === "formation" && (
          <div className="space-y-2">
            <label htmlFor="formationType" className="text-sm font-medium">
              Type de formation
            </label>
            <Select name="formationType" required>
              <SelectTrigger className="h-10 text-sm bg-white">
                <SelectValue placeholder="Sélectionnez un type de formation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="intra">
                  Formation intra-entreprise
                </SelectItem>
                <SelectItem value="inter">
                  Formation inter-entreprises
                </SelectItem>
                <SelectItem value="custom">Formation sur mesure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {type === "conference" && (
          <div className="space-y-2">
            <label htmlFor="audienceSize" className="text-sm font-medium">
              Taille estimée de l'audience
            </label>
            <Select name="audienceSize" required>
              <SelectTrigger className="h-10 text-sm bg-white">
                <SelectValue placeholder="Sélectionnez une taille d'audience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Moins de 50 personnes</SelectItem>
                <SelectItem value="medium">50 à 200 personnes</SelectItem>
                <SelectItem value="large">Plus de 200 personnes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium">
            Date souhaitée
          </label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            className="h-10 text-sm bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="text-sm font-medium">
            Lieu
          </label>
          <Input
            id="location"
            name="location"
            placeholder={
              type === "formation"
                ? "Lieu de la formation"
                : "Lieu de la conférence"
            }
            required
            className="h-10 text-sm bg-white"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="requirements" className="text-sm font-medium">
            Besoins spécifiques
          </label>
          <Textarea
            id="requirements"
            name="requirements"
            placeholder={`Décrivez vos besoins spécifiques pour cette ${
              type === "formation" ? "formation" : "conférence"
            }`}
            className="min-h-[120px] text-sm bg-white"
            required
          />
        </div>

        <input type="hidden" name="type" value={type} />
      </div>

      <Button
        type="submit"
        className="w-full md:w-auto text-base px-8 py-2"
        disabled={isPending}
      >
        {isPending ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}
