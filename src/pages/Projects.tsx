
import React from 'react';
import NavBar from "@/components/NavBar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS. Features a Twitter-inspired UI design.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with product listings, cart functionality, and user authentication.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      image: "/placeholder.svg",
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag and drop functionality.",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      image: "/placeholder.svg",
      link: "#"
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <NavBar />
      
      <div className="flex-1 ml-64">
        <header className="border-b border-gray-200 py-3 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <h1 className="text-xl font-bold">Projects</h1>
        </header>
        
        <main className="max-w-5xl mx-auto pt-6 px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(project => (
              <Card key={project.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <a 
                    href={project.link} 
                    className="text-twitter-blue hover:underline flex items-center"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
