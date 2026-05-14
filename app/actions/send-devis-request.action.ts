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
  const typeLabel = isFormation ? "Formation" : "Conférence";

  const specificField = isFormation
    ? { label: "Public visé", value: data.formationType }
    : { label: "Taille de l'audience", value: data.audienceSize };

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- En-tête -->
          <tr>
            <td style="background-color:#2c3e2d;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 4px 0;color:#c9b99a;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Anne Géron</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:normal;letter-spacing:1px;">Demande de devis — ${typeLabel}</h1>
              <p style="margin:12px 0 0 0;color:#a8b8a9;font-size:12px;">Reçu via le formulaire de devis du site internet</p>
            </td>
          </tr>

          <!-- Corps -->
          <tr>
            <td style="padding:36px 40px;">

              <!-- Section contact -->
              <p style="margin:0 0 16px 0;color:#2c3e2d;font-size:13px;text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #c9b99a;padding-bottom:8px;">Coordonnées</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Nom</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Organisation</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${data.organization}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Adresse e-mail</p>
                    <p style="margin:0;font-size:16px;"><a href="mailto:${data.email}" style="color:#2c3e2d;text-decoration:none;">${data.email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Téléphone</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${data.phone}</p>
                  </td>
                </tr>
              </table>

              <!-- Section prestation -->
              <p style="margin:0 0 16px 0;color:#2c3e2d;font-size:13px;text-transform:uppercase;letter-spacing:2px;border-bottom:2px solid #c9b99a;padding-bottom:8px;">Détails de la prestation</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">${specificField.label}</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${specificField.value}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 3px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Lieu</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${data.location}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 0;">
                    <p style="margin:0 0 8px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Besoins spécifiques</p>
                    <div style="background-color:#f9f7f4;border-left:3px solid #c9b99a;padding:16px 20px;border-radius:0 4px 4px 0;">
                      <p style="margin:0;color:#2c2c2c;font-size:15px;line-height:1.7;">${data.requirements.replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Pied de page -->
          <tr>
            <td style="background-color:#f9f7f4;padding:20px 40px;border-top:1px solid #eeebe6;text-align:center;">
              <p style="margin:0;color:#aaaaaa;font-size:11px;line-height:1.6;">
                Ce message a été envoyé automatiquement depuis le formulaire de devis du site<br>
                <strong style="color:#888;">anne-geron.fr</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `
Demande de devis — ${typeLabel} — anne-geron.fr

COORDONNÉES
Nom : ${data.name}
Organisation : ${data.organization}
E-mail : ${data.email}
Téléphone : ${data.phone}

DÉTAILS DE LA PRESTATION
${specificField.label} : ${specificField.value}
Lieu : ${data.location}
Besoins spécifiques : ${data.requirements}

---
Ce message a été envoyé depuis le formulaire de devis du site anne-geron.fr.
  `.trim();

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Demande de devis ${typeLabel.toLowerCase()} — ${data.name}`,
      text,
      html,
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
