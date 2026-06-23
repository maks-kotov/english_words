import { auth } from "@/auth/auth";
import { Cards } from "./modules/unauth_cards";
import { CreateAccount } from "./modules/unauth_createAccount";
import { Unauth_greeting } from "./modules/unauth_greeting";
import { Way } from "./modules/unauth_way";
import { Auth_greeting } from "./modules/auth_greeting";
import { Statistics } from "./modules/auth_statistics";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default async function Home(): Promise<React.ReactElement> {
  const session = await auth();
  return (
    <>
      <div className="mt-8">
        {session === null ? (
          <>
            <Unauth_greeting />
            <Cards />
            <Way />
            <CreateAccount />
          </>
        ) : (
          <div>
            <Auth_greeting />
            <Statistics />
            <div className="hidden lg:block text-center">
              <Link href={"/choosingTheme"}>
                <Button className="mb-24">
                  <span className="text-lg">🚀</span>
                  <span className="text-lg"> Начать учиться</span>
                </Button>
              </Link>
            </div>
            {/* </div> */}
          </div>
        )}
      </div>
    </>
  );
}
