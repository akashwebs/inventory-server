const {
  createCategoryService,
  getAllCategoryService,
  getCategoryByIdService,
  updateCategoryService,
} = require("../service/category.service");

exports.createCategory = async (req, res, next) => {
  try {
    const category = await createCategoryService(req.body);
    res.status(200).json({
      status: "success",
      message: "category created",
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create category",
      error: err.message,
    });
  }
};
exports.getAllCategory = async (req, res, next) => {
  try {
    const category = await getAllCategoryService();
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't get category",
      error: err.message,
    });
  }
};
exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await getCategoryByIdService(id);
    if (!category) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't find category by id",
      });
    }
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't find category",
      error: err.message,
    });
  }
};
exports.updateCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateCategoryService(id, req.body);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update category by id",
      });
    }
    res.status(200).json({
      status: "success",
      message: "category updated",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't update category",
      error: err.message,
    });
  }
};
