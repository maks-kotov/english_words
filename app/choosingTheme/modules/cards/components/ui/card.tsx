import { Button } from "@/components/ui/button";
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
    <div className="w-full border border-border py-8 px-6 rounded-lg">
      <div className="mb-3 text-4xl">{icon}</div>
      <div className="mb-3 text-2xl font-bold">{title}</div>
      <div className="mb-12 text-lg font-bold">{countWords} слов</div>
      <div className="mb-3 text-md">📊 Прогресс: {progress}</div>
      <div className="mb-6 text-md">⏳ Повтор через: {repeatAfter} дней</div>
      <Button className="w-full text-lg">Выбрать</Button>
    </div>
  );
}
