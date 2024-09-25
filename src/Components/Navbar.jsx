"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SigninModal from "./SigninModal";
import SignupModal from "./SignupModal";
// Avtar with darpdown menu
const AvatarMenue = () => {
  const [state, setState] = useState(false);
  const profileRef = useRef();



  

  return (
    <div className="relative  lg:border-none">
      <div className="flex mt-6 lg:mt-0 justify-center gap-4">
        
        <SigninModal/>
        <SignupModal/>
      </div>
      
    </div>
  );
};

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Home", path: "/" },

    
    { title: "Contact us", path: "/Contact" },
  ];

  return (
    <div className="text-base lg:text-sm">
      <div
        className={` items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full  inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold flex items-center text-gray-800 heading ">
              <img src="/logo.svg" alt="logo" className="h-8 w-8 mr-2" />
              Oetology
            </h1>
          </Link>
          <div className="lg:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-6 border-b lg:border-none mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center justify-end space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                  onClick={() => setState(!state)}
                    href={item.path}
                    className="block text-[16px] small text-gray-700 hover:text-gray-900"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <AvatarMenue />
          </ul>
        </div>
      </div>
    </div>
  );
};
