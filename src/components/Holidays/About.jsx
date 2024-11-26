import React from 'react'
import { aboutData, DestinationData } from './holiday.config';

const About = () => {
    return (
        <div className="bg-[#e7e7e7] w-full pt-16 pb-14">
            <div className="w-[1200px] mx-auto">
                <div className="flex flex-wrap">
                    {aboutData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-[50%] gap-6 flex-grow pb-[28px] ${index % 2 === 0 ? "pr-24" : "pl-24"
                                } ${index >= 2 ? "mt-[44px]" : ""} border border-b-[#979797]`}
                        >
                            <div className="text-base font-bold">{item.title}</div>
                            <div className="text-xs font-normal text-[#4a4a4a]">
                                {item.description.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={`${pIndex >= 1 && 'mt-5'}`}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='font-bold text-base border border-b-[#979797] py-10'>Best Destination to Visit in India</div>
                <div className="flex flex-wrap mt-10">
                    {DestinationData.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-[50%] gap-4 flex-grow pb-[28px] ${index % 2 === 0 ? "pr-24" : "pl-24"
                                } ${index >= 2 ? "mt-[44px]" : ""} ${index < 8 ? "border border-b-[#979797]" : ""} `}
                        >
                            <div className="text-base font-bold">{item.title}</div>
                            <div className="text-xs font-normal text-[#4a4a4a]">{item.description}
                            </div>
                            <div className='flex items-center gap-0.5'>
                                <span className='text-xs font-bold text-[#4a4a4a]'>Best Time to Visit:</span>
                                <span className='text-xs font-normal text-[#4a4a4a]'>{item.time}</span>

                            </div>
                            <div className='flex flex-col'>
                                <span className='text-xs font-bold text-[#4a4a4a] mb-3'>Best Places to visit:</span>
                                <div>
                                    <ul className="list-disc pl-14">
                                        {item.place.map((place, index) => (
                                            <li className='text-xs font-normal text-[#4a4a4a]' key={index}>{place}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='text-xs font-normal text-[#4a4a4a]'>{item.conclusion}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About
