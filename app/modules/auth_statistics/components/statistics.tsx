import Card from "./ui/card";

export default async function Statistics(): Promise<React.ReactElement> {
  return (
    <section className="mb-16 md:mb-24 lg:mb-12 text-center ">
      <div className="grid grid-cols-1 mt:6 md:mt-8 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-[repeat(9,min-content)] items-center lg:justify-between">
        <Card icon="📚" title="8 тем создано" />
        <div className="h-4 w-0.5 bg-border hidden lg:block"></div>{" "}
        {/* разделитель */}
        <Card icon="✅" title="124 слова выучено" />
        <div className="h-4 w-0.5 bg-border hidden lg:block"></div>
        <Card icon="🤓" title="2 темы рекомендуется повторить" />
        <div className="h-4 w-0.5 bg-border hidden lg:block"></div>
        <Card icon="⏱️" title="Последний раз: сегодня" />
        <div className="h-4 w-0.5 bg-border hidden lg:block"></div>
        <div className="hidden lg:block">
          <Card icon="🔥" title="12 дней подряд" />
        </div>
      </div>
    </section>
  );
}
