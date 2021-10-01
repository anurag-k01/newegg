const PORT = 3000;
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();
const connect = () => {
  return mongoose.connect(
    "mongodb+srv://dbAnurag:anurag321@backendwithfrontend.yedoc.mongodb.net/newegg?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  );
};
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(bodyparser.urlencoded({ extended: true }));
const prod_model = require("./models/bestDeals.js");
const homePage = require("./routes/homepage.router");
const homepage_prod_control = require("./routes/bDeals.router");
const individualPage = require("./routes/individual");
const userController = require("./routes/user.router");
const productController = require("./routes/products.router");
//assets
app.use("/css", express.static(path.resolve(__dirname, "./assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "./assets/img")));
app.use(
  "/scripts",
  express.static(path.resolve(__dirname, "./assets/scripts"))
);
app.use(
  "/includes",
  express.static(path.resolve(__dirname, "./views/includes"))
);

app.use("/global/in-en/", homePage); //this is working

app.use("", individualPage);
app.use("/global/in-en/", userController);
app.use("/global/in-en/shop", productController);

app.listen(PORT, async function () {
  await connect();
  console.log(`Server is running on http://localhost:${PORT}/global/in-en/`);
});
