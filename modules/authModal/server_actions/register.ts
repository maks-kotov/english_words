"use server";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
import { FormState } from "@/modules/authModal/types";
import basicValidation from "@/modules/authModal/helpers/basicValidation";

export default async function register(
  prevState: FormState, //указываем prevState, который равен состоянию state по умолчанию. мы нигде его не используем, но useActionState всегда вызывает серверный экшн, передавая ему первым параметром state по умолчанию. если бы мы не указали его и написали бы просто formData, то была бы ошибка, поскольку первым параметром передастся state по умолчанию, а не formData.
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

  const existingUser = await prisma.user.findUnique({where: { email },});

  if (existingUser) {
    return {
      data: null,
      errors: ["Пользователь с таким email уже существует"]
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userCount = await prisma.user.count();
  const autoName = `user_${userCount}`;

  try {
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: autoName,
      },
    });
    return result; // возвращаем в случае успеха
  } catch (error) {
    return {
      data: null,
      errors: [`Ошибка при создании пользователя ${error}`]
    }
  }
}
