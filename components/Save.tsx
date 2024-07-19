
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { useFormContext } from "./FormContext"; // Import context
import { Label } from "./ui/Label";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

export const Save: React.FC = () => {
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter
  const { saveFormData } = useFormContext(); // Get the saveFormData function from context

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const level = (form.elements.namedItem('level') as HTMLSelectElement).value;
    const semester = (form.elements.namedItem('semester') as HTMLSelectElement).value;
    const year = (form.elements.namedItem('year') as HTMLSelectElement).value;

    if (!level || !semester || !year) {
      setError("Please select all the options to proceed");
      return;
    }

    setError("");

    // Save the form data to context
    saveFormData({ level, semester, year });

    // Navigate to the board page
    router.push("/login");
  };

  const handleInputChange = () => {
    setError("");
  };

  return (
    <>
      <div className="overflow-clip">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="mx-2 md:mx-0 overflow-clip shadow-md shadow-slate-500 md:shadow-transparent">
        <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-md bg-black-200">
          <h2 className="font-bold text-xl mb-4 text-center">Welcome</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 mb-4">
              <LabelInputContainer>
                <select name="level" className="p-2 border-[1px] rounded-md outline-none" onChange={handleInputChange}>
                  <option value="">Select Level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>
                  <option value="600">600 Level</option>
                </select>
              </LabelInputContainer>
              <LabelInputContainer>
                <select name="semester" className="p-2 border-[1px] rounded-md outline-none" onChange={handleInputChange}>
                  <option value="">Select Semester</option>
                  <option value="first">First Semester</option>
                  <option value="second">Second Semester</option>
                </select>
              </LabelInputContainer>
              <LabelInputContainer>
                <select name="year" className="p-2 border-[1px] rounded-md outline-none" onChange={handleInputChange}>
                  <option value="">Select Year</option>
                  <option value="2015-2016">2015-2016</option>
                  <option value="2017-2018">2017-2018</option>
                  <option value="2019-2020">2019-2020</option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2025-2026">2025-2026</option>
                  <option value="2027-2028">2027-2028</option>
                  <option value="2029-2030">2029-2030</option>
                  <option value="2031-2032">2031-2032</option>
                  <option value="2033-2034">2033-2034</option>
                  <option value="2035-2036">2035-2036</option>
                </select>
              </LabelInputContainer>
            </div>
            {error && <div className="text-red-500 mb-4 text-sm md:text-base font-semibold">{error}</div>}
            <button className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 justify-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] text-center items-center flex" type="submit">
              Save &rarr;
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient: React.FC = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};






