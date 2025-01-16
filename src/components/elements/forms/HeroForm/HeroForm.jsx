import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const HeroForm = () => {
  const [scholarships, setScholarships] = useState(1);
  const [value, setValue] = useState();

  const incrementScholarships = (e) => {
    e.preventDefault();
    setScholarships((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const decrementScholarships = (e) => {
    e.preventDefault();
    setScholarships((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="rounded-lg w-[350px] lg:w-[360px] bg-white p-5 shadow-2xl">
      <div className="">
        <h2 className="text-xl font-semibold mb-6">
          Join the <span className="text-[#1dc468]">#alteryouthrevolution</span>
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg py-3 px-3 border  border-gray-300 focus:outline-none focus:border-[#1dc468] "
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg py-3 px-3 border  border-gray-300 focus:outline-none focus:border-[#1dc468]"
          />

          
            <PhoneInput
              countryCallingCodeEditable={false}
              international
              defaultCountry="BD"
              value={value}
              onChange={setValue}
              inputProps={{
                placeholder: "Your number", 
              }}
            />

          <div className="space-y-2">
            <label className="font-semibold text-sm text-black">
              Number of Scholarships
            </label>
            <div className="flex items-end justify-between ">
              <div className="">
                <button
                  type="button"
                  className={`rounded-lg py-2 px-4 text-xl text-white ${
                    scholarships === 1 ? "bg-gray-400" : "bg-[#1dc468]"
                  }  `}
                  onClick={decrementScholarships}
                >
                  -
                </button>
                <span className="text-xl font-medium px-5 py-2 text-center bg-gray-200">
                  {scholarships}
                </span>
                <button
                  type="button"
                  className={`rounded-lg py-2 px-4 text-xl text-white ${
                    scholarships === 3 ? "bg-gray-400" : "bg-[#1dc468]"
                  }  `}
                  onClick={incrementScholarships}
                >
                  +
                </button>
              </div>
              <div className=" flex items-center">
                <div className="text-lg font-semibold">
                  BDT {(1650 * scholarships).toFixed(2)}
                </div>
                <div className="text-sm font-semibold">/month</div>
              </div>
            </div>
          </div>

          <button className="py-3 px-4 w-full rounded-lg bg-[#1dc468] hover:bg-[#1dc468] text-white font-bold">
            START NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
