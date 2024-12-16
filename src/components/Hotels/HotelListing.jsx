import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import StickyNavbar from '../StickyNavbar';
import Form from '../form';
import { useForm } from 'react-hook-form';
import { ChevronRight } from 'lucide-react';
import { mmtLuxeSelections, pricepernight, propertyType, sortby, starCategory, suggestedForYou, userRating } from './hotel.config';
import { Checkbox } from '../ui/checkbox';
import Filter from '../Filter';


const HotelListing = () => {
    const location = useLocation();
    const formDataValue = location.state
    const { handleSubmit } = useForm();
    const [sortingBy, setSortingBy] = useState("popular")
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (filterKey, isChecked) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filterKey]: isChecked,
        }));
    };

    useEffect(() => {
        const appliedFilters = Object.entries(selectedFilters)
            .filter(([_, value]) => value)
            .map(([key]) => key);

        console.log('Filters Applied:', appliedFilters);
    }, [selectedFilters]);

    const parts = formDataValue['rooms & guests'].split(' ');

    const rooms = parseInt(parts[0].slice(0, -5), 10);
    const adults = parseInt(parts[1].slice(0, -6), 10);

    const extractDateInfo = (dateString) => {
        const date = new Date(dateString);
        const day = date.toLocaleString('en-US', { weekday: 'long' });
        const dateOfMonth = date.getDate();
        const year = date.getFullYear();
        const month = date.toLocaleString('en-US', { month: 'short' });

        return { day, dateOfMonth, year, month };
    }

    const checkInInfo = extractDateInfo(formDataValue['check-in']);
    const checkOutInfo = extractDateInfo(formDataValue['check-out']);

    const [formData, setFormData] = useState({
        "city, area or property": formDataValue['city, property name or location'],
        "check-in": new Date(formDataValue['check-in']),
        "check-out": new Date(formDataValue['check-out']),
        "rooms & guests": `${rooms}Rooms ${adults}Adults`,
    });
    const [finalData, setFinalData] = useState({})

    const onChangeHandler = (title, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [title.toLowerCase()]: value,
        }));
    }
    const userHotelRoomValue = [
        {
            title: "city, area or property",
            ChevronDown: true,
            city: true,
            place: formDataValue['city, property name or location'],
            selectablePlaces: ["Lalitpur", "Kathmandu", "Boudha", "Thecho", "Pokhara", "Dharan", "Hetauda"],
        },
        {
            title: "check-in",
            day: checkInInfo.day,
            dateOfMonth: checkInInfo.dateOfMonth,
            month: checkInInfo.month,
            year: checkInInfo.year,
            ChevronDown: true,
            dateInfo: true,
        },
        {
            title: "check-Out",
            day: checkOutInfo.day,
            dateOfMonth: checkOutInfo.dateOfMonth,
            month: checkOutInfo.month,
            year: checkOutInfo.year,
            ChevronDown: true,
            dateInfo: true,
        },
        {
            title: "Rooms & Guests",
            rooms: rooms,
            adults: adults,
            ChevronDown: true,
            roomAndGuest: true,
        },

    ]

    const onSubmit = () => {
        setFinalData(formData)
        console.log(finalData)
    };

    return (
        <div>
            <div className='py-2 px-[75px] shadow-2xl'>
                <StickyNavbar user={true} />
            </div>
            <div className='px-[75px] items-center flex gap-2 sticky top-0' style={{ background: 'linear-gradient(180deg, #051320, #0c2540)' }}>
                {userHotelRoomValue.map(roomValue => <Form key={roomValue.title} user={true} formValue={roomValue} onChangeHandler={onChangeHandler} />)}

                <button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-gradient-to-r from-[#53b2fe] to-[#065af3] ml-6 px-4 py-1 rounded-full min-w-[150px] text-white text-lg font-bold"
                >
                    SEARCH
                </button>
            </div>

            <div className='px-[75px] pt-5 pb-3 flex flex-col gap-1' style={{ background: 'linear-gradient(180deg, #0c2540, #174476)' }}>
                <div className='flex gap-2 items-center'>
                    <span className='text-[#008cff] font-normal text-xs'>Home</span>
                    <ChevronRight color='black' size={13} />
                    <span className='text-white font-semibold text-xs'>Hotels and more in {finalData['city, area or property'] || formDataValue['city, property name or location']}</span>
                </div>
                <div className='text-white font-black text-2xl'>2623 Properties in {finalData['city, area or property'] || formDataValue['city, property name or location']}</div>
            </div>

            <div className='px-[75px] flex gap-10 shadow-xl shadow-[#8a6b7614] p-4' style={{ background: 'linear-gradient(269.96deg, #e1ebf7, #daf8fe)' }}>
                <div className='font-bold text-black text-sm'>SORT BY:</div>
                <div className='flex gap-20 text-sm text-[#4a4a4a]'>
                    {
                        sortby.map((item, index) => (
                            <div key={index} className='relative'>
                                <div onClick={() => setSortingBy(item.value)} className={`${sortingBy === item.value ? 'text-[#008cff]' : ''}  font-bold cursor-pointer`}>{item.name} <span className={`font-normal `}>{item.subname}</span></div>
                                {
                                    item.value === sortingBy && <div className='absolute h-[3px] w-full bg-[#008cff] left-0 -bottom-[16px]  rounded-sm'></div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>

            <section className='px-[75px] flex h-[1500px] mt-4'>
                <div className='w-[275px]'>
                    <h1 className='font-bold text-[20px] mb-5'>Select Filters</h1>

                    <Filter
                        title={"Suggested For You"}
                        filters={suggestedForYou}
                        onFilterChange={handleFilterChange}
                    />

                    <Filter
                        title={"Price Per Night"}
                        filters={pricepernight}
                        onFilterChange={handleFilterChange}
                    />

                    <Filter
                        title={"MMT Luxe Selections"}
                        filters={mmtLuxeSelections}
                        onFilterChange={handleFilterChange}
                    />

                    <Filter
                        title={"Star Category"}
                        filters={starCategory}
                        onFilterChange={handleFilterChange}
                    />

                    <Filter
                        title={"User Rating"}
                        filters={userRating}
                        onFilterChange={handleFilterChange}
                    />

                    <Filter
                        title={"Property Type"}
                        filters={propertyType}
                        onFilterChange={handleFilterChange}
                    />

                </div>
                <div className='flex-1'>
                    <h1 className='font-black text-2xl'>Showing Properties in {finalData['city, area or property'] || formDataValue['city, property name or location']}
                    </h1>
                </div>
            </section>

        </div>
    )
}

export default HotelListing
