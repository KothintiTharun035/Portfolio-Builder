import React from "react";

const FloatingBlobs = () => {
  return (
    <>
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"></div>
    </>
  );
};

export default FloatingBlobs;