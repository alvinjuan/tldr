import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#1e1e1e] transition-colors duration-200">
      <div className="app px-6 sm:px-16 py-8">
        <Hero theme={theme} setTheme={setTheme} />
        <Demo />
      </div>
    </main>
  );
};

export default App;
