import React from "react";

const GradientButton = ({
  children,
  href,
  onClick,
  type = "button",
  primary = true,
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105";

  const primaryStyle =
    "bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white shadow-lg hover:shadow-cyan-500/30";

  const secondaryStyle =
    "border border-gray-600 text-white hover:bg-white/10";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${baseStyle} ${
          primary ? primaryStyle : secondaryStyle
        }`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${
        primary ? primaryStyle : secondaryStyle
      }`}
    >
      {children}
    </button>
  );
};

export default GradientButton;