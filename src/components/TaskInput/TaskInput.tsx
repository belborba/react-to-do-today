import { useState } from "react";
import { SquareButton } from "../SquareButton/SquareButton";

type Task = {
  id: number;
  label: string;
  done: boolean;
};

export const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");
  const [list, setList] = useState<Task[]>([
    { id: 1, label: "Comprar Bolo", done: false },
  ]);

  const handleAddTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: list.length + 1, //Geramos o id baseado na quantidade de itens que tem na lista
      label: taskInput,
      done: false,
    };

    setList((prevList) => [...prevList, newTask]); // setList([...list, newTask]
    setTaskInput("");
  };

  const handleDelete = (id: number) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  const handleToggle = (id: number) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
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

      <div className="w-full h-full flex flex-col items-center zinc-50/15 bg-zinc-50/15 rounded-2xl p-4 overflow-y-scroll scrollbar-hidden">
        <ul className="w-full flex flex-col gap-4">
          {list.map((item) => (
            <li
              key={item.id}
              className="w-full flex gap-4 justify-between items-center bg-zinc-800 p-4 rounded-2xl"
            >
              <div className="flex justify-start items-center">
                <input
                  type="checkbox"
                  className="accent-lime-300 rounded-md w-[24px] h-[24px] text-black color-gray-500"
                  onChange={() => handleToggle(item.id)}
                />
                <p className="inline p-2 text-zinc-50">{item.label}</p>
              </div>
              <img
                onClick={() => handleDelete(item.id)}
                src="./src/assets/icons/trash-icon.svg"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// onDelete -> Preciso saber qual item deletar, preciso mandar um parâmetro para a função para saber qual item deletar
// Quando clicar vai executar uma função deleteItem
