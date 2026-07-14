import React from "react";
import { useSelector } from "react-redux";

const FooterPortfolio = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const contact = portfolioData?.contacts || {};
  const intro = portfolioData?.intros || {};

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

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Portfolio */}

          <div>

            <h2 className="text-4xl font-bold">
  {intro.firstName
    ? `${intro.firstName}`
    : "My Portfolio"}
</h2>

            <p className="text-gray-400 mt-5 leading-8">
              Thank you for visiting my portfolio.
              I’m passionate about building modern web
              applications and always open to internships,
              full-time opportunities and collaborations.
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
                onClick={() => scrollToSection("about")}
                className="block hover:text-white transition"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("education")}
                className="block hover:text-white transition"
              >
                Education
              </button>

              <button
                onClick={() => scrollToSection("experience")}
                className="block hover:text-white transition"
              >
                Experience
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="block hover:text-white transition"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="block hover:text-white transition"
              >
                Contact
              </button>

            </div>

          </div>

          

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-400">

  <p className="text-center text-gray-400">
  © {new Date().getFullYear()} • All Rights Reserved
</p>

<p className="text-center text-cyan-400 font-semibold text-lg mt-2">
  {intro.firstName
    ? `${intro.firstName} ${intro.lastName}`
    : "Portfolio"}
</p>

</div>

      </div>
    </footer>
  );
};

export default FooterPortfolio;