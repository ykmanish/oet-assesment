import React from "react";
import Image from "next/image";
const CTAOne = () => {
  return (
    <>
      <div class="max-w-7xl mx-auto">
        <div class="pt-20">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div class="flex flex-col overflow-hidden rounded-[35px] border bg-zinc-100 sm:flex-row md:h-80">
              <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                <h2 class="mb-4 heading text-xl  font-bold text-[#0c0c0c] md:text-2xl lg:text-4xl">
                  Ready to Excel in OET?
                </h2>

                <p class="mb-8 small text-md lg:text-lg text-zinc-700 max-w-md ">
                  Enroll in our OET preparation course and enhance your chances
                  of success.
                </p>

                <div class="mt-auto">
                  <button
                    
                    class="inline-block btn heading rounded-2xl bg-[#21b0fe] hover:bg-[#49b8f4] px-8 py-3 text-center text-sm font-semibold text-gray-50 transition duration-100  md:text-base"
                  >
                    Enroll now
                  </button>
                </div>
              </div>

              <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
                <Image
                width={1500}
                height={1500}
                  src="/ctabg.png"
                  loading="lazy"
                  alt="Photo by Dom Hill"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTAOne;
