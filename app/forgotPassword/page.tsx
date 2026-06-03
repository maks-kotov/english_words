import { OneInputForm } from "@/modules/oneInputForm";
import getEmail from "./getEmail";

export default function ForgotPassword(): React.ReactElement {
  return (
    <OneInputForm
      titleProps={{
        title: "Подтверждение E-mail",
        description:
          "Введите почту на которую будет отправлен код, подтверждающий что почта принадлежит вам.",
      }}
      formProps={{
        buttonText1: "Отправление...",
        buttonText2: "Отправить",
        handlerSubmit: getEmail,
        urlForRedirect: "/confirmADSADAADD",
        labels: ["Ваша почта"],
        names: ["email", "email"], //второй email использоваться не будет, я вынужден поставить его из-за типизации
        types: ["email", "hidden"],
      }}
    />
  );
}
