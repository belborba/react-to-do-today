import { useTask } from "../../contexts/TaskContext";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";

import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

const SortableTaskItem = ({
  id,
  label,
  done,
  onToggle,
  onDelete,
}: {
  id: string;
  label: string;
  done: boolean;
  onToggle: () => void;
  onDelete: () => void;
}) => {
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
      className="w-full flex gap-4 justify-between items-center bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700"
    >
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          checked={done}
          className="accent-lime-300 rounded-md w-[24px] h-[24px]"
          onChange={onToggle}
        />
        <p className="inline p-2 text-zinc-50">{label}</p>
      </div>
      <img onClick={onDelete} src="./src/assets/icons/trash-icon.svg" />
    </li>
  );
};

export const TaskList = () => {
  const { tasks, reorderTasks, deleteTask, toggleTask } = useTask();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px de movimento antes de iniciar o drag
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      reorderTasks(oldIndex, newIndex);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-zinc-50/15 rounded-2xl p-4 overflow-y-scroll scrollbar-hidden">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="w-full flex flex-col gap-4">
            {tasks.map((item) => (
              <SortableTaskItem
                key={item.id}
                id={item.id}
                label={item.label}
                done={item.done}
                onToggle={() => toggleTask(item.id)}
                onDelete={() => deleteTask(item.id)}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};
