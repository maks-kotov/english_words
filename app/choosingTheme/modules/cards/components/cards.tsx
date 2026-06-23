import Card from "./ui/card";

export default function Cards(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
      <Card //я не должен хардкодить много карточек
        icon="🐱"
        title="Животные"
        countWords={24}
        progress="4/7"
        repeatAfter={14}
      />
    </div>
  );
}
