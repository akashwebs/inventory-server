const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category.controller");

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategory);
router
  .route("/:id")
  .get(categoryController.getCategoryById)
  .patch(categoryController.updateCategory);

module.exports = router;
