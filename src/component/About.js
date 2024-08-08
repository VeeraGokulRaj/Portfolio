import React from "react";
import transition from "../transition";
import "react-circular-progressbar/dist/styles.css";
import Skills from "./Skills";
import Resume from "../assets/Resume/Veera_Resume.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: animation, inView: animationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[black] sm:h-screen w-full">
      <section>
        <h1 className="text-4xl half-nav-bt-sm:text-5xl md:text-6xl font-extrabold text-center py-20 hidden sm:block underline underline-offset-8 decoration-[2px] sm:decoration-[2.5px] decoration-[#2196f3]">
          ABOUT <span className="text-[#2196f3] dark:text-[#42aefc]">ME</span>
        </h1>
      </section>
      <div className="mb-10  mx-auto w-[90%] sm:mx-[3%] md:my-20 ">
        <h1 className="text-3xl font-extrabold text-center py-10  sm:py-20 block sm:hidden underline underline-offset-8 decoration-[1.5px] sm:decoration-[2.5px] decoration-[#2196f3]">
          ABOUT <span className="text-[#42aefc]">ME</span>
        </h1>
        <div className="flex flex-col justify-center items-center sm:flex-row md:justify-around sm:items-start sm:justify-start">
          <section className="w-[90%] mx-auto sm:mx-0 sm:w-[30%]">
            <p className="font-bold text-2xl hidden sm:block mb-5 text-center sm:text-left underline underline-offset-8 decoration-[1.5px] sm:decoration-[2.5px] decoration-[#2196f3]">
              PROJECTS STATUS
            </p>
            <div className="grid grid-row-2 md:grid-cols-2 gap-4 sm:justify-between sm:items-center">
              <section className={`w-[100%] h-[100%] text-center ${animationInView ? "animate-zoomIn" : ""} `} ref={animation}>
                <div className="dark:border-gray-800  border-2 w-[70%] h-[100%] mx-auto p-10 sm:p-0 sm:mx-0 sm:w-[100%] sm:h-[100%]  md:w-[100%] md:h-[170%] flex items-center flex-col justify-center">
                  <p className="md:text-6xl text-4xl font-bold text-[#2196f3] dark:text-[#42aefc] hover:scale-project hover:-translate-y-3  ease-in duration-300">
                    2
                  </p>
                  <p className="sm:text-[.8rem] md:text-base mt-2 font-medium">
                    COMPLETED
                    <br />
                    PROJECTS
                  </p>
                </div>
              </section>
              <section className={`w-[100%] h-[100%] text-center ${animationInView ? "animate-zoomIn" : ""} `} ref={animation}>
                <div className="dark:border-gray-800  border-2 w-[70%] h-[100%] p-10 mx-auto sm:mx-0 sm:p-0 sm:w-[100%] sm:h-[100%] md:w-[100%] md:h-[170%] flex items-center flex-col justify-center">
                  <p className="md:text-6xl text-4xl font-bold text-[#2196f3] dark:text-[#42aefc] hover:scale-project hover:-translate-y-3 ease-in duration-300">
                    1
                  </p>
                  <p className="sm:text-[.8rem] md:text-base mt-2 font-medium ">
                    ONGOING
                    <br />
                    PROJECTS
                  </p>
                </div>
              </section>
            </div>
          </section>

          <section className="w-[80%] mx-auto sm:mx-0 my-7 sm:my-0 sm:w-[43%]">
            <p className="font-bold text-2xl my-7 sm:my-0 sm:mb-5 text-center sm:text-left underline underline-offset-8 decoration-[1.5px] sm:decoration-[2px] decoration-[#2196f3] ">
              PERSONAL INFO
            </p>
            <div className="flex flex-col justify-center items-center show-info:flex-row show-info:justify-between">
              <table
                className={`table-auto w-full show-info:w-[30%] ${animationInView ? "animate-fromLeftToCenter" : ""} `}
                ref={animation}
              >
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">First_Name</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">
                    VEERAGOKULRAJ{" "}
                  </td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Nationality</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">Indian </td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Address</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">
                    Salem, Tamil Nadu, India
                  </td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Email</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">
                    easwarigokul@gmail.com
                  </td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Languages</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">
                    Tamil and English
                  </td>
                </tr>
              </table>
              <table
                className={`tabel-auto w-full show-info:w-[30%] ${animationInView ? "animate-fromRightToCenter" : ""} `}
                ref={animation}
              >
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Last_Name</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">SURESH</td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Age</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">21</td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Roll</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">Developer</td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">Phone</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">8610658443</td>
                </tr>
                <p className="my-2" />
                <tr>
                  <td className="dark:text-[#B3B3B3] text-slate-600 font-medium">DOB</td>
                  <td className="font-semibold dark:text-white text-black text-end show-info:text-start pl-2 ">17/10/2002</td>
                </tr>
              </table>
            </div>
            <a href={Resume} download="Resume">
              <div className="text-center flex justify-center show-info:justify-end">
                <button
                  type="submit"
                  className="relative overflow-hidden text-[#616262] dark:text-white rounded-full flex items-center gap-2 border border-[#42aefc] group hover:text-white mt-8"
                >
                  <span className="relative z-10 pl-6 py-2 dark:text-[#f8f7f7] text-slate-700 hover:text-white dark:hover:text-[#f8f7f7] font-semibold">
                    DOWNLOAD CV
                  </span>
                  <div className="absolute inset-0 bg-[#2196f3] dark:bg-[#42aefc] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 bg-[#2196f3] dark:bg-[#42aefc] p-2 rounded-full">
                    <FaCloudDownloadAlt size={24} color="white" />
                  </span>
                </button>
              </div>
            </a>
          </section>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default transition(About);
