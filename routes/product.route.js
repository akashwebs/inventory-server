const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controller/product.controller");
const uploader = require("../middleware/uploader");

router.post(
  "/file-upload",
  uploader.single("image"),
  productController.fileUpload
);
// ----------jodi multipale image upload korte cai, tobe uploader.array('image') amra j append kore ekta name dei, formdata er moddhe, etai image
//-------- route er moddhe, respone hisabe files hobe, jodi multiple hoy tachara, file hobe

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
