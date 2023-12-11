import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[1280px] pb-10  mx-4 xl:mx-auto mt-10 md:mt-14">
      <div className="flex mt-10 justify-center " id="skill">
        <h1 className="text-white font-bold text-3xl">Skills</h1>
      </div>
      <div className="pt-20 flex flex-col gap-20">
        <div className="first-row flex justify-center sm:gap-32 gap-20 flex-wrap">
          <div className="html flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/html.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              HTML
            </p>
          </div>
          <div className="css flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/css.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              CSS
            </p>
          </div>
          <div className="javascript flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/javascript.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              Javascript
            </p>
          </div>
          <div className="tailwind flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/tail.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              Tailwind
            </p>
          </div>
        </div>

        <div className="second-row flex justify-center sm:gap-32 gap-20 flex-wrap">
          <div className="Next flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/next.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              Next.Js
            </p>
          </div>
          <div className="java flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/java-logo-1.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              Java
            </p>
          </div>
          <div className="c flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/c.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              C Language
            </p>
          </div>
          <div className="dbms flex flex-col items-center gap-2 border-2 p-5  border-orange-400 rounded-tl-[20px] rounded-br-[20px]">
            <Image src={"/Images/dbms.png"} height={120} width={120} />
            <p className="text-xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600  bg-clip-text">
              DBMS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
