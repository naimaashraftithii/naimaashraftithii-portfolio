// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300
        px-[5vw] sm:px-[6vw] md:px-[7vw] lg:px-[12vw]
        ${isScrolled ? "bg-[#050414]/70 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="text-white py-3 sm:py-4 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleMenuItemClick("about")}
          className="text-sm sm:text-base md:text-lg font-semibold cursor-pointer flex items-center gap-1
                     transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Naima</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Ashraf</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Tithi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </button>

        {/* Desktop / Large menu (lg and up) */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-xs md:text-sm text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-colors duration-200
                  hover:text-[#c79dff]
                  ${activeSection === item.id ? "text-[#8245ec]" : ""}
                `}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-4 ml-4">
            <a
              href="https://github.com/naimaashraftithii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-[#8245ec] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naima-ashraf-tithi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-[#8245ec] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile / Tablet icon (below lg) */}
        <div className="lg:hidden">
          {isOpen ? (
            <FiX
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl sm:text-3xl text-[#8245ec] cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile / Tablet menu (for < lg) */}
      {isOpen && (
        <div className="lg:hidden pb-4">
          <div className="mx-auto w-[88%] sm:w-[80%] bg-[#050414]/90 backdrop-blur-lg rounded-2xl shadow-lg border border-white/5">
            <ul className="flex flex-col items-center gap-3 py-4 text-sm text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer w-full text-center py-1
                    transition-all duration-200
                    hover:text-white hover:bg-white/5
                    ${
                      activeSection === item.id
                        ? "text-[#8245ec] font-semibold"
                        : ""
                    }
                  `}
                >
                  <button
                    className="w-full"
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex items-center gap-5 pt-3">
                <a
                  href="https://github.com/naimaashraftithii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/naima-ashraf-tithi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-300 hover:text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <FaLinkedin />
                </a>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
