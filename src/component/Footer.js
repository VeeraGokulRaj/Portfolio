import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <div className="hidden sm:display:block fixed bottom-0 w-full mx-auto bg-[#2196f3] dark:bg-[#42aefc] sm:flex justify-between items-center py-3">
        <h1 className="text-base half-nav-bt-sm:text-base md:text-lg text-white text-center half-nav-bt-sm:[35%] md:w-[30%]">
          © 2024 VEERA. All Rights Reserved.
        </h1>
        <div className="flex w-[30%] justify-evenly mr-[5%]">
          
          <a
            href="https://www.linkedin.com/in/veeragokulraj/"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-200 ease-in duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/VeeraGokulRaj"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-300 ease-in duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8610658443&text=Hai VEERA "
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-200 ease-in duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/_.v_.e_.e_.r_.a_/"
            class="text-xl half-nav-bt-sm:xl md:text-2xl text-white text-center hover:text-slate-300 ease-in duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
  );
}

export default Footer;
