import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="h-14   text-white  bg-black max-w-[1208px] mx-2 sm:mx-4 xl:mx-auto flex items-center justify-between px-8 font-bold text-base md:text-lg ">
      <div className="bg-white cursor-pointer">
        <Image
          src={"/Images/Navbrand.png"}
          height={45}
          width={45}
          className=" rounded-lg"
        />
      </div>
      <div className="hidden sm:block">
        <div className="flex  space-x-4 cursor-pointer  ">
          <div className=" hover:scale-105 ">
            <a href="#about">About</a>
          </div>
          <div className=" hover:scale-105 ">
            <a href="#skill">Skills</a>
          </div>
          <div className=" hover:scale-105 ">
            <a href="#project">Projects</a>
          </div>
          <div className=" hover:scale-105 ">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <nav className="sm:hidden  flex">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="mobileNavbar  relative z-[100]  "
        >
          <div className=" h-3.5 w-5">
            <div
              className={` h-0.5   w-5 origin-top-left ease-in duration-200 rounded-md ${
                isOpen
                  ? "rotate-45 translate-x-px bg-black"
                  : "rotate-0 bg-white"
              }`}
            />
            <div
              className={` h-0.5 w-5 bg-white ease-in duration-200 rounded-md mt-1 ${
                isOpen ? "hidden" : "block"
              }`}
            />
            <div
              className={` h-0.5 w-5  ease-in duration-200  rounded-md mt-1  ${
                isOpen
                  ? "-rotate-45 -translate-x-0.5 bg-black"
                  : "rotate-0 bg-white"
              }`}
            />
          </div>
        </button>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              exit="exit"
              viewport={{ once: false }}
              className="fixed ease-in duration-800  w-full h-screen top-0 right-0 bg-gradient-to-br from-[#96FFAD] to-[#96FFAD] py-1 px-1 shadow-lg bg-white text-black z-50"
            >
              <div className=" w-full h-full bg-white">
                <div className="flex flex-col h-full  content-between">
                  <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                    <div className="nav-link-container  py-2  border-b-2 border-white ">
                      <a href="#about" className="nav-link ">
                        About
                      </a>
                    </div>
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container py-4  border-b-2 border-white"
                    >
                      <a href="#skill" className="nav-link ">
                        Skills
                      </a>
                    </div>

                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container py-4  border-b-2 border-white "
                    >
                      <a href="#project" className="nav-link ">
                        Work
                      </a>
                    </div>
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container  border-b-2 border-white py-4   "
                    >
                      <a href="#contact" className="nav-link ">
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
