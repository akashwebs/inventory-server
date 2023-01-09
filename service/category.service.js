const Category = require("../models/Category.model");

exports.createCategoryService = async (data) => {
  const category = await Category.create(data);
  return category;
};
exports.getAllCategoryService = async () => {
  const category = await Category.find({});
  return category;
};
exports.getCategoryByIdService = async (id) => {
  const category = await Category.find({ _id: id });
  return category;
};
exports.updateCategoryService = async (id, data) => {
  const category = await Category.find({ _id: id }, data, {
    runValidators: true,
  });
  return category;
};
