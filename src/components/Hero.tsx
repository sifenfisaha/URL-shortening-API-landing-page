import React from "react";
import Button from "./Button";
import bg from "../assets/illustration-working.svg";

const Hero: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-20 mx-6 md:mx-28">
      <div className="flex md:order-1 order-2 flex-col justify-center items-center md:items-start gap-9">
        <h1 className="text-very-dark-violet font-bold text-5xl text-center md:text-left md:text-6xl">
          More than just shorter links
        </h1>
        <p className="text-gray-500 text-center md:text-left max-w-lg">
          build your brand a recognition and get a detailed insight on how your
          links are performing
        </p>
        <Button lable="Get Started" />
      </div>
      <div className="order-1 md:order-2">
        <img src={bg} alt="illustration" />
      </div>
    </section>
  );
};

export default Hero;
