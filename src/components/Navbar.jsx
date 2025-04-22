import React from "react";
import Cart from "./Cart";

const navLinks = ["Collection", "Men", "Women", "About", "Contact"];

const Navbar = ({ logo, cart, avatar }) => {
  return (
    <nav className="px-6 md:px-0 flex justify-between items-center border-b border-b-grayish-blue pb-6 relative">
      <div className="flex items-center gap-6">
        <a href="#">
          <img src={logo} alt="logo" className="h-5" />
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link, link_idx) => (
            <li
              key={link_idx}
              className="text-sm hover:decoration-custom-orange hover:decoration-2 hover:underline hover:underline-offset-[36px]"
            >
              <a
                href="#"
                className="text-dark-grayish-blue hover:text-dark-blue"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3 md:gap-10">
        <Cart cart={cart} />
        <img
          src={avatar}
          alt="profile picture"
          className="h-8 md:h-10 w-8 md:w-10 object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
