import SignupForm from "@/components/elements/HeroForm/HeroForm";
import React from "react";

const TopHero = () => {
  return (
    <div
      className="main-container h-lvh w-full"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, hsla(0, 0%, 100%, 0) 25%, hsla(0, 0%, 100%, 0)), url(/assets/images/hero_pc.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="boxed-content  flex flex-col justify-center h-full w-full">
        <div className="flex items-center justify-between w-full px-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-6xl font-bold">
              Start your <br /> scholarship
            </h1>
            <p className="text-white text-lg">
              Directly for students in Government Primary <br /> Schools throughout
              Bangladesh
            </p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default TopHero;
