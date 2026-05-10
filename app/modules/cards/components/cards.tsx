import Card from "./ui/card";

export default function Cards() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-xl mb-4">Что ждёт тебя внутри:</h2>
      <div className="grid grid-cols-1 gap-y-4">
        <Card
          icon="🧠"
          title="Умные повторения"
          description="Алгоритм 1→3→7→14"
        />
        <Card
          icon="📊"
          title="Статистика прогресса"
          description="Следи за успехами"
        />
        <Card
          icon="🎮"
          title="Геймификация"
          description="Зарабатывай монетки"
        />
      </div>
    </section>
  );
}
