import { offers } from '../assets/assets.js';
import OfferCard from './OfferCard';

const OfferList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {offers.map((offer) => (
        <OfferCard key={offer._id} offer={offer} />
      ))}
    </div>
  );
};

export default OfferList;
