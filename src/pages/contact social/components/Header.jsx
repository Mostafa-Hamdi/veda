import React from "react";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header class="absolute top-0 left-0 right-0 z-20 px-4 sm:px-8 py-5 sm:py-6">
      <div class="container mx-auto">
        <img
          alt="Veda Logo"
          class="mx-auto lg:mx-[initial]  w-auto"
          src={logo}
        />
      </div>
    </header>
  );
};

export default Header;
