const mongoose = require('mongoose');
const bestDeals = new mongoose.Schema({
  prod_name: { type: String, required: true },
  price: { type: String, required: true },
    discount: { type: String, required: true },
  prod_img:{type:String,required: true}
});
const Bestdeal = mongoose.model("bestdeal", bestDeals);

module.exports = Bestdeal;