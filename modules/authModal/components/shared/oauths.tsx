"use client";
import Image from "next/image";
import google from "@/public/google.png";
import github from "@/public/github.png";
import { signIn } from "next-auth/react";
export default function OAuths(): React.ReactElement {
  return (
    <div className="flex justify-center gap-8 mb-6">
      <div
        onClick={() => signIn("google", { redirectTo: "/" })}
        className="flex flex-col items-center cursor-pointer">
        <Image className="w-8 mx-auto" src={google} alt="google" />
        <p className="text-xs text-light ">Войти с Google</p>
      </div>
      <div
        onClick={() => signIn("github", { redirectTo: "/" })}
        className="flex flex-col items-center cursor-pointer">
        <Image className="w-8 mx-auto" src={github} alt="github" />
        <p className="text-xs text-light">Войти с GitHub</p>
      </div>
    </div>
  );
}
