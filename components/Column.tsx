import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  id: string;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumns]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                className={`pb-2 p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <h2 className="flex justify-between font-bold text-lg p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-1 font-normal text-sm ">
                    {todos.length}
                  </span>
                </h2>
              </div>
            )}
          </Droppable>
          {/* droppable items */}
        </div>
      )}
    </Draggable>
  );
}

export default Column;
