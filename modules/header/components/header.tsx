import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthButton from "./ui/authButton";
import { auth } from "@/auth/auth";

export default async function Header(): Promise<React.ReactElement> {
  const session = await auth();

  return (
    <header className="w-full h-20 bg-secondary flex justify-between items-center px-4 lg:px-12">
      <div className="flex items-center gap-x-2 text-secondary-foreground cursor-pointer">
        <span className="text-4xl">🐙</span>
        <span className="text-xl">EnglishWords</span>
      </div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="outline-none">
          <div>
            <div className="w-10 h-10 rounded-full bg-border cursor-pointer "></div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <AuthButton session={session} />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
