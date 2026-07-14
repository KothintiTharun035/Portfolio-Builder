import React, { useState } from 'react';
import FooterLanding from "../../components/FooterLanding";
import Lottie from "lottie-react";
import heroAnimation from "../../animations/hero.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const scrollToSection = (id) => {
    const navbarHeight = 90;
    const element = document.getElementById(id);
    if (element) {
        const offsetPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

const MainPage = () => {

    const [state = { clicked: false }, setState] = useState();
    const handleClick = () => {
        setState({ clicked: !state.clicked })
    }


    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
}, []);

    return (
        <>
            <div>
                {/* Header */}
                <header >
                    <nav className="Navbar shadow-a fixed w-[100%] z-10">
                        <h1 className="text-[1.7rem] font-bold text-white sm:text-[1rem] logo">Portfolio Builder</h1>

                        <div className="menu-icon" onClick={handleClick}>
                            <i className={state.clicked ? "bx bx-menu-alt-right" : "bx bx-menu"}></i>
                        </div>

                        <div className={`${state.clicked ? 'menu active' : 'menu'}`}>
                            <ul className="flex gap-6 text-white text-[1.2rem] nav-links sm:text-[1rem] sm:gap-3">
                                <li className='cursor-pointer' onClick={() => scrollToSection('features')}>Features</li>
                                <li className='cursor-pointer' onClick={() => scrollToSection('how-it-works')}>How It Works</li>
                                <li className='cursor-pointer' onClick={() => scrollToSection('get-started')}>Get Started</li>
                                <li className='cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
                            </ul>
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                    <section className="bg-[#0F172A] min-h-screen flex items-center justify-center pt-24 overflow-hidden">

                <div className="max-w-7xl mx-auto w-full px-8 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}

        <div  className="w-1/2"  data-aos="fade-right">

            <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
                Build Your Digital Identity
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white">

                Build Your

                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">

                    Professional Portfolio

                </span>

                in Minutes.

            </h1>

            <p className="mt-8 text-gray-300 text-xl leading-9 sm:text-lg">

                Create stunning portfolio websites with beautiful templates,
                responsive design, project showcases, and one-click publishing.

            </p>

            <div className="mt-10 flex gap-6 sm:flex-col">

                <a
  href="/auth"
  className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-1xl shadow-xl hover:scale-[1.02] transition"
>
  🚀 Get Started
</a>

                <button
                    onClick={() => scrollToSection("features")}
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl transition duration-300"
                >
                    Explore Features
                </button>

            </div>

            <div className="mt-10 flex gap-10 text-gray-400">

                <div>

                    <h2 className="text-3xl font-bold text-white">500+</h2>

                    <p>Portfolios Created</p>

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">100%</h2>

                    <p>Responsive</p>

                </div>

                <div>

                    <h2 className="text-3xl font-bold text-white">24/7</h2>

                    <p>Available</p>

                </div>

            </div>

        </div>

        {/* Right Side */}

        <div className="w-1/2" 
        data-aos="fade-left">

            <Lottie
                animationData={heroAnimation}
                loop={true}
                className="w-full max-w-[600px]"
            />

        </div>

    </div>

</section>

                {/* Features Section */}

<section
  id="features"
  className="bg-slate-50 py-24"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-slate-900">
        Powerful Features
      </h2>

      <p className="text-gray-600 mt-4 text-lg">
        Everything you need to build a beautiful portfolio website.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">🎨</div>
        <h3 className="text-2xl font-bold mb-3">
          Beautiful Templates
        </h3>
        <p className="text-gray-600">
          Choose from modern portfolio templates designed for developers and students.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">📱</div>
        <h3 className="text-2xl font-bold mb-3">
          Responsive Design
        </h3>
        <p className="text-gray-600">
          Your portfolio looks perfect on desktop, tablet, and mobile devices.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">🚀</div>
        <h3 className="text-2xl font-bold mb-3">
          One Click Publish
        </h3>
        <p className="text-gray-600">
          Publish your portfolio instantly and share it with recruiters.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">💼</div>
        <h3 className="text-2xl font-bold mb-3">
          Project Showcase
        </h3>
        <p className="text-gray-600">
          Display projects with images, GitHub links, live demos, and descriptions.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">🔒</div>
        <h3 className="text-2xl font-bold mb-3">
          Secure Login
        </h3>
        <p className="text-gray-600">
          JWT authentication keeps your portfolio safe and secure.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="text-5xl mb-5">⚡</div>
        <h3 className="text-2xl font-bold mb-3">
          Fast Performance
        </h3>
        <p className="text-gray-600">
          Optimized React application with smooth navigation and blazing-fast loading.
        </p>
      </div>

    </div>

  </div>
</section>


                {/* How It Works */}

<section id="how-it-works" className="bg-[#0F172A] py-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-5xl font-bold text-white">
        How It Works
      </h2>

      <p className="text-gray-400 mt-4 text-lg">
        Build your portfolio in just three simple steps.
      </p>

    </div>

    <div className="grid lg:grid-cols-3 gap-10">

      <div className="bg-[#1E293B] rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 flex items-center justify-center text-3xl text-white font-bold">
          1
        </div>

        <h3 className="text-white text-2xl font-bold mt-6">
          Create Account
        </h3>

        <p className="text-gray-400 mt-4">
          Register securely using your email and password.
        </p>

      </div>

      <div className="bg-[#1E293B] rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-purple-600 flex items-center justify-center text-3xl text-white font-bold">
          2
        </div>

        <h3 className="text-white text-2xl font-bold mt-6">
          Build Portfolio
        </h3>

        <p className="text-gray-400 mt-4">
          Add your education, projects, skills, certificates and achievements.
        </p>

      </div>

      <div className="bg-[#1E293B] rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300">

        <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-3xl text-white font-bold">
          3
        </div>

        <h3 className="text-white text-2xl font-bold mt-6">
          Publish & Share
        </h3>

        <p className="text-gray-400 mt-4">
          Generate your portfolio instantly and share it with recruiters.
        </p>

      </div>

    </div>

  </div>

</section>

                {/* CTA Section */}

<section
  id="get-started"
  className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500"
>

  <div className="max-w-6xl mx-auto text-center px-6">

    <h2 className="text-5xl font-bold text-white">

      Ready to Build Your Dream Portfolio?

    </h2>

    <p className="text-xl text-indigo-100 mt-6 max-w-3xl mx-auto">

      Join hundreds of students and developers who have already created
      stunning portfolios using Portfolio Builder.

    </p>

    <a
      href="/auth"
      className="inline-block mt-10 bg-white text-indigo-700 font-bold px-10 py-4 rounded-full hover:scale-105 transition duration-300 shadow-2xl"
    >

      🚀 Start Building Now

    </a>

  </div>

</section>

                <FooterLanding />
            </div>
        </>
    );
}

export default MainPage;
