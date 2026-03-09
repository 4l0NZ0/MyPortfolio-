import { z } from "zod/v3";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
});
