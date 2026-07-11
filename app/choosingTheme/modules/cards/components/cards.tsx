import Link from "next/link";
import Card from "./ui/card";
export default function Cards(): React.ReactElement {
  return (
    <div className="grid justify-items-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-30 gap-8 mb-16">
      <div className="w-full max-w-80  border border-border py-8 px-6 rounded-lg overflow-hidden relative">
        <div className="mt-6 sm:mt-12 mb-6 text-2xl font-bold">
          Создать новую тему
        </div>
        <Link
          href={"/createTheme"}
          className="sticky z-1 bg-secondary lg:bg-transparent lg:text-secondary inline-block border border-secondary/50 px-4 pt-1 pb-2 rounded-sm mx-auto hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 ease-out mb-35 sm:mb-0">
          <span className="bold text-4xl">+</span>
        </Link>
        <div
          className=" bg-primary/85 w-80 h-80 rounded-full absolute
        bottom-[-140px]
        right-[-120px]"></div>
      </div>
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
