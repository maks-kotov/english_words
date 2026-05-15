import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-xl mb-12">
        Готов начать своё путешествие в мир английского?
      </h2>
      <Link href={"/register"}>
        <Button>
          <span className="text-lg">✨</span>
          <span className="text-lg">Создать аккаунт</span>
        </Button>
      </Link>
    </section>
  );
}
