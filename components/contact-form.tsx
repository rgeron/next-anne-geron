import { sendEmail } from "@/app/actions/send-email.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.error) {
        toast.error(result.error);
        return;
      }

      toast.success("Message envoyé avec succès !");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    });
  }

  return (
    <form id="contact-form" action={onSubmit} className="space-y-6">
      <h2 className="text-2xl mb-6" style={{ fontFamily: "Agrandir" }}>
        Contactez-moi !
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom et prénom
          </label>
          <Input id="name" name="name" placeholder="Votre nom" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Numéro de téléphone
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Votre numéro de téléphone"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Votre message"
          className="min-h-[150px]"
          required
        />
      </div>
      <Button type="submit" className="w-full md:w-auto" disabled={isPending}>
        {isPending ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  );
}
