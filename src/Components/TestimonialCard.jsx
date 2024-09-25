import React from "react";
import Image from "next/image";
const TestimonialCard = ({ description, name, post, rating, imgSrc }) => {
  return (
    <div>
      <div class="bg-white border border-zinc-100 hover:-translate-y-3 hover:border-[#21b0fe]  duration-500 transition-all p-6 w-full h-auto py-6 rounded-3xl">
        <p class="small text-sm tracking-wide text-[#101010]">{description}</p>
        <div class="border border-zinc-100  w-full mt-3"></div>
        <div class="flex  justify-between">
          <div class="flex mt-4 items-center">
            <Image
            width={500}
            height={500}
              src={imgSrc}
              alt="feature1"
              class="w-10 h-10 rounded-full object-cover"
            />
            <h1 class="heading flex text-[#0c0c0c] flex-col ml-2">
              {name}
              <span class="small tracking-wide text-[#9381ff] text-sm">
                {post}
              </span>
            </h1>
          </div>
          <div class="flex mt-4 items-center">
            <img
              src="/star.svg"
              alt="feature1"
              class="w-4 h-4 rounded-full object-cover"
            />
            <h1 class="heading flex flex-col ml-2">{rating}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
