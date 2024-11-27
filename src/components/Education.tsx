/* import { educationData } from "@/data/data";

export default function Education() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-center text-3xl font-bold mb-12">Education</h2>
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md flex items-start justify-between  transition-transform duration-300 hover:shadow-lg hover:border-blue-500 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <img
                    src={`/${education.universityImage}`}
                    alt={education.university}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-medium">{education.degree}</h3>
                  <p className="">{education.university}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{education.batch}</p>
                <p className="">{education.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

 */

import { educationData } from "@/data/data";

const Education = () => {
  return (
    <section id="education" className="relative py-16">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-center text-3xl font-bold mb-12">Education</h2>
        <div className="space-y-6">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md flex items-start justify-between transition-transform duration-300 hover:shadow-lg hover:border-blue-500 hover:scale-105"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 relative flex-shrink-0">
                  <img
                    src={`/${education.universityImage}`}
                    alt={education.university}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-medium">{education.degree}</h3>
                  <p>{education.university}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium">{education.batch}</p>
                <p>{education.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
