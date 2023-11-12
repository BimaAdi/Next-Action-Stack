import * as context from "next/headers";
import { twMerge } from "tailwind-merge";
import { auth } from "@/server/auth/lucia";
import {
  helloServer,
  protectedHelloServer,
  protectedSayHelloAction,
  sayHelloAction,
} from "@/server/actions/hello";
import ServerAction from "@/client/components/Home/ServerAction";
import ServerComponent from "@/client/components/Home/ServerComponent";
import ProtectedServerComponent from "@/client/components/Home/ProtectedServerComponent";
import ProtectedServerAction from "@/client/components/Home/ProtectedServerAction";

export default async function Home() {
  const authRequest = auth.handleRequest("GET", context);
  const session = await authRequest.validate();
  const hello = await helloServer();
  const msg = await protectedHelloServer(session?.user);

  return (
    <main className={twMerge("min-h-[500px] w-full grid place-items-center")}>
      <div className={twMerge("flex flex-col gap-2 justify-center")}>
        <h1 className="text-3xl text-center">Hello From Next 14</h1>
        <div className="grid grid-cols-2 gap-2">
          <ServerComponent hello={hello} />
          <ServerAction sayHello={sayHelloAction} />
          <ProtectedServerComponent msg={msg} />
          <ProtectedServerAction sayHello={protectedSayHelloAction} />
        </div>
      </div>
    </main>
  );
}
