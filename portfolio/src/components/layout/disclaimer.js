import React from "react";

const UnderDevelopment = () => {
  return (
    <div className="bg-neutral-900 py-16 text-white text-center relative top-16">
      <div className="border-t-2 border-b-2 border-yellow-500 absolute top-0 left-0 right-0 z-10"></div>
      <h2 className="text-4xl font-bold mb-4">
        🚧 Portfolio Under Development 🚧
      </h2>
      <p className="text-lg">
        Thank you for visiting! I'm currently working on building my portfolio.
        Check back soon to see my latest projects and updates.
      </p>
      <div className="border-t-2 border-b-2 border-yellow-500 absolute bottom-0 left-0 right-0 z-10"></div>
    </div>
  );
};

export default UnderDevelopment;
