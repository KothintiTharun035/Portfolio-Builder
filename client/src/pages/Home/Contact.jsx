import React from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import SectionTitle from "../../components/ui/SectionTitle";
import GlassCard from "../../components/ui/GlassCard";
import GradientButton from "../../components/ui/GradientButton";
import SocialIcons from "../../components/ui/SocialIcons";

import contactAnimation from "../../assets/contact-mail.json";

const Contact = () => {
  const { portfolioData } = useSelector((state) => state.root);

  const contact = portfolioData?.contacts || {};

  return (
    <><section
  id="contact"
  className="relative py-28 bg-[#0B1120]"
  data-aos="zoom-in-up"
>
  <SectionTitle title="Get In Touch" />

  <div className="grid grid-cols-2 lg:grid-cols-1 gap-16 items-center mt-16">

    {/* LEFT SIDE */}

    <GlassCard className="p-10">

      <span className="inline-block mb-5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm tracking-widest">
        AVAILABLE FOR WORK
      </span>

      <h2 className="text-4xl font-bold text-white mb-8">
        Let's Build Something Amazing 🚀
      </h2>

      <p className="text-gray-400 leading-8 mb-10">
        Feel free to contact me for internships, full-time opportunities,
        freelance work, or collaboration on exciting projects.
      </p>

      <div className="mb-10">
        <GradientButton href={contact.resume}>
          Download Resume
        </GradientButton>
      </div>

      <div className="flex justify-center mt-10">

  <Lottie
    animationData={contactAnimation}
    loop
    className="w-[420px] lg:w-[320px]"
  />

</div>

<div className="flex justify-center gap-8 mt-8 text-4xl">

  <a
    href={contact.github}
    target="_blank"
    rel="noreferrer"
    className="text-white hover:scale-110 transition"
  >
    <FaGithub />
  </a>

  <a
    href={contact.linkedIn}
    target="_blank"
    rel="noreferrer"
    className="text-blue-500 hover:text-blue-400 hover:scale-110 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href={contact.instagram}
    target="_blank"
    rel="noreferrer"
    className="text-pink-500 hover:text-pink-400 hover:scale-110 transition"
  >
    <FaInstagram />
  </a>

  <a
    href={`mailto:${contact.email}`}
    className="text-cyan-400 hover:text-cyan-300 hover:scale-110 transition"
  >
    <FaEnvelope />
  </a>

</div>      </GlassCard>


    </div>

  </section>
    </>
  );
};

export default Contact;