import React from 'react';
import transition from "../transition";
import Certficates from './Certficates';
import { FaSchool } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

function Education() {
    const timelineItems = [
        {
            year: '2024',
            title: 'BACHELOR DEGREE',
            institution: 'K.S.R COLLEGE OF TECHNOLOGY',
            description: 'BTECH-INFORMATION TECHNOLOGY  CGPA:8.8',
            icon: <MdSchool className="text-white" size={32}/>,
        },
        {
            year: '2020',
            title: 'HSC',
            institution: 'JAIRAM HIGHER SECONDARY SCHOOL',
            description: '70.6%',
            icon: <FaSchool className="text-white" size={32}/>,
        },
        {
            year: '2018',
            title: 'SSLC',
            institution: 'JAIRAM HIGHER SECONDARY SCHOOL',
            description: '84%',
            icon: <FaSchool className="text-white" size={32}/>,
        },
    ];

    return (
        <div className="dark:bg-[#111111] bg-white dark:text-white text-[#616262] min-h-screen">
            <div className="flex flex-col items-center justify-center pt-20">
                <div className="relative flex items-center justify-center">
                    <h1 className="sm:text-8xl text-6xl font-extrabold absolute text-[#5d5d5d] opacity-20">EXPERIENCE</h1>
                    <div className="relative z-10">
                        <h1 className="sm:text-5xl text-3xl font-extrabold">
                            MY <span className="text-[#42aefc]">EDUCATION</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="relative mt-16 sm:mt-28">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
                {timelineItems.map((item, index) => (
                    <div key={index} className={`am:mb-16 mb-10 flex items-center  ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}>
                        <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'order-1 text-right' : 'order-2 text-left'}`}>
                            <div className="text-sm font-medium text-gray-400">{item.year}</div>
                            <h3 className="text-lg font-semibold">
                                {item.title} – <span className="font-normal">{item.institution}</span>
                            </h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <div className={`order-1 w-16 h-16 rounded-full bg-[#42aefc] flex items-center justify-center ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
            <Certficates/>
        </div>
    );
}

export default transition(Education);
