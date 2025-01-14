import React from "react";

const EligibilityCard = ({ option }) => {
  return (
    <div className="flex items-center gap-5 bg-white rounded-md shadow-lg p-6 max-w-max">
      <img src={option.icon} />
      <div>
        <h4 className="text-lg font-bold">{option.title}</h4>
        <p className=" max-w-[30ch]">{option.desc}</p>
      </div>
    </div>
  );
};

export default EligibilityCard;
