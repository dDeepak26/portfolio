import { skillsData } from "@/data/data";

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="container mx-auto px-4 md:px-20 my-10">
        <div className="text-center text-3xl font-bold mb-8">Skills</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
          {skillsData.map((skills, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:border-blue-500 hover:scale-105"
            >
              <div className="text-2xl font-bold text-center mb-4">
                {skills.skill}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(skills.known).map(([key, value], i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                      <img
                        src={value}
                        alt={key}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <span className="text-center text-sm font-medium">
                      {key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
