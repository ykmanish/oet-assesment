import React from "react";
import { faqData } from "./faqData";
import FaqCard from "./FaqCard";
import AosComponent from "./AosComponent";
import Link from "next/link";
const FAQ = () => {
  return (
    <AosComponent
      animationType="fade-up"
      duration={800}
      easing="ease-in-out"
      once
    >
    <div>
      <div className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="py-20">
            <div className="text-gray-600">
              <div className="pb-16 space-y-2 px-6 text-center">
                <h2 className="lg:text-6xl text-4xl font-bold heading text-[#0c0c0c] md:text-6xl ">
                  Frequently Asked Questions
                </h2>
                <p className="small lg:text-lg text-sm tracking-wide pt-3 text-gray-800 ">
                  Here are some of the frequently asked questions by our students. If you have any other questions, feel free to contact us.
                </p>
              </div>
              <div className="flex space-y-4 px-4 max-w-4xl mx-auto flex-col justify-center">
                {/* Loop through FAQ data */}
                {faqData.map((faq) => (
                  <FaqCard
                    key={faq.id}
                    id={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
              <div className="px-3">
              <h1 className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-1  max-w-lg border border-[#a6d9f5]  rounded-3xl mx-auto lg:text-lg  py-3 text-[#0c0c0c] heading text-center">
                Didn't find what you were looking for? {" "}
                <Link href="/Contact" className="text-[#21b0fe] cursor-pointer">Contact us</Link>

              </h1>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </AosComponent>
  );
};

export default FAQ;
