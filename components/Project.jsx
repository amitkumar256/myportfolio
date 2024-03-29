import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="max-w-[1250px] pb-10  mx-4 xl:mx-auto mt-10 md:mt-14">
      <div className="flex mt-10 justify-center" id="project">
        <h1 className="pb-2 font-serif px-2 shine-text text-white font-bold text-3xl md:text-5xl">
          Projects
        </h1>
      </div>{" "}
      <div className="pt-10">
        <div className="pt-10 flex-col-reverse lg:flex-row flex sm:justify-normal sm:items-start justify-center items-center lg:justify-between lg:items-center">
          <div className="lg:w-3/5 ">
            <h1 className=" text-2xl sm:text-3xl text-white font-bold pt-4 sm:pt-0 pb-4">
              Loop
            </h1>
            <p className="text-xl  sm:text-2xl text-yellow-100 leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0">
              This E-commerce website allows users to securely save their
              contact details and purchase NFC-enabled cards. I played a key
              role in designing the captivating landing page and enhancing
              various front-end elements to ensure an engaging and seamless user
              experience.
            </p>
            <div className="flex gap-12">
              <button
                className="hover:scale-105
                transition-transform
                duration-500  w-32 p-1  mt-5 rounded-md font-bold bg-gradient-to-r from-orange-400 to-red-600    text-base sm:text-lg"
                onClick={() => window.open("https://formpr-chi.vercel.app/")}
              >
                GO Live
              </button>
              <button
                className="hover:scale-105
                transition-transform
                duration-500  w-32 p-1  mr-3 mt-5 rounded-md font-bold bg-gradient-to-r from-orange-400 to-red-600    text-base sm:text-lg"
                onClick={() =>
                  window.open("https://github.com/amitkumar256/formpr")
                }
              >
                Source Code
              </button>
            </div>
          </div>

          <Image
            className="p-1 bg-gradient-to-r from-orange-400 to-red-600 "
            src={"/Images/loop.png"}
            height={450}
            width={450}
          />
        </div>
        <div className="pt-10 flex-col-reverse lg:flex-row flex sm:justify-normal sm:items-start justify-center items-center lg:justify-between lg:items-center">
          <div className="lg:w-3/5 ">
            <h1 className="text-2xl sm:text-3xl text-white font-bold pt-4 sm:pt-0 pb-4">
              work-management app
            </h1>
            <p className="text-xl  sm:text-2xl text-yellow-100 leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0">
              I developed a user-friendly Work Management System where
              individuals can create profiles, effectively save, and delete
              tasks. The system prioritizes simplicity and efficiency, offering
              users a seamless experience in organizing their work.
            </p>
            <div className="flex gap-12">
              <button
                className="hover:scale-105
                transition-transform
                duration-500  w-32 p-1  mt-5 rounded-md font-bold bg-gradient-to-r from-orange-400 to-red-600    text-base sm:text-lg"
                onClick={() =>
                  window.open("https://work-management-nu.vercel.app/login")
                }
              >
                GO Live
              </button>
              <button
                className="hover:scale-105
                transition-transform
                duration-500  w-32 p-1  mt-5 rounded-md font-bold bg-gradient-to-r from-orange-400 to-red-600    text-base sm:text-lg"
                onClick={() =>
                  window.open("https://github.com/amitkumar256/work-management")
                }
              >
                Source Code
              </button>
            </div>
          </div>
          <Image
            className="p-1 bg-gradient-to-r from-orange-400 to-red-600"
            src={"/Images/workmanager.png"}
            height={450}
            width={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
