


//do not touch

 "use client";
import React, { useState } from "react";
import soma from "../assets/edit.png";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useFormContext } from "./FormContext";
import {  clearCalculation } from '@/redux/slices/calculationSlice';


interface CalculationDetail {
  code: string;
  unit: string;
  grade: string;
}

const Dashboard: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<CalculationDetail | null>(null);
  const [selectedGradePoint, setSelectedGradePoint] = useState<string | null>(null);

  const { formData, removeFormData } = useFormContext();
  const { gradePoints, calculationDetails } = useSelector((state: RootState) => state.calculation);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const handleDelete = (index: number) => {
    removeFormData(index);
    dispatch(clearCalculation());
  };

  const handleView = (index: number) => {
    setSelectedDetails(calculationDetails[index]);
    setSelectedGradePoint(gradePoints[index]);
    setShowDetails(true);
  };

  return (
    <div className="pt-28">
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

       <div className="overflow-x-auto w-full">
       <div className="fle mx-2  overflow-x-auto items-cente justify-cente mt-12">
          <table className=" z-30 w-full overflow-x-auto  mb-4 border-r-[1px] border-l-[1px] border-gray-500">
            <thead className="bg-black-200 overflow-x-auto border-b-[1px] border-gray-500">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Level
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Semester
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  <span className=" hidden md:block">Grade Point (GP)</span> <span className=" md:hidden block">(GP)</span>
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
              {Array.isArray(formData) && formData.map((data, index) => (
                <tr key={index} className="border-b-[1px] border-gray-500">
                  <td className="p-3 level text-sm text-white-100">
                    {data.level} Level
                  </td>
                  <td className="p-3 semester text-sm text-white-100">
                    {data.semester} Semester
                  </td>
                  <td className="p-3 grade text-sm text-white-100">
                    {gradePoints[index] || 'N/A'} (GP)
                  </td>
                  <td
                    onClick={() => handleView(index)}
                    className="p-3 text-sm text-purple cursor-pointer"
                  >
                    View
                  </td>
                  <td className="p-3 date text-sm text-white-100">
                    {data.year}
                  </td>
                  <td
                    onClick={() => handleDelete(index)}
                    className="p-3 delete text-sm text-red-500 cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       </div>
        {showDetails && selectedDetails && (
          <div className="fixed inset-0 bg-black-500 bg-opacity-75 px-4 md:px-0 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white-200 rounded-lg shadow-lg max-w-4xl w-full mx-4 md:mx-8 md:p-6 p-4 relative">
              <span
                className="absolute top-4 bg-black-200 shadow-md rounded-full hover:text-3xl duration-200 transition items-center px-2 right-4 text-2xl font-bold cursor-pointer"
                onClick={() => setShowDetails(false)}
              >
                &times;
              </span>
              <h2 className="font-bold text-lg md:text-xl mb-6 text-center text-black-100">
                Grade Point Calculation Details
              </h2>
              <div className=" w-full overflow-x-auto">
                <table className="w-full z-30 border-r-[1px] border-l-[1px] border-gray-500">
                  <thead className="bg-black-200 border-b-[1px] border-gray-500">
                    <tr>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Code
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Unit
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedDetails ? (
                      <tr className="border-b-[1px] border-gray-500">
                        <td className="p-3 1  text-sm text-black-100">{selectedDetails.code}</td>
                        <td className="p-3 2 text-sm text-black-100">{selectedDetails.unit}</td>
                        <td className="p-3 3 text-sm text-black-100">{selectedDetails.grade}</td>
                      </tr>
                    ) : (
                      <tr><td colSpan={3} className="p-3 text-center">No Details Available</td></tr>
                    )}
                  </tbody>
                </table>




              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center mx-6 justify-center pb-3 mt-3 z-30">
        <p className="md:text-sm text-xs z-30 font-semibold tracking-wide text-white-100">
          Welcome to result management dashboard{" "}
          <a className="text-purple underline" href="/result">
            Click Here
          </a>{" "}
          to start tracking your results
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

