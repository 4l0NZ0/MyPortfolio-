import { z } from "zod/v3";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email.").trim(),
  usermessage: z.string().trim().min(10, "Please enter a message."),
});
