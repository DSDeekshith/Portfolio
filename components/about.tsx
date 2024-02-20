"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] 
    text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating as a{" "}
        <span className="font-medium">Computer Science Engineer</span> from{" "}
        <span className="font-medium">PES Uiversity</span>, I have joined{" "}
        <span className="italic font-medium">CSG International</span> as a{" "}
        <span className="font-medium">Software Development Engineer Grad</span>,
        where I worked on CSG's product Ascendon. I have been promoted to{" "}
        <span className="font-medium">Software Development Engineer 1</span>{" "}
        recognizing my abilities, skills and contribution to the team.
      </p>
      <p>
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, TypeScript, Node.js and MongoDB.
        </span>{" "}
        I am always looking to learn new technologies. I am currently looking
        for <span className="font-medium">fulltime</span> position as{" "}
        <span className="font-medium">Software Developer</span>
      </p>
    </motion.section>
  );
}
