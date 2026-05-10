import { Cards } from "./modules/cards";
import { CreateAccount } from "./modules/createAccount";
import { Greeting } from "./modules/greeting";
import { Way } from "./modules/way";
export default function Home() {
  return (
    <>
      <div className="mx-4">
        <Greeting />
        <Cards />
        <Way />
        <CreateAccount />
      </div>
    </>
  );
}
