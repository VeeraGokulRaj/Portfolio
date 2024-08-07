import React from "react";
import transition from "../transition";
import Me from "../assets/Profile/veera.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Typewriter from "./TypeWriter";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Home() {
  const navigate = useNavigate();
  const texts = ["Web", "Software", "FrontEnd", "BackEnd"];
  const routePage = val => {
    navigate(val);
  };
  const { ref: animation, inView: animationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="sm:dark:bg-gradient-dark-back sm:bg-gradient-light-back ">
      <div className="w-[90%] mx-auto sm:mx-0 sm:ml-[2%] h-[94vh]  sm:h-screen flex flex-col justify-evenly items-center sm:flex-row sm:items-center sm:justify-evenly">
        <div className="w-[50%] sm:w-[45%] half-nav-bt-sm:w-[38%] md:w-[30%] ">
          <img
            className={`rounded-full sm:rounded-3xl shadow-gray-600 shadow-2xl w-[100%] h-[100%] sm:w-[95%] sm:h-[95%] half-nav-bt-sm:w-[90%] half-nav-bt-sm:h-[90%] md:w-[85%] md:h-[85%] ${
              animationInView ? "animate-zoomIn" : ""
            } `} ref={animation}
            src={Me}
            alt="VEERAGOKULRAJ S"
          />
        </div>
        <div className="w-[70%] sm:w-[50%] max-w-full">
          <section className="text-center text-2xl sm:text-4xl half-nav-bt-sm:text-[2.75rem] md:text-6xl font-bold">
            <h1 className="text-[#2196f3] dark:text-[#42aefc]">I'M</h1>
            <h1 className="text-[#2196f3] dark:text-[#42aefc]">VEERAGOKULRAJ</h1>
          </section>

          <section
            className={`text-center text-[.9rem] sm:text-[1.2rem] half-nav-bt-sm:text-[1.25rem] md:text-[1.9rem] font-bold my-3 sm:my-[1.5rem]  ${
              animationInView ? "animate-fromLeftToCenter" : ""
            } `} ref={animation}
          >
            <p>
              — Aspiring &nbsp;
              <Typewriter texts={texts} speed={100} interval={2000} />
              &nbsp;Developer!
            </p>
          </section>

          <p className={`text-justify mb-5 sm:mb-0 sm:mt-[2rem] text-[.95rem] sm:text-[1.35rem] ${
              animationInView ? "animate-fromRightToCenter" : ""
            } `} ref={animation}>
            &nbsp; &nbsp; &nbsp; "Eager to apply technical and management skills to achieve organizational targets. Passionate
            about innovation and problem-solving, honed through project leadership in bachelor's studies, committed to driving
            project success."
          </p>
          <div className="text-center flex justify-end">
            <button
              type="submit"
              className="relative overflow-hidden text-[#616262] dark:text-white rounded-full flex items-center gap-2 border border-[#42aefc] group hover:text-white  sm:mt-8"
              onClick={() => {
                routePage("/Portfolio/about");
              }}
            >
              <span className="relative z-10 pl-3 sm:pl-6 py-2 font-semibold text-[.75rem] sm:text-base">MORE ABOUT ME</span>
              <div className="absolute inset-0 bg-[#2196f3] dark:bg-[#42aefc] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 bg-[#2196f3] dark:bg-[#42aefc] p-2 rounded-full">
                <FaArrowCircleRight size={24} color="white" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default transition(Home);
