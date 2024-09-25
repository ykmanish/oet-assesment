import React from "react";
import Link from "next/link";
import Image from "next/image";
const CourseCard = ({ imgSrc, title, description,id }) => {
  return (
    <>
      <div class="bg-white hover:scale-105 duration-500 transition-all w-full h-auto py-3 rounded-3xl">
        <div class="p-6">
          <div class="border   w-20 h-6 flex justify-center items-center text-sm text-black small rounded-xl">
            Feature{" "}{id}
          </div>
          <h1 class="heading text-[#0c0c0c] mt-3 text-xl">
            {title}
          </h1>
        </div>
        <Image
        width={500}
        height={500}
          src={imgSrc}
          alt="feature1"
          class="w-full h-auto object-cover"
        />
        <p class="p-6 small">
          {description}
        </p>
      </div>
    </>
  );
};

export default CourseCard;
