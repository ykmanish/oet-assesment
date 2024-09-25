import React from "react";

const OtherContact = ({ imgSrc, title, description }) => {
  return (
    <div>
      <div className="border grid grid-cols-5 justify-center  items-center w-full h-24 rounded-2xl">
        <div className="col-span-1 flex justify-center items-center">
          <img
            src={imgSrc}
            alt="map"
            className="w-8 h-8  object-fill rounded-xl"
          />
        </div>
        <di className="col-span-4">
          <h1 className="text-lg flex-col heading ">{title}</h1>
          <span className="text-sm small tracking-wide mt-2">
            {description}
          </span>
        </di>
      </div>
    </div>
  );
};

export default OtherContact;
