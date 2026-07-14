import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaGraduationCap } from "react-icons/fa";

import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";

import Lottie from "lottie-react";
import educationAnimation from "../../assets/education.json";

const Educations = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const educations = portfolioData?.educations || [];

  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <>
      <section
        id="education"
        className="py-20"
        data-aos="fade-right"
      >
        <SectionTitle title="Education" />

        <div className="grid lg:grid-cols-4 gap-8 mt-16">

          {/* LEFT SIDEBAR */}

          <div className="space-y-4">

            {educations.map((education, index) => (

              <div
                key={index}
                onClick={() => setSelectedItemIndex(index)}
                className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border ${
                  selectedItemIndex === index
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-xl"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-cyan-500/20"
                }`}
              >

                <div className="flex items-center gap-3">

                  <FaGraduationCap className="text-2xl" />

                  <div>

                    <h2 className="font-bold text-lg">
                      {capitalize(education.standard)}
                    </h2>

                    <p className="text-sm opacity-80 mt-1">
                      {capitalize(education.period)}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT DETAILS */}

          {educations.length > 0 && (

            <div className="lg:col-span-3">

              <GlassCard className="p-10">

                {/* Education Animation */}

                <div className="flex justify-center mb-8">

                  <Lottie
                    animationData={educationAnimation}
                    loop
                    className="w-56 h-56"
                  />

                </div>

                <div className="flex justify-between items-start flex-wrap gap-5">

                  <div>

                    <h1 className="text-4xl font-bold text-white">

                      {capitalize(
                        educations[selectedItemIndex].standard
                      )}

                    </h1>

                    <h2 className="text-xl text-indigo-300 mt-3">

                      {capitalize(
                        educations[selectedItemIndex].collegeName
                      )}

                    </h2>

                  </div>

                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full text-white font-semibold">

                    {capitalize(
                      educations[selectedItemIndex].period
                    )}

                  </div>

                </div>                <div className="mt-10 grid md:grid-cols-2 gap-8">

                  <div className="rounded-2xl bg-slate-800/50 p-6 border border-white/10">

                    <h3 className="text-gray-400 text-sm uppercase tracking-wide">

                      Degree / Standard

                    </h3>

                    <p className="text-white text-xl font-semibold mt-3">

                      {capitalize(
                        educations[selectedItemIndex].standard
                      )}

                    </p>

                  </div>

                  <div className="rounded-2xl bg-slate-800/50 p-6 border border-white/10">

                    <h3 className="text-gray-400 text-sm uppercase tracking-wide">

                      GPA / Marks

                    </h3>

                    <p className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold mt-3">

                      {educations[selectedItemIndex].gpa}

                    </p>

                  </div>

                </div>

                <div className="mt-10 rounded-2xl bg-slate-800/50 p-6 border border-white/10">

                  <h3 className="text-gray-400 text-sm uppercase tracking-wide">
                    Institution
                  </h3>

                  <p className="text-white text-lg leading-8 mt-3">

                    {capitalize(
                      educations[selectedItemIndex].collegeName
                    )}

                  </p>

                </div>

              </GlassCard>

            </div>

          )}

        </div>

      </section>

    </>
  );
};

export default Educations;