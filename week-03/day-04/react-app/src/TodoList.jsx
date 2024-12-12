import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// This is the main functional component for the TodoList app.
export default function TodoList() {
  // State variable `todos` holds the list of tasks, and `setTodos` is used to update it.
  let [todos, setTodos] = useState([]);

  // State variable `task` holds the current value of the input field (new task to add).
  // `addTask` is the setter function to update the `task`.
  let [task, addTask] = useState("");

  /**
   * Function to add the current `task` to the `todos` list.
   * - Checks if `task` is empty. If empty, it exits early.
   * - Creates a new todo object with:
   *   - `task`: The input value from the user.
   *   - `id`: A unique identifier generated using `uuidv4`.
   *   - `completed`: A boolean indicating whether the task is completed (default is `false`).
   * - Updates the `todos` state with the new list.
   * - Clears the input field by resetting `task` to an empty string.
   */
  let addTodos = () => {
    if (!task) {
      return null; // Prevent adding an empty task.
    }

    setTodos([...todos, { task, id: uuidv4(), completed: false }]);
    addTask(""); // Clears the input field.
  };

  /**
   * Function to handle updates to the `task` state as the user types in the input field.
   * - Uses the `event` object to get the value of the input field.
   * - Updates the `task` state with the new input value.
   */
  let updateTask = (event) => {
    addTask(() => event.target.value); // Update the task value dynamically.
  };

  /**
   * Function to delete a specific task from the `todos` list based on its unique `id`.
   * - Filters out the task with the matching `id` and updates the state.
   */
  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  /**
   * Function to delete all tasks from the `todos` list.
   * - Resets the `todos` state to an empty array.
   */
  let deleteAll = () => {
    setTodos([]);
  };

  /**
   * Function to mark a task as completed.
   * - Finds the task with the matching `id` and updates its `completed` status to `true`.
   * - Creates a new list with updated task statuses and sets it as the new state.
   */
  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: true }; // Update the task to completed.
        } else {
          return todo; // Leave other tasks unchanged.
        }
      })
    );
  };

  /**
   * Function to delete all tasks that have been marked as completed.
   * - Filters out tasks where `completed` is `true` and updates the state.
   */
  let deleteDone = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed != true));
  };

  // The UI structure of the TodoList app.
  return (
    <div>
      <h1>TodoList App</h1>
      {/* Input field for typing a new task */}
      <input
        value={task} // Binds the input field to the `task` state.
        type="text"
        placeholder="Write your todos..." // Placeholder text displayed when input is empty.
        onChange={updateTask} // Calls `updateTask` on input change to update the `task` state.
      />
      {/* Button to add the current task to the todos list */}
      <button onClick={addTodos}>Add Task</button>

      {/* Unordered list displaying all tasks in the `todos` array */}
      <ul>
        {todos.map((todo) => (
          // Renders each todo as a list item. Adding `key` helps React identify unique items.
          <li
            key={todo.id} // Unique key for each task.
            style={todo.completed ? { textDecoration: "line-through" } : {}} // Strikes through the text if the task is completed.
          >
            {todo.task}
            {/* Button to delete a specific task */}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>

            {/* Button to mark a task as completed */}
            <button onClick={() => markDone(todo.id)}>Mark Done</button>
          </li>
        ))}
      </ul>

      {/* Button to delete all completed tasks */}
      <button onClick={deleteDone}>Delete Done</button>

      {/* Button to delete all tasks */}
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
}
