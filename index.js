const express = require("express");
const cors = require("cors");

const app = express();
const port = 2000;
const data = {
  products: [
    {
      id: 1,
      category: "موبایل",
      brand: "شیاومی",
      price: 150000000,
      model: "x pro 52",
    },
    {
      id: 1,
      category: "موبایل",
      brand: "شیاومی",
      price: 150000000,
      model: "x pro 52",
    },
  ],
};

app.use(cors());

app.get("/data", (_req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is started at port ${port}`);
});
