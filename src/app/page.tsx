import { Button } from "@/client/components/ui/button";
import HomeLayout from "@/client/layouts/HomeLayout";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <HomeLayout>
      <main
        className={twMerge("min-h-[500px] w-full grid place-items-center")}
      >
        <div className={twMerge("flex flex-col gap-2 justify-center")}>
          <h1 className="text-xl">Hello From Next 14</h1>
          <Button variant={"default"}>Click Me</Button>
        </div>
      </main>
    </HomeLayout>
  );
}
