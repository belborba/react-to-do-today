import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "../Header/Header";
import { TaskInput } from "../TaskInput";
import { TaskList } from "../TaskList";

//Usar o Contexto

export const MainContainer = () => {
  const [list, setList] = useState<Task[]>([
    { id: "3729183721", label: "Exemplo: Comprar Bolo", done: false },
  ]);

  const handleTaskAdded = (taskLabel: string) => {
    const newTask = {
      id: uuidv4(),
      label: taskLabel,
      done: false,
    };

    setList((prevList) => [...prevList, newTask]); // setList([...list, newTask])
  };

  return (
    <div className="w-full h-full sm:4/5 md:w-4/5 lg:w-4/5 lx:w-4/5 box-border bg-zinc-50/15 rounded-2xl p-4 flex flex-col gap-4 border-2 border-zinc-50/15">
      <Header />
      <TaskInput onTaskAdded={(taskLabel) => handleTaskAdded(taskLabel)} />
      <TaskList />
    </div>
  );
};
