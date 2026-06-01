"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormProps } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function Form({
  buttonText1,
  buttonText2,
  label,
  urlForRedirect,
  handlerSubmit,
}: FormProps): React.ReactElement {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(handlerSubmit, {
    errors: null,
    data: null,
  }); // объявляем хук useActionState. он нам предоставляет 3 переменные. state по умолчанию равен {success: false,errors: {}}, formAction равен registerUser, isPending по умолчанию равен false. когда мы заполнили форму и нажали на кнопку - выполняется функция registerUser, которая возвращает нам state в котором либо есть ошибки, либо нет, success либо true, либо false. в момент выполнения registerUser переменная isPending меняется на true. когда к нам приходит state - обновляется состояние формы на которой применялся серверный action и мы показываем либо ошибку, либо успех.
  useEffect(() => {
    if (state.data !== null) {
      sessionStorage.setItem("pendingEmail", state.data.email);
      router.push(urlForRedirect);
      router.refresh();
    }
  }, [state.data, router, urlForRedirect]);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form noValidate action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">{label[0]}</Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">{label[1]}</Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          required
        />
      </div>

      {state.errors !== null && ( //показываем ошибку
        <div className="text-sm text-destructive text-center">
          {state.errors[0]}
        </div>
      )}
      {state.data !== null && ( //показываем успех
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
