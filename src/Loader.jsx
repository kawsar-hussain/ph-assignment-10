import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="primary-text">Loading...</p>
      <span className="loading loading-spinner primary-text"></span>
    </div>
  );
};

export default Loader;
