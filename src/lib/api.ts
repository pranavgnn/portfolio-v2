import { ContactFormData } from "@/types";

export const sendEmail = async (data: ContactFormData) => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    if (response.status === 404)
      throw new Error("API endpoint not found");

    throw new Error((await response.json()).message);
  }

  return response.json();
};
