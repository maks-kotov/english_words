import Card from "./ui/card";

export default function Cards() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-xl mb-4">Что ждёт тебя внутри:</h2>
      <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2  lg:grid-cols-3 lg:gap-x-16">
        <div className="w-72 place-self-center sm:place-self-end lg:place-self-center lg:w-full">
          <Card
            icon="🧠"
            title="Умные повторения"
            description="Алгоритм 1→3→7→14"
          />
        </div>
        <div className="w-72 place-self-center sm:place-self-start lg:place-self-center lg:w-full">
          <Card
            icon="📊"
            title="Статистика прогресса"
            description="Следи за успехами"
          />
        </div>
        <div className="w-72 place-self-center sm:col-span-2 lg:col-span-1 lg:w-full">
          <Card
            icon="🎮"
            title="Геймификация"
            description="Зарабатывай монетки"
          />
        </div>
      </div>
    </section>
  );
}
