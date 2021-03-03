const cors = require("cors");
const express = require("express");
const { items } = require("./src/routes");

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server start in ${process.env.PORT || 3001} port`);
});

app.use("/items", items);
