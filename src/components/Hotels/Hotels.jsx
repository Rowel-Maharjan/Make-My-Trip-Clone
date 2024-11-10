import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { hotelRoomsInfo } from '../config'
import Form from '../form'
import { hotelRoomValue } from '../config'
import { hotelGroupDeals } from '../config'

const Hotels = () => {

  const [hotelActiveTab, setHotelActiveTab] = useState("Upto 4 Rooms")
  return (
    <>
      <div className='w-[1200px] relative bg-white py-14 px-5 -top-12 rounded-xl'>
        {/* Tabs  */}
        <RadioGroup className="flex gap-4 mb-6" defaultValue={hotelActiveTab}>
          {
            hotelRoomsInfo.map(roominfo =>

              <div key={roominfo.id} onClick={() => { setHotelActiveTab(roominfo.value) }} className={`flex cursor-pointer items-center p-1 ${roominfo.value === hotelActiveTab ? 'bg-[#eaf5ff] rounded-full' : ''} `}>
                <RadioGroupItem value={roominfo.value} id={roominfo.id} />
                <Label className={`cursor-pointer pl-2 font-normal text-sm text-[#4a4a4a] ${roominfo.value === hotelActiveTab ? 'font-bold text-black' : ''}`} htmlFor={roominfo.id}>{roominfo.value}</Label>
              </div>
            )
          }
        </RadioGroup>

        {/* Content Box  */}
        {hotelActiveTab === "Upto 4 Rooms" && (
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {hotelRoomValue.map(roomValue => <Form key={roomValue.title} formValue={roomValue} />)}
          </div>
        )}

        {hotelActiveTab === "Group Deals" && (
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]'>
            {hotelGroupDeals.map(roomValue => <Form key={roomValue.title} formValue={roomValue} />)}
          </div>
        )}

        <div className='text-sm text-[#4a4a4a] flex justify-center items-center gap-3'>
          <span>Trending Searches:</span>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>Mumbai, India</div>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>London, United Kingdom</div>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>Bangkok, Thailand</div>
        </div>
      </div>
    </>
  )
}

export default Hotels
