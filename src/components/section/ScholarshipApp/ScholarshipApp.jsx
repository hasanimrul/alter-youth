import React, { useEffect, useState } from "react";

const ScholarshipApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

   // Disable/enable scrolling based on modal state
   useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isModalOpen]);

  
  return (
    <div className="main-container py-10">
      <div className="boxed-content grid grid-cols-2 items-center gap-20 px-10">
        <div className="relative group overflow-hidden rounded-xl">
          <div>
            <img
              src="/assets/images/ay_video_poster.jpg"
              className="rounded-xl transition-transform duration-500 ease-out scale-100 group-hover:scale-105"
            />
          </div>

          <button
            onClick={handleModalToggle}
            className="bg-gray-700 max-w-max absolute top-[40%] left-[45%] px-6 py-7 opacity-80 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="92.517"
              viewBox="0 0 92.517 97"
              class="ms-2"
              style={{ width: "30px" }}
            >
              <path
                id="Polygon_3"
                data-name="Polygon 3"
                d="M42.3,11.826a7,7,0,0,1,12.4,0l36.927,70.44a7,7,0,0,1-6.2,10.25H11.573a7,7,0,0,1-6.2-10.25Z"
                transform="translate(92.517) rotate(90)"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-2xl font-bold">The scholarship app</h4>
          <p className="leading-7 ">
            In Bangladesh, while 98% of children enroll in school, 2 million
            children drop out to work before achieving literacy in order to
            support their families financially. On the flipside, Bangladesh has
            a diaspora population of 10 million in advanced economies who wish
            to make an impact on their homeland. AlterYouth, imagine Uber for
            scholarships, is a C2C scholarship app enabling users from around
            the world to start scholarships directly for financially struggling
            students in Government Primary Schools of Bangladesh, through
            digital banking.
          </p>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleModalToggle}
        >
          <div
            className=" rounded-lg overflow-hidden w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                className="absolute top-3 right-3 bg-gray-100 text-black text-3xl rounded-full px-3  flex items-center justify-center"
                onClick={handleModalToggle}
              >
                &times;
              </button>

              <video
                class="ay-rounded"
                controls="true"
                autoplay="true"
                controlslist="nodownload"
                preload="metadata"
                height="600px"
                width="600px"
              >
                <source src="/assets/videos/ay_explainer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScholarshipApp;
