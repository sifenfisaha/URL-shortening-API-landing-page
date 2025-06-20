import React, { useState } from "react";
import { useUrlStore } from "../store/useUrlStore";
import { shortenUrl } from "../services/urlService";

const UrlShortener: React.FC = () => {
  const [inputUrl, setInputUrl] = useState<string>("");
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { addLink, links } = useUrlStore();
  console.log(links);

  const handleShorten = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputUrl.trim() === "") {
      setError(true);
      return;
    }
    try {
      const data = await shortenUrl(inputUrl);
      addLink({ originalUrl: inputUrl, shortUrl: data.shortUrl });
      setInputUrl("");
    } catch (error) {
      console.error("Shorten failed", error);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <div className="">
      <div className="flex items-center justify-center flex-col mb-10 mt-[-5rem]">
        <form
          className="md:w-[70%] bg-dark-violet p-8 gap-6 rounded-lg flex md:flex-row flex-col"
          onSubmit={handleShorten}
        >
          <input
            className={`p-2 bg-white focus:ring-1 ${
              !error ? "focus:ring-cyan" : "focus:ring-red-400"
            } focus:outline-none w-full rounded-lg`}
            onChange={(e) => {
              setInputUrl(e.target.value);
              setError(false);
            }}
            type="text"
            placeholder="shorten a link here..."
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">
              Please enter a valid URL
            </p>
          )}
          <button className="px-5 py-3 bg-cyan rounded-lg text-nowrap font-bold text-white cursor-pointer hover:bg-cyan/80 duration-300">
            shorten url
          </button>
        </form>
      </div>
      <div>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <span>{link.shortUrl}</span>
              <button onClick={() => handleCopy(link.shortUrl)}>
                {copiedUrl ? "copied" : "copy"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UrlShortener;
