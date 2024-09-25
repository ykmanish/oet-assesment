import React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./testimonialData";
import AosComponent from "./AosComponent";
const Testimonials = () => {
  return (
    <AosComponent
      animationType="fade-up"
      duration={800}
      easing="ease-in-out"
      once
    >
    <div>
      <div class="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div class=" pt-20">
            <div class=" text-gray-600 ">
              <div class="pb-16 space-y-2 px-3 text-center">
                <h2 class="lg:text-6xl text-4xl font-bold heading text-[#0c0c0c] md:text-6xl dark:text-white">
                  What Our <br class="lg:hidden block"/>Students Say
                </h2>
                <p class=" small tracking-wide lg:text-lg text-sm pt-3 text-gray-800 dark:text-gray-300">
                  Our courses are designed to help you achieve your goals. We
                  have a range of features that will help you learn and grow.
                </p>
              </div>
              <div class="grid  px-3 gap-4 lg:grid-cols-3 ">
                
{
  testimonialData.map((testimonial,index) => (
    <TestimonialCard
      id={testimonial.id}
      key={index}
      description={testimonial.description}
      name={testimonial.name}
      post={testimonial.post}
      rating={testimonial.rating}
      imgSrc={testimonial.imgSrc}
    />
  ))
}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </AosComponent>
  );
};

export default Testimonials;
