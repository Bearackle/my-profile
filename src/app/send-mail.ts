// "use server";
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY!);
// export async function sendMailAction(formData: FormData) {
//   const email = formData.get("email") as string;
//   const message = formData.get("message") as string;
//   const who = formData.get("who") as string;
//   const subject = formData.get("subject") as string;
//   const to = "dinhhuan1357@gmail.com";
//   const text = `Message from ${who} with email ${email} with subject ${subject}: ${message}`;
//   const html = `<p>Message from ${who} with email ${email} with subject ${subject}: ${message}</p>`;
//   try {
//     const data = await resend.emails.send({
//       from: "Connect Profile <onboarding@resend.dev>",
//       to,
//       subject,
//       text,
//       html,
//     });
//     return { success: true, data };
//   } catch (error) {
//     console.error(error);
//     return { success: false, error: JSON.stringify(error) };
//   }
// }
