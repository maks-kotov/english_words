import { AuthForm } from "@/modules/authForm";
import login from "@/app/login/login";

export default function SignInPage(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{ title: "Вход в аккаунт", description: "" }}
      formProps={{
        buttonText1: "Выполняю вход...",
        buttonText2: "Войти",
        handlerSubmit: login,
        urlForRedirect: "/",
        labels: ["E-mail", "Пароль"],
        names: ["email", "password", "code"],
        types: ["email", "password", "hidden"],
      }}
      linksProps={{
        linkText: "Ещё нету аккаунта?",
        linkHref: "/registerStep1",
      }}
      showFooter={true}
    />
  );
}
