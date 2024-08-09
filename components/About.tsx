import React from "react";
import { IoBagCheck } from "react-icons/io5";
import image1 from "../assets/exp1.svg";

const About = () => {
  return (
    <div>
     
      <div className=" ">
        <div className=" w-[50% ">
          <p className=" mt-24 font-medium">
            You dont have to worry about losing track of your results. We are
            here to take that worry away.
          </p>
          <div>
            <span className=" flex flex-col">
              <>
                <h1 className=" font-bold text-xl">
                  Safe keep of your results
                </h1>
                <p className=" mt-2">
                  With us your result and grades are safe and always handy
                  whereever you go
                </p>
              </>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
