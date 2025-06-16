import { Header } from "../Header/Header";
import { TaskInput } from "../TaskInput";
import { TaskList } from "../TaskList";
import { TaskProvider } from "../../contexts/TaskContext";
import { DndContext } from "@dnd-kit/core";

export const MainContainer = () => {
  return (
    <TaskProvider>
      <div className="w-full h-full sm:4/5 md:w-4/5 lg:w-4/5 lx:w-4/5 box-border bg-zinc-50/15 rounded-2xl p-4 flex flex-col gap-4 border-2 border-zinc-50/15">
        <Header />
        <TaskInput />
        <DndContext>
          <TaskList />
        </DndContext>
      </div>
    </TaskProvider>
  );
};
