const express = require("express");
const app = express();;

app.set("view engine", "ejs");
app.set("views", "./public/views");
app.use(express.static("./public"));

app.get("/", (req, res) => { res.render("home") });

module.exports = app;