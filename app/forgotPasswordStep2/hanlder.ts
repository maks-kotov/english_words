"use server";
import { FormState } from "@/types/auth";
import confirmCode from "@/utils/confirmCode";

export default async function hanlder(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const code = formData.get("code") as string;

  const codeIsMatch = await confirmCode(email, code);

  if (codeIsMatch) {
    return {
      data: {
        email: "",
        password: "",
        code,
        message: "Код верный.",
        repeatPassword: "",
        sessionStorage: { key: "email", value: email },
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
