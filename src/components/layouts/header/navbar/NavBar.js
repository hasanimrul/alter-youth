import Link from "next/link";
import React from "react";
import SvgLogoAy from "../../../../../public/assets/icons/LogoAy2";
import SvgAlteryouthLogo from "../../../../../public/assets/icons/LogoAy1";

const NavBar = () => {
  return (
    <header className="main-container fixed top-0 left-0 right-0">
      <nav className="boxed-content flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button>
            <img src="/assets/icons/white-hamburger.svg" />
          </button>
          <Link href="/">
            {" "}
            <img src="/assets/icons/white-logo.svg" />
          </Link>
        </div>
        <ul className="flex items-center gap-5 text-white font-bold">
          <li>About</li>
          <li>How it Works</li>
          <li>Scholarships</li>
          <li>Collaborate</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
