import { AuthForm } from "@/modules/authForm";
import registerStep1 from "@/app/registerStep1/registerStep1";

export default function RegisterStep1(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{ title: "Регистрация", description: "" }}
      formProps={{
        buttonText1: "Регистрация...",
        buttonText2: "Зарегистрироваться",
        handlerSubmit: registerStep1,
        urlForRedirect: "/registerStep2",
        labels: ["E-mail", "Пароль"],
        names: ["email", "password", "code"],
        types: ["email", "password", "hidden"],
      }}
      linksProps={{
        linkText: "Уже есть аккаунт?",
        linkHref: "/login",
      }}
      showFooter={true}
    />
  );
}
