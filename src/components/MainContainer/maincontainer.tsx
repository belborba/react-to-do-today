import { Header } from "../Header/Header";
import { TaskInput } from "../TaskInput/TaskInput";

export const MainContainer = () => {
  return (
    <div className="w-full h-full sm:4/5 md:w-4/5 lg:w-4/5 lx:w-4/5 box-border bg-zinc-50/15 rounded-2xl p-4 flex flex-col gap-4 border-2 border-zinc-50/15">
      <Header />
      <TaskInput />
    </div>
  );
};
