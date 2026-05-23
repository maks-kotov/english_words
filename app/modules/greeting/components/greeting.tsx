import { auth } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Greeting(): Promise<React.ReactElement> {
  const session = await auth();
  console.log("session: ", session);

  return (
    <section className=" mb-16 text-center ">
      <h1 className="text-3xl mb-4">
        {session ? "Авторизован" : "👋 Привет, друг!"}
      </h1>
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
