require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/user");
const app = express();
var cors = require("cors");
app.use(cors());
const connectDB = require("./db/conn");
const treeroutes = require("./routes/tree");

const mailRoute = require("./routes/mail");

app.set("view engine", "ejs");

connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// Serving files

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});
app.get("/tree", (req, res) => {
  res.sendFile(__dirname + "/public/tree_tag.html");
});

// app.use("/user" , userroutes)
app.use("/tree", treeroutes);
// Roles if we have to distinguish between user and admin but i haven't thought yet how and where should we set a normal user to admin

// Home page
app.use("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});
app.use("/home", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use("/auth", require("./routes/auth"));
app.use("/event", require("./routes/event"));
app.use("/v1", mailRoute);

app.get("/not", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(3000, function () {
  console.log("Server started at port 3000");
});

// const express = require("express");

// const app = express();

// app.use("/" , (req,res) => {
//     console.log(req.body);
//     res.send("HI");
// })

// app.listen(3000, function () {
//     console.log("Server started at port 3000");
// })
