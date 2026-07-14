import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";
import Lottie from "lottie-react";
import projectAnimation from "../../assets/projects.json";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const { portfolioData } = useSelector((state) => state.root);

  const projects = portfolioData?.projects || [];

  const capitalize = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (<>
  <section
  id="projects"
  className="relative py-28 bg-[#0B1120]"
  data-aos="zoom-in"
>

    <SectionTitle title="Featured Projects" />

    <div className="grid lg:grid-cols-4 gap-8 mt-16">

      {/* LEFT PROJECT LIST */}

      <div className="space-y-4">

        {projects.map((project, index) => (

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

            <h2 className="font-bold text-lg">

              {capitalize(project.title)}

            </h2>

            <p className="text-sm mt-2 opacity-80">

              {project.technologies?.slice(0,2).join(" • ")}

            </p>

          </div>

        ))}

      </div>

      {/* RIGHT PROJECT DETAILS */}

      {projects.length > 0 && (

        <div className="lg:col-span-3">

          <GlassCard className="overflow-hidden">

            <div className="flex justify-center pt-8">

  <Lottie
    animationData={projectAnimation}
    loop
    className="w-56 h-56"
  />

</div>

            

            <div className="p-10">

                <span className="inline-block mb-5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm tracking-widest">

FEATURED PROJECT

</span>

              <h1 className="text-4xl font-bold text-white">

                {capitalize(projects[selectedItemIndex].title)}

              </h1>

              <p className="text-gray-300 mt-6 leading-8 text-lg">

                {capitalize(projects[selectedItemIndex].description)}

              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {projects[selectedItemIndex].technologies.map((tech,index)=>(
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-cyan-500/10
border
border-cyan-400/30
text-cyan-300
hover:bg-cyan-500/20
hover:border-cyan-400
transition-all
duration-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex flex-wrap gap-5 mt-10">                <a
                  href={projects[selectedItemIndex].github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={projects[selectedItemIndex].demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-xl border border-cyan-400/30 text-white hover:bg-white/10 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

            </GlassCard>

        </div>

      )}

    </div>
    

  </section>

</>
  );
};

export default Projects;