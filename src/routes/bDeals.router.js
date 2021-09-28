const express = require("express");
const router = express.Router();
const Deals = require("../models/bestDeals");
router.post("", async (req, res) => {
  const prod = await Deals.create(req.body);
  res.send(prod);
});




router.get("/", async (req, res) => {
  const prods = await Deals.find().lean().exec();

 return  res.render("home", {
    prods,
  });
});

module.exports = router;
