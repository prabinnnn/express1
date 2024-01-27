const router = require("express").Router();
const user = require("./user.route");
router.use("/user", user);
router.get("/", (req, res) => {
  res.json({ msg: "hello from prabin" });
});
module.exports = router;
