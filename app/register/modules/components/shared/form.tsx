"use client";

import { useActionState } from "react";
import registerUser, {
  type RegisterFormState,
} from "@/app/register/server_actions/registerUser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const initialState: RegisterFormState = {
  success: false,
  errors: {},
};

export default function Form() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" required />
        {state.errors?.email && (
          <div className="text-sm text-red-500">{state.errors.email[0]}</div>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="password">Пароль</Label>
        <Input id="password" name="password" type="password" required />
        {state.errors?.password && (
          <div className="text-sm text-red-500">{state.errors.password[0]}</div>
        )}
      </div>

      {state.errors?._form && (
        <div className="text-sm text-red-500 text-center">
          {state.errors._form}
        </div>
      )}

      <Button
        type="submit"
        disabled={isPending}
        className="font-normal tracking-wider">
        {isPending ? "Регистрация..." : "Зарегистрироваться"}
      </Button>
    </form>
  );
}
