
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const timelineRefs = useRef<HTMLDivElement[]>([]);

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

    timelineRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const experiences = [
    {
      company: "THE SKY INFORMATION TECH",
      location: "Mumbai",
      role: "Full Stack Developer",
      period: "April 2024 - Oct 2024",
      description: [
        "Developed both frontend and backend features and integrated APIs.",
        "Improved website performance and user interface.",
        "Collaborated with the team to develop new features and fix bugs.",
      ],
    },
    {
      company: "Ypsilon It Solutions pvt. ltd.",
      location: "Indore",
      role: "Frontend Developer",
      period: "Jan 2025 - Feb 2025",
      description: [
        "In this MERN stack project, I worked primarily with React.js for the frontend development, focusing on building a dynamic and responsive user interface.",
        "I collaborated with the team to integrate React.js with the Node.js and Express.js backend, ensuring smooth communication between the frontend and server.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-tech-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-blue font-poppins">
            Work <span className="text-tech-purple">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            My professional journey and the companies I've had the pleasure to
            work with and contribute to their success.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-purple/20 hidden md:block"></div>

          {/* Experience cards */}
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) timelineRefs.current[index] = el;
                }}
                className={`mb-12 opacity-0 translate-y-10 transition-all duration-700 flex ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-tech-purple"></div>

                {/* Card */}
                <Card className="w-full md:w-[calc(50%-20px)] shadow-md">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-tech-purple">
                          {exp.role}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {exp.company}, {exp.location}
                        </p>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-tech-blue font-poppins">
              Education
            </h3>
            <div className="w-16 h-1 bg-tech-purple mx-auto my-4"></div>
          </div>

          <Card className="max-w-2xl mx-auto shadow-md opacity-0 translate-y-10 animate-fade-in-up">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2 flex-wrap">
                <h3 className="text-xl font-bold text-tech-purple">
                  Bachelor of Technology (B.Tech), Computer Science
                </h3>
                <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">
                  2024
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-2">
                Jawaharlal Nehru College of Technology, Rewa
              </p>
              <p className="text-gray-600">CGPA: 8.56</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
