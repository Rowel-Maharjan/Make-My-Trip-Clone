import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import Form from "../form";
import {
  hotelGroupDeals,
  hotelRoomValue,
  hotelRoomsInfo,
  VisitingArea,
  FooterOffering,
} from "./hotel.config";
import { useForm } from "react-hook-form";
import VisitingPlaces from "../VisitingPlaces";
import Offerings from "../Offerings";
import background1 from "../../assets/Background.avif";
import image1 from "../../assets/luxeProperties.png";
import image2 from "../../assets/Luxevilla.jpg";
import image3 from "../../assets/Luxeinternational.jpg";
import "../../GradientText.css";
import OffersContainer from "../OffersContainer";
import About from "./About";

const Hotels = () => {
  const { handleSubmit } = useForm();
  const [hotelActiveTab, setHotelActiveTab] = useState("Upto 4 Rooms");

  const [formDataA, setFormDataA] = useState({
    "city, property name or location": "Pokhara",
    "check-in": new Date(),
    "check-out": new Date(),
    "rooms & guests": "1Rooms 1Adults",
    "price per night": "Rs.0 - Rs.1500",
    value: "Hotel-upto4rooms",
  });

  const [formDataB, setFormDataB] = useState({
    "city, property name or location": "Chitwan",
    "check-in": new Date(),
    "check-out": new Date(),
    "rooms & guests": "1Rooms 1Adults",
    value: "Hotel-groupDeals",
  });

  const onChangeHandlerA = (title, value) => {
    setFormDataA((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onChangeHandlerB = (title, value) => {
    setFormDataB((prevData) => ({
      ...prevData,
      [title.toLowerCase()]: value,
    }));
  };

  const onSubmit = () => {
    if (hotelActiveTab === "Upto 4 Rooms") console.log(formDataA);
    else console.log(formDataB);
  };

  return (
    <>
      <div className="w-[1200px] relative bg-white py-16 px-5 -top-12 rounded-xl mb-11 shadow-2xl">
        {/* Tabs */}
        <div className="flex gap-10">
          <RadioGroup className="flex gap-4 mb-2" defaultValue={hotelActiveTab}>
            {hotelRoomsInfo.map((roominfo) => (
              <div
                key={roominfo.id}
                onClick={() => setHotelActiveTab(roominfo.value)}
                className={`flex cursor-pointer items-center p-1 ${roominfo.value === hotelActiveTab
                    ? "bg-[#eaf5ff] rounded-full"
                    : ""
                  }`}
              >
                <RadioGroupItem value={roominfo.value} id={roominfo.id} />
                <Label
                  className={`cursor-pointer pl-2 font-normal text-sm text-[#4a4a4a] ${roominfo.value === hotelActiveTab
                      ? "font-bold text-black"
                      : ""
                    }`}
                  htmlFor={roominfo.id}
                >
                  {roominfo.value}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex gap-1">
            <span className="font-semibold">
              Book Domestic and International Property Online. To list your
              property
            </span>
            <span className="text-blue-700 font-bold cursor-pointer">
              Click Here
            </span>
          </div>
        </div>

        {/* Content Box */}
        {hotelActiveTab === "Upto 4 Rooms" && (
          <div className="w-full border rounded-lg mb-5 flex border-[#e7e7e7]">
            {hotelRoomValue.map((roomValue) => (
              <Form
                key={roomValue.title}
                formValue={roomValue}
                onChangeHandler={onChangeHandlerA}
              />
            ))}
          </div>
        )}
        {hotelActiveTab === "Group Deals" && (
          <div className="w-full border rounded-lg mb-5 flex border-[#e7e7e7]">
            {hotelGroupDeals.map((roomValue) => (
              <Form
                key={roomValue.title}
                formValue={roomValue}
                onChangeHandler={onChangeHandlerB}
              />
            ))}
          </div>
        )}

        <div className="text-sm text-[#4a4a4a] flex justify-center items-center gap-3">
          <span>Trending Searches:</span>
          <div className="p-1 rounded-sm cursor-pointer bg-[#f2f2f2]">
            Mumbai, India
          </div>
          <div className="p-1 rounded-sm cursor-pointer bg-[#f2f2f2]">
            London, United Kingdom
          </div>
          <div className="p-1 rounded-sm cursor-pointer bg-[#f2f2f2]">
            Bangkok, Thailand
          </div>
        </div>
        <p className="flex justify-center relative">
          <button
            onClick={handleSubmit(onSubmit)}
            className="absolute -bottom-16 px-5 py-2 -mb-5 inline-block bg-gradient-to-r min-w-[216px] from-[#53b2fe] to-[#065af3] rounded-full text-white text-2xl font-bold"
          >
            {hotelActiveTab === "Upto 4 Rooms"
              ? "SEARCH"
              : "GET ME BEST PRICES"}
          </button>
        </p>
      </div>

      {/* Luxe Container */}
      <div
        className="w-[1200px] relative bg-white py-[34px] pr-[30px] pl-[40px] -top-12 rounded-xl mb-11 shadow-2xl h-auto flex"
        style={{
          backgroundImage: `linear-gradient(rgba(237, 210, 135, 0.1), rgba(237, 210, 135, 0.1)), url(${background1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Section */}
        <div className="flex px-2 w-[32%] mt-6">
          <div>
            <h3 className="font-bold text-sm">INTRODUCING</h3>
            <h2 className="gradient-text lato-black leading-[45px]">
              MMT Luxe Selections
            </h2>
            <p className="font-bold">
              Escape to the epitome of luxury, packed with signature amenities
              and services
            </p>
            <button className="mt-3 px-7 py-2 font-bold bg-gradient-to-r from-[#edd287] to-[#b8860b] rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-3 gap-3 w-[70%] ml-6">
          <div className="w-[233px] h-auto bg-white rounded-md shadow-bottom">
            <img
              src={image1}
              alt="Luxury Property 1"
              className="w-full h-[170px] object-cover rounded-t-md"
            />
            <div className="px-[16px] py-[10px] leading-[20px]">
              <h1 className="font-black text-[20px]">
                Luxe properties in India
              </h1>
              <p className="text-[#4a4a4a] text-sm">
                Explore by Luxary brands, themes and top picks
              </p>
            </div>
          </div>
          <div className="w-[233px] h-auto bg-white rounded-md shadow-bottom">
            <img
              src={image2}
              alt="Luxury Property 2"
              className="w-full h-[170px] object-cover rounded-t-md"
            />
            <div className="px-[16px] py-[10px] leading-[20px]">
              <h1 className="font-black text-[20px]">Luxe Villas</h1>
              <p className="text-[#4a4a4a] text-sm">
                Premium Villas with Superlative Experience
              </p>
            </div>
          </div>
          <div className="w-[233px] h-auto bg-white rounded-md shadow-bottom">
            <img
              src={image3}
              alt="Luxury Property 3"
              className="w-full h-[170px] object-cover rounded-t-md"
            />
            <div className="px-[16px] py-[10px] leading-[20px]">
              <h1 className="font-black text-[20px]">Luxe International</h1>
              <p className="text-[#4a4a4a] text-sm">
                Dubai, Maldives, Thailand & More
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <OffersContainer />
      </div>

      {/* Visiting Places */}
      <div className="w-[1200px] flex relative bg-white py-10 px-10 -top-12 rounded-xl custom-shadow mb-5">
        <VisitingPlaces VisitingPlaces={VisitingArea} />
      </div>

      {/* Offerings */}
      <div className="w-[1200px]">
        <Offerings offerings={FooterOffering} />
      </div>

      {/* About  */}
      <About />


    </>
  );
};

export default Hotels;
