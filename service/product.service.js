const Product = require("../models/products.model");

exports.productService = async () => {
  const products = await Product.where("name")
    .equals(/\w/)
    .where("quantity")
    .gt(10)
    .limit(3);
  return products;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};
