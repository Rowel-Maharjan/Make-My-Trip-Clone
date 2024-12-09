import { GoChevronLeft } from "react-icons/go";

const ToggleSwitch = ({ onToggleLeft, onToggleRight, maxPages, page }) => {
  return (
    <div className="flex">
      <button
        className="toggle_button border rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none w-[36px] h-[33px] border-r-0"
        onClick={onToggleLeft}
      >
        <GoChevronLeft strokeWidth={0.5} className={`${page === 0 ? 'text-blue-200' : 'button_color'} text-2xl ml-[2px]`} />
      </button>
      <button
        className="toggle_button border rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none w-[36px] h-[33px] rotate-180 border-l-0"
        onClick={onToggleRight}
      >
        <GoChevronLeft strokeWidth={0.5} className={`${page >= maxPages - 1 ? 'text-blue-200' : 'button_color'} text-2xl ml-[2px]`} />
      </button>
    </div>
  );
};

export default ToggleSwitch;
