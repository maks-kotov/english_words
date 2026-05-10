import Step from "./ui/step";

export default function Way() {
  return (
    <section className="text-center mb-16">
      <h2 className="text-xl mb-4">Как это работает:</h2>
      <div className="grid grid-cols-1 gap-y-8">
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
