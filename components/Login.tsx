// "use client";
// import React, { useState, FormEvent, ChangeEvent } from "react";
// import { Label } from "./ui/Label";
// import { cn } from "@/utils/cn";
// import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
// import { Spotlight } from "./ui/Spotlight";
// import Link from "next/link";
// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
// import { auth } from "@/app/firebase/config";
// import { useRouter } from "next/navigation";
// import { LuLoader } from "react-icons/lu";
// import { useDispatch } from "react-redux";
// import { setUser } from "@/redux/slices/authSlice"; // Import the setUser action

// export function Login() {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [errEmail, setErrEmail] = useState<string>("");
//   const [errPassword, setErrPassword] = useState<string>("");
//   const [firebaseError, setFirebaseError] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [successMsg, setSuccessMsg] = useState<string>("");
//   const router = useRouter();
//   const dispatch = useDispatch(); // Initialize useDispatch hook

//   const [signInWithEmailAndPassword, userCredential] = useSignInWithEmailAndPassword(auth);

//   const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//     setFirebaseError("");
//   };

//   const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//     setFirebaseError("");
//   };

//   const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setErrEmail("");
//     setErrPassword("");
//     setSuccessMsg("");
//     setFirebaseError("");

//     if (!email) {
//       setErrEmail("Enter your email");
//     }

//     if (!password) {
//       setErrPassword("Enter your password");
//     }

//     if (email && password) {
//       try {
//         setLoading(true);
//         const res = await signInWithEmailAndPassword(email, password);

//         if (res?.user) {
//           setLoading(false);
//           setSuccessMsg("Logged in successfully! Welcome");

//           // Fetch user profile
//           const userName = res.user.displayName || "User"; // Use displayName if available
//           const department = res.user.email || "Department";

//           dispatch(setUser({ userName, department, email: res.user.email })); // Update the Redux store with user data

//           setTimeout(() => {
//             router.push("/dashboard");
//           }, 2000);
//         } else {
//           setLoading(false);
//           setFirebaseError("Your credentials are incorrect");
//         }
//       } catch (error) {
//         setLoading(false);
//         setFirebaseError("Your credentials are incorrect");
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="z-50">
//       <div className="overflow-clip">
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="purple"
//         />
//         <Spotlight
//           className="top-28 left-80 md:-top-20 md:left-96 h-[80vh] w-[50vw]"
//           fill="blue"
//         />
//       </div>
//       <div className="mx-2 md:mx-0 overflow-clip shadow-md mt-12 shadow-slate-500 sm:shadow-transparent">
//         <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-md bg-black-200">
//           <h2 className="font-bold text-xl text-center mb-2 text-neutral-200">
//             Login
//           </h2>

//           <form onSubmit={handleLogin}>
//             <LabelInputContainer className="mb-4">
//               <Label htmlFor="email">Email Address</Label>
//               <input
//                 id="email"
//                 value={email}
//                 onChange={handleEmail}
//                 type="email"
//                 className="p-2 border-[1px] rounded-md outline-none"
//               />
//               {errEmail && (
//                 <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-2">
//                   <span className="italic font-extrabold text-base">!</span>
//                   {errEmail}
//                 </p>
//               )}
//             </LabelInputContainer>
//             <LabelInputContainer className="mb-4">
//               <Label htmlFor="password">Password</Label>
//               <input
//                 id="password"
//                 value={password}
//                 onChange={handlePassword}
//                 type="password"
//                 className="p-2 border-[1px] rounded-md outline-none"
//               />
//               {errPassword && (
//                 <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-2">
//                   <span className="italic font-extrabold text-base">!</span>
//                   {errPassword}
//                 </p>
//               )}
//             </LabelInputContainer>

//             <button
//               type="submit"
//               className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  justify-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
//             >
//               Login &rarr;
//               <BottomGradient />
//             </button>
//             {loading && (
//               <div className="flex items-center justify-center mt-4">
//                 <span className="animate-spin text-green-600 text-4xl">
//                   <LuLoader />
//                 </span>
//               </div>
//             )}
//             {successMsg && (
//               <p className="text-base font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center mt-4">
//                 {successMsg}
//               </p>
//             )}
//             {firebaseError && (
//               <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 mt-4">
//                 <span className="italic font-extrabold text-base">!</span>
//                 {firebaseError}
//               </p>
//             )}
//             <p className="font-semibold mt-3 text-center">
//               If you don't have an account kindly{" "}
//               <Link href={"/form"} className="text-blue-300 underline">
//                 Sign-up
//               </Link>{" "}
//             </p>
//             <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
//             <div className="flex flex-col space-y-4">
//               <button
//                 className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                 type="button"
//               >
//                 <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
//                 <span className="text-neutral-700 dark:text-neutral-300 text-sm">
//                   GitHub
//                 </span>
//                 <BottomGradient />
//               </button>
//               <button
//                 className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
//                 type="button"
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
//     </div>
//   );
// }

// const BottomGradient: React.FC = () => {
//   return (
//     <>
//       <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
//       <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
//     </>
//   );
// };

// const LabelInputContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
//   return (
//     <div className={cn("flex flex-col space-y-2 w-full", className)}>
//       {children}
//     </div>
//   );
// };













"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Label } from "./ui/Label";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { LuLoader } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice"; // Import the setUser action

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const [firebaseError, setFirebaseError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const [signInWithEmailAndPassword, userCredential] = useSignInWithEmailAndPassword(auth);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrEmail("");
    setFirebaseError("");
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrPassword("");
    setFirebaseError("");
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrEmail("");
    setErrPassword("");
    setSuccessMsg("");
    setFirebaseError("");

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Enter your password");
    }

    if (email && password) {
      try {
        setLoading(true);
        const res = await signInWithEmailAndPassword(email, password);

        if (res && res.user) {
          setLoading(false);
          setSuccessMsg("Logged in successfully! Welcome");

          // Fetch user profile
          const userName = res.user.displayName || "User"; // Use displayName if available
          const department = res.user.email || "Department";

          dispatch(setUser({ userName, department, email: res.user.email })); // Update the Redux store with user data

          setTimeout(() => {
            router.push("/dashboard");
          }, 2000);
        } else {
          setLoading(false);
          setFirebaseError("Your credentials are incorrect");
        }
      } catch (error) {
        setLoading(false);
        setFirebaseError("Your credentials are incorrect");
        console.error(error);
      }
    }
  };

  return (
    <div className="z-50">
      <div className="overflow-clip">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:-top-20 md:left-96 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="mx-2 md:mx-0 overflow-clip shadow-md mt-12 shadow-slate-500 sm:shadow-transparent">
        <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-md bg-black-200">
          <h2 className="font-bold text-xl text-center mb-2 text-neutral-200">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <input
                id="email"
                value={email}
                onChange={handleEmail}
                type="email"
                className="p-2 border-[1px] rounded-md outline-none"
              />
              {errEmail && (
                <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-2">
                  <span className="italic font-extrabold text-base">!</span>
                  {errEmail}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <input
                id="password"
                value={password}
                onChange={handlePassword}
                type="password"
                className="p-2 border-[1px] rounded-md outline-none"
              />
              {errPassword && (
                <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 -mt-2">
                  <span className="italic font-extrabold text-base">!</span>
                  {errPassword}
                </p>
              )}
            </LabelInputContainer>

            <button
              type="submit"
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  justify-center bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-center items-center flex"
            >
              Login &rarr;
              <BottomGradient />
            </button>
            {loading && (
              <div className="flex items-center justify-center mt-4">
                <span className="animate-spin text-green-600 text-4xl">
                  <LuLoader />
                </span>
              </div>
            )}
            {successMsg && (
              <p className="text-base font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center mt-4">
                {successMsg}
              </p>
            )}
            {firebaseError && (
              <p className="text-xs text-red-600 font-semibold tracking-wide flex items-center gap-2 mt-4">
                <span className="italic font-extrabold text-base">!</span>
                {firebaseError}
              </p>
            )}
            <p className="font-semibold mt-3 text-center">
              If you don't have an account kindly{" "}
              <Link href={"/form"} className="text-blue-300 underline">
                Sign-up
              </Link>{" "}
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <div className="flex flex-col space-y-4">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
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
    </div>
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

const LabelInputContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
