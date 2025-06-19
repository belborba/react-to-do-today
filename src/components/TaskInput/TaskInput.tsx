import { useState } from "react";
import { SquareButton } from "../SquareButton/SquareButton";
import { useTask } from "../../contexts/TaskContext";
import { useTheme } from "../../contexts/ThemeContext";

export const TaskInput = () => {
  const themeCtx = useTheme();
  const [taskInput, setTaskInput] = useState("");
  const { addTask } = useTask();

  const isDark = themeCtx?.theme === "dark";

  const handleAddTask = () => {
    const taskLabel = taskInput.trim();

    if (!taskLabel) return;
    addTask(taskLabel);
    setTaskInput("");
  };

  return (
    <div className="relative w-full">
      <input
        className={`${
          isDark ? "bg-zinc-800 text-zinc-50" : "bg-zinc-200/70 text-zinc-800"
        } p-5 pr-12 rounded-2xl w-full outline-none focus:ring-2 focus:ring-lime-300`}
        type="text"
        placeholder="What are the plans for today?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <SquareButton label="+" onClick={handleAddTask} />
    </div>
  );
};

/*
className={`${
          isDark ? "bg-zinc-800 text-zinc-50" : "bg-zinc-200/70 text-zinc-800"
        } p-5 pr-12 rounded-2xl w-full outline-none focus:ring-2 focus:ring-lime-300`}
*/
