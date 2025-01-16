import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "../mobileMenu/Sidebar";

const NavBar = ({ toggle, isOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`main-container lg:fixed top-0 left-0 right-0 z-20 transition-all duration-300 hidden ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="boxed-content lg:flex items-center justify-between py-2 hidden">
          <div className="flex items-center gap-5">
            <button onClick={toggle}>
              <img
                src={
                  scrolled
                    ? "/assets/icons/blue-hamburger.svg"
                    : "/assets/icons/white-hamburger.svg"
                }
                alt="Menu"
              />
            </button>
            <Link href="/">
              {scrolled ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12rem"
                  viewBox="0 0 386.318 80"
                  class="mb-1 ms-3"
                  color="#1dc468"
                >
                  <g
                    id="Group_6923"
                    data-name="Group 6923"
                    transform="translate(0 -4)"
                  >
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(0 24.079)"
                    >
                      <g
                        id="Logo_Ay"
                        data-name="Logo Ay"
                        transform="translate(0 0)"
                      >
                        <g id="Layer_1" data-name="Layer 1">
                          <g id="Group_2021" data-name="Group 2021">
                            <path
                              id="Path_2256"
                              data-name="Path 2256"
                              d="M86.864,10.884c-13.346,3.905-26.67,7.843-40.036,11.663a9,9,0,0,1-4.5-.043C28.248,18.789,14.2,14.956,0,10.08c6.274-1.641,12.726-2.812,18.794-5,18.5-6.688,36.754-7.019,55.075.545,4.112,1.69,8.637,2.4,12.979,3.561,0,.568,0,1.135.016,1.7"
                              transform="translate(0 -0.003)"
                              fill="#1dc468"
                              fill-rule="evenodd"
                            ></path>
                            <path
                              id="Path_2257"
                              data-name="Path 2257"
                              d="M78.457,96.692c-8.04.735-15.778-1.585-23.477-3.938-4.141-1.26-7.262-14.232-4.24-17.409a3.408,3.408,0,0,1,2.3-.706,6.491,6.491,0,0,1,2.491.706c15.128,6.947,30.322,6.068,45.506.3,5.169-1.969,6.347.043,6.32,4.995-.062,11.315-.046,11.653-11.233,14.252a61.322,61.322,0,0,1-17.671,1.8"
                              transform="translate(-33.279 -50.146)"
                              fill="#1dc468"
                              fill-rule="evenodd"
                            ></path>
                            <path
                              id="Path_2258"
                              data-name="Path 2258"
                              d="M12.317,61.79c1.247.5,1.109,1.6,1.162,2.533.413,6.563.774,13.09,1.2,19.63.144,2.2-.105,4.286-2.825,4.243-2.652-.046-3.564-1.788-3.216-4.4.82-6.212,1.5-12.441,2.3-18.656.151-1.217.039-2.625,1.4-3.347"
                              transform="translate(-5.754 -41.514)"
                              fill="#1dc468"
                              fill-rule="evenodd"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <text
                      id="alteryouth"
                      transform="translate(96.318 68)"
                      fill="#1dc468"
                      font-size="65"
                      font-family="Gilroy"
                      font-weight="700"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="0" y="0">
                        alteryouth
                      </tspan>
                    </text>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12rem"
                  viewBox="0 0 386.318 80"
                  class="mb-1 ms-3"
                  color="white"
                >
                  <g
                    id="Group_6923"
                    data-name="Group 6923"
                    transform="translate(0 -4)"
                  >
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(0 24.079)"
                    >
                      <g
                        id="Logo_Ay"
                        data-name="Logo Ay"
                        transform="translate(0 0)"
                      >
                        <g id="Layer_1" data-name="Layer 1">
                          <g id="Group_2021" data-name="Group 2021">
                            <path
                              id="Path_2256"
                              data-name="Path 2256"
                              d="M86.864,10.884c-13.346,3.905-26.67,7.843-40.036,11.663a9,9,0,0,1-4.5-.043C28.248,18.789,14.2,14.956,0,10.08c6.274-1.641,12.726-2.812,18.794-5,18.5-6.688,36.754-7.019,55.075.545,4.112,1.69,8.637,2.4,12.979,3.561,0,.568,0,1.135.016,1.7"
                              transform="translate(0 -0.003)"
                              fill="white"
                              fill-rule="evenodd"
                            ></path>
                            <path
                              id="Path_2257"
                              data-name="Path 2257"
                              d="M78.457,96.692c-8.04.735-15.778-1.585-23.477-3.938-4.141-1.26-7.262-14.232-4.24-17.409a3.408,3.408,0,0,1,2.3-.706,6.491,6.491,0,0,1,2.491.706c15.128,6.947,30.322,6.068,45.506.3,5.169-1.969,6.347.043,6.32,4.995-.062,11.315-.046,11.653-11.233,14.252a61.322,61.322,0,0,1-17.671,1.8"
                              transform="translate(-33.279 -50.146)"
                              fill="white"
                              fill-rule="evenodd"
                            ></path>
                            <path
                              id="Path_2258"
                              data-name="Path 2258"
                              d="M12.317,61.79c1.247.5,1.109,1.6,1.162,2.533.413,6.563.774,13.09,1.2,19.63.144,2.2-.105,4.286-2.825,4.243-2.652-.046-3.564-1.788-3.216-4.4.82-6.212,1.5-12.441,2.3-18.656.151-1.217.039-2.625,1.4-3.347"
                              transform="translate(-5.754 -41.514)"
                              fill="white"
                              fill-rule="evenodd"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                    <text
                      id="alteryouth"
                      transform="translate(96.318 68)"
                      fill="white"
                      font-size="65"
                      font-family="Gilroy"
                      font-weight="700"
                      letter-spacing="-0.04em"
                    >
                      <tspan x="0" y="0">
                        alteryouth
                      </tspan>
                    </text>
                  </g>
                </svg>
              )}
            </Link>
          </div>
          <ul
            className={`flex items-center gap-5 font-bold  ${
              scrolled ? "text-[#1dc468]" : "text-white"
            }`}
          >
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">How it Works</Link>
            </li>
            <li>
              <Link href="/">Scholarships</Link>
            </li>
            <li>
              <Link href="/">Collaborate</Link>
            </li>
            <li>
              <Link href="/">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`main-container fixed top-0 left-0 right-0 z-20 transition-all duration-300 bg-white shadow-lg lg:hidden md:hidden`}
      >
        <div className="boxed-content flex items-center gap-16 w-full py-4">
          <button onClick={toggle}>
            {isOpen ? (
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                  <path
                    d="M7 17L16.8995 7.10051"
                    stroke="#1dc468"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 7.00001L16.8995 16.8995"
                    stroke="#1dc468"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                color="#1dc468"
                style={{ color: "rgb(29, 196, 104)", cursor: "pointer" }}
                height="25"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
              </svg>
            )}
          </button>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8rem"
              viewBox="0 0 386.318 80"
              class="mb-1 ms-3"
              color="#1dc468"
            >
              <g
                id="Group_6923"
                data-name="Group 6923"
                transform="translate(0 -4)"
              >
                <g
                  id="Group_2"
                  data-name="Group 2"
                  transform="translate(0 24.079)"
                >
                  <g
                    id="Logo_Ay"
                    data-name="Logo Ay"
                    transform="translate(0 0)"
                  >
                    <g id="Layer_1" data-name="Layer 1">
                      <g id="Group_2021" data-name="Group 2021">
                        <path
                          id="Path_2256"
                          data-name="Path 2256"
                          d="M86.864,10.884c-13.346,3.905-26.67,7.843-40.036,11.663a9,9,0,0,1-4.5-.043C28.248,18.789,14.2,14.956,0,10.08c6.274-1.641,12.726-2.812,18.794-5,18.5-6.688,36.754-7.019,55.075.545,4.112,1.69,8.637,2.4,12.979,3.561,0,.568,0,1.135.016,1.7"
                          transform="translate(0 -0.003)"
                          fill="#1dc468"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          id="Path_2257"
                          data-name="Path 2257"
                          d="M78.457,96.692c-8.04.735-15.778-1.585-23.477-3.938-4.141-1.26-7.262-14.232-4.24-17.409a3.408,3.408,0,0,1,2.3-.706,6.491,6.491,0,0,1,2.491.706c15.128,6.947,30.322,6.068,45.506.3,5.169-1.969,6.347.043,6.32,4.995-.062,11.315-.046,11.653-11.233,14.252a61.322,61.322,0,0,1-17.671,1.8"
                          transform="translate(-33.279 -50.146)"
                          fill="#1dc468"
                          fill-rule="evenodd"
                        ></path>
                        <path
                          id="Path_2258"
                          data-name="Path 2258"
                          d="M12.317,61.79c1.247.5,1.109,1.6,1.162,2.533.413,6.563.774,13.09,1.2,19.63.144,2.2-.105,4.286-2.825,4.243-2.652-.046-3.564-1.788-3.216-4.4.82-6.212,1.5-12.441,2.3-18.656.151-1.217.039-2.625,1.4-3.347"
                          transform="translate(-5.754 -41.514)"
                          fill="#1dc468"
                          fill-rule="evenodd"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <text
                  id="alteryouth"
                  transform="translate(96.318 68)"
                  fill="#1dc468"
                  font-size="65"
                  font-family="Gilroy"
                  font-weight="700"
                  letter-spacing="-0.04em"
                >
                  <tspan x="0" y="0">
                    alteryouth
                  </tspan>
                </text>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
