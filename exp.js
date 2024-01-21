const express = require("express");
const app = express();

app.get("/:fname?lname", (req, res) => {
  const data = req.params.fname; // Corrected typo here
  const data1 = req.params.lname;
  res.json(`name is ${data}${data1}`);
});

app.listen(7656, () => {
  console.log("app is running");
});
