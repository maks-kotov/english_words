import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
type temporaryUser = {
  email: string;
  id: string;
  password: string | null;
  verificationCode: string;
  codeExpiresAt: Date;
  createdAt: Date;
};
export default async function createTemporaryUser(
  email: string,
  password: string | null,
): Promise<temporaryUser | null> {
  await prisma.temporaryUser.deleteMany({ where: { email } }); //удаляем если такой временный пользователь уже есть (пробовал зарегаться или восстановить пароль и бросил)
  const verificationCode = String(Math.floor(100000 + Math.random() * 900000));
  const codeExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 минут
  //создание временного пользователя
  if (password !== null) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const temporaryUser = await prisma.temporaryUser.create({
      data: {
        email,
        verificationCode,
        codeExpiresAt,
        password: hashedPassword,
      },
    });
    return temporaryUser;
  } else {
    const temporaryUser = await prisma.temporaryUser.create({
      data: {
        email,
        verificationCode,
        codeExpiresAt,
      },
    });
    return temporaryUser;
  }
}
