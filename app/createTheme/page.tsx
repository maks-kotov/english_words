import { Button } from "@/components/ui/button";
import { Input, InputV2 } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AutoResizeTextarea } from "@/components/ui/textarea";
import { Smile } from "lucide-react";

export default function CreateTheme(): React.ReactElement {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-3xl mb-8">Создание новой темы</h1>
      <div className="relative mb-4">
        <Label className="text-lg">Название темы:</Label>
        <InputV2 className="border-b-secondary"></InputV2>
        <span className="absolute bottom-3 right-0">✅</span>
      </div>
      <div className="relative mb-8">
        <Label className="text-lg">Количество слов:</Label>
        <InputV2 className="border-b-secondary"></InputV2>
        <span className="absolute bottom-3 right-0">✅</span>
      </div>
      <h2 className="text-2xl mb-8">Добавить слова и переводы</h2>
      <Table className="mb-4">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Слово</TableHead>
            <TableHead className="font-bold">Перевод</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <AutoResizeTextarea />
            </TableCell>
            <TableCell>
              <AutoResizeTextarea />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AutoResizeTextarea />
            </TableCell>
            <TableCell>
              <AutoResizeTextarea />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="text-start">
        <Popover>
          <PopoverTrigger className="mb-2 ">
            <Button variant={"ghost"} size={"xs"}>
              <Smile />
              <p className="text-xs">Выбрать эмодзи</p>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Title</PopoverTitle>
              <PopoverDescription>Description text here.</PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
        <p className="text-start text-light text-xs mb-8 max-w-40">
          Будет отображаться в карточке при выборе темы
        </p>
        <div className="flex justify-between mb-8">
          <Button size={"sm"} variant={"destructiveV2"} className="w-30">
            Отменить
          </Button>
          <Button size={"sm"} className="w-30">
            Создать
          </Button>
        </div>
      </div>
    </div>
  );
}
