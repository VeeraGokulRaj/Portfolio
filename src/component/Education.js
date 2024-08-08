import React from "react";
import transition from "../transition";
import Certficates from "./Certficates";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Navbar from "./Navbar";

function Education() {
  const { ref: animation, inView: animationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const timelineItems = [
    {
      year: "2024",
      title: "BACHELOR DEGREE",
      institution: "K.S.R COLLEGE OF TECHNOLOGY",
      description: "BTECH-INFORMATION TECHNOLOGY  CGPA:8.8",
      icon: <MdSchool className="text-white" />
    },
    {
      year: "2020",
      title: "HSC",
      institution: "JAIRAM HIGHER SECONDARY SCHOOL",
      description: "70.6%",
      icon: <FaSchool className="text-white" />
    },
    {
      year: "2018",
      title: "SSLC",
      institution: "JAIRAM HIGHER SECONDARY SCHOOL",
      description: "84%",
      icon: <FaSchool className="text-white"/>
    }
  ];

  return (
    <div className="h-full sm:h-screen w-full">
      <div className="dark:bg-[#111111] bg-white dark:text-white ">
        <h1 className="text-4xl half-nav-bt-sm:text-5xl md:text-6xl font-extrabold text-center py-7 sm:py-12 underline underline-offset-8 decoration-[1.5px] sm:decoration-[2px] decoration-[#2196f3]">
          MY <span className="text-[#2196f3] dark:text-[#42aefc]">EDUCATION</span>
        </h1>
        <div className="relative my-10 sm:my-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`am:mb-16 mb-10 flex items-center  ${index % 2 === 0 ? "justify-start " : "justify-end "} relative`}
            >
              <div
                className={`w-1/2 px-6 ${
                  index % 2 === 0 && animationInView
                    ? "order-1 text-right animate-fromLeftToCenter"
                    : index % 2 === 0 && !animationInView
                    ? "order-1 text-right"
                    : index % 2 === 1 && animationInView
                    ? "order-2 text-left animate-fromRightToCenter"
                    : "order-2 text-left"
                }`}
                ref={animation}
              >
                <div className="sm:text-base font-bold text-gray-400">{item.year}</div>
                <h3 className="text-sm half-nav:text-base sm:text-lg font-semibold">
                  {item.title} – <span className="text-sm half-nav:text-base sm:text-lg">{item.institution}</span>
                </h3>
                <p className="text-[.75rem] sm:text-base text-gray-500">{item.description}</p>
              </div>
              <div
                className={`order-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#2196f3] dark:bg-[#42aefc] flex items-center justify-center ${
                  index % 2 === 0 && animationInView
                    ? "ml-6 animate-fromRightToCenter"
                    : index % 2 === 0 && !animationInView
                    ? "ml-6"
                    : index % 2 === 1 && animationInView
                    ? "mr-6 animate-fromLeftToCenter"
                    : "mr-6"
                } hover:-translate-y-6 ease-in duration-300 `}
                ref={animation}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Certficates />
        {/* <Navbar/> */}
    </div>
  );
}

export default transition(Education);
