import { Button } from "@/components/ui/button";
import { InputV2 } from "@/components/ui/input";
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
import EmojiPicker from "./components/emojiPicker";

export default function CreateTheme(): React.ReactElement {
  const emojiCategories = {
    smiles: [
      "😊",
      "😂",
      "😍",
      "🤔",
      "😎",
      "😭",
      "🥳",
      "🤩",
      "😇",
      "😈",
      "🤯",
      "🥺",
    ],
    nature: [
      "⭐",
      "🔥",
      "🌊",
      "🌈",
      "🌸",
      "🌿",
      "🐱",
      "🐶",
      "🦊",
      "🐼",
      "🍕",
      "🍣",
    ],
    objects: [
      "💡",
      "🎨",
      "📚",
      "🔬",
      "💻",
      "⌨️",
      "🖊️",
      "📈",
      "🏀",
      "🎸",
      "🎮",
      "🚀",
    ],
    travel: [
      "🚗",
      "✈️",
      "🌍",
      "🌋",
      "🏝️",
      "🏔️",
      "🗽",
      "🏯",
      "🛸",
      "🧭",
      "🎡",
      "⛵",
    ],
    achievements: [
      "🏆",
      "🎯",
      "🔑",
      "💎",
      "💪",
      "🧠",
      "🤝",
      "🌟",
      "🎖️",
      "🏅",
      "📌",
      "💯",
    ],
    extra: [
      "📝",
      "🔔",
      "🛠️",
      "📎",
      "📂",
      "📋",
      "⏳",
      "⏰",
      "🧩",
      "☕",
      "🍿",
      "🧘",
    ],
  };
  return (
    <div className="mt-8 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl mb-8 font-bold">Создание новой темы</h1>
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
      <h2 className="text-2xl mb-8 font-bold">Добавить слова и переводы</h2>
      <Table className="mb-4">
        <TableHeader>
          <TableRow>
            <TableHead className="font-normal">Слово</TableHead>
            <TableHead className="font-normal">Перевод</TableHead>
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
            <div className="py-0 px-2 flex items-center gap-1 bg-muted hover:border hover:border-border cursor-pointer rounded-[min(var(--radius-md),8px)]">
              <Smile width={"13px"} />
              <p className="text-xs font-bold">Выбрать эмодзи</p>
            </div>
          </PopoverTrigger>
          <PopoverContent side="top" align="start">
            <PopoverHeader>
              <PopoverTitle className="text-center text-lg font-bold">
                Список эмодзи
              </PopoverTitle>
              <PopoverDescription className="text-center text-xs text-light mb-4">
                Рекомендуется выбрать тот, который подходит под вашу тему слов
              </PopoverDescription>
              <div className="flex flex-col gap-2 text-center">
                <EmojiPicker
                  emojiesArray={emojiCategories.smiles}
                  title="Смайлы и эмоции:"
                />
                <EmojiPicker
                  emojiesArray={emojiCategories.nature}
                  title="Природа, животные, еда"
                />
                <EmojiPicker
                  emojiesArray={emojiCategories.objects}
                  title="Наука, работа и хобби"
                />
                <EmojiPicker
                  emojiesArray={emojiCategories.travel}
                  title="Транспорт, путешествия и места"
                />
                <EmojiPicker
                  emojiesArray={emojiCategories.achievements}
                  title="Достижения, цели и статусы"
                />
                <EmojiPicker
                  emojiesArray={emojiCategories.extra}
                  title="Дополнительные"
                />
              </div>
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
          <Button size={"sm"} className="w-30" variant={"successV2"}>
            Создать
          </Button>
        </div>
      </div>
    </div>
  );
}
