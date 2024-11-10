"use client"

import { SkillsHover } from "../ui/SkillsHover";

export function MyExpertiesHome() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="m-4 pt-16 text-sky-900 font-extrabold text-center text-5xl">SKILLS</h1>
      <SkillsHover items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "HTML",
    description:
      "Hypertext Markup Language (HTML), is a coding language used to structure and display content on a web page",
    link: "https://www.w3schools.com/html/html_intro.asp",
  },
  {
    title: "Next.Js",
    description:
      "Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.",
    link: "https://nextjs.org/",
  },
  {
    title: "TYPESCRIPT ",
    description:
      "TypeScript programming language that adds extra functionality to JavaScript. TypeScript adds type definitions to JavaScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "JAVASCRIPT",
    description:
      "JavaScript (JS) is a programming language that developers use to create interactive web pages .JavaScript is a core technology of the World Wide Web that adds interactivity to static web pages",
      link: "https://www.w3schools.com/whatis/whatis_js.asp",
    },
  {
    title: "BOOTSTRAP CSS",
    description:
      "Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version of Bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    title: "TAILWIND CSS",
    description:
      "Tailwind CSS is used to speed up the development process by writing less code. It comes with a design system that helps maintain consistency across various design requirements ",
    link: "https://tailwindcss.com/",
  },
];
