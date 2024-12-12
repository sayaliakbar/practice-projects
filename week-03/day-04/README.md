# TodoList App

## Description

The **TodoList App** is a simple React-based application that allows users to manage a list of tasks. It includes functionality to add, mark as completed, and delete tasks. The app is designed to demonstrate core React concepts like state management, event handling, and rendering dynamic content.

## Features

- Add new tasks to the list.
- Mark tasks as completed.
- Delete individual tasks.
- Delete all completed tasks.
- Clear the entire task list.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **React Hooks**: Specifically `useState` for state management.
- **UUID**: Used to generate unique IDs for each task.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd todolist-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000/`.

## Usage

1. **Add a Task**: Type a task in the input field and click the **Add Task** button.
2. **Mark a Task as Completed**: Click the **Mark Done** button next to a task to strike through its text.
3. **Delete a Task**: Click the **Delete** button next to a task to remove it.
4. **Delete All Completed Tasks**: Click the **Delete Done** button to remove all tasks marked as completed.
5. **Clear All Tasks**: Click the **Delete All** button to remove all tasks from the list.

## Code Explanation

The application is structured as a functional component called `TodoList`.

- **State Management**:
  - `todos`: An array of task objects, each containing `task`, `id`, and `completed` properties.
  - `task`: A string representing the current input value.
- **Key Functions**:
  - `addTodos()`: Adds a new task to the list.
  - `updateTask()`: Updates the `task` state as the user types.
  - `deleteTask(id)`: Removes a specific task based on its unique ID.
  - `deleteAll()`: Clears all tasks from the list.
  - `markDone(id)`: Marks a specific task as completed.
  - `deleteDone()`: Removes all tasks that have been marked as completed.

## File Structure

```
├── src
│   ├── App.js         // Entry point of the application
│   ├── TodoList.js    // Main component for the TodoList
│   ├── index.js       // Renders the app to the DOM
└── package.json       // Project dependencies and scripts
```

## Future Improvements

- Add a feature to edit existing tasks.
- Implement local storage to persist tasks between sessions.
- Add filters to view only completed or incomplete tasks.
- Improve UI design using a CSS framework like Bootstrap or TailwindCSS.
