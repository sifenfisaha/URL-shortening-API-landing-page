import React from "react";
import Card from "./Card";
import UrlShortener from "./UrlShortener";

type Info = {
  title: string;
  description: string;
  src: string;
};

const Fetures: React.FC = () => {
  const features: Info[] = [
    {
      title: "Advanced Statistics",
      description:
        "Track how your links are performing across the web with our advanced statistics dashboard.",
      src: "/icon-brand-recognition.svg",
    },
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      src: "/icon-detailed-records.svg",
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      src: "/icon-fully-customizable.svg",
    },
  ];

  return (
    <section className="bg-gray/30 mt-20 py-6 px-6 md:px-28">
      <UrlShortener />
      <div className="flex flex-col gap-8 items-center">
        <h2 className="font-bold text-3xl text-center">Advanced Satsfaction</h2>
        <p className="text-gray-500 text-center max-w-lg">
          Track how your links are paerforming across the web with our advance
          statistics dashboard.
        </p>
      </div>
      <div className="flex md:flex-row flex-col my-20 items-center justify-center gap-20">
        {features.map((fetures, i) => (
          <Card
            key={i}
            description={fetures.description}
            title={fetures.title}
            src={fetures.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Fetures;
