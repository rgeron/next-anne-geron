"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});

export async function sendEmail(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: "Validation failed" };
  }

  const { name, phone, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: "Anne Geron <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      subject: `New contact from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return {
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}
