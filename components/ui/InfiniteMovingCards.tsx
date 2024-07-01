"use client";
import logo from "../../assets/soma.jpg";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import benita from "../../assets/benita.jpg";
import papilo from "../../assets/papilo.jpg";
import emere from "../../assets/emere.jpg";
import delight from '../../assets/chisom.jpg'
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // max-w-7xl to w-screen
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          // change gap-16
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* 1 */}
        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              What a fantastic app this is! I am genuinely impressed by the
              exceptional job you have done. Keep up the great work, my dear. I
              really do love it and appreciate all the effort and creativity
              that went into its development thanks{" "}
              <span className=" text-purple"> @Amadi Sixtus Tochukwu.</span>
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">
                <Image
                  src={logo}
                  alt=""
                  className=" md:h-16 md:w-16 h-16 w-16 zoom-out-110  rounded-full"
                />
              </div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="md:text-xl text-xs font-bold leading-[1.6] text-white">
                  Onuigbo nmesomachi precious
                </span>
                {/* change text color */}
                <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                  Department of{" "}
                  <span className=" text-purple">Nutrition and dietetics</span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        {/* 2 */}

        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              This app has exceeded my expectations in every way, and I am
              excited to continue using it. Your dedication and hard work are
              truly commendable, and I look forward to seeing more amazing
              updates in the future. Thank you for creating such an outstanding
              application!
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">
                <Image
                  src={benita}
                  alt=""
                  className=" md:h-16 md:w-16 h-16 w-16 zoom-out-110  rounded-full"
                />
                {/* // here the image */}
              </div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="md:text-xl text-xs font-bold leading-[1.6] text-white">
                  Uzoeto Ogechi Anita...
                </span>
                {/* change text color */}
                <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                  Department of{" "}
                  <span className=" text-purple">
                    History and international studies
                  </span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        {/* 3 */}
        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              This Result Tracking Management System is really helping us i am
              grateful for the excellent job you have done in developing this,
              <span className=" text-purple"> @Amadi Sixtus Tochukwu</span>.
              Your hard work and dedication have not gone unnoticed, and we look
              forward to seeing even more positive impacts from this system in
              the future. Thank you for building this!
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">
                <Image
                  src={papilo}
                  alt=""
                  className="md:h-16 md:w-16 h-16 w-16 zoom-out-110  rounded-full"
                />
                {/* // here the image */}
              </div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="md:text-xl text-xs font-bold leading-[1.6] text-white">
                  Irechukwu Ekene Christopher
                </span>
                {/* change text color */}
                <span className="text-sm leading-[1.6] text-white-200 font-normal">
                  Department of <span className=" text-purple">management</span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        {/* 4 */}

        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              What amazes me about this app is that after calculating your
              results, it shows you the detailed breakdown of your calculations.
              Additionally, you can store your results in your own personal
              dashboard. This is truly amazing. Thank you for this,{" "}
              <span className=" text-purple"> @Amadi Sixtus Tochukwu!</span>
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">
                {/* // here the image */}
                <Image
                  src={emere}
                  alt=""
                  className=" md:h-16 md:w-16 h-16 w-16 zoom-out-110  rounded-full"
                />
              </div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="md:text-xl text-sm font-bold leading-[1.6] text-white">
                  Christian Emere Amadi
                </span>
                {/* change text color */}
                <span className="text-sm leading-[1.6] text-white-200 font-normal">
                  Department of{" "}
                  <span className=" text-purple">computer science</span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        {/* 5 */}

        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              I really love this app, especially the beautiful user interface (UI).
              Whenever I use this app, I feel like I'm flying in space to meet God. I truly
              love its design and especially it's functionalities.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">{/* // here the image */}
              <Image
                  src={delight}
                  alt=""
                  className=" md:h-16 md:w-16 h-16 w-16 zoom-out-110  rounded-full"
                />

              </div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="md:text-xl text-sm font-bold leading-[1.6] text-white">
                  Delight Chisom
                </span>
                {/* change text color */}
                <span className="text-sm leading-[1.6] text-white-200 font-normal">
                  Department of <span className=" text-purple">Education Physics</span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>

        {/* 6 */}

        <li
          //   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
          className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
             flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
          style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
          // change to idx cuz we have the same name
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            {/* change text color, text-lg */}
            <span className=" relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
              Collaborating with Adrian was an absolute pleasure. His
              professionalism, promptness, and.
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              {/* add this div for the profile img */}
              <div className="me-3">{/* // here the image */}</div>
              <span className="flex flex-col gap-1">
                {/* change text color, font-normal to font-bold, text-xl */}
                <span className="text-xl font-bold leading-[1.6] text-white">
                  Ejike progress
                </span>
                {/* change text color */}
                <span className=" text-sm leading-[1.6] text-white-200 font-normal">
                  Department of <span className=" text-purple">mathematics</span>
                </span>
              </span>
            </div>
          </blockquote>
        </li>
      </ul>
    </div>
  );
};
