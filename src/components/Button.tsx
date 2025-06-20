import React from "react";

interface Props {
  lable: string;
  onclick?: () => void;
  border?: boolean;
}

const Button: React.FC<Props> = ({ border = true, lable, onclick }) => {
  const hadnleClick = () => {
    if (onclick) {
      onclick();
    }
  };
  return (
    <button
      onClick={hadnleClick}
      className={`${
        border ? "rounded-full" : "rounded-sm"
      } bg-cyan py-3 px-8 font-bold text-white hover:bg-cyan/80 transition duration-200 ease-in-out
        `}
    >
      {lable}
    </button>
  );
};

export default Button;
