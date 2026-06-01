import Link from "next/link";
import { LinksProps } from "@/types/auth";

export default function Links({
  linkHref,
  linkText,
}: LinksProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={linkHref}
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        {linkText}
      </Link>
      <Link
        href="#"
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        Забыли пароль?
      </Link>
    </div>
  );
}
