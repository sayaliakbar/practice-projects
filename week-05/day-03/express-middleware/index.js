const express = require("express");

const app = express();

// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

function middleware1(req, res, next) {
  console.log("I'm middleware 1");

  next();
}

function errorHandler(err, req, res, next) {
  res.status(500).send("An error occurred");
  next();
}

app.use(middleware2);
app.use(middleware1);

function middleware2(req, res, next) {
  console.log("I'm middleware 2");
  next();
}

// function standardExpressCallback(
//   requestObject,
//   responseObject,
//   nextMiddleware
// ) {}

function middleware3(req, res, next) {
  console.log("I'm middleware 3");
  next();
}

app.get("/", middleware3, (req, res, next) => {
  console.log("I'm a standard express callback");
  res.send("This is home!");
  next();
});

app.use(middleware4);

function middleware4(req, res, next) {
  console.log("I'm middleware 4");
  next();
}

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
