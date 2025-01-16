import React from "react";

const UberScholarship = () => {
  const scholarshipsReports = [
    {
      img: "/assets/images/app_scholarship.jpg",
      title: "Transfer Directly",
      desc: "Your scholarship is transferred directly to your student's family on their mobile bank account.",
    },
    {
      img: "/assets/images/app_school.png",
      title: "Get school reports",
      desc: "View attendance data and report cards from your student's school, until completion of Class 5.",
    },
    {
      img: "/assets/images/app_graduation.png",
      title: "Ensure a literate citizen",
      desc: "Your scholarship continues until completion of class 5, when your student achieves literacy.",
    },
  ];
  return (
    <div className="lg:main-container  py-10 w-full">
      <div className="lg:boxed-content w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="lg:text-4xl text-3xl font-bold text-center lg:max-w-full max-w-[10ch]">
            The Uber for Scholarships
          </h2>
          <p className="text-sm text-center hidden lg:block">
            A platform connecting the world with financially struggling students{" "}
            <br />
            in Government Primary Schools of Bangladesh
          </p>
          <p className="text-sm text-center lg:hidden md:hidden px-5">
            A platform connecting the world with financially struggling students
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex items-center gap-3">
            <img src="/assets/icons/appstore_small.svg" />
            <img src="/assets/icons/playstore_small.svg" />
          </div>
        </div>
        <div className="flex gap-10 lg:gap-0  w-full py-10 overflow-x-auto px-10 lg:px-28">
          {scholarshipsReports.map((report, i) => {
            return (
              <div className="flex flex-col items-center gap-3 w-full" key={i}>
                <img src={report.img} className=" h-[350px]" />
                <h3 className="text-xl font-bold lg:text-center whitespace-nowrap">
                  {report.title}
                </h3>
                <p className="lg:text-center text-sm lg:max-w-[38ch]">
                  {report.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UberScholarship;
