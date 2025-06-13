import { useState } from "react";
import { SquareButton } from "../SquareButton/SquareButton";

interface TaskInputProps {
  onTaskAdded: (taskLabel: string) => void;
}

// Responsável somente por enviar o valor que foi escrito dentro do input
export const TaskInput: React.FunctionComponent<TaskInputProps> = ({
  onTaskAdded,
}) => {
  // Tipificando a função como um componente react -> O TS vai entender que tem todas propriedade de um componente react. <TaskInputProps> é o componente reac que possui essas Props
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    const taskLabel = taskInput.trim();

    if (!taskLabel) return;
    onTaskAdded(taskLabel); // Avisar pro pai que quer adicionar // onTaskAdded(taskLabel) = O handleTaskAdded
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
