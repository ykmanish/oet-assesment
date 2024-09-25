'use client';
import React, { useState } from 'react';

const FaqCard = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`duration-500 ${isOpen ? "bg-[#d9f0ff] border border-zinc-100 scale-105" : "bg-white"} border border-zinc-100 px-4 transition-all w-full flex justify-between items-center h-auto py-6  rounded-2xl sm:rounded-3xl cursor-pointer`}
      onClick={toggleFAQ}
    >
      <div>
        <h1 className={`heading ${isOpen ? "text-sm sm:text-md text-[#101010] " : "text-[15px] lg:text-xl text-[#0c0c0c]"} mx-2 sm:mx-4 duration-500 transition-all flex items-center`}>
          
          {question}
        </h1>
        <div
          className={`small tracking-wide overflow-hidden transition-[max-height] duration-500 ease-in-out ${
            isOpen ? 'max-h-40' : 'max-h-0'
          }`}
        >
          <p className={`pt-2 lg:text-lg text-sm  mx-2  ${isOpen ? " mx-2 text-[#101010] lg:mx-4" : "text-[#101010]"}`}>{answer}</p>
        </div>
      </div>
      <div className="mx-2 hidden lg:block sm:mx-4 duration-500 transition-all">
        <img
          src={
            isOpen
              ? 'https://www.svgrepo.com/show/521755/minus.svg'
              : 'https://www.svgrepo.com/show/513803/add.svg'
          }
          alt="toggle-icon"
          className="w-5 sm:w-6 h-5 sm:h-6 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default FaqCard;
