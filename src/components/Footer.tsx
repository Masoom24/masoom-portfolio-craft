
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">
              Masoom<span className="text-tech-purple">.dev</span>
            </h2>
            <p className="text-gray-300 mt-2">
              Building exceptional digital experiences
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Masoom24" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-tech-purple/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-tech-purple/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:masoomyadav0901@gmail.com" 
              className="bg-white/10 p-3 rounded-full hover:bg-tech-purple/20 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Masoom Yadav. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-8 text-sm text-gray-300">
              <li>
                <a href="#home" className="hover:text-tech-purple transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-tech-purple transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-tech-purple transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-tech-purple transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
