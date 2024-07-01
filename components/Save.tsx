// "use client";
// import React from "react";
// import { Label } from "./ui/Label";
// import { Input } from "postcss";
// import { cn } from "@/utils/cn";
// import { GiBurningDot } from "react-icons/gi";
// import { Spotlight } from "./ui/Spotlight";
// import Link from "next/link";

// export function Save() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };
//   return (
//     <>
//       <div className=" overflow-clip ">
//         <Spotlight
//           className=" -top-40 -left-10 md:-left-32 md:-top-20 
//               h-screen"
//           fill="purple"
//         />

//         {/* <Spotlight
//           className="top-10 left-full h-[80vh] w-[50vw] "
//           fill="purple"
//         /> */}

//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
//       </div>
//       <div className=" mx-2 md:mx-0 overflow-clip ">
//         <div className="max-w-md md:max-w-lg w-full mx-auto  rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-md bg-white dark:bg-black-200">
//           <h2 className="font-bold text-xl mb-4 text-center text-neutral-800 dark:text-neutral-200">
//             Welcome
//           </h2>

//           <form className="" onSubmit={handleSubmit}>
//             <div className="flex flex-col space-y-2   mb-4">
//               <LabelInputContainer>
//                 <select
//                   name="slect"
//                   id="select"
//                   className=" p-2 border-[1px] rounded-md outline-none"
//                 >
//                   <option value="">Select Level</option>
//                   <option value=""> 100Level</option>
//                   <option value="">200Level</option>
//                   <option value="">300Level</option>
//                   <option value="">400Level</option>
//                   <option value="">500Level</option>
//                   <option value="">600Level</option>
//                 </select>
//               </LabelInputContainer>
//               <LabelInputContainer>
//                 <select
//                   name="slect"
//                   id="select"
//                   className=" p-2 border-[1px] rounded-md outline-none"
//                 >
//                   <option value="">Select Semester</option>
//                   <option value="">
//                     <span className=" text-xl font-bold">.</span> first semester
//                   </option>
//                   <option value="">. second semester</option>
//                 </select>
//               </LabelInputContainer>

//               <LabelInputContainer>
//                 <select
//                   name="slect"
//                   id="select"
//                   className=" p-2 border-[1px] rounded-md outline-none"
//                 >
//                   <option value="">Select year</option>
//                   <option value="">2015-2016</option>
//                   <option value="">2017-2018</option>
//                   <option value="">2019-2020</option>
//                   <option value="">2021-2022</option>
//                   <option value="">2023-2024</option>
//                   <option value="">2025-2026</option>
//                   <option value="">2027-2028</option>
//                   <option value="">2029-2030</option>
//                   <option value="">2031-2032</option>
//                   <option value="">2033-2034</option>
//                   <option value="">2035-2036</option>
//                 </select>
//               </LabelInputContainer>
//             </div>

//             <Link
//               href={"/login"}
//               className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 justify-center dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
//               type="submit"
//             >
//               Save &rarr;
//               <BottomGradient />
//             </Link>

//             <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// const BottomGradient = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };



"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Label } from "./ui/Label";
import { Input } from "postcss";
import { cn } from "@/utils/cn";
import { GiBurningDot } from "react-icons/gi";
import { Spotlight } from "./ui/Spotlight";

export function Save() {
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const level = form.elements.namedItem("level") as HTMLSelectElement;
    const semester = form.elements.namedItem("semester") as HTMLSelectElement;
    const year = form.elements.namedItem("year") as HTMLSelectElement;

    if (!level.value || !semester.value || !year.value) {
      setError("Please select all the options to proceed");
      return;
    }

    setError("");
    console.log("Form submitted");

    // Navigate to the login page
    router.push('/login');
  };

  const handleInputChange = () => {
    setError("");
  };

  return (
    <>
      <div className="overflow-clip">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="mx-2 md:mx-0 overflow-clip">
        <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-md bg-black-200">
          <h2 className="font-bold text-xl mb-4 text-center ">
            Welcome
          </h2>

          <form className="" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 mb-4">
              <LabelInputContainer>
                <select
                  name="level"
                  className="p-2 border-[1px] rounded-md outline-none"
                  onChange={handleInputChange}
                >
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
                <select
                  name="semester"
                  className="p-2 border-[1px] rounded-md outline-none"
                  onChange={handleInputChange}
                >
                  <option value="">Select Semester</option>
                  <option value="first">First Semester</option>
                  <option value="second">Second Semester</option>
                </select>
              </LabelInputContainer>
              <LabelInputContainer>
                <select
                  name="year"
                  className="p-2 border-[1px] rounded-md outline-none"
                  onChange={handleInputChange}
                >
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

            {error && (
              <div className="text-red-500 mb-4 text-sm md:text-base font-semibold">
                {error}
              </div>
            )}

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  justify-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
              type="submit"
            >
              Save &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent  via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
