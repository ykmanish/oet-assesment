import React from "react";

const TimeLineCard = ({ id, description, bgColor, title, imgSrc }) => {
  return (
    <div>
      <div className="flex group  items-start">
        <div className="flex flex-col items-center">
          {/* Use inline styles for background color */}
          <div
            className=" p-2 lg:p-3 lg:group-hover:p-6 duration-500 transition-all  rounded-full"
            style={{ backgroundColor: bgColor }}
          ></div>
          <div className="h-16 w-px bg-gray-300"></div>
        </div>
        <div className="ml-4">
          <div
            style={{ backgroundColor: bgColor }}
            className=" w-6 h-2 group-hover:w-24 duration-500 transition-all rounded-2xl text-sm"
          ></div>
          <h2 className={`font-bold text-lg  heading mt-2 `}>{title}</h2>
          <p className="text-[#0c0c0c] text-md lg:text-xl small">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
