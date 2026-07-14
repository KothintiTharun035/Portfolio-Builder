import React from "react";
import { useSelector } from "react-redux";
import { FaHeart, FaArrowUp } from "react-icons/fa";

import SocialIcons from "../../components/ui/SocialIcons";

const Footer = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const contact = portfolioData?.contacts || {};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative py-16 bg-[#0B1120] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col items-center">

          <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          >
            <FaArrowUp />
          </button>

          <div className="mt-8">
            <SocialIcons />
          </div>

          <h2 className="text-white text-2xl font-bold mt-8">
            {contact.name || "Kothinti Tharun"}
          </h2>

          <p className="text-gray-400 mt-3 text-center max-w-xl">
            Java Full Stack Developer passionate about building scalable,
            modern and user-friendly web applications.
          </p>

          <div className="flex items-center gap-2 text-gray-400 mt-8">

            <span>
              © {new Date().getFullYear()}
            </span>

            <span>Designed & Developed with</span>

            <FaHeart className="text-red-500 animate-pulse" />

            <span>by {contact.name || "Kothinti Tharun"}</span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;