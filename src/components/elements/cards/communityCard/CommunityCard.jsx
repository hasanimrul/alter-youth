import React from "react";

const CommunityCard = ({ info }) => {
  return (
    <div className="flex flex-col gap-5 bg-white rounded-md shadow-custom py-2 px-2 lg:p-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <h4 className="font-bold">@{info.user}</h4>
          <img src={info.flag} className="w-[20px] h-[20px]" />
        </div>
        <p className="text-[10px] text-gray-400">Joined today</p>
      </div>
      <p className="text-[12px] bg-[#1dc4681a] max-w-max px-2 rounded text-[#1dc468]">
        {info.student.length} Scholarship{info.student.length > 1 ? "s" : ""}
      </p>
      {info.student.map((stud, i) => (
        <div className="flex items-center gap-4">
          <img
            src={stud.img}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-bold text-sm">{stud.name}</h4>
            <p className="text-sm text-gray-400">{stud.school}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityCard;
