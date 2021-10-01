const express = require("express");
const router = express.Router();
const Deals = require("../models/bestDeals");
const Cart = require("../models/products");
router.get("", async (req, res) => {
  try {
    const prod = await Deals.find().lean().exec();
    const products = await Cart.find().lean().exec();
    let sum = 0;
    let price = [];
    let newPrice = [];
    for (let i = 0; i < products.length; i++) {
      price.push(products[i].price.split(" "));
    }
    for (let i = 0; i < price.length; i++) {
      if (price[0][0] == "₹") {
        newPrice.push(parseInt(price[0][1]));
      }
    }
    for (let i = 0; i < newPrice.length; i++) {
      sum += newPrice[i];
    }

    res.render("home", {
      prod,
      products,
      sum,
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
