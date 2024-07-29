
"use client";
import React, { useState } from "react";
import soma from "../assets/edit.png";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { RootState } from "@/redux/store";
import { useFormContext } from "./FormContext";
import { setGradePointAndDetails, clearCalculation } from '@/redux/slices/calculationSlice';
import { clearUser } from '@/redux/slices/authSlice';

const Dashboard: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const { gradePoint, calculationDetails } = useSelector(
    (state: RootState) => state.calculation
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const { formData, saveFormData } = useFormContext();
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Clear form data
    saveFormData({ level: '', semester: '', year: '' });
    
    // Clear grade point and calculation details from Redux state
    dispatch(clearCalculation());

    // Clear user from Redux state (if needed)
    // dispatch(clearUser());

    // Clear formData from localStorage
    localStorage.removeItem('formData');
  };

  return (
    <div className="pt-28">
      {/* parent */}
      <div className="flex flex-col md:flex-row p-6 gap-9">
        <div className="md:w-[30%] flex-col px-6 md:px-0 h-72 bg-black-200 shadow-sm shadow-white-100 rounded-md flex items-center justify-center">
          <Image
            src={soma}
            alt="Soma.img"
            className="md:h-36 h-48 w-48 md:w-36 rounded-full mb-6 md:mb-0"
          />
          <MagicButton
            title="Upload Image"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
        <div className="md:w-[70%] h-72 bg-black-200 rounded-md shadow-sm shadow-white-100 flex flex-col items-center justify-center">
          <h2 className="uppercase font-bold tracking-wide text-center text-2xl">
            Grade Point Score Board For
          </h2>

          {user ? (
            <p className="lie font-light text-2xl tracking-wide text-purple mt-2 capitalize">
              {user.userName}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className="border-t-[1px] border-gray-500 mt-8">
        <div className="flex items-center justify-between px-6 mt-3">
          <div className="z-30">
            <h2 className="font-semibold tracking-wide text-white-100">
              Level
            </h2>
            <input
              type="text"
              placeholder="Search by level"
              className="bg-black-200 p-1 border-[1px] placeholder:font-medium border-gray-600 shadow-sm shadow-white-100 outline-none rounded-md placeholder:text-gray-500"
            />
          </div>
          {user ? (
            <p className="text-purple font-semibold hidden md:block md:text-base tracking-wide">
              <span className="text-white-100">Email: </span>
              {user.department}
            </p>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {user ? (
          <p className="text-purple font-semibold md:hidden mt-4 ml-6 md:text-base tracking-wide">
            <span className="text-white-100">Email: </span>
            {user.department}
          </p>
        ) : (
          <p className="md:hidden">Loading...</p>
        )}

        <div className="flex mx-6 items-center justify-center mt-12">
          <table className="w-full z-30 border-r-[1px] border-l-[1px] border-gray-500">
            <thead className="bg-black-200 border-b-[1px] border-gray-500">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Level
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Semester
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Grade Point (GP)
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  View
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Year
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="relative">
              <tr className="border-b-[1px] border-gray-500">
                <td className="p-3 level text-sm text-white-100">
                  {formData.level} Level
                </td>
                <td className="p-3 semester text-sm text-white-100">
                  {formData.semester} Semester
                </td>
                <td className="p-3 grade text-sm text-white-100">
                  {gradePoint} (GP)
                </td>

                <td
                  onClick={() => setShowDetails(true)}
                  className="p-3 text-sm text-purple cursor-pointer"
                >
                  View
                </td>

                <td className="p-3 date text-sm text-white-100">
                  {formData.year}
                </td>
                <td
                  onClick={handleDelete}
                  className="p-3 delete text-sm text-red-500 cursor-pointer"
                >
                  Delete
                </td>
              </tr>

              {showDetails && (
                <div className="fixed inset-0 bg-black-500 bg-opacity-75 px-4 md:px-0 backdrop-blur-sm flex justify-center items-center z-50">
                  <div className=" bg-white-200 rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-8  md:p-6 p-4 relative">
                    <span
                      className="absolute top-4 bg-black-200 shadow-md rounded-full hover:text-3xl duration-200 transition items-center px-2 right-4 text-2xl text-purple cursor-pointer"
                      onClick={() => setShowDetails(false)}
                    >
                      &times;
                    </span>
                    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
                      Calculation Details
                    </h2>
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 bg-gray-700 p-4 gap-4 md:gap-6 lg:grid-cols-3">
                      {calculationDetails.map((detail, index) => (
                        <div
                          key={index}
                          className=" border-b-[1px] md:border-b-[0] border-white-100"
                        >
                          <p className="text-sm text-gray-300">
                            <span className=" font-semibold">
                              Course Code:
                            </span>{" "}
                           <span className="font-semibold text-purple"> {detail.code}</span>
                          </p>
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold ">
                              Course Units:
                            </span>{" "}
                            <span className="font-semibold text-purple">{detail.unit}</span>
                          </p>
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold">
                              Grade:
                            </span>
                           <span className="font-semibold text-purple"> {detail.grade}</span>
                          </p>
                          {/* <p className="text-sm text-gray-300">
                            <span className="font-semibold text-purple">
                              Grade Points:
                            </span>{" "}
                            {detail.gradePoints}
                          </p> */}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center mx-6 justify-center pb-12 mt-8 z-30">
          <p className="md:text-sm text-xs z-30 font-semibold tracking-wide text-white-100">
            Welcome to result management dashboard{" "}
            <a className="text-purple underline" href="/">
              Click Here
            </a>{" "}
            to start tracking your results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;










