import { AuthForm } from "@/modules/authForm";
import registerStep2 from "./registerStep2";

export default function RegisterStep2(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{
        title: "Подтверждение E-mail",
        description:
          "На вашу почту был отправлен 6-значный код. Введите его в поле ниже.",
      }}
      formProps={{
        buttonText1: "Подтверждение...",
        buttonText2: "Подтвердить",
        handlerSubmit: registerStep2,
        urlForRedirect: "/login",
        labels: ["Код верификации"],
        names: ["code", "password", "email"], // password не исопльзуeтся
        types: ["text", "hidden", "hidden"],
      }}
      showFooter={false}
      linksProps={{ linkHref: "", linkText: "" }}
    />
  );
}
