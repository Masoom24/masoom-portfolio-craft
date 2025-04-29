
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Keyboard } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-tech-darkBlue/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">
            Masoom Yadav
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/#about"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-tech-blue transition-colors"
            >
              About
            </Link>
            <Link
              to="/#experience"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-tech-blue transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/#projects"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-tech-blue transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-tech-blue transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/typing-test"
              className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-tech-blue transition-colors flex items-center gap-1"
            >
              <Keyboard className="h-4 w-4" />
              Typing Test
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden">
            <Link
              to="/typing-test"
              className="mr-2"
            >
              <Button variant="ghost" size="icon">
                <Keyboard className="h-5 w-5" />
              </Button>
            </Link>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 p-2"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "w-4"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 bg-foreground transition-all duration-300 ${
                    isMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <Link
              to="/#about"
              className="block px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-tech-blue"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/#experience"
              className="block px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-tech-blue"
              onClick={handleLinkClick}
            >
              Experience
            </Link>
            <Link
              to="/#projects"
              className="block px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-tech-blue"
              onClick={handleLinkClick}
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              className="block px-4 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-tech-blue"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
