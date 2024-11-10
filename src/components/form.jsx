import React from 'react'
import { ChevronDown } from 'lucide-react'

const Form = ({ formValue }) => {
    return (
        <div className={`min-h-[${formValue.height}] ${formValue.width === "full"? 'w-full': `min-w-[${formValue.width}]` }  ${formValue.border && 'border-r border-[#e7e7e7]'} px-5 py-2 flex flex-col hover:bg-[#eaf5ff] cursor-pointer`}>

            <div className='mb-1 text-[#4a4a4a] text-sm flex items-center'>
                <span>{formValue.title}</span>
                {formValue.ChevronDown && <ChevronDown size={20} className='text-blue-500' />}
            </div>

            {formValue.dateInfo &&
                <>
                    <div >
                        <span className='font-bold text-4xl'>{formValue.date}</span>
                        <span className='text-xl'>{formValue.month}'</span>
                        <span className='text-[21px]'>{formValue.year}</span>
                    </div>
                    <span className='text-[#4a4a4a] text-sm'>{formValue.day}</span>
                </>
            }

            {formValue.city &&
                <>
                    <span className='text-4xl font-bold'>{formValue.place}</span>
                    <span className='text-[#4a4a4a] text-sm'>{formValue.country}</span>

                </>
            }

            {formValue.roomAndGuest &&
                <div>
                    <span className='font-bold text-4xl'>{formValue.rooms}</span>
                    <span className='text-xl'>Rooms </span>
                    <span className='font-bold text-4xl'>{formValue.adults}</span>
                    <span className='text-xl'>Adults</span>
                </div>
            }

            {formValue.price &&
                <>
                    <span className='text-xl'>Rs.{formValue.lower}-Rs.{formValue.higher} </span>
                </>
            }

        </div>
    )
}

export default Form
