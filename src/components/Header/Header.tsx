import Logo from "../../assets/images/todotoday-logo.svg?react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
  const themeCtx = useTheme();

  const isDark = themeCtx?.theme === "dark";

  return (
    <div className="w-full flex justify-between border-zinc-500 border-b-2 pb-2">
      <Logo />
      <ThemeButton />
    </div>
  );
};
