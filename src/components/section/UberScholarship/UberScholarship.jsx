import React from "react";

const UberScholarship = () => {
    const scholarshipsReports = [
        {
            img: "/assets/images/app_scholarship.jpg",
            title: "Transfer Directly",
            desc: "Your scholarship is transferred directly to your student's family on their mobile bank account."
        },
        {
            img: "/assets/images/app_school.png",
            title: "Get school reports",
            desc: "View attendance data and report cards from your student's school, until completion of Class 5."
        },
        {
            img: "/assets/images/app_graduation.png",
            title: "Ensure a literate citizen",
            desc: "Your scholarship continues until completion of class 5, when your student achieves literacy."
        },
    ]
  return (
    <div className="main-container  py-10">
      <div className="boxed-content w-full">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold text-center ">
            The Uber for Scholarships
          </h2>
          <p className="text-sm text-center">
            A platform connecting the world with financially struggling students{" "}
            <br />
            in Government Primary Schools of Bangladesh
          </p>
          <div className="flex items-center gap-3">
            <img src="/assets/icons/appstore_small.svg" />
            <img src="/assets/icons/playstore_small.svg" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full py-10">
            {
                scholarshipsReports.map((report,i)=>{
                    return(
                        <div className="flex flex-col items-center gap-3">
                            <img src={report.img} className="w-1/2"/>
                            <h3 className="text-xl font-bold text-center">{report.title}</h3>
                            <p className="text-center text-sm max-w-[38ch]">{report.desc}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default UberScholarship;
