const {
  getAllStoreService,
  createStoreService,
  updateStoreService,
  getStoreByIdService,
} = require("../service/store.service");

exports.createStore = async (req, res, next) => {
  try {
    const store = await createStoreService(req.body);
    res.status(200).json({
      status: "success",
      message: "store created",
      data: store,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create store",
      error: err.message,
    });
  }
};
exports.getAllStore = async (req, res, next) => {
  try {
    const store = await getAllStoreService();
    res.status(200).json({
      status: "success",
      data: store,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create store",
      error: err.message,
    });
  }
};
exports.getStoreById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const store = await getStoreByIdService(id);
    if (!store) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't find store get by id",
      });
    }
    res.status(200).json({
      status: "success",
      data: store,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
exports.updateStore = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateStoreService(id, req.body);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update store",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Brand Update successfully",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
