const Product = require("../models/products.model");

exports.productService = async () => {
  /*  const products = await Product.where("name")
    .equals(/\w/)
    .where("quantity")
    .gt(10)
    .limit(3); */

  const products = await Product.find({});

  return products;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

exports.updateProductService = async (productId, body) => {
  const result = await Product.updateOne(
    { _id: productId },
    { $inc: body },
    {
      runValidators: true,
    }
  );

  /*   const product = await Product.findById(productId);
  const result = await product.set(body).save(); */

  return result;
};

exports.blunkUpdateProductService = async (data) => {
  /*   const product = await Product.updateMany({ _id: data.ids }, data.data, {
    runValidators: true,
  }); */
  console.log(data);

  const products = [];

  data.ids.forEach((product) => {
    products.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = await Promise.all(products);

  return result;
};

exports.deleteProductByIdService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
