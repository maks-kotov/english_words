"use server";

import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { redirect } from "next/navigation";

const RegisterSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Пароль должен быть минимум 6 символов"),
});

export type RegisterFormState = {
  success?: boolean;
  errors?: {
    email?: string[];
    password?: string[];
    _form?: string;
  };
};

export default async function registerUser(
  prevState: RegisterFormState,
  formData: FormData,
): Promise<RegisterFormState> {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = RegisterSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      errors: {
        email: ["Пользователь с таким email уже существует"],
      },
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
  } catch (error) {
    return {
      success: false,
      errors: {
        _form: "Ошибка при создании пользователя",
      },
    };
  }

  redirect("/login");
}
