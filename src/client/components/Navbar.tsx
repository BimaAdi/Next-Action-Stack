import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full min-h-[65px] flex p-5 bg-slate-900 text-slate-50">
      <ul className="flex justify-between items-center gap-2 text-white text-md">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>SignUp</Link>
        </li>
      </ul>
    </div>
  );
}
