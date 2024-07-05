"use client";
import React from "react";
import soma from "../assets/soma.jpg";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Board: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <div className=" pt-28">
      {/* parent */}
      <div className=" flex flex-col md:flex-row p-6 gap-9">
        <div className=" md:w-[30%] flex-col px-6 md:px-0 h-72 bg-black-200 shadow-sm shadow-white-100 rounded-md flex items-center justify-center">
          <Image
            src={soma}
            alt="Soma.img"
            className=" md:h-32 h-48 w-48 md:w-32 rounded-full mb-6 md:mb-0"
          />
          <MagicButton
            title="Upload Image"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
        <div className=" md:w-[70%] h-72 bg-black-200 rounded-md shadow-sm shadow-white-100 flex flex-col items-center justify-center">
       
          <h2 className=" uppercase font-bold tracking-wide text-center text-2xl">
            grade point score board
          </h2>

          {user ? (
            <p className=" lie font-light text-xl tracking-wide text-purple mt-2 capitalize">
              {" "}
              {user.userName}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className=" border-t-[1px] border-gray-500 mt-8">
        <div className=" flex items-center justify-between px-6 mt-3">
          <div className=" flex flex-col md:flex-row items-center gap-6">
           

            <div className="z-30">
              <h2 className=" font-semibold tracking-wide text-white-100">
                Level
              </h2>
              <input
                type="text"
                placeholder="Search by level"
                className=" bg-black-200  p-1 border-[1px] placeholder:font-medium border-gray-600 shadow-sm shadow-white-100 outline-none rounded-md placeholder:text-gray-500"
              />
            </div>
          </div>

          {user ? (
            <p className=" text-purple font-semibold hidden md:block md:text-base tracking-wide">
            
              <span className=" text-white-100">Email: </span>
              {user.department}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {user ? (
          <p className=" text-purple font-semibold md:hidden mt-4 ml-6 md:text-base tracking-wide">
          
            <span className=" text-white-100">Email: </span>
            {user.department}
          </p>
        ) : (
          <p className=" md:hidden">Loading...</p>
        )}

        <div className=" flex mx-6 items-center justify-center mt-12 ">
          <table className=" w-full z-30 border-r-[1px] border-l-[1px] border-gray-500">
            <thead className=" bg-black-200 border-b-[1px] border-gray-500">
              <tr>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Level
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Semester
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Grade Point (GP)
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  View
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                  Year
                </th>
                <th className=" p-3 text-sm font-semibold tracking-wide text-left ">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b-[1px] border-gray-500">
                <td className=" p-3 text-sm text-white-100">300 Level</td>
                <td className=" p-3 text-sm text-white-100">First Semester</td>
                <td className=" p-3 text-sm text-white-100">4.5</td>
                <td className=" p-3 text-sm text-white-100">View</td>
                <td className=" p-3 text-sm text-white-100">2023/2024</td>
                <td className=" p-3 text-sm text-red-500 cursor-pointer">
                  Delete
                </td>
              </tr>

              <tr className="border-b-[1px] border-gray-500">
                <td className=" p-3 text-sm text-white-100">300 Level</td>
                <td className=" p-3 text-sm text-white-100">Second Semester</td>
                <td className=" p-3 text-sm text-white-100">4.5</td>
                <td className=" p-3 text-sm text-white-100">View</td>
                <td className=" p-3 text-sm text-white-100">2023/2024</td>
                <td className=" p-3 text-sm text-red-500 cursor-pointer">
                  Delete
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex items-center mx-6 justify-center pb-12 mt-8 z-30">
          <p className=" md:text-sm text-xs z-30 font-semibold tracking-wide text-white-100">
            Welcome to result management dashboard{" "}
            <a className=" text-purple underline " href="/">
              Click Here
            </a>{" "}
            to start tracking your results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Board;




