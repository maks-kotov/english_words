"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  // SheetClose,
  SheetContent,
  // SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Session } from "next-auth";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CircleUserRound, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header({
  session,
}: {
  session: Session | null;
}): React.ReactElement {
  // const isMobile = useMediaQuery("(max-width: 320px)");
  const router = useRouter();
  return (
    <header className="w-full h-20 bg-secondary flex justify-between items-center px-4 md:px-12 lg:px-12 text-secondary-foreground border-b border-border">
      <div className="flex items-center gap-x-2 cursor-pointer">
        <span className="text-4xl">🐙</span>
        <span className="text-xl">EnglishWords</span>
      </div>
      {session === null ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="outline-none">
            <div>
              <div className="w-10 h-10 rounded-full bg-border cursor-pointer "></div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" aria-description="Вход">
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => {
                  if (session !== null) {
                    signOut();
                  } else {
                    router.push("/login");
                  }
                }}
                className="group cursor-pointer relative">
                <div className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 bg-secondary  transition-all duration-200 opacity-0 group-hover:opacity-100" />
                <div className="flex items-center gap-x-2 transition-transform duration-200 group-hover:translate-x-2">
                  <LogOut className="text-foreground" />
                  <span>Войти</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="text-2xl">☰</SheetTrigger>
              <SheetContent
                side="top"
                showCloseButton={false}
                className="text-center">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl tracking-wide">
                    Меню
                  </SheetTitle>
                  <div className="flex flex-col items-center gap-y-2">
                    <Link className="tracking-widest" href={"#"}>
                      Магазин
                    </Link>
                    <Link className="tracking-widest" href={"#"}>
                      Настройки
                    </Link>
                    <Link className="tracking-widest" href={"#"}>
                      Бонусы
                    </Link>
                    <Link className="tracking-widest" href={"#"}>
                      Профиль
                    </Link>
                    <Link
                      onClick={() => signOut()}
                      className="tracking-widest"
                      href={"#"}>
                      Выйти
                    </Link>
                  </div>
                  {/* <SheetDescription>This action cannot be undone.</SheetDescription> */}
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex gap-x-4 lg:gap-x-16 items-center">
            <Link className="cursor-pointer" href={"#"}>
              Настройки
            </Link>
            <Link className="cursor-pointer" href={"#"}>
              Магазин
            </Link>
            <Link className="cursor-pointer" href={"#"}>
              Бонусы
            </Link>
            <Link className="cursor-pointer" href={"#"}>
              12 🥮
            </Link>
            <Link className="cursor-pointer" href={"#"}>
              3 ♦️
            </Link>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="outline-none">
                <div>
                  <div className="w-10 h-10 rounded-full bg-border cursor-pointer "></div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" aria-description="Вход">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="group cursor-pointer relative">
                    <div className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 bg-secondary  transition-all duration-200 opacity-0 group-hover:opacity-100" />
                    <div className="flex items-center gap-x-2 transition-transform duration-200 group-hover:translate-x-2">
                      <CircleUserRound className="text-foreground" />
                      <span>Профиль</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      if (session !== null) {
                        signOut();
                      } else {
                        router.push("/login");
                      }
                    }}
                    className="group cursor-pointer relative">
                    <div className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 bg-secondary  transition-all duration-200 opacity-0 group-hover:opacity-100" />
                    <div className="flex items-center gap-x-2 transition-transform duration-200 group-hover:translate-x-2">
                      <LogOut className="text-foreground" />
                      <span>Выйти</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </header>
  );
}
