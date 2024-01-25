import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// import { useSpring, animated } from "react-spring";

const About = () => {
  // const fadeIn = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 3000 }, // Adjust the duration as needed
  // });

  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: "url('/Images/fotr.jpg')" }}
    >
      <div className="max-w-[1250px] mx-4  xl:mx-auto pt-10 pb-5 md:pt-5">
        <h1 className="anim-typewriter font-serif text-3xl md:text-6xl text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
          I bring idea&apos;s to web
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
        <div className="pt-10  flex flex-col-reverse sm:flex-row sm:justify-between items-center   ">
          <div className="sm:w-3/5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-xl font-serif sm:text-2xl text-yellow-100  leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0"
            >
              Hi my name is{" "}
              <span className="text-3xl sm:text-4xl">Amit Kumar</span> , A
              passionate Front-End Developer.I specialize in bringing digital
              ideas to life through elegant and user-friendly interfaces. With a
              strong foundation in HTML, CSS, and the power of Next.js.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-xl font-serif sm:text-2xl text-yellow-100  leading-8 sm:leading-10 sm:tracking-wide pt-4 "
            >
              My love for clean and efficient code is matched only by my
              dedication to crafting visually appealing websites. Whether
              it&apos;s designing an intuitive user interface or diving into the
              intricacies of frontend development.
            </motion.p>
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
