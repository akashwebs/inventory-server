const Brand = require("../models/brands.model");

exports.createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};
exports.getBrandsService = async (data) => {
  const result = await Brand.find({}).populate("products");
  return result;

  // .select("-products -suppliers")
};
exports.getBrandsByIdService = async (id) => {
  const result = await Brand.findOne({ _id: id });
  return result;
};
exports.updateBrandService = async (id, data) => {
  const result = await Brand.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
