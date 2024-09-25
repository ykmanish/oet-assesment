'use client'
import React from "react";
import AosComponent from "./AosComponent";
import Image from "next/image";
const Header = () => {

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("Features");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AosComponent
      animationType="fade-up"
      duration={500}
      easing="ease-in-out"
      once
    >
    <div class="bg-[#fafafa] " >
      <section class="pt-10 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="flex justify-center">
           <span className="border flex text-zinc-700 justify-center items-center gap-2 small border-[#21b0fe] mb-4 rounded-3xl px-6 py-2">
           Next batch starts soon!
           <img 
           
            src="/rightar.svg" class="h-5" alt="jaja" />
           </span>
            </div>

          <h1 class="max-w-3xl mx-auto heading text-center font-manrope font-bold text-3xl text-gray-900 mb-5 md:text-6xl leading-[50px]">
            OET Preparation for{" "}
            <span class="text-[#21b0fe]"> Healthcare Professionals</span>
          </h1>
          <p class="max-w-sm mx-auto small tracking-wide text-center text-base font-normal leading-7 text-gray-800 mb-9">
            Join us to boost your career!
          </p>
          <button
            onClick={scrollToNextSection}
            class="w-full md:w-auto heading lg:mb-0 mb-10 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-[#21b0fe] shadow-xs hover:bg-indigo-700 transition-all duration-500"
          >
            Enroll Now
            <svg
              class="ml-2 rotate-90"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="flex justify-center">
            <Image
            width={1800}
            height={1800}
              src="/mediheads.png"
              alt="Dashboard image"
              class="rounded-t-3xl hidden lg:block h-auto object-cover"
            />
            <Image
            width={600}
            height={600}
              src="/medamobiles.png"
              alt="Dashboard image"
              class="rounded-t-3xl block lg:hidden h-[50svh] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
    </AosComponent>
  );
};

export default Header;
