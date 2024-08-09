"use client";
import React, { useState } from "react";
import { navItems } from "@/data";
import { socialMedia } from "@/data";
import Link from "next/link";
import logo from "../assets/logoo.png";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" relative">
      <div
        className="  flex z-50 fixed justify-between w-full p-4 items-center md:px-12 border-b shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  "
        style={{
          backdropFilter: "blur(18px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
        }}
      >
        <div className=" bg-white-100 rounded-md shadow-md">
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

        <div className="md:flex items-center md:gap-3 gap-6 hidden">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
        <RiMenu2Fill
          onClick={() => setOpen(!open)}
          className=" text-3xl block md:hidden"
        />
      </div>

      {open && (
        <div
          className=" z-50 flex flex-col h-screen fixed justify-between w-full p-4 items-center  border-b shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  "
          style={{
            backdropFilter: "blur(18px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
          }}
        >
          <div className=" container flex justify-between items-center  ">
            <div className=" bg-white-100 rounded-md shadow-md  ">
              <Image src={logo} alt="logo" />
            </div>

            <div onClick={() => setOpen(!open)} className=" text-4xl">
             
            <IoIosCloseCircleOutline />
            </div>
          </div>

          <div className="  gap-8 cursor-pointer flex flex-col">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className=" text-center gap-12"
              >
                <span className="text-xl !cursor-pointer text-center">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </div>

          <div className=" items-center flex md:gap-3 gap-6 ">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
