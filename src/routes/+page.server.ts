import { superValidate, message } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { contactSchema } from "$lib/schemas/contact";
import { fail } from "@sveltejs/kit";
import {
  RESEND_API_KEY,
  EMAIL_ADDRESS,
  TEST_INVALID_KEY,
} from "$env/static/private";
import { Resend } from "resend";

export const load = async () => {
  const form = await superValidate(zod(contactSchema));
  return { form };
};

const resend = new Resend(RESEND_API_KEY);
//const resend = new Resend(TEST_INVALID_KEY);

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(contactSchema));
    //USed for debugging purposes
    //console.log(form);

    if (!form.valid) {
      // Will return fail(400, { form }) since form isn't valid

      return message(form, {
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    }

    const { name, email, usermessage } = form.data;
    //send the email
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [EMAIL_ADDRESS],
      subject: "inquiry",
      html: `
    <h2>New Contact Form Submission</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Message:</strong></p>
    <p>${usermessage}</p>
  `,
    });
    if (error) {
      console.log(error);
      return message(form, {
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    }

    //if form valid submit

    return message(form, {
      type: "success",
      text: "Message sent successfully!",
    });
  },
};
