import Logo from "../../assets/images/todotoday-logo.svg?react";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { Weather } from "../Weather/Weather";

export const Header = () => {
  return (
    <div className="w-full flex justify-between border-zinc-500 border-b-2 pb-2">
      <Logo />
      <div className="flex gap-3 items-center">
        <Weather />
        <ThemeButton />
      </div>
    </div>
  );
};
