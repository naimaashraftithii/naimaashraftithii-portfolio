// import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/naimaashraf.tithi",
    },
    {
      // 📧 This opens the visitor's email app, FROM their email, TO you
      icon: <FaMailBulk />,
      url:
        "mailto:naimaashraftithi@gmail.com" +
        "?subject=Hello%20Tithi" +
        "&body=I%20would%20like%20to%20connect%20with%20you",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/naima-ashraf-tithi",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/_______titi______/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/naimaashraftithii",
    },
  ];

  return (
    <footer className="text-white py-10 px-[10vw] md:px-[7vw] lg:px-[20vw] bg-[#05040b]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Naima Ashraf Tithi
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-5 mt-5">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="text-2xl hover:text-purple-500 transition-transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Naima Ashraf Tithi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
