const OfferCard = ({ offer }) => {
  return (
    <div className="w-[462px] h-[190px] p-[10px] border rounded-lg shadow-lg flex">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={offer.image[0]}
          alt={offer.title}
          className="w-32 h-32 rounded-lg object-cover mr-4"
        />
      </div>

      {/* Content Section (Right Side) */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[13px] font-semibold text-gray-600">
            {offer.category_title}
          </span>
          <span className="text-[13px] text-gray-500">T&C'S APPLY</span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-extrabold text-gray-800 break-words mb-2 leading-5">
          {offer.title}
        </h2>
        <hr className="w-[12%] border-red-500 my-2" />

        {/* Description */}
        <p className="text-sm text-gray-600 mb-2 leading-4">
          {offer.description}
        </p>

        <div className="flex-grow" />

        {/* Footer Section */}
        <div className="flex justify-between items-end">
          {/* Render Code only if it exists */}
          {offer.code && (
            <p className="text-sm font-medium text-gray-500">
              Code: <span className="font-bold">{offer.code}</span>
            </p>
          )}

          <button className="button_color font-extrabold text-sm hover:underline ml-auto">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
