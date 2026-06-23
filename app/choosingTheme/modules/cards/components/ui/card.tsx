import { Button } from "@/components/ui/button";

export default function Card(): React.ReactElement {
  return (
    <div className="w-full border border-border py-8 px-6 rounded-lg">
      <div className="mb-3 text-4xl">🐱</div>
      <div className="mb-3 text-2xl font-bold">Животные</div>
      <div className="mb-12 text-lg font-bold">24 слова</div>
      <div className="mb-3 text-md">📊 Прогресс: 4/7</div>
      <div className="mb-6 text-md">⏳ Повтор через: 14 дней</div>
      <Button className="w-full text-lg">Выбрать</Button>
    </div>
  );
}
