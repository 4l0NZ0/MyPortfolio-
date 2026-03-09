import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactSchema } from "$lib/schemas/contact";
import { fail } from "@sveltejs/kit";

export const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    return message(form, "Form posted succesfully");
  },
};
