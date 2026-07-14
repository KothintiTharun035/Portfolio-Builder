import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaBriefcase } from "react-icons/fa";

import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";
import Lottie from "lottie-react";
import experienceAnimation from "../../assets/experience.json";

const Experiences = () => {

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const experiences = portfolioData?.experiences || [];

  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (<>
  <section
  id="experience"
  className="relative py-28 bg-[#0B1120]"
  data-aos="fade-left"
>

    <SectionTitle title="Experience" />

    <div className="grid lg:grid-cols-4 gap-8 mt-16">

      {/* LEFT SIDEBAR */}

      <div className="space-y-4">

        {experiences.map((experience, index) => (

          <div
            key={index}
            onClick={() => setSelectedItemIndex(index)}
            className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border
            ${
              selectedItemIndex === index
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-xl"
                : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-cyan-500/20"
            }`}
          >

            <div className="flex items-center gap-3">

              <FaBriefcase className="text-2xl" />

              <div>

                <h2 className="font-bold text-lg">

                  {capitalize(experience.title)}

                </h2>

                <p className="text-sm opacity-80 mt-1">

                  {capitalize(experience.period)}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* RIGHT DETAILS */}

      {experiences.length > 0 && (

        <div className="lg:col-span-3">

         <GlassCard className="p-10">

            <div className="flex justify-center mb-8">

  <Lottie
    animationData={experienceAnimation}
    loop
    className="w-56 h-56"
  />

</div>

            <div className="flex justify-between items-start flex-wrap gap-5">

              <div>

                <h1 className="text-4xl font-bold text-white">

                  {capitalize(
                    experiences[selectedItemIndex].title
                  )}

                </h1>

                <h2 className="text-xl text-indigo-300 mt-3">

                  {capitalize(
                    experiences[selectedItemIndex].company
                  )}

                </h2>

              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-full text-white font-semibold">

                {capitalize(
                  experiences[selectedItemIndex].period
                )}

              </div>

            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">

              <div className="rounded-2xl bg-slate-800/50 p-6 border border-white/10">

                <h3 className="text-gray-400 text-sm uppercase tracking-wide">

                  Position

                </h3>

                <p className="text-white text-xl font-semibold mt-3">

                  {capitalize(
                    experiences[selectedItemIndex].title
                  )}

                </p>

              </div>

              <div className="rounded-2xl bg-slate-800/50 p-6 border border-white/10">

                <h3 className="text-gray-400 text-sm uppercase tracking-wide">

                  Company

                </h3>

                <p className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent text-xl font-bold mt-3">

                  {capitalize(
                    experiences[selectedItemIndex].company
                  )}

                </p>

              </div>

            </div>

            <div className="mt-10 rounded-2xl bg-slate-800/50 p-6 border border-white/10">

              <h3 className="text-gray-400 text-sm uppercase tracking-wide">

                Responsibilities

              </h3>

              <p className="text-white text-lg leading-8 mt-3">

                {capitalize(
                  experiences[selectedItemIndex].description
                )}

              </p>

            </div>            <div className="mt-10 rounded-2xl bg-slate-800/50 p-6 border border-white/10">

              <h3 className="text-gray-400 text-sm uppercase tracking-wide">
                Duration
              </h3>

              <p className="text-white text-lg mt-3">

                {capitalize(
                  experiences[selectedItemIndex].period
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

export default Experiences;