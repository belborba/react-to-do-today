import LogoLight from "../../assets/images/logo-light.svg?react";
import { MessageButton } from "../MessageButton/MessageButton";
import { LocalDate } from "../LocalDate/LocalDate";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:items-start sm:space-y-0 border-zinc-300 dark:border-zinc-500 border-b-2 pb-2">
      <LogoLight className="text-zinc-800 dark:text-lime-300" />
      <div className="flex gap-3 items-center">
        <MessageButton />
        <LocalDate />
        <ThemeButton />
      </div>
    </div>
  );
};
