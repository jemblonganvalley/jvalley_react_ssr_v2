const express = require("express");
const cors = require("cors");
const hbs = require("express-handlebars");
const app = express();
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "../build"));
app.set("view engine", "html");
app.engine(
  "html",
  hbs({
    layoutsDir: path.join(__dirname, "../layouts"),
    defaultLayout: "main.html",
  })
);

//jangan namakan file pada build dengan nama index
app.get("/gallery", (req, res) => {
  res.render("main", {
    title: "gallery",
    meta_description: "gallery pada web kami",
  });
});

app.get("/home", (req, res) => {
  res.render("main", {
    title: "home",
    meta_description: "selamat datang di web kami",
  });
});

app.get("/about", (req, res) => {
  res.render("main", {
    title: "about",
    meta_description: "tentang kami",
  });
});

app.get("/", (req, res) => {
  res.render("main", {
    title: "home",
    meta_description: "selamat datang di web kami",
    root: `<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatibus soluta itaque ratione tenetur ducimus ex, quos quam impedit dolore placeat consequatur necessitatibus rem aliquid porro. Nobis porro rerum nam.</p>`,
  });
});

app.listen(8000, () => {
  console.log("listen port 8000");
});
