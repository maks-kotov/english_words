import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Unauth_greeting(): Promise<React.ReactElement> {
  return (
    <section className=" mb-16 text-center ">
      <h1 className="text-3xl mb-4">👋 Привет, друг!</h1>
      <p className="max-w-64 mb-8 mx-auto text-light sm:max-w-max">
        Освой английские слова легко и с удовольствием
      </p>
      <Link href={"/login"}>
        <Button>
          <span className="text-lg">🚀</span>
          <span className="text-lg">Начать учиться</span>
        </Button>
      </Link>
    </section>
  );
}
