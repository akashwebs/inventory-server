const express = require("express");
const router = express.Router();
const brandController = require("../controller/brand.controller");

router
  .route("/")
  .get(brandController.getAllBrand)
  .post(brandController.createBrand);

router.route("/:id").get(brandController.getBrandById).patch(brandController.updateBrand);

module.exports = router;
