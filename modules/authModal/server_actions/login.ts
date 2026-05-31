"use server";
import { FormState } from "../types";
import basicValidation from "@/modules/authModal/helpers/basicValidation";
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
  if (result.data === null) {
    return result; //возврат ошибки в form.tsx если не прошёл базовую валидацию (функция вызывается там)
  }
  const { email, password } = result.data;
  try {
    await signIn("credentials", { email, password, redirect: false }); // redirect прописан в form.tsx
    return {
      data: { ...result.data, message: "Вход выполнен успешно" },
      errors: null,
    };
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        errors: [error.code],
        data: null,
      };
    }
    return {
      errors: [`непредвиденная ошибка: ${error}`],
      data: null,
    };
  }
}
