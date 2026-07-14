import React from "react";
import Lottie from "lottie-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import contactAnimation from "../assets/contact-main-page.json";

const FooterDashboard = () => {


  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-bold">
              Portfolio Dashboard
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Welcome to your dashboard. Manage your portfolio,
              edit your information, update projects and publish
              your latest work for recruiters.
            </p>

          </div>


          {/* Connect With Me */}

          <div className="md:pl-20">


            <div className="flex flex-col items-center">

  <Lottie
    animationData={contactAnimation}
    loop
    className="w-44"
  />

  <div className="flex gap-8 mt-5 text-4xl">

    <a
          href="mailto:kothintitharun@gmail.com"
          className="text-cyan-400 hover:text-cyan-300 hover:scale-110 transition duration-300"
        >
          <FaEnvelope />
        </a>
    
        <a
          href="https://github.com/KothintiTharun035"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>
    
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

  </div>

</div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-400">

          <p>

    © {new Date().getFullYear()} Portfolio Builder • Designed &
    Developed by

    <span className="text-white font-semibold">

      {" "}Tharun❤️

    </span>

  </p>


        </div>

      </div>
    </footer>
  );
};

export default FooterDashboard;