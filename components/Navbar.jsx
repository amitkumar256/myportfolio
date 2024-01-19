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
    <div
      className={`pt-1 pb-1 sm:pt-3 sm:pb-3   text-white  bg-black max-w-[1250px] xl:mx-auto flex items-center justify-between mx-4 font-bold text-base md:text-lg `}
    >
      <div className=" cursor-pointer ">
        <Image
          src={"/Images/Navbrand.png"}
          height={60}
          width={60}
          className="hidden sm:block rounded-lg"
        />
        <Image
          src={"/Images/Navbrand.png"}
          height={50}
          width={50}
          className="sm:hidden rounded-lg"
        />
      </div>
      <div className="hidden sm:block">
        <div className="flex  space-x-4 cursor-pointer text-xl  ">
          <div className=" hover:scale-110 transition-transform duration-500 ">
            <a href="#about">About</a>
          </div>
          <div className="hover:scale-110 transition-transform duration-500 ">
            <a href="#skill">Skills</a>
          </div>
          <div className=" hover:scale-110 transition-transform duration-500 ">
            <a href="#project">Projects</a>
          </div>
          <div className="hover:scale-110 transition-transform duration-500 ">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <nav className={`sm:hidden    `}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="mobileNavbar  relative z-[100]  "
        >
          <div className={`h-3.5 w-5 `}>
            <div
              className={` h-0.5   w-5 origin-top-left ease-in duration-200 rounded-md ${
                isOpen
                  ? "rotate-45 translate-x-px bg-white"
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
                  ? "-rotate-45 -translate-x-0.5 bg-white"
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
              className="fixed ease-in duration-800  w-full h-screen top-0 right-0 bg-gradient-to-r from-orange-400 to-red-600  py-1 px-1 shadow-lg bg-black text-white z-50"
            >
              <div className=" w-full h-full bg-black">
                <div className="flex flex-col h-full  content-between">
                  <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                    <div className="nav-link-container  py-2  border-b-2 border-white ">
                      <a href="#about" className="nav-link font-serif ">
                        About
                      </a>
                    </div>
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container py-4  border-b-2 border-white"
                    >
                      <a href="#skill" className="nav-link font-serif">
                        Skills
                      </a>
                    </div>

                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container py-4  border-b-2 border-white "
                    >
                      <a href="#project" className="nav-link font-serif">
                        Work
                      </a>
                    </div>
                    <div
                      onClick={() => setIsOpen(!isOpen)}
                      className="nav-link-container  border-b-2 border-white py-4   "
                    >
                      <a href="#contact" className="nav-link font-serif">
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
