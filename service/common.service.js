const Product = require("../models/products.model");

exports.checkProductById = async (id) => {
  const result = await Product.findOne({ _id: id });
  if (!result.name) {
    return true;
  } else {
    return false;
  }
};
