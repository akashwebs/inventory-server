const Store = require("../models/Store.model");

exports.createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
};
exports.getAllStoreService = async () => {
  const result = await Store.find({});
  return result;
};
exports.getStoreByIdService = async (id) => {
  const result = await Store.findOne({ _id: id });
  return result;
};
exports.updateStoreService = async (id, data) => {
  const result = await Store.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
