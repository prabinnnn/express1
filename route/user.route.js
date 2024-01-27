const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "hello from prabin" });
});
router.post("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new ERROR("something is missing");
    res.json({ msg: "hello from prabin" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
