import StarsCanvas from "@/components/ui/StarBackground";
import Image from "next/image";
import React from "react";
import sixtus from "../../assets/sixtus.jpg";
import Navbar from "@/components/Navbar";
const Contact = () => {
  return (
    <div className=" bg-black-100 min-h-screen">
      <StarsCanvas />
      <Navbar />
      <div className=" flex items-center justify-center pt-32">
        <h2 className=" font-bold text-2xl capitalize md:text-4xl">
          Get in touch with me
        </h2>
      </div>
      {/* container */}
      <div className=" flex lg:flex-row flex-col items-center gap-12 justify-center  mx-auto lg:gap-32">
        <div className=" w-fit h-fit bg-black-200 mt-20 shadow-sm shadow-white-100 p-6">
          <Image
            src={sixtus}
            alt="Amadi Sixtus Image"
            className="h-[430px] w-[300px] rounded-md"
          />
        </div>
        <div className=" bg-black-200 p-6 h-fit w-full lg:w-fit rounded-md">
          <div className=" flex justify-center  flex-col gap-y-6">
            <div className=" flex z-30 gap-2">
              <h2 className=" font-semibold">My Name:</h2>
              <p className=" font-semibold text-purple">
                Amadi Sixtus Tochukwu
              </p>
            </div>

            <div className=" flex z-30 gap-2">
              <h2 className=" font-semibold">Work Email:</h2>
              <p className=" font-semibold text-purple">
                amaditochukwu11@gmail.com
              </p>
            </div>

            <div className=" flex z-30 gap-2">
              <h2 className=" font-semibold">Whatsapp Number</h2>
              <p className=" font-semibold text-purple">09044372465</p>
            </div>

            <div className=" flex z-30 gap-2">
              <h2 className=" font-semibold">
                Phone Number (calling number..)
              </h2>
              <p className=" font-semibold text-purple">09018944777</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
