import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Auth_greeting(): Promise<React.ReactElement> {
  return (
    <section className="mb-12 md:mb-12 lg:mb-8 text-center">
      <div className="flex flex-row flex-wrap items-center justify-between gap-4 mb-8 md:mb-8 lg:mb-8">
        <h1 className="text-3xl text-start">👋 Привет, максон</h1>
        <p className="text-light text-start lg:hidden">🔥 12 дней</p>
      </div>
      <Link href={"/choosingTheme"} className="lg:hidden">
        <Button>
          <span className="text-lg">🚀</span>
          <span className="text-lg">Начать учиться</span>
        </Button>
      </Link>
    </section>
  );
}
