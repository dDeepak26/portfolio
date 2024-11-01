"use client";

import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="border-b-2">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand || Logo || Text */}
        <div>
          <Button variant={"text"} className="text-2xl">
            Deepak Durgam
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="link" className="text-lg">
            About
          </Button>
          <Button variant="link" className="text-lg">
            Skills
          </Button>
          <Button variant="link" className="text-lg">
            Projects
          </Button>
          <Button variant="link" className="text-lg">
            Education
          </Button>
          <Button variant="link" className="text-lg">
            Contact
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="link" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={toggleMenu}
            >
              About
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={toggleMenu}
            >
              Skills
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={toggleMenu}
            >
              Projects
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={toggleMenu}
            >
              Education
            </Button>
            <Button
              variant="link"
              className="text-lg w-full"
              onClick={toggleMenu}
            >
              Contact
            </Button>
            <ModeToggle />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
