import { prisma } from "@/prisma";

export default async function confirmCode(
  email: string,
  code: string,
): Promise<boolean> {
  const temporaryUser = await prisma.temporaryUser.findUnique({
    where: { email },
  }); // получить код с бд
  console.log("input code: ", code);
  console.log("real code: ", temporaryUser?.verificationCode);
  if (code === temporaryUser?.verificationCode) {
    return true;
  } else {
    return false;
  }
}
