"use client";

import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* droppable items */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
