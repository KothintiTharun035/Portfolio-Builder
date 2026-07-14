
import { useSelector } from "react-redux";
import React, { useState, useRef } from 'react';


import Header from "../../components/Header";
import FooterDashboard from "../../components/FooterDashboard";

import AdminIntro from "./adminIntro";
import AdminAbout from "./adminAbout";
import AdminEdu from "./adminEdu";
import AdminExp from "./adminExp";
import AdminProj from "./adminProj";
import AdminCon from "./adminCon";

import Lottie from "lottie-react";
import developerAnimation from "../../assets/developer.json";

import {
  FaUser,
  FaUserGraduate,
  FaBriefcase,
  FaProjectDiagram,
  FaAddressBook,
} from "react-icons/fa";

import { MdOutlinePerson } from "react-icons/md";

const Index = () => {
  const [activeTab, setActiveTab] = useState("1");

  const editorRef = useRef(null);

const openEditor = (tab) => {
  setActiveTab(tab);

  setTimeout(() => {
    editorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

  const { portfolioData } = useSelector((state) => state.root);


  // Portfolio Completion
  const completedSections = [
    portfolioData?.intro?.welcomeText,
    portfolioData?.about?.description,
    portfolioData?.education?.length > 0,
    portfolioData?.experience?.length > 0,
    portfolioData?.projects?.length > 0,
    portfolioData?.contacts?.email,
  ];

  const completedCount = completedSections.filter(Boolean).length;

  const completion = Math.round(
    (completedCount / completedSections.length) * 100
  );

  return (
    <>
      <Header displayAll={false} />

      {portfolioData && (
        <div className="bg-slate-100 min-h-screen pb-20">

          {/* ================= HERO SECTION ================= */}

          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-b-[40px] shadow-xl">

            <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-10">

              {/* Left */}

              <div className="max-w-xl">

                <h1 className="text-5xl font-bold text-white">
                  Welcome Back 👋
                </h1>

                <p className="text-indigo-100 mt-4 text-lg">
                  Complete your portfolio and publish it for recruiters.
                </p>

                {/* Progress */}

                <div className="mt-8">

                  <div className="flex justify-between text-white font-semibold mb-2">

                    <span>Portfolio Completion</span>

                    <span>{completion}%</span>

                  </div>

                  <div className="w-full bg-white/30 h-3 rounded-full overflow-hidden">

                    <div
                      className="bg-white h-3 rounded-full transition-all duration-700"
                      style={{ width: `${completion}%` }}
                    />

                  </div>

                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-4">

                  <button
                    onClick={() =>
                      window.open(`/portfolio/${portfolioData._id}`, "_blank")
                    }
                    className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
                  >
                    🚀 Visit Portfolio
                  </button>

                </div>

              </div>

              {/* Right */}

              <div className="hidden lg:block w-[420px]">

                <Lottie
                  animationData={developerAnimation}
                  loop
                />

              </div>

            </div>

          </div>

          {/* ================= DASHBOARD ================= */}

          <div className="max-w-7xl mx-auto px-6 mt-10">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">              {/* ================= INTRO ================= */}

              <div
                onClick={() => openEditor("1")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaUser size={28} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Intro
                </h2>

                <p className="text-indigo-100 mt-2">
                  Update your landing section.
                </p>
              </div>

              {/* ================= ABOUT ================= */}

              <div
                onClick={() => openEditor("2")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <MdOutlinePerson size={30} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  About
                </h2>

                <p className="text-purple-100 mt-2">
                  Tell recruiters about yourself.
                </p>
              </div>

              {/* ================= EDUCATION ================= */}

              <div
                onClick={() => openEditor("3")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaUserGraduate size={28} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Education
                </h2>

                <p className="text-blue-100 mt-2">
                  Add your academic details.
                </p>
              </div>

              {/* ================= EXPERIENCE ================= */}

              <div
                onClick={() => openEditor("4")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaBriefcase size={28} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Experience
                </h2>

                <p className="text-green-100 mt-2">
                  Showcase your internships.
                </p>
              </div>

              {/* ================= PROJECTS ================= */}

              <div
                onClick={() => openEditor("5")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaProjectDiagram size={28} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Projects
                </h2>

                <p className="text-orange-100 mt-2">
                  Highlight your best work.
                </p>
              </div>

              {/* ================= CONTACT ================= */}

              <div
                onClick={() => openEditor("6")}
                className="group cursor-pointer rounded-3xl p-6 bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:rotate-12 transition">
                    <FaAddressBook size={28} />
                  </div>

                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Edit
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6">
                  Contact
                </h2>

                <p className="text-pink-100 mt-2">
                  Manage your social links.
                </p>
              </div>

            </div>

            {/* ================= PORTFOLIO EDITOR ================= */}

            <div
                  ref={editorRef}
                  className="bg-white rounded-3xl shadow-2xl mt-12 p-8"
                >

              <div className="flex justify-between items-center mb-8">

                <div>
                  <h2 className="text-3xl font-bold">
                    Portfolio Editor
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Select any section from the sidebar.
                  </p>
                </div>

              

              </div>

              <div className="flex lg:flex-row flex-col gap-8 items-start">        
                        {/* ================= SIDEBAR ================= */}

                <div className="lg:w-72">

                  <div className="space-y-3 sticky top-24">

                    <button
                      onClick={() => openEditor("1")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "1"
                          ? "bg-indigo-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <FaUser />
                      Intro
                    </button>

                    <button
                      onClick={() => openEditor("2")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "2"
                          ? "bg-purple-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <MdOutlinePerson />
                      About
                    </button>

                    <button
                      onClick={() => openEditor("3")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "3"
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <FaUserGraduate />
                      Education
                    </button>

                    <button
                      onClick={() => openEditor("4")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "4"
                          ? "bg-green-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <FaBriefcase />
                      Experience
                    </button>

                    <button
                      onClick={() => openEditor("5")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "5"
                          ? "bg-orange-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <FaProjectDiagram />
                      Projects
                    </button>

                    <button
                      onClick={() => openEditor("6")}
                      className={`w-full flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 ${
                        activeTab === "6"
                          ? "bg-pink-600 text-white shadow-lg"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      <FaAddressBook />
                      Contact
                    </button>

                  </div>

                </div>

                {/* ================= RIGHT PANEL ================= */}

                <div className="flex-1">

                  <div className="flex justify-between items-center border-b pb-5 mb-8">

                          <div>

                              <h2 className="text-3xl font-bold text-slate-800">

                                  {activeTab === "1" && "👤 Intro"}
                                  {activeTab === "2" && "🙋 About"}
                                  {activeTab === "3" && "🎓 Education"}
                                  {activeTab === "4" && "💼 Experience"}
                                  {activeTab === "5" && "📁 Projects"}
                                  {activeTab === "6" && "📞 Contact"}

                              </h2>

                              <p className="text-gray-500 mt-2">
                                  Update your portfolio information.
                              </p>

                          </div>

                      

                      </div>

                      {activeTab === "1" && <AdminIntro />}
                      {activeTab === "2" && <AdminAbout />}
                      {activeTab === "3" && <AdminEdu />}
                      {activeTab === "4" && <AdminExp />}
                      {activeTab === "5" && <AdminProj />}
                      {activeTab === "6" && <AdminCon />}

                  </div>

              </div>

              </div>

            </div>

          </div>


      )}

      <FooterDashboard />

    </>
  );
};

export default Index;