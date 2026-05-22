import Link from "next/link";
import { LinksProps } from "../../types";

export default function Links({ linksProps }: { linksProps: LinksProps }) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={linksProps.linkHref}
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        {linksProps.linkText}
      </Link>
      <Link
        href="#"
        className="mx-auto inline-block text-sm underline-offset-4 hover:underline text-light">
        Забыли пароль?
      </Link>
    </div>
  );
}
