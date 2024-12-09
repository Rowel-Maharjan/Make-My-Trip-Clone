import React, { useState, useEffect } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import ToggleSwitch from "./ToggleSwitch";
import OfferList from "./OfferList";
import { offers } from "../assets/assets.js";

const OffersContainer = () => {
  const [activeTab, setActiveTab] = useState("All Offers"); // Current active category
  const [page, setPage] = useState(0); // Current page number for pagination
  const [lastPageOffer, setLastPageOffer] = useState()

  const tabs = [
    "All Offers",
    "Hotels",
    "Flights",
    "Holidays",
    "Bus",
    "Cabs",
  ];

  useEffect(() => {
    const currentTab = location.pathname.slice(1,).charAt(0).toUpperCase() + location.pathname.slice(2,);  // Extract category from pathname
    if (tabs.includes(currentTab)) {
      setActiveTab(currentTab);  // Set the active tab to match the category in the pathname
    } else {
      setActiveTab("All Offers");  // Default to "All Offers" if no match
    }
  }, [location.pathname]);

  // Filter offers by the active category, or show all offers if "All Offers" is selected
  const filteredOffers =
    activeTab === "All Offers"
      ? offers
      : offers.filter(
        (offer) =>
          offer.category.toLowerCase() === activeTab.toLowerCase()
      );

  const total = offers.length;

  // Paginate the offers based on the current page
  const paginatedOffers = filteredOffers.slice(0, total);
  const offersPerPage = 4;
  const maxPages = Math.ceil(paginatedOffers.length / offersPerPage);

  useEffect(() => {
    if (page >= maxPages) {
      setPage(maxPages - 1);
    }
    setLastPageOffer(paginatedOffers.length % offersPerPage)
  }, [page, maxPages, setPage]);

  // Navigate to the previous page (ensure page is not less than 0)
  const handleLeftToggle = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  // Navigate to the next page
  const handleRightToggle = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const reorderedTabs = [activeTab, ...tabs.filter(tab => tab !== activeTab)];

  return (
    <div className="w-[1200px] relative bg-white pt-[25px] pb-[40px] pl-[40px] -top-12 rounded-xl mb-11 shadow-2xl h-[533.4px] overflow-hidden">
      {/* Tabs and navigation */}
      <div className="flex items-center justify-between mb-[12px]">
        {/* Tabs for filtering offers */}
        <div className="flex items-center gap-6">
          <h1 className="text-[32px] lato-black">Offers</h1>
          {reorderedTabs.map((tab) => (
            <p
              key={tab}
              className={`cursor-pointer text-gray-600 border-b ${activeTab === tab
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
        <div className="flex items-center gap-4 mr-10">
          <p className="button_color text-[16px] font-extrabold cursor-pointer">
            VIEW ALL
          </p>
          <HiArrowLongRight className="button_color text-3xl" />
          <ToggleSwitch onToggleLeft={handleLeftToggle} onToggleRight={handleRightToggle} maxPages={maxPages} page={page} />
        </div>
      </div>

      {/* Offers List */}
      <div className="w-full overflow-hidden">
        <OfferList page={page} paginatedOffers={paginatedOffers} lastPageOffer={lastPageOffer} maxPages={maxPages} />
      </div>
    </div>
  );
};

export default OffersContainer;
