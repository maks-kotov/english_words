import Step from "./ui/step";

export default function Way() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-2xl mb-4">Как это работает:</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
        <Step
          num="1"
          title="Создай тему"
          description="Добавь слова, которые хочешь выучить"
        />
        <Step
          num="2"
          title="Учи слова"
          description="Отвечай на вопросы и получай результат"
        />
        <Step
          num="3"
          title="Повторяй"
          description="Система напомнит, когда пора повторить"
        />
        <Step
          num="4"
          title="Развивайся"
          description="Следи за прогрессом и открывай достижения"
        />
      </div>
    </section>
  );
}
