const express = require("express");
const router = express.Router();
const Deals = require("../models/bestDeals");
router.get("/:id", async (req, res) => {
  try {
    const getOne = await Deals.findById(req.params.id).lean().exec();
    console.log(getOne);

    res.render("individual", {
      getOne,
    });

    // res.send(getOne);
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
