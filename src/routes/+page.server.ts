import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactSchema } from "$lib/schemas/contact";
import { fail } from "@sveltejs/kit";
import { RESEND_API_KEY, EMAIL_ADDRESS } from "$env/static/private";
import { Resend } from "resend";

export const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};

const resend = new Resend(RESEND_API_KEY);

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));
    //USed for debugging purposes
    console.log(form);

    if (!form.valid) {
      return fail(400, { form });
    }

    const { name, email, usermessage } = form.data;
    //send the email
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [EMAIL_ADDRESS],
      subject: "inquiry",
      text: usermessage,
    });
    if (error) {
      console.log(error);
      return message(
        form,
        "Somethin went wrong sending the email. Try again later.",
      );
    }

    //if form valid submit

    return message(form, "Form posted successfully");
  },
};
