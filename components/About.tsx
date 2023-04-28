import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({pageInfo}: Props) {
  return (
    
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        alt="another pic of me"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-5 px-0 md:px-10 sm:text-6xl">
        <h4>Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background</h4>
        <p className="text-base"> {pageInfo?.backgroundInformation}</p>
      </div>
      <div className="button">
            <a href="./Curriculum vitae - Kacper Sobczak.pdf" download rel="noopener noreferrer" target="_blank"> <button className="bg-[#f7ab0a]/50 p-1 rounded">Download CV</button></a>
        </div>
    </div>

  
     
      
  );
};
