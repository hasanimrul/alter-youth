import React from "react";

const Association = () => {
  return (
    <div className="main-container py-10 pb-20">
      <div className="boxed-content flex flex-col gap-10 lg:gap-5 lg:px-20">
        <h4 className="flex flex-col items-center text-xl font-bold">
          In Association With
        </h4>
        <div className="grid grid-cols-1 lg:gap-0 gap-10 lg:grid-cols-5 items-center justify-between relative">
          {/* First Item */}
          <div className="flex items-center justify-center">
            <img src="/assets/images/undp.jpg" className="lg:w-1/2 w-1/3" />
            <h4 className="font-bold whitespace-nowrap">
              "Asia Pacific <br />
              SDG Enterprise Award"
            </h4>
          </div>

          {/* Divider */}
          <div className="h-[70%] w-[1px] bg-gray-200 mx-auto hidden lg:block"></div>
          <hr className="lg:hidden"/>

          {/* Second Item */}
          <div className="flex flex-col items-center">
            <img src="/assets/images/expo.png" className="lg:w-1/2 w-1/3" />
          </div>
          {/* Divider */}
          <div className="h-[70%] w-[1px] bg-gray-200 mx-auto hidden lg:block"></div>
          <hr className="lg:hidden"/>
          {/* Third Item */}
          <div className="flex flex-col items-center justify-center">
            <img src="/assets/icons/Google.svg" className="lg:w-full w-1/2" />
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
