import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
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
        if (typeof email !== "string" || typeof password !== "string")
          throw new ERROR_OF_TYPES(); //вынужденная проверка на тип поступаемых данных, скорее вссего никогда не выполнится

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (user === null) {
          throw new EMAIL_NOT_FOUND();
        }
        if (user.password === null) {
          throw new ERROR_OF_TYPES();
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
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
  pages: {
    // signIn: ""
  },
  session: { strategy: "jwt" }, // важно
});
