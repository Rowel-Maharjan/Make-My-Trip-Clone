import React from "react";

import OfferCard from "./OfferCard";

const OfferList = ({ page, paginatedOffers, lastPageOffer, maxPages }) => {

  const translateValue = () => {
    if(maxPages === 1)
      return 0

    if (page === maxPages - 1) {
      if (lastPageOffer === 2 || lastPageOffer === 1)
        return ((page - 1) * 82.2 + 24)
      else
        return ((page - 1) * 82.2 + 65)
    }
    else
      return page * 82.2

  }

  return (
    <div
      className="grid grid-flow-col grid-rows-2 gap-4 transition-transform duration-1000 ease-in-out w-full"
      style={{ transform: `translateX(-${translateValue()}%)` }} // Dynamically calculate slide effect
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
