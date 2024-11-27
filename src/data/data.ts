export const aboutData = {
  name: "Deepak Durgam",
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
  resumeLink:
    "https://drive.google.com/file/d/15BIx5EBbhwNknhAGJ4za3mdrNDvSbc2J/view?usp=drive_link",
};

export const projectData = [
  {
    projectName: "NetflixGPT",
    techStack: {
      1: "React.js",
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
    projectName: "AI Expense Tracker",
    techStack: {
      1: "Next.js",
      2: "React.js",
      3: "Tailwind CSS",
      4: "shadcn UI",
      5: "PostgreSQL",
    },
    description:
      "The AI Expense Tracker is a Next.js and React app that uses TypeScript, Tailwind CSS, and Gemini API for intelligent financial tracking. It includes Drizzle, Neon, and PostgreSQL for secure data storage, allowing users to manage budgets, expenses, and income. Users can view financial summaries through dynamic graphs and receive AI-driven financial advice based on their data. Authentication is supported via Google or email and password. The app combines user-friendly UI with advanced analytics, offering measurable insights to improve financial decision-making.",
    firstButton: "GitHub",
    firstButtonLink: "https://github.com/dDeepak26/ai-expense-tracker.git",
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
      "React JS": "React JS.png",
      Bootstrap: "Bootstrap.png",
      "Tailwind CSS": "Tailwind CSS.png",
      "Material UI": "Material UI.png",
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
    grade: "9.24 SGPA",
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
