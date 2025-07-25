import React from "react";
import Navbar from "../components/Navbar";


function Projects() {
  const projectList = [
    {
      title: "Project 1",
      description: "Youtube playlist video downloader",
      link:"https://github.com/k-ghale/python-projects/tree/master/youtube%20playlist%20videos%20downloader"

    },
    {
      title: "Project 2",
      description: "An e-commerce site built with React.",
      link:"https://github.com/k-ghale/react-ecommerce-site"
    },
    {
      title: "Project 3",
      description: "A mobile app for fitness tracking.",
      link:"https://github.com/k-ghale/fitness-tracker"
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-black text-white px-6 py-16 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <p className="text-center text-lg mb-10">
        Here are some of the projects I've worked on:
      </p>

      <div className="grid gap-6 max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Projects;
