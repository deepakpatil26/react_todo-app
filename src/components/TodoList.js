import React, { useState } from "react";

function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  const [editId, setEditId] = useState(null); // Track which task is being edited
  const [newName, setNewName] = useState(""); // Hold the new task name

  const isOverdue = (dueDate) =>
    dueDate && new Date(dueDate) < new Date() && !tasks.completed;

  const handleEditSubmit = (id) => {
    editTask(id, newName);
    setEditId(null); // Exit editing mode
    setNewName(""); // Clear the input
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={isOverdue(task.dueDate) ? "overdue" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {editId === task.id ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button
                onClick={() => handleEditSubmit(task.id)}
                className="save"
              >
                Save
              </button>
              <button onClick={() => setEditId(null)} className="cancel">
                Cancel
              </button>
            </>
          ) : (
            <>
              <span>
                {task.name} ({task.priority}){" "}
                {task.dueDate && <small>Due: {task.dueDate}</small>}
              </span>
              <button
                onClick={() => {
                  setEditId(task.id);
                  setNewName(task.name);
                }}
                className="edit"
              >
                Edit
              </button>
            </>
          )}
          <button onClick={() => deleteTask(task.id)} className="delete">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
