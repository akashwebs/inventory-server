const {
  getBrandsService,
  createBrandService,
  getBrandsByIdService,
  updateBrandService,
} = require("../service/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const brand = await createBrandService(req.body);
    res.status(200).json({
      status: "success",
      message: "brand created",
      data: brand,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
exports.getAllBrand = async (req, res, next) => {
  try {
    const brand = await getBrandsService();
    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
exports.getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandsByIdService(id);
    if (!brand) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't find brand get by id",
      });
    }
    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
exports.updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(id, req.body);
    console.log(result);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't find brand get by id",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Brand Update Successfull",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "couldn't create brand",
      error: err.message,
    });
  }
};
