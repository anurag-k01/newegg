const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/newegg", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};
app.use(express.json())
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(bodyparser.urlencoded({ extended: true }));
const prod_model = require("./models/bestDeals.js")
const homepage_prod_control = require("./routes/bDeals.router")

//assets
app.use("/css", express.static(path.resolve(__dirname, "./assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "./assets/img")));
app.use(
  "/scripts",
  express.static(path.resolve(__dirname, "./assets/scripts"))
);
app.use("/best",homepage_prod_control)
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(PORT, async function () {
  await connect();
  console.log(`Server is running on http://localhost:${PORT}`);
});
