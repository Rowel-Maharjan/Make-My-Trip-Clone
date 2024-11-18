
import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import Form from '../form'
import { hotelGroupDeals, hotelRoomValue, hotelRoomsInfo, VisitingArea } from './hotel.config'
import { useForm } from 'react-hook-form';
import VisitingPlaces from '../VisitingPlaces'

const Hotels = () => {
  const { handleSubmit } = useForm();
  const [hotelActiveTab, setHotelActiveTab] = useState("Upto 4 Rooms")

  const [formDataA, setFormDataA] = useState({
    "city, property name or location": 'Pokhara',
    "check-in": new Date(),
    "check-out": new Date(),
    "rooms & guests": "1Rooms 1Adults",
    "price per night": "Rs.0 - Rs.1500",
    "value": "Hotel-upto4rooms"
  });

  const [formDataB, setFormDataB] = useState({
    "city, property name or location": 'Chitwan',
    "check-in": new Date(),
    "check-out": new Date(),
    "rooms & guests": "1Rooms 1Adults",
    "value": "Hotel-groupDeals"
  });

  const onChangeHandlerA = (title, value) => {
    setFormDataA((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onChangeHandlerB = (title, value) => {
    setFormDataB((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onSubmit = () => {

    if (hotelActiveTab === "Upto 4 Rooms")
      console.log(formDataA); // Here, we can access the form data
    else
      console.log(formDataB)
  };

  return (
    <>
      <div className='w-[1200px] relative bg-white py-16 px-5 -top-12 rounded-xl mb-11 shadow-2xl'>
        {/* Tabs  */}
        <div className='flex gap-10'>
          <RadioGroup className="flex gap-4 mb-2" defaultValue={hotelActiveTab}>
            {
              hotelRoomsInfo.map(roominfo =>
                <Label htmlFor={roominfo.id} key={roominfo.id} onClick={() => { setHotelActiveTab(roominfo.value) }} className={`flex cursor-pointer items-center p-1 ${roominfo.value === hotelActiveTab ? 'bg-[#eaf5ff] rounded-full' : ''} `}>
                  <RadioGroupItem value={roominfo.value} id={roominfo.id} />
                  <Label className={`cursor-pointer pl-2 font-normal text-sm text-[#4a4a4a] ${roominfo.value === hotelActiveTab ? 'font-bold text-black' : ''}`} htmlFor={roominfo.id}>{roominfo.value}</Label>
                </Label>
              )
            }
          </RadioGroup>

          <div className='flex gap-1'>
            <span className='font-semibold'>Book Domestic and International Property Online. To list your property</span>
            <span className='text-blue-700 font-bold cursor-pointer'>Click Here</span>
          </div>

        </div>


        {/* Content Box  */}
        {hotelActiveTab === "Upto 4 Rooms" && (
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {hotelRoomValue.map(roomValue => <Form onChangeHandler={onChangeHandlerA} key={roomValue.title} formValue={roomValue} />)}
          </div>
        )}

        {hotelActiveTab === "Group Deals" && (
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]'>
            {hotelGroupDeals.map(roomValue => <Form onChangeHandler={onChangeHandlerB} key={roomValue.title} formValue={roomValue} />)}
          </div>
        )}

        <div className='text-sm text-[#4a4a4a] flex justify-center items-center gap-3'>
          <span>Trending Searches:</span>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>Mumbai, India</div>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>London, United Kingdom</div>
          <div className='p-1 rounded-sm cursor-pointer bg-[#f2f2f2]'>Bangkok, Thailand</div>
        </div>
        <p className='flex justify-center relative'>
          {hotelActiveTab === "Upto 4 Rooms" &&
            <button onClick={handleSubmit(onSubmit)} className='absolute -bottom-16 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>}
          {hotelActiveTab === "Group Deals" &&
            <button onClick={handleSubmit(onSubmit)} className='absolute -bottom-16 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>GET ME BEST PRICES</button>}
        </p>
      </div>
      <div className='w-[1200px] h-80  mb-10 relative bg-white py-16 px-5 -top-12 rounded-xl custom-shadow '>
        From Here
      </div>

      <div className='w-[1200px] flex relative bg-white py-10 px-10 -top-12 rounded-xl custom-shadow mb-11'>
        <VisitingPlaces VisitingPlaces={VisitingArea} />
      </div>
    </>
  )
}

export default Hotels


//Check