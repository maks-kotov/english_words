import { TwoInputForm } from "@/modules/twoInputForm";
import login from "@/app/login/login";
// import registerUser from "@/modules/authModal/server_actions/registerUser";

export default function SignInPage(): React.ReactElement {
  return (
    <TwoInputForm
      titleProps={{ title: "Вход", description: "" }}
      formProps={{
        buttonText1: "Выполняю вход...",
        buttonText2: "Войти",
        handlerSubmit: login,
        urlForRedirect: "/",
        label: ["E-mail", "Пароль"],
      }}
      linksProps={{
        linkText: "Ещё нету аккаунта?",
        linkHref: "/register",
      }}
      showFooter={true}
    />
  );
}
