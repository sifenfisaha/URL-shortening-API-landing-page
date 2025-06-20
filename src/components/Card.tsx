import React from "react";
type Info = {
  title: string;
  description: string;
  src: string;
};

const Card: React.FC<Info> = ({ description, title, src }) => {
  return (
    <div className="p-6 pt-12 relative bg-white max-w-sm flex flex-col gap-6 h-56 items-center rounded-sm justify-center">
      <h2 className="text-very-dark-violet text-2xl font-bold">{title}</h2>
      <p className="text-center">{description}</p>
      <div className="p-4 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-very-dark-violet rounded-full">
        <img src={src} alt="icon" />
      </div>
    </div>
  );
};

export default Card;
