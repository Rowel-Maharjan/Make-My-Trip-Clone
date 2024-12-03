import React from "react";
import { offers } from "../assets/assets.js";
import OfferCard from "./OfferCard";

const OfferList = ({ page, activeCategory }) => {
  // Filter offers by the active category, or show all offers if "All Offers" is selected
  const filteredOffers =
    activeCategory === "All Offers"
      ? offers
      : offers.filter(
        (offer) =>
          offer.category.toLowerCase() === activeCategory.toLowerCase()
      );

  const total = offers.length;

  // Paginate the offers based on the current page
  const paginatedOffers = filteredOffers.slice(0, total);

  return (
    <div
      className="grid grid-flow-col grid-rows-2 gap-4 transition-transform duration-1000 ease-in-out w-full"
      style={{ transform: `translateX(-${page * 87}%)` }} // Dynamically calculate slide effect
    >
      {paginatedOffers.length > 0 ? (
        paginatedOffers.map((offer) => (
          <OfferCard key={offer._id} offer={offer} />
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No offers available for this category.
        </p>
      )}
    </div>
  );
};

export default OfferList;
