import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url('/images/pxfuel.jpg')" }}
    >
      <div className="max-w-[1250px]  mx-4 xl:mx-auto pt-10 md:pt-14">
        <h1 className="anim-typewriter font-serif text-4xl md:text-6xl text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
          I bring idea&apos;s to web.
        </h1>
        <button
          className="w-32 p-1 sm:p-2 mt-5 rounded-[100px] hover:scale-110 font-semibold font-serif bg-gradient-to-r from-orange-400 to-red-600    text-lg sm:text-2xl transition-transform duration-500"
          onClick={() => window.open("/resume.pdf")}
        >
          Resume
        </button>
        <div className="flex mt-10 justify-center" id="about">
          <h1 className="text-white font-bold font-serif text-3xl md:text-5xl">
            About me
          </h1>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
