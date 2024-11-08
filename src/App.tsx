import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <About />
    </ThemeProvider>
  );
}

export default App;
