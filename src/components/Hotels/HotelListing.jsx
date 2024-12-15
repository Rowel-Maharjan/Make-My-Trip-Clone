import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import StickyNavbar from '../StickyNavbar';
import Form from '../form';
import { useForm } from 'react-hook-form';

const HotelListing = () => {
    const location = useLocation();
    const formDataValue = location.state
    const { handleSubmit } = useForm();
    // Split the string by spaces
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
        value: "Hotel-upto4rooms"
    });
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
        console.log(formData)
    };

    return (
        <div>
            <div className='py-2 px-[75px] shadow-2xl'>
                <StickyNavbar user={true} />
            </div>
            <div className='px-[75px] items-center flex gap-2' style={{ background: 'linear-gradient(180deg, #051320, #0c2540)' }}>
                {userHotelRoomValue.map(roomValue => <Form key={roomValue.title} user={true} formValue={roomValue} onChangeHandler={onChangeHandler} />)}

                <button
                    onClick={handleSubmit(onSubmit)}
                    className="bg-gradient-to-r from-[#53b2fe] to-[#065af3] ml-6 px-4 py-1 rounded-full min-w-[150px] text-white text-lg font-bold"
                >
                    SEARCH
                </button>
            </div>

            <div className='px-[75px]' style={{ background: 'linear-gradient(180deg, #0c2540, #174476)' }}>
                Your content here
            </div>

        </div>
    )
}

export default HotelListing
