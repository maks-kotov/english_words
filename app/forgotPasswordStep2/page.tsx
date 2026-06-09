import { AuthForm } from "@/modules/authForm";
import confrimCode from "./confirmCode";

export default function ForgotPasswordStep1(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{
        title: "Подтверждение E-mail",
        description: "Введите код 6-значный код, отправленный на вашу почту.",
      }}
      formProps={{
        buttonText1: "Отправление...",
        buttonText2: "Отправить",
        handlerSubmit: confrimCode,
        urlForRedirect: "/forgotPasswordStep3",
        labels: ["Код верификации"],
        names: ["code", "password", "email"], //password использоваться не будeт.
        types: ["email", "hidden", "hidden"],
      }}
      linksProps={{ linkHref: "", linkText: "" }}
      showFooter={false}
    />
  );
}
