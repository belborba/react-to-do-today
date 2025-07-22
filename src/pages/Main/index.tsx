import { Header } from "@/components/Header";
import { TaskInput } from "@/components/TaskInput";
import { TaskProvider } from "@/contexts/TaskContext";
import { DndContext } from "@dnd-kit/core";
import { TaskList } from "@/components/TaskList";

export const Main = () => {
  return (
    <TaskProvider>
      <div className="font-quicksand sm:4/5 lx:w-4/5 box-border flex h-full w-full flex-col gap-6 rounded-2xl border border-zinc-300 bg-white/50 px-4 py-6 sm:p-10 md:w-4/5 md:p-10 lg:w-4/5 dark:border-zinc-500 dark:bg-zinc-800/80">
        <Header />
        <TaskInput />
        <DndContext>
          <TaskList />
        </DndContext>
      </div>
    </TaskProvider>
  );
};
