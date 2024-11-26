import React from 'react'
import { aboutData } from './hotel.config';

const About = () => {
    return (
        <div className="bg-[#e7e7e7] w-full pt-16 pb-14">
            <div className="w-[1200px] mx-auto">
                <div className="flex flex-wrap">
                    {aboutData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-[50%] gap-6 flex-grow pb-[28px] ${index % 2 === 0 ? "pr-24" : "pl-24"
                                } ${index >= 2 ? "mt-[44px]" : ""} ${index < 2 ? "border border-b-[#979797]" : ""}`}
                        >
                            <div className="text-base font-bold">{item.title}</div>
                            <div className="text-xs font-normal text-[#4a4a4a]">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About
