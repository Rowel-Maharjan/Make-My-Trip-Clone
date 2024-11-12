import React, { useState } from 'react'
import Form from '../form'
import { searchInfo, holidayInfo, CruisePlace, HolidaysPlace, HoneyMoonPlace, HolidaysPlaceItems, CruisePlaceItems, HoneyMoonItems, AirNepalExpress, LuxeItems, LuxePlace } from './holiday.config'
import { ChevronRight, Search } from 'lucide-react'

const Holidays = () => {
  const [holidayActiveTab, setholidayActiveTab] = useState("Search")

  const HoldiayContent = ({ title, places, PicturePlace }) => (
    <div className='p-3'>
      <div className='flex'>
        <div className='w-44 mr-7 flex justify-between'>
          <div className='text-[#008cff] font-black w-3/4'>{title}</div>
          <ChevronRight className='text-blue-500' strokeWidth={3} />
        </div>

        <div className='flex gap-20'>
          <div className='flex gap-28 mr-12'>
            <ul className='flex gap-1 flex-col text-[#4a4a4a]'>
              {places.slice(0, 5).map((place, index) => (
                <li key={index}><a className="cursor-pointer">{place}</a></li>
              ))}
            </ul>
            <ul className='flex gap-1 flex-col text-[#4a4a4a]'>
              {places.slice(5).map((place, index) => (
                <li key={index}><a className="cursor-pointer">{place}</a></li>
              ))}
            </ul>
          </div>

          {PicturePlace && <div className='flex gap-12'>
            {
              PicturePlace.map(place =>
                <div key={place.name} className='cursor-pointer'>
                  <div className='h-[88px] mb-2 overflow-hidden w-[88px] rounded-md'>
                    <img src={place.img} alt="Not Found" style={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover'
                    }} />
                  </div>
                  <p className='text-[#4a4a4a] font-black'>{place.name}</p>
                </div>
              )
            }
          </div>}

        </div>
      </div>
    </div>
  )



  return (
    <>
      <div className='w-[1200px] relative bg-white pb-7  -top-12 rounded-xl'>
        <div className='w-full h-[100px] mb-3 bg-[#eaf5ff]'>
          <div className='grid grid-cols-6 h-[100px]'>
            {
              holidayInfo.map(info =>
                <div key={info.id} onClick={() => setholidayActiveTab(info.value)} defaultValue={holidayActiveTab} className='flex relative items-end justify-center border-r border-r-[#d8d8d8] cursor-pointer'>
                  <div className='flex items-center gap-2 mb-4'>
                    <span className='h-6 w-6 overflow-hidden rounded-full '>
                      {info.img ? <img src={info.img} alt="Not Found" className='object-cover h-full w-full' /> : <Search color="#008cff" />}
                    </span>
                    <div className={`font-bold text-[13px] ${holidayActiveTab === info.value ? 'text-[#008cff] font-extrabold' : 'text-[#4a4a4a] '}  `}>{info.value}</div>
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
                <button className='absolute -bottom-7 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
              </p>
            </>
          }

          {
            holidayActiveTab === "Book@1" && <HoldiayContent title={"Book@1"} places={HolidaysPlaceItems} PicturePlace={HolidaysPlace} />
          }

          {
            holidayActiveTab === "Cruise" && <HoldiayContent title={"MMT Holidays Cruise Packages"} places={CruisePlaceItems} PicturePlace={CruisePlace} />
          }

          {
            holidayActiveTab === "Honeymoon" && <HoldiayContent title={"MakeMyTrip Honeymoon Packages"} places={HoneyMoonItems} PicturePlace={HoneyMoonPlace} />
          }

          {
            holidayActiveTab === "Air Nepal Express Holidays" && <HoldiayContent title={"Domestic & International"} places={AirNepalExpress} />
          }

          {
            holidayActiveTab === "Luxe Holidays" && <HoldiayContent title={"MMT Holidays Premium Packages"} places={LuxeItems} PicturePlace={LuxePlace} />
          }

        </div>
      </div>
    </>
  )
}

export default Holidays
