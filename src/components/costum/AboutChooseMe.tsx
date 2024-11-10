"use client"

import { SkillsHover } from "../ui/SkillsHover"
import React from 'react'


const AboutChooseMe = () => {
  return (
    <main>
          <div className="max-w-5xl  mx-auto px-8">
      <h1 className="m-4 pt-16 text-sky-900 font-extrabold text-center text-5xl">WHY TO CHOOSE ME</h1>
      <SkillsHover items={projects} />
    </div>
    </main>
  )
}
export const projects = [
    {
      title: "Expertise in Modern Web Technologies",
      description:
        "With advanced skills, I bring a deep technical understanding of the tools required for high-quality, responsive websites. My work combines performance and aesthetics to create fast, beautiful, and modern user experiences.",
    },
    {
      title: "User-Centered Design Approach",
      description:
        "I prioritize user experience at every step of the development process. My designs are intuitive, accessible, and tailored to meet user needs, which helps increase engagement and satisfaction for client audiences.",
    },
    {
      title: "Commitment to Client Success ",
      description:
        "I focus on building strong client relationships by ensuring clear communication, understanding client goals, and delivering on time. My dedication to client success means I go beyond meeting requirements to create solutions that add real value to their business.",
    },
    
  ];


export default AboutChooseMe
