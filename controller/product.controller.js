const Product = require("../models/products.model");
const { checkProductById } = require("../service/common.service");
const {
  productService,
  createProductService,
  updateProductService,
  blunkUpdateProductService,
  deleteProductByIdService,
  blunkProductDeleteSerivice,
} = require("../service/product.service");

exports.getProducts = async (req, res, next) => {
  try {
    let fillters = { ...req.query };

    // { price: { $gt: 30 } }
    //{ price: { gt: '30' } }
    // gt,lt,gte,lte

    // make oparators from query

    const excludeField = ["limit", "page", "sort", "fields"];

    excludeField.forEach((field) => {
      delete fillters[field];
    });

    // make oparator from query
    let filterString = JSON.stringify(fillters);
    filterString = filterString.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );

    fillters = JSON.parse(filterString);

    // exclude fields query
    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const field = req.query.fields.split(",").join(" ");
      queries.fields = field;
    }

    if (req.query.page || req.query.limit) {
      const { page = 1, limit = 3 } = req.query;
      // page 1= 1 - 10
      // page 2= 11 - 20  skipe=10
      // page 3= 21 - 30  skipe=20
      // page 1= 1 - 10
      let skipProduct = (page - 1) * +limit;
      queries.skipProduct = skipProduct;
      queries.limit = +limit;
    }

    const result = await productService(fillters, queries);
    // const result = await Product.findById("63a09fdc2cd270a071ddfd0e");

    res.status(200).json({
      success: true,
      data: result,
      message: "product data",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
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
      status: "fail",
      error: "faild to add product",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateProductService(id, req.body);
    res.status(200).json({
      status: "success",
      messsage: "update product successfull",
      data: result,
    });
  } catch (error) {
    res.send({
      status: "fail",
      error: "faild to update product",
      error: error.message,
    });
  }
};

exports.blunkUpdateProduct = async (req, res, next) => {
  try {
    const result = await blunkUpdateProductService(req.body);
    res.status(200).json({
      status: "success",
      messsage: "update product successfull",
      data: result,
    });
  } catch (error) {
    res.send({
      status: "fail",
      error: "faild to update product",
      error: error.message,
    });
  }
};

exports.deleteProductByIdController = async (req, res, next) => {
  try {
    const checkIfIdAvailable = await checkProductById(req.params.id);
    if (checkIfIdAvailable) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't delete bcz dont find id",
      });
    }
    const result = await deleteProductByIdService(req.params.id);

    /*  if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't delete the product",
      });
    } */

    res.status(200).json({
      status: "success",
      messsage: "update product successfull",
      data: result,
    });
  } catch (error) {
    res.send({
      status: "fail",
      message: "faild to update product",
      error: error.message,
    });
  }
};

exports.blunkDeleteController = async (req, res, next) => {
  try {
    const result = await blunkProductDeleteSerivice(req.body.ids);
    res.status(200).json({
      status: "success",
      message: "blunk delete successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "failed to blunk delete",
      error: error.message,
    });
  }
};
