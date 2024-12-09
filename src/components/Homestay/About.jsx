import React from 'react'
import { aboutData } from './homestay.config'

const About = () => {
    return (
        <div className=" bg-[#e7e7e7] w-full pt-16 pb-14">
            <div className='w-[1200px] mx-auto'>
                <div className='flex'>
                    {aboutData.map((item, index) => (
                        <div key={index} className={`flex flex-col gap-6 flex-grow w-[33%] ${index < aboutData.length - 1 ? 'mr-11' : ''}`}>
                            <div className='text-base font-bold'>
                                {item.title}
                            </div>
                            <div className='text-xs font-normal text-[#4a4a4a]'>
                                {item.description}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
