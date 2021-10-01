const mongoose = require("mongoose");
const cart = new mongoose.Schema({
  prod_name: { type: String, required: true },
  price: { type: String, required: true },
  discount: { type: String, required: true },
  prod_img: { type: String, required: true },
});
const Cart = mongoose.model("cart", cart);

module.exports = Cart;
