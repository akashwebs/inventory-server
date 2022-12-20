const Product = require("../models/products.model");
const {
  productService,
  createProductService,
} = require("../service/product.service");

exports.getProducts = async (req, res, next) => {
  try {
    const result = await productService();
    // const result = await Product.findById("63a09fdc2cd270a071ddfd0e");

    res.status(200).json({
      success: true,
      data: result,
      message: "product data",
    });
  } catch (error) {
    res.status(400).json({
      success: "fail",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    // 2 away we can add data in database , SAVE and Create
    /*    const products = new Product(req.body);
    const result = await products.save(); */

    /*    const product = Product(req.body);
    product.anyCounter();
    const result = await product.save(); */

    const result = await createProductService(req.body);

    res.status(200).json({
      status: "success",
      message: "data inserte successfully",
      data: result,
    });
  } catch (error) {
    res.send({
      success: "fail",
      error: "faild to add product",
      error: error.message,
    });
  }
};
