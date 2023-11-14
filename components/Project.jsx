import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div className="max-w-[1280px] pb-10  mx-4 xl:mx-auto mt-10 md:mt-14">
      <div className="flex mt-10 justify-center" id="project">
        <h1 className="text-white font-bold text-3xl">Projects</h1>
      </div>{" "}
      <div className="pt-10">
        <div className="pt-10 flex-col-reverse sm:flex-row flex justify-between items-center">
          <div className="sm:w-2/5 ">
            <h1 className="text-2xl sm:text-3xl text-white font-bold pt-4 sm:pt-0 pb-4">
              Loop
            </h1>
            <p className="text-xl  sm:text-2xl text-yellow-100 leading-8 sm:leading-10 sm:tracking-wide pt-4 sm:pt-0">
              This is the E-commerce website , in which user can save their
              contact details and buy their NFC build cards,in this project my
              contribution is i design the landing page and some other front-end
              parts.
            </p>
          </div>

          <Image src={"/Images/loop.png"} height={450} width={450} />
        </div>
      </div>
    </div>
  );
};

export default Project;
