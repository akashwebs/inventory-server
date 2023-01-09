const User = require("../models/user.model");

exports.createSignUpService = async (data) => {
  const result = await User.create(data);
  return result;
};
exports.getUserService = async () => {
  const result = await User.find({});
  return result;

  // .select("-products -suppliers")
};

exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};
