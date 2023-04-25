import React, { useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};



const Skills = ({ skills }: Props) => {
  const [cath, setCath] = useState("webDev");
  const a = skills?.filter(skill => skill.cath == cath)
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-xl">
        Skills
      </h3>

      <h3 className="absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm">
        {" "}
        Hover over a skill for current Proficiency
      </h3>
      <h4 className="absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm">
        <span className="underline decoration-[#f7ab0a]/50 hover:text-[#f7ab0a]/50 cursor-pointer" onClick={()=>{setCath("webDev")}}>
        WebDev
        </span>
        {" | "}
        {/* <span className="underline decoration-[#f7ab0a]/50 hover:text-[#f7ab0a]/50 cursor-pointer"  onClick={()=>{setCath("statsitcs")}}>
        Statsitcs
        </span>
        {" | "} */}
        <span className="underline decoration-[#f7ab0a]/50 hover:text-[#f7ab0a]/50 cursor-pointer"  onClick={()=>{setCath("ml")}}>
        Machine Learning
        </span>
      </h4>
    
      <div className="absolute top-40 grid grid-cols-4 gap-5" >
        {/* {skills?.slice(0, skills.length/2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))} */}

        {a?.slice(0, a.length/2).map((skill) => (
          <Skill key={skill._id} skill={skill}/>
        ))}
        
        {a?.slice(a.length/2, a.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionalLeft/>
        ))}
      </div>
    </motion.div>
  );
  
};

export default Skills;
