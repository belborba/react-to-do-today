import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useTask } from "../../contexts/TaskContext";
import { SortableTaskItem } from "../SortableTaskItem";

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

  const findIndexById = (id: string) =>
    tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = findIndexById(active.id as string);
      const newIndex = findIndexById(over.id as string);
      reorderTasks(oldIndex, newIndex);
    }
  };

  return (
    <div className="scrollbar-hide flex h-full w-full touch-manipulation flex-col items-center overflow-y-scroll rounded-2xl">
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
            {tasks.map(({ id, label, done }) => (
              <SortableTaskItem
                key={id}
                id={id}
                label={label}
                done={done}
                onToggle={() => toggleTask(id)}
                onDelete={() => deleteTask(id)}
              />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};
