import Logo from "../../assets/images/todotoday-logo.svg?react";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className="w-full flex justify-between border-zinc-500 border-b py-2">
      <Logo />
      <ThemeButton />
    </div>
  );
};
