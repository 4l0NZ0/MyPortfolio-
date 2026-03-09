import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactSchema } from "$lib/schemas/contact";
import { z } from "zod/v3";

import { fail } from "@sveltejs/kit";

// Define outside the load function so the adapter can be cached
const schema = z.object({
  name: z.string().default("Hello world!"),
  email: z.string().email(),
});

export const load = async () => {
  const form = await superValidate(zod(schema));

  // Always return { form } in load functions
  return { form };
};
