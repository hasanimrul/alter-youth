import PortfolioCard from "@/components/elements/cards/scholarshipPortfolioCard/PortfolioCard";
import React from "react";

const ScholarshipPortfolio = () => {
  const cardInfo = [
    {
      img: "/assets/images/headteacher.jpg",
      title: "Are you a teacher? Get your students listed on the platform.",
      linkText: "Download the school app",
      footerText: "Only for Government Primary Schools in Bangladesh",
    },
    {
      img: "/assets/images/person.jpg",
      title: "you can be anywhere in the world.",
      linkText: "See all scholarships",
      footerText: "",
    },
    {
      img: "/assets/images/applicant.jpg",
      title: "while students get closer to their dreams",
      linkText: "See al graduates",
      footerText: "",
    },
  ];
  return (
    <div className="main-container py-10 w-full">
      <div className="boxed-content flex justify-between items-center gap-5 w-full px-10">
        {cardInfo.map((info, i) => (
          <PortfolioCard info={info} i={i} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ScholarshipPortfolio;
