"use server";
// валидация, создание временного пользователя, создание и отдание ему ключа верификации.
//затем выполнение переходит на /registerStep2 и там создаётся нормальный пользователь

import { prisma } from "@/prisma";
import { FormState } from "@/types/auth";
import basicValidation from "@/utils/basicValidation";
import sendVerificationCode from "@/utils/sendVerivicationCode";
import createTemporaryUser from "@/utils/createTemporaryUser";

export default async function sendCode(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  //валидация
  const result = await basicValidation(
    formData.get("email") as string,
    formData.get("password") as string,
  );
  if (result.errors !== null) {
    return result;
  }
  const { email, password } = result.data;
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      data: {
        email,
        password,
        code: "",
        message: "",
        repeatPassword: "",
      },
      errors: ["Пользователь с таким email уже существует"],
    };
  } else {
    const temporaryUser = await createTemporaryUser(email, password);
    if (temporaryUser === null) {
      return {
        data: {
          email,
          password,
          code: "",
          message: "",
          repeatPassword: "",
        },
        errors: ["Ошибка создания пользователя"],
      };
    }

    const response = await sendVerificationCode(
      email,
      temporaryUser.verificationCode,
    );

    if (response.data === null) {
      console.log("code: ", temporaryUser.verificationCode);
      return {
        data: {
          email,
          password,
          code: "",
          repeatPassword: "",
          message: `Не смог отправить верификационный код: ${response.error}`, // тут теперь даже в случае ошибки успех, но это временно.
        },
        errors: null,
      };
    }

    return {
      data: {
        ...result.data,
        message: "Перенаправление...",
      },
      errors: null,
    }; // выполнится только в случае если пользователь успешно создан и код успешно отправлен
  }
}
