// Source:
import express from "express";
// Import body-parser
import bodyParser from "body-parser";
// Import the usersRoutes
import usersRoutes from "./routes/users.js";

// Create an express app
const app = express();
// Define the port
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());

app.use("/users", usersRoutes);

// Routes
app.get("/users", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
