import LogoDark from "../../assets/images/logo-dark.svg?react";
import LogoLight from "../../assets/images/logo-light.svg?react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { Weather } from "../Weather/Weather";

export const Header = () => {
  const themeCtx = useTheme();

  const isDark = themeCtx?.theme === "dark";

  return (
    <div className=" grow w-full flex justify-between border-zinc-300 dark:border-zinc-500 border-b-2 pb-2">
      {isDark && <LogoDark />}
      {!isDark && <LogoLight />}
      <div className="flex gap-3 items-center">
        <Weather />
        <ThemeButton />
      </div>
    </div>
  );
};
