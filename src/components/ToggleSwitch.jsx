import { GoChevronLeft } from "react-icons/go";

const ToggleSwitch = ({ onToggleLeft, onToggleRight }) => {
  return (
    <div>
      <button
        className="toggle_button border rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none w-[36px] h-[33px] border-r-0"
        onClick={onToggleLeft}
      >
        <GoChevronLeft className="button_color text-2xl ml-[2px]" />
      </button>
      <button
        className="toggle_button border rounded-tl-[20px] rounded-bl-[20px] rounded-tr-none rounded-br-none w-[36px] h-[33px] rotate-180 border-l-0"
        onClick={onToggleRight}
      >
        <GoChevronLeft className="button_color text-2xl ml-[2px]" />
      </button>
    </div>
  );
};

export default ToggleSwitch;
