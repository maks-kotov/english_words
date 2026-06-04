import { AuthForm } from "@/modules/authForm";
import hanlder from "./hanlder";

export default function ForgotPasswordStep1(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{
        title: "Смена пароля",
        description: "",
      }}
      formProps={{
        buttonText1: "Отправление...",
        buttonText2: "Отправить",
        handlerSubmit: hanlder,
        urlForRedirect: "/login",
        labels: ["Введите новый пароль", "Подтвердите новый пароль"],
        names: ["password", "repeatPassword", "email"],
        types: ["password", "password", "hidden"],
      }}
      linksProps={{ linkHref: "", linkText: "" }}
      showFooter={false}
    />
  );
}
