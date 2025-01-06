const path = require("path");
// Definition: Server file for the transaction tracker app.

//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
const express = require("express");

//dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
const dotenv = require("dotenv");

//colors is a Node.js library for CLI output styling using ANSI colors.
const colors = require("colors");

//morgan is a HTTP request logger middleware for Node.js.
//It is a middleware that logs the HTTP requests to the console.
const morgan = require("morgan");

const cors = require("cors");

//mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
const connectDB = require("./config/database");

//Load env vars from config file using dotenv module
dotenv.config({ path: "./config/config.env" });

//Connect to database using connectDB function from database.js file
connectDB();

//Routes file for transactions
const transactions = require("./routes/transaction");

//Create an instance of express
const app = express();
// app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Body parser middleware
app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"))
  );
}

// PORT is equal to the port number in the environment variable or 5000
const PORT = process.env.PORT || 5000;

//app.listen() method creates a server and listens on the specified port and hostname.
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.white.bold
      .italic.bgRed
  )
);
