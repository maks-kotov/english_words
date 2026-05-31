import { AuthModal } from "@/modules/authModal";
import createTemporaryUser from "@/modules/authModal/server_actions/createTemporaryUser";

export default function RegisterPage(): React.ReactElement {
  return (
    <AuthModal
      title="Регистрация"
      formProps={{
        buttonText1: "Регистрация...",
        buttonText2: "Зарегистрироваться",
        handlerSubmit: createTemporaryUser,
        urlForRedirect: "/confirmEmail",
      }}
      linksProps={{
        linkText: "Уже есть аккаунт?",
        linkHref: "/login",
      }}
    />
  );
}
