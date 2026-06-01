import { TwoInputForm } from "@/modules/twoInputForm";
import createTemporaryUser from "@/app/register/createTemporaryUser";

export default function RegisterPage(): React.ReactElement {
  return (
    <TwoInputForm
      titleProps={{ title: "Регистрация", description: "" }}
      formProps={{
        buttonText1: "Регистрация...",
        buttonText2: "Зарегистрироваться",
        handlerSubmit: createTemporaryUser,
        urlForRedirect: "/confirmEmail",
        label: ["E-mail", "Пароль"],
      }}
      linksProps={{
        linkText: "Уже есть аккаунт?",
        linkHref: "/login",
      }}
      showFooter={true}
    />
  );
}
