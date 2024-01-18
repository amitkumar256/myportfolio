import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url('/images/pxfuel.jpg')" }}
    >
      <div className="max-w-[1250px] mx-4  xl:mx-auto pt-10 pb-5 md:pt-5">
        <div className="pt-10  flex flex-col-reverse sm:flex-row sm:justify-between items-center   ">
          <div className="sm:w-3/5">
            <p className="text-xl sm:text-2xl text-yellow-100  leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0">
              Hi my name is{" "}
              <span className="text-3xl sm:text-4xl">Amit Kumar</span> , A
              passionate Front-End Developer.I specialize in bringing digital
              ideas to life through elegant and user-friendly interfaces. With a
              strong foundation in HTML, CSS, and the power of Next.js.
            </p>
            <p className="text-xl sm:text-2xl text-yellow-100  leading-8 sm:leading-10 sm:tracking-wide pt-4 ">
              My love for clean and efficient code is matched only by my
              dedication to crafting visually appealing websites. Whether it's
              designing an intuitive user interface or diving into the
              intricacies of frontend development.
            </p>
          </div>
          <div className=" bg-gradient-to-r from-orange-400 to-red-600 hover:scale-105 transition-transform duration-500">
            <Image
              className="p-1"
              src={"/Images/profile.jpeg"}
              height={320}
              width={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
