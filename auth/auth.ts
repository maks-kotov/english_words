import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/prisma";
import bcrypt from "bcryptjs";
class EMAIL_NOT_FOUND extends CredentialsSignin {
  code = "Пользователь с таким email не найден";
}
class PASSWORD_NOT_FOUND extends CredentialsSignin {
  code = "Пользователь с таким паролем не найден";
}
class ERROR_OF_TYPES extends CredentialsSignin {
  code = "E-mail или пароль имеют не тот тип данных";
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "credentials",
      authorize: async (credentials) => {
        const { email, password } = credentials;
        if
        (
          typeof email !== "string"
          ||
          typeof password !== "string"
        ) throw new ERROR_OF_TYPES(); //вынужденная проверка на тип поступаемых данных, скорее вссего никогда не выполнится

        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (user === null) {
          throw new EMAIL_NOT_FOUND();
        }
        const passwordsIsMatches = await bcrypt.compare(
          password,
          user.password,
        ); //сверка пароля из формы и хэшированного пароля из бд (boolean)
        if (!passwordsIsMatches) {
          throw new PASSWORD_NOT_FOUND();
        }
        return credentials;
      },
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  pages: {
    // signIn: ""
  }
});
