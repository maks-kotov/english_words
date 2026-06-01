import { CreateEmailResponse, Resend } from "resend";

export default async function sendVerificationCode(
  email: string,
  verificationCode: string,
): Promise<CreateEmailResponse> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Ключ верификации",
    html: `<p>Здравствуйте!</p><p>Ваш ключ верификации: <strong>${verificationCode}</strong></p>`,
  });
  return response;
}
