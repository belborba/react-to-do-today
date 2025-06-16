import { useState } from "react";
import { SquareButton } from "../SquareButton/SquareButton";
import { useTask } from "../../contexts/TaskContext";

export const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");
  const { addTask } = useTask();

  const handleAddTask = () => {
    const taskLabel = taskInput.trim();

    if (!taskLabel) return;
    addTask(taskLabel);
    setTaskInput("");
  };

  return (
    <div className="relative w-full">
      <input
        className="bg-zinc-800 p-5 pr-12 rounded-2xl w-full text-zinc-50 outline-none focus:ring-2 focus:ring-lime-300"
        type="text"
        placeholder="What are the plans for today?"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <SquareButton label="+" onClick={handleAddTask} />
    </div>
  );
};
