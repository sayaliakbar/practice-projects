const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");

const initialisePassport = require("./passport-config");

// initialisePassport(passport);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

let users = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "World" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/login", (req, res) => {
  res.send("Login successful");
});

app.post("/register", (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (error) {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(3000);
