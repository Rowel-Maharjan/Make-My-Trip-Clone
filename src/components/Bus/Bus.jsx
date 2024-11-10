import React from 'react'
import Form from '../form'
import { busInfo } from '../config'

const Bus = () => {
  return (
    <>
      <div className='w-[1200px] relative bg-white pt-14 pb-10 px-5 -top-12 rounded-xl'>
        <div className='flex gap-1 justify-center mb-3'>
          <span className='font-semibold'>Bus Ticket Booking.</span>
          <span className='text-blue-700 font-bold cursor-pointer'>Travelling with a group? Hire a bus.</span>
        </div>

        <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
          {busInfo.map(roomValue => <Form key={roomValue.title} formValue={roomValue} />)}
        </div>

        <p className='flex justify-center relative'>
          <button className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
        </p>
      </div>
    </>
  )
}
export default Bus
