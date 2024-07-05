"use client";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/ui/StarBackground"; // Ensure you have this component
import React, { useState } from "react";
import GridGlobe from "@/components/ui/GridGlobe";
import { FaUnlockAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
const Ticket = () => {
  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  return (
    <div className="bg-black-100 md:pb-32 min-h-screen">
      <Navbar />
      <StarsCanvas />
      <div className="pt-32 px-4 z-30 ">
        <h1 className="text-white font-bold text-4xl text-center">
          About this <span className="text-purple">Site</span>
        </h1>
        <p className="mt-6 beans md:mt-12  z-50 p-2 leading-8 md:px-4 text-gray-200 md:text-center font-medium md:max-w-[200x]">
          "The <span className="text-purple">Result (GP)</span> Tracker offers a
          comprehensive solution for efficient result tracking. Simply provide
          your data, and our system will handle the rest, ensuring
          <br /> accurate and reliable monitoring of your academic performance."
        </p>

        <div className="mt-12 z-30">
          <h2 className="font-semibold z-30 md:text-3xl text-xl text-center">
            FAQ
          </h2>
          <div className="flex flex-col -ml-8 md:-ml-0 md:flex-row items-start justify-between gap-x-6 container mx-auto">
            <div className="md:w-[50%] flex tochi mt-12 flex-col">
              {/* content div */}
              <div
                onClick={() => setQuestion1(question1)}
                className="lg:w-[550px] md:w-[500px] z-30 mb-4 xl:w-[620px] w-[288px] cursor-pointer justify-between  flex items-center h-12 bg-black-200 rounded-md border-[1px] border-gray-600"
              >
                <p className="items-center flex md:text-xl text-[16px] tracking-tight pl-6 text-gray-200 font-bold">
                  Is this app totally free to use
                </p>
                <span className=" mr-4"><FaLock /></span>
              </div>
              {/* reply */}
              {question1 && (
                <div className="bg-black-200 md:w-[500px] border-[1px] z-30 -mt-4 mb-4 rounded-md border-gray-600 xl:w-[620px] h-fit p-6 lg:w-[550px]">
                  <p>
                    Yes for now the <span className=" text-purple">Result Tracking management</span> is totally free
                    to use at any point in time
                  </p>
                </div>
              )}

              {/* content div */}
              <div
                onClick={() => setQuestion2(!question2)}
                className="lg:w-[550px] md:w-[500px] justify-between z-30 mb-4 xl:w-[620px] cursor-pointer flex items-center w-full h-12 bg-black-200 rounded-md border-[1px] border-gray-600"
              >
                <p className="items-center flex md:text-xl text-[16px] tracking-tight pl-6 text-gray-200 font-bold">
                  Safe keeping of your Results
                </p>

                <span className=" mr-4"><FaUnlockAlt /></span>
              </div>
              {/* reply */}
              {question2 && (
                <div className="bg-black-200 md:w-[500px] rounded-md border-[1px] z-30 -mt-4 mb-4 border-gray-600 xl:w-[620px] h-fit p-6 lg:w-[550px]">
                  <p>
                    with us, your Results and data are safe and always handy
                    wherever you go
                  </p>
                </div>
              )}

              {/* content div */}
              <div
                onClick={() => setQuestion3(!question3)}
                className="lg:w-[550px] md:w-[500px] justify-between z-30 mb-4 xl:w-[620px] cursor-pointer flex items-center w-full h-12 bg-black-200 rounded-md border-[1px] border-gray-600"
              >
                <p className="items-center flex md:text-xl text-[16px] tracking-tight pl-6 text-gray-200 font-bold">
                  Accuracy in calculation
                </p>

                <span className=" mr-4"><FaUnlockAlt /></span>
              </div>
              {/* reply */}
              {question3 && (
                <div className="bg-black-200 mb-4 border-[1px] md:w-[500px] z-30 rounded-md -mt-4 border-gray-600 xl:w-[620px] h-fit p-6 lg:w-[550px]">
                  <p>
                    Your results are been calculated using the general accepted
                    algorithm for calculating CGPA in all universities
                  </p>
                </div>
              )}
            </div>
            {/* GridGlobe will be here */}
            <div className="flex-shrink-0 bg-black-100 ">
              <GridGlobe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
