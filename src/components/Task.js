import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {props.task.content}
        </li>
      )}
    </Draggable>
  );
}

export default Task;
