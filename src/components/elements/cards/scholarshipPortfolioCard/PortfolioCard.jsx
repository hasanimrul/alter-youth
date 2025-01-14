import React from "react";

const PortfolioCard = () => {
  return (
    <div
      className="max-w-max p-20"
      style={{
        backgroundImage: "url(/assets/images/headteacher.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        // height: "500px",
      }}
    >
      <h3 className="text-3xl font-bold text-white max-w-[18ch]">
        Are you a teacher? Get your students listed on the platform.
      </h3>
      <a href="/" className="text-white">
        Download the school app
      </a>
    </div>
  );
};

export default PortfolioCard;
