import React from "react";
import { FocusCards } from "../ui/FocusCards";

export default function ProjectsPage() {
  const cards = [
    {
      title: "DWELL-House Website",
      description: "DWELL-house is a sleek, responsive platform showcasing residential architecture projects. Built with Next.js and Tailwind CSS, it offers an intuitive layout, highlighting project details and providing a seamless, visually engaging browsing experience.",
      githubLink: "https://github.com/Anousha1846/DWEll-house-website",
      liveLink: "https://anousha1846.github.io/DWEll-house-website",
    },
    {
      title: "ElectoMart",
      description: "Electromart is a sleek eCommerce platform built with Next.js, TypeScript, and custom CSS, offering a responsive, intuitive interface with dynamic product listings, seamless navigation, and optimized shopping experience for electronics.",
      githubLink: "https://github.com/Anousha1846/ElectroMart",
      liveLink: "https://electro-mart-topaz.vercel.app/",
    },
    
    {
      title: "Simple Static Resume Builder",
      description: "Simple Static Resume Builder is a user-friendly tool that enables users to create elegant resumes effortlessly. It features customizable templates, easy input forms, and a clean layout for professional presentation.",
      githubLink: "https://github.com/Anousha1846/Simple-resume-builder-1",
      liveLink: "https://anousha1846.github.io/Simple-resume-builder-1/",
    },
    {
        title: "Shopping 2.0",
        description: "This eCommerce website offers a seamless shopping experience with an intuitive add-to-cart functionality. Users can easily browse products, manage their cart, and enjoy secure checkout for a hassle-free purchase process.",
        githubLink: "https://github.com/Anousha1846/Hackathon-1.2",
        liveLink: "https://anousha1846.github.io/Hackathon-1.2/",
      },
    {
      title: "Pokemon Clone",
      description: "This Pokémon clone website, developed during my CSS learning, showcases basic styling and JavaScript functionality. While unresponsive, it highlights my foundational skills in web design and interactive elements.",
      githubLink: "https://github.com/Anousha1846/Pokemon-Clone",
      liveLink: "https://anousha1846.github.io/Pokemon-Clone/",
    },
    {
        title: "Static Marksheet",
        description: "This static marksheet project, created with JavaScript, provides a simple interface for displaying student grades. Users can view scores clearly without dynamic input, ensuring an easy and straightforward experience.",
        githubLink: "https://github.com/Anousha1846/marksheet-js",
        liveLink: "https://anousha1846.github.io/marksheet-js/",
      },
      {
        title: "TO-DO App",
        description: "This simple TO DO app allows users to create, manage, and delete tasks effortlessly. With a clean interface, it enhances productivity by keeping track of daily activities and priorities.",
        githubLink: "https://github.com/Anousha1846/ToDo-list",
        liveLink: "https://anousha1846.github.io/ToDo-list/",
      },
      {
        title: "Dynamic Editable Resume Builder",
        description: "A user-friendly resume builder offering dynamic editing and instant downloading. Easily customize fields like contact info, education, and experience to create a polished, professional resume tailored to your needs.",
        githubLink: "https://github.com/Anousha1846/Updated-Resume-Builder-5",
        liveLink: "https://updated-resume-builder-5.vercel.app/",
      },
      
  ];

  return (
    <main>
    <div className="sm:p-8 p-4 sm:pb-20 bg-slate-200">
    <h1 className="p-4 py-8 text-sky-900 font-extrabold text-center text-2xl sm:text-5xl">MY PROJECTS</h1>
     <FocusCards cards={cards} />
 </div>
 </main>
  );
}











   
  
