import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="main-container bg-gray-100 py-10">
      <div className="boxed-content px-10">
        <h3 className="text-md font-semibold">Learn About AlterYouth</h3>
        <div className="flex justify-between items-end">
          <ul className="text-sm flex flex-col gap-1 pt-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">How it works</Link>
            </li>
            <li>
              <Link href="/">Scholarship policy</Link>
            </li>
            <li>
              <Link href="/">Get the app</Link>
            </li>
          </ul>
          <p className="text-sm">Towards a literate Bangladesh</p>
        </div>
        <hr className="w-full bg-gray-300 h-[2px] my-5" />
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm">© 2025 AlterYouth Limited</p>
            <div className="flex items-center gap-2">
              <p className="hover:text-[#1dc468] cursor-pointer text-sm">
                Terms of Service
              </p>
              <p>.</p>
              <p className="hover:text-[#1dc468] cursor-pointer text-sm">
                Privacy Policy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/alteryouth" target="blank">
              <svg
                className="w-5 h-5 cursor-pointer hover:stroke-[#1dc468] transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="https://www.instagram.com/alteryouthapp/#" target="blank">
              <svg
                className="w-5 h-5 cursor-pointer hover:stroke-[#1dc468] transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
