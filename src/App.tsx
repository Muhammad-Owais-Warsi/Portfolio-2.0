import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { toggleMode } from "./context/toggle";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState<string>("light");

  return (
    <toggleMode.Provider value={{ mode, setMode }}>
      {/* Apply dark or light background based on the mode */}
      <div className={`h-full w-full ${mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} overflow-x-hidden`}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </toggleMode.Provider>
  );
}

export default App;
