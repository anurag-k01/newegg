const express = require("express");
const router = express.Router();

const Cart = require("../models/products");
router.post("/cart/", async (req, res) => {
  try {
    const product = await Cart.create(req.body);
    res.send(product);
  } catch (err) {
    console.log(err);
  }
});

router.get("/cart/", async (req, res) => {
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

  res.render("cart", {
    products,
    sum,
  });
});

module.exports = router;
