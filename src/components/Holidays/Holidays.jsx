import React, { useState } from 'react'
import Form from '../form'
import { searchInfo } from './holiday.config'
import { holidayInfo } from './holiday.config'
import { Search } from 'lucide-react'

const Holidays = () => {
  const [holidayActiveTab, setholidayActiveTab] = useState("Search")
  return (
    <>
      <div className='w-[1200px] relative bg-white pb-10  -top-12 rounded-xl'>
        <div className='w-full h-[120px] mb-4 bg-[#eaf5ff]'>
          <div className='grid grid-cols-6 h-[120px]'>
            {
              holidayInfo.map(info =>
                <div key={info.id} onClick={() => setholidayActiveTab(info.value)} defaultValue={holidayActiveTab} className='flex relative items-end justify-center border-r border-r-[#d8d8d8] cursor-pointer'>
                  <div className='flex items-center gap-2 mb-5'>
                    <span className='h-6 w-6 overflow-hidden rounded-full '>
                      {info.img ? <img src={info.img} alt="Not Found" className='object-cover h-full w-full' /> : <Search color="#008cff" />}
                    </span>
                    {console.log(holidayActiveTab, info.value)}
                    <div className={`font-bold text-sm ${holidayActiveTab === info.value ? 'text-[#008cff] font-extrabold' : 'text-[#4a4a4a] '}  `}>{info.value}</div>
                  </div>
                  {
                    holidayActiveTab === info.value && <div className="absolute w-full h-1 bg-[#008cff] left-0 bottom-0">
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid transparent',
                          borderRight: '8px solid transparent',
                          borderTop: '8px solid #008cff',
                        }}
                      ></div>
                    </div>
                  }

                </div>
              )
            }
          </div>
        </div>
        <div className='px-5'>
          {
            holidayActiveTab === "Search" && <>
              <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
                {searchInfo.map(roomValue => <Form key={roomValue.title} formValue={roomValue} />)}
              </div>
              <p className='flex justify-center relative'>
                <button className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
              </p>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Holidays
