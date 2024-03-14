import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import portfolioImg from "@/public/portfolio.png";
import wctImg from "@/public/wct.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Sofware Development Engineer 1",
    location: "Bangalore, Karnataka",
    description:
      "I'm now a software developer with 2+ years experience in developing web application. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities as full-stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Software Development Engineer Graduate",
    location: "Bangakore, Karnataka",
    description:
      "I worked as a DevOps Engineer for 6 months, post that I got promoted to Sofware Development Engineer 1 recognizing my skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "PES University",
    location: "Bangalore, Karnataka",
    description:
      "I graduated from college with an engineering degree in Computer Science. I immediately joined as Software Developement Engineer Graduate in CSG Company",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "I have developed this portfolio website to showcase my skills, technologies and projects that I developed",
    tags: ["React", "TypeScript" , "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    title: "WCT",
    description:
      "I have developed this Web Application as a freelancing project, which is currently used by a transportation company in West Central region, Minnesota",
    tags: ["React", "TypeScript", "Next.js", "NodeJS", "MongoDB", "ExpressJS"],
    imageUrl: wctImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "MySQL",
  "Framer Motion",
  "Azure DevOps",
  "Data Structures & Algorithms",
  "C",
  "C++",
  "DevOps CI/CD"
] as const;