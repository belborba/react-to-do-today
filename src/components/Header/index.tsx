import LogoLight from "../../assets/images/logo-light.svg?react";
import { MessageButton } from "../MessageButton";
import { LocalDate } from "../LocalDate";
import { ThemeButton } from "../ThemeButton";

export const Header = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-4 border-b border-zinc-300 pb-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0 dark:border-zinc-500">
      <LogoLight className="text-zinc-800 dark:text-violet-400" />
      <div className="flex items-center gap-3">
        <MessageButton />
        <LocalDate />
        <ThemeButton />
      </div>
    </div>
  );
};
