export type FormState = {
  errors: string[] | null; // errors = null в случaе успеха
  data: {
    // data = null в случaе ошибки
    email: string; // для валидации
    password: string; // для валидации
  } | null;
};
export type FormProps = {
  buttonText1: string;
  buttonText2: string;
  message: string;
  handlerSubmit: (
    prevState: FormState,
    formData: FormData,
  ) => Promise<FormState>;
  urlForRedirect: string
};
export type LinksProps = {
  linkText: string;
  linkHref: string;
};
