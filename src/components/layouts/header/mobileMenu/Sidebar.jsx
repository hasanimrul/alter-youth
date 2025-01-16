import Link from "next/link";
import React from "react";

const Sidebar = ({ isOpen, toggle }) => {
  const sidebarStyle = {
    opacity: isOpen ? "1" : "0",
    left: isOpen ? "0" : "-100%",
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "sidebar-backdrop") {
      toggle();
    }
  };
  return (
    <div
      onClick={handleBackdropClick}
      id="sidebar-backdrop"
      className="fixed top-0 left-0 bg-black bg-opacity-20 z-50 w-full flex flex-col sidebar-transition"
      style={sidebarStyle}
    >
      <div className="relative flex flex-col bg-white  w-[250px]">
        <button onClick={toggle} className="absolute top-5 left-5 lg:hidden">
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
        </button>
        <ul className="text-sm flex flex-col items-start gap-3  h-lvh pt-24 px-5">
          <li className="group w-full bg-[#1dc46825] px-3 py-2 rounded-md">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
              </svg>
              <span className="font-bold">Home</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                ></path>
              </svg>
              <span className="font-bold">How it Works</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                ></path>
              </svg>
              <span className="font-bold">About</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                <path d="m18 15-2-2"></path>
                <path d="m15 18-2-2"></path>
              </svg>
              <span className="font-bold">Collaborate</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                ></path>
              </svg>
              <span className="font-bold">Scholarship Policy</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>

              <span className="font-bold">Get in touch</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                ></path>
              </svg>
              <span className="font-bold">Get the app</span>
            </Link>
          </li>
          <li className="group w-full">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 group-hover:text-[#1dc468] w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
              </svg>
              <span className="font-bold">Log in</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
