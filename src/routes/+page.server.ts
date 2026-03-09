import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactSchema } from "$lib/schemas/contact";

import { fail } from "@sveltejs/kit";

export const load = async () => {
  const form = await superValidate(zod(contactSchema));

  // Always return { form } in load functions
  return { form };
};
