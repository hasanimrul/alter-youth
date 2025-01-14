import React, { useState } from "react";

const HeroForm = () => {
  const [scholarships, setScholarships] = useState(1);

  const incrementScholarships = (e) => {
    e.preventDefault();
    setScholarships((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const decrementScholarships = (e) => {
    e.preventDefault();
    setScholarships((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="rounded-lg w-[380px] bg-white p-5 shadow-lg">
      <div className="">
        <h2 className="text-xl font-semibold mb-6">
          Join the{" "}
          <span className="text-emerald-500">#alteryouthrevolution</span>
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg py-3 px-3 border  border-gray-300 focus:outline-none focus:border-emerald-500 "
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg py-3 px-3 border  border-gray-300 focus:outline-none focus:border-emerald-500"
          />

          <div className="flex gap-2 w-full rounded-lg py-3 px-3   border border-gray-300 focus:border-emerald-500">
            <select className="">
              <option>+88</option>
            </select>
            <input
              type="tel"
              placeholder="Your number"
              className="focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="font-semibold text-black">
              Number of Scholarships
            </label>
            <div className="flex items-center justify-between ">
              <div className="">
                <button
                  type="button"
                  className={`rounded-lg py-2 px-4 text-xl ${scholarships === 1 ? "bg-gray-400" : "bg-emerald-500" }  `}
                  onClick={decrementScholarships}
                >
                  -
                </button>
                <span className="text-xl font-medium px-5 py-2 text-center bg-gray-200">
                  {scholarships}
                </span>
                <button
                  type="button"
                  className={`rounded-lg py-2 px-4 text-xl ${scholarships === 3 ? "bg-gray-400" : "bg-emerald-500" }  `}
                  onClick={incrementScholarships}
                >
                  +
                </button>
              </div>
              <div className=" flex items-center">
                <div className="text-xl font-semibold">
                  BDT {(1650 * scholarships).toFixed(2)}
                </div>
                <div className="text-sm font-semibold">/month</div>
              </div>
            </div>
          </div>

          <button className="py-2 px-4 w-full rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
            START NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
