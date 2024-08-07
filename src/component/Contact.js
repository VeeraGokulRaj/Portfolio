import React, { useRef } from "react";
import transition from "../transition";
import { FaInstagram, FaTelegramPlane, FaGithub, FaLinkedin, FaWhatsapp, FaMap, FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref: animation, inView: animationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("service_f4wqqzs", "template_ynrkuba", form.current, "-h9Usn4BYbJLT6t5f").then(
      result => {
        console.log(result.text);
        alert("Email sent successfully!");
      },
      error => {
        console.log(error.text);
        alert("Failed to send email.");
      }
    );
  };
  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white]  sm:h-screen">
      <h1 className="text-4xl half-nav-bt-sm:text-5xl md:text-6xl font-extrabold text-center py-7 sm:py-12 underline underline-offset-8 decoration-[3px] decoration-[#2196f3]">
        CONTACT <span className="text-[#2196f3] dark:text-[#42aefc]">ME</span>
      </h1>
      <div class="sm:flex flox-col items-center mx-auto sm:mx-0 justify-center sm:flex-row sm:items-start ml-0 sm:ml-[4%] sm:justify-center w-[95%] mt-8 half-nav:mt-12 md:mt-20 mr-0">
        <div
          className={`sm:w-[35%] w-[90%] mx-auto sm:mx-0 ${animationInView ? "animate-zoomIn" : ""} `}
          ref={animation}
          id="form"
        >
          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-6 flex gap-4">
                <div className="mb-1 w-full ">
                  <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wide " />
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="YOUR EMAIL"
                    className="input-field border-2 dark:border-slate-300 border-slate-400 rounded-full mb-2 w-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-0 focus:border-separate"
                    name="email"
                  />
                </div>
                <div className="mb-1 w-full">
                  <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider" />
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="YOUR NAME"
                    className="input-field border-2 dark:border-slate-300 border-slate-400 rounded-full mb-2 w-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-0 focus:border-separate"
                    name="name"
                  />
                </div>
              </div>
              <div className="mb-1 sm:mb-6 ">
                <label htmlFor="subject" className="pb-1 text-xs uppercase tracking-wider" />
                <input
                  type="text"
                  id="subject"
                  autoComplete="given-subject"
                  placeholder="YOUR SUBJECT"
                  className="input-field border-2 dark:border-slate-300 border-slate-400 rounded-full mb-2 w-full text-right dark:bg-[#252525] py-3 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-0 focus:border-separate"
                  name="subject"
                />
              </div>
              <div className="mb-1 sm:mb-6 ">
                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider" />
                <textarea
                  id="textarea"
                  name="message"
                  cols="30"
                  rows="6"
                  placeholder="YOUR MESSAGE"
                  className="input-field mb-2 w-full border-2 dark:border-slate-300 border-slate-400 rounded-2xl text-right dark:bg-[#252525] py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 focus:outline-0 focus:border-separate"
                />
              </div>
            </div>
            <div className="text-center flex justify-end ">
              <button
                type="submit"
                className="relative overflow-hidden text-slate-800 dark:text-white rounded-full flex items-center gap-2 border border-[#42aefc] group hover:text-white"
              >
                <span className="relative z-10 pl-6 py-2 font-bold">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-[#2196f3] dark:bg-[#42aefc] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 bg-[#2196f3] bg:text-[#42aefc] p-2 rounded-full">
                  <FaTelegramPlane size={30} color="white" />
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="sm:w-[45%] w-full sm:mx sm:flex flex-col sm:items-center py-7 sm:py-0">
          <div className="text-center sm:text-right">
            <h2 className="text-xl half-nav:text-xl md:text-2xl font-semibold ">Catch Me Via Social Platforms</h2>
            <div
              className={`flex justify-center sm:justify-end space-x-6 py-7 ${animationInView ? "animate-zoomIn" : ""} `}
              ref={animation}
            >
              <a
                href="https://www.instagram.com/_.v_.e_.e_.r_.a_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white ease-in duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com/VeeraGokulRaj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white ease-in duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/veeragokulraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white ease-in duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8610658443&text=Hai VEERA "
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white p-2 rounded-full hover:bg-[#2196f3] dark:hover:bg-[#42aefc] hover:text-white ease-in duration-300"
              >
                <FaWhatsapp size={30} />
              </a>
            </div>
          </div>

          <div className="">
            <ul class="mb-6 text-right p-0">
              <li class="flex items-center justify-center sm:justify-end mb-3">
                <div class={`mr-4 ${animationInView ? "animate-fromLeftToCenter" : ""} `} ref={animation}>
                  <h3 class="leading-6 dark:text-slate-400 text-slate-800 text-base half-nav:text-base md:text-lg">
                    ADDRESS POINT
                  </h3>
                  <p class="font-semibold dark:text-white text-slate-900 text-[1rem] half-nav:text-[1rem] md:text-[1.1rem]">
                    TamilNadu , Salem-636008
                  </p>
                </div>
                <FaMap
                  size={38}
                  className={`text-[#2196f3] dark:text-[#42aefc] ${animationInView ? "animate-fromRightToCenter" : ""} `}
                  ref={animation}
                />
              </li>
              <li class="flex items-center justify-center sm:justify-end my-5">
                <div class={`mr-4 ${animationInView ? "animate-fromLeftToCenter" : ""} `} ref={animation}>
                  <h3 class="leading-6 dark:text-slate-400 text-slate-800 text-base half-nav:text-base md:text-lg">MAIL ME</h3>
                  <p class="font-semibold dark:text-white text-slate-900 text-[1rem] half-nav:text-[1rem] md:text-[1.1rem]">
                    easwarigokul@gmail.com
                  </p>
                </div>
                <IoMdMailOpen
                  size={38}
                  className={`text-[#2196f3] dark:text-[#42aefc] ${animationInView ? "animate-fromRightToCenter" : ""} `}
                  ref={animation}
                />
              </li>
              <li class="flex items-center justify-center sm:justify-end my-5">
                <div class={`mr-4 ${animationInView ? "animate-fromLeftToCenter" : ""} `} ref={animation}>
                  <h3 class="leading-6 dark:text-slate-400 text-slate-800 text-base half-nav:text-base md:text-lg">CALL ME</h3>
                  <p class="font-semibold dark:text-white text-slate-900 text-[1rem] half-nav:text-[1rem] md:text-[1.1rem]">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 8610658443
                  </p>
                </div>
                <FaPhoneSquareAlt
                  size={38}
                  className={`text-[#2196f3] dark:text-[#42aefc] ${animationInView ? "animate-fromRightToCenter" : ""} `}
                  ref={animation}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden sm:display:block fixed bottom-0 w-full mx-auto bg-[#2196f3] dark:bg-[#42aefc] sm:flex justify-between items-center py-3">
        <h1 className="text-base half-nav-bt-sm:text-base md:text-lg text-white text-center half-nav-bt-sm:[35%] md:w-[30%]">
          © 2024 VEERA. All Rights Reserved.
        </h1>
        <div className="flex w-[30%] justify-evenly mr-[5%]">
          <a
            href="https://www.instagram.com/_.v_.e_.e_.r_.a_/"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-300 ease-in duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/VeeraGokulRaj"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-300 ease-in duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/veeragokulraj/"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-200 ease-in duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8610658443&text=Hai VEERA "
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-200 ease-in duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default transition(Contact);
