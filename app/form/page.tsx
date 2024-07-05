import Navbar from "@/components/Navbar";
import { SignupFormDemo } from "@/components/ui/Form";
import StarsCanvas from "@/components/ui/StarBackground";
import React from "react";

const Saving = () => {
  return (
    <div>
      <Navbar />
      <main
        className=" relative bg-black-100 min-h-screen flex 
     justify-center items-center flex-col 
        mx-auto px-5 overflow-clip"
      >
        <StarsCanvas />
        <div className="max-w-7xl w-full z-20">
          <SignupFormDemo />
        </div>
      </main>
    </div>
  );
};

export default Saving;
