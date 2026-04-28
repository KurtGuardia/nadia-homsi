"use client";

import { useState } from "react";

const ModuleCard = ({ title, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-[400px] w-full min-w-[300px] perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg flex flex-col justify-between p-6 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 rounded-2xl bg-[var(--secondary-color)] opacity-50"></div>

          <h3 className="relative z-10 text-2xl font-semibold text-center text-white tracking-wide bg-[#453c25b3] backdrop-blur-sm p-4 rounded-lg">
            {title}
          </h3>

          <button
            onClick={toggleFlip}
            className="relative z-10 mt-4 bg-[var(--secondary-color)] text-[var(--secondary-color-foreground)] px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Ver más
          </button>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <p className="text-base text-[var(--text-dark)] text-center overflow-y-auto flex-grow flex items-center">
            {description}
          </p>

          <button
            onClick={toggleFlip}
            className="mt-4 bg-[var(--secondary-color)] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
