import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos"; // Key for storing todos in localStorage.

/**
 * Main functional component for the TodoList app.
 * Handles state, logic, and rendering of the app.
 */
export default function TodoList() {
  // State to manage the list of todos.
  let [todos, setTodos] = useState([]);

  // State to manage the value of the input field for adding a new task.
  let [task, addTask] = useState("");

  /**
   * Loads todos from localStorage when the component is first rendered.
   * Runs only once because of the empty dependency array `[]`.
   */
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos); // Update state with stored todos if they exist.
  }, []);

  /**
   * Saves the current state of todos to localStorage whenever `todos` changes.
   */
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /**
   * Adds a new task to the todos list.
   * - Prevents adding empty tasks.
   * - Generates a unique ID for the task.
   * - Marks the task as not completed initially.
   * - Clears the input field after adding the task.
   */
  let addTodos = () => {
    if (!task) return; // Do nothing if the task input is empty.
    setTodos([...todos, { task, id: uuidv4(), completed: false }]);
    addTask(""); // Resets the input field.
  };

  /**
   * Updates the `task` state with the value entered in the input field.
   * Triggered whenever the user types in the input field.
   */
  let updateTask = (event) => {
    addTask(event.target.value); // Dynamically update the `task` state.
  };

  /**
   * Deletes a specific task from the todos list based on its ID.
   * - Filters out the task with the matching ID.
   */
  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  /**
   * Clears all tasks from the todos list.
   */
  let deleteAll = () => {
    setTodos([]); // Reset todos to an empty array.
  };

  /**
   * Marks a specific task as completed based on its ID.
   * - Updates the `completed` status to `true` for the matching task.
   */
  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  /**
   * Deletes all tasks that have been marked as completed.
   */
  let deleteDone = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Render the UI for the TodoList app.
  return (
    <div>
      <h1>TodoList App</h1>
      {/* Input field for entering new tasks */}
      <input
        value={task} // Controlled input tied to the `task` state.
        type="text"
        placeholder="Write your todos..." // Placeholder text.
        onChange={updateTask} // Handle input changes.
      />
      {/* Button to add a new task */}
      <button onClick={addTodos}>Add Task</button>

      {/* List of tasks */}
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id} // Unique key for each task.
            style={todo.completed ? { textDecoration: "line-through" } : {}} // Apply strikethrough style for completed tasks.
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
