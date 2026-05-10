import { Button } from "@/components/ui/button";

export default function CreateAccount() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-xl mb-8">
        Готов начать своё путешествие в мир английского?
      </h2>
      <Button className="w-full flex gap-x-1">
        <span className="text-lg">✨</span>
        <span>Создать аккаунт</span>
      </Button>
    </section>
  );
}
