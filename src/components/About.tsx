
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frameworks",
      items: ["Bootstrap", "Tailwind CSS", "Node.js", "Next.js"]
    },
    {
      category: "Libraries",
      items: ["React.js", "React Select", "Daisy UI", "Material UI"]
    },
    {
      category: "Tools",
      items: ["MongoDB", "Trello", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tech-blue font-poppins">
            About <span className="text-tech-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-tech-purple mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I'm a full stack developer based in Indore with expertise in building responsive and dynamic web applications.
            I'm passionate about creating efficient and scalable solutions that provide exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card opacity-0 transition-all duration-500" style={{transitionDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-tech-purple">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-tech-purple rounded-full mr-2"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
