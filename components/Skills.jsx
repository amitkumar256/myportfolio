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
          <div className="html flex">
            <Image src={"/Images/html.png"} height={120} width={120} />
          </div>
          <div className="css flex">
            <Image src={"/Images/css.png"} height={120} width={120} />
          </div>
          <div className="javascript flex">
            <Image src={"/Images/javascript.png"} height={120} width={120} />
          </div>
          <div className="tailwind flex">
            <Image src={"/Images/tail.jpg"} height={120} width={120} />
          </div>
        </div>

        <div className="second-row flex justify-center sm:gap-32 gap-20 flex-wrap">
          <div className="Next flex">
            <Image src={"/Images/next.png"} height={120} width={120} />
          </div>
          <div className="java flex">
            <Image src={"/Images/javalogo.jpg"} height={120} width={120} />
          </div>
          <div className="c flex">
            <Image src={"/Images/c.cms"} height={120} width={120} />
          </div>
          <div className="dbms flex">
            <Image src={"/Images/dbms.png"} height={120} width={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
