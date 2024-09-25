import React from "react";
import CourseCard from "./CourseCard";
import { features } from "./featureData";
import AosComponent from "../AosComponent";
const CourseFeatures = () => {
  return (
    <AosComponent
      animationType="fade-up"
      duration={800}
      easing="ease-in-out"
      once
    >
    <div class="bg-[#fafafa]" id="Features">

   
    <div className="max-w-7xl  mx-auto">
      <div class="pt-20">
        <div class="xl:container m-auto px-3 text-gray-600 md:px-12 xl:px-6">
          <div class="pb-16 space-y-2 text-center">
            <h2 class="lg:text-6xl text-4xl font-bold heading text-[#0c0c0c] md:text-6xl ">
              Course Features
            </h2>
            <p class=" small tracking-wide lg:text-lg text-sm pt-3 text-gray-800 ">
              Our courses are designed to help you achieve your goals. We have a
              range of features that will help you learn and grow.
            </p>
          </div>
          <div class="grid  gap-8 md:grid-cols-2 lg:grid-cols-3">
            {
              features.map((feature) => (
                <CourseCard
                id={feature.id}
                  key={feature.id}
                  imgSrc={feature.imgSrc}
                  title={feature.title}
                  description={feature.description}
                />  
              ))
            }
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </AosComponent>
  );
};

export default CourseFeatures;
