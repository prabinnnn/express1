const express = require("express");
const app = express();
const indexodroute = require("../route");
app.use(express.json());
app.use("/", indexodroute);
app.use((req, next, res, err) => {
  const errmsg = err ? err.toString() : "something missing";
  res.status(500).json({ msg: Error });
});
app.get(3000, () => {
  console.log("app is runing");
});
