import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">

      <h2 className="text-5xl sm:text-3xl font-extrabold text-white">
        {title}
      </h2>

      <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4"></div>

      {subtitle && (
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
};

export default SectionTitle;