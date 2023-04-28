import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex iteams-start p-5 justify-between max-w-7x1 mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}

        <motion.div className="text-xl pl-3">
          <a href={"https://lyffski.netlify.app/"} target="_blank"><p className="text-yellow-500">Blog</p></a>
        </motion.div>
      </motion.div>

      <Link href="#contactme">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer mr-10 hover:"
        >
          {/* {contact info} */}
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="upppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
