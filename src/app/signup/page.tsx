import SignUp from "@/client/components/Home/SignUp";
import HomeLayout from "@/client/layouts/HomeLayout";
import { signUpAction } from "@/server/actions/auth";
import { twMerge } from "tailwind-merge";

const Page = async () => {
  return (
    <HomeLayout>
      <main className={twMerge("min-h-[500px] w-full grid place-items-center")}>
        <div className={twMerge("flex flex-col gap-2 justify-center")}>
          <SignUp signUp={signUpAction} />
        </div>
      </main>
    </HomeLayout>
  );
};

export default Page;
