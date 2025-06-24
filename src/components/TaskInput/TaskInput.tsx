import { useState, type KeyboardEvent } from "react";
import { SquareButton } from "../SquareButton/SquareButton";
import { useTask } from "../../contexts/TaskContext";

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
        className="dark:bg-zinc-800 dark:text-zinc-50 bg-zinc-50 text-zinc-800 p-5 pr-12 rounded-2xl w-full outline-none focus:ring-2 dark:focus:ring-lime-300"
        type="text"
        placeholder="What are the plans for today?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyDown={handleKeyUpAction}
      />
      <SquareButton label="+" onClick={tryAddTask} />
    </div>
  );
};
