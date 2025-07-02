import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from "../../assets/icons/trash-icon.svg?react";

interface SortableTaskItemProps {
  id: string;
  label: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const SortableTaskItem = ({
  id,
  label,
  done,
  onToggle,
  onDelete,
}: SortableTaskItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="w-full flex gap-4 justify-between items-center dark:bg-zinc-700 dark:hover:bg-zinc-700 bg-zinc-50/70 hover:bg-zinc-50 p-4 rounded-2xl"
    >
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          checked={done}
          className="dark:accent-violet-400 accent-zinc-800 rounded-md w-[24px] h-[24px]"
          onChange={onToggle}
        />
        <p className="dark:text-zinc-50 text-zinc-800 rounded-2xl inline pl-4">
          {label}
        </p>
      </div>
      <DeleteIcon className="hover:cursor-pointer" onClick={onDelete} />
    </li>
  );
};
