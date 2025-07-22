import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from "@/assets/icons/trash-icon.svg?react";

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
      style={{
        touchAction: "manipulation",
        ...style,
      }}
      {...listeners}
      {...attributes}
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-zinc-50/70 p-4 hover:bg-zinc-50 dark:bg-zinc-700 dark:hover:bg-zinc-700"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={done}
          onClick={(e) => e.stopPropagation()}
          className="h-[24px] w-[24px] rounded-md accent-zinc-800 dark:accent-violet-400"
          onChange={onToggle}
        />
        <p className="inline rounded-2xl pl-4 text-zinc-800 dark:text-zinc-50">
          {label}
        </p>
      </div>
      <DeleteIcon onClick={onDelete} />
    </li>
  );
};
