"use server";
import { prisma } from "@/prisma";
import { Prisma } from "@/prisma/generated/client";
import { FormState } from "@/types/auth";
import basicValidation from "@/utils/basicValidation";
import bcrypt from "bcryptjs";

export default async function changePassword(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // не смогу провалидировать repeatPassword но в принципе и не надо
  const result = await basicValidation(
    formData.get("email") as string,
    formData.get("password") as string,
  );
  const repeatPassword = formData.get("repeatPassword") as string;
  if (result.errors !== null) {
    return {
      data: {
        ...result.data,
        repeatPassword,
      },
      errors: result.errors,
    };
  }
  const { email, password } = result.data;

  if (password === repeatPassword) {
    try {
      const newHashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.update({
        where: { email },
        data: { password: newHashedPassword },
      });
      return {
        data: {
          email: email,
          password: password,
          repeatPassword: repeatPassword,
          code: "",
          message: "Пароль успешно изменён.",
        },
        errors: null,
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return {
            data: {
              email: email,
              password: "",
              repeatPassword: "",
              code: "",
              message: "",
            },
            errors: ["Пользователя с таким email не существует."],
          };
        }
      }
      return {
        data: {
          email: email,
          password: "",
          repeatPassword: "",
          code: "",
          message: "",
        },
        errors: ["Ошибка при смене пароля"],
      };
    }
  } else {
    return {
      data: {
        email: "",
        password,
        repeatPassword,
        code: "",
        message: "",
      },
      errors: ["Пароли не совпадают."],
    };
  }
}
