"use client";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function AuthButton(): React.ReactElement {
  const session = useSession().data;
  console.log("authButton session: ", session);
  const router = useRouter();
  return (
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
        <span>{session ? "Выйти" : "Войти"}</span>
      </div>
    </DropdownMenuItem>
  );
}
