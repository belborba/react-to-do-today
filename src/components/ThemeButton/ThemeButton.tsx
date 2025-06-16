import dark from "../../assets/icons/dark-icon.svg";
import light from "../../assets/icons/light-icon.svg";
import { useState } from "react";

export const ThemeButton = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <button
      onClick={handleToggle}
      className="w-[80px] h-[40px] rounded-full flex flex-col items-end
        gap-4 p-1 transition duration-500 ease-in-out cursor-pointer relative bg-white dark:bg-black"
    >
      <span className="absolute w-8 h-8 flex items-center justify-center p-1.5 bg-lime-300 rounded-full">
        <img src={toggled ? light : dark} alt="Dark Mode" />
      </span>
    </button>
  );
};

/*
 return (
    <button
      onClick={handleToggle}
      className={`w-[80px] h-[40px] rounded-full flex flex-col items-end gap-4 p-1 transition duration-500 ease-in-out cursor-pointer relative
        ${toggled ? "bg-white items-start" : "bg-zinc-800 items-end"}`}
    >
      <span className="absolute w-8 h-8 flex items-center justify-center p-1.5 bg-lime-300 rounded-full">
        <img src={toggled ? light : dark} alt="Dark Mode" />
      </span>
    </button>
  );
};
*/
