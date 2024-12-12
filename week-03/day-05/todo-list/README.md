# Todo List Web Application

A simple Todo List web application built using Node.js, Express, and EJS. This app allows users to add tasks and view their list of tasks along with the current date.

## Features

- Add tasks dynamically via a form.
- View a list of tasks.
- Displays the current date in a readable format.

## Technologies Used

- **Node.js**: Backend framework.
- **Express**: Web application framework for Node.js.
- **EJS**: Template engine for rendering dynamic HTML.
- **Body-Parser**: Middleware for handling form submissions.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-list-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Open your web browser and navigate to:

   ```
   http://localhost:8080
   ```

3. Add tasks using the form on the page. Your tasks will appear in the list below the date.

## Project Structure

```
todo-list-app/
├── views/
│   └── list.ejs          # EJS template for rendering the todo list
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
├── README.md             # Documentation file
```

## Contributing

Feel free to fork this repository, submit pull requests, or report issues to help improve this project.
