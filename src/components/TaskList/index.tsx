import { useState } from "react";

export const TaskList = () => {
  const [list, setList] = useState<Task[]>([
    { id: "3729183721", label: "Comprar Bolo", done: false },
  ]);

  const handleDelete = (id: string) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  const handleToggle = (id: string) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
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
              <p className="inline p-2 text-zinc-50">
                {item.label} {item.id}
              </p>
            </div>
            <img
              onClick={() => handleDelete(item.id)}
              src="./src/assets/icons/trash-icon.svg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// onDelete -> Preciso saber qual item deletar, preciso mandar um parâmetro para a função para saber qual item deletar
// Quando clicar vai executar uma função deleteItem
