"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlinks = ({ path, text }) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <>
      <Link href={path} className={`${isActive ? 'text-orange-500 font-bold': ''}`}>{text}</Link>
    </>
  );
};

export default Navlinks;
