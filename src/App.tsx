import { ThemeProvider } from "@/components/theme-provider";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}

export default App;
