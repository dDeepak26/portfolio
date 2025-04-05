export const aboutData = {
  name: "Deepak Durgam",
  bio: "Motivated fresher with a passion for web and mobile development. Eager to grow as a Full Stack Developer, adapt to challenges, and continuously improve. Skilled in problem-solving and teamwork, ready to contribute to dynamic teams and modern frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/18xqoCg-qdN9e8DsaSouSJW1wIV8ncI8e/view?usp=sharing",
};

export const projectData = [
  {
    projectName: "CodePath",
    techStack: {
      1: "React",
      2: "Tailwind CSS",
      3: "Firebase",
    },
    description:
      "Developed a full-stack coding platform similar to LeetCode, enabling users to solve JavaScript coding problems. Designed an intuitive UI with React, Tailwind CSS, and shadcnUI, enhancing user engagement by 25%. Implemented a dynamic code execution and submission system to validate solutions against test cases. Integrated Clerk for secure authentication and account management.",
    firstButton: "GitHub",
    firstButtonLink: "https://github.com/dDeepak26/CodePath.git",
    secondButton: "Live",
    secondButtonLink: "https://codepath.netlify.app/",
  },
  {
    projectName: "NetflixGPT",
    techStack: {
      1: "React",
      2: "Tailwind CSS",
      3: "Redux",
      4: "Firebase",
    },
    description:
      "The NetflixGPT project is a React-based app that integrates Redux, Tailwind CSS, Firebase, TMDB API, and Gemini API. It features movie rendering from TMDB, enabling users to view detailed information about each title. Firebase handles authentication with Google or email, while Gemini API powers a search function for movies. Users can switch between five languages for a customized experience. The project is hosted on Vercel, providing quick deployment and accessibility across devices.",
    firstButton: "GitHub",
    firstButtonLink: "https://github.com/dDeepak26/netflix-gpt.git",
    secondButton: "Live",
    secondButtonLink: "https://netflix-gpt-ddeepak26s-projects.vercel.app/",
  },
  {
    projectName: "Pet Buddy",
    techStack: {
      1: "React Native",
      2: "Firebase",
    },
    description:
      "Pet Buddy is a React Native app using Firebase that helps users find pets for adoption. It includes Google authentication and stores pet data, allowing users to browse and filter pets by categories. Users can create a personalized favorite list by liking pets, connect with pet owners through in-app chat, and add new pets for adoption. Firebase handles real-time data sync and secure user interactions, making it a seamless platform for pet adoption enthusiasts.",
    firstButton: "GitHub",
    firstButtonLink: "https://github.com/dDeepak26/pet-adopt-app.git",
  },
];

type SkillImages = {
  [key: string]: string;
};

interface SkillsData {
  skill: string;
  known: SkillImages;
}

export const skillsData: SkillsData[] = [
  {
    skill: "Frontend",
    known: {
      HTML: "HTML.png",
      CSS: "CSS.png",
      JavaScript: "JavaScript.png",
      React: "React JS.png",
      "Tailwind CSS": "Tailwind CSS.png",
    },
  },
  {
    skill: "Backend",
    known: {
      "Node JS": "Node JS.png",
      "Express JS": "Express JS.png",
      MySQL: "MySQL.png",
      MongoDB: "MongoDB.png",
      Firebase: "Firebase.png",
    },
  },
  {
    skill: "Languages",
    known: {
      Java: "Java.png",
      JavaScript: "JavaScript.png",
      TypeScript: "TypeScript.png",
    },
  },
  {
    skill: "Tools",
    known: {
      Git: "Git.png",
      Github: "Github.png",
      "VS Code": "VS Code.png",
      Postman: "Postman.png",
      "MongoDB Compass": "MongoDB Compass.png",
    },
  },
];

export const educationData = [
  {
    degree: "Master of Computer Applications",
    universityImage: "MUMBAI.jpg",
    university: "Mumbai University",
    batch: "2023-25",
    grade: "9.04 SGPA",
  },
  {
    degree: "Bachelor of Computer Applications",
    universityImage: "YCMOU.jpg",
    university: "YCMOU University",
    batch: "2020-23",
    grade: "8.22 CGPA",
  },
];

export const connectData = [
  {
    connectTo: "LinkedIn",
    icon: "linkedIn.png",
    link: "https://www.linkedin.com/in/ddeepak26",
  },
  {
    connectTo: "GitHub",
    icon: "Github.png",
    link: "https://github.com/dDeepak26",
  },
  {
    connectTo: "Gmail",
    icon: "Gmail.png",
    link: "mailto:deepakdurgam26@gmail.com",
  },
];
