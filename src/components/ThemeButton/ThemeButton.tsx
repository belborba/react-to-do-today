import dark from "../../assets/icons/dark-icon.svg";
import light from "../../assets/icons/light-icon.svg";
import { useTheme } from "../../contexts/ThemeContext";

export const ThemeButton = () => {
  const themeCtx = useTheme();

  const isDark = themeCtx?.theme === "dark"; // Apenas uma variável para facilitar a leitura

  const handleTheme = () => {
    if (!themeCtx) return;
    themeCtx.setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className={`w-[80px] h-[40px] rounded-full flex flex-col items-end
        gap-4 p-1 transition duration-500 ease-in-out cursor-pointer relative
        ${isDark ? "bg-zinc-800 items-end" : "bg-zinc-300 items-start"}`}
    >
      <span className="absolute w-8 h-8 flex items-center justify-center p-1.5 bg-lime-300 rounded-full">
        <img src={isDark ? dark : light} />
      </span>
    </button>
  );
};

// Removi o useState(toggled) pq o estado do botão depende diretamente do tema global, não precisa usar useStateLocal
// O botão agora alterna o estado de theme entre light e dark, atualizando o contexto e persistindo no localStorage
// O ícone tb muda com base no tema atual.
