import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import Sidebar from "./mobileMenu/Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Sidebar toggle={toggleMenu} isOpen={isMenuOpen} />
      <NavBar toggle={toggleMenu} isOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
