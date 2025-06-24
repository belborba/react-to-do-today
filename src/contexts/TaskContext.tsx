import { createContext, useContext, useState, useEffect } from "react";
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

// Chave para armazenar as tarefas no localStorage
const STORAGE_KEY = "tasksContextKey";

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  // Função para obter tarefas iniciais do localStorage
  const getInitialTasks = (): Task[] => {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
      try {
        return JSON.parse(storedTasks);
      } catch (error) {
        console.error("Erro ao carregar tarefas do localStorage:", error);
      }
    }
    // Tarefa de exemplo se não houver dados salvos
    return [{ id: "3729183721", label: "Example: Buy a cake", done: false }];
  };

  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);

  // Salvar tarefas no localStorage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

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
