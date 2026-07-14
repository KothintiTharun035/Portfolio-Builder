import React from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import aboutAnimation from "../../assets/about.json";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";

const About = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const about = portfolioData?.about || {};

  const {
    description1,
    description2,
    skills = [],
  } = about;

  const techIcons = {
    java: <FaJava className="text-orange-500 text-5xl" />,
    reactjs: <FaReact className="text-cyan-400 text-5xl" />,
    javascript: <SiJavascript className="text-yellow-400 text-5xl" />,
    nodejs: <FaNodeJs className="text-green-500 text-5xl" />,
    mysql: <SiMysql className="text-blue-500 text-5xl" />,
    mongodb: <SiMongodb className="text-green-400 text-5xl" />,
    docker: <FaDocker className="text-blue-400 text-5xl" />,
    github: <FaGithub className="text-white text-5xl" />,
    "spring-boot": (
      <SiSpringboot className="text-green-500 text-5xl" />
    ),
  };

  return (<>
  <section
    id="about"
    className="relative py-28 bg-[#0B1120] overflow-hidden"
  >
    <SectionTitle
      title="About Me"
      subtitle="Passionate Java Full Stack Developer building scalable web applications with modern technologies."
    />

    <div className="max-w-7xl mx-auto px-8 lg:px-6 sm:px-5">

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-16 items-center">

        {/* LEFT */}

        <div
          className="flex justify-center"
          data-aos="fade-right"
        >

          <GlassCard className="p-8 w-full max-w-lg">

            <Lottie
              animationData={aboutAnimation}
              loop
              className="h-[420px]"
            />

          </GlassCard>

        </div>

        {/* RIGHT */}

        <div
          data-aos="fade-left"
        >

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">

            ABOUT ME

          </span>

          <h2 className="text-white text-5xl font-black mt-4 leading-tight">

            Crafting Modern
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              Full Stack Applications

            </span>

          </h2>

          <p className="text-gray-300 leading-8 mt-8">

            {description1}

          </p>

          <p className="text-gray-400 leading-8 mt-6">

            {description2}

          </p>

          {/* STATS */}

          <div className="grid grid-cols-2 gap-5 mt-10">

            <GlassCard className="p-6 text-center hover:scale-105 transition duration-300">

              <h1 className="text-4xl font-black text-cyan-400">

                {skills.length}+

              </h1>

              <p className="text-gray-300 mt-2">

                Technologies

              </p>

            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition duration-300">

              <h1 className="text-4xl font-black text-purple-400">

                10+

              </h1>

              <p className="text-gray-300 mt-2">

                Projects

              </p>

            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition duration-300">

              <h1 className="text-4xl font-black text-green-400">

                100%

              </h1>

              <p className="text-gray-300 mt-2">

                Passion

              </p>

            </GlassCard>

            <GlassCard className="p-6 text-center hover:scale-105 transition duration-300">

              <h1 className="text-4xl font-black text-pink-400">

                AI

              </h1>

              <p className="text-gray-300 mt-2">

                Enthusiast

              </p>

            </GlassCard>

          </div>

        </div>

      </div>

      {/* SKILLS */}

      <div className="mt-28">

        <h2 className="text-center text-white text-4xl font-bold mb-14">

          Tech Stack

        </h2>

        <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-8">

          {skills.map((skill, index) => {

            const icon = techIcons[skill.toLowerCase()];

            return (

              <GlassCard
                key={index}
                className="p-8 text-center hover:-translate-y-3 hover:border-cyan-400 transition-all duration-300"
              >

                <div className="flex justify-center mb-6">

                  {icon || (
                    <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                      {skill.charAt(0)}
                    </div>
                  )}

                </div>

                <h3 className="text-white text-xl font-semibold">

                  {skill}

                </h3>

              </GlassCard>

            );

          })}          

        </div>

      </div>

    </div>

  </section>
</>
  );
};

export default About;