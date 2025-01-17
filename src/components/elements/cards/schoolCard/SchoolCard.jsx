import React from "react";

const SchoolCard = ({school, onImageClick }) => {
  return (
    <div className="flex flex-col gap-2 mx-3">
      <img src={school.img} onClick={() => onImageClick(school)} className="rounded-lg cursor-pointer w-full h-full"/>
      <h5 className=" font-bold">{school.name}</h5>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 12.508 15.174"
        >
          <g data-name="1">
            <path
              data-name="Path 114"
              d="M6.221 8.81a2.432 2.432 0 002.437-2.436A2.507 2.507 0 006.221 3.85a2.432 2.432 0 00-2.436 2.437A2.568 2.568 0 006.221 8.81zM2.132 2.197a5.784 5.784 0 018.18 8.18l-4.09 4.09-4.09-4.09a5.942 5.942 0 010-8.18z"
              fill="#1dc468"
              stroke="#1dc468"
              fill-rule="evenodd"
            ></path>
          </g>
        </svg>
        <p className="text-sm">{school.location}</p>
      </div>
    </div>
  );
};

export default SchoolCard;
