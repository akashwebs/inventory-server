const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.route("/blunk-update").patch(productController.blunkUpdateProduct);
router.route("/bulk-delete").delete(productController.blunkDeleteController);

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .patch(productController.updateProduct)
  .delete(productController.deleteProductByIdController);

module.exports = router;
