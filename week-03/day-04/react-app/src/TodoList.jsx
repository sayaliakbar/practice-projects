import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// This is the main functional component for the TodoList app.
export default function TodoList() {
  // State variable `todos` holds the list of tasks, and `setTodos` is used to update it.
  let [todos, setTodos] = useState([]);

  // State variable `task` holds the current value of the input field (new task to add).
  // `addTask` is the setter function to update the `task`.
  let [task, addTask] = useState("");

  // Function to add the current `task` to the `todos` list.
  // It creates a new array with the existing todos and appends the new task.
  // After adding, it clears the input field by resetting `task` to an empty string.
  let addTodos = () => {
    if (!task) {
      return null;
    }

    setTodos([...todos, { task, id: uuidv4(), completed: false }]);
    // Logs the updated todos list to the console.
    addTask(""); // Clears the input field.
  };

  // Function to update the `task` state with the value typed in the input field.
  // It uses the `event` object to get the current input value.
  let updateTask = (event) => {
    addTask(() => event.target.value); // Updates the `task` with the new input value.
    // Logs the current task value for debugging purposes.
  };
  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  let deleteAll = () => {
    setTodos([]);
  };

  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      })
    );
  };

  let deleteDone = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.completed != true));
  };

  // The UI structure of the TodoList app.
  return (
    <div>
      <h1>TodoList App</h1>
      {/* Input field for typing a new task. */}
      <input
        value={task} // Binds the input field to the `task` state.
        type="text"
        placeholder="Write your todos..." // Placeholder text displayed when input is empty.
        onChange={updateTask} // Calls `updateTask` on input change to update the `task` state.
      />
      {/* Button to add the current task to the todos list. */}
      <button onClick={addTodos}>Add Task</button>

      {/* Unordered list displaying all tasks in the `todos` array. */}
      <ul>
        {todos.map((todo) => (
          // Renders each todo as a list item. Adding `key` helps React identify unique items.
          <li
            key={todo.id}
            style={todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.task}
            <button onClick={() => deleteTask(todo.id)}>Delete</button>

            <button onClick={() => markDone(todo.id)}>Mark Done</button>
          </li>
        ))}
      </ul>
      <button onClick={deleteDone}>Delete Done</button>
      <button onClick={deleteAll}>Delete All</button>
    </div>
  );
}
