import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-zinc-800 border-b-2">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Button variant={"text"} className="text-2xl" onClick={scrollToTop}>
            Deepak Durgam
          </Button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="link"
            className="text-lg"
            onClick={() => handleScrollTo("about")}
          >
            About
          </Button>
          <Button
            variant="link"
            className="text-lg"
            onClick={() => handleScrollTo("projects")}
          >
            Projects
          </Button>
          <Button
            variant="link"
            className="text-lg"
            onClick={() => handleScrollTo("skills")}
          >
            Skills
          </Button>
          <Button
            variant="link"
            className="text-lg"
            onClick={() => handleScrollTo("education")}
          >
            Education
          </Button>
          <Button
            variant="link"
            className="text-lg"
            onClick={() => handleScrollTo("connect")}
          >
            Connect
          </Button>
          <ModeToggle />
        </div>

        <div className="md:hidden">
          <Button variant="link" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={() => handleScrollTo("about")}
            >
              About
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={() => handleScrollTo("skills")}
            >
              Skills
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={() => handleScrollTo("projects")}
            >
              Projects
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={() => handleScrollTo("education")}
            >
              Education
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={() => handleScrollTo("connect")}
            >
              Connect
            </Button>
            <ModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
