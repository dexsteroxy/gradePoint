


"use client";
import React from "react";
import { testimonials } from "@/data"; // Ensure this import is correct
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/ui/StarBackground";

const Testimonials: React.FC = () => {
  return (
    <section>
      <section id="testimonials" className="overflow-x-hidden bg-black-100 h-screen">
        <Navbar />
        <h1 className="heading mt-28  md:mt-36 ">
          Kind words from
          <span className="text-purple ml-2"> satisfied Students</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
       
          <div
            className="h-[80vh] -mt-28 md:-mt-0 md:h-[30rem] w-fit rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          >
            
            <InfiniteMovingCards
            //  {/* @ts-ignore*/}
              items={testimonials} // Ensure this matches the type expected
              direction="right"
              speed="slow"
            />
           
          </div>
        </div>
      </section>
      <StarsCanvas />
    </section>
  );
};

export default Testimonials;
