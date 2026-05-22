import Image from "next/image";
import google from "@/public/google.png";
import github from "@/public/github.png";
export default function OAuths() {
  return (
    <div className="flex justify-center gap-8 mb-6">
      <div className="flex flex-col items-center">
        <Image className="w-8 mx-auto" src={google} alt="google" />
        <p className="text-xs text-light">Войти с Google</p>
      </div>
      <div className="flex flex-col items-center">
        <Image className="w-8 mx-auto" src={github} alt="github" />
        <p className="text-xs text-light">Войти с GitHub</p>
      </div>
    </div>
  );
}
