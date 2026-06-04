"use server";
import { FormState } from "@/types/auth";
import { prisma } from "@/prisma";

export default async function registerStep2(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const code = formData.get("code") as string;
  const temporaryUser = await prisma.temporaryUser.findUnique({
    where: { email },
  }); // чтоб получить доступ к отправленному коду, емайлу и паролю

  if (code === temporaryUser?.verificationCode) {
    const userCount = await prisma.user.count();
    const autoName = `user_${userCount}`;
    const regularUser = await prisma.user.create({
      data: {
        email,
        password: temporaryUser.password,
        name: autoName,
      },
    });
    if (regularUser === null) {
      return {
        data: {
          email: "",
          password: "",
          code,
          message: "",
          repeatPassword: "",
          sessionStorage: null,
        },
        errors: [`Ошибка создания пользователя`],
      };
    }
    return {
      data: {
        email: "",
        password: "",
        code,
        message: "Код верный.",
        repeatPassword: "",
        sessionStorage: null,
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
