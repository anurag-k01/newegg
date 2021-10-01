const express = require("express");
const router = express.Router();
router.get("/sucess", (req, res) => {
  res.render("final");
});
module.exports = router;
