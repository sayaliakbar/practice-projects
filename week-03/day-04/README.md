# TodoList App

A simple, React-based TodoList application that allows users to manage their daily tasks efficiently. The app leverages React's state management and lifecycle methods for dynamic and interactive task handling. It also persists tasks in the browser's `localStorage`, ensuring data retention across sessions.

## Features

- Add new tasks to the list.
- Mark tasks as completed.
- Delete specific tasks.
- Clear all tasks.
- Delete all completed tasks.
- Persistent storage using `localStorage`.

## Technologies Used

- **React**: Functional components, hooks (`useState`, `useEffect`).
- **UUID**: For generating unique IDs for tasks.
- **HTML/CSS**: Basic structure and styling.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
.
├── src
│   ├── App.jsx       # Entry point for the app.
│   ├── main.jsx      # Renders the app to the DOM.
│   └── TodoList.jsx  # Main TodoList component.
├── index.html        # HTML template.
├── package.json      # Project dependencies and scripts.
└── README.md         # Project documentation.
```

## Component Overview

### `TodoList`

- **Purpose**: The main component of the app.
- **Key Features**:
  - Manages state for tasks using `useState`.
  - Handles task addition, deletion, and completion.
  - Syncs tasks with `localStorage` using `useEffect`.

### Hooks Used

- `useState`: Manages the state of tasks (`todos`) and the input field (`task`).
- `useEffect`: Handles side effects like loading tasks from and saving tasks to `localStorage`.

## How to Use

1. **Add a Task**:

   - Type a task in the input field and click **Add Task**.
   - The task will appear in the list below.

2. **Mark a Task as Completed**:

   - Click **Mark Done** next to a task to mark it as completed.
   - Completed tasks will be displayed with a strikethrough.

3. **Delete a Task**:

   - Click **Delete** next to a task to remove it from the list.

4. **Delete All Completed Tasks**:

   - Click **Delete Done** to remove all tasks marked as completed.

5. **Delete All Tasks**:
   - Click **Delete All** to clear the entire list.

## Future Enhancements

- Add the ability to edit tasks.
- Add task categories or priorities.
- Improve UI/UX with advanced styling and animations.
- Implement a backend for task storage and user authentication.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [UUID Documentation](https://www.npmjs.com/package/uuid)
