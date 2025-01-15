import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavBar = () => {
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
    <header
      className={`main-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="boxed-content flex items-center justify-between py-2">
        <div className="flex items-center gap-5">
          <button>
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
            <img
              src={
                scrolled
                  ? "/assets/icons/blue-logo.svg"
                  : "/assets/icons/white-logo.svg"
              }
              alt="Logo"
            />
          </Link>
        </div>
        <ul
          className={`flex items-center gap-5 font-bold ${
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
    </header>
  );
};

export default NavBar;
