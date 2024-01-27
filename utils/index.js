const express = require("express");
const app = express();
const indexodroute = require("../route");
app.use(body.params);
app.use("/", indexodroute);
app.get(3000, () => {
  console.log("app is runing");
});
