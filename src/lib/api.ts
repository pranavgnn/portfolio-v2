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
    throw new Error((await response.json())?.message || "Something went wrong");
  }

  return response.json();
};
