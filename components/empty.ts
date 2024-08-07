
// import Navbar from "@/components/Navbar";
// import MagicButton from "@/components/ui/MagicButton";
// import { TextGenerateEffect } from "@/components/ui/TexstGenerateEffect";
// import { FaLocationArrow } from "react-icons/fa";


// const Result = () => {
//   return (
//     <div className="bg-black-100 h-screen">
//       <Navbar />
//       <div className="bg-black-100 w-full justify-center items-center flex flex-col px-6">
     
//           <h1 className="text-center text-4xl font-normal mb-12 mt-16">
//             Result Manager
//           </h1>
     

//         <div className="bg-black-200 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//           <TextGenerateEffect
//             words="Welcome User"
//             className="text-4xl font-bold p-6 md:p-0"
//           />
//           <div className="flex justify-center flex-col items-center">
//             <input
//               type="number"
//               placeholder="Enter number of courses..."
//               className="md:mt-8 mb-6 md:mb-0 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[400px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//               min="0"
//             />

//             <a href="#" className="mb-6 md:mb-0">
//               <MagicButton
//                 title="Enter"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;








// "use client"
// import React, { useState, ChangeEvent } from "react";
// import Navbar from "@/components/Navbar";
// import MagicButton from "@/components/ui/MagicButton";
// import { TextGenerateEffect } from "@/components/ui/TexstGenerateEffect";
// import { FaLocationArrow } from "react-icons/fa";

// const Result: React.FC = () => {
//   const [numInputs, setNumInputs] = useState<number>(0);
//   const [inputValues, setInputValues] = useState<string[]>([]);
//   const [showInputs, setShowInputs] = useState<boolean>(false);

//   const handleNumInputsChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     const num = parseInt(e.target.value, 10);
//     if (!isNaN(num) && num >= 0) {
//       setNumInputs(num);
//       setInputValues(Array(num).fill(""));
//       setShowInputs(false); // Reset the showInputs flag
//     } else {
//       setNumInputs(0);
//       setInputValues([]);
//       setShowInputs(false); // Reset the showInputs flag
//     }
//   };

//   const handleInputChange = (index: number, value: string): void => {
//     const newValues = [...inputValues];
//     newValues[index] = value;
//     setInputValues(newValues);
//   };

//   const handleButtonClick = (): void => {
//     setShowInputs(true);
//   };

//   return (
//     <div className="bg-black-100 h-screen">
//       <Navbar />
//       <div className="bg-black-100 w-full justify-center items-center flex flex-col px-6">
//         <h1 className="text-center text-4xl font-normal mb-12 mt-16">
//           Result Manager
//         </h1>

//         <div className="bg-black-200 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//           <TextGenerateEffect
//             words="Welcome User"
//             className="text-4xl font-bold p-6 md:p-0"
//           />
//           <div className="flex justify-center flex-col items-center">
//             <input
//               type="number"
//               placeholder="Enter number of courses..."
//               className="md:mt-8 mb-6 md:mb-0 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[400px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//               min="0"
//               onChange={handleNumInputsChange}
//             />

//             <a href="#" className="mb-6 md:mb-0" onClick={handleButtonClick}>
//               <MagicButton
//                 title="Enter"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </a>

//             {showInputs && Array.from({ length: numInputs }).map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 placeholder={`Course ${index + 1}`}
//                 className="bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[400px] placeholder:text-gray-700 rounded-md placeholder:text-sm mt-2"
//                 value={inputValues[index] || ""}
//                 onChange={(e) => handleInputChange(index, e.target.value)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;














// "use client"
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import MagicButton from "@/components/ui/MagicButton";
// import { TextGenerateEffect } from "@/components/ui/TexstGenerateEffect";
// import { FaLocationArrow } from "react-icons/fa";

// const Result = () => {
//   const [numOfCourses, setNumOfCourses] = useState("");
//   const [inputs, setInputs] = useState([]);
//   const [submitted, setSubmitted] = useState(false);

//   const handleNumOfCoursesChange = (e) => {
//     setNumOfCourses(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const numberOfInputs = parseInt(numOfCourses, 10);
//     if (!isNaN(numberOfInputs) && numberOfInputs > 0) {
//       const newInputs = Array.from({ length: numberOfInputs }, () => ({ code: "", unit: "" }));
//       setInputs(newInputs);
//       setSubmitted(true);
//     }
//   };

//   const handleCourseInputChange = (index, field, value) => {
//     const newInputs = [...inputs];
//     newInputs[index][field] = value;
//     setInputs(newInputs);
//   };

//   return (
//     <div className="bg-black-100 h-screen">
//       <Navbar />
//       <div className="bg-black-100 w-full justify-center items-center flex flex-col px-6">
//         <div>
//           <h1 className="text-center text-4xl font-normal mb-12 mt-16">
//             Result Manager
//           </h1>
//         </div>
//         {submitted ? (
//           <div className="bg-black-200 mb-12 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//             {inputs.map((input, index) => (
//               <div key={index} className="flex flex-col md:flex-row md:items-center mb-4">
//                 <input
//                   type="text"
//                   placeholder={`Enter Course Code`}
//                   value={input.code}
//                   className="mt-2 mb-2 md:mr-2 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                   onChange={(e) => handleCourseInputChange(index, 'code', e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder={`Enter Course Units`}
//                   value={input.unit}
//                   className="mt-2 mb-2 md:ml-2 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                   onChange={(e) => handleCourseInputChange(index, 'unit', e.target.value)}
//                 />
//               </div>
//             ))}
//              <a href="#" className=" md:mb-0" >
//                 <MagicButton title="Calculate" icon={<FaLocationArrow />} position="right" />
//               </a>
//           </div>
//         ) : (
//           <div className="bg-black-200 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//             <TextGenerateEffect
//               words="Welcome User"
//               className="text-4xl font-bold p-6 md:p-0"
//             />
//             <div className="flex justify-center flex-col items-center">
//               <input
//                 type="number"
//                 placeholder="Enter number of courses..."
//                 className="md:mt-8 mb-6 md:mb-0 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[400px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                 value={numOfCourses}
//                 onChange={handleNumOfCoursesChange}
//                 min="0"
//               />
//               <a href="#" className="mb-6 md:mb-0" onClick={handleSubmit}>
//                 <MagicButton title="Submit" icon={<FaLocationArrow />} position="right" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;








// "use client"
// import React, { useState } from "react";
// import Navbar from "@/components/Navbar";
// import MagicButton from "@/components/ui/MagicButton";
// import { TextGenerateEffect } from "@/components/ui/TexstGenerateEffect";
// import { FaLocationArrow } from "react-icons/fa";

// const Result = () => {
//   const [numOfCourses, setNumOfCourses] = useState("");
//   const [inputs, setInputs] = useState([]);
//   const [submitted, setSubmitted] = useState(false);

//   const handleNumOfCoursesChange = (e) => {
//     setNumOfCourses(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const numberOfInputs = parseInt(numOfCourses, 10);
//     if (!isNaN(numberOfInputs) && numberOfInputs > 0) {
//       const newInputs = Array.from({ length: numberOfInputs }, () => ({ code: "", unit: "", grade: "" }));
//       setInputs(newInputs);
//       setSubmitted(true);
//     }
//   };

//   const handleCourseInputChange = (index, field, value) => {
//     const newInputs = [...inputs];
//     newInputs[index][field] = value;
//     setInputs(newInputs);
//   };

//   return (
//     <div className="bg-black-100 h-screen">
//       <Navbar />
//       <div className="bg-black-100 w-full justify-center items-center flex flex-col px-6">
//         <div>
//           <h1 className="text-center text-4xl font-normal mb-12 mt-16">
//             Result Manager
//           </h1>
//         </div>
//         {submitted ? (
//           <div className="bg-black-200 mb-6 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//             {inputs.map((input, index) => (
//               <div key={index} className="flex flex-col md:flex-row md:items-center mb-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Course Code"
//                   value={input.code}
//                   className="mt-2 mb-2 md:mr-2 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                   onChange={(e) => handleCourseInputChange(index, 'code', e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Enter Course Units"
//                   value={input.unit}
//                   className="mt-2 mb-2 md:mr-2 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[200px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                   onChange={(e) => handleCourseInputChange(index, 'unit', e.target.value)}
//                 />
//                 <select
//                   value={input.grade}
//                   className="mt-2 mb-2 bg-gray-300 text-gray-800 outline-none border-none p-2 w-[80px] rounded-md"
//                   onChange={(e) => handleCourseInputChange(index, 'grade', e.target.value)}
//                 >
//                   <option value="select">Select Grade</option>
//                   <option value="A">A</option>
//                   <option value="B">B</option>
//                   <option value="C">C</option>
//                   <option value="D">D</option>
//                   <option value="E">E</option>
//                   <option value="F">F</option>
//                 </select>
//               </div>
//             ))}
//               <a href="#" className=" md:mb-0" >
//                 <MagicButton title="Calculate" icon={<FaLocationArrow />} position="right" />
//               </a>
//           </div>
//         ) : (
//           <div className="bg-black-200 items-center container justify-center shadow-lg shadow-gray-500 rounded-lg flex flex-col md:w-fit md:px-32 md:h-fit md:p-12 p-2">
//             <TextGenerateEffect
//               words="Welcome User"
//               className="text-4xl font-bold p-6 md:p-0"
//             />
//             <div className="flex justify-center flex-col items-center">
//               <input
//                 type="number"
//                 placeholder="Enter number of courses..."
//                 className="md:mt-8 mb-6 md:mb-0 bg-gray-300 text-gray-800 outline-none border-none p-2 md:w-[400px] placeholder:text-gray-700 rounded-md placeholder:text-sm"
//                 value={numOfCourses}
//                 onChange={handleNumOfCoursesChange}
//                 min="0"
//               />
//               <a href="#" className="mb-6 md:mb-0" onClick={handleSubmit}>
//                 <MagicButton title="Submit" icon={<FaLocationArrow />} position="right" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Result;


