import uuid from "react-uuid";
import { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTaskInput, setNewTaskInput] = useState("");

  const addTask = (input) => {
    let updatedTasksArray = [
      ...tasks,
      { id: uuid(), task: input, complete: false },
    ];
    setTasks(updatedTasksArray);
  };

  const handleChange = (e) => {
    setNewTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskInput);
    setNewTaskInput("");
  };

  function handleDeleteClick(id) {
    const updatedTasksArray = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(updatedTasksArray);
  }

  return (
    <div>
      <div className="task-input-container">
        <form className="new-task-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your new task here..."
            value={newTaskInput}
            onChange={handleChange}
          />
          <button type="submit">
            <svg
              id="add-task"
              xmlns="http://www.w3.org/2000/svg"
              width="5%"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        </form>
      </div>
      <div class="task-container">
        <ul class="task-list">
          {tasks.map((taskValue) => (
            <li key={taskValue.id}>
              {taskValue.task}
              <button onClick={() => handleDeleteClick(taskValue.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
