import React from "react";
import transition from "../transition";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa"; // Import icons from react-icons library
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import CIcon from '@coreui/icons-react';
import { cibBlender } from '@coreui/icons';

import SurvilanceSystem from "../assets/Projects/SurvilanceSystem.png";
import OnDuty from "../assets/Projects/OnDuty.jpg";
import bleander from "../assets/Projects/bleander.jpg";
import portfolio from "../assets/Projects/portfolio.png";

function Project() {
  const projectsData = [
    {
      id: 1,
      title: "Smart Surveillance System",
      image: SurvilanceSystem,
      description:
        "Developed Python face recognition system for student attendance monitoring and security using OpenCV and Dlib. Built a web application featuring secure OTP authentication and role-based data management using Firebase,ReactJS and Express JS Utilized image processing and computer vision for accurate identification of the students",
      stackIcons: [<FaReact />, <FaNodeJs />, <SiExpress />, <IoLogoFirebase />, <RiTailwindCssFill />], // Example icons for React and Node.js
      link: "https://github.com/VeeraGokulRaj/Finalyear_WebApplications"
    },
    {
      id: 2,
      title: "Online On-Duty Regestration",
      image: OnDuty,
      description:
        "Created an OnDuty registration system using HTML/CSS for front-end design and PHP for server-side scripting, enabling smooth user interaction and data processing.Integrated database connectivity via XAMPP, transitioning the conventional OnDuty process to an online system with CRUD operations for thorough management of on-duty requests and records.",
      stackIcons: [<FaHtml5 />, <FaCss3Alt />, <FaPhp />, <SiXampp />], // Example icons for React and Node.js
      link: "https://github.com/VeeraGokulRaj/WebTechnology_MiniProject"
    },
    {
      id: 3,
      title: "3D Models",
      image: bleander,
      description:
        "I developed a variety of 3D designs, gaining hands-on experience in creating detailed 3D meshes, sculpting, rigging, and texturing. Using Blender, I mastered the process from concept to fully rigged and textured models, enhancing my skills in 3D artistry and animation.",
      stackIcons: [<CIcon className={`w-[1.5rem] h-[1.5rem] `} icon={cibBlender} style={{ fill: '#2196f3' }} />], // Example icons for React and Node.js
      link: "https://drive.google.com/file/d/1Dt7qfVVGczPj6U3sMH9xLgCB9BMXI709/view"
    },
    {
      id: 4,
      title: "Portfolio",
      image: portfolio,
      description:
        "Created a user-friendly personal portfolio using React and Tailwind CSS to showcase professional achievements and skills effectively.",
      stackIcons: [<FaReact />, <RiTailwindCssFill />], // Example icons for React and Tailwind CSS
      link: ""
    }
  ];

  return (
    <div className="h-screen dark:text-white">
      <div className="h-[95vh] sm:h-screen dark:text-white flex flex-col  justify-evenly">
        <h1 className="text-4xl half-nav-bt-sm:text-5xl md:text-6xl font-extrabold text-center py-5 sm:py-0 underline underline-offset-8 decoration-[1.5px] sm:decoration-[2px] decoration-[#2196f3]">
          MY <span className="text-[#2196f3] dark:text-[#42aefc]">PROJECTS</span>
        </h1>
        <div className="flex sm:gap-12 gap-5 overflow-x-scroll w-[85%] mx-auto justify-start sm:ml-[4%]  container cursor-pointer pb-3 sm:pb-0">
          {projectsData.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.0 }}
              className="project-card dark:bg-[#252525] bg-[#F5F8FC] rounded-lg shadow-lg p-8 min-w-96 overflow-hidden hover:scale-x-105 transition-transform duration-300 dark:hover:text-[#42aefc] hover:text-[#2196f3]"
            >
              <a href={project.link} target="blank" className="block">
                <div className="relative overflow-hidden border-[#42aefc] border-b-4">
                  <img
                    className="w-full h-48 transform scale-100 hover:scale-110 transition-transform duration-300"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="dark:text-[#D2D2D2] text-[#616262] text-sm mt-2">{project.description}</p>
                <div className="flex items-center mt-4">
                  {project.stackIcons.map((icon, index) => (
                    <div
                      key={index}
                      className="mr-2 text-xl  text-[#2196f3] dark:text-[#42aefc] hover:-translate-y-2 hover:scale-110 ease-in duration-300"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default transition(Project);
