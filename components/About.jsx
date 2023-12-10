import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[1208px]  mx-4 xl:mx-auto mt-10 md:mt-14">
      <h1 className="anim-typewriter text-4xl md:text-6xl text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
        I bring idea&apos;s to web.
      </h1>
      <button
        className="w-36 p-1 sm:p-2 mt-5 rounded-md font-bold bg-gradient-to-r from-orange-400 to-red-600    text-base sm:text-lg"
        onClick={() => window.open("/resume.pdf")}
      >
        Resume
      </button>
      <div className="flex mt-10 justify-center" id="about">
        <h1 className="text-white font-bold text-3xl">About me</h1>
      </div>

      <div className="pt-10 flex flex-col-reverse sm:flex-row sm:justify-evenly items-center">
        <p className="text-xl sm:text-2xl text-yellow-100 sm:w-1/3 leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0">
          Hi my name is <span className="text-3xl sm:text-4xl">Amit Kumar</span>{" "}
          , A passionate Front-End Developer. I like to Design and Develop
          Beautiful User Friendly Websites. I am a quick learner and a team
          player, and i am confident that i can be a valuable asset to any web
          development team.
        </p>
        <div className="  ">
          <Image src={"/Images/profile.jpeg"} height={320} width={320} />
        </div>
      </div>
    </div>
  );
};

export default About;
