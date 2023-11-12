import ServerComponent from "@/client/components/Home/ServerComponent";
import ServerAction from "@/client/components/Home/ServerAction";
import HomeLayout from "@/client/layouts/HomeLayout";
import { helloServer, sayHelloAction } from "@/server/actions/hello";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  const hello = await helloServer();

  return (
    <HomeLayout>
      <main className={twMerge("min-h-[500px] w-full grid place-items-center")}>
        <div className={twMerge("flex flex-col gap-2 justify-center")}>
          <h1 className="text-3xl text-center">Hello From Next 14</h1>
          <div className="grid grid-cols-2 gap-2">
            <ServerComponent hello={hello} />
            <ServerAction sayHello={sayHelloAction} />
          </div>
        </div>
      </main>
    </HomeLayout>
  );
}
