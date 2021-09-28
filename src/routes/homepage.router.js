const express = require("express");
const router = express.Router();
const Deals = require("../models/bestDeals");
router.get("", async (req, res) => {
  try {
    const prod = await Deals.find().lean().exec();

    res.render("home", {
      prod,
    });
  } catch (err) {
    res.send(err);
  }
});
router.post("/add", async (req, res) => {
  try {
    const addProd = await Deals.create(req.body);
    res.send(addProd);
  } catch (er) {
    res.send(er);
  }
});

router.delete(":id", async (req, res) => {
  try {
    const deleteProd = await Deals.findByIdAndDelete(req.params.id);
    res.send(deleteProd);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
