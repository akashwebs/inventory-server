const Brand = require("../models/brands.model");
const Product = require("../models/products.model");

exports.productService = async (fillters, queries) => {
  /*  const products = await Product.where("name")
    .equals(/\w/)
    .where("quantity")
    .gt(10)
    .limit(3); */

  //price[gte]=5&price[lte]=30&fields=name,price&sort=price&name=magno
  //{price:{$gte:5}, price:{$lte:30},name:'mango'}

  const products = await Product.find(fillters)
    .skip(queries.skipProduct)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields);

  const total = await Product.countDocuments(fillters);
  const page = Math.ceil(total / queries.limit);

  return { total, page, products };
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  const { _id: productId, brand } = product;

  const result = await Brand.updateOne(
    { _id: brand.id },
    { $push: { products: productId } }
  );

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

exports.blunkProductDeleteSerivice = async (ids) => {
  const result = await Product.deleteMany({ _id: ids });
  return result;
};
