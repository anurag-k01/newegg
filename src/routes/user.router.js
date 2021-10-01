const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const Login = require("../models/login");
router.post("/auth/register", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.render("signup", {
      user,
    });
    return res.json({ status: "ok", data: user });
    console.log({ message: "Registration Success" });
  } catch (err) {
    res.json({ status: "error", error: error.message });
  }
});
router.get("/auth/login", async (req, res) => {
  const users = await Login.find({ email: req.body.email });

  if (users.length == 0) {
    res.json("").status(404);
  }
  res.send(users).render("signin", {
    users,
  });
});

// router.get("/user/useer", async (req, res) => {
//   const users = await Users.findOne({ username: useer }).lean().exec();
//   res.send(users);
// });
router.get("/signin", async (req, res) => {
  res.render("signin");
});
router.get("/signup", async (req, res) => {
  res.render("signup");
});
module.exports = router;
