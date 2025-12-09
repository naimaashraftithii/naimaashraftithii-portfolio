import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm tracking-wide ${
      isActive ? "text-h1 font-semibold" : "text-subtext"
    }`;

  return (
    <header className="w-full bg-white border-b border-black">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="text-xl">
          <Logo />
        </NavLink>

        {/* CENTER NAV (DESKTOP ONLY) */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink className={linkClass} to={item.to}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT BUTTON */}
        <button
          className="
            hidden lg:inline-block px-6 py-2 rounded-full text-sm font-semibold
            bg-gradient-to-r from-black via-gray-700 to-white
            text-white border border-gray-300 shadow-sm
            hover:scale-105 transition-transform duration-200
          "
        >
          Get Started
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="lg:hidden bg-white border-t border-black">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={linkClass}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <button
              className="
                w-full px-6 py-2 rounded-full text-sm font-semibold
                bg-gradient-to-r from-black via-gray-700 to-white
                text-white border border-gray-300 shadow-sm
              "
            >
              Get Started
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
