import React from 'react'

import { navItems } from "@/data";
import { socialMedia } from "@/data";
import Link from "next/link";
import logo from "../assets/logoo.png";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
const HeaderFor = () => {
  return (
    <div
    className=" flex z-50 fixed justify-between w-full p-4 items-center md:px-12 border-b shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  "
    style={{
      backdropFilter: "blur(18px) saturate(180%)",
      backgroundColor: "rgba(17, 25, 40, 0.75)",
    }}
  >
    <div className=" bg-white p-1 rounded-md shadow-md">
      <Image src={logo} alt="logo" />
    </div>
    <div className=" hidden md:flex gap-8 cursor-pointer">
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className=" text-center gap-12"
        >
          <span className="text-sm !cursor-pointer text-center">
            {navItem.name}
          </span>
        </Link>
      ))}
    </div>

    profile
  </div>
  )
}

export default HeaderFor