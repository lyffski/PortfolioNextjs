import React from "react";
import { motion } from "framer-motion";
import { Experience as I}  from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: I;
  children?: JSX.Element|JSX.Element[];
};


const ExperieanceCard = ({experience}: Props) => {
  return (
    
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        // @ts-ignore: Unreachable code error
        src={urlFor(experience?.companyImage).url()}
        alt="icon of company"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2" key={experience._id}>
          {
          // @ts-ignore: Unreachable code error
          experience.technologies.map((technology)=>(
            <img key={experience._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt="icon of used tech APL"
            />
          ))}
       
        </div>
        <div key={experience._id} className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} {/*  const dated = new Date(experience.dateEnded).toDateString */}
          
        </div>
      </div>

      <ul className="list-disc space-y-4 ml-5 text-lg max-h-56 w-7/8 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80">
        {
          // @ts-ignore: Unreachable code error
          experience.points.map((point,i) => (
            <li key={i}>{point}</li>
          ))
        }
      </ul>
    </article>

  );
};

export default ExperieanceCard;
