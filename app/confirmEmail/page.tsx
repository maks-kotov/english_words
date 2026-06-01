import { OneInputForm } from "@/modules/oneInputForm";
import createRegularUser from "./createRegularUser";

export default function ConfirmEmailPage(): React.ReactElement {
  return (
    <OneInputForm
      titleProps={{
        title: "Подтверждение E-mail",
        description:
          "На почту ХХХ был отправлен 6-значный код. Введите его в поле ниже.",
      }}
      formProps={{
        buttonText1: "Подтверждение...",
        buttonText2: "Подтвердить",
        handlerSubmit: createRegularUser,
        urlForRedirect: "/login",
        label: ["Код верификации"],
      }}
    />
  );
}
