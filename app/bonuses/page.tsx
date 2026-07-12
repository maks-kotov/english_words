import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Bonuses() {
  return (
    <Dialog open={true}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle className="text-center text-3xl">
            Ежедневный бонус
          </DialogTitle>
          <DialogDescription className="text-center text-lg">
            Заходите каждый день, чтобы цепочка не прервалась
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          Вы будете получать монетки если будете заходить каждый день и рубины
          если будете заходить 7 дней подряд. Монеты позволяют покупать вещи в
          магазине, рубины позволяют покупать вещи, а также использовать
          подсказки.
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
