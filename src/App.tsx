import { MainContainer } from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className="dark">
      <div className="w-screen h-screen p-4 flex items-center justify-center dark:bg-zinc-800 dark:text-zinc-50 bg-zinc-400 text-zinc-800">
        <MainContainer />
      </div>
    </div>
  );
}

export default App;

/*
{`w-screen h-screen ${
        themeCtx?.theme === "dark"
          ? "bg-zinc-800 text-zinc-50"
          : "bg-zinc-400 text-zinc-800"
      } p-4 flex items-center justify-center`}
*/
