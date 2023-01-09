const express = require("express");
const router = express.Router();
const storeController = require("../controller/store.controller");

router
  .route("/")
  .get(storeController.getAllStore)
  .post(storeController.createStore);
router
  .route("/:id")
  .get(storeController.getStoreById)
  .patch(storeController.updateStore);

module.exports = router;
