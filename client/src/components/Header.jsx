import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { fetchCurrentUser } from "../redux/currentReducer";
import { Logout } from "../redux/authReducer";

const Header = ({ displayAll }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { portfolioData } = useSelector((state) => state.root);

  const contacts = portfolioData?.contacts || {};

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "projects",
        "contact",
      ];

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(Logout());
    dispatch(fetchCurrentUser(null));
    navigate("/");
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  if (!displayAll) {
    return (
      <nav className="flex items-center justify-between px-8 h-20 bg-[#0f172a] text-white border-b border-gray-700">
        <h1 className="text-xl font-semibold">Portfolio Admin</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </nav>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b1120]/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <h1
          onClick={() => scrollToSection("home")}
          className="text-3xl font-extrabold cursor-pointer bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {contacts?.name || "Portfolio"}
        </h1>

        <div className="hidden lg:flex">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        <ul className="flex items-center gap-8 text-gray-300 lg:hidden">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "hover:text-white"
              }`}
            >
              {item.label}
            </li>
          ))}

          <a
            href={contacts?.resume}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Resume
          </a>
        </ul>
      </div>

      {menuOpen && (
        <div className="hidden lg:block bg-[#111827] border-t border-gray-700">
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-8 py-4 text-gray-300 hover:bg-gray-800 cursor-pointer"
            >
              {item.label}
            </div>
          ))}

          <a
            href={contacts?.resume}
            target="_blank"
            rel="noreferrer"
            className="block mx-8 my-4 text-center bg-cyan-600 text-white py-3 rounded-lg"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;