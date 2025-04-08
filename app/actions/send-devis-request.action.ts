"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APPLICATION_SECRET,
  },
});

const formationSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  organization: z.string().min(1, "L'organisation est requise"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  formationType: z.string().min(1, "Le type de formation est requis"),
  date: z.string().min(1, "La date est requise"),
  location: z.string().min(1, "Le lieu est requis"),
  requirements: z.string().min(1, "Les besoins spécifiques sont requis"),
  type: z.literal("formation"),
});

const conferenceSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  organization: z.string().min(1, "L'organisation est requise"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  audienceSize: z.string().min(1, "La taille de l'audience est requise"),
  date: z.string().min(1, "La date est requise"),
  location: z.string().min(1, "Le lieu est requis"),
  requirements: z.string().min(1, "Les besoins spécifiques sont requis"),
  type: z.literal("conference"),
});

const devisSchema = z.discriminatedUnion("type", [
  formationSchema,
  conferenceSchema,
]);

export async function sendDevisRequest(formData: FormData) {
  const type = formData.get("type") as "formation" | "conference";

  const validatedFields = devisSchema.safeParse({
    name: formData.get("name"),
    organization: formData.get("organization"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    ...(type === "formation"
      ? { formationType: formData.get("formationType") }
      : { audienceSize: formData.get("audienceSize") }),
    date: formData.get("date"),
    location: formData.get("location"),
    requirements: formData.get("requirements"),
    type,
  });

  if (!validatedFields.success) {
    console.error("Validation failed", validatedFields.error);
    return { error: "Validation échouée. Veuillez vérifier les champs." };
  }

  const data = validatedFields.data;
  const isFormation = data.type === "formation";

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nouvelle demande de devis pour ${
        isFormation ? "formation" : "conférence"
      } de ${data.name}`,
      text: `
        Demande de devis pour ${isFormation ? "formation" : "conférence"}
        
        Nom: ${data.name}
        Organisation: ${data.organization}
        Email: ${data.email}
        Téléphone: ${data.phone}
        ${
          isFormation
            ? `Type de formation: ${data.formationType}`
            : `Taille de l'audience: ${data.audienceSize}`
        }
        Date souhaitée: ${data.date}
        Lieu: ${data.location}
        Besoins spécifiques: ${data.requirements}
      `,
      html: `
        <h1>Demande de devis pour ${
          isFormation ? "formation" : "conférence"
        }</h1>
        
        <p><strong>Nom:</strong> ${data.name}</p>
        <p><strong>Organisation:</strong> ${data.organization}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phone}</p>
        <p><strong>${
          isFormation ? "Type de formation" : "Taille de l'audience"
        }:</strong> ${isFormation ? data.formationType : data.audienceSize}</p>
        <p><strong>Date souhaitée:</strong> ${data.date}</p>
        <p><strong>Lieu:</strong> ${data.location}</p>
        <p><strong>Besoins spécifiques:</strong> ${data.requirements}</p>
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return {
      error:
        error instanceof Error ? error.message : "Échec de l'envoi du mail",
    };
  }
}
