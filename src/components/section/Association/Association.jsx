import React from "react";

const Association = () => {
  return (
    <div className="main-container py-10 pb-20">
      <div className="boxed-content flex flex-col gap-5 px-20">
        <h4 className="flex flex-col items-center text-xl font-bold">
          In Association With
        </h4>
        <div className="grid grid-cols-5 items-center justify-between relative">
          {/* First Item */}
          <div className="flex items-center justify-center">
            <img src="/assets/images/undp.jpg" className="w-1/2" />
            <h4 className="font-bold whitespace-nowrap">
              "Asia Pacific <br />
              SDG Enterprise Award"
            </h4>
          </div>

          {/* Divider */}
          <div className="h-[70%] w-[1px] bg-gray-200 mx-auto "></div>

          {/* Second Item */}
          <div className="flex flex-col items-center">
            <img src="/assets/images/expo.png" className="w-1/2" />
          </div>
          {/* Divider */}
          <div className="h-[70%] w-[1px] bg-gray-200 mx-auto"></div>
          {/* Third Item */}
          <div className="flex flex-col items-center justify-center">
            <img src="/assets/icons/Google.svg" className="" />
            <h4 className="font-bold whitespace-nowrap">
              Winner of Google Business Group Stories
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Association;
