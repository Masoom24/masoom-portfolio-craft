
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-tech-lightGray pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in-up">
            <p className="text-tech-purple font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-tech-blue font-poppins">
              Masoom Yadav
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I build exceptional and scalable frontend and backend applications with modern technologies. 
              Transforming ideas into reality through code.
            </p>
            <div className="flex gap-4">
              <Button className="bg-tech-purple hover:bg-tech-purple/90 px-6 py-6">
                Contact Me
              </Button>
              <a href="#projects">
                <Button variant="outline" className="px-6 py-6">
                  View Projects
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                {/* Placeholder profile image - replace with your actual image */}
                <div className="text-6xl font-bold bg-tech-purple text-white w-full h-full flex items-center justify-center">
                  MY
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-tech-purple transition-colors">
            <span className="mb-2">Scroll Down</span>
            <ArrowDown className="animate-bounce-light" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
