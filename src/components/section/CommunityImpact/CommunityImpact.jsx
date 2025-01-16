import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommunityImpact = () => {
  const communityImages = [
    "/assets/images/community_1.jpg",
    "/assets/images/community_2.jpg",
    "/assets/images/community_3.jpg",
    "/assets/images/community_4.jpg",
    "/assets/images/community_5.jpg",
    "/assets/images/community_6.jpg",
    "/assets/images/community_7.jpg",
    "/assets/images/community_8.jpg",
    "/assets/images/community_9.jpg",
    "/assets/images/community_10.jpg",
    "/assets/images/community_11.jpg",
    "/assets/images/community_12.jpg",
    "/assets/images/community_13.jpg",
    "/assets/images/community_14.jpg",
    "/assets/images/community_15.jpg",
    "/assets/images/community_16.jpg",
    "/assets/images/community_17.jpg",
    "/assets/images/community_18.jpg",
  ];

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="main-container">
        <div className="boxed-content">
          <h4 className="text-2xl lg:text-4xl font-bold">Community Impact</h4>
          <p className="text-sm leading-7 pt-4 hidden lg:block">
            Every scholarship begins with shipping a mobile phone to the parent
            of the student. Then they create their own mobile bank account{" "}
            <br />
            using that phone, to start receiving their child's scholarships
            directly, every month.
          </p>
        </div>
      </div>
      <div className="w-full py-5 lg:py-10 relative">
        <button className="absolute top-[45%] left-10 z-50 hidden lg:block" onClick={previous}>
          <svg
            width="40px"
            height="40px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#ffffff"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 7L10 12L15 17"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {communityImages.map((img, i) => (
            <img src={img} key={i} />
          ))}
        </Slider>
        <button className={` absolute top-[45%] right-14 z-50 hidden lg:block`} onClick={next}>
          <svg
            width="40px"
            height="40px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0">
              <rect
                x="-2.4"
                y="-2.4"
                width="28.80"
                height="28.80"
                rx="14.4"
                fill="#ffffff"
                strokewidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 7L15 12L10 17"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <p className="text-sm leading-7 lg:hidden px-5">
            Every scholarship begins with shipping a mobile phone to the parent
            of the student. Then they create their own mobile bank account{" "}
            using that phone, to start receiving their child's scholarships
            directly, every month.
          </p>
    </div>
  );
};

export default CommunityImpact;
