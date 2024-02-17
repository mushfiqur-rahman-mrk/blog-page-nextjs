"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { signOut } from "firebase/auth";
import Navlinks from "@/utils/Navlinks";

const Navbar = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  console.log(user);

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };
  const handleLogout = () => {};

  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex justify-between py-5 items-center border-b-2">
        <div>
          <h1 className="font-bold text-xl">AJBlog</h1>
        </div>
        <div>
          <ul className="flex font-normal text-Grey text-lg gap-9">
            <li>
              <Navlinks text={"Home"} path={"/"}></Navlinks>
            </li>
            <li>
              <Navlinks text={"Blog"} path={"/blog"}></Navlinks>
            </li>
            <li>
              <Navlinks text={"Courses"} path={"/courses"}></Navlinks>
            </li>
          </ul>
        </div>
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="px-5 py-3 bg-orange-600 rounded-lg text-white"
          >
            Log out
          </button>
        ) : (
          <div className="flex justify-center items-center gap-7">
            <Link href={"/log-in"}>
              <p className="font-semibold text-lg text-Black">Log In</p>
            </Link>
            <Link href={"/register"}>
              <button className="px-9 py-3 rounded-full bg-black text-white font-semibold text-lg ">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
