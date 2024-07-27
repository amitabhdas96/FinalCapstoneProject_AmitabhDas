import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
            Amitabh has over 15+ years of IT industry experience across multiple countries and in various roles for major clients in the Finance, Insurance & Government sectors. 
            </p>
            <p>
            He has experience in technical solution architecture, integration design, security protocols, data privacy regulations, and leading multiple development teams. He is skilled in Pega technologies, has PCLSA certification, and has hands-on experience with the latest versions. 
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
        He has been actively involved in Pega COE activities, Pega Re-Sales activities, cross-functional team collaboration, guiding clients, providing direction while requirement gathering, coaching teams, and overall growth of Pega Practice.
        </p>
      </div>
    </div>
  );
};

export default About;
