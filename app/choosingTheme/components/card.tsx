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
      <div className="mb-12 text-lg font-semibold">{countWords} слов</div>
      <div className="mb-3 text-base">📊 Прогресс: {progress}</div>
      <div className="mb-6 text-base">⏳ Повтор через: {repeatAfter} дней</div>
      <Link href={"/learnMode"}>
        <Button className="w-full text-lg py-2.5">Выбрать</Button>
      </Link>
    </div>
  );
}
