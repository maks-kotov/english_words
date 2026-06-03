import { OneInputForm } from "@/modules/oneInputForm";
import registerStep2 from "./registerStep2";

export default function RegisterStep2(): React.ReactElement {
  return (
    <OneInputForm
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
        names: ["code", "email"],
        types: ["text", "hidden"],
      }}
    />
  );
}
