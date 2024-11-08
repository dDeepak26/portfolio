import aboutData from "./../data/data";
import { Download } from "lucide-react";
import { Button } from "./ui/button";

function About() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-32 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center md:justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h4 className="text-xl font-mono">Hi, I am</h4>
          <h1 className="text-4xl md:text-6xl font-bold">{aboutData.name}</h1>
          <p className="text-lg max-w-xl mx-auto md:mx-0">{aboutData.bio}</p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button>Check Resume</Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-opacity-20 md:-ml-16">
            <img
              src="profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
