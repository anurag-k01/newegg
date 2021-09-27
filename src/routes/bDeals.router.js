const express = require("express");
const router = express.Router();
const Deals = require("../models/bestDeals");
router.post("", async (req, res) => {
  const prod = await Deals.create(req.body);
  res.send(prod);
});
router.get("/get", async (req, res) => {
  const prod = await Deals.create(req.body);
   res.render("../views/home.ejs", {
    prod: prod,
  });
});
module.exports = router;
