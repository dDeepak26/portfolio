// import { aboutData } from "./../data/data";
// import { Download } from "lucide-react";
// import { Button } from "./ui/button";

// function About() {
//   return (
//     <section className="relative">
//       <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-8">
//         {/* Text Content */}
//         <div className="flex-1 space-y-6 text-center md:text-left pl-20">
//           <h4 className="text-xl font-mono">Hi, I am</h4>
//           <h1 className="text-4xl md:text-6xl font-bold">{aboutData.name}</h1>
//           <p className="text-lg max-w-xl mx-auto md:mx-0">{aboutData.bio}</p>
//           <div className="flex justify-center md:justify-start gap-4">
//             <Button>Check Resume</Button>
//             <Button variant="outline">
//               <Download className="mr-2 h-4 w-4" />
//               Download
//             </Button>
//           </div>
//         </div>

//         {/* Profile Image */}
//         <div className="flex-1 flex justify-center md:justify-center">
//           <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-current ring-opacity-20">
//             <img
//               src="profileImage.jpg"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import { useState } from "react";
import { aboutData } from "@/data/data";
import { Download, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const About = () => {
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    try {
      const fileId = aboutData.resumeLink.match(/[-\w]{25,}/)?.[0];
      if (!fileId) {
        throw new Error("Invalid Google Drive link");
      }
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, "_blank");
      setError(null);
    } catch (err) {
      console.error("Download failed:", err);
      setError("Failed to initiate download. Please try again.");
    }
  };

  return (
    <section id="about" className="relative bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left md:pl-20">
          <h4 className="text-xl font-mono">Hi, I am</h4>
          <h1 className="text-4xl md:text-6xl font-bold">{aboutData.name}</h1>
          <p className="text-lg max-w-xl mx-auto md:mx-0">{aboutData.bio}</p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href={aboutData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Check Resume</Button>
            </a>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-center">
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary ring-opacity-20">
            <img
              src="/profileImage.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
