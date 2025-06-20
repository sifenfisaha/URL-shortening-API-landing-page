import React from "react";
import Button from "./Button";
import FooterColumn from "./FooterColumn";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];
  return (
    <footer>
      <div className="bg-dark-violet">
        {" "}
        <div className="w-full h-full bg-[url('/bg-shorten-desktop.svg')] bg-no-repeat bg-cover bg-center p-8 flex justify-center items-center gap-7 flex-col">
          <h2 className="font-bold text-white text-3xl">
            Boost your links today.
          </h2>
          <Button lable="Get Started" />
        </div>
      </div>
      <div className="bg-very-dark-violet flex flex-col md:flex-row py-14 items-center gap-6 justify-between px-6 md:px-28">
        <h2 className="text-white text-3xl font-bold">Shortly</h2>
        <div className=" px-10 flex flex-col md:flex-row justify-between gap-10">
          {footerLinks.map((section, index) => (
            <FooterColumn
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="flex gap-4 text-white text-2xl">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
