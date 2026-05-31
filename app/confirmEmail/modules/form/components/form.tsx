"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import createRegularUser from "../server_actions/createRegularUser";

export default function Form(): React.ReactElement {
  const router = useRouter();
  const [email, setEmail] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("pendingEmail") || "";
    }
    return ""; // значение по умолчанию для сервера
  });
  const [code, setCode] = useState<string>("");

  const [state, formAction, isPending] = useActionState(createRegularUser, {
    errors: null,
    data: null,
  }); // объявляем хук useActionState. он нам предоставляет 3 переменные. state по умолчанию равен {success: false,errors: {}}, formAction равен registerUser, isPending по умолчанию равен false. когда мы заполнили форму и нажали на кнопку - выполняется функция registerUser, которая возвращает нам state в котором либо есть ошибки, либо нет, success либо true, либо false. в момент выполнения registerUser переменная isPending меняется на true. когда к нам приходит state - обновляется состояние формы на которой применялся серверный action и мы показываем либо ошибку, либо успех.
  useEffect(() => {
    if (state.data !== null) {
      router.push("/login");
      router.refresh();
    }
  }, [state.data, router]);
  return (
    <form noValidate action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Код верификации</Label>
        <Input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          name="code"
          type="text"
          required
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="hidden"
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
          Успешная регистрация
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="font-normal tracking-wider">
        {isPending ? "Подтверждение..." : "Подтвердить"}
      </Button>
    </form>
  );
}
