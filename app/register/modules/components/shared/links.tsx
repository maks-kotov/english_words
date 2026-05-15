import Link from "next/link";

export default function Links() {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="#"
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        Уже есть аккаунт?
      </Link>
      <Link
        href="#"
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        Забыли пароль?
      </Link>
    </div>
  );
}
