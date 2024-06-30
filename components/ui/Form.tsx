// "use client";
// import React, { useState } from "react";
// import { Label } from "./Label";
// import { Input } from "postcss";
// import { cn } from "@/utils/cn";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,

// } from "@tabler/icons-react";
// import { Spotlight } from "./Spotlight";
// import { LuLoader } from "react-icons/lu";

// import Link from "next/link";
// import {useCreateUserWithEmailAndPassword , } from 'react-firebase-hooks/auth'
// import {updateProfile} from "firebase/auth"
// import {auth} from '@/app/firebase/config'
// import { useRouter } from "next/navigation";
// import {motion} from 'framer-motion'
// export function SignupFormDemo  () {

//   const router = useRouter()
 

//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [cPassword, setCPassword] = useState("");

//   // error messages

//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errCPassword, setErrCPassword] = useState("");
//   //loading state

//   const [loading, setLoading] = useState(false);
//   const [succsesMesg, setSuccsesMesg] = useState("")


//   const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

 

//   //handle function start

//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };

//   const handleCPassword = (e) => {
//     setCPassword(e.target.value);
//     setErrCPassword("");
//   };

//   // email validation start

//   const emailVaildation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };

//   const handleRegistration = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();


//     try {
//       setLoading(true)
//       const res = await createUserWithEmailAndPassword(email, password)
//       console.log({res});
//       setLoading(false)
//       setSuccsesMesg("Account Created Succesfully")
//       setTimeout(() =>{
//         router.push("/login")
//       }, 3000);
//     updateProfile(auth.currentUser, {
//       displayName:clientName,
//       photoURL: 
//       "https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
      
//     });

   
    
//      } catch (e) {
//        console.error(e)
//      }

   
   
     
//     if (!clientName) {
//       setErrClientName("Enter your name");
//     }

//     if (!email) {
//       setErrEmail("Enter your email");
//     } else {
//       if (!emailVaildation(email)) {
//         setErrEmail("Enter a valid email");
//       }
//     }

//     if (!password) {
//       setErrPassword("Enter your password");
//     } else {
//       if (password.length < 6) {
//         setErrPassword("Password must be at least 6 characters");
//       }
//     }

//     if (!cPassword) {
//       setErrCPassword("Confirm your password");
//     } else {
//       if (cPassword !== password) {
//         setErrCPassword("Password not matched");
//       }
//     }

//     if (
//       clientName &&
//       email &&
//       emailVaildation(email) &&
//       password &&
//       password.length >= 6 &&
//       cPassword &&
//       cPassword === password
//     ) {
//       console.log(clientName, email, password, cPassword);





    

 
//       setClientName("");
//       setEmail("");
//       setPassword("");
//       setCPassword("");
//       setErrCPassword("");
//     }

  
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
//         <div className="max-w-md md:max-w-lg w-full mx-auto  rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-lg bg-white dark:bg-black-200">
//           <h2 className="font-bold text-xl mb-4 text-center text-neutral-800 dark:text-neutral-200">
//             Sign-up
//           </h2>

//           <form className="">
//             <div className=" mb-4">
//               <LabelInputContainer>
//                 <Label htmlFor="firstname">First name</Label>
//                 <input
//                   id="firstname"
//                   type="text"
//                   value={clientName}
//                   className=" p-2 border-[1px] rounded-md outline-none"
//                   onChange={handleName}
//                 />
//                 {errClientName && (
//                   <p className=" text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                     <span className=" italic font-extrabold text-base">!</span>{" "}
//                     {errClientName}
//                   </p>
//                 )}
//               </LabelInputContainer>
//             </div>
//             <LabelInputContainer className="mb-4">
//               <Label htmlFor="email">Email Address</Label>
//               <input
//                 id="email"
//                 value={email}
//                 type="email"
//                 className="p-2 border-[1px] rounded-md outline-none"
//                 onChange={handleEmail}
//               />

//               {errEmail && (
//                 <p className=" text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                   <span className=" italic font-extrabold text-base">!</span>{" "}
//                   {errEmail}
//                 </p>
//               )}
//             </LabelInputContainer>
//             <LabelInputContainer className="mb-4">
//               <Label htmlFor="password">Password</Label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 className=" p-2 border-[1px] rounded-md outline-none"
//                 onChange={handlePassword}
//               />

//               {errPassword && (
//                 <p className=" text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                   <span className=" italic font-extrabold text-base">!</span>{" "}
//                   {errPassword}
//                 </p>
//               )}
//             </LabelInputContainer>

//             <LabelInputContainer className="mb-4">
//               <Label htmlFor="password">Confirm Password</Label>
//               <input
//                 id="password"
//                 type="password"
//                 value={cPassword}
//                 className=" p-2 border-[1px] rounded-md outline-none"
//                 onChange={handleCPassword}
//               />

//               {errCPassword && (
//                 <p className=" text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
//                   <span className=" italic font-extrabold text-base">!</span>{" "}
//                   {errCPassword}
//                 </p>
//               )}
//             </LabelInputContainer>
//             {/* <p className=" text-xs text-gray-400 mb-2">
//               Password must be at least 6 characters
//             </p> */}

//             <Link
//               href={"/login"}
//               className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 justify-center dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
//               type="submit"
//               onClick={handleRegistration}
//             >
//               Sign up &rarr;
//               <BottomGradient />
//             </Link>

//             {
//               loading && (
//                 <div className=" flex items-center justify-center">
//                   <span className=" animate-spin text-green-600 text-3xl"><LuLoader /></span>
//                 </div>
//               )
//             }

//             {
//               !succsesMesg && (
//                 <div>
//                   <motion.p
//                   initial={{y: 10, opacity: 0}}
//                   animate={{y: 0, opacity: 1}}
//                   transition={{duration: 0.5}}
//                   className=" text-base font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
//                   >{succsesMesg}</motion.p>
//                 </div>
//               )
//             }

//             <p className=" font-semibold mt-2 mb-2 text-center">
//               Already have an account{" "}
//               <Link href={"/login"} className=" text-blue-300 underline">
//                 Login...
//               </Link>{" "}
//               here
//             </p>
//             <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my- h-[1px] w-full" />

//             <div className="flex flex-col space-y-4">
//               <button
//                 className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                 type="submit"
//               >
//                 <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   GitHub
//                 </span>
//                 <BottomGradient />
//               </button>
//               <button
//                 className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                 type="submit"
//               >
//                 <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   Google
//                 </span>
//                 <BottomGradient />
//               </button>
//             </div>
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
import { Label } from "./Label";
import { Input } from "postcss";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { Spotlight } from "./Spotlight";
import { LuLoader } from "react-icons/lu";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { updateProfile } from "firebase/auth"
import { auth } from '@/app/firebase/config'
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'

export function SignupFormDemo() {
  const router = useRouter()

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // error messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("")

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  // handle function start
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // email validation start
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match( "@gmail.com");
     
      //  /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    setErrClientName("");
    setErrEmail("");
    setErrPassword("");
    setErrCPassword("");
    setSuccessMsg("");
    setLoading(false);

    let isValid = true;

    if (!clientName) {
      setErrClientName("Enter your name");
      isValid = false;
    }

    if (!email) {
      setErrEmail("Enter your email");
      isValid = false;
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
      isValid = false;
    }

    if (!password) {
      setErrPassword("Enter your password");
      isValid = false;
    } else if (password.length < 6) {
      setErrPassword("Password must be at least 6 characters");
      isValid = false;
    }

    if (!cPassword) {
      setErrCPassword("Confirm your password");
      isValid = false;
    } else if (cPassword !== password) {
      setErrCPassword("Password not matched");
      isValid = false;
    }

    if (!isValid) return;

    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(email, password);
   

      await updateProfile(auth.currentUser, {
        displayName: clientName,
        photoURL: "https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
      });

      setLoading(false);
      setSuccessMsg("Account Created Successfully");
      setTimeout(() => {
        router.push("/login");
      }, 3000);

      setClientName("");
      setEmail("");
      setPassword("");
      setCPassword("");
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
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
        <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-lg bg-white dark:bg-black-200">
          <h2 className="font-bold text-xl mb-4 text-center text-neutral-800 dark:text-neutral-200">
            Sign-up
          </h2>

          <form className="">
            <div className="mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <input
                  id="firstname"
                  type="text"
                  value={clientName}
                  className="p-2 border-[1px] rounded-md outline-none"
                  onChange={handleName}
                />
                {errClientName && (
                  <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errClientName}
                  </p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <input
                id="email"
                value={email}
                type="email"
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handleEmail}
              />
              {errEmail && (
                <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errEmail}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <input
                id="password"
                type="password"
                value={password}
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handlePassword}
              />
              {errPassword && (
                <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errPassword}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Confirm Password</Label>
              <input
                id="password"
                type="password"
                value={cPassword}
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handleCPassword}
              />
              {errCPassword && (
                <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errCPassword}
                </p>
              )}
            </LabelInputContainer>
            <Link
              href={"/login"}
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 justify-center dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
              type="submit"
              onClick={handleRegistration}
            >
              Sign up &rarr;
              <BottomGradient />
            </Link>

            {loading && (
              <div className="flex items-center justify-center">
                <span className="animate-spin text-green-600 text-4xl mt-2"><LuLoader /></span>
              </div>
            )}

            {successMsg && (
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-base font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
              >
                {successMsg}
              </motion.p>
            )}

            <p className="font-semibold mt-2 mb-2 text-center">
              Already have an account{" "}
              <Link href={"/login"} className="text-blue-300 underline">
                Login...
              </Link>{" "}
              here
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my- h-[1px] w-full" />
            <div className="flex flex-col space-y-4">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
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

