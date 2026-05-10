import { Button } from "@/components/ui/button";

export default function Greeting() {
  return (
    <section className="mt-8 mb-16 text-center ">
      <h1 className="text-3xl mb-4">👋 Привет, друг!</h1>
      <p className="max-w-64 mb-8 mx-auto text-light">
        Освой английские слова легко и с удовольствием
      </p>
      <Button className="w-full flex gap-x-1">
        <span className="text-lg">🚀</span>
        <span>Начать учиться</span>
      </Button>
    </section>
  );
}
