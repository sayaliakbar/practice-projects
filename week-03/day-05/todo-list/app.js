const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let newTask = [];
app.post("/", (req, res) => {
  newTask.push(req.body.newTask);
  res.redirect("/");
});

app.get("/", (req, res) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-Us", options);

  res.render("list", { kindOfDay: day, newTaskList: newTask });
});

app.listen(8080, () => console.log("port is running at server 8080"));
