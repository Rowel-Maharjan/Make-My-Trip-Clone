import React, { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ formValue, onChangeHandler }) => {
    const [PlaceName, setPlaceName] = useState()
    const selectRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const dateRef = useRef(null);
    const [returnDate, setReturnDate] = useState(false)
    const [dateStore, setDateStore] = useState({
        date: new Date().getDate(),
        month: new Date().toLocaleString('default', { month: 'short' }),
        year: new Date().getFullYear() % 100,
        day: new Date().toLocaleString('default', { weekday: 'long' }),
    });

    const handlePlaceClick = () => {
        selectRef.current?.click();
        if (dateRef.current) {
            dateRef.current.input.click();
        }
    };

    const handleSelectChange = (place) => {
        setPlaceName(place)
        onChangeHandler(formValue.title, place);
    };

    const handleDateChange = (date, ways = null) => {
        if (ways === "return") {
            setReturnDate(true)
        }
        setSelectedDate(date);
        const newDate = date.getDate();
        const newMonth = date.toLocaleString('default', { month: 'short' });
        const newYear = (date.getFullYear()) % 100
        const newDay = date.toLocaleString('default', { weekday: 'long' });
        setDateStore({ date: newDate, month: newMonth, year: newYear, day: newDay })
        onChangeHandler(formValue.title, date);
    };



    return (
        <div onClick={handlePlaceClick} className={`${formValue.width === "full" ? 'flex-1' : ''} ${formValue.border && 'border-r border-[#e7e7e7]'} px-5 py-2 relative flex flex-col hover:bg-[#eaf5ff] cursor-pointer`} style={{ minWidth: formValue.width, minHeight: formValue.height }} >

            <div className='mb-1 text-[#4a4a4a] text-sm flex items-center'>
                <span>{formValue.title}</span>
                {formValue.ChevronDown && <ChevronDown size={20} className='text-blue-500' />}
            </div>

            {formValue.dateInfo &&
                <>
                    <DatePicker
                        ref={dateRef}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="Select a date"
                        className='hidden'
                    />


                    <div className='flex flex-col absolute top-7'>
                        <div>
                            <span className='font-bold text-4xl'>{dateStore.date}</span>
                            <span className='text-xl'>{dateStore.month}'</span>
                            <span className='text-[21px]'>{dateStore.year}</span>
                        </div>
                        <span className='text-[#4a4a4a] text-sm'>{dateStore.day}</span>
                    </div>
                </>
            }

            {formValue.city && (
                <>
                    {/* Hidden Select Component */}
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger ref={selectRef} className="absolute w-5 opacity-0">
                            <SelectValue placeholder="Select a place" />
                        </SelectTrigger>
                        <SelectContent className="w-96 h-auto z-50">

                            <SelectGroup>
                                {formValue.selectablePlaces.map((place, index) => (
                                    <SelectItem key={index} value={place}>
                                        {place}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    {/* Display Selected Place */}
                    <span className='text-4xl font-bold truncate'>{PlaceName || formValue.place}</span>
                    <span className='text-[#4a4a4a] text-sm'>{formValue.country}</span>
                </>
            )}

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