import { useTask } from "../../contexts/TaskContext";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
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
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
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
    <div className="scrollbar-hidden flex h-full w-full touch-manipulation flex-col items-center rounded-2xl">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <ul className="flex w-full flex-col gap-4">
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
