import React from "react";

import Lottie from "lottie-react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import contactAnimation from "../assets/contact-main-page.json";

const FooterLanding = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-bold">
              Portfolio Builder
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              Build a stunning developer portfolio in minutes.
              Showcase your skills, projects and achievements
              with a modern responsive portfolio.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4 text-gray-400">

              <button
                onClick={scrollToTop}
                className="block hover:text-white transition"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("features")}
                className="block hover:text-white transition"
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block hover:text-white transition"
              >
                How It Works
              </button>

              <button
                onClick={() => scrollToSection("get-started")}
                className="block hover:text-white transition"
              >
                Get Started
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-white transition"
              >
                Contact
              </button>

            </div>

          </div>

          {/* Connect With Me */}

          <div className="flex flex-col items-center">

  <Lottie
    animationData={contactAnimation}
    loop={true}
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
      href=""
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 hover:scale-110 transition"
    >
      <FaLinkedin />
    </a>


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

export default FooterLanding;