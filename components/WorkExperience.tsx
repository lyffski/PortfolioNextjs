import Link from "next/link";
import React from "react";
import { Experience } from "../typings";
import ExperieanceCard from "./ExperieanceCard";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-5 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-center snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] sm:snap-cneter">
        {experiences.map((experience) => (
  
          <ExperieanceCard key={experience._id}
          // @ts-ignore: Unreachable code error
          experience={experience}/>
       
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
