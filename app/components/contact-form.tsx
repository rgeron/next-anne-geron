import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message.");
      }
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-6" style={{ fontFamily: "Agrandir" }}>
        Contactez-moi !
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Nom et prénom
          </label>
          <Input
            id="name"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Numéro de téléphone
          </label>
          <Input
            id="phone"
            placeholder="Votre numéro de téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          placeholder="Votre message"
          className="min-h-[150px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </Button>
    </form>
  );
}
