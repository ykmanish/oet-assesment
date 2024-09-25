import React from "react";
import TimeLineCard from "./TimeLineCard";
import { timelineData } from "./timeLineData";
import AosComponent from "./AosComponent";
const CourseFeatures = () => {
  return (
    <AosComponent
      animationType="fade-up"
      duration={800}
      easing="ease-in-out"
      once
    >
    <div class="bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div class=" pt-20">
          <div class=" text-gray-600 px-3 ">
            <div class="pb-14 space-y-2 text-center">
              <h2 class="lg:text-6xl text-4xl font-bold heading text-[#0c0c0c]  ">
                Course Timeline
              </h2>
              <p class=" small tracking-wide pt-3 lg:text-lg text-sm text-gray-800 ">
                Our courses are designed to help you achieve your goals. We have
                a range of features that will help you learn and grow.
              </p>
            </div>
            <div className="flex flex-col  items-start p-6 lg:p-10 bg-white rounded-[35px]  max-w-4xl mx-auto">
              {/* Timeline */}
              <div className="flex flex-col  space-y-8 w-full relative">
                {timelineData.map((data) => (
                  <TimeLineCard
                    key={data.id}
                    title={data.title}
                    bgColor={data.bgColor}
                    description={data.description}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AosComponent>
  );
};

export default CourseFeatures;
