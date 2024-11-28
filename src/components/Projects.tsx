import { Button } from "./ui/button";
import { projectData } from "@/data/data";

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20">
        <div className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Projects
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden p-4 sm:p-6 transition-transform duration-300 hover:shadow-lg hover:border-blue-500 hover:scale-105"
            >
              {/* <img
                src={project.image}
                alt={`${project.projectName} Image`}
                className="w-full h-40 sm:h-48 object-cover rounded-t-md mb-4"
              /> */}
              <h1 className="text-xl sm:text-2xl font-semibold mb-2">
                {project.projectName}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.values(project.techStack).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm mb-4 overflow-hidden">
                {project.description}
              </p>
              <div className="flex flex-wrap space-x-4">
                <a
                  href={project.firstButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>{project.firstButton}</Button>
                </a>
                {project.secondButton && project.secondButtonLink && (
                  <a
                    href={project.secondButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>{project.secondButton}</Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
