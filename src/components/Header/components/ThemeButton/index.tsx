import { DarkIcon } from "@/assets/icons/dark-icon";
import { LightIcon } from "@/assets/icons/light-icon";
import { useTheme } from "@/contexts/ThemeContext";

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
      className={`relative flex h-[40px] w-[80px] cursor-pointer flex-col items-end gap-4 rounded-full p-1 transition duration-200 ease-in-out ${isDark ? "items-end bg-zinc-700" : "items-start bg-zinc-300"}`}
    >
      <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 p-1.5 transition duration-500 ease-in-out dark:bg-violet-400">
        {isDark ? <DarkIcon /> : <LightIcon />}
      </span>
    </button>
  );
};
