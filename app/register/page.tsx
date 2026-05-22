import { AuthModal } from "@/modules/authModal";
import register from "@/modules/authModal/server_actions/register";

export default function RegisterPage(): React.ReactElement {
  return (
    <AuthModal
      title="Регистрация"
      formProps={{
        buttonText1: "Регистрация...",
        buttonText2: "Зарегистрироваться",
        message: "Регистрация прошла успешно",
        handlerSubmit: register,
        urlForRedirect: "/login",
      }}
      linksProps={{
        linkText: "Уже есть аккаунт?",
        linkHref: "/login",
      }}
    />
  );
}
