import { useState, type KeyboardEvent } from "react";
import { SquareButton } from "./components/SquareButton";
import { useTask } from "@/contexts/TaskContext";

export const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");
  const { addTask } = useTask();

  const tryAddTask = () => {
    const trimmedLabel = taskInput.trim();
    if (!trimmedLabel) return;
    addTask(trimmedLabel);
    setTaskInput("");
  };

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter") {
      tryAddTask();
    }
  };

  return (
    <div className="relative w-full">
      <input
        className="w-full rounded-2xl bg-zinc-50 p-5 pr-12 text-zinc-800 outline-none focus:ring-2 sm:text-2xl dark:bg-zinc-700 dark:text-zinc-50 dark:focus:ring-violet-300"
        type="text"
        placeholder="What are your plans for today?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyUpAction}
      />
      <SquareButton label="+" onClick={tryAddTask} />
    </div>
  );
};
