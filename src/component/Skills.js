import React from "react";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref: animation, inView: animationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: "JAVA", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
    { name: "HTML", icon: "https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000" },
    { name: "CSS", icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
    { name: "REACT", icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png" },
    { name: "EXPRESS", icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" },
    { name: "NODE", icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
    { name: "MONGODB", icon: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000" },
    { name: "SQL", icon: "https://img.icons8.com/?size=100&id=qGUfLiYi1bRN&format=png&color=000000" },
    {
      name: "FIREBASE",
      icon:
        "https://www.gstatic.com/devrel-devsite/prod/ve7ce216351f398481fccad3cbbc60c699e78bde8533bfe4daa150955665bb2bf/firebase/images/lockup.svg"
    }
  ];

  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-slate-800 w-full sm:pb-0 pb-5">
      <div className=" w-[85%] max-w-[85%] mx-auto pb-8 sm:pb-5">
        <h1 className="font-bold text-2xl sm:text-4xl my-10 sm:my-20 text-center underline underline-offset-8 decoration-[1.5px] sm:decoration-[2.5px] decoration-[#2196f3]">
          MY SKILLS
        </h1>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6  justify-center items-center">
          {skills.map(skill => (
            <div key={skill.name} className={`relative flex flex-col items-center  justify-center mx-auto `}>
              <div className="relative w-16 h-16 half-nav:w-20 half-nav:h-20 md:w-24 md:h-24 hover:scale-project ease-in duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`h-[90%] sm:h-full w-auto rounded-full ${animationInView ? "animate-skillEffect" : ""} `}
                    ref={animation} // Ensure the image fits within the circle
                  />
                </div>
              </div>
              <p className="text-[.8rem] sm:text-base text-center mt-4 font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
