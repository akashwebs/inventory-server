const express = require("express");
const app = express();
const cors = require("cors");
const productRoutes = require("./routes/product.route");
const brandRoutes = require("./routes/brand.route");
const categoryRoutes = require("./routes/category.route");
const storeRoutes = require("./routes/store.route");
const userRoutes = require("./routes/user.route");

app.use(express.json());
app.use(cors());

// product schema

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/brand", brandRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/store", storeRoutes);
app.use("/api/v1/user", userRoutes);

module.exports = app;
