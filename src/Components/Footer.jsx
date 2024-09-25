import React from "react";
import Link from "next/link";
const Footer = () => {
  
  return (
    <div
      
      class="max-w-7xl bg-white  w-full h-auto py-6 lg:rounded-t-3xl mx-auto"
    >
      <div class=" flex px-6 max-w-5xl mx-auto  justify-between items-center pt-6  ">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="h-8 w-8 mr-2" />
          <a href="#" className="text-xl text-[#0c0c0c] font-bold  heading">
            Oetology
          </a>
        </div>

        <div className="hidden  md:flex justify-center space-x-12 items-center">
          <Link
            href="/"
            className="text-zinc-800 small hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          
         
          <Link
            href="/Contact"
            className="text-zinc-800 small hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        <div className="  flex justify-center space-x-6 items-center">
          <img
            src="https://www.svgrepo.com/show/452123/twitter.svg"
            alt="facebook"
            className="w-7 h-7"
          />
          <img
            src="https://www.svgrepo.com/show/331463/linkedin.svg"
            alt="instagram"
            className="w-6 h-6"
          />
          <img
            src="https://www.svgrepo.com/show/303154/instagram-2016-logo.svg"
            alt="twitter"
            className="w-6 h-6"
          />
        </div>
      </div>
      <div className="flex block lg:hidden space-x-6 mt-8 justify-center  items-center">
        <Link
          href="/"
          className="text-zinc-800 small hover:text-gray-200 transition-colors duration-200"
        >
          Home
        </Link>
        
        <Link
          href="/Contact"
          className="text-zinc-800 small hover:text-gray-200 transition-colors duration-200"
        >
          Contact
        </Link>
        
      </div>
      <div class="border max-w-6xl  mx-auto border-zinc-100 w-full mt-5"></div>
      <div class=" flex flex-col pb-4 lg:pb-0 lg:flex-row max-w-5xl mx-auto  justify-between items-center pt-10">
        <p class="small tracking-wide text-[#101010]">
          Made with ❤️ by{" "}
          <Link href="/" class="text-[#21b0fe]">
            Oetology
          </Link>
        </p>
        <p class="small mt-3 text-[#101010]">
          © 2024 Oetology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
