import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { arrayMove } from "@dnd-kit/sortable";

interface Task {
  id: string;
  label: string;
  done: boolean;
}

interface TaskContextData {
  tasks: Task[];
  addTask: (label: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  reorderTasks: (oldIndex: number, newIndex: number) => void;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "3729183721", label: "Exemplo: Comprar Bolo", done: false },
  ]);

  const addTask = (label: string) => {
    const newTask = {
      id: uuidv4(),
      label,
      done: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );

    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }, 800);
  };

  const reorderTasks = (oldIndex: number, newIndex: number) => {
    setTasks((prevTasks) => arrayMove(prevTasks, oldIndex, newIndex));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTask, reorderTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
}
