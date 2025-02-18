import { sendEmail } from "@/app/actions/send-email.action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { agrandirRegular } from "@/lib/fonts";
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
    <form id="contact-form" action={onSubmit} className="space-y-8">
      <div
        className={`${agrandirRegular.className}  flex flex-col md:grid-cols-2 gap-6`}
      >
        <div className="space-y-3">
          <Input
            id="name"
            name="name"
            placeholder="Votre nom"
            required
            className="h-10 w-1/2 text-sm bg-white"
          />
        </div>
        <div className="space-y-3">
          <Input
            id="phone"
            name="phone"
            placeholder="Votre numéro de téléphone"
            required
            className="h-10 text-sm w-1/2 bg-white"
          />
        </div>
      </div>
      <div className="space-y-3">
        <Textarea
          id="message"
          name="message"
          placeholder="Votre message"
          className="min-h-[150px] text-sm w-2/3 bg-white"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full md:w-auto text-base h-8 px-8 "
        disabled={isPending}
      >
        {isPending ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  );
}
