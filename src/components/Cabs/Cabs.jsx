import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import Form from '../form'
import { cabsInfo } from './cabs.config'
import { cabsOneWay } from './cabs.config'
import { cabsRoundTrip } from './cabs.config'
import { cabsAirportTransfer } from './cabs.config'
import { cabsHourlyRentals } from './cabs.config'
import { useForm } from 'react-hook-form';

const Cabs = () => {
  const [cabActiveTab, setcabActiveTab] = useState("Outstation One-Way")
  const { handleSubmit } = useForm();

  const [formDataOneWay, setFormDataOneWay] = useState({
    "from": "Lalitpur",
    "to": "Kathmandu",
    "departure": new Date(),
  });
  const [formDataRoundTrip, setFormDataRoundTrip] = useState({
    "from": "Lalitpur",
    "to": "Kathmandu",
    "departure": new Date(),
    "return": new Date()
  });
  const [formDataAirportTransfer, setFormDataAirportTransfer] = useState({
    "from": "Tribhuvan Internation Airport, Kathmandu",
    "to": "Pokhara International Airport, Pokhara",
    "departure": new Date(),
  });
  const [formDataHourlyRental, setFormDataHourlyRental] = useState({
    "pickup location": "Lalitpur",
    "pickup date": new Date(),
  });

  const onChangeHandlerOneWay = (title, value) => {
    setFormDataOneWay((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };
  const onChangeHandlerRoundTrip = (title, value) => {
    setFormDataRoundTrip((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };
  const onChangeHandlerAirportTransfer = (title, value) => {
    setFormDataAirportTransfer((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };
  const onChangeHandlerHourlyRental = (title, value) => {
    setFormDataHourlyRental((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onSubmit = () => {
    if(cabActiveTab === "Outstation One-Way")
      console.log(formDataOneWay); 
    else if(cabActiveTab === "Outstation Round-Trip")
      console.log(formDataRoundTrip); 
    else if(cabActiveTab === "Airport Transfers")
      console.log(formDataAirportTransfer);
    else
      console.log(formDataHourlyRental) 
  };
  return (
    <>
      <div className='w-[1200px] relative bg-white pt-16 pb-10 px-5 -top-12 rounded-xl mb-11 shadow-2xl'>
        {/* Tabs  */}
        <div className='flex justify-between gap-10'>
          <RadioGroup className="flex gap-4 mb-2" defaultValue={cabActiveTab}>
            {
              cabsInfo.map(cabInfo =>
                <Label htmlFor={cabInfo.id} key={cabInfo.id} onClick={() => { setcabActiveTab(cabInfo.value) }} className={`flex cursor-pointer items-center p-1 ${cabInfo.value === cabActiveTab ? 'bg-[#eaf5ff] rounded-full' : ''} `}>
                  <RadioGroupItem value={cabInfo.value} id={cabInfo.id} />
                  <Label className={`cursor-pointer pl-2 font-normal text-sm text-[#4a4a4a] ${cabInfo.value === cabActiveTab ? 'font-bold text-black' : ''}`} htmlFor={cabInfo.id} >{cabInfo.value}</Label>
                </Label>
              )
            }
          </RadioGroup>

          <div className='text-[#4a4a4a] font-normal text-sm'>Online Cab Booking</div>

        </div>

        {cabActiveTab === "Outstation One-Way" && (<>
          <div className='w-full border relative rounded-lg mb-5 flex border-[#e7e7e7]' >
            {cabsOneWay.map(cabValue => <Form onChangeHandler={onChangeHandlerOneWay} key={cabValue.title} formValue={cabValue} />)}
          </div>
          <div className='text-[#008cff] font-bold cursor-pointer ml-5' >+ Add Stops</div>
        </>
        )}

        {cabActiveTab === "Outstation Round-Trip" && (<>
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {cabsRoundTrip.map(cabValue => <Form onChangeHandler={onChangeHandlerRoundTrip} key={cabValue.title} formValue={cabValue} />)}
          </div>
          <div className='text-[#008cff] font-bold cursor-pointer ml-5' >+ Add Stops</div>
        </>
        )}

        {cabActiveTab === "Airport Transfers" && (<>
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {cabsAirportTransfer.map(cabValue => <Form onChangeHandler={onChangeHandlerAirportTransfer} key={cabValue.title} formValue={cabValue} />)}
          </div>
        </>
        )}


        {cabActiveTab === "Hourly Rentals" && (<>
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {cabsHourlyRentals.map(cabValue => <Form onChangeHandler={onChangeHandlerHourlyRental} key={cabValue.title} formValue={cabValue} />)}
          </div>
        </>
        )}


        <p className='flex justify-center relative'>
          <button onClick={handleSubmit(onSubmit)} className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
        </p>
      </div>
    </>
  )
}

export default Cabs
