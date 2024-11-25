import React from 'react'
import './Footer.css'

const Footer = () => {
    const Icon = ({ type }) => {
        return <span className={`Footericon ${type}`} />;
    };
    return (
        <div className='bg-black text-white pt-14 px-0 pb-[70px]'>
            <div className='w-[1200px] flex mx-auto justify-between'>
                <div className='flex items-center gap-10'>
                    <Icon type="instagramIcon" />
                    <Icon type="twitterIcon" />
                    <Icon type="linkedinIcon" />
                    <Icon type="facebookIcon" />
                </div>
                <div className='flex flex-col'>
                    <div className='font-bold text-base'>&copy; 2024 MAKEMYTRIP PVT.LTD.</div>
                    <div className='flex justify-end gap-1'>
                        <span className='font-normal text-sm'>Country</span>
                        <span className='font-black text-sm cursor-pointer'>Nepal India Maldives</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
