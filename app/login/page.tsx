import { TwoInputForm } from "@/modules/twoInputForm";
import login from "@/app/login/login";

export default function SignInPage(): React.ReactElement {
  return (
    <TwoInputForm
      titleProps={{ title: "Вход", description: "" }}
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
