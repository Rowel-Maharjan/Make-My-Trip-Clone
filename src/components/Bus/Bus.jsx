import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { busInfo, VisitingArea, FooterOffering } from './bus.config';
import Form from '../form';
import VisitingPlaces from '../VisitingPlaces';
import Offerings from '../Offerings';


const Bus = () => {
  const { handleSubmit } = useForm();

  const [formData, setFormData] = useState({
    from: 'Thecho, Lalitpur',
    to: 'Satdobato, Lalitpur',
    "date": new Date(),
    "value": "Bus"
  });

  const onChangeHandler = (title, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onSubmit = () => {
    console.log(formData); // Here, we can access the form data
  };

  return (
    <>
      <div className='w-[1200px] relative bg-white pt-14 pb-10 px-5 -top-12 rounded-xl'>
        <div className='flex gap-1 justify-center mb-3'>
          <span className='font-semibold'>Bus Ticket Booking.</span>
          <span className='text-blue-700 font-bold cursor-pointer'>Travelling with a group? Hire a bus.</span>
        </div>

        <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]'>
          {busInfo.map((roomValue) => (
            <Form key={roomValue.title} formValue={roomValue} onChangeHandler={onChangeHandler} />
          ))}
        </div>

        <p className='flex justify-center relative'>
          <button
            className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold'
            onClick={handleSubmit(onSubmit)}
          >
            SEARCH
          </button>
        </p>
      </div>

      <div className='w-[1200px] flex bg-white py-10 px-10 -top-12 rounded-xl custom-shadow  mb-11'>
        <VisitingPlaces VisitingPlaces={VisitingArea} />
      </div>
      <div className='w-[1200px]'>
        <Offerings offerings={FooterOffering} />
      </div>
    </>
  );
};

export default Bus;
