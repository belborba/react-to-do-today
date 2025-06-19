import { MainContainer } from "./components/MainContainer/MainContainer";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const themeCtx = useTheme();

  return (
    <div
      className={`w-screen h-screen ${
        themeCtx?.theme === "dark"
          ? "bg-zinc-800 text-zinc-50"
          : "bg-zinc-400 text-zinc-800"
      } p-4 flex items-center justify-center`}
    >
      <MainContainer />
    </div>
  );
}

export default App;
