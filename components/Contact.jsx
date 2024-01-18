import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="max-w-[1250px]  mx-4 xl:mx-auto mt-10 md:mt-14">
      <div className=" pt-7 md:pt-14 pb-10 flex-col items-center justify-center flex md:flex-row md:justify-between">
        <Image
          src={"/Images/Navbrand.png"}
          height={85}
          width={85}
          className=" rounded-lg"
        />
        <div className="  pt-10 md:pt-0">
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/the_amitkumar_/">
              <Image
                className="hover:scale-110 transition-transform duration-500"
                src={"/Images/insta.png"}
                height={40}
                width={40}
              />
            </a>
            <a href="https://wa.link/oolxhy">
              <Image
                className="hover:scale-110 transition-transform duration-500"
                src={"/Images/watsp.png"}
                height={40}
                width={40}
              />
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-311025211/">
              <Image
                className="hover:scale-110 transition-transform duration-500"
                src={"/Images/linked.png"}
                height={40}
                width={40}
              />
            </a>
          </div>
        </div>
        <div className="pt-8 md:pt-0">
          <p className="text-orange-400 font-xl font-bold">
            ak256375@gmail.com
          </p>
          <p className="text-orange-400 font-xl font-bold">ranchi,jharkhand</p>
          <p className="text-orange-400 font-xl font-bold">ph-8757672975</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
