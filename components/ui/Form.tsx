
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "./Label";
import { cn } from "@/utils/cn";

import { Spotlight } from "./Spotlight";
import { LuLoader } from "react-icons/lu";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/authSlice";
  {/* @ts-ignore*/}
export function SignupFormDemo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [clientName, setClientName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");

  // error messages
  const [errClientName, setErrClientName] = useState<string>("");
  const [errDepartment, setErrDepartment] = useState<string>("");
  const [errEmail, setErrEmail] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const [errCPassword, setErrCPassword] = useState<string>("");

  // loading state
  const [loading, setLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>("");

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  // handle functions
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleDepartment = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartment(e.target.value);
    setErrDepartment("");
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleCPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // email validation function
  const emailValidation = (email: string): boolean => {
    return String(email).toLowerCase().includes("@gmail.com");
  };

  const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrClientName("");
    setErrDepartment("");
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

    if (!department) {
      setErrDepartment("Please your department is required...");
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
  {/* @ts-ignore*/}
      if (res.user) {
        await updateProfile(auth.currentUser!, {
          displayName: clientName,
        });
//  {/* @ts-ignore*/}
        dispatch(setUser({
          
          userName: clientName,
          department: department,
          
          email: email
        }));
    {/* @ts-ignore*/}
        setLoading(false);
        setSuccessMsg("Account Created Successfully");
        setTimeout(() => {
          router.push("/login");
        }, 3000);

        setClientName("");
        setDepartment("");
        setEmail("");
        setPassword("");
        setCPassword("");
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  return (
    <>
      {/* @ts-ignore*/}
      <div className="overflow-clip">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="mx-2 md:mx-0 overflow-clip mt-20 md:mt-32 mb-4 shadow-md shadow-slate-500 sm:shadow-transparent">
        <div className="max-w-md md:max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-slate-500 shadow-lg bg-white dark:bg-black-200">
          <h2 className="font-bold text-xl mb-4 text-center text-neutral-800 dark:text-neutral-200">
            Sign-up
          </h2>

          <form onSubmit={handleRegistration}>
            <div className="mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className=" mb-2">First name</Label>
                <input
                  id="firstname"
                  type="text"
                  value={clientName}
                  className="p-2 border-[1px] rounded-md outline-none"
                  onChange={handleName}
                />
                
                {errClientName && (
                  <p className="text-xs text-red-500 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-extrabold text-base">!</span>
                    {errClientName}
                  </p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className=" mb-2">Email Address</Label>
              <input
                id="email"
                value={email}
                type="email"
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handleEmail}
              />
              {errEmail && (
                <p className="text-xs text-red-500 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errEmail}
                </p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="department" className=" mb-2">Department</Label>
              <input
                id="department"
                value={department}
                type="text"
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handleDepartment}
              />

              {errDepartment && (
                <p className="text-xs text-red-500 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errDepartment}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className=" mb-2">Password</Label>
              <input
                id="password"
                type="password"
                value={password}
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handlePassword}
              />
              {errPassword && (
                <p className="text-xs text-red-500 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errPassword}
                </p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4" >
              <Label htmlFor="cpassword" className=" mb-2">Confirm Password</Label>
              <input
                id="cpassword"
                type="password"
                value={cPassword}
                className="p-2 border-[1px] rounded-md outline-none"
                onChange={handleCPassword}
              />
              {errCPassword && (
                <p className="text-xs text-red-500 font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                  <span className="italic font-extrabold text-base">!</span>
                  {errCPassword}
                </p>
              )}
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 justify-center dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all "
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <LuLoader className="animate-spin" />
                </div>
              ) : (
                "Sign up"
              )}
            </button>
          </form>
          <p className="text-center mt-4 text-neutral-800 dark:text-neutral-200">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:underline dark:text-blue-300"
            >
              Login
            </Link>
          </p>

          {successMsg && (
            <motion.div
              className="p-3 my-4 bg-green-100 text-green-800 rounded-lg border border-green-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {successMsg}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

interface LabelInputContainerProps extends React.HTMLProps<HTMLDivElement> {}

const LabelInputContainer: React.FC<LabelInputContainerProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("flex flex-col", className)} {...props}>
    {children}
  </div>
);













