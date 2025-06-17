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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableTaskItem } from "../SortableTaskItem/SortableTaskItem";

export const TaskList = () => {
  const { tasks, reorderTasks, deleteTask, toggleTask } = useTask();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
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
    <div className="w-full h-full flex flex-col items-center rounded-2xl overflow-y-scroll scrollbar-hidden">
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
