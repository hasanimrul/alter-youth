import React from "react";

const Footer = () => {
  return (
    <div className="main-container bg-gray-200">
      <div className="boxed-content">
        <h3 className="text-xl font-semibold">Learn About AlterYouth</h3>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>How it works</li>
          <li>Scholarship policy</li>
          <li>Get the app</li>
        </ul>
        <hr className="w-full py-2" />
        <p>© 2025 AlterYouth Limited</p>
        <div className="flex items-center gap-2">
          <p className="hover:text-emerald-500 cursor-pointer">Terms of Service</p>
          <p>.</p>
          <p className="hover:text-emerald-500 cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
