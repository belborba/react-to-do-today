import { Header } from "../Header/Header";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskProvider } from "../../contexts/TaskContext";
import { DndContext } from "@dnd-kit/core";
import { TaskList } from "../TaskList/TaskList";

export const MainContainer = () => {
  return (
    <TaskProvider>
      <div className="font-quicksand w-full h-full sm:4/5 md:w-4/5 lg:w-4/5 lx:w-4/5 box-border bg-white/50 dark:bg-zinc-800/80 rounded-2xl px-4 py-6 sm:p-10 md:p-10 flex flex-col gap-6 border border-zinc-300 dark:border-zinc-500">
        <Header />
        <TaskInput />
        <DndContext>
          <TaskList />
        </DndContext>
      </div>
    </TaskProvider>
  );
};
