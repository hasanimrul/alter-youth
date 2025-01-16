import CommunityCard from "@/components/elements/cards/communityCard/CommunityCard";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import react-responsive-masonry
const Masonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.default),
  { ssr: false }
);
const ResponsiveMasonry = dynamic(
  () => import("react-responsive-masonry").then((mod) => mod.ResponsiveMasonry),
  { ssr: false }
);

const ScholarshipCommunity = () => {
  const community = [
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
    {
      user: "shihab2728",
      flag: "/assets/icons/au.svg",
      student: [
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
        {
          img: "/assets/images/stu1.webp",
          name: "Sajid Hasan, Class 4",
          school: "Jalashi Government Primary School",
        },
      ],
    },
  ];
  return (
    <div className="main-container py-10">
      <div className="boxed-content">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-[#1dc468] text-2xl">#alteryouthrevolution</h3>
          <h2 className="lg:text-4xl text-2xl font-bold text-center">
            The Scholarship Community
          </h2>
          <p className="text-sm text-center leading-6 hidden lg:block">
            Despite public primary schools being free of cost in Bangladesh,{" "}
            <br />
            many students still drop out of school to work and earn in order to
            support their families. <br />
            Your scholarship helps a child attend school and support their
            families at the same time.
          </p>
          <p className="text-sm text-center leading-6 lg:hidden">
            Despite public primary schools being free of cost in Bangladesh,
            many students still drop out of school to work and earn in order to
            support their families. Your scholarship helps a child attend school
            and support their families at the same time.
          </p>
        </div>
        <div className="py-10">
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              1024: 3,
            }}
          >
            <Masonry gutter="20px">
              {community.map((info, i) => (
                <CommunityCard info={info} key={i} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCommunity;
