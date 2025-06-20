import React from "react";

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white md:text-start text-center font-bold mb-2">
        {title}
      </h3>
      <ul className="space-y-2 flex flex-col  items-center md:items-start">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-gray-300 hover:text-cyan transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
