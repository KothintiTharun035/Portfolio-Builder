import React from "react";
import { useSelector } from "react-redux";

import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";



import heroAnimation from "../../assets/Developer-at-work.json";


import GlassCard from "../../components/ui/GlassCard";
import FloatingBlobs from "../../components/ui/FloatingBlobs";



const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const intros = portfolioData?.intros || {};

  const {
    firstName = "",
    lastName = "",
    welcomeText = "Hello",
    description = "",
  } = intros;

  return (<>
  <section
    id="home"
    className="relative min-h-screen bg-[#0B1120] overflow-hidden flex items-center"
  >
    <FloatingBlobs />

    <div className="max-w-7xl mx-auto px-8 w-full">

    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center min-h-[80vh]">

        {/* LEFT SIDE */}

        <div
  className="order-2 lg:order-1 z-10 flex flex-col justify-center"
  data-aos="fade-right"
>

          <div className="inline-flex w-fit items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-base font-medium mb-6">
  👋 {welcomeText || "Hii"}
</div>

          <h1 className="text-white font-black leading-tight text-7xl lg:text-5xl sm:text-4xl">

            I'M

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              {firstName}

            </span>

            <br />

            <span className="text-white">

              {lastName}

            </span>

          </h1>

          <div className="mt-8 text-3xl lg:text-2xl sm:text-xl font-semibold text-gray-300 min-h-[50px]">

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              speed={45}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl">

            {description}

          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-5 mt-10">

            

          </div>

          {/* SOCIAL */}

          

          {/* TECH BADGES */}

          <div className="flex flex-wrap gap-4 mt-10">

            {[
              "Java",
              "Spring Boot",
              "React",
              "MongoDB",
              "MySQL",
              "AI",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div
  className="order-1 lg:order-2 flex justify-center items-center"
  data-aos="fade-left"
>

          <GlassCard className="w-full max-w-[600px] h-[550px] flex items-center justify-center">

  <Lottie
    animationData={heroAnimation}
    loop={true}
    className="w-full h-full"
  />

</GlassCard>

        </div>

      </div>


    </div>    </section>
  </>
  );
};

export default Intro;