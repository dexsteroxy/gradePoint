import Navbar from "@/components/Navbar";
import { navItems } from "@/data";
import React from "react";

const Ticket = () => {
  return (
    <div>
      <div className="bg-black-100">
        <Navbar />
      </div>

      <div
        className="  flex 
    justify-center 
       mx-auto  px-3 md:px-5 bg-black-100 h-screen"
      >
        <div className=" mt-20">
          <h1 className=" text-white font-bold text-4xl text-center">
            About Us
          </h1>
          <p className=" mt-6 md:mt-12 leading-8 md:px-4 text-gray-200 md:text-center font-medium md:max-w-[670x] ">
            "The <span className=" text-purple">Result (GP)</span> Tracker offers a comprehensive solution for
            efficient result tracking. Simply provide your data, and our system
            will handle the rest, ensuring accurate and reliable monitoring of
            your academic performance."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
