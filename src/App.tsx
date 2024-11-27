import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Connect />
      </ThemeProvider>
    </div>
  );
}

export default App;
