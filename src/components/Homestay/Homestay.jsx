import React, { useState } from 'react'
import Form from '../form'
import { homestayInfo } from './homestay.config'
import { useForm } from 'react-hook-form';


const Homestay = () => {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState({
    "city, property name or location": 'Lalitpur',
    "check-in": new Date(),
    "check-out": new Date(),
    "rooms & guests": "1Adults 0children",
    "price per night": "Rs.0 - Rs.1500",
    "value": "Homestay&Villa"
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
        <div className='flex gap-10 justify-center font-semibold mb-2'>Book your ideal Homestay - Villas, Apartments & more.</div>

        <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
          {homestayInfo.map(roomValue => <Form key={roomValue.title} formValue={roomValue} onChangeHandler={onChangeHandler} />)}
        </div>

        <p className='flex justify-center relative'>
          <button onClick={handleSubmit(onSubmit)} className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
        </p>
      </div>
    </>
  )
}

export default Homestay
