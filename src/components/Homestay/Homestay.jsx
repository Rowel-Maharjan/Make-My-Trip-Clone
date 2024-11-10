import React from 'react'
import Form from '../form'
import { homestayInfo } from '../config'


const Homestay = () => {
  return (
    <>
      <div className='w-[1200px] relative bg-white pt-14 pb-10 px-5 -top-12 rounded-xl'>

        {/* Tabs  */}
        <div className='flex gap-10 justify-center font-semibold mb-2'>Book your ideal Homestay - Villas, Apartments & more.</div>


        <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
          {homestayInfo.map(roomValue => <Form key={roomValue.title} formValue={roomValue} />)}
        </div>


        <p className='flex justify-center relative'>
          <button className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
        </p>
      </div>
    </>
  )
}

export default Homestay
