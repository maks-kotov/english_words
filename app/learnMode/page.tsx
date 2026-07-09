import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LearnMode(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
      <div className="border-border border pt-12 pb-4 px-6 rounded-lg">
        <p className="text-center mb-2 text-4xl">🐱</p>
        <p className="text-center mb-8 text-2xl">Кот</p>
        <Input
          placeholder="Перевод..."
          className="border-0 border-b-2 border-border bg-transparent rounded-none mb-8"
        />
        <div className="flex justify-between mb-8">
          <Button variant="destructive" size={"sm"} className="max-w-full">
            Назад
          </Button>
          <Button variant="success" size={"sm"} className="max-w-full">
            Вперёд
          </Button>
        </div>
        <p className="text-light text-center">Подсказка (️️♦️)</p>
      </div>
      <ul className="grid grid-cols-1 gap-y-6">
        <li className="flex justify-between">
          Тема: <b>Животные</b>
        </li>
        <li className="flex justify-between">
          Прогресс: <b>3/5 слов</b>
        </li>
        <li className="flex justify-between">
          Этап: <b>3/7</b>
        </li>
        <li className="flex justify-between">
          Повтор: <b>через 7 дней</b>
        </li>
        <hr />
      </ul>
      <div className="border border-border pt-4 pb-24 px-8 relative rounded-lg">
        <p className="mb-4 text-center">Примеры употребления</p>
        <ul className="list-disc">
          <li className="mb-2">My ... is said meow</li>
          <li className="mb-2">The ... is a very cute animal</li>
        </ul>
        <p className="absolute bottom-4 right-4 text-xs">🔥 12-й день подряд</p>
      </div>
      <div className="text-center mb-8">
        <Button variant="destructiveV2" size={"lg"}>
          Завершить
        </Button>
      </div>
    </div>
  );
}
