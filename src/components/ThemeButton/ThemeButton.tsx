import dark from "../../assets/icons/dark-icon.svg";
import light from "../../assets/icons/light-icon.svg";
import { useTheme } from "../../contexts/ThemeContext";

export const ThemeButton = () => {
  const themeCtx = useTheme();

  const isDark = themeCtx?.theme === "dark";

  const handleTheme = () => {
    if (!themeCtx) return;
    themeCtx.setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className={`w-[80px] h-[40px] rounded-full flex flex-col items-end
        gap-4 p-1 transition duration-200 ease-in-out relative
        ${isDark ? "bg-zinc-700 items-end" : "bg-zinc-300 items-start"}`}
    >
      <span className="absolute w-8 h-8 flex items-center justify-center p-1.5 dark:bg-violet-400 bg-zinc-700 rounded-full transition duration-500 ease-in-out">
        <img src={isDark ? dark : light} />
      </span>
    </button>
  );
};
