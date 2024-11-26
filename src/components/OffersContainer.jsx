import React, { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import ToggleSwitch from "./ToggleSwitch";
import OfferList from "./OfferList";

const OffersContainer = () => {
  const [activeTab, setActiveTab] = useState("All Offers"); // Current active category
  const [page, setPage] = useState(0); // Current page number for pagination

  const tabs = [
    "All Offers",
    "Hotels",
    "Flights",
    "Holidays",
    "Trains",
    "Cabs",
    "Bank Offers",
  ];

  // Navigate to the previous page (ensure page is not less than 0)
  const handleLeftToggle = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Navigate to the next page
  const handleRightToggle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="w-[1200px] relative bg-white pt-[25px] pb-[40px] px-[40px] -top-12 rounded-xl mb-11 shadow-2xl h-[533.4px] overflow-hidden">
      {/* Tabs and navigation */}
      <div className="flex items-center justify-between mb-[12px]">
        {/* Tabs for filtering offers */}
        <div className="flex items-center gap-6">
          <h1 className="text-[32px] lato-black">Offers</h1>
          {tabs.map((tab) => (
            <p
              key={tab}
              className={`cursor-pointer text-gray-600 border-b ${
                activeTab === tab
                  ? "button_color font-extrabold border-b-2 border_color"
                  : "border-gray-300"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setPage(0); // Reset page to 0 when switching tabs
              }}
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Right-side navigation and toggles */}
        <div className="flex items-center gap-4">
          <p className="button_color text-[16px] font-extrabold cursor-pointer">
            VIEW ALL
          </p>
          <HiArrowLongRight className="button_color text-3xl" />
          <ToggleSwitch onToggleLeft={handleLeftToggle} onToggleRight={handleRightToggle} />
        </div>
      </div>

      {/* Offers List */}
      <div>
        <OfferList activeCategory={activeTab} page={page} />
      </div>
    </div>
  );
};

export default OffersContainer;
