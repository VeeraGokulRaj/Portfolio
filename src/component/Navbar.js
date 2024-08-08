import React from "react";
import { MdHome, MdAccountCircle } from "react-icons/md";
import { IoMdMailOpen } from "react-icons/io";
import { SiGooglescholar, Si9Gag } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const routePage = val => {
    navigate(val);
  };

  // Function to determine if the current button should have a yellow background
  const isActive = path => {
    return location.pathname === path;
  };
  const isActivePortfolio = isActive("/Portfolio") || isActive("/");

  const bgColor = isActivePortfolio ? "[#2196f3]" : "[#EEEEEE]";
  const darkBgColor = isActivePortfolio ? "[#42aefc]" : "[#2B2A2A]";

  return (
    <div className=" sm:fixed justify-center flex sm:flex-col sm:gap-4 gap-[1.4rem] sm:top-[30%] sm:right-24 sm:w-10  sm:mt-0 pb-4 sm:pb-0 half-nav:right-3">
      <section
        className={`text-${bgColor} dark:text-${darkBgColor} hover:text-[#2196f3] dark:hover:text-[#42aefc] ease-in duration-200`}
      >
        <button
          className={`group flex items-center justify-start half-nav:w-10 half-nav:h-10 md:h-11 md:w-11 w-10 h-10 
                   bg-${bgColor} dark:bg-${darkBgColor} text-[#666666] dark:text-white 
                   rounded-full cursor-pointer relative overflow-hidden transition-all 
                   duration-300 shadow-lg show-nav:hover:w-32 active:translate-x-1 active:translate-y-1 
                   hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white`}
          onClick={() => {
            routePage("/Portfolio");
          }}
        >
          <div className="flex items-center justify-center w-full show-nav:transition-all show-nav:duration-300 show-nav:group-hover:justify-start show-nav:group-hover:px-3">
            <MdHome size={24} />
          </div>
          <div className="absolute show-nav:right-5 right-3 show-nav:transform show-nav:translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 show-nav:group-hover:translate-x-0 show-nav:group-hover:opacity-100">
            Home
          </div>
        </button>
        <p className="text-[.73rem] text-center pt-2 sm:hidden">HOME</p>
      </section>
      <section
        className={`dark:text-${isActive("/Portfolio/about") ? "[#42aefc]" : "[#2B2A2A]"} text-${
          isActive("/Portfolio/about") ? "[#42aefc]" : "[#EEEEEE]"
        } hover:text-[#2196f3] dark:hover:text-[#42aefc] ease-in duration-200`}
      >
        <button
          className={`group flex items-center justify-start half-nav:w-10 half-nav:h-10 md:h-11 md:w-11 w-10 h-10 dark:bg-${
            isActive("/Portfolio/about") ? "[#42aefc]" : "[#2B2A2A]"
          } bg-${
            isActive("/Portfolio/about") ? "[#42aefc]" : "[#EEEEEE]"
          } text-[#666666] dark:text-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg show-nav:hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white`}
          onClick={() => {
            routePage("/Portfolio/about");
          }}
        >
          <div className="flex items-center justify-center w-full show-nav:transition-all show-nav:duration-300 show-nav:group-hover:justify-start show-nav:group-hover:px-3">
            <MdAccountCircle size={24} />
          </div>
          <div className="absolute show-nav:right-5 right-3 show-nav:transform show-nav:translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 show-nav:group-hover:translate-x-0 show-nav:group-hover:opacity-100">
            About
          </div>
        </button>
        <p className="text-[.73rem] text-center pt-2 sm:hidden">ABOUT</p>
      </section>
      <section
        className={`dark:text-${isActive("/Portfolio/education") ? "[#42aefc]" : "[#2B2A2A]"} text-${
          isActive("/Portfolio/education") ? "[#42aefc]" : "[#EEEEEE]"
        } hover:text-[#2196f3] dark:hover:text-[#42aefc] ease-in duration-200`}
      >
        <button
          className={`group flex items-center justify-start half-nav:w-10 half-nav:h-10 md:h-11 md:w-11 w-10 h-10 dark:bg-${
            isActive("/Portfolio/education") ? "[#42aefc]" : "[#2B2A2A]"
          } bg-${
            isActive("/Portfolio/education") ? "[#42aefc]" : "[#EEEEEE]"
          } text-[#666666] dark:text-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg show-nav:hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white`}
          onClick={() => {
            routePage("/Portfolio/education");
          }}
        >
          <div className="flex items-center justify-center w-full show-nav:transition-all show-nav:duration-300 show-nav:group-hover:justify-start show-nav:group-hover:px-3">
            <SiGooglescholar size={24} />
          </div>
          <div className="absolute right-2 show-nav:transform show-nav:translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 show-nav:group-hover:translate-x-0 show-nav:group-hover:opacity-100">
            Education
          </div>
        </button>
        <p className="text-[.73rem] text-center pt-2 sm:hidden">EDU</p>
      </section>
      <section
        className={`dark:text-${isActive("/Portfolio/project") ? "[#42aefc]" : "[#2B2A2A]"} text-${
          isActive("/Portfolio/project") ? "[#42aefc]" : "[#EEEEEE]"
        } hover:text-[#2196f3] dark:hover:text-[#42aefc] ease-in duration-200`}
      >
        <button
          className={`group flex items-center justify-start half-nav:w-10 half-nav:h-10 md:h-11 md:w-11 w-10 h-10 dark:bg-${
            isActive("/Portfolio/project") ? "[#42aefc]" : "[#2B2A2A]"
          } bg-${
            isActive("/Portfolio/project") ? "[#42aefc]" : "[#EEEEEE]"
          } text-[#666666] dark:text-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg show-nav:hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white`}
          onClick={() => {
            routePage("/Portfolio/project");
          }}
        >
          <div className="flex items-center justify-center w-full show-nav:transition-all show-nav:duration-300 show-nav:group-hover:justify-start show-nav:group-hover:px-3">
            <Si9Gag size={24} />
          </div>
          <div className="absolute show-nav:right-5 right-3 show-nav:transform show-nav:translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 show-nav:group-hover:translate-x-0 show-nav:group-hover:opacity-100">
            Project
          </div>
        </button>
        <p className="text-[.73rem] text-center pt-2 sm:hidden">PROJECT</p>
      </section>
      <section
        className={`dark:text-${isActive("/Portfolio/contact") ? "[#42aefc]" : "[#2B2A2A]"} text-${
          isActive("/Portfolio/contact") ? "[#42aefc]" : "[#EEEEEE]"
        } hover:text-[#2196f3] dark:hover:text-[#42aefc] ease-in duration-200`}
      >
        <button
          className={`group flex items-center justify-start half-nav:w-10 half-nav:h-10 md:h-11 md:w-11 w-10 h-10 dark:bg-${
            isActive("/Portfolio/contact") ? "[#42aefc]" : "[#2B2A2A]"
          } bg-${
            isActive("/Portfolio/contact") ? "[#42aefc]" : "[#EEEEEE]"
          } text-[#666666] dark:text-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-lg show-nav:hover:w-32 active:translate-x-1 active:translate-y-1 hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white`}
          onClick={() => {
            routePage("/Portfolio/contact");
          }}
        >
          <div className="flex items-center justify-center w-full show-nav:transition-all show-nav:duration-300 show-nav:group-hover:justify-start show-nav:group-hover:px-3">
            <IoMdMailOpen size={24} />
          </div>
          <div className="absolute show-nav:right-5 right-3 show-nav:transform show-nav:translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 show-nav:group-hover:translate-x-0 show-nav:group-hover:opacity-100">
            Contact
          </div>
        </button>
        <p className="text-[.73rem] text-center pt-2 sm:hidden">CONTACT</p>
      </section>
    </div>
  );
}

export default Navbar;
