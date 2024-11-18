import React from 'react'
import './Header.css'
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const Icon = ({ type }) => {
    return <span className={`icon icon-${type}`} />;
  };

  return (
    <div className='flex text-white items-center justify-between' >
      <img width={150} src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="" />
      <div className='flex gap-4'>

        <div className='flex items-center gap-2 cursor-pointer'>
          <Icon type="listYourProperty" />
          <div className='flex flex-col text-[11px]' >
            <div className='leading-3'>List Your Property</div>
            <div className='text-gray-300 leading-3' >Grow your business</div>
          </div>
        </div>

        <div className='flex items-center gap-2 cursor-pointer shadow-lg px-3 border-dotted border-l-2 border-white/15'>
          <Icon type="myTripsIcon" />
          <div className='flex flex-col' >
            <div className='text-[11px] leading-3 font-bold'>My Trips</div>
            <div className='text-[10px] font-normal leading-3'>Manage your bookings</div>
          </div>
        </div>

        <div className='flex gap-2'>
          <div className='flex items-center gap-2 bg-gradient-to-r from-[#53b2fe] to-[#065af3] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <Icon type="myIconWhite" />
            <div className='flex w-40 items-center justify-between' >
              <div className='text-[11px] leading-3'>Login or Create Account </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>


          <div className='flex items-center gap-2 bg-[#ffffff26] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <div className='flex items-center gap-2' >
              <div className='text-[11px] leading-3'>NEP | ENG </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>


          <div className='flex items-center gap-2 bg-[#ffffff26] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <div className='flex items-center gap-2' >
              <div className='text-[11px] leading-3'>NPR </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header



