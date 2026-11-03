import React from "react";
import BG from "../../../assets/BG.png";

const CtaSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-16 pb-20">
      <div className="flex flex-col relative w-full bg-[#0E4989] rounded-2xl overflow-hidden min-h-[350px] shadow-lg">
        <div className="absolute top-0 right-0 w-[45%] h-full z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${BG})`,
              clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>

        <div className="absolute top-8 left-10 z-0">
          <svg
            width="70"
            height="50"
            viewBox="0 0 70 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="25"
              cy="25"
              r="16"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="45"
              cy="25"
              r="16"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="absolute bottom-10 left-[35%] z-0">
          <svg
            width="50"
            height="25"
            viewBox="0 0 50 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 20 L12 8 L22 18 L32 5 L42 15"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="absolute top-12 right-12 z-0">
          <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="5"
              y1="22"
              x2="12"
              y2="28"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="22"
              y1="5"
              x2="18"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="40"
              y1="18"
              x2="32"
              y2="20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center justify-center text-center w-full h-full min-h-[350px] z-10 px-8 py-12">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 tracking-wide drop-shadow-md">
            Let's Build Smarter Solutions Together
          </h2>
          <p className="text-white text-base md:text-lg mb-10 max-w-3xl font-medium drop-shadow-sm">
            Connecting maritime expertise with digital innovation to create more
            efficient business operations.
          </p>
          <button className="flex items-center justify-center border border-white/60 bg-transparent text-white font-medium py-3 px-10 rounded-full hover:bg-white hover:text-[#0E4989] transition-colors text-sm">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
