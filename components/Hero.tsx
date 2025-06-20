import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TexstGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="  md:pt-20">
      <div>
        <Spotlight
          className=" -top-40 -left-10 md:-left-32 md:-top-20 
              h-screen"
          fill="white"
        />

        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />

        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white 
      
      dark:bg-grid-white/[0.04] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center  
        
        justify-center dark:bg-black-100 bg-white  
        
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className=" flex justify-center relative md:my-20 z-10">
        <div className=" max-w-[9 md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            created by: amadi sixtus tochukwu
          </h2>

          <TextGenerateEffect
            words="Grade Point (GP) Tracking Mangement System"
            className="text-center text-[35px] mb-4 md:mb-0 md:text-5xl lg:text-6xl"
          />



          <a href="/result" className=" w-full mt-6 md:w-fit px-8 md:px-0 md:mt-0">
            <MagicButton
              title="Track Your Result"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
