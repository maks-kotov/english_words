export type FormState = {
  errors: string[] | null; // errors = null в случaе успеха
  data: {
    // data никогда не равна null, errors равна null в случае успеха
    email: string; // для валидации
    password: string; // для валидации
    message: string; // чтоб показать успех в форме
    code: string;
    repeatPassword: string;
  };
};
export type FormProps = {
  buttonText1: string;
  buttonText2: string;
  handlerSubmit: (
    prevState: FormState,
    formData: FormData,
  ) => Promise<FormState>;
  urlForRedirect: string;
  labels: string[];
  names: Array<"email" | "password" | "code" | "repeatPassword">; //=data.email, data.password, data.repeatPassword, data.code
  types: Array<"text" | "email" | "password" | "hidden">;
};
export type TitleProps = {
  title: string;
  description: string;
};
export type LinksProps = {
  linkText: string;
  linkHref: string;
};
