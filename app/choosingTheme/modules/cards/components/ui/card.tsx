import { Button } from "@/components/ui/button";
import Link from "next/link";
interface props {
  icon: string;
  title: string;
  countWords: number;
  progress: string;
  repeatAfter: number;
}
export default function Card({
  icon,
  title,
  countWords,
  progress,
  repeatAfter,
}: props): React.ReactElement {
  return (
    <div className="w-full max-w-80 border border-border py-8 px-6 rounded-lg">
      <div className="mb-3 text-4xl">{icon}</div>
      <div className="mb-3 text-2xl font-bold">{title}</div>
      <div className="mb-12 text-lg font-bold">{countWords} слов</div>
      <div className="mb-3 text-md">📊 Прогресс: {progress}</div>
      <div className="mb-6 text-md">⏳ Повтор через: {repeatAfter} дней</div>
      <Link href={"/learnMode"}>
        <Button className="w-full text-lg py-2.5 lg:bg-transparent lg:text-primary lg:border-2 lg:border-primary hover:bg-primary hover:text-primary-foreground ">
          Выбрать
        </Button>
      </Link>
    </div>
  );
}
