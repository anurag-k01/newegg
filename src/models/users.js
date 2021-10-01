// phele users bananan h
// users ke ander reference rahega cart

const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  mobile: { type: Number, required: true },
  cart: [{ type: String, required: false }],
});
const Users = mongoose.model("user", usersSchema);

module.exports = Users;
