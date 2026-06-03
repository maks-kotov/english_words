"use client";

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
  const key = useSearchParams().get("key"); //имя ключа, переданного при редиректе
  let localStorageValue = "";

  if (key !== null) {
    const value = sessionStorage.getItem(key); // значение свойства у sessionStorage, заложенного туда перед редиректом сюда
    if (value !== null) {
      localStorageValue = value;
    }
  }

  const [state, formAction, isPending] = useActionState(handlerSubmit, {
    errors: [""],
    data: {
      email: "",
      password: "",
      code: "",
      message: "",
      localStorage: null,
    },
  });
  useEffect(() => {
    if (state.errors === null) {
      /*все варианты при нажатии кнопки
    если key === null && data.sessionStorage === null
   простой редирект
 
   если key === null && data.sessionStorage !== null
   редирект с параметром + присваивание item
 
   если key !== null && data.sessionStorage !== null
   редирект с параметром + переопределение item
 
   если key !== null && data.sessionStorage === null
  простой редирект + очищение item
     */
      if (key === null && state.data.localStorage === null) {
        router.push(urlForRedirect);
        router.refresh();
      }
      if (key === null && state.data.localStorage !== null) {
        sessionStorage.setItem(
          state.data.localStorage.key,
          state.data.localStorage.value,
        );
        router.push(`${urlForRedirect}?key=${state.data.localStorage.key}`);
        router.refresh();
      }
      if (key !== null && state.data.localStorage !== null) {
        sessionStorage.setItem(
          state.data.localStorage.key,
          state.data.localStorage.value,
        );
        router.push(`${urlForRedirect}?key=${state.data.localStorage.key}`);
        router.refresh();
      }
      if (key !== null && state.data.localStorage === null) {
        sessionStorage.removeItem(key);
        router.push(urlForRedirect);
        router.refresh();
      }
    }
  }, [state.data.localStorage, state.errors, router, urlForRedirect, key]);

  return (
    <form noValidate action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label>{labels[0]}</Label>
        <Input
          defaultValue={state.data?.[names[0]]}
          name={names[0]}
          type={types[0]}
          required
        />
      </div>

      <div className="grid gap-2">
        <Label>{labels[1]}</Label>
        <Input
          defaultValue={state.data?.[names[1]]}
          name={names[1]}
          type={types[1]}
          required
        />
      </div>
      <Input //скрытый, будет хранить значение ключа key, переданного параметром.
        value={localStorageValue}
        name={names[2]}
        type={types[2]}
        required
      />

      {state.errors !== null && ( //показываем ошибку
        <div className="text-sm text-destructive text-center">
          {state.errors[0]}
        </div>
      )}
      {state.errors === null && ( //показываем успех
        <div className="text-sm text-success text-center">
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
