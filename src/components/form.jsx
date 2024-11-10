import React from 'react'
import { ChevronDown } from 'lucide-react'

const Form = ({ formValue }) => {
    return (
        <div className={`${formValue.width === "full" ? 'flex-1' : ''} ${formValue.border && 'border-r border-[#e7e7e7]'} px-5 py-2 flex flex-col hover:bg-[#eaf5ff] cursor-pointer`} style={{ minWidth: formValue.width, minHeight: formValue.height }} >

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
                    <span className='text-4xl font-bold truncate'>{formValue.place}</span>
                    <span className='text-[#4a4a4a] text-sm truncate'>{formValue.fullplacename}</span>
                    <span className='text-[#4a4a4a] text-sm'>{formValue.country}</span>
                </>
            }

            {formValue.roomAndGuest &&
                <div>
                    <span className='font-bold text-4xl'>{formValue.rooms}</span>
                    <span className='text-xl mr-1'>Rooms </span>
                    <span className='font-bold text-4xl'>{formValue.adults}</span>
                    <span className='text-xl'>Adults</span>
                </div>
            }

            {formValue.guestAndChildren &&
                <div>
                    <span className='font-bold text-4xl'>{formValue.adults}</span>
                    <span className='text-xl mr-1'>Adults</span>
                    <span className='font-bold text-4xl'>{formValue.children}</span>
                    <span className='text-xl'>Children</span>
                </div>
            }

            {formValue.price &&
                <>
                    <span className='text-xl'>Rs.{formValue.lower}-Rs.{formValue.higher} </span>
                </>
            }
            {formValue.pickupTime &&
                <>
                    <div>
                        <span className='font-bold text-4xl mr-1'>{formValue.hour}:{formValue.minute}</span>
                        <span className='text-xl'>{formValue.shift}</span>
                    </div>
                    <div className='text-[12px] font-normal text-[#757575] italic'>{formValue.message}</div>
                </>
            }

            {formValue.addReturnDate &&
                <>
                    <div className='text-[#757575] font-bold'>{formValue.message}</div>
                </>
            }

            {formValue.selectPackage &&
                <>
                    <div>
                        <span className='font-bold text-4xl mr-1'>{formValue.distance}</span>
                    </div>
                </>
            }


        </div>
    )
}

export default Form