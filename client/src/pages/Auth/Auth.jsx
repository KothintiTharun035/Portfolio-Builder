import React, { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import FooterDashboard from "../../components/FooterDashboard";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login-background.json";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">

        {/* Full Screen Background Animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Lottie
  animationData={loginAnimation}
  loop
  className="absolute inset-0 w-full h-full scale-125"
/>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex lg:flex-row flex-col min-h-screen items-center">

          {/* LEFT SIDE */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center text-white p-10 relative">

            <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl -top-20 -left-20"></div>

            <div className="absolute w-80 h-80 rounded-full bg-purple-500/10 blur-3xl bottom-0 right-0"></div>

            <div className="relative z-10 text-center">

              <h1 className="text-6xl font-extrabold mb-6">
                Portfolio Builder
              </h1>

              <p className="text-xl max-w-lg leading-9 text-gray-200">
                Create stunning portfolios, impress recruiters and publish your
                work with one click.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-1/2 flex justify-end items-center pr-8 relative">

            <div className="relative z-10 bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

              <h2 className="text-3xl font-bold text-center">
                Portfolio Admin
              </h2>

              <p className="text-gray-500 text-center mt-2">
                {activeTab === "1"
                  ? "Login to manage your portfolio"
                  : "Create your account"}
              </p>

              {/* Toggle */}
              <div className="flex mt-8 bg-slate-200 rounded-xl p-1">

                <button
                  onClick={() => setActiveTab("1")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition ${
                    activeTab === "1"
                      ? "bg-indigo-600 text-white shadow"
                      : "text-gray-600"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setActiveTab("2")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition ${
                    activeTab === "2"
                      ? "bg-purple-600 text-white shadow"
                      : "text-gray-600"
                  }`}
                >
                  Signup
                </button>

              </div>

              <div className="mt-8">
                {activeTab === "1" ? <Login /> : <Signup />}
              </div>

            </div>

          </div>

        </div>

      </div>

      <FooterDashboard />
    </>
  );
};

export default Auth;