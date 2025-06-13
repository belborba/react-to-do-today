import logo from "../../assets/images/todotoday-logo.svg";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
  return (
    <div className="w-full flex justify-between border-zinc-500 border-b py-2">
      <img className="w-48" src={logo} alt="Logo TodoToday" />
      <ThemeButton />
    </div>
  );
};
