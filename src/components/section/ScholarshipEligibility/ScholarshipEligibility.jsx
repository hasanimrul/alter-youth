import EligibilityCard from "@/components/elements/cards/eligibilityCard/EligibilityCard";
import React from "react";

const ScholarshipEligibility = () => {
  const eligibilityOptions = [
    {
      icon: "/assets/icons/DisabledFather.svg",
      title: "Disabled Father",
      desc: "Student's father is physically unable to work",
    },
    {
      icon: "/assets/icons/SingleMother.svg",
      title: "Single Mother",
      desc: "Student's father is deceased or has abandoned the family",
    },
    {
      icon: "/assets/icons/Orphan.svg",
      title: "Orphan",
      desc: "Both parents are deceased or have abandoned the child",
    },
  ];
  return (
    <div className="main-container py-10 ">
      <div className="boxed-content lg:px-10">
        <div className="flex flex-col lg:items-center gap-3">
          <h2 className="lg:text-4xl text-xl font-bold text-left lg:text-center">
            Scholarship Eligibility
          </h2>
          <p className="text-sm lg:text-center leading-6">
            Only students who are currently enrolled in Government Primary
            Schools and fall
            <br />
            under any of the following criteria are eligible to apply for
            scholarships
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-10">
          {eligibilityOptions.map((option, i) => (
            <EligibilityCard option={option} key={i}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipEligibility;
