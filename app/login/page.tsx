import { AuthModal } from "@/modules/authModal";
import login from "@/modules/authModal/server_actions/login";
// import registerUser from "@/modules/authModal/server_actions/registerUser";

export default function SignInPage(): React.ReactElement {
  return (
    <AuthModal
      title="Вход"
      formProps={{
        buttonText1: "Выполняю вход...",
        buttonText2: "Войти",
        handlerSubmit: login,
        urlForRedirect: "/",
      }}
      linksProps={{
        linkText: "Ещё нету аккаунта?",
        linkHref: "/register",
      }}
    />
  );
}
