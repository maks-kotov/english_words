import { AuthForm } from "@/modules/authForm";
import sendCode from "./sendCode";

export default function ForgotPasswordStep1(): React.ReactElement {
  return (
    <AuthForm
      titleProps={{
        title: "Подтверждение E-mail",
        description:
          "Введите почту на которую будет отправлен код, подтверждающий что почта принадлежит вам.",
      }}
      formProps={{
        buttonText1: "Отправление...",
        buttonText2: "Отправить",
        handlerSubmit: sendCode,
        urlForRedirect: "/forgotPasswordStep2",
        labels: ["Ваша почта"],
        names: ["email", "password", "code"], //password и code использоваться не будут.
        types: ["email", "hidden", "hidden"],
      }}
      linksProps={{ linkHref: "", linkText: "" }}
      showFooter={false}
    />
  );
}
