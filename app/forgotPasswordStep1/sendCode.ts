"use server";
import { prisma } from "@/prisma";
import { FormState } from "@/types/auth";
import createTemporaryUser from "@/modules/authForm/utils/createTemporaryUser";
import sendVerificationCode from "@/modules/authForm/utils/sendVerivicationCode";
//получаю email, проверяю есть ли пользователь с таким email, если есть отправляю на него код и возвращаю state с успехом, если нету, то возвращаю state с ошибкой
export default async function sendCode(
  prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const userIsExist = await prisma.temporaryUser.findUnique({
    //существует ли пользователь в бд
    where: { email },
  });
  if (userIsExist) {
    // сложный момент: мы удаляем предыдущего временного пользователя с введённым в input email (кодом которого являлся код для подтверждения email для регистрации) и создаём нового (кодом которого является код для подтверждения email для смены пароля) чтобы смочь получить его в forgotPasswordStep2. когда создаём временного для регистрации - ему обязательно нужен пароль для регистрации постоянного пользователя. когда создаём временного для смены пароля - ему не нужен пароль (он будет на следующей странице создаваться уже постоянный.) поэтому поле пароль у временного пользователя - может быть null
    const temporaryUser = await createTemporaryUser(email, null); // создаётся пользователь, код задаётся там же
    if (temporaryUser === null) {
      return {
        data: {
          email,
          password: "",
          code: "",
          message: "",
          repeatPassword: "",
        },
        errors: ["Ошибка создания пользователя"],
      };
    }
    const response = await sendVerificationCode(
      // отправляем код на почту пользователю
      email,
      temporaryUser.verificationCode,
    );
    if (response.data === null) {
      // при ошибке отправки кода ему на почту
      console.log("code: ", temporaryUser.verificationCode);
      return {
        data: {
          email,
          password: "",
          code: "",
          repeatPassword: "",
          message: `Не смог отправить верификационный код: ${response.error}`, // тут теперь даже в случае ошибки успех, но это временно.
        },
        errors: null,
      };
    }
    return {
      // мы смогли создать временного пользователя и отправить верификационный код
      data: {
        email,
        password: "",
        code: "",
        message: "Перенаправление...",
        repeatPassword: "",
      },
      errors: null,
    };
  } else {
    // ну тут вроде ясно что за ошибка
    return {
      data: {
        email,
        password: "",
        code: "",
        message: "",
        repeatPassword: "",
      },
      errors: ["Пользователь с таким e-mail не существует"],
    };
  }
}
