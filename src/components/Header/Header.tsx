import LogoLight from "../../assets/images/logo-light.svg?react";
import { MessageButton } from "../MessageButton/MessageButton";
import { LocalDate } from "../LocalDate/LocalDate";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className=" grow w-full flex justify-between border-zinc-300 dark:border-zinc-500 border-b-2 pb-2">
      <LogoLight className="text-zinc-800 dark:text-lime-300" />
      <div className="flex gap-3 items-center">
        <MessageButton />
        <LocalDate />
        <ThemeButton />
      </div>
    </div>
  );
};
