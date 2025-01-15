import Link from "next/link";
import React from "react";

const PortfolioCard = ({ info, i }) => {
  return (
    <Link href="/" className="h-full group w-full">
      <div className="relative overflow-hidden rounded-xl h-[450px]">
        <div
          className="transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
          style={{
            backgroundImage: `url(${info?.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="absolute inset-0 flex flex-col justify-between h-full ps-7 pt-7 pb-2 z-10">
          <div className="flex flex-col gap-3">
            <h3
              className={`text-3xl font-bold text-white max-w-[14ch] ${
                i === 1 && "max-w-[10ch]"
              } ${i === 2 && "max-w-[12ch]"}`}
            >
              {info?.title}
            </h3>
            <p className="text-white flex items-center group-hover:gap-1 underline">
              {info?.linkText}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="inline-block w-5 h-5 ml-1 transition-transform duration-300 ease-out translate-x-0 group-hover:translate-x-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>
            </p>
          </div>
          <p className="text-white text-[12px] text-center">
            {info.footerText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
