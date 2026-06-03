"use server";
import { FormState } from "@/types/auth";
import createTemporaryUser from "@/utils/createTemporaryUser";

export default async function getEmail(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const temporaryUser = await createTemporaryUser(email, null);
  if (temporaryUser === null) {
    return {
      data: { email, password: "", code: "", message: "", localStorage: null },
      errors: ["Ошибка создания пользователя"],
    };
  }

  // sendVerificationCode()
  // сложный момент: мы удаляем предыдущего временного пользователя с введённым в input email (кодом которого являлся код для подтверждения email для регистрации) и создаём нового (кодом которого является код для подтверждения email для смены пароля) чтобы смочь получить его в странице куда нас перенаправит. когда создаём временного для регистрации - ему обязательно нужен пароль для регистрации постоянного пользователя. когда создаём временного для смены пароля - ему не нужен пароль (он будет на следующей странице создаваться уже постоянный.) поэтому поле пароль у временного пользователя - может быть null
  return {
    data: { email, password: "", code: "", message: "", localStorage: null },
    errors: ["†††††††чекай лог†††††††"],
  };
}
