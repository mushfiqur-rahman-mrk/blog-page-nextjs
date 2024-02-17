"use client";
import { AuthContext } from "@/utils/AuthProvider";
import GetAuth from "@/utils/getAuth";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = GetAuth();
  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <nav className="flex justify-between py-5 items-center border-b-2">
          <div>
            <h1 className="font-bold text-xl">AJBlog</h1>
          </div>
          <div>
            <ul className="flex font-normal text-Grey text-lg gap-9">
              <Link href="/">
                <li className="font-semibold text-lg text-Black">Home</li>
              </Link>
              <Link href="/blog">
                <li className="font-semibold text-lg text-Black">Blog</li>
              </Link>
              <Link href="/courses">
                <li className="font-semibold text-lg text-Black">Courses</li>
              </Link>
            </ul>
          </div>
          {user ? (
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
          ) : (
            <button
            onClick={handleLogout}
              className="px-5 py-3 bg-orange-600 rounded-lg"
             
            >
              hello
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
