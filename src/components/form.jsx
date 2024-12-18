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
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const Form = ({ formValue, onChangeHandler, user = false }) => {
    const [PlaceName, setPlaceName] = useState()
    const [PackageName, setPackageName] = useState("1hrs 10kms")
    const selectRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dateRef = useRef(null);
    const [returnDate, setReturnDate] = useState(false)
    const [dateStore, setDateStore] = useState({
        date: formValue.dateOfMonth || new Date().getDate(),
        month: formValue.month || new Date().toLocaleString('default', { month: 'short' }),
        year: new Date().getFullYear() % 100,
        fullyear: formValue.year || new Date().getFullYear(),
        day: formValue.day || new Date().toLocaleString('default', { weekday: 'long' }),
    });
    const [adult, setAdult] = useState("1");
    const [adults, setAdults] = useState(formValue.adults || "1");
    const [rooms, setRooms] = useState(formValue.rooms || "1");
    const [children, setChildren] = useState("0");

    const [hour, setHour] = useState("12");
    const [minute, setMinute] = useState("00");
    const [period, setPeriod] = useState("AM");
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [isAdultAndChildren, setIsAdultAndChildren] = useState(false)
    const [isRoomAndAdult, setIsRoomAndAdult] = useState(false)
    const [price, setPrice] = useState("Rs.0 - Rs.1500")

    const handleTimeChange = () => {
        setIsTimePickerOpen(false);
        const time = `${hour}:${minute} ${period}`
        onChangeHandler(formValue.title, time);
    };

    const handleAdultAndChildrenChange = () => {
        setIsAdultAndChildren(false);
        const people = `${adult}Adults ${children}Children`
        onChangeHandler(formValue.title, people);
    };

    const handleRoomsAndAdultsChange = () => {
        setIsRoomAndAdult(false);
        const roomsAndadults = `${rooms}Rooms ${adults}Adults`
        onChangeHandler(formValue.title, roomsAndadults);
    }

    const handlePlaceClick = () => {
        selectRef.current?.click();
        if (isOpen) {
            dateRef.current?.flatpickr.close();
        } else {
            dateRef.current?.flatpickr.open();
        }
        // if (dateRef.current) {
        //     dateRef.current.input.click();
        // }
        setIsOpen(!isOpen);
        setIsTimePickerOpen(!isTimePickerOpen);
        setIsAdultAndChildren(!isAdultAndChildren);
        setIsRoomAndAdult(!isRoomAndAdult);
    };

    const handleSelectChange = (place) => {
        setPlaceName(place)
        onChangeHandler(formValue.title, place);
    };

    const handlePackageChange = (packages) => {
        setPackageName(packages)
        onChangeHandler(formValue.title, packages);
    };

    const handlePriceChange = (price) => {
        setPrice(price)
        onChangeHandler(formValue.title, price);
    };

    const handleDateChange = (date, ways = null) => {
        setIsOpen(!isOpen)
        if (ways === "return") {
            setReturnDate(true);
        }
        setSelectedDate(date[0]);
        const newDate = date[0].getDate();
        const newMonth = date[0].toLocaleString('default', { month: 'short' });
        const newYear = date[0].getFullYear() % 100;
        const fullYear = date[0].getFullYear();
        const newDay = date[0].toLocaleString('default', { weekday: 'long' });
        setDateStore({ date: newDate, month: newMonth, year: newYear, fullyear: fullYear, day: newDay });
        onChangeHandler(formValue.title, date[0]);
    };



    return (

        !user ?
            <div onClick={handlePlaceClick} className={`${formValue.width === "full" ? 'flex-1' : ''} ${formValue.border && 'border-r border-[#e7e7e7]'} px-5 py-2 relative flex flex-col hover:bg-[#eaf5ff] cursor-pointer`} style={{ minWidth: formValue.width, minHeight: formValue.height }} >

                <div className='mb-1 text-[#4a4a4a] text-sm flex items-center'>
                    <span>{formValue.title}</span>
                    {formValue.ChevronDown && <ChevronDown size={20} className='text-blue-500' />}
                </div>

                {formValue.dateInfo &&
                    <>
                        {/* <DatePicker
                        ref={dateRef}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="Select a date"
                        className='hidden'
                        minDate={new Date()}
                    /> */}

                        <Flatpickr
                            ref={dateRef}
                            value={selectedDate}
                            options={{
                                dateFormat: "d M Y",
                                minDate: "today",
                                onChange: handleDateChange,
                                onOpen: () => setIsOpen(true),
                            }}
                            className='w-0 opacity-0'
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
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger ref={selectRef} className="absolute w-5 opacity-0">
                                <SelectValue placeholder="Select a place" />
                            </SelectTrigger>
                            <SelectContent className="w-96 z-50">
                                <SelectGroup>
                                    {formValue.selectablePlaces.map((place, index) => (
                                        <SelectItem key={index} value={place}>
                                            {place}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <span className='text-4xl font-bold truncate'>{PlaceName || formValue.place}</span>
                        <span className='text-[#4a4a4a] text-sm'>{formValue.country}</span>
                    </>
                )}

                {formValue.roomAndGuest &&
                    <>
                        {isRoomAndAdult && (
                            <div onClick={(e) => e.stopPropagation()} className="absolute top-9 -left-32 mt-2 p-4 bg-white border z-50 rounded-md shadow-lg flex w-52 gap-2 flex-col">
                                <div className='flex gap-2 items-center justify-between'>
                                    Rooms
                                    <select
                                        value={rooms}
                                        onChange={(e) => { setRooms(e.target.value) }}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i + 1)}>
                                                {String(i + 1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex gap-2 items-center justify-between'>
                                    Adults:
                                    <select
                                        value={adults}
                                        onChange={(e) => setAdults(e.target.value)}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i + 1)}>
                                                {String(i + 1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleRoomsAndAdultsChange}
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Set
                                </button>
                            </div>
                        )}
                        <div>
                            <span className='font-bold text-4xl'>{rooms || formValue.rooms}</span>
                            <span className='text-xl mr-1'>Rooms </span>
                            <span className='font-bold text-4xl'>{adults || formValue.adults}</span>
                            <span className='text-xl'>Adults</span>
                        </div>
                    </>
                }

                {formValue.guestAndChildren &&
                    <>
                        {isAdultAndChildren && (
                            <div onClick={(e) => e.stopPropagation()} className="absolute top-9 -left-32 mt-2 p-4 bg-white border z-50 rounded-md shadow-lg flex w-52 gap-2 flex-col">
                                <div className='flex gap-2 items-center justify-between'>
                                    Adult:
                                    <select
                                        value={adult}
                                        onChange={(e) => { setAdult(e.target.value) }}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i + 1)}>
                                                {String(i + 1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex gap-2 items-center justify-between'>
                                    Children:
                                    <select
                                        value={children}
                                        onChange={(e) => setChildren(e.target.value)}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i)}>
                                                {String(i)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleAdultAndChildrenChange}
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Set
                                </button>
                            </div>
                        )}
                        <div>
                            <span className='font-bold text-4xl'>{adult}</span>
                            <span className='text-xl mr-1'>Adults</span>
                            <span className='font-bold text-4xl'>{children}</span>
                            <span className='text-xl'>Children</span>
                        </div>
                    </>
                }

                {formValue.price &&
                    <>
                        <Select onValueChange={handlePriceChange}>
                            <SelectTrigger ref={selectRef} className="absolute top-0 w-5 opacity-0">
                                <SelectValue placeholder="Select a place" />
                            </SelectTrigger>
                            <SelectContent className="w-80 z-50">
                                <SelectGroup>
                                    {formValue.selectablePrices.map((price, index) => (
                                        <SelectItem key={index} value={price}>
                                            {price}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <span className='text-xl'>{price}</span>
                    </>
                }


                {formValue.pickupTime &&
                    <>
                        {isTimePickerOpen && (
                            <div onClick={(e) => e.stopPropagation()} className="absolute top-9 -left-36 mt-2 p-4 bg-white border z-50 rounded-md shadow-lg flex gap-2">
                                <select
                                    value={hour}
                                    onChange={(e) => { setHour(e.target.value) }}
                                    className="rounded-md border p-2 w-20"
                                >
                                    {Array.from({ length: 12 }, (_, i) => (
                                        <option key={i} value={String(i + 1).padStart(2, "0")}>
                                            {String(i + 1).padStart(2, "0")}
                                        </option>
                                    ))}
                                </select>


                                <select
                                    value={minute}
                                    onChange={(e) => setMinute(e.target.value)}
                                    className="rounded-md border p-2 w-20"
                                >
                                    {Array.from({ length: 60 }, (_, i) => (
                                        <option key={i} value={String(i).padStart(2, "0")}>
                                            {String(i).padStart(2, "0")}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={period}
                                    onChange={(e) => setPeriod(e.target.value)}
                                    className="rounded-md border p-2 w-20"
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>

                                <button
                                    onClick={handleTimeChange}
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Set
                                </button>
                            </div>
                        )}

                        <div>
                            <span className='font-bold text-4xl mr-1'>{hour}:{minute}</span>
                            <span className='text-xl'>{period}</span>
                        </div>
                        <div className='text-[12px] font-normal text-[#757575] italic'>{formValue.message}</div>
                    </>
                }

                {formValue.selectPackage &&
                    <>
                        <Select onValueChange={handlePackageChange}>
                            <SelectTrigger ref={selectRef} className="absolute w-5 opacity-0">
                                <SelectValue placeholder="Select a place" />
                            </SelectTrigger>
                            <SelectContent className="w-96 z-50">
                                <SelectGroup>
                                    {formValue.selectablePackages.map((packages, index) => (
                                        <SelectItem key={index} value={packages}>
                                            {packages}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div>
                            <span className='font-bold text-4xl mr-1'>{PackageName}</span>
                        </div>
                    </>
                }
            </div>
            :

            <div onClick={handlePlaceClick} className='bg-[#ffffff1a] w-[200px] relative cursor-pointer mt-2 px-3 py-0.5 rounded-md flex flex-col'>
                <div className='flex  gap-2'>
                    <div className='font-bold text-[#0084ff] text-xs'>{formValue.title.toUpperCase()}</div>
                    <span><ChevronDown size={16} className='text-blue-500' strokeWidth={3.5} /></span>
                </div>
                {formValue.city && (
                    <>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger ref={selectRef} className="absolute w-5 opacity-0">
                                <SelectValue placeholder="Select a place" />
                            </SelectTrigger>
                            <SelectContent className="w-96 z-50">
                                <SelectGroup>
                                    {formValue.selectablePlaces.map((place, index) => (
                                        <SelectItem key={index} value={place}>
                                            {place}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <span className='text-md font-normal text-white'>{PlaceName || formValue.place}</span>
                    </>
                )}
                {formValue.dateInfo &&
                    <>
                        {/* <DatePicker
                        ref={dateRef}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="Select a date"
                        className='hidden'
                        minDate={new Date()}
                    /> */}

                        <Flatpickr
                            ref={dateRef}
                            value={selectedDate}
                            options={{
                                dateFormat: "d M Y",
                                minDate: "today",
                                onChange: handleDateChange,
                                onOpen: () => setIsOpen(true),
                            }}
                            className='w-0 opacity-0 absolute'
                        />
                        <span className='text-md font-normal text-white'>{PlaceName || formValue.place}</span>


                        <div className='flex'>
                            <div>
                                <span className='text-md font-normal text-white'>{dateStore.day.slice(0, 3)},</span>
                                <span className='text-md font-normal text-white'>{dateStore.date} </span>
                                <span className='ttext-md font-normal text-white'>{dateStore.month} </span>
                                <span className='text-md font-normal text-white'>{dateStore.fullyear}</span>
                            </div>
                        </div>
                    </>
                }
                {formValue.roomAndGuest &&
                    <>
                        {isRoomAndAdult && (
                            <div onClick={(e) => e.stopPropagation()} className="absolute top-9 -left-32 mt-2 p-4 bg-white border z-50 rounded-md shadow-lg flex w-52 gap-2 flex-col">
                                <div className='flex gap-2 items-center justify-between'>
                                    Rooms
                                    <select
                                        value={rooms}
                                        onChange={(e) => { setRooms(e.target.value) }}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i + 1)}>
                                                {String(i + 1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex gap-2 items-center justify-between'>
                                    Adults:
                                    <select
                                        value={adults}
                                        onChange={(e) => setAdults(e.target.value)}
                                        className="rounded-md border p-2 w-20"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={String(i + 1)}>
                                                {String(i + 1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleRoomsAndAdultsChange}
                                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    Set
                                </button>
                            </div>
                        )}
                        <div className='text-md font-normal text-white'>
                            <span>{rooms} </span>
                            <span>Rooms </span>
                            <span>{adults} </span>
                            <span>Adults</span>
                        </div>
                    </>
                }
            </div>
    )
}

export default Form