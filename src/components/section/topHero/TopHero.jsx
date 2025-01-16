import HeroForm from "@/components/elements/forms/HeroForm/HeroForm";
import React from "react";

const TopHero = () => {
  return (
    <>
      <div
        className="main-container lg:h-[85vh] w-full hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0)), url(/assets/images/hero_pc.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="boxed-content  lg:flex flex-col justify-center h-full w-full hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full px-20">
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-6xl font-bold">
                Start your <br /> scholarship
              </h1>
              <p className="text-white text-lg">
                Directly for students in Government Primary <br /> Schools
                throughout Bangladesh
              </p>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
      <div className="main-container lg:hidden md:hidden mt-16">
        <img src="/assets/images/hero_home_phone.jpg" />
        <div className="boxed-content flex flex-col items-center gap-2 justify-center -mt-44">
          <div className="flex flex-col gap-2 mx-5">
            <h1 className="text-white text-3xl font-bold">
              Start your <br /> scholarship
            </h1>
            <p className="text-white text-sm font-bold">
              Directly for students in Government Primary Schools throughout
              Bangladesh
            </p>
          </div>
          <HeroForm />
        </div>
      </div>
    </>
  );
};

export default TopHero;
