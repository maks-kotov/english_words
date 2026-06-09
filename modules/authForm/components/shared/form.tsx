"use client";
// это основное содержимое каждого модального окна для действий с акканутом (зарегестрироваться, войти, поменять пароль, подтвердить регистрацию)
// здесь есть 3 инпута.
// в каждом модальном окне виден либо 1 инпут, либо 2. третий всегда имеет type=hidden и нужен для передачи email в другие модалки
//когда пользователь вводит данные в инпут(ы) и нажимает отправить, то мы перенаправляем его на другую страницу с параметром email=state.data.email. это позволит другому модальному окну знать email этого пользователя и найти его в бд.

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/types/auth";
import { useRouter, useSearchParams } from "next/navigation";

export default function Form({
  buttonText1,
  buttonText2,
  urlForRedirect,
  handlerSubmit,
  labels,
  names,
  types,
}: FormProps): React.ReactElement {
  const router = useRouter();
  const inputEmail = useSearchParams().get("email"); // здесь мы получаем пришедший email

  let hiddenInputValue = "";

  if (inputEmail !== null) {
    hiddenInputValue = inputEmail;
  }

  const [state, formAction, isPending] = useActionState(handlerSubmit, {
    errors: [""],
    data: {
      email: "",
      password: "",
      code: "",
      message: "",
      repeatPassword: "",
    },
  });
  useEffect(() => {
    // будет отрабатывать при нажатии на кнопку
    if (state.errors === null) {
      router.push(`${urlForRedirect}?email=${state.data.email}`); // здесь передаём email при нажатии на кнопку
      router.refresh();
    }
  }, [state.errors, router, urlForRedirect, state.data.email]);

  return (
    <form noValidate action={formAction} className="flex flex-col">
      <div className="grid gap-2 mb-6">
        <Label>{labels[0]}</Label>
        <Input
          defaultValue={state.data?.[names[0]]}
          name={names[0]}
          type={types[0]}
          required
        />
      </div>

      {types[1] !== "hidden" && ( // чтоб не было отступа когда показывается 1 инпут🤓
        <div className="grid gap-2 mb-6">
          <Label>{labels[1]}</Label>
          <Input
            defaultValue={state.data?.[names[1]]}
            name={names[1]}
            type={types[1]}
            required
          />
        </div>
      )}
      <Input //скрытый, будет хранить значение ключа key, переданного параметром.
        value={hiddenInputValue}
        name={names[2]}
        type={types[2]}
        required
      />

      {state.errors !== null && ( //показываем ошибку
        <div className="text-sm text-destructive text-center mb-6">
          {state.errors[0]}
        </div>
      )}
      {state.errors === null && ( //показываем успех
        <div className="text-sm text-success text-center mb-6">
          {state.data.message}
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="font-normal tracking-wider">
        {isPending ? buttonText1 : buttonText2}
      </Button>
    </form>
  );
}
