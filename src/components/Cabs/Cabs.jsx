import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import Form from '../form'
import { cabsInfo } from './cabs.config'
import { cabsOneWay } from './cabs.config'

const Cabs = () => {
  const [cabActiveTab, setcabActiveTab] = useState("Outstation One-Way")
  return (
    <>
      <div className='w-[1200px] relative bg-white pt-16 pb-10 px-5 -top-12 rounded-xl mb-11 shadow-2xl'>
        {/* Tabs  */}
        <div className='flex gap-10'>
          <RadioGroup className="flex gap-4 mb-2" defaultValue={cabActiveTab}>
            {
              cabsInfo.map(cabInfo =>
                <div key={cabInfo.id} onClick={() => { setcabActiveTab(cabInfo.value) }} className={`flex cursor-pointer items-center p-1 ${cabInfo.value === cabActiveTab ? 'bg-[#eaf5ff] rounded-full' : ''} `}>
                  <RadioGroupItem value={cabInfo.value} id={cabInfo.id} />
                  <Label className={`cursor-pointer pl-2 font-normal text-sm text-[#4a4a4a] ${cabInfo.value === cabActiveTab ? 'font-bold text-black' : ''}`} htmlFor={cabInfo.id}>{cabInfo.value}</Label>
                </div>
              )
            }
          </RadioGroup>

        </div>

        {cabActiveTab === "Outstation One-Way" && (
          <div className='w-full border rounded-lg mb-5 flex border-[#e7e7e7]' >
            {cabsOneWay.map(cabValue => <Form key={cabValue.title} formValue={cabValue} />)}
          </div>
        )}

        <div className='text-[#008cff] font-bold cursor-pointer ml-5' >+ Add Stops</div>

        <p className='flex justify-center relative'>
          <button className='absolute -bottom-10 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold '>SEARCH</button>
        </p>
      </div>
    </>
  )
}

export default Cabs
