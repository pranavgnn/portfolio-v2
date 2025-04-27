import { Resend } from "resend";
import { z } from "zod";

import { ContactFormData } from "../src/types";

import type { Request, Response } from "express";

if (!process.env.PROD)
  (async () => {
    (await import("dotenv")).config();
  })();

const { RESEND_API_KEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

// Had to repeat this schema here because of stupid import issues
// FIXME: Figure out a  way to fix this later
const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" })
    .max(500, { message: "Message must be at most 500 characters long" }),
});

const resend = new Resend(RESEND_API_KEY);

export default async (req: Request, res: Response) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, message }: ContactFormData = req.body;

  try {
    contactSchema.parse({ name, email, message });
  } catch (error: any) {
    return res.status(400).json({ message: error.errors[0].message });
  }

  try {
    // TODO: Maybe use a react template for the email to make it look better
    await resend.emails.send({
      from: `Contact Form <${SENDER_EMAIL}>`,
      replyTo: email,
      to: [RECEIVER_EMAIL!],
      cc: [email],
      subject: `New message from ${name}`,
      html: `<p>${message}</p><p>${name}<br/>${email}</p>`,
    });

    return res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
};
