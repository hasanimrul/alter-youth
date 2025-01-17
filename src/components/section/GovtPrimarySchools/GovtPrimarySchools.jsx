import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SchoolCard from "@/components/elements/cards/schoolCard/SchoolCard";
import Modal from "@/components/elements/modals/SchoolModal/Modal";


const GovtPrimarySchools = () => {
  const schools = [
    {
      img: "/assets/images/school1.jpeg",
      name: "Agla Government Primary School",
      location: "Kayetpara, Bangladesh",
      applicants: "6 Scholarship Applicants",
      details:
        "Established in 1992 in Kayetpara, Bangladesh. It now hosts 32 Students taught by 3 Teachers.",
      teacher: {
        name: "Moshiur Rahman",
        img: "/assets/images/ht1.jpeg",
        post: "Class Teacher",
        quote: "There is no alternate way to success other than education",
      },
    },
    {
      img: "/assets/images/school2.jpeg",
      name: "Kanchan Government Primary School",
      location: "Kanchan, Bangladesh",
      applicants: "10 Scholarship Applicants",
      details:
        "Established in 2001 in Kanchan, Bangladesh. It now hosts 41 Students taught by 5 Teachers.",
      teacher: {
        name: "Shilpi Begum",
        img: "/assets/images/ht2.jpeg",
        post: "Class Teacher",
        quote:
          "Be a wonderful role model because you will be the window through which many children will see their future",
      },
    },
    {
      img: "/assets/images/school3.jpeg",
      name: "Daudpur Government Primary School",
      location: "Daudpur, Bangladesh",
      applicants: "9 Scholarship Applicants",
      details:
        "Established in 1996 in Daudpur, Bangladesh. It now hosts 28 Students taught by 3 Teachers.",
      teacher: {
        name: "Nusrat Parvin",
        img: "/assets/images/ht3.jpeg",
        post: "Class Teacher",
        quote:
          "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      },
    },
    {
      img: "/assets/images/school4.jpeg",
      name: "Kendua Government Primary School",
      location: "Golakandail, Bangladesh",
      applicants: "13 Scholarship Applicants",
      details:
        "Established in 1988 in Golakandail, Bangladesh. It now hosts 54 Students taught by 6 Teachers.",
      teacher: {
        name: "Ataur Alam",
        img: "/assets/images/ht4.jpeg",
        post: "Class Teacher",
        quote: "Education is the best weapon you can use to change the world",
      },
    },
    {
      img: "/assets/images/school5.jpeg",
      name: "Bhulta Government Primary School",
      location: "Bhulta, Bangladesh",
      applicants: "12 Scholarship Applicants",
      details:
        "Established in 1985 in Bhulta, Bangladesh. It now hosts 45 Students taught by 3 Teachers.",
      teacher: {
        name: "Tanjiba Jerin",
        img: "/assets/images/ht5.jpeg",
        post: "Class Teacher",
        quote: "The pen is mightier than the sword",
      },
    },
    {
      img: "/assets/images/school6.jpeg",
      name: "Deboi Government Primary School",
      location: "Rupganj, Bangladesh",
      applicants: "11 Scholarship Applicants",
      details:
        "Established in 1992 in Rupganj, Bangladesh. It now hosts 24 Students taught by 2 Teachers.",
      teacher: {
        name: "Dipa Das",
        img: "/assets/images/ht6.jpeg",
        post: "Class Teacher",
        quote:
          "A teacher's influnce never stops, it goes on till the day you die",
      },
    },
    {
      img: "/assets/images/school7.jpeg",
      name: "Birabo Government Primary School",
      location: "Bholabo, Bangladesh",
      applicants: "9 Scholarship Applicants",
      details:
        "Established in 1992 in Bholabo, Bangladesh. It now hosts 18 Students taught by 2 Teachers.",
      teacher: {
        name: "Pori Bhanu Akhter",
        img: "/assets/images/ht7.jpeg",
        post: "Class Teacher",
        quote:
          "A good education can change anyone. A good teacher can change everything.",
      },
    },
  ];

  let sliderRef = useRef(null);

  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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

  const [selectedSchool, setSelectedSchool] = useState(null);

  const openModal = (school) => {
    setSelectedSchool(school);
  };

  const closeModal = () => {
    setSelectedSchool(null);
  };

  return (
    <div className="w-full py-10">
      <div className="main-container">
        <div className="boxed-content">
          <h4 className="lg:text-4xl text-2xl font-bold">
            Students from Government Primary Schools Nationwide
          </h4>
        </div>
      </div>
      <div className="w-full py-10 ">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {schools.map((school, i) => (
            <SchoolCard school={school} key={i} onImageClick={openModal} />
          ))}
        </Slider>
      </div>
      {/* Modal */}
      <Modal school={selectedSchool} onClose={closeModal} />
    </div>
  );
};

export default GovtPrimarySchools;
