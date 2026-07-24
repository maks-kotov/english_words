import { Button } from "@/components/ui/button";
import { InputV2 } from "@/components/ui/input";

export default function LearnMode(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
      <div className="border-border border pt-12 pb-4 px-6 rounded-lg bg-card md:col-span-8 md:order-2 xl:col-span-10">
        <p className="text-center mb-2 text-4xl">🐱</p>
        <p className="text-center mb-8 text-2xl">Кот</p>
        <div className="max-w-100 mx-auto">
          <InputV2
            placeholder="Перевод..."
            className="border-0 border-b-2 border-border bg-transparent rounded-none mb-8"
          />
          <div className="flex justify-between mb-8">
            <Button
              size={"sm"}
              className="
              bg-secondary
              text-secondary-foreground
              lg:bg-transparent
              lg:text-secondary
              lg:border
              lg:border-secondary/50
              hover:bg-secondary
              hover:text-secondary-foreground
              cursor-pointer">
              Назад
            </Button>
            <Button
              size={"sm"}
              className="
              bg-primary
              text-secondary-foreground
              lg:bg-transparent
              lg:border
              lg:border-primary/50
              lg:text-primary
              hover:bg-primary
              hover:text-secondary-foreground
              cursor-pointer">
              Вперёд
            </Button>
          </div>
        </div>
        <p className="text-light text-sm text-center cursor-pointer">
          Подсказка (️️♦️)
        </p>
      </div>
      <ul
        className="
      flex
      flex-col
      justify-between
      md:col-span-4
      md:order-1
      md:bg-card
      md:rounded-lg
      md:p-4
      md:gap-y-4
      xl:col-span-2">
        <div>
          <li className="flex justify-between mb-6">
            Тема: <b>Животные</b>
          </li>
          <li className="flex justify-between mb-6">
            Прогресс: <b>3/5 слов</b>
          </li>
        </div>
        <div>
          <li className="flex justify-between items-center mb-6 md:text-sm">
            🔁 Этап: <b className="md:text-sm">3/7</b>
          </li>
          <li className="flex justify-between items-center mb-6 md:text-sm">
            ⏳ Повтор: <b className="md:text-xs">через 7 дней</b>
          </li>
          <Button
            className="hidden mx-auto md:block"
            variant="destructiveV2"
            size={"sm"}>
            Завершить
          </Button>
        </div>
        <hr className="md:hidden" />
      </ul>
      <div className="border border-border pt-4 pb-24 px-8 relative rounded-lg bg-card md:col-span-12 md:order-3">
        <p className="mb-4 text-center">Примеры употребления</p>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-3 gap-2">
          <li>My ... is said meow</li>
          <li>The ... is a very cute animal</li>
        </ul>
        <p className="absolute bottom-4 right-4 text-xs">🔥 12-й день подряд</p>
      </div>
      <div className="text-center md:hidden">
        <Button variant="destructiveV2" size={"lg"}>
          Завершить
        </Button>
      </div>
    </div>
  );
}
