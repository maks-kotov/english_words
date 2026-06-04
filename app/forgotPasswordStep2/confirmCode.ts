"use server";
import { prisma } from "@/prisma";
import { FormState } from "@/types/auth";

export default async function confrimCode(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const code = formData.get("code") as string;

  const temporaryUser = await prisma.temporaryUser.findUnique({
    where: { email },
  });

  if (code === temporaryUser?.verificationCode) {
    return {
      data: {
        email: "",
        password: "",
        code,
        message: "Код верный.",
        repeatPassword: "",
        sessionStorage: { key: "email", value: email },
      },
      errors: null,
    };
  }
  return {
    data: {
      email: "",
      password: "",
      code,
      message: "",
      repeatPassword: "",
      sessionStorage: null,
    },

    errors: ["Неправильный код"],
  };
}
