import { Button } from "@/components/ui/button";

export default function Card({
  title,
  bonusIsGetted,
  money,
  canTakeBonus,
}: {
  title: string;
  bonusIsGetted: boolean;
  money: string;
  canTakeBonus: boolean;
}): React.ReactElement {
  return (
    <div className="border border-border flex flex-col justify-between p-2 h-40 max-w-30 relative">
      <div className="flex justify-between">
        <p className="text-sm">{title}</p>
        <p className="text-sm">{bonusIsGetted && "✅"}</p>
      </div>
      <p className="text-xl">{money}</p>
      <div className="h-8">
        {canTakeBonus && (
          <Button className="absolute bottom-0 left-0 right-0 rounded-none py-1.5">
            Забрать
          </Button>
        )}
      </div>
    </div>
  );
}
