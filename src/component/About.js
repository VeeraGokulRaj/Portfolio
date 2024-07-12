import React from "react";

import transition from "../transition";
import 'react-circular-progressbar/dist/styles.css';
import Skills from "./Skills";
import Resume from "../assets/Resume/Veera_Resume.pdf"
import { FaCloudDownloadAlt } from "react-icons/fa";

function About() {
  
  return (

    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] h-full ">

      <div className="sm:flex sm:flex-col sm:items-center sm:justify-center pt-20">
        <div className="relative flex items-center justify-center">
          <h1 className="sm:text-9xl  text-6xl font-extrabold absolute text-[#5d5d5d] opacity-20">RESUME</h1>
          <div className="relative z-10">
            <h1 className="sm:text-6xl text-3xl font-extrabold">
              ABOUT <span className="text-[#42aefc]">ME</span>
            </h1>
          </div>
        </div>
      </div>
    <div className="sm:flex sm:gap-2 mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center justify-center items-center sm:ml-36 sm:gap-8 gap-2 m-20">
        <div className="dark:border-[#232222] border-2 sm:p-14 p-6">
          <p className="sm:text-6xl text-4xl font-bold text-[#42aefc]">2</p>
          <p className="sm:text-lg sm:text-right">COMPLETED</p>
          <p className="sm:text-lg sm:text-right">PROJECTS</p>
        </div>
        <div className="dark:border-[#232222] border-2 sm:p-14 p-6">
          <p className="sm:text-6xl text-4xl font-bold text-[#42aefc]">1</p>
          <p className="text-lg sm:text-right">ONGOING</p>
          <p className="text-lg sm:text-right">PROJECTS</p>
        </div>
      </div>
      <div className="sm:text-right text-center sm:p-10 sm:ml-20 sm:m-2 p-2">
        <h1 className="font-bold text-2xl mb-6">PERSONAL INFOS</h1>
        <div className="sm:flex">
        <div className="">
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">VEERAGOKULRAJ :</span> First Name
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">Indian :</span> Nationality
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">Salem, Tamil Nadu, India :</span> Address
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">easwarigokul@gmail.com :</span> Email
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">English,Tamil :</span> Languages
        </p>
        </div>
        <div className="ml-10">
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">Suresh :</span> Last Name
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">Years 21 :</span> Age
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold text-green-400">Available :</span> Developer
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">8610658443 :</span> Phone
        </p>
        <p className="pb-4 text-[#B3B3B3]">
          <span className="font-semibold dark:text-white text-[#616262]">17 Oct 2002 :</span> DOB
        </p>
        <a href={Resume} download="Resume">
        <div className="text-center flex sm:justify-end justify-center">
          <button 
            type="submit" 
            className="relative overflow-hidden text-[#616262] dark:text-white rounded-full flex items-center gap-2 border border-[#42aefc] group hover:text-white mt-8"
          >
          <span className="relative z-10 pl-6 py-2 font-semibold">DOWNLOAD CV</span>
          <div className="absolute inset-0 bg-[#42aefc] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          <span className='relative z-10 bg-[#42aefc] p-2 rounded-full'><FaCloudDownloadAlt size={24} color='white' /></span>
      </button>
    </div>
        </a>
        </div>
        </div>
      </div>
     </div>
     <Skills/>
    </div>    
  );
}

export default transition(About);
