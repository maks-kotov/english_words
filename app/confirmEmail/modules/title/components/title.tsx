import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Title(): React.ReactElement {
  return (
    <DialogHeader>
      <DialogTitle className="text-center text-xl font-bold">
        Подтверждение E-mail
      </DialogTitle>
      <DialogDescription>
        На почту ХХХ был отправлен 6-значный код. Введите его в поле ниже.
      </DialogDescription>
    </DialogHeader>
  );
}
