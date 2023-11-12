"use client";
import { signOutAction } from "@/server/actions/auth";
import { useAction } from "next-safe-action/hook";
import Link from "next/link";

export default function Navbar({
  isLogin,
  signOut,
}: {
  isLogin: boolean;
  signOut: typeof signOutAction;
}) {
  const signOutAct = useAction(signOut);
  return (
    <div className="w-full min-h-[65px] flex p-5 bg-slate-900 text-slate-50">
      <ul className="flex justify-between items-center gap-4 text-white text-md">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {isLogin ? (
          <>
            <li
              className="hover:cursor-pointer"
              onClick={() => signOutAct.execute(null)}
            >
              SignOut
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
          </>
        )}
        <li>
          <Link href={"/protected"}>Protected Page</Link>
        </li>
      </ul>
    </div>
  );
}
