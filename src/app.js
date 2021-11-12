const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const hbs = require("hbs");
//public static path;
const path = require("path");
const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../template/partials");
const template_path = path.join(__dirname, "../template/views");
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.get("", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404", { errormsg: "404 Not Found" });
});
app.listen(port, function (err) {
  if (err) {
    console.log(`error is ${err}`);
  }
  console.log(`app is runing on port ${port}`);
});
