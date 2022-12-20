const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const productRoutes = require("./routes/product.route");

app.use(express.json());
app.use(cors());

// product schema

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/product", productRoutes);

module.exports = app;
