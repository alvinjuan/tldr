import React from "react";

const Hero = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-32 pt-3">
        <h1 className="font-satoshi font-extrabold text-3xl text-black dark:text-white">
          TL;DR
        </h1>

        <div className="flex gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-transparent hover:bg-gray-100 dark:hover:bg-[#404040] transition-colors duration-200"
          >
            <span className="text-black dark:text-white text-xl">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
          </button>

          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/TidbitsJS/Summize", "_blank")
            }
            className="black_btn font-satoshi"
          >
            GitHub
          </button>
        </div>
      </nav>

      <div className="flex flex-col gap-5">
        <h1 className="font-satoshi font-extrabold text-5xl text-center text-black dark:text-white">
          Summarize Articles with <br className="max-md:hidden" />
          <span className="orange_gradient">OpenAI GPT-4</span>
        </h1>
        <h2 className="font-satoshi text-lg text-center text-gray-600 dark:text-gray-200 sm:text-xl max-w-2xl">
          Cut through the clutter with TL;DR — your smart AI tool for turning
          long reads into short, sharp summaries.
        </h2>
      </div>
    </header>
  );
};

export default Hero;
