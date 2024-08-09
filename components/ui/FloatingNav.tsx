// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import Link from "next/link";
// import { cn } from "@/utils/cn";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   // set true for the initial state so that nav bar is visible in the hero section
//   const [visible, setVisible] = useState(true);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         // also set true for the initial state
//         setVisible(true);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           // change rounded-full to rounded-lg
//           // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
//           // change  pr-2 pl-8 py-2 to px-10 py-5
//           "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
//           className
//         )}
//
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             {/* add !cursor-pointer */}
//             {/* remove hidden sm:block for the mobile responsive */}
//             <span className=" text-sm !cursor-pointer">{navItem.name}</span>
//           </Link>
//         ))}
//         {/* remove this login btn */}
//         {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
//           <span>Login</span>
//           <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
//         </button> */}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";
import logo from "../../assets/logoo.png";
import Image from "next/image";
import Navbar from "../Navbar";
import { socialMedia } from "@/data";
import { RiMenu2Fill } from "react-icons/ri";
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [nav, setNav] = useState(false);
  return (
    <div className="  ">
      <AnimatePresence mode="wait">
        <div
          className="  fixed z-[5000] top-1 md:top-0 flex-1 flex md:justify-center justify-between inset-x-0 px-3 md:px-5 py-5  border-b shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:space-x-8"
          style={{
            backdropFilter: "blur(18px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
          }}
        >
          <div className=" xl:pr-32 flex items-center justify-center">
            <div className=" bg-white-100 rounded-md flex justify-center items-center ">
              <Image src={logo} alt="" />
            </div>
          </div>

          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative items-center p-1 dark:text-neutral-50 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" text-sm !cursor-pointer text-center md:flex hidden">
                {navItem.name}
              </span>
            </Link>
          ))}
          <div onClick={() => setNav(!nav)} className=" md:hidden inline-flex">
            <RiMenu2Fill className=" text-3xl" />
          </div>


{
  nav && (
    <AnimatePresence mode="wait">
    <div
      className=" h-screen  bg-black-100 fixed z-[5000] top-1 md:top-0    inset-x-0 px-3  py-5  border-b shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] "
      style={{
        backdropFilter: "blur(18px) saturate(180%)",
       
      }}
    >
      <div className="  flex  items-center justify-between">
        <div className=" bg-white-100 rounded-md flex justify-center items-center ">
          <Image src={logo} alt="" />
        </div>

        <div onClick={() => setNav(!nav)} className=" md:hidden inline-flex">
        <RiMenu2Fill className=" text-3xl" />
      </div>
      </div>

      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            " items-center  flex-col justify-center my-12 p-1 dark:text-neutral-50 flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          {/* add !cursor-pointer */}
          {/* remove hidden sm:block for the mobile responsive */}
          <span className=" text-sm justify-center !cursor-pointer flex flex-col text-center ">
            {navItem.name}
          </span>
        </Link>
      ))}
    




      <div className=" flex gap-4  justify-center items-center  ">
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
  </AnimatePresence>
  )
}

          <div className=" md:flex gap-4 flex-row hidden justify-center items-center xl:pl-32 lg:pl-20 ">
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
      </AnimatePresence>
    </div>
  );
};
