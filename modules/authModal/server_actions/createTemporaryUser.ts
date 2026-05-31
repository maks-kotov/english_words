"use server";
// валидация, создание временного пользователя, создание и отдание ему ключа верификации.
//затем выполнение переходит на /confirmEmail и там создаётся нормальный пользователь
import { Resend } from "resend";
import { prisma } from "@/prisma";
import { FormState } from "@/modules/authModal/types";
import basicValidation from "@/modules/authModal/helpers/basicValidation";
import bcrypt from "bcryptjs";

export default async function createTemporaryUser(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  //валидация
  const result = await basicValidation(
    formData.get("email") as string,
    formData.get("password") as string,
  );
  if (result.data === null) {
    return result; //возврат ошибки в form.tsx (функция вызывается там)
  }
  const { email, password } = result.data;
  const existingUser = await prisma.temporaryUser.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      data: null,
      errors: ["Пользователь с таким email уже существует"],
    };
  } else {
    await prisma.temporaryUser.deleteMany({ where: { email } }); //удаляем если такой временный пользователь уже есть (пробовал зарегаться и бросил)
    const verificationCode = String(
      Math.floor(100000 + Math.random() * 900000),
    );
    const codeExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 минут
    //создание временного пользователя
    const hashedPassword = await bcrypt.hash(password, 10);
    const temporaryUser = await prisma.temporaryUser.create({
      data: {
        email,
        password: hashedPassword,
        verificationCode,
        codeExpiresAt,
      },
    });
    if (temporaryUser === null) {
      return {
        data: null,
        errors: [`Ошибка создания пользователя`],
      };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Ключ верификации",
      html: `<p>Здравствуйте!</p><p>Ваш ключ верификации: <strong>${verificationCode}</strong></p>`,
    });
    if (response.data === null) {
      console.log("code: ", temporaryUser.verificationCode);
      return {
        data: {
          ...result.data,
          message: `Не смог отправить верификационный код: ${response.error}`, // тут теперь даже в случае ошибки успех, но это временно.
        },
        errors: null,
      };
    }

    return {
      data: { ...result.data, message: "Перенаправление..." },
      errors: null,
    }; // выполнится только в случае если пользователь успешно создан и код успешно отправлен
  }
}
