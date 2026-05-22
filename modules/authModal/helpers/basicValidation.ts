import z from "zod";
import { FormState } from "../types";

export default async function basicValidation(
  email: string,
  password: string,
): Promise<FormState> {
  const RegisterSchema = z.object({
    email: z.email("Укажите корректный email"),
    password: z
      .string()
      .min(6, "Пароль должен содержать не менее 6 символов")
      .regex(/^[^<>]*$/, "Пароль не должен содержать символы < и >"),
  });

  const result = RegisterSchema.safeParse({ email, password });

  if (!result.success) {
    //result - объект со свойствами success, errors
    //result.success - boolean
    //result.errors - объект
    //result.errors.issues - массив вида:
    /* [
    { message: "Ошибка 1", path: ["email"], code: "invalid_type" },
    { message: "Ошибка 2", path: ["password"], code: "too_small" }
    ] */
    return {
      errors: result.error.issues.map((er) => er.message),
      data: null,
    };
  }
  return {
    errors: null,
    data: {
      email: result.data.email,
      password: result.data.password,
    },
  };
}
