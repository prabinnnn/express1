const router = require("express").Router();
const user = require("./user.route");
const indexuser = "/api/v1";
router.get("/", (req, res) => {
  res.json({ msg: "hello from prabin" });
});
router.use(`${indexuser}`, user);
module.exports = router;
