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

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  problematique: z.string().min(1),
  message: z.string().optional(),
});

export async function sendConsultationEmail(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    problematique: formData.get("problematique"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: "Veuillez remplir tous les champs obligatoires." };
  }

  const { name, email, phone, problematique, message } = validatedFields.data;

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
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:normal;letter-spacing:1px;">Demande de consultation</h1>
              <p style="margin:12px 0 0 0;color:#a8b8a9;font-size:12px;">Reçu via le formulaire de prise de rendez-vous du site internet</p>
            </td>
          </tr>

          <!-- Corps -->
          <tr>
            <td style="padding:36px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 4px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Nom</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 4px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Adresse e-mail</p>
                    <p style="margin:0;font-size:16px;"><a href="mailto:${email}" style="color:#2c3e2d;text-decoration:none;">${email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eeebe6;">
                    <p style="margin:0 0 4px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Téléphone</p>
                    <p style="margin:0;color:#2c2c2c;font-size:16px;">${phone}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;${message ? "border-bottom:1px solid #eeebe6;" : ""}">
                    <p style="margin:0 0 8px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Problématique</p>
                    <div style="background-color:#f9f7f4;border-left:3px solid #c9b99a;padding:16px 20px;border-radius:0 4px 4px 0;">
                      <p style="margin:0;color:#2c2c2c;font-size:15px;line-height:1.7;">${problematique.replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>
                ${
                  message
                    ? `
                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0 0 8px 0;color:#8a8a8a;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message complémentaire</p>
                    <div style="background-color:#f9f7f4;border-left:3px solid #c9b99a;padding:16px 20px;border-radius:0 4px 4px 0;">
                      <p style="margin:0;color:#2c2c2c;font-size:15px;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
                    </div>
                  </td>
                </tr>`
                    : ""
                }
              </table>
            </td>
          </tr>

          <!-- Pied de page -->
          <tr>
            <td style="background-color:#f9f7f4;padding:20px 40px;border-top:1px solid #eeebe6;text-align:center;">
              <p style="margin:0;color:#aaaaaa;font-size:11px;line-height:1.6;">
                Ce message a été envoyé automatiquement depuis le formulaire de consultation du site<br>
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
Demande de consultation — anne-geron.fr

Nom : ${name}
E-mail : ${email}
Téléphone : ${phone}
Problématique : ${problematique}
${message ? `\nMessage complémentaire :\n${message}` : ""}

---
Ce message a été envoyé depuis le formulaire de consultation du site anne-geron.fr.
  `.trim();

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Demande de consultation — ${name}`,
      text,
      html,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to send consultation email:", error);
    return {
      error: error instanceof Error ? error.message : "Échec de l'envoi.",
    };
  }
}
