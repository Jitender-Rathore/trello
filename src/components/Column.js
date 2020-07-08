import React, { Component } from "react";
import { FaPlus, FaRegSave } from "react-icons/fa";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

export default class Column extends Component {
  render() {
    return (
      <div className="list">
        <h3 className="list-title">{this.props.column.title}</h3>

        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <ul className="list-items" ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <button className="add-card-btn btn">
          <FaPlus className="plus-icon"></FaPlus>Add another card
          <FaRegSave className="fa-save"></FaRegSave>
        </button>
      </div>
    );
  }
}
