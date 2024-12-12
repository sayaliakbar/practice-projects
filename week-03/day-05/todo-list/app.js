// Import required modules
const express = require("express"); // Web application framework for Node.js
const bodyParser = require("body-parser"); // Middleware for parsing incoming request bodies
const ejs = require("ejs"); // Template engine for rendering dynamic HTML

// Initialize the Express application
const app = express();

// Set the view engine to EJS for rendering dynamic pages
app.set("view engine", "ejs");

// Configure body-parser to handle URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Array to store tasks added by the user
let newTask = [];

// Handle POST requests to the root URL
// Adds a new task to the task list and redirects to the home page
app.post("/", (req, res) => {
  newTask.push(req.body.newTask); // Extract the task from the request body and add it to the array
  res.redirect("/"); // Redirect back to the home page to display the updated list
});

// Handle GET requests to the root URL
// Renders the "list" EJS template with the current date and task list
app.get("/", (req, res) => {
  // Format options for displaying the date
  let options = {
    weekday: "long", // e.g., "Monday"
    year: "numeric", // e.g., "2024"
    month: "long", // e.g., "December"
    day: "numeric", // e.g., "12"
  };

  // Get today's date and format it as a string
  let today = new Date();
  let day = today.toLocaleDateString("en-Us", options);

  // Render the "list" template and pass the formatted date and task list to it
  res.render("list", { kindOfDay: day, newTaskList: newTask });
});

// Start the server and listen on port 8080
app.listen(8080, () => console.log("Server is running on port 8080"));
