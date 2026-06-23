import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Cards } from "./modules/cards";

export default function ChoosingTheme(): React.ReactElement {
  return (
    <div className="mt-8 text-center">
      <h1 className="text-3xl mb-4">Выбери тему для обучения</h1>
      <div className="relative mb-8">
        <Search className="absolute top-4 right-2 h-4" />
        <Input placeholder="Поиск темы..." />
      </div>
      <Cards />
    </div>
  );
}
