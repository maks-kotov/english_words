"use server";
import { FormState } from "@/types/auth";
import basicValidation from "@/utils/basicValidation";
import { signIn } from "@/auth/auth";
import { CredentialsSignin } from "next-auth";

export default async function login(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = await basicValidation(
    formData.get("email") as string,
    formData.get("password") as string,
  );
  if (result.errors !== null) {
    return result;
  }
  const { email, password } = result.data;
  try {
    await signIn("credentials", { email, password, redirect: false }); // redirect прописан в form.tsx
    return {
      data: {
        email,
        password,
        code: "",
        message: "Вход выполнен успешно",
        repeatPassword: "",
        sessionStorage: null,
      },
      errors: null,
    };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        errors: [error.code],
        data: {
          email,
          password,
          code: "",
          message: "",
          repeatPassword: "",
          sessionStorage: null,
        },
      };
    }
    return {
      errors: [`Непредвиденная ошибка: ${error}`],
      data: {
        email,
        password,
        code: "",
        message: "",
        repeatPassword: "",
        sessionStorage: null,
      },
    };
  }
}
