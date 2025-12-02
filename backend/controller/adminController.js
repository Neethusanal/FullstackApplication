import productModel from "../model/ProductModel.js";

export const addProducts = async (req, res) => {
  try {
    console.log(req.body);

    const {
      productName,
      productCode,
      price,
      description,
      category,
      stockQuantity,
      images,
    } = req.body;

    await productModel.create({
      productName,
      productCode,
      price,
      description,
      category,
      stockQuantity,
      images,
    });

    res.status(200).json({
      message: "successfully added new product",
      success: true,
    });
  } catch (err) {
    res.status(400).json({ status: "error", message: err.message });
  }
};
