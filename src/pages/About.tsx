
import React from 'react';
import NavBar from "@/components/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Express", 
    "MongoDB", "PostgreSQL", "HTML/CSS", "Tailwind CSS", 
    "Git", "GraphQL", "Next.js", "Redux"
  ];

  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Developer",
      period: "2021 - Present",
      description: "Lead frontend development for multiple projects, mentored junior developers, and implemented modern React practices."
    },
    {
      company: "Digital Agency",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      description: "Developed and maintained various client projects using React, Node.js, and MongoDB."
    },
    {
      company: "Startup Hub",
      role: "Junior Developer",
      period: "2016 - 2018",
      description: "Contributed to the development of web applications and gained experience in agile methodologies."
    }
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2012 - 2016"
    },
    {
      institution: "Online Education Platform",
      degree: "Advanced Web Development Certification",
      period: "2018"
    }
  ];

  return (
    <div className="flex min-h-screen bg-white">
      <NavBar />
      
      <div className="flex-1 ml-64">
        <header className="border-b border-gray-200 py-3 px-4 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <h1 className="text-xl font-bold">About Me</h1>
        </header>
        
        <main className="max-w-3xl mx-auto pt-6 px-4 pb-12">
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="Profile" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-2xl font-bold">John Portfolio</h1>
              <p className="text-lg text-gray-600 mb-2">Full Stack Developer</p>
              <p className="max-w-lg text-gray-700">
                Passionate developer with 5+ years of experience building modern web applications.
                Focused on creating elegant, user-friendly interfaces with robust backend solutions.
              </p>
            </div>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className={index !== experiences.length - 1 ? "pb-6 border-b" : ""}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <p className="text-twitter-blue">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default About;
