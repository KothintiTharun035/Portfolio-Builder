import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const SocialIcons = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const contacts = portfolioData?.contacts || {};

  const icons = [
    {
      icon: <FaGithub />,
      link: contacts?.github,
      color: "hover:text-white",
    },
    {
      icon: <FaLinkedin />,
      link: contacts?.linkedIn,
      color: "hover:text-cyan-400",
    },
    {
      icon: <FaInstagram />,
      link: contacts?.instagram,
      color: "hover:text-pink-400",
    },
    {
      icon: <FaEnvelope />,
      link: `mailto:${contacts?.email}`,
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="flex items-center gap-6 text-3xl mt-8">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`text-gray-400 transition-all duration-300 hover:scale-125 ${item.color}`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;