
import { useEffect, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      image: "/placeholder.svg",
      tags: ["React.js", "Node.js", "Express", "Razorpay"],
      description:
        "A full-featured e-commerce platform with product listing, cart functionality, secure checkout, and payment integration.",
      points: [
        "Developed components for homepage, product listing, shopping cart, and checkout flow",
        "Integrated with Node.js backend APIs for seamless shopping experience",
        "Optimized platform performance and integrated Razorpay payment gateway"
      ],
      liveLink: "#",
      codeLink: "#",
      date: "Oct 2024"
    },
    {
      title: "Task Manager",
      image: "/placeholder.svg",
      tags: ["React.js", "Context API", "Tailwind CSS"],
      description:
        "A responsive task management application for tracking and organizing tasks with various priority levels.",
      points: [
        "Developed a responsive task management system using ReactJS",
        "Focused on efficient state management and reusable components",
        "Implemented task creation, assignment, prioritization, and tracking features"
      ],
      liveLink: "#",
      codeLink: "#",
      date: "Sep 2024"
    },
    {
      title: "EasyFarm",
      image: "/placeholder.svg",
      tags: ["React.js", "Chart.js", "CSS3"],
      description:
        "A farm management application aimed at improving efficiency and resource management for farmers.",
      points: [
        "Frontend project aimed at improving farm management and efficiency",
        "Provided intuitive interface for managing and optimizing farming activities",
        "Enabled users to track crop growth, manage resources, and analyze farm data"
      ],
      liveLink: "#",
      codeLink: "#",
      date: "Aug 2024"
    },
    {
      title: "Learn Programming Platform",
      image: "/placeholder.svg",
      tags: ["JavaScript", "HTML", "CSS"],
      description:
        "An interactive platform for learning programming languages with tutorials, coding exercises, and quizzes.",
      points: [
        "Crafted a responsive and user-friendly interface to improve accessibility",
        "Developed interactive coding modules and educational tutorials",
        "Implemented quiz system for assessing user progress and code execution functionality"
      ],
      liveLink: "#",
      codeLink: "#",
      date: "Dec 2023"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-blue font-poppins">
            My <span className="text-tech-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden project-card shadow-md"
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-tech-purple opacity-60">
                  {project.title.substring(0, 1)}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-tech-blue">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-tech-purple/10 text-tech-purple text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 flex justify-between">
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Code
                  </a>
                </Button>
                <Button className="bg-tech-purple hover:bg-tech-purple/90 flex items-center gap-2" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
