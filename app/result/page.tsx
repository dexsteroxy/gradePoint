"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TexstGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import Link from "next/link";
import StarsCanvas from "@/components/ui/StarBackground";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { setGradePointAndDetails } from '@/redux/slices/calculationSlice';

interface CourseInput {
  code: string;
  unit: string;
  grade: string;
  gradePoints?: string;  // Optional field
}

const Result: React.FC = () => {
  const [numOfCourses, setNumOfCourses] = useState<string>("");
  const [inputs, setInputs] = useState<CourseInput[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [gradePoint, setGradePoint] = useState<string | null>(null);
  const [calculationDetails, setCalculationDetails] = useState<CourseInput[]>([]);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const handleNumOfCoursesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumOfCourses(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const numberOfInputs = parseInt(numOfCourses, 10);
    if (!isNaN(numberOfInputs) && numberOfInputs > 0) {
      const newInputs = Array.from({ length: numberOfInputs }, () => ({
        code: "",
        unit: "",
        grade: "",
      }));
      setInputs(newInputs);
      setSubmitted(true);
      setGradePoint(null); // Reset grade point when resubmitting
      setCalculationDetails([]); // Reset calculation details when resubmitting
      setError(""); // Reset error message
    }
  };

  const handleCourseInputChange = (
    index: number,
    field: keyof CourseInput,
    value: string
  ) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);

    // Remove error message if all fields are filled
    if (newInputs.every((input) => input.code && input.unit && input.grade)) {
      setError("");
    }
  };

  const gradeToPoint = (grade: string): number => {
    switch (grade) {
      case "A":
        return 4.0;
      case "B":
        return 3.0;
      case "C":
        return 2.0;
      case "D":
        return 1.0;
      case "E":
        return 0.7;
      case "F":
        return 0.0;
      default:
        return 0.0;
    }
  };

  const calculateGradePoint = () => {
    if (inputs.some((input) => !input.code || !input.unit || !input.grade)) {
      setError("Please fill up all the input fields.");
      return;
    }

    let totalPoints = 0;
    let totalUnits = 0;
    const details = inputs.map((input) => {
      const points = gradeToPoint(input.grade);
      const units = parseFloat(input.unit);
      const gradePoints = points * units;
      if (!isNaN(points) && !isNaN(units)) {
        totalPoints += gradePoints;
        totalUnits += units;
      }
      return {
        ...input,
        gradePoints: gradePoints.toFixed(2),
      };
    });

    const gp = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : "0.00";
    setGradePoint(gp);
    setCalculationDetails(details);

    // Dispatch the grade point and details to the Redux store
    dispatch(setGradePointAndDetails({ gradePoint: gp, calculationDetails: details }));
  };

  return (
    <div>
      <StarsCanvas />
      <div className="bg-black-100 h-screen z-30">
        <Navbar />

        <div className="bg-black-100 w-full flex flex-col px-6">
          <div>
            <h1 className="md:text-4xl text-3xl font-normal mb-7 md:mt-32 mt-24">
              Result Management <span className="text-purple">System</span>
            </h1>

            {gradePoint !== null && (
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-black-100  text-center font-bold bg-[#35a68d] text-xl p-3 rounded-md md:text-4xl"
              >
                Your Grade Point is: {gradePoint}
              </motion.div>
            )}
          </div>

          {submitted ? (
            <>
              <div className="bg-black-200 mb-12 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col z-30 lg:w-fit md:px-32 md:h-fit md:p-12 p-2">
                {inputs.map((input, index) => (
                  <div
                    key={index}
                    className="grid  md:grid-cols-3 md:items-center mb-4"
                  >
                    <input
                      type="text"
                      placeholder="Enter Course Code"
                      value={input.code}
                      className="mt-2 z-50 mb-2 md:mr-2 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
                      onChange={(e) =>
                        handleCourseInputChange(index, "code", e.target.value)
                      }
                    />
                    <input
                      type="number"
                      placeholder="Enter Course Units"
                      value={input.unit}
                      className="mt-2 mb-2 md:mr-2 bg-gray-300 text-gray-800 z-30 outline-none border-none p-2  md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
                      onChange={(e) =>
                        handleCourseInputChange(index, "unit", e.target.value)
                      }
                    />
                    <select
                      value={input.grade}
                      className="mt-2 mb-2 bg-gray-300 text-gray-800 outline-none border-none p-2  md:w-[200px] rounded-md"
                      onChange={(e) =>
                        handleCourseInputChange(index, "grade", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Grade
                      </option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                    </select>
                  </div>
                ))}
                <div
                  // type="button"
                  className="mb-6 md:mb-0 w-full px-4 md:px-0 md:w-fit"
                  onClick={calculateGradePoint}
                >
                  <MagicButton
                    title="Calculate"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
                {error && (
                  <div className="mt-4 bg-red-500 p-3 rounded-tl-3xl rounded-br-3xl text-sm font-medium">
                    {error}
                  </div>
                )}
              </div>
              <div>
                {calculationDetails.length > 0 && (
                  <>
                    <div className="md:-mt-12 flex justify-between">
                      <Link href="/semester">
                        <MagicButton
                          title="Proceed to save"
                          icon={<GrFormNextLink />}
                          position="right"
                        />
                      </Link>
                    </div>
                    <div className="mt-12 text-white">
                      <h2 className="md:text-4xl text-2xl font-bold mb-2">
                        Calculation Details:
                      </h2>
                      <div className="shadow-md mb-6 md:p-4 grid sm:grid-cols-3 md:grid-cols-3 gap-2 gap-x-2 lg:grid-cols-4 md:items-center md:justify-center md:gap-4">
                        {calculationDetails.map((detail, index) => (
                          <div key={index} className="mb-2 flex flex-col">
                            <p className="flex">
                              Course Code:{" "}
                              <span className="ml-2 capitalize text-purple">
                                {detail.code}
                              </span>
                            </p>
                            <p className="flex">
                              Course Units:{" "}
                              <span className="ml-2 capitalize text-purple">
                                {detail.unit}
                              </span>
                            </p>
                            <p className="flex">
                              Grade:{" "}
                              <span className="ml-2 capitalize text-purple">
                                {detail.grade}
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <div className="bg-black-200 py-16 mb-5 md:mb-0 md:py-12 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:h-fit md:p-12 p-2">
              <TextGenerateEffect
                words="Welcome User"
                className="md:text-4xl text-2xl font-bold p-6 md:p-0"
              />
              <div className="flex justify-center flex-col items-center z-30">
                <p className="font-semibold text-sm md:text-base justify-start text-center flex items-start md:mb-0 md:-mt-0 mb-6">
                  Please Kindly Enter the Total Number of Courses you are
                  offering
                </p>
                <input
                  type="number"
                  placeholder="Enter number of courses..."
                  className="md:mt-8 mb-6 md:mb-0 bg-gray-300 text-gray-800 outline-none border-none p-2 w-full md:w-[600px] lg:w-[800px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
                  value={numOfCourses}
                  onChange={handleNumOfCoursesChange}
                  min="0"
                />
                <div
                  // type="button"
                  className="mb-6 md:mb-0 w-full md:w-fit px-4 md:px-0 pt-6 md:pt-0"
                  onClick={handleSubmit}
                >
                  <MagicButton
                    title="Submit"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;


